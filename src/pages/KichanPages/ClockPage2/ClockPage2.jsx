import React from 'react'
import "./ClockPage2.style.css"
import ProblemInfo from './components/ProblemInfo'
import ProblemTable from './components/ProblemTable/ProblemTable'
import ChoiceSection from './components/ChoiceSection/ChoiceSection'

const ClockPage2 = ({setPage}) => {
  return (
    <div className='clock-page-2'>
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
