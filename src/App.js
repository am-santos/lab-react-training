import React from 'react';
import logo from './logo.svg';
import './App.css';

import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import Rating from './components/Rating';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import Dice from './components/Dice';
import Carousel from './components/Carousel';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Iteration 11 */}
        <Carousel
          imgs={[
            'https://randomuser.me/api/portraits/women/1.jpg',
            'https://randomuser.me/api/portraits/men/1.jpg',
            'https://randomuser.me/api/portraits/women/2.jpg',
            'https://randomuser.me/api/portraits/men/2.jpg'
          ]}
        />
        {/* Iteration 10 */}
        <Dice />
        {/* Iteration 9 */}
        <ClickablePicture
          karen="/img/persons/maxence.png"
          aline="/img/persons/maxence-glasses.png"
        />
        {/* Iteration 8 */}
        <LikeButton /> <LikeButton />
        {/* Iteration 7 */}
        {/* TO BE DONE */}
        {/* Iteration 6 */}
        <Rating>2.49</Rating>
        {/* Iteration 5 */}
        {/* TO BE DONE */}
        {/* Iteration 4 */}
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={75} g={75} b={75} />
        {/* Iteration 3 */}
        <Random min={1} max={6} />
        <Random min={1} max={100} />
        <Random min={1} max={10000} />
        {/* Iteration 2 */}
        <Greetings lang="de">Antonio</Greetings>
        <Greetings>Ricardo</Greetings>
        {/* Iteration 1 */}
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
