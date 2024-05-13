{
  // 2.10 mapped types

  const arrOfNubmer: number[] = [1, 2, 3];

  const arrofString: string[] = arrOfNubmer.map((num) => num.toString());

  console.log(arrofString);

// ---------------------------------------------------------------------------------------
  //mapped type
  type AreaNumber = {
    height: number;
    width: number;
  };

  type Height = AreaNumber["height"]; //look up

  // t => height string ; width number
  type AreaString<T> = {
    [key in keyof T]: T[key];
  };


  const area1: AreaString<{ height: string; width: string ; depth:number }> = {
    height: "78",
    width: "90",
    depth : 32
  };


 
}
