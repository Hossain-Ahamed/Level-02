/** // ----------------- 22-1 to 3 ------------------- */
const root= ReactDOM.createRoot(document.getElementById('root'));

const HelloWorld = ()=>{
    return React.createElement('p',{},'Hello World !!!');
}

const App = ()=>{
    return React.createElement('h1',{style : {color: 'red'}},'This is my goriba react',HelloWorld());
}

root.render(React.createElement(App))



/**


// Babel imported // --------22-3-----------
const root = ReactDOM.createRoot(document.getElementById("root"));

const HelloWorld = () => {
  return <p>Hello World</p>;
};
const App = () => {
  return (
    <React.Fragment>
      <h1>This is my fokira app</h1>
      <HelloWorld />
    </React.Fragment>
  );
};

root.render(React.createElement(App));
 */