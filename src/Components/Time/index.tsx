import React, { useEffect, useState } from "react";
import {TimeTitle} from "./style/TimeTitle";
import {TimeStyled} from "./style/TimeStyled";

export const Time = () => {
    const [isActive, setIsActive] = useState(true);
    const [time, setTime] = useState(0);

    useEffect(() => {
        let interval: any = null;
        if (isActive) {
            interval = setInterval(() => {
                setTime((time) => time + 10);
            }, 10);
        } else {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        };
    }, [isActive]);
    return (
        <TimeStyled>
            <TimeTitle>
                Time:
            </TimeTitle>
            <div style={{width: '5px'}}/>
            <TimeTitle >
            <span>
                {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
            </span>
            <span>
                {("0" + Math.floor((time / 1000) % 60)).slice(-2)}.
            </span>
            <span>
                {("0" + ((time / 10) % 100)).slice(-2)}
            </span>
            </TimeTitle>
        </TimeStyled>
    )
}