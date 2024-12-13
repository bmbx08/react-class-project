import React, { useEffect, useState } from "react";
import Clock from "react-clock";
import "react-clock/dist/Clock.css";

const AnalogClock = ({hour,minute}) => {
  console.log(hour,minute)
  const [value, setValue] = useState(new Date(2024,12,12,hour,minute,0));

  useEffect(() => {
    // const interval = setInterval(() => setValue(new Date()), 1000);
    // return () => {
    //   clearInterval(interval);
    // };
    // setValue(new Date(2024,12,12,hour,minute,0))
  }, [hour,minute]);

  return (
    <div>
      <Clock value={value} size="12em"/>
      {console.log(value)}
    </div>
  );
};

export default AnalogClock;
