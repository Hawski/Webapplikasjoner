import React from 'react';
import './styles.scss';
import MyComponent from './components/MyComponent'
import Food from './components/Food';
import Wrapper from './components/Wrapper';
import { useState } from "react";
import Alert from './components/Alert';



const App = () => {
    const food = ['Pizza', 'Hamburger', 'Coke'];
    const [inputFromChild, setInputFromChild] = useState('');
    
    //sCM = showClickMe
    const [sCM, sSCM] = useState(false); // tok denne koden fra hooks og state - fullstækk

    const appFunc = () => {
        //console.log(inputFromChild + " ---- test"); //test
        sSCM((noe => !noe));
    }

    return (
        <>
        <h1>The magic happens here</h1>
        <MyComponent />

        <Food food={food}/>

        <Wrapper>
            <h1>YOYOYO</h1>
            <p>TESTER 123</p>
            <p>OKEY</p>
        </Wrapper>

        <Alert setInputFromChild={setInputFromChild} appFunc={appFunc}/>
        {
            sCM && (<p>{inputFromChild}</p>)
        }
        
        </>
    );
}





export default App;
