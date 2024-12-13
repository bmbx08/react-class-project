import React, { useEffect, useState } from 'react'
import TableHeader from './Table/TableHeader'
import TableRow from './Table/TableRow'

const ProblemTable = () => {
    const [locationArray,setLocationArray]=useState([
        {location:"방콕",timeDiff:-2},
        {location:"두바이",timeDiff:-5},
        {location:"알래스카",timeDiff:7},
        {location:"호주",timeDiff:1},
    ])

    const [userInputObj,setUserInputObj]=useState(null);
    const [answerObj,setAnswerObj]=useState(null);
    const [showResultMsg,setShowResultMsg]=useState(false);
    const [resultMessage,setResultMessage]=useState("");

    let objectForm={
        Bangkok:{
            hour:null,
            minute:null,
            period:null,
        },
        Dubai:{
            hour:null,
            minute:null,
            period:null,
        },
        Alaska:{
            hour:null,
            minute:null,
            period:null,
        },
        Aussie:{
            hour:null,
            minute:null,
            period:null,
        },
    }

    const handleASubmit=()=>{
        if(JSON.stringify(userInputObj) === JSON.stringify(answerObj)){
            setShowResultMsg(true);
            setResultMessage("정답입니다!😊");
        }
        else{
            setShowResultMsg(true);
            setResultMessage("오답이네요😭")
        }
    }

    useEffect(()=>{
        if(userInputObj===null){
            setUserInputObj(objectForm);
        }
    },[])

    useEffect(()=>{
        console.log("입력 객체:",userInputObj);
    },[userInputObj])

    useEffect(()=>{
        console.log("정답 객체:",answerObj);
    },[answerObj])

  return (
    <div className='problem-table-container'>
        <div className='problem-table'>
            <TableHeader setAnswerObj={setAnswerObj}/>
            {locationArray&&locationArray.map((loc)=>(
                <TableRow loc={loc} setUserInputObj={setUserInputObj}/>
            ))}
        </div>
        <div className='A-submit-section'>
            <button onClick={handleASubmit} className="A-submit-button">입력</button>
        </div>
        {showResultMsg&&<div className='table-result-section'>{resultMessage}</div>}
        
      
    </div>
  )
}

export default ProblemTable