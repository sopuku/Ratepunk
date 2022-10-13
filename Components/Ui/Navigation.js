import styles from "../../styles/navigation.module.scss";
import Link from "next/link";

export default function Navigation(props) {
  return (
    <div className={styles.nav}>
      <div className={styles.container}>
        <img src="/logo.svg" alt="logo of RATEPUNK" />
        <div>
          <Link href="/">Chrome Extention</Link>
          <Link href="#">Price Comparison</Link>
          <Link href="#">Blog</Link>
          <button
            className={styles.navButton}
            type="button"
            onClick={props.buttonHandler}
          >
            {props.open ? <img src="/close.svg" /> : <img src="/menu.svg" />}
          </button>
        </div>
      </div>
    </div>
  );
}
