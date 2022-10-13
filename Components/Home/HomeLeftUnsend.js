import styles from "../../styles/Home.module.scss";

export default function HomeLeftUnsend(props) {
  return (
    <form type="submit">
      <div className={styles.label}>
        <label htmlFor="emailInput">{props.error}</label>
      </div>
      <div className={styles.emailField}>
        <img src="/email.svg" />
        <input
          id="emailInput"
          value={props.email}
          onChange={props.emailHandler}
          type="email"
          placeholder="Enter your email adress"
        />
      </div>
      <button
        className={styles.buttonUnsent}
        type="button"
        onClick={props.buttonHandler}
      >
        Get Referral Link
      </button>
    </form>
  );
}
