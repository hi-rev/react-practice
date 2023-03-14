import React, {useState, useEffect} from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default function App() {
    const [ticks, setTicks] = useState(0);

    useEffect(() => {
        setInterval(function() {
            // tick ++ 하기
        }, 1000);
    }, []);
    return (
        <div>
            <span>{ticks}</span>
            {
                ticks % 10 === 0 ?
                null :
                <Clock
                    message={'ex05: useEffect Hook example'}
                    hours={'11'} /*state.hours*/
                    minutes={'07'} /*state.minutes */
                    seconds={'30'}/> /*state.seconds*/
            }    
        </div>
    );
}