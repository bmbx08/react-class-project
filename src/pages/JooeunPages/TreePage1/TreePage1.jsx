import React from 'react'
import "./TreePage1.style.css"

const TreePage1 = ({setPage}) => {
  return (
    <div>
        TreePage1
      <button onClick={()=>setPage("TreePage2")}>다음 페이지</button>
    </div>
  )
}

export default TreePage1
