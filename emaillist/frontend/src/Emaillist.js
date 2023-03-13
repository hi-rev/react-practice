import React from 'react';
import styles from './assets/css/Emaillist.css';
import Email from './Email';

const Emaillist = ({lists}) => {
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