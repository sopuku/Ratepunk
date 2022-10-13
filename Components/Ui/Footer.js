import styles from "../../styles/footer.module.scss";
import Link from "next/link";
import Links from "./Links";
import Icons from "./Icons";

export default function Footer() {
  return (
    <div id={styles.footer}>
      <div className={styles.container}>
        <div className={styles.left}>
          <img src="/logo.svg" alt="logo of RATEPUNK" />
          <p>
            Ratepunk compares hotel room prices across the major online travel
            agencies. When you search for a room, Ratepunk extension scans the
            top booking sites and runs a price comparison, so you can be
            confident in knowing you’re getting the best deal!
          </p>
          <h6>© 2021 Ratepunk. All Rights Reserved.</h6>
        </div>
        <div className={styles.mid}>
          <h4>Quick Links</h4>
          <Links href="#" text="Price Comparison" />
          <Links href="/" text="Chrome Extension" />
          <Links href="#" text="How It Works" />
          <Links href="#" text="Ratepunk Blog" />
          <Links href="#" text="Privacy Policy" />
        </div>
        <div className={styles.right}>
          <div>
            <h4>Contact</h4>
            <div className={styles.emailField}>
              <img src="/email-footer.svg" alt="Email icon"></img>
              <Link href="mailto:hi@ratepunk.com">hi@ratepunk.com</Link>
            </div>
          </div>
          <div>
            <h4>Social</h4>
            <div className={styles.icons}>
              <Icons
                src="/instagram.svg"
                alt="Lnstagram logo"
                href="https://www.instagram.com/"
              />
              <Icons
                src="/facebook.svg"
                alt="Facebook logo"
                href="https://www.facebook.com/"
              />
              <Icons
                src="/linkedin.svg"
                alt="Linkedin logo"
                href="https://www.linkedin.com/"
              />
              <Icons
                src="/twitter.svg"
                alt="Twitter logo"
                href="https://www.twitter.com/"
              />
              <Icons
                src="/tiktok.svg"
                alt="Tiktok logo"
                href="https://www.tiktok.com/"
              />
            </div>
          </div>
          <h6>© 2021 Ratepunk. All Rights Reserved.</h6>
        </div>
      </div>
    </div>
  );
}
