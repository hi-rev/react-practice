import React, { useState } from 'react';
import './assets/css/App.css';
import data from './assets/json/data.json';
import Emaillist from './Emaillist';
import RegisterForm from './RegisterForm';
import Searchbar from './Searchbar';

function App(props) {
  const [emails, setEmails] = useState(data);
  const notifyKeyWordChanged = function() {
    // 만약 keyword가 firstname or lastname or email에 
    const newEmails = emails.filter(function(e) {
      return true
    })
  }

  return (
      <div id="App" className={'App'}>
        <RegisterForm />
        <Searchbar />
        <Emaillist lists={data} />
      </div>
  );
}

export default App;