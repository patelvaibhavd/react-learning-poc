import './App.css';
import Expenses from './components/Expenses/Expenses';

const App = () => {
  const expenses = [
      {date:new Date(2021, 2, 25), title:'Credit Card Bill', amount: '500'},
      {date:new Date(2023, 1, 25), title:'Car Maintatance', amount: '530.52'},
      {date:new Date(2022, 5, 25), title:'Computer', amount: '30'},
      {date:new Date(2025, 3, 25), title:'Travel', amount: '540.02'},
  ];
  return (
    <div className="App">
        <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
