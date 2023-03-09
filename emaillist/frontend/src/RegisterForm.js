import React from 'react';
import styles from './assets/css/RegisterForm.css';

const RegisterForm = () => {
    return (
        <div className={styles.RegisterForm}>
            <input className={styles.InputFirstName} type='text' name='firstName' placeholder='성' />
            <input className={styles.InputLastName} type='text' name='lastName' placeholder='이름' />
            <input className={styles.InputEmail} type='text' name='email' placeholder='이메일' />
            <input type='submit' value='등록' />
        </div>
    );
}

export default RegisterForm;