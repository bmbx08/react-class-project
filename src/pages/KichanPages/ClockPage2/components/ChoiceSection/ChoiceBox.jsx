import React, { useEffect, useState } from 'react'
import AnalogClock from './AnalogClock';

const ChoiceBox = ({choice,showAnswers}) => {
    const[userHour,setUserHour]=useState(null);
    const[userMinute,setUserMinute]=useState(null);
    const[resultMessage,setResultMessage]=useState("");

    console.log(choice&&choice);

    const handleClockInput=(e)=>{
        if(e.target.name==="hour"){
            setUserHour(Number(e.target.value));
        }
        if(e.target.name==="minute"){
            setUserMinute(Number(e.target.value));
        }
    }

    useEffect(()=>{
        if(showAnswers){
            if(choice.hour===userHour&&choice.minute===userMinute){
                setResultMessage("정답!")
            }
            else{
                setResultMessage("오답!")
            }
        }
    },[showAnswers])

  return (
    <div className='analog-choice-box'>
      <div className='B-analog-container'>
        <AnalogClock hour={choice?.hour} minute={choice?.minute}/>
      </div>
      <div className='clock-input-row'>
        <input onChange={(e)=>handleClockInput(e)} name="hour" className='analog-input'/>시
        <input onChange={(e)=>handleClockInput(e)} name="minute" className='analog-input'/>분
      </div>
      {showAnswers&&resultMessage==="정답!"&&<div className='analog-result-message correct'>{resultMessage}</div>}
      {showAnswers&&resultMessage==="오답!"&&<div className='analog-result-message wrong'>{resultMessage}</div>}
    </div>
  )
}

export default ChoiceBox
