import React from 'react';
import './assets/css/App.css';
import Emaillist from './Emaillist';
import RegisterForm from './RegisterForm';
import Searchbar from './Searchbar';
import list from './assets/json/data.json';

function App(props) {
  return (
      <div id="App" className={'App'}>
        <RegisterForm />
        <Searchbar />
        <Emaillist list={list}/>
      </div>
  );
}

export default App;