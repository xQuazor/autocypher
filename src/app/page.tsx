import styles from "./page.module.scss";
import typography from "../scss/typography.module.scss";
import utilities from "../scss/utlities.module.scss";
import Image from "next/image";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
export default function Home() {
  return (
    <main className={styles.container}>
      <Section1 />
      <Section2 />
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
          <div className={styles.section2__backdrop}></div>
          <Image
              className={styles.section2__background}
              src={"/home/section2.webp"}
              alt={"Background Image"}
              fill={true}
              style={{objectFit: "cover"}}
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
