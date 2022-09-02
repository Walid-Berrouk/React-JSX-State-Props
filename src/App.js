import React, { useState } from 'react';
import './App.css'
import Challenge_01 from "./challenges/Challenge_01";
import Challenge_02 from "./challenges/Challenge_02";
import Challenge_03 from "./challenges/Challenge_03";
import Challenge_04 from "./challenges/Challenge_04";
import Challenge_05 from './challenges/Challenge_05';
import Challenge_06 from './challenges/Challenge_06';
import Challenge_07 from './challenges/Challenge_07';
import Challenge_08 from './challenges/Challenge_08';
import Challenge_09 from './challenges/Challenge_09';
import Challenge_10 from './challenges/Challenge_10';
import Challenge_11 from './challenges/Challenge_11';
import Challenge_12 from './challenges/Challenge_12';
import Challenge_13 from './challenges/Challenge_13';
import Challenge_14 from './challenges/Challenge_14';
import Challenge_15 from './challenges/Challenge_15';
import Challenge_16 from './challenges/Challenge_16';
import Challenge_17 from './challenges/Challenge_17';
import Challenge_18 from './challenges/Challenge_18';
import Challenge_19 from './challenges/Challenge_19';
import Challenge_20 from './challenges/Challenge_20';
import Challenge_21 from './challenges/Challenge_21';
import Discovery_Challenge from './challenges/Discovery_Challenge';
import Ultimate_Challenge from './challenges/Ultimate_Challenge';


function App() {

  const [check, setCheck] = useState(false)

  return (
    
    <div className={check ? "dark-mode" : ""}>
      <h1 className="center">Basic React Components Challenges</h1>
      <Challenge_01 />
      <Challenge_02 />
      <Challenge_03 />
      <Challenge_04 />
      <Challenge_05 />
      <Challenge_06 />
      <Challenge_07 />
      <Challenge_08 />
      <Challenge_09 />
      <Challenge_10 />
      <h1 className="center mt-20">React State Challenges</h1>
      <Challenge_11 />
      <Challenge_12 />
      <Challenge_13 />
      <Challenge_14 />
      <Challenge_15 />
      <Challenge_16 />
      <h1 className="center mt-20">React Props Challenges</h1>
      <Challenge_17 />
      <Challenge_18 />
      <Challenge_19 check={check} setCheck={setCheck}/>
      <Challenge_20 />
      <Challenge_21 />
      <Ultimate_Challenge />
      <Discovery_Challenge />
    </div>

  );
}

export default App;
