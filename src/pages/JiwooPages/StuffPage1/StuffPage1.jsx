import React from 'react'

const StuffPage1 = ({setPage}) => {
  return (
    <div>
      StuffPage1
      <button onClick={()=>setPage("StuffPage2")}>다음 페이지</button>
    </div>
  )
}

export default StuffPage1