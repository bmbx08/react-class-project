import React from 'react'
import PlantIcon from "../../../../common/images/plant.png"

const ProblemInfo = ({prob}) => {
  return (
    <div className='clock-page1-probinfo'>
      <img src={PlantIcon} width="30px" className='clock-plant-icon'/>
      {prob==="A"&&"다음은 대한민국과의 국가별 시차입니다. 각 나라별 현재 시간을 적어보세요."}
      {prob==="B"&&"현재 시간에 맞는 시계를 골라보세요"}
      
    </div>
  )
}

export default ProblemInfo
