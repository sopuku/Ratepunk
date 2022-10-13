import styles from "../../styles/Home.module.scss";

export default function HomeLeftSend(props) {
  return (
    <div>
      <div className={styles.labelSent}>
        <img src="/success.svg" />
        <label htmlFor="emailInput">{props.success}</label>
      </div>
      <div className={styles.emailFieldSent}>
        <input type="text" value={props.referal} readOnly />
        <button type="button" onClick={props.copyHandler}>
          Copy
        </button>
      </div>
      <button
        className={styles.buttonSent}
        type="button"
        onClick={props.copyHandler}
      >
        Copy URL
      </button>
    </div>
  );
}
