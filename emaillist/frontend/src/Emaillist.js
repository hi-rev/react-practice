import React from 'react';
import styles from './assets/css/Emaillist.css';

const Emaillist = ({list}) => {
    return (
        <div className={styles.Emaillist}>
            <li>
                {list.firstName}
                {list.lastName}
                <br/>
                {list.email}
            </li>
        </div>
    );
}

export default Emaillist;