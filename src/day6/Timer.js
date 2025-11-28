import { useEffect, useState } from "react"
import styled from "./Timer.module.scss"
const Timer = () => {
    const [time,setTime] = useState(0);
    const [isRunning,setIsRunning] = useState(false);
    const handleStartStop = ()=>{
        setIsRunning(!isRunning);
    }
    useEffect(()=>{
        let intervalID;
        if( isRunning ){
            intervalID = setInterval(()=>{
                setTime((prev)=>{return prev+1})
            },1000);
        }
        return ()=>{
            clearInterval(intervalID);
        }
    },[isRunning]);
  const handleReset = ()=>{
    setTime(0);
    setIsRunning(false);
  }
  const minutes = Math.floor(time/60);
  const seconds = time%60;
  const format = (num)=>{
    return String(num).padStart(2,"0");
  }
    return (
    <div className={styled.timer}>
        <p>{format(minutes)}:{format(seconds)}</p>
        <div>
            <button onClick={handleStartStop}>
                {isRunning ? "Stop":"Start"}
            </button>
            {/* <button>Stop</button> */}
            <button onClick={handleReset}>Reset</button>
        </div>
    </div>
  )
}

export default Timer