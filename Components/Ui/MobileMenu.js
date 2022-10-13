import styles from "../../styles/navigation.module.scss";
import MoblileMenuButton from "./MobileMenuButton";

export default function MobileMenu(props) {
  return (
    <div className={styles.mobileMenu}>
      <MoblileMenuButton
        buttonHandler={props.buttonHandler}
        href="/"
        name="Chrome Extention"
      />
      <MoblileMenuButton
        buttonHandler={props.buttonHandler}
        href="#"
        name="Price Comparison"
      />
      <MoblileMenuButton
        buttonHandler={props.buttonHandler}
        href="#"
        name="Blog"
      />
    </div>
  );
}
