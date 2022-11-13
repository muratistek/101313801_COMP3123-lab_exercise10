import logo from './logo.svg';
import './App.css';
import DataEntryForm from './DataEntryForm';
import { useState } from 'react';
import FormOutput from './FormOutput';

function App() {
  const [output, setOutput] = useState('')

  const updateOutput = (output) => {
    setOutput(() => {
      return { ...output }
    })
  }

  return (
    <>
      <DataEntryForm updateOutput={updateOutput} />
      <FormOutput data={output} />
    </>
  );
}

export default App;
