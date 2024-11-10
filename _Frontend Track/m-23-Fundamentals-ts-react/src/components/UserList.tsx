import React from 'react';
type TUserType ={
    name : string;
}

type TProps = {
    isLoading : boolean;
    error : boolean;
    data : TUserType[];
}
const UserList = ({isLoading,error,data}:TProps) => {
    if (isLoading && !error) {
        return <p>Loading......</p>;
      }
      return <div>{data.map((i,_idx)=><p key={_idx}>{i.name}</p>)}</div>;
};

export default UserList;