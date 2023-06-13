// import './App.css';
import { useState } from 'react';

function App() {
  const [ buttonColor, setButtonColor ] = useState('red');
  const [ disabled, setDisabled ] = useState(false);
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  return (
    <div>
      <button 
        style={{backgroundColor: disabled ? 'gray' : buttonColor}}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={disabled}
        id="colorChange"
      >
        Change to {newButtonColor}
      </button>
      <input 
        type="checkbox"
        id="disabled-button-checkbox"
        defaultChecked={disabled}
        onClick={(e) => setDisabled(e.target.checked)} />
      <label htmlFor="disabled-button-checkbox">Disable</label>
      </div>
  );
}

export default App;
