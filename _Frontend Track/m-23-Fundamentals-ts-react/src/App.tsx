/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import './App.css'
import UserStateExample from './pages/UserStateExample'
import Form from './pages/Form';
import UseReducer from './pages/UseReducer';
import UseEffectExample from './pages/UseEffectExample';

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <>
     {/* <UserStateExample counter={counter} setCounter={setCounter}/> */}
     {/* <Form/> */}
     {/* <UseReducer/> */}
     <UseEffectExample/>
    </>
  )
}

export default App
