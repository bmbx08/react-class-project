import React, { useEffect, useState } from 'react'
import "./ClockPage2.style.css"
import ProblemInfo from './components/ProblemInfo'
import ProblemTable from './components/ProblemTable/ProblemTable'
import ChoiceSection from './components/ChoiceSection/ChoiceSection'

const ClockPage2 = ({setPage}) => {
  const [fadeIn,setFadeIn]=useState(false);

  useEffect(()=>{
    setFadeIn(true);
  },[])

  return (
    <div className={`clock-page-2 ${fadeIn===true?"fade-in":"fade-out"}`}>
      <div className='clock-page-2-container'>
        <ProblemInfo prob="A"/>
        <ProblemTable/>
        
        <ProblemInfo prob="B"/>
        <ChoiceSection setPage={setPage}/>
      </div>
      
    </div>
  )
}

export default ClockPage2
