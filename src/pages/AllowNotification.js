import React from "react";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import style from "../style/PhoneConfirmation.module.css";
import { Link } from "react-router-dom";

function AllowNotification() {
  const [value, setValue] = useState("");
  return (
    <div className={style.phoneConfirmationContainer}>
      <Link exact="true" to={"/code_confirm"} className={style.previousImage}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/3661/3661484.png"
          alt=""
        />
      </Link>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ padding: "10px" }}>
          Hi, Last important step to complete!!!
        </h1>
        <h1>Enable notification to know when people are talking</h1>
        <div className={style.allowCard}>
          <h3>"Clubhouse" Would Like to Send You Notifications</h3>
          <p>Notifications amy include alerts,sounds and icon badges</p>
          <div className={style.actionBtn}>
            <Link exact="true" to={"/home"}>
              Don't Allow
            </Link>
            <Link exact="true" to={"/home"}>
              Allow
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllowNotification;
