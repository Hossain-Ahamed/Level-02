import React from 'react';
import ReactDOM from 'react-dom/client'
import { AnotherHello, HelloWorld } from "./another";
import App  from './App';


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App/>);

 // ----------------- 22-1 to 3 ------------------- 
// const root = ReactDOM.createRoot(document.getElementById("root"));

// const App = () => {
//   return React.createElement(
//     "h1",
//     { style: { color: "red" } },
//     "This is my goriba react",
//     HelloWorld(),
//     AnotherHello(),
//   );
// };

// root.render(React.createElement(App));




// Babel imported // --------22-3-----------

