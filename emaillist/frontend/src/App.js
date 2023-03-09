import React from 'react';
import './assets/css/App.css';
import Emaillist from './Emaillist';
import RegisterForm from './RegisterForm';
import Searchbar from './Searchbar';

function App(props) {
  return (
      <div id="App" className={'App'}>
        <RegisterForm />
        <Searchbar />
        <Emaillist />
      </div>
  );
}

export default App;