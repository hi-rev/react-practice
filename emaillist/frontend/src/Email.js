import React, { useState } from 'react';

const Email = ({no, firstName, lastName, email}) => {
    const [deleted, setDeleted] = useState(false);

    // delete
    const deleteEmail = async () => {
        try {
            const response = await fetch(`/api/email/${no}`, {
                method: 'delete',
                headers: {
                    'Accept': 'application/json'
                }
            });
      
            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
      
            const json = await response.json();
            if (json.result !== 'success') {
                throw new Error(`${json.result} ${json.message}`);
            }

            setDeleted(true);
      
          } catch(err) {
            console.log(err.message);
          }
    }

    const handleDeleteClick = (e) => {
        e.preventDefault();
        deleteEmail();
    }

    // 컴포넌트가 다시 렌더링될 때, 'deleted' 상태가 'true'로 변경된 경우
    // return null을 통해 컴포넌트를 렌더링 하지 않도록 한다.
    if (deleted) {
        return null;
    }

    return (
        <li>
            {firstName}
            {lastName}
            <br/>
            {email}
            <a onClick={handleDeleteClick}></a>
        </li>
    );
};

export default Email;