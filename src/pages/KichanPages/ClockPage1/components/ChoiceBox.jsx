import React from "react";
import AnalogClock from "./AnalogClock";

const ChoiceBox = ({choice,choiceNum,handleBSubmit}) => {
  return (
    <div className="choice-box" onClick={()=>handleBSubmit(choice)}>
        <div className="A-clock-box">
        <AnalogClock hour={choice.hour} minute={choice.minute} />
        </div>
      <div className="choice-num-row">
        <div className="choice-num">{choiceNum}</div>
      
      </div>
      
      {console.log(choice)}
    </div>
  );
};

export default ChoiceBox;
