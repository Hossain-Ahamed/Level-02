{
  // interface - generic

  interface Developer<T,X=null> {  //default parameter
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike ?: X;
  }


  interface SmartWatch {
    brand: string;
    model: string;
    releaseYear: number;
  }

  
  const poorDev: Developer<SmartWatch> = {
    name: "goribs",
    computer: {
      brand: "amd",
      model: "b520",
      releaseYear: 2021,
    },
    smartWatch: {
      brand: "apple",
      model: "45",
      releaseYear: 2021,
    },
  };


  interface AppleWatch {
    brand: string;
    model: string;
    releaseYear: number;
    heartRate: boolean;
  }

  interface Bike {
    brand : string;
    model : string;
  }


  const richDev: Developer<AppleWatch,Bike> = {
    name: "goribs",
    computer: {
      brand: "amd",
      model: "b520",
      releaseYear: 2021,
    },
    smartWatch: {
      brand: "apple",
      model: "45",
      releaseYear: 2021,
      heartRate: true,
    },
    bike : {
        model : 'dj',
        brand : 'yamaha'
    }
  };
  //





  //
}
