import React, {useEffect} from 'react';
import SevenSegmentLED from "./SevenSegmentLED";
import SessionAmPm from "./SessionAmPm";
import './assets/scss/Clock.scss';

export default function Clock({message, hours, minutes, seconds}) {

    return (
        <div className={'clock-display'}>
            <h2>{message}</h2>
            <div className={'Clock'}>
                <SevenSegmentLED number={hours < 10 ? '0' + hours : hours} colon={true}/>
                <SevenSegmentLED number={minutes < 10 ? '0' + minutes : minutes} colon={true}/>
                <SevenSegmentLED number={seconds < 10 ? '0' + seconds : seconds} colon={false}/>
                <SessionAmPm session={hours > 12 ? 'pm' : 'am'}/>
            </div>
        </div>
    );
}