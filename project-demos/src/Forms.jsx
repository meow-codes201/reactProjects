import { useState, useEffect } from "react";
import styles from "./Forms.module.css";
import Myimg from "./amazing-nature-mountain-scenery-during-sunset.jpg";
function Forms() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [pswd, setPswd] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorUserName, setErrorUserName] = useState("");
  const [emailError, setEmailError] = useState("");
  const [errPswd, setErrPswd] = useState("");
  const [confirmErrorPassword, setErrorConfirmPassword] = useState("");
  const [userColor, setUserColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [pswdColor, setPswdColor] = useState("");
  const [confirmPswdColor, setConfirmPswdColor] = useState("");

  // useEffect(() => {
  //   document.body.style.background =
  //     "linear-gradient(to right,lightyellow,hotpink)";
  //   return () => {
  //     document.body.style.background = "";
  //   };
  // }, []);

  const validate = (e) => {
    e.preventDefault();
    if (userName.length >= 8) {
      setErrorUserName("");
      setUserColor("green");
    } else {
      setErrorUserName("User Name must be atleast 8 letters long");
      setUserColor("red");
    }
    if (email.includes("@gmail.com")) {
      setEmailError("");
      setEmailColor("green");
    } else {
      setEmailError("Email should have @gmail.com");
      setEmailColor("red");
    }

    if (pswd.length >= 8) {
      setErrPswd("");
      setPswdColor("green");
    } else {
      setErrPswd("password must be atleast 8 characters long");
      setPswdColor("red");
    }

    if (confirmPassword === pswd && pswd !== "" && confirmPassword !== "") {
      setErrorConfirmPassword("");
      setConfirmPswdColor("green");
    } else {
      setErrorConfirmPassword("Doesn't match with password entered");
      setConfirmPswdColor("red");
    }
  };

  return (
    <>
      <div className={styles.card}>
        <div className={styles.cardimg}>
          <img src={Myimg} className={styles.img1} alt="Mountain" />
        </div>

        <form>
          <input
            type="text"
            placeholder="Name"
            value={userName}
            style={{ borderColor: userColor }}
            onChange={(e) => setUserName(e.target.value)}
          />

          <p className={styles.error}>{errorUserName}</p>

          <input
            type="email"
            placeholder="Email"
            style={{ borderColor: emailColor }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <p className={styles.error}>{emailError}</p>

          <input
            type="password"
            placeholder=" Enter Password"
            style={{ borderColor: pswdColor }}
            value={pswd}
            onChange={(e) => setPswd(e.target.value)}
          />
          <p className={styles.error}>{errPswd}</p>
          <input
            type="password"
            placeholder="Confirm Password"
            style={{ borderColor: confirmPswdColor }}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <p className={styles.error}>{confirmErrorPassword}</p>

          <button className={styles.submit} onClick={validate}>
            submit
          </button>
        </form>
      </div>
    </>
  );
}
export default Forms;
