{
  // promise

  type T = {
    message: string;
  };

  const createPromise = (): Promise<T> => {
    return new Promise<T>((resolve, reject) => {

      const data: T = {
        message: "dsfafkj",
      };

      if (data) {
        resolve(data);
      } else {
        reject("failed to load");
      }
    });
  };

  const showData = async (): Promise<T> => {
    const data: T = await createPromise();
    console.log(data);
    return data;
  };

  showData();


  type Todo = {
    userId : number;
    id : number;
    title : string;
    completed : boolean;
  }


  const getToDO = async () :Promise <Todo> =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/')
    const data = await res.json();
    console.log(data)
    return data
  }

  getToDO()
  //
}
