"use client";

import styles from "./page.module.scss";
import typography from "../scss/typography.module.scss";
import utilities from "../scss/utlities.module.scss";
import Image from "next/image";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import FlightIcon from "@mui/icons-material/Flight";
import BoltIcon from "@mui/icons-material/Bolt";
import BarChartIcon from "@mui/icons-material/BarChart";
import CalculateIcon from "@mui/icons-material/Calculate";
import BalanceIcon from "@mui/icons-material/Balance";
import ExpandIcon from "@mui/icons-material/Expand";
import { Autoplay } from "swiper/modules";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const colourBlack = "#1F3249";
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
        <a href={"#section2"} className={typography.paragraph__grey}>
          Learn more <KeyboardArrowDownIcon />
        </a>
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
              className={
                number === 3
                  ? styles.rotate
                  : styles.item && number === 4
                    ? ""
                    : styles.item
              }
            />
          );
        })}
      </div>
    </section>
  );
}

function Section2() {
  return (
    <section id={"section2"}>
      <LineAndBoxesAnimation />
    </section>
  );
}

function Section3() {
  return (
    <section className={styles.section3}>
      <div className={styles.section3Left}>
        <h3 className={typography.heading3 + " " + utilities.margin_bot}>
          Project Objectives
        </h3>
        <ul className={styles.section3LeftList}>
          <div className={styles.section3LeftListItem}>
            <BarChartIcon htmlColor={colourBlack} sx={{ fontSize: 36 }} />
            <li className={typography.paragraph}>
              Reduce the conservatism by moving away from the worst-case
              behaviour of the uncertainty and including the statistics of the
              uncertainty in the analysis.
            </li>
          </div>
          <div className={styles.section3LeftListItem}>
            <CalculateIcon htmlColor={colourBlack} sx={{ fontSize: 36 }} />
            <li className={typography.paragraph}>
              Relax the need for having a precise mathematical description of
              the cyber-physical system.
            </li>
          </div>
          <div className={styles.section3LeftListItem}>
            <BalanceIcon htmlColor={colourBlack} sx={{ fontSize: 36 }} />
            <li className={typography.paragraph}>
              Adapt the design for trade-offs between various performance
              criteria.
            </li>
          </div>
          <div className={styles.section3LeftListItem}>
            <ExpandIcon htmlColor={colourBlack} sx={{ fontSize: 36 }} />
            <li className={typography.paragraph}>
              Mitigate the exponential computational complexity to handle
              large-scale cyber-physical systems.
            </li>
          </div>
        </ul>
      </div>
      <div className={styles.section3Right}>
        <Image
          alt={"illustration"}
          src={"/home/section3.png"}
          fill={true}
          style={{ objectFit: "contain" }}
        />
      </div>
    </section>
  );
}
const LineAndBoxesAnimation = () => {
  const lineRef = useRef(null);
  const boxRefs = useRef([]);
  const containerRef = useRef(null);
  const circleRef = useRef([]);
  boxRefs.current = [];
  circleRef.current = [];
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const viewportHeight = window.innerHeight;
    const totalScrollAmount = 1.01 * window.innerHeight;

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: `top bottom-=${0.35 * viewportHeight}`,
      end: totalScrollAmount,
      onUpdate: (self) => {
        gsap.set(lineRef.current, {
          height: `${self.progress * totalScrollAmount}px`,
          maxHeight: `${0.78 * viewportHeight}px`,
        });
      },
    });
    boxRefs.current.forEach((box, index) => {
      gsap.fromTo(
        box,
        { x: index % 2 ? -150 : 150, autoAlpha: 0 },
        {
          x: 0,
          autoAlpha: 1,
          scrollTrigger: {
            trigger: box,
            start: `top bottom-=${0.28 * viewportHeight}`,
            toggleActions: "play none none reverse",
          },
        },
      );
    });
    circleRef.current.forEach((circle, index) => {
      gsap.fromTo(
        circle,
        { scale: 0, autoAlpha: 0 },
        {
          scale: 1,
          autoAlpha: 1,
          scrollTrigger: {
            trigger: circle,
            start: `top bottom-=${0.28 * viewportHeight}`,
            toggleActions: "play none none reverse",
            // markers: true,
          },
        },
      );
    });
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  const addBoxRef = (el: any) => {
    // @ts-ignore
    if (el && !boxRefs.current.includes(el)) {
      // @ts-ignore
      boxRefs.current.push(el);
    }
  };

  const addCircleRef = (el: any) => {
    // @ts-ignore
    if (el && !circleRef.current.includes(el)) {
      // @ts-ignore
      circleRef.current.push(el);
    }
  };

  return (
    <div className={styles.section2} ref={containerRef}>
      {/*<div className={styles.section2Backdrop}></div>*/}
      <div ref={lineRef} className={styles.section2Line}></div>
      {/*<Image*/}
      {/*  className={styles.section2Background}*/}
      {/*  src={"/home/section2.png"}*/}
      {/*  alt={"Background Image"}*/}
      {/*  fill={true}*/}
      {/*  style={{ objectFit: "cover" }}*/}
      {/*/>*/}
      <div
        ref={addCircleRef}
        className={styles.section2Circle}
        style={{ top: "22vh" }}
      ></div>
      <div
        ref={addCircleRef}
        className={styles.section2Circle}
        style={{ top: "47vh" }}
      ></div>
      <div
        ref={addCircleRef}
        className={styles.section2Circle}
        style={{ top: "78vh" }}
      ></div>
      <div className={styles.sectionBoxContainer}>
        <div className={styles.section2Box} ref={addBoxRef}>
          <h3
            className={typography.heading3 + " " + utilities.margin_bot_small}
          >
            What are Cyber-Physical Systems?
          </h3>
          <p className={typography.paragraph}>
            Cyber-physical systems (CPS) are complex systems with tight
            interactions between cyber elements and physical components. The
            cyber elements are control algorithms implemented by computer-based
            software.
          </p>
        </div>
        <div className={styles.section2Box} ref={addBoxRef}>
          <h3
            className={typography.heading3 + " " + utilities.margin_bot_small}
          >
            Issues with Control Software
          </h3>
          <p className={typography.paragraph}>
            Developing the embedded control software for CPS is currently ad hoc
            and error-prone, which has created costly undesired behaviours,
            particularly in safety-critical applications.
          </p>
        </div>
        <div
          className={styles.section2InfoBoxes}
          ref={addBoxRef}
        >
          <h3
            className={typography.heading3 + " " + utilities.margin_bot_small}
          >
            Real World Examples of CPS failure
          </h3>
          <Carousel />
        </div>
      </div>
    </div>
  );
};

