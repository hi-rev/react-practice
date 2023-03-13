import React from 'react';
import './assets/css/App.css';
import lists from './assets/json/data.json';
import Emaillist from './Emaillist';
import RegisterForm from './RegisterForm';
import Searchbar from './Searchbar';

function App(props) {
  return (
      <div id="App" className={'App'}>
        <RegisterForm />
        <Searchbar />
        <Emaillist lists={lists} />
      </div>
  );
}

export default App;