{
  //

  //pick   ==> return data type
  type Person = {
    name: string;
    age: number;
    email?: string;
    contact: string;
  };

  type Name_Age = Pick<Person, "name" | "age">;
  /**
    type Name_Age = {
    name: string;
    age: number;
}
     */


  // ----------------------------------------------------------------------------------

  //-------------omit==> means ogula baddeya
  type contacts = Omit<Person, "name" | "age">;
  /**
type contacts = {
    email?: string | undefined;
    contact: string;
}
     */




  // --------------------------------------------------------------------------------
  // required  => all are required

  type PersonRequired = Required<Person>;

  // type PersonRequired = {
  //     name: string;
  //     age: number;
  //     email: string;
  //     contact: string;
  // }



  //   --------------------------------------------------------------------------
  //partial  sb na nileo hbe

  type PersonPartial = Partial<Person>;
  /**
   * type PersonPartial = {
      name?: string | undefined;
      age?: number | undefined;
      email?: string | undefined;
      contact?: string | undefined;
  }
   */


  // -------------------------------------------------------------------------------
  // readonly

  type PersonReadOnly = Readonly<Person>;


  const p1: PersonReadOnly = {
    name: 'k',
    age: 9,
    contact: 'jd',
    email: 'jdf'
  }


  // --------------------------------------------------------------------------------
  // /record  dynamic

  type Obj = Record<string, string | number>

  const EmptyObj: Record<string, unknown> = {}

  const obj1: Obj = {
    a: 'sd',
    n: 'dkjsa',
    t: 4
  }
  //
}
