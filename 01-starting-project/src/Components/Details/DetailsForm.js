import React,{ useState } from "react";

// ?.
let DetailsForm = (showResultProps) => {

    let intialUserInput={
        currentSavings:"",
        yearlyContribution:"",
        expectedReturn:"",
        duration:""
    }


let [userInput,setUserInput]=useState("")

        
        const submitHandler = (event) => {

            event.preventDefault();
            showResultProps.onCalculate(userInput);
        }

        let oneInputHandling=(input,value)=>{
            setUserInput((prev)=> {
            return {
                ...prev,
                [input]:value
            }
        });

            //setData(intialUserInput.currentSavings)
    
        }

        let resetHandlar= () =>{
            setUserInput(intialUserInput);
        }


        return (
            <div onSubmit={submitHandler}>
                <form className="form">
                    <div className="input-group">
                        <p>
                            <label htmlFor="current-savings">Current Savings ($)</label>
                            <input
                                type="number"
                                id="currentSavings"
                                onChange={(event) => { oneInputHandling("currentSavings",event.target.value) }}                               
                                value={userInput.currentSavings}
                            />
                        </p>
                        <p>
                            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                            <input
                                type="number"
                                id="yearlyContribution"
                                onChange={(event) => { oneInputHandling("yearlyContribution",event.target.value) }}
                                value={userInput.yearlyContribution}
                            />
                        </p>
                    </div>
                    <div className="input-group">
                        <p>
                            <label htmlFor="expected-return">
                                Expected Interest (%, per year)
                            </label>
                            <input
                                type="number"
                                id="expectedReturn"
                                onChange={(event) => { oneInputHandling("expectedReturn",event.target.value) }}
                                value={userInput.expectedReturn}
                            />
                        </p>
                        <p>
                            <label htmlFor="duration">Investment Duration (years)</label>
                            <input
                                type="number"
                                id="duration"
                                onChange={(event) => { oneInputHandling("duration",event.target.value) }}
                                value={userInput.duration}
                            />
                        </p>
                    </div>
                    <p className="actions">
                        <button onClick={resetHandlar} type="reset" className="buttonAlt">
                            Reset
                        </button>
                        <button type="submit" className="button">
                            Calculate
                        </button>
                    </p>
                </form>
            </div>
        )
}

export default DetailsForm;