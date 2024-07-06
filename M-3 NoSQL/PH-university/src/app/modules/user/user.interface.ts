export type TUSer = {
    id:string;
    password: string;
    needsPasswordChange : boolean;
    role : 'admin' | 'student' |'faculty';
    status : string;
    isDeleted : boolean;
}

