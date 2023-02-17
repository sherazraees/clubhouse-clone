import React from "react";
import style from "../style/Welcome.module.css";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className={style.welcomeContainer}>
      <h1>Welcome!</h1>
      <div className={style.welcomeInfo}>
        <p>
          Welcome to Clubhouse, your go-to platform for social networking and
          audio-based conversations! We are thrilled to have you join our
          vibrant community of users from all around the world. Our messaging
          app allows you to connect with people who share your interests, engage
          in meaningful discussions, and stay updated on the latest trends in
          your field.
        </p>
        <p>
          Clubhouse Messaging App provides a secure and diverse environment for
          users to connect and exchange their opinions and views. The platform's
          user-friendly interface fosters discussions on numerous subjects,
          catering to users' social, professional, and personal needs.
        </p>
        <p>Sheraz, Raees and ClubHouse team</p>
      </div>
      <div className={style.actionBtn}>
        <Link exact="true" to={"/get_username"}>
          Get UserName
        </Link>
        <Link exact="true" to={"/get_username"}>
          Have an invite text? Sign In
        </Link>
      </div>
    </div>
  );
}

export default Welcome;
