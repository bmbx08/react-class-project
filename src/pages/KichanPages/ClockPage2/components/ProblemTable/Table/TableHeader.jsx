import React, {useEffect, useState} from "react";
import makeAnswerObj from "./makeAnswerObj";

const TableHeader = ({setAnswerObj}) => {
  const [currentTime, setCurrentTime] = useState({hour: null,minute: null,period: null,});

  useEffect(() => {
    let hour = new Date().getHours();
    let minute = new Date().getMinutes();
    let period =(hour >= 12 ? "오후" : "오전");
    hour = hour % 12
    if(hour===0){
        hour=12;
    }
    setCurrentTime({hour, minute, period});
    makeAnswerObj({hour,minute,period,setAnswerObj})
  }, []);

  return (
    <div className="table-header">
      대한민국 현재 시간: {currentTime.period&&currentTime.period} {currentTime.hour&&currentTime.hour}:{currentTime.minute&&currentTime.minute.toString().padStart(2, "0")}
    </div>
  );
};

export default TableHeader;
