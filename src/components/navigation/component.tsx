import styles from "./component.module.scss";
import Link from "next/link";
import Image from "next/image";
export default function Navigation() {
  return (
    <nav className={styles.container} style={{position: "absolute", top: "0"}}>
      <Link href={"/"} className={styles.container__logo}>
        <Image
          alt={"project logo"}
          src={"/navigation/logo_full.png"}
          fill={true}
          style={{ objectFit: "contain", float:"left" }}
        />
      </Link>
      <div className={styles.container__links}>
        <Link className={styles.paragraph} href={"/"}>Home</Link>
      </div>
    </nav>
  );
}
