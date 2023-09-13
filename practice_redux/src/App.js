import RecallRequestRedux from "./Component/RecallRequestRedux";
import AdminLogin from "./Component/AdminLogin";
import "./App.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  const [show, setShow] = useState(false);
  const getOtherRequest = () => {
    // return (
    //   <div>
    //     <RecallRequestRedux />
    //   </div>
    // );
    setShow(true);
  };

  return (
    <div className="App">
      <Routes>
        <Route Component={AdminLogin} path="" />
        <Route Component={RecallRequestRedux} path="/dashboard" />
      </Routes>
      {/* {!show && <AdminLogin getOtherRequest={getOtherRequest} />}
      {show && <RecallRequestRedux />} */}
    </div>
  );
}

export default App;
