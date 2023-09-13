import TodoApp from "./Todoapp/Component/TodoApp";
import DetailsApp from "./DetailsApp/DetailsApp";
import NewForm from "./DetailsApp/NewForm";
import Form from "./FormValidation/Form";
import DateTime from "./FormValidation/DateTime";
import DropDown from "./FormValidation/DropDown";
import ModifiedNewForm from "./DetailsApp/ModifiedNewForm";
import CovidGetApi from "./ApiRequest/CovidGetApi";
import RecallRequest1 from "./ApiRequest/RecallRequest1";
import RecallRequest2 from "./ApiRequest/RecallRequest2";
import "./App.css";

function App() {
  return (
    <div className="App">
      <RecallRequest2 />
      {/* <RecallRequest1 /> */}
      {/* <CovidGetApi /> */}
      {/* <ModifiedNewForm /> */}
      {/* <DropDown /> */}
      {/* <DateTime /> */}
      {/* <Form /> */}
      {/* <NewForm /> */}
      {/* <DetailsApp /> */}
      {/* <TodoApp /> */}
    </div>
  );
}

export default App;
