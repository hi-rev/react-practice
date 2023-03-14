import React, {useState, useEffect} from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default function App() {
    const [ticks, setTicks] = useState(0);
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const IntervalId = setInterval(function() {
            setTime(new Date());
            setTicks((ticks) => (ticks + 1));
        }, 1000);
        return (() => clearInterval(IntervalId))
    }, []);
    return (
        <div>
            <span>{ticks}</span>
            {
                ticks % 10 === 0 ?
                null :
                <Clock
                    message={'ex05: useEffect Hook example'}
                    hours={time.getHours()}
                    minutes={time.getMinutes()}
                    seconds={time.getSeconds()}/>
            }
        </div>
    );
}