{
    //function with generic

    const createArray = (param : string) : string[]=>{
        return [param]
    }


    //geenric
    const createArrayWithGeneric  = <T> (param : T) : T[] => {
        return [param];
    }


    const res = createArray('bd')

    const resWithGeneric = createArrayWithGeneric<string>('Bangladesh');


    type User ={name : string; id : number}

    const resObjectWithGeneric = createArrayWithGeneric <User>({name : 'x',id:12})


    // generic tuple
    const createArrayWithTuple  = <T,Q> (param1 : T, param2:Q) : [T,Q] => {
        return [param1,param2];
    }

    const restuple1 = createArrayWithTuple<string,number>('Bangladesh',19);




    const addCourseToStudent = <T>(student : T)=>{
        const course = 'next level web dev'

        return {
            ...student,
            course
        }
    }

    const std1  = addCourseToStudent ({name : 'x', email : 'djs@gmail.com', dev : 'nlwd'})
    const std2  = addCourseToStudent ({name : '2', email : 'dj@gmail.com', dev : 'nlwd', w: 'dj'})

   

}