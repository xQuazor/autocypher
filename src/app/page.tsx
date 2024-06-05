"use client";

import styles from "./page.module.scss";
import typography from "../scss/typography.module.scss";
import utilities from "../scss/utlities.module.scss";
import Image from "next/image";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FlightIcon from "@mui/icons-material/Flight";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
  return (
    <main className={styles.container}>
      <Section1 />
      <Section2 />
      <Section3 />
    </main>
  );
}

function Section1() {
  const images = Array.from({ length: 4 }, (_, index) => index + 1);
  return (
    <section className={styles.section1}>
      <div className={styles.section1Left}>
        <h1 className={typography.heading1}>
          Automated Synthesis of Stochastic Cyber-Physical Systems:
        </h1>
        <p className={typography.heading3 + " " + utilities.margin_bot}>
          A Robust Approach
        </p>
        <p className={typography.paragraph__grey}>
          Learn more <KeyboardArrowDownIcon />
        </p>
      </div>
      <div className={styles.section1Right}>
        {images.map((number) => {
          return (
            <Image
              key={number}
              alt={`Hero Image Layer ${number}`}
              src={`/home/cyber_layer_${number}.png`}
              fill={true}
              style={{ objectFit: "contain" }}
              className={number === 3 ? styles.rotate : styles.item}
            />
          );
        })}
      </div>
    </section>
  );
}

function Section2() {
  return (
    <section className={styles.section2}>
      <LineAndBoxesAnimation />
      <Image
        className={styles.section2Background}
        src={"/home/section2.webp"}
        alt={"Background Image"}
        fill={true}
        style={{ objectFit: "cover" }}
      />
    </section>
  );
}

function Section3() {
  return <section></section>;
}
const LineAndBoxesAnimation = () => {
  const lineRef = useRef(null);
  const boxRefs = useRef([]);
  const containerRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  boxRefs.current = [];
  useEffect(() => {
    const viewportHeight = window.innerHeight;
    const totalScrollAmount = 1.35 * viewportHeight;
    // Ensure the full page height is used for scroll calculations
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: `top bottom-=${0.35 * viewportHeight}`,
      end: totalScrollAmount,
      onUpdate: (self) => {
        // Line height adjusted according to the progress through 200vh
        const lineHeight = self.progress * totalScrollAmount;
        gsap.set(lineRef.current, { height: `${lineHeight}px` });
      },
    });

    // Animate the boxes sliding into view
    boxRefs.current.forEach((box, index) => {
      gsap.fromTo(
        box,
        { x: index % 2 ? -150 : 150, autoAlpha: 0 },
        {
          x: 0,
          autoAlpha: 1,
          scrollTrigger: {
            trigger: box,
            start: "top center",
            toggleActions: "play none none reverse",
          },
        },
      );
    });
    // Make sure to kill ScrollTrigger instances on component unmount to prevent memory leaks.
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Helper function to add refs
  const addBoxRef = (el: any) => {
    // @ts-ignore
    if (el && !boxRefs.current.includes(el)) {
      // @ts-ignore
      boxRefs.current.push(el);
    }
  };

  return (
    <section className={styles.section2} ref={containerRef}>
      <div className={styles.section2Backdrop}></div>
      <div ref={lineRef} className={styles.section2Line}></div>
      <div
        className={styles.section2Box}
        ref={addBoxRef}
        style={{ top: "25vh", left: "55%" }}
      >
        <h3 className={typography.heading3 + " " + utilities.margin_bot_small}>
          What are Cyber-Physical Systems?
        </h3>
        <p className={typography.paragraph}>
          Cyber-physical systems (CPS) are complex systems with tight
          interactions between cyber elements and physical components. The cyber
          elements are control algorithms implemented by computer-based
          software.
        </p>
      </div>
      <div
        className={styles.section2Box}
        ref={addBoxRef}
        style={{ top: "60vh", right: "55%" }}
      >
        <h3 className={typography.heading3 + " " + utilities.margin_bot_small}>
          Issues with Control Software
        </h3>
        <p className={typography.paragraph}>
          Developing the embedded control software for CPS is currently ad hoc
          and error-prone, which has created costly undesired behaviours,
          particularly in safety-critical applications.
        </p>
      </div>
      <h3
        className={typography.heading3 + " " + utilities.margin_bot_small}
        style={{
          position: "absolute",
          top: "90vh",
          left: "50%",
          transform: "-50% -50%",
        }}
      >
        Real World Examples of CPS failure
      </h3>
      <CPSFailureBox
        text={
          "Crash of airplanes due to software bugs (Boeing 737 Max, costed the company €15.9 billion)"
        }
      />
    </section>
  );
};

// @ts-ignore
function CPSFailureBox({ text }) {
  return (
    <div className={styles.section2PositionBoxes}>
      <div className={styles.section2FailureBox}>
        <p className={typography.paragraph__white}>{text}</p>
        <div className={styles.section2FailureBoxIcon}>
          <FlightIcon sx={{ fontSize: 36 }} />
        </div>
      </div>
    </div>
  );
}
