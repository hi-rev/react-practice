import React from 'react';

function Clock(props) {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    /**
     * comment01: JSX 밖은 JavaScript 주석 가능
     */

    return (
    <div 
        /**
         * comment02: 여기서도 주석이 가능하다: 비추
         */
        className='clock' title='시계'>
        {
            /**
             * comment03: 이런 방식으로 표현식이 실행되는 블록 안에서 주석을 달아야 한다: 강추
             */
        }

        {
            /**
             * comment04: JSX는 HTML이 아니다!
             * <!-- --> HTML 주석은 사용할 수 없다.
             */
        }
        {('0' + (hours > 12 ? hours - 12 : hours)).slice(-2)}
        {':'}
        {('0' + minutes).slice(-2)}
        {':'}
        {('0' + seconds).slice(-2)}
        {" "}
        {hours > 12 ? 'PM' : 'AM'}
    </div>
    );
}

export default Clock;