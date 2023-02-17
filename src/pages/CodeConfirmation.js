import React from "react";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import style from "../style/PhoneConfirmation.module.css";
import { Link } from "react-router-dom";

function CodeConfirmation() {
  const [value, setValue] = useState("");
  return (
    <div className={style.phoneConfirmationContainer}>
      <Link exact="true" to={"/get_username"} className={style.previousImage}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/3661/3661484.png"
          alt=""
        />
      </Link>
      <h1
        style={{
          width: "100%",
          maxWidth: "200px",
          marginBottom: "30px",
          textAlign: "center",
        }}
      >
        Enter the code, we just sent on your number
      </h1>
      <input
        type={"text"}
        style={{
          width: "100%",
          border: "none",
          textAlign: "center",
          outline: "none",
        }}
      ></input>
      <p style={{ marginTop: "20px" }}>
        Didn't receive it?
        <span>Tap to resend</span>
      </p>
      <Link exact="true" to={"/allow_notification"} className={style.nextBtn}>
        Next
      </Link>
    </div>
  );
}

export default CodeConfirmation;
