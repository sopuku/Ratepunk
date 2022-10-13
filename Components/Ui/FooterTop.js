import styles from "../../styles/footer.module.scss";
import FooterTopElement from "./FooterTopElement";

export default function FooterTop() {
  return (
    <div id={styles.footerTop}>
      <div className={styles.container}>
        <FooterTopElement
          logo="chrome.svg"
          link="https://chrome.google.com/webstore/detail/ratepunk-same-hotel-way-c/gdaioanblcnghddimngklkhgcbomfdck?utm_source=ratepunk"
        />
        <FooterTopElement
          logo="/apple.svg"
          link="https://apps.apple.com/app/ratepunk/id1607823726"
        />
        <div className={styles.rating}>
          <h5>Chrome Store reviews</h5>
          <div>
            <input type="radio" name="rating" value="5" id="5" />
            <label htmlFor="5">☆</label>
            <input type="radio" name="rating" value="4" id="4" />
            <label htmlFor="4">☆</label>
            <input type="radio" name="rating" value="3" id="3" />
            <label htmlFor="3">☆</label>
            <input type="radio" name="rating" value="2" id="2" />
            <label htmlFor="2">☆</label>
            <input type="radio" name="rating" value="1" id="1" />
            <label htmlFor="1">☆</label>
          </div>
        </div>
      </div>
    </div>
  );
}
