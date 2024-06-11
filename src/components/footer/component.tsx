import styles from "./component.module.scss";
import typography from "../../scss/typography.module.scss";
import Image from "next/image";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.containerTop}>
        <div className={styles.containerTopLeft}>
          <div className={styles.containerFlag}>
            <Image
                alt={"EU Flag"}
                src={"/footer/flag_eu.webp"}
                fill={true}
                style={{objectFit: "contain"}}
            />
          </div>
          <p className={typography.footer__white}>
            Funded by the European Union under the Grant Agreement Number
            101089047.
          </p>
        </div>
        <div className={styles.containerTopRight}>
          <LinkedInIcon htmlColor={"#FAF5F8"} sx={{fontSize: 36}}/>
          <XIcon htmlColor={"#FAF5F8"} sx={{fontSize: 36}}/>
        </div>

      </div>
      <div className={styles.containerBottom}>
        <p className={typography.footer__white}>
          © Copyright 2024 by MPI-SWS
        </p>
        <p className={typography.footer__white}>Privacy Policy</p>
      </div>
    </footer>
  );
}
