import { useState } from 'react';
import './App.css';
import { Form } from './components/Form';

function App() {
const [someState, setSomeState] = useState('');

const takeValueFromForm = (value) => {
  const data = {
    ...value
}

  setSomeState(data.value)
}

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello React World!</h1>
        <Form takeValueFromForm={takeValueFromForm} />
        <div>
          <p> This is value passed by CHILD element to PARENT:</p>
          <h2> {someState} </h2>
        </div>
      </header>
    </div>
  );
}

export default App;