// @ts-ignore
function CPSFailureBox({ heading, text, icon }) {
  return (
    <div className={styles.section2FailureBox}>
      <p className={typography.paragraph__emphasis}>
        {heading} {icon}
      </p>
      <p className={typography.paragraph + " " + utilities.margin_bot_small}>
        {text}
      </p>
    </div>
  );
}

function Carousel() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      modules={[Autoplay]}
      loop={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      centeredSlides={true}
      className={styles.section2Carousel}
    >
      <SwiperSlide className={styles.section2CarouselSlide}>
        <CPSFailureBox
          heading={"Airplanes"}
          text={
            "Crash of airplanes due to software bugs (Boeing 737 Max, costed the company €15.9 billion)."
          }
          icon={<FlightIcon sx={{ fontSize: 36 }} />}
        />
      </SwiperSlide>
      <SwiperSlide className={styles.section2CarouselSlide}>
        <CPSFailureBox
          heading={"Autonomous Cars"}
          text={
            "Autonomous cars having software bugs (Toyota recalled 65,000 cars in 2015)."
          }
          icon={<DirectionsCarIcon sx={{ fontSize: 36 }} />}
        />
      </SwiperSlide>
      <SwiperSlide className={styles.section2CarouselSlide}>
        <CPSFailureBox
          heading={"Power Networks"}
          text={
            "Frequency deviation in power networks causing outages or blackouts (e.g. in Jan 2021 in EU, affecting 200k households)."
          }
          icon={<BoltIcon sx={{ fontSize: 36 }} />}
        />
      </SwiperSlide>
    </Swiper>
  );
}
