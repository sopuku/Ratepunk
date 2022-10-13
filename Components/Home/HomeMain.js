import React from "react";
import styles from "../../styles/Home.module.scss";
import HomeLeft from "./HomeLeft";
import HomeRight from "./HomeRight";

export default function HomeMain() {
  return (
    <div id={styles.main}>
      <div className={styles.container}>
        <HomeLeft />
        <HomeRight />
      </div>
    </div>
  );
}
