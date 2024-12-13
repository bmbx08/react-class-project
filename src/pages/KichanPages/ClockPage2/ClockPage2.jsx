import React from 'react'
import "./ClockPage2.style.css"

const ClockPage2 = ({setPage}) => {
  return (
    <div>
      <div>
        
      </div>
      <button onClick={()=>setPage("TreePage1")}>다음 페이지</button>
    </div>
  )
}

export default ClockPage2
