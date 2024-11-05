type TCounter = {
  counter : number,
  setCounter : React.Dispatch<React.SetStateAction<number>>
}
const UserStateExample = ({counter,setCounter} : TCounter) => {
 
  return (
    <div className="...">
      <h1 className="text-red-500">{counter}</h1>
      <button
        className="border rounded b bg-blue-300 hover:bg-blue-400 text-blue-800 hover:text-blue-950 p-2 m-2"
        onClick={()=> setCounter((prev)=> prev+1) }
      >
        Increment
      </button>
     
    
    </div>
  );
};

export default UserStateExample;
