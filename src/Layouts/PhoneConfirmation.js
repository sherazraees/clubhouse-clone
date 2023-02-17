import React from "react";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import style from "../style/PhoneConfirmation.module.css";
import { Link } from "react-router-dom";

function PhoneConfirmation() {
  const [value, setValue] = useState("");
  return (
    <div className={style.phoneConfirmationContainer}>
      <Link exact="true" to={"/code_confirm"} className={style.previousImage}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/3661/3661484.png"
          alt=""
        />
      </Link>
      <h1>Enter your phone</h1>
      <PhoneInput
        international
        defaultCountry="PK"
        value={value}
        onChange={setValue}
      ></PhoneInput>
      <p>
        By entering your number, you are agreeing to our{" "}
        <span>Terms of Service and Privacy Policy. Thanks!</span>
      </p>
      <Link exact="true" to={"/code_confirm"} className={style.nextBtn}>
        Next
      </Link>
    </div>
  );
}

export default PhoneConfirmation;
