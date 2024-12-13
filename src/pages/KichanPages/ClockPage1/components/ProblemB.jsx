import React, { useEffect, useState } from 'react'
import ChoiceBox from './ChoiceBox';

const ProblemB = ({userTimeObject,answerBoolean,setAnswerBoolean}) => {
  const [choiceArray,setChoiceArray]=useState([]);
  const [shuffledChoices, setShuffledChoices] = useState(null);
  const [resultMessage, setResultMessage] = useState(null);

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

  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i=newArray.length-1;i>0;i--){
      const randIndex = Math.floor(Math.random()*(i+1));
      [newArray[i],newArray[randIndex]] = [newArray[randIndex], newArray[i]]
    }
    return newArray;
  }

  const handleBSubmit=(choiceObj)=>{
    if(userTimeObject===choiceObj){
      console.log("answer!!!");
      setAnswerBoolean(true);
      setResultMessage("정답입니다!😊");
    }
    if(userTimeObject!==choiceObj){
      setAnswerBoolean(false);
      setResultMessage("오답이네요😭");
    }
  }

  useEffect(()=>{
    let randomTimeArray=createRandTimeArray(3);
    setChoiceArray([
      ...randomTimeArray, userTimeObject, 
    ])
  },[])

  useEffect(()=>{
    if(choiceArray.length !== 0){
      let shuffledArray=shuffleArray(choiceArray);
      console.log("shuffled choices",shuffledArray);
      setShuffledChoices(shuffledArray);
    }
  },[choiceArray])

  
  return (
    <div className="ProblemB-section">
      <div className='choice-box-section'>
        {shuffledChoices&&shuffledChoices.map((choice, index)=>(
          <ChoiceBox choice={choice} choiceNum={index+1} handleBSubmit={handleBSubmit}/>
        ))}
      </div>
      <div className='B-result-section'>
        {resultMessage&&resultMessage}
      </div>
      
      
    </div>
  )
}

export default ProblemB