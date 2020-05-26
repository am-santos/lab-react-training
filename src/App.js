import React from 'react';
import logo from './logo.svg';
import './App.css';

import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={75} g={75} b={75} />
        <Random min={1} max={6} />
        <Random min={1} max={100} />
        <Random min={1} max={10000} />
        <Greetings lang="de">Antonio</Greetings>
        <Greetings>Ricardo</Greetings>
        <IdCard
          lastName="Doe"
          firstName="John"
          gender="male"
          height={178}
          birth={new Date('1992-07-14')}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
        <IdCard
          lastName="Delores "
          firstName="Obrien"
          gender="female"
          height={172}
          birth={new Date('1988-05-11')}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </header>
    </div>
  );
}

export default App;
