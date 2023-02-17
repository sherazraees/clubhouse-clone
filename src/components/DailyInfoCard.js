import React from "react";
import style from "../style/DailyInfoCard.module.css";
import data from "../data/dailyCard.json";

function DailyInfoCard() {
  console.log(data);
  return (
    <div className={style.dailyCard}>
      {data.map((item) => {
        return (
          <div>
            <span className="">{item.time}</span>
            <div>
              <span>{item.titile}</span>
              <p>{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DailyInfoCard;
