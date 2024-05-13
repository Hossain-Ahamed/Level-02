{
  //
  //type assertion
  //type changing according to dev  and get the all method of that type
  //as bole deya mean a dev knows better
  let anything: any;
  anything = "Hossain";
  (anything as string).charAt(0);

  // using angle bracket
  let something: any = "hello";
  let length: number = (<string>something).length;

  //function --------------------------------
  const kgToGram = (value: string | number): number | string | undefined => {
    if (typeof value === "string") {
      return `the converted value is ${parseFloat(value) * 1000}`;
    }
    if (typeof value === "number") {
      return value * 1000;
    }
  };

  const result1 = kgToGram(100) as number; console.log(result1)
  const result2 = kgToGram("100") as string; console.log(result2)

  //try catch block with type

  type CustomError = {
    message: string;
  };
  

  try {
  } catch (error) {
    console.log((error as CustomError).message);
  }

  //

  
}
