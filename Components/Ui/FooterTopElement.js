import styles from "../../styles/footer.module.scss";

export default function FooterTopElement(props) {
  return (
    <a href={props.link} className={styles.footerTopElement}>
      <img src={props.logo} alt="logo" />
      <div className={styles.text}>
        <p>available in the</p>
        {props.logo === "chrome.svg" ? (
          <h4>chrome web store</h4>
        ) : (
          <h4>apple app store</h4>
        )}
      </div>
    </a>
  );
}
