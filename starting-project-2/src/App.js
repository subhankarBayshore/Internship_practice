import React, { useState } from "react";
import InputForm from "./Components/Form/InputForm";
import DisplayOutput from "./Components/Output/DisplayOutput";
import NewInputForm from "./Components/Form/NewInputForm";
import Quiz from "./Components/Form/Quiz";

function App() {
  const [formInput, setFormInput] = useState();

  return (
    <div>
      <Quiz />
      {/* <NewInputForm/> */}
      {/* <InputForm takeInput={setFormInput}/> */}
      {/*
          (formInput!=null) &&
            <DisplayOutput props1={formInput} /> */}
    </div>
  );
}

export default App;
