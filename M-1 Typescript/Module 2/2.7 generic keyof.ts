{
  // generic contraint with keyof operatior

  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner1 = "bike" | "car" | "ship"; //manually
  const person1: Owner1 = "car"; //manually

  type Owner2 = keyof Vehicle;
  const person2: Owner2 = "car";

  // get property of object with checking
  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const user = {
    name: "hossain",
    age: 322,
    address: "asdjfjlasdjflkasdjflksdajfjsdjf",
  };

  console.log(getPropertyValue(user, "name"));
}
