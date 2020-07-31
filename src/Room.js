import React, {useState} from 'react';
import './App.css';

function Room() {
    let [isLit, setLit] = useState(true);
    let [age, setAge] = useState(18);
    // console.log(setLit)

  return (
    <div>
        <h1>This room is {isLit ? 'Lite': 'Dark'}</h1>
        <h1>Age: {age}</h1>
        <button onClick={() => {
                                    // console.log('working');
                                    setAge(++age);
                                    setLit(!isLit);
                                }}>
            Toggle Light
        </button>
    </div>
  );
}

export default Room;
