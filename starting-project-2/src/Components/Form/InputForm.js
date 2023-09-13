import React,{useState} from "react";

let InputForm=(appProps)=>{

    let initialInput={
        name:"",
        age:""
    }
    
    const [userInput,setUserInput]=useState(initialInput);

    let inputHandlar=(input,value)=>{
        setUserInput((prev)=> {
            return {
                ...prev,
                [input]:value
            }
        });
    }

    let submitHandlar=(event)=>{
        event.preventDefault();
        appProps.takeInput(userInput);
    }

    return (
        <div>
            <form onSubmit={submitHandlar}>
                <div>
                    <label>Name</label>
                    <input type="text" 
                           id="name" 
                           onChange={(event)=>{inputHandlar("name",event.target.value)}}
                    />
                </div>
                <div>
                    <label>Age</label>
                    <input type="number" 
                           id="age" 
                           onChange={(event)=>{inputHandlar("age",event.target.value)}}
                    />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default InputForm;