"use client";

import styles from "./page.module.scss";
import typography from "../scss/typography.module.scss";
import utilities from "../scss/utlities.module.scss";
import Image from "next/image";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
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
  return (
    <section className={styles.section1}>
      <div className={styles.section1__left}>
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
      <div className={styles.section1__right}>
        <Image
          alt={"Hero Image Layer 1"}
          src={"/home/cyber_layer_1.png"}
          fill={true}
          style={{ objectFit: "contain" }}
          className={styles.item}
        />
        <Image
          alt={"Hero Image Layer 2"}
          src={"/home/cyber_layer_2.png"}
          fill={true}
          style={{ objectFit: "contain" }}
          className={styles.item}
        />
        <Image
          alt={"Hero Image Layer 3"}
          src={"/home/cyber_layer_3.png"}
          fill={true}
          style={{ objectFit: "contain" }}
          className={styles.rotate}
        />
        <Image
          alt={"Hero Image Layer 4"}
          src={"/home/cyber_layer_4.png"}
          fill={true}
          style={{ objectFit: "contain" }}
          className={styles.item}
        />
      </div>
    </section>
  );
}

function Section2() {
  return (
    <section className={styles.section2}>
      <div className={styles.glowingcircle}></div>
      <div className={styles.section2__backdrop}></div>
      <LineAndBoxesAnimation />
      <Image
        className={styles.section2__background}
        src={"/home/section2.webp"}
        alt={"Background Image"}
        fill={true}
        style={{ objectFit: "cover" }}
      />
      <div className={styles.section2__box}>
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
      <div className={styles.section2__box}>
        <h3 className={typography.heading3 + " " + utilities.margin_bot_small}>
          Issues with Control Software
        </h3>
        <p className={typography.paragraph}>
          Developing the embedded control software for CPS is currently ad hoc
          and error-prone, which has created costly undesired behaviours,
          particularly in safety-critical applications.
        </p>
      </div>
      <h3 className={typography.heading3 + " " + utilities.margin_bot_small}>
        Real World Examples of CPS failure
      </h3>
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
      start: "top top",
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
        { x: -100, autoAlpha: 0 },
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
      <div className={styles.glowingcircle}></div>
      <div className={styles.section2__backdrop}></div>
      <div ref={lineRef} className={styles.section2__line}></div>
      {[1, 2, 3].map((_, i) => (
        <div
          key={i}
          ref={addBoxRef}
          style={{
            position: "absolute",
            top: `${33 * (i + 1)}vh`,
            left: "50%",
            width: "200px",
            marginLeft: "-100px",
            height: "50px",
            backgroundColor: "blue",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Box {i + 1}
        </div>
      ))}
    </section>
  );
};
