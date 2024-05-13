{

    // conditional type


    type a1 = null;
    type b1 = undefined;

    type x1 = a1 extends null ? true : false; //x1 conditional type ==> depends on x1

    type y1 = a1 extends number ? true  : b1 extends undefined  ? undefined : any;



    type Sheikh = {
        bike : string;
        car : string;
        ship : string;
    }


    // key of "bike" | "car" | "ship"

    type CheckVehicle<T> = T extends keyof Sheikh ? true : false;


    type HasBike = CheckVehicle <"car">;


    type HasTructor = CheckVehicle <"tructor">




    //

}