import styles from "../../styles/Home.module.scss";

export default function HomeRightElement(props) {
  return (
    <div className={styles.element}>
      {props.number !== "2" && (
        <img className={styles.leftImg} src={props.image} alt={props.alt} />
      )}
      <img className={styles.leftImgPhone} src={props.image} alt={props.alt} />
      <div className={styles.text}>
        <h6>Step {props.number}</h6>
        <h3>{props.header}</h3>
        <p>{props.text}</p>
      </div>
      {props.number === "2" && (
        <img className={styles.rightImg} src={props.image} alt={props.alt} />
      )}
    </div>
  );
}
