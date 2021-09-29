import { useState } from "react";

const Alert = ({setInputFromChild , appFunc}) => {
    const [state, inputText] = useState("");

    //Input
    function inputHandler(e){
        //console.log(state)
        inputText(e.target.value);
        setInputFromChild(e.target.value);
    }
    
    //Button
    function handlerClicked(){
        appFunc(state);
        //console.log(state)
    }

    return (
        <>
        <button onClick={handlerClicked}>Show p-tag text</button>
        <input type="text" onChange={inputHandler} value={state}/>
        </>
    );
}

export default Alert;

/*
//Input
    function inputHandler(e){
        //console.log(state)
        inputText(e.target.value);
        setInputFromChild(e.target.value);
    }
    
    //Button
    function handlerClicked(){
        appFunc(state);
        console.log(state)
    }
*/