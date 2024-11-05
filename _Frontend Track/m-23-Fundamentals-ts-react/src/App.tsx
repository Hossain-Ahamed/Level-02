import { useState } from 'react';
import './App.css'
import UserStateExample from './pages/UserStateExample'

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <>
     <UserStateExample counter={counter} setCounter={setCounter}/>
    </>
  )
}

export default App
