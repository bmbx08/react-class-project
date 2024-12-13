import React, { useEffect, useState } from "react";
import Clock from "react-clock";
import "react-clock/dist/Clock.css";

const AnalogClock = ({hour,minute}) => {
  console.log(hour,minute)
  const [value, setValue] = useState(new Date(2024,12,12,hour,minute,0));

  return (
    <div>
      <Clock value={value} size="12em"/>
    </div>
  );
};

export default AnalogClock;
