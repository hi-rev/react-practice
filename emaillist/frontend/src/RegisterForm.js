import React, {useState} from 'react';
import styles from './assets/css/RegisterForm.css';

const RegisterForm = ({callbackAddEmail}) => {

    // insert
    const [emails, setEmails] = useState({
       firstName: "",
       lastName: "",
       email: ""
    });
    
    return (
        <form className={styles.RegisterForm} onSubmit={(e) => {
            e.preventDefault();
            callbackAddEmail(e.target.firstName.value, e.target.lastName.value, e.target.email.value);
            
            e.target.firstName.value = "";
            e.target.lastName.value = "";
            e.target.email.value = "";
        }}>
            <input className={styles.InputFirstName} type='text' name='firstName' placeholder='성' />
            <input className={styles.InputLastName} type='text' name='lastName' placeholder='이름' />
            <input className={styles.InputEmail} type='text' name='email' placeholder='이메일' />
            <input type='submit' value='등록' />
        </form>
    );
}

export default RegisterForm;