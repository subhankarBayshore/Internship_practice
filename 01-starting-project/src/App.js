import logo from './assets/investment-calculator-logo.png';
import ShowResult from './Components/Details/ShowResult';
function App() {
  
  return (

    
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>
      <div>
        <ShowResult />
      </div>
    </div>
  );
}

export default App;
