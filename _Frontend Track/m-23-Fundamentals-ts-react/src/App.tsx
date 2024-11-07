import { useState } from 'react';
import './App.css'
import UserStateExample from './pages/UserStateExample'
import Form from './pages/Form';

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <>
     {/* <UserStateExample counter={counter} setCounter={setCounter}/> */}
     <Form/>
    </>
  )
}

export default App
