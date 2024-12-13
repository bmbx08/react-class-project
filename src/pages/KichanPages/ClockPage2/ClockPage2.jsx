import React from 'react'
import "./ClockPage2.style.css"
import ProblemInfo from './components/ProblemInfo'

const ClockPage2 = ({setPage}) => {
  return (
    <div className='clock-page-2'>
      <div className='clock-page-2-container'>
        <ProblemInfo prob="A"/>
        

        <ProblemInfo prob="B"/>

        <button onClick={()=>setPage("TreePage1")}>다음 페이지</button>
      </div>
      
    </div>
  )
}

export default ClockPage2
