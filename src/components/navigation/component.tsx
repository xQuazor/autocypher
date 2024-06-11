"use client"

import styles from "./component.module.scss";
import Link from "next/link";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
const color_black = "#1F3249";
export default function Navigation() {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!open);
  };
  return (
    <nav
      className={styles.container}
      style={{ position: "absolute", top: "0" }}
    >
      <button className={styles.menuIcon} onClick={toggleMenu} >
        <MenuIcon htmlColor={color_black} />
      </button>
      <Link href={"/"} className={styles.container__logo}>
        <Image
          alt={"project logo"}
          src={"/navigation/logo_full.png"}
          fill={true}
          style={{ objectFit: "contain", float: "left" }}
        />
      </Link>
      <div className={styles.container__links}>
        <Link className={styles.paragraph} href={"/"}>
          Home
        </Link>
      </div>
    </nav>
  );
}
