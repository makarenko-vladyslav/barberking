"use client";

/**
 * Motion primitives shipped into every generated site.
 *
 * The generator used to re-derive motion in every section, and re-derived it
 * differently each time: reveals that re-fire on scroll-back, a stagger wired
 * to the wrong parent, parallax that ignores prefers-reduced-motion. Those are
 * not creative choices — they are plumbing, and plumbing written once is
 * plumbing written correctly.
 *
 * The numbers here are chosen, not guessed. Compose these; do not hand-roll
 * `initial/animate` next to them, and do not restate the timings inline.
 */

import { motion, useReducedMotion, useScroll, useTransform, type Variants } from "framer-motion";
import { useRef, type ReactNode } from "react";

/** Fast out of the gate, long settle — reads as engineered rather than bouncy. */
const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

/**
 * One in-view contract for the whole site.
 *
 * `once` matters: a reveal that replays on every scroll-back reads as a glitch.
 *
 * The other two numbers were wrong and cost real damage. `amount: 0.25` waits
 * for a QUARTER OF THE ELEMENT to be visible — on a phone a section is often
 * taller than four viewports, so a quarter of it can never fit on screen and the
 * condition is never met. The content then stays at opacity 0 forever and the
 * visitor sees a blank screen where a section should be. A negative bottom
 * margin made it worse by shrinking the trigger box further, so even sections
 * that did fire only started after half a screen of scrolling.
 *
 * Now: fire as soon as ANY part appears, and start 15% before it reaches the
 * viewport, so the movement is already settling when the visitor gets there.
 */
const VIEWPORT = { once: true, amount: "some", margin: "0px 0px 15% 0px" } as const;

/** Semantic tags a section actually needs — animation must not force a `div`. */
type Tag =
  | "div" | "section" | "article" | "header" | "footer" | "aside"
  | "ul" | "li" | "figure" | "h1" | "h2" | "h3" | "p" | "span";

interface MotionBoxProps {
  children: ReactNode;
  as?: Tag;
  className?: string;
}

interface RevealProps extends MotionBoxProps {
  /** Seconds before this element starts. For deliberate sequencing — not for faking a stagger. */
  delay?: number;
  /** Travel in px. 24-40 reads as intent; much more reads as a slide deck. */
  y?: number;
}

/**
 * Fade-and-rise as the element enters the viewport. The default entrance for
 * anything that is not a list — headings, images, panels, whole sections.
 */
export function Reveal({ children, delay = 0, y = 32, as = "div", className }: RevealProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    const Plain = as;
    return <Plain className={className}>{children}</Plain>;
  }

  const Animated = motion[as] as typeof motion.div;
  return (
    <Animated
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.55, ease: EASE_OUT, delay }}
    >
      {children}
    </Animated>
  );
}

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE_OUT } },
};

/**
 * Reveals children one after another. Wrap the list, then wrap each child in
 * `<StaggerItem>` — the delay is derived from position, so no child carries a
 * hand-counted `delay`.
 */
export function Stagger({ children, as = "div", className }: MotionBoxProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    const Plain = as;
    return <Plain className={className}>{children}</Plain>;
  }

  const Animated = motion[as] as typeof motion.div;
  return (
    <Animated
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      variants={containerVariants}
    >
      {children}
    </Animated>
  );
}

/** A single child of `<Stagger>`. Inert on its own — it inherits the parent's timing. */
export function StaggerItem({ children, as = "div", className }: MotionBoxProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    const Plain = as;
    return <Plain className={className}>{children}</Plain>;
  }

  const Animated = motion[as] as typeof motion.div;
  return (
    <Animated className={className} variants={itemVariants}>
      {children}
    </Animated>
  );
}

const wordVariants: Variants = {
  hidden: { y: "110%" },
  show: { y: "0%", transition: { duration: 0.7, ease: EASE_OUT } },
};

interface TextRevealProps {
  /** Plain text. Split happens here — do not pass elements. */
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
}

/**
 * Headline reveal: each word rises out of its own mask, one after another.
 *
 * Two details this gets right that a hand-rolled version does not. The split
 * spans are `aria-hidden` behind a single `aria-label`, so a screen reader
 * reads one sentence instead of spelling out words. And the mask carries
 * vertical padding pulled back by a negative margin — without it `overflow:
 * hidden` slices the descenders off р, у, д, щ, which is every other Ukrainian
 * headline.
 */
export function TextReveal({ text, as = "h2", className }: TextRevealProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    const Plain = as;
    return <Plain className={className}>{text}</Plain>;
  }

  const words = text.split(" ");
  const Animated = motion[as] as typeof motion.h2;
  return (
    <Animated
      className={className}
      aria-label={text}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      variants={containerVariants}
    >
      {words.map((word, i) => (
        <span key={`${word}-${i}`} aria-hidden="true">
          <span className="inline-block overflow-hidden pt-[0.12em] pb-[0.18em] -mt-[0.12em] -mb-[0.18em]">
            <motion.span className="inline-block" variants={wordVariants}>
              {word}
            </motion.span>
          </span>
          {i < words.length - 1 ? " " : null}
        </span>
      ))}
    </Animated>
  );
}

interface ParallaxProps extends MotionBoxProps {
  /** Peak offset in px. 40-100 is depth; beyond that the element visibly detaches. */
  distance?: number;
}

/**
 * Moves the element against the scroll to create depth. Transform only, so it
 * stays on the compositor, and it flattens completely under reduced motion.
 */
export function Parallax({ children, distance = 80, as = "div", className }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);

  const Animated = motion[as] as typeof motion.div;
  return (
    <Animated ref={ref} className={className} style={reduced ? undefined : { y }}>
      {children}
    </Animated>
  );
}
