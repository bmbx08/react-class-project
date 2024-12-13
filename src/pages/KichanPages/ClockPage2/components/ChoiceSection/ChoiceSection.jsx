import React, { useEffect, useState } from 'react'
import ChoiceBox from './ChoiceBox';

const ChoiceSection = ({setPage}) => {
  const [choiceArray,setChoiceArray]=useState(null);
  const [showAnswers, setShowAnswers]= useState(false);

  const createRandTimeArray=(num)=>{
    let randomTimeObjectArray=[];
    for(let i=1;i<=num;i++){
      let randomHour = Math.floor((Math.random()*12)+1);
      let randomMinute = Math.floor(Math.random()*60);
      let randTimeObj={hour:randomHour,minute:randomMinute};
      randomTimeObjectArray.push(randTimeObj);
    }
    return randomTimeObjectArray;
  }

  const handleBSubmit=()=>{
    setShowAnswers(true);
  }

  useEffect(()=>{
    let randomTimeArray=createRandTimeArray(4);
    setChoiceArray(randomTimeArray);
  },[])

  return (
    <div className='choice-box-container'>
      {choiceArray?.map((choice)=>(
        <ChoiceBox choice={choice} showAnswers={showAnswers}/>
      ))}
      <div className='B-submit-section'>
        
        <button onClick={handleBSubmit} className='B-submit-button'>입력</button>
        {showAnswers&&
        <>
          <button onClick={()=>setShowAnswers(false)} className='B-submit-button'>다시 풀기</button>
          <button onClick={()=>setPage("TreePage1")} className='page-change-button'>다음 페이지</button>
        </>}
      </div>
    </div>
  )
}

export default ChoiceSection
