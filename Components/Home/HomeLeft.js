import { useState } from "react";
import styles from "../../styles/Home.module.scss";
import HomeLeftSend from "./HomeLeftSend";
import HomeLeftUnsend from "./HomeLeftUnsend";
import { v4 as uuidv4 } from "uuid";

export default function HomeLeft() {
  const [success, setSuccess] = useState("Your email is confirmed!");
  const [emailSend, setEmailSend] = useState(false);
  const [referal, setReferal] = useState("");
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");

  function copyHandler() {
    navigator.clipboard.writeText(referal);
    setSuccess("Code is copied to your clipboard");
  }

  function emailHandler(e) {
    setEmail(e.target.value);
  }

  async function submitHandler(e) {
    e.preventDefault();
    setError("");
    if (
      email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      try {
        const response = await fetch("/api/formSubmit", {
          method: "POST",
          body: JSON.stringify({
            email: email,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.status === 200) {
          setReferal(email + "/" + uuidv4());
          setEmailSend(true);
        } else {
          setError("Something went wrong. Please try again");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      setError("Enter valid email adress");
    }
    setEmail("");
  }

  return (
    <div className={styles.left}>
      <h1>REFER FRIENDS AND GET REWARDS</h1>
      <p>
        Refer your friends to us and earn hotel booking vouchers. We'll give you
        1 coin for each friend that installs our extension. Minimum cash-out at
        20 coins.
      </p>
      {emailSend ? (
        <HomeLeftSend
          copyHandler={copyHandler}
          referal={referal}
          success={success}
        />
      ) : (
        <HomeLeftUnsend
          error={error}
          email={email}
          emailHandler={emailHandler}
          buttonHandler={submitHandler}
        />
      )}

      <p>Limits on max rewards apply.</p>
    </div>
  );
}
