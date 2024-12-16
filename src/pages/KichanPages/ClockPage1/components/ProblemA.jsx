import React, { useState } from "react";

const ProblemA = ({setUserTimeObject,setShowProblemB}) => {
    const [selectedRadio, setSelectedRadio]=useState("");
    

    const handleTimeRadio=(event)=>{
        if(event.target.textContent==="오전"){
            setSelectedRadio("AM");
        } else if(event.target.textContent==="오후"){
            setSelectedRadio("PM");
        }
    }

    const handleTimeInput=(event)=>{
        if(event.target.name==="hour"){
            console.log("hour",event.target.value);
            setUserTimeObject(prevState=>({
              ...prevState,
              hour:event.target.value,
            }))
        } 
        if(event.target.name==="minute"){
            console.log("minute",event.target.value)
            setUserTimeObject(prevState=>({
              ...prevState,
              minute:event.target.value,
            }))
        }
    }

    const handleSubmitButton=(event)=>{
      if(event.type==="click"||(event.type==="keydown"&&event.key==="Enter")){
        setShowProblemB(true);
      }
    }

  return (
    <div className="ProblemA-section">
      <div className="timeA-input-section">
        <div className="timeA-radio-section">
          <button className={`time-radio ${selectedRadio==="AM"?"selected":""}`} onClick={(e)=>handleTimeRadio(e)}>오전</button>
          <button className={`time-radio ${selectedRadio==="PM"?"selected":""}`} onClick={(e)=>handleTimeRadio(e)}>오후</button>
        </div>
        <div className="timeA-input-box">
          <input onChange={(event)=>handleTimeInput(event)} onKeyDown={handleSubmitButton} type="number" name="hour" className="timeA-input"/> 시
        </div>
        <div className="timeA-input-box">
          <input onChange={(event)=>handleTimeInput(event)} onKeyDown={handleSubmitButton} type="number" name="minute" className="timeA-input"/> 분
        </div>
        <div className="redd-text">{selectedRadio}</div>
      </div>
      <div className="ProblemA-submit-section">
        <button className="ProblemA-submit-button" onClick={handleSubmitButton}>입력</button>
      </div>
      
    </div>
  );
};

export default ProblemA;
