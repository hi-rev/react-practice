import React from 'react';
import styles from './assets/css/Banner01.css';

// className이 Header로 겹치기 때문에 처리를 해주어야 함

function Banner01(props) {
    return (
        <div>
            <h1 className={styles.Header}>Hello React</h1>
        </div>
    );
}

export default Banner01;