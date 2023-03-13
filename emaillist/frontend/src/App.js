import React, { useState } from 'react';
import './assets/css/App.css';
import data from './assets/json/data.json';
import Emaillist from './Emaillist';
import RegisterForm from './RegisterForm';
import Searchbar from './Searchbar';

function App() {
  const [emails, setEmails] = useState(data);

  const notifyKeyWordChanged = function(search) {
    console.log(search);
    // 만약 keyword가 firstname or lastname or email에 있을 경우
    const emails = data.filter(e =>
      e.firstName.includes(search) || e.lastName.includes(search) || e.email.includes(search)
    );
    console.log(emails);
    setEmails(emails);
  }

  return (
      <div id="App" className={'App'}>
        <RegisterForm />
        <Searchbar callback={notifyKeyWordChanged} />
        <Emaillist lists={emails} />
      </div>
  );
}

export default App;