{
    // constrain



    // making extends enforce to give this contrains, u can recieve anything but must include name , email, id 
    const addCourseToStudent = <T extends {id : number; name : string; email : string}>(student : T)=>{
        const course = 'next level web dev'

        return {
            ...student,
            course
        }
    }

    const std1  = addCourseToStudent ({id: 12, name : 'x', email : 'djs@gmail.com', dev : 'nlwd'})
    const std2  = addCourseToStudent ({id: 12, name : '2', email : 'dj@gmail.com', dev : 'nlwd', w: 'dj'})
   











    //
}