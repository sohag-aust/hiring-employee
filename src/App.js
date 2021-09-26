import  React, {useState} from 'react';
import './App.css';

import Header from './components/Header/Header';
import Selection from './components/Selection/Selection';

function App() {

  const budget = 5000000;
  const [remainingBudget, setRemainingBudget] = useState(budget);

  const backgroundStyle = { 
    backgroundColor: '#9c9b9a',
    width: '100%',
    backgroundRepeat: 'no-repeat'
  }

  const handleRemainingBudget = (salary) => {
    const newRemainingBudget = remainingBudget-salary;
    setRemainingBudget(newRemainingBudget);
  }

  return (
    <div style={backgroundStyle}>
      <Header budget={budget} remainingBudget={remainingBudget}/>
      <Selection budget={budget} 
                 remainingBudget={remainingBudget} 
                 handleRemainingBudget={handleRemainingBudget}/>
    </div>
  );
}

export default App;
