import React from "react";
import DailyInfoCard from "../components/DailyInfoCard";
import Header from "../components/Header";
import style from "../style/Home.module.css";

function Home() {
  return (
    <div>
      <Header />
      <div className={style.homeContainer}>
        <DailyInfoCard />
      </div>
    </div>
  );
}

export default Home;
