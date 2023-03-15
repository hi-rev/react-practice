import React, {useEffect, useState} from 'react';
import './assets/css/App.css';
import Emaillist from './Emaillist';
import RegisterForm from './RegisterForm';
import Searchbar from './Searchbar';

function App() {
  const [emails, setEmails] = useState([]);

  // emaillist 출력
  const fetchEmails = async () => {
    try {
      const response = await fetch(`/api/email`, {
          method: 'get',
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

      setEmails(json.data);

    } catch(err) {
      console.log(err.message);
    }    
  }

  useEffect(() => {
    fetchEmails();
  }, []);

  const notifyKeyWordChanged = function(search) {
    // json 데이터값을 filter
    const filterEmails = emails.filter(e =>
      e.firstName.includes(search) || e.lastName.includes(search) || e.email.includes(search)
    );
    setEmails(filterEmails);
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