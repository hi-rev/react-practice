import React from 'react';

/**
 * props: 리액트 컴포넌트에서 부모 컴포넌트로부터 전달받은 속성값을 담고 있는 객체
 * 반환값이 JSX라면, 실제 DOM에 렌더링하게 된다.
 */
function Clock01(props) {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    let session = 'AM';
    if (hours > 12) {
        session = 'PM';
    }

    if (hours < 10) {
        hours = '0' + hours;
    }

    return (
        <div>
            {hours}:{minutes}:{seconds} {session}
        </div>
    );
}

export default Clock01;