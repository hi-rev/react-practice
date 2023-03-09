import React from 'react';
import styles from './assets/css/Emaillist.css';
import lists from './assets/json/data.json';
import Email from './Email';

const Emaillist = () => {
    return (
        <ul className={styles.Emaillist}>
            {
                lists.map(list => <Email
                                    key={list.no}
                                    firstName={list.firstName}
                                    lastName={list.lastName}
                                    email={list.email} /> )
            }
        </ul>
    );
}

export default Emaillist;