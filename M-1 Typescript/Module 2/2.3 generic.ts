{
  // Generic type

  //reuseable
  type GenericArray<T> = Array<T>;

  // const rolls : number[] = [1,2,3,4];
  const rolls: Array<number> = [1, 2, 3, 4];

  // const names : string[] = ['x','y','z'];
  const names: GenericArray<string> = ["x", "y", "z"];

  // const bool: boolean[] = [true, false, true];
  const bool: GenericArray<boolean> = [true, false, true];

  // object using generic
  const user: GenericArray<{ name: string; age: number }> = [
    {
      name: "x",
      age: 1,
    },
    {
      name: "y",
      age: 100,
    },
  ];

  //generic tuple

  type GenericTuple<X, Y> = [X, Y];
  const manus: GenericTuple<string, string> = ["x", "y"];
  const users: GenericTuple<number, { name: string; email: string }> = [
    123,
    { name: "y", email: "a@gmail.com" },
  ];
  //
}
