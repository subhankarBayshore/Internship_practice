import { useState } from "react";
import GenericModal from "../UI/GenericModal";

const SignIn=({onHideCart,appProps})=>{

    const details={
        email: "",
        password: ""
    }

    const [userInput,setUserInput]=useState(details);

    const submitHandler=(event)=>{
        event.preventDefault();
        appProps(userInput);
    }
    const oneInputHandling=(input,value)=>{
        setUserInput(prev=>{
            return {
                ...prev,
                [input]:value
            }
        })
    }

    const resetHandlar=()=>{
        setUserInput(details);
    }

    
    return (
        <GenericModal>
            <form onSubmit={submitHandler} onReset={resetHandlar}>
                <p>
                    <label>Email </label>
                    <input 
                        id="email" 
                        type="email"
                        onChange={(event) => { oneInputHandling("email",event.target.value) }} 
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;

                    <label>Password </label>
                    <input 
                        id="password" 
                        type="password"
                        onChange={(event) => { oneInputHandling("password",event.target.value) }} 
                    />
                </p>
                
                <p>
                    <button type="submit">Sign in</button>
                    <button type="reset">later</button>
                </p>
                <p>
                    <button type="null">Create an account</button>
                </p>
            </form>
        </GenericModal>
    )
}

export default SignIn;