import React, {useState} from 'react';
import './App.css';
import './room.css';

function Room() {
    let [isLit, setLit] = useState(true);
    let [age, setAge] = useState(18);
    let [Temperature, setTemp] = useState(18);
    // console.log(setLit)

  return  (
    <div className={'room '+(isLit? 'lit': 'dark')}>
        <h1>This room is {isLit ? 'Lite': 'Dark'}</h1>
        <h1>Age: {age}</h1>
        <button onClick={() => {
                                    // console.log('working');
                                    setAge(++age);
                                    setLit(!isLit);
                                }}>
            Toggle Light
        </button>
        
        <h2>Light</h2>
        <button onClick={ ()=> setLit(true) }>ON</button>
        <button onClick={ ()=> setLit(false) }>OFF</button>
        
        <h2>Temperature {Temperature}</h2>
        <button onClick={ ()=> setTemp(++Temperature) }>+</button>
        <button onClick={ ()=> setTemp(--Temperature) }>-</button>
    </div>
  );
}

export default Room;
