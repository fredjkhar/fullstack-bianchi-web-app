import React from "react";

import { useAppContext } from "../../providers/appProvider";

import "./squad.scss";

const Squad = () => {
  const { data } = useAppContext();
  return (
    <section className="squad">
      <div className="wrapper">
        <div className='first-row'>
          <div className="expert">
            <img
              src={require("../../Assets/expert_1.jpg")}
              alt="expert 1"
            ></img>
            <p>{data.squad.b}</p>
          </div>
          <div className="expert">
            <img
              src={require("../../Assets/expert_2.jpg")}
              alt="expert 1"
            ></img>
            <p>{data.squad.c}</p>
          </div>
        </div>
        <div className="second-row">
            <div className="expert">
            <img src={require("../../Assets/expert_3.jpg")} alt="expert 1"></img>
            <p>{data.squad.d}</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Squad;
