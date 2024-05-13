{
  //Ternary, optional chaining & nullish coalescing operator

  const isAdmin = null;

  const result = isAdmin ?? "Guest";

  console.log( {result} ); // guest




  const getSpeedInMeterPerSecond = (value :unknown)=>{
    if(typeof value==="number"){
      console.log("number")
    }else{
      console.log(typeof value)
    }
  }

  getSpeedInMeterPerSecond(1000)


    //never type
    const throwError = (msg: string): never => {
      throw new Error(msg);
    };
  
    // throwError('galti se ')
}
