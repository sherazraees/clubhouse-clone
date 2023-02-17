import React, { useState, useEffect } from "react";
import data from "../data/roomCard.json";
import style from "../style/RoomInfoCard.module.css";

function RoomInfoCard(props) {
  return (
    <>
      {data.map((item) => (
        <div>
          <div>
            <div className={style.roomCardContainer}>
              <h6>{item.title}</h6>
              <h2>{item.subTitle}</h2>
              <div className={style.roomMembers}>
                <div>
                  <img src={item.img1} alt="" />
                  <img src={item.img2} alt="" />
                </div>
                <div style={{}}>
                  {item.members.map((person) => (
                    <p>
                      {person.firstName} {person.lastName}{" "}
                      <img
                        style={{
                          width: "20px",
                          marginBottom: "-5px",
                          marginLeft: "5px",
                        }}
                        src="https://cdn-icons-png.flaticon.com/512/1310/1310191.png"
                      />
                    </p>
                  ))}
                  <p>
                    <span style={{ fontWeight: "bold" }}>1.8</span>
                    <img
                      style={{
                        width: "18px",
                        marginBottom: "-2px",
                        marginLeft: "5px",
                      }}
                      src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
                    />
                    <span style={{ fontWeight: "bold", marginLeft: "8px" }}>
                      1.8
                    </span>
                    <img
                      style={{
                        width: "18px",
                        marginBottom: "-2px",
                        marginLeft: "5px",
                      }}
                      src="https://cdn-icons-png.flaticon.com/128/1310/1310079.png"
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default RoomInfoCard;
