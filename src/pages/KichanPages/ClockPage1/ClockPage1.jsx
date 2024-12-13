import React, { useState } from "react";
import ProblemInfo from "./components/ProblemInfo";
import ProblemA from "./components/ProblemA";
import ProblemB from "./components/ProblemB";
import "./ClockPage1.style.css";

const ClockPage1 = ({setPage}) => {
  const [userTimeObject, setUserTimeObject]=useState({hour:12,minute:0})
  const [showProblemB,setShowProblemB]= useState(false);
  const [answerBoolean,setAnswerBoolean]=useState(false);

  return (
    <div className="clock-page1">
      <div className="clock-page1-container">
        <ProblemInfo prob="A"/>
        <ProblemA setUserTimeObject={setUserTimeObject} setShowProblemB={setShowProblemB}/>
        {showProblemB&&<ProblemInfo prob="B"/>}
        {showProblemB&&<ProblemB userTimeObject={userTimeObject} answerBoolean={answerBoolean} setAnswerBoolean={setAnswerBoolean}/>}
        <div className="B-next-row">
         {answerBoolean&&(<button onClick={()=>setPage("ClockPage2")} className="B-next-button">다음</button>)}
        </div>
        
      </div>
    </div>
  );
};

export default ClockPage1;