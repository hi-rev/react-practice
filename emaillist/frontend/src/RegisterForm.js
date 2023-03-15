import React, {useState} from 'react';
import styles from './assets/css/RegisterForm.css';

const RegisterForm = () => {
    const [emails, setEmails] = useState({
       firstName: "",
       lastName: "",
       email: ""
    });
    
    const handleChange = e => {
        setEmails({
            ...emails,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        const newEmail = {
            no: null,
            firstName: emails.firstName,
            lastName: emails.lastName,
            email: emails.email
        };

        try {
            const response = await fetch('/api/email', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newEmail)
            });
    
            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
    
            const json = await response.json();
            if(json.result !== 'success') {
                throw new Error(`${json.result} ${json.message}`)
            }
    
            setEmails([json.data, ...emails]);
            } catch(err) {
                console.log(err.message);
            }
    }

    return (
        <form className={styles.RegisterForm} onSubmit={handleSubmit}>
            <input className={styles.InputFirstName} type='text' name='firstName' value={emails.firstName} placeholder='성' onChange={handleChange} />
            <input className={styles.InputLastName} type='text' name='lastName' value={emails.lastName} placeholder='이름' onChange={handleChange} />
            <input className={styles.InputEmail} type='text' name='email' value={emails.email} placeholder='이메일' onChange={handleChange} />
            <input type='submit' value='등록' />
        </form>
    );
}

export default RegisterForm;