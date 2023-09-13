import React, {useEffect, useState} from "react"
import DetailsForm from "./DetailsForm";

let ShowResult=()=>{

    const [userInput,setUserInput]=useState();
  
    
    const calculateHandler = (userInput) => {

        const yearlyData = [];

//      console.log((userInput.currentSavings)+(userInput.yearlyContribution*userInput.duration));
        //if (userInput) {
            let currentSavings = +userInput.currentSavings
            const yearlyContribution = +userInput.yearlyContribution;
            const expectedReturn = +userInput.expectedReturn / 100;
            const duration = +userInput.duration;

            for (let i = 0; i < duration; i++) 
            {
                const yearlyInterest = currentSavings * expectedReturn;
                currentSavings += yearlyInterest + yearlyContribution;
                yearlyData.push({
                    
                    year: i + 1,      // key need to passed
                    yearlyInterest: yearlyInterest,
                    savingsEndOfYear: currentSavings,
                    yearlyContribution: yearlyContribution,
                    totalInterest: yearlyInterest
                });
            }

        //} 
        setUserInput(yearlyData); 
      };

/*
      useEffect((formInput)=>{
        if(!!userInput)
        {calculateHandler()}},
        [userInput])
*/
    return (
        <div>
            <DetailsForm onCalculate={calculateHandler}/> 
            <table className="result">
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Total Savings</th>
                        <th>Interest (Year)</th>
                        <th>Total Interest</th>
                        <th>Invested Capital</th>
                    </tr>
                </thead>
                <tbody>
                    {    // null check needed
                       userInput ? userInput.map(x => (
                            <tr>
                                <td>{x.year}</td>
                                <td>{x.savingsEndOfYear}</td>
                                <td>{x.yearlyInterest}</td>
                                <td>{}</td>
                                <td>{}</td>
                            </tr>
                        )) : null
                        /*
                        userInput && userInput.map((x)=>(
                            <tr>
                                <td>{x.year}</td>
                                <td>TOTAL SAVINGS END OF YEAR</td>
                                <td>INTEREST GAINED IN YEAR</td>
                                <td>TOTAL INTEREST GAINED</td>
                                <td>TOTAL INVESTED CAPITAL</td>
                            </tr>
                        ))
                        */
                    }                   
                </tbody>
            </table>
        </div>
    )
}

export default ShowResult;