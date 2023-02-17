import React from "react";
import style from "../style/Header.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className={style.header}>
      <Link exact to="/explore">
        <img
          src="https://cdn-icons-png.flaticon.com/512/5636/5636698.png"
          alt=""
        />
      </Link>
      <div className={style.navItems}>
        <Link exact to="/friends_invite">
          <img src="https://cdn-icons-png.flaticon.com/512/7615/7615090.png"></img>
        </Link>

        <Link exact to="/friends_invite">
          <img src="https://cdn-icons-png.flaticon.com/512/2693/2693507.png"></img>
        </Link>

        <Link exact to="/friends_invite">
          <img src="https://cdn-icons-png.flaticon.com/128/3602/3602145.png"></img>
        </Link>

        <Link exact to="/friends_invite">
          <img
            style={{
              borderRadius: "50%",
            }}
            src="https://media.licdn.com/dms/image/C4D03AQHYeN8SNnTltg/profile-displayphoto-shrink_200_200/0/1608014414072?e=2147483647&v=beta&t=vV7xjmkb2hw_RGMrc54h9ptY1bD_SjYr1nZ5c6a-QU4"
          ></img>
        </Link>
      </div>
    </div>
  );
}

export default Header;
