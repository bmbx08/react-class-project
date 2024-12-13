import React, {useState} from "react";
import handleInputChange from "./handleInputChange";

const TableRow = ({loc, setUserInputObj}) => {
  const [selected,setSelected]=useState(null);

  const handlePeriodClick=(e)=>{
    setSelected(e.target.textContent);
    console.log(e.target.textContent);
    handleInputChange(e,setUserInputObj);
  }

  return (
    <div className="table-row">
      <div className="row-box row-box-1">{loc && loc.location}</div>
      <div className="row-box row-box-2">
        대한민국 시간 {loc && loc.timeDiff >= 0 ? "+" : ""}
        {loc && loc.timeDiff}시간
      </div>
      <div className="row-box row-box-3">
        <div className="period-button-section">
          <button onClick={(e)=>handlePeriodClick(e)} name="period" id={loc&&loc.location} className={`period-button ${selected==="오전"?"selected":""}`}>오전</button>
          <div className="flex-align-center">/</div>
          <button onClick={(e)=>handlePeriodClick(e)} name="period" id={loc&&loc.location} className={`period-button ${selected==="오후"?"selected":""}`}>오후</button>
        </div>
        <div className="time-input-box">
          <input className="row-box-input" type="number" name="hour" id={loc&&loc.location} onChange={(e)=>handleInputChange(e,setUserInputObj)}/>시
        </div>
        <div className="time-input-box">
          <input className="row-box-input" type="number" name="minute" id={loc&&loc.location} onChange={(e)=>handleInputChange(e,setUserInputObj)}/>분
        </div>
      </div>
    </div>
  );
};

export default TableRow;
