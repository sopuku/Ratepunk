import styles from "../../styles/Home.module.scss";
import HomeRightElement from "./HomeRightElement";

export default function HomeRight() {
  return (
    <div className={styles.right}>
      <HomeRightElement
        image="invite.svg"
        alt="Image of coin in the letter"
        number="1"
        header="INVITE FRIENDS"
        text="Refer friends with your unique referral link."
      />
      <HomeRightElement
        image="collect-coins.svg"
        alt="Image of coin in the hand"
        number="2"
        header="COLLECT COINS"
        text="Get 1 coin for each friend that installs our extension using your referral link."
      />
      <HomeRightElement
        image="/voucher.svg"
        alt="Image of two vouchers"
        number="3"
        header="GET VOUCHER"
        text="Redeem for a $20 hotel booking voucher once you collect 20 coins."
      />
    </div>
  );
}
