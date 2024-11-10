
import UserList from "./UserList";
import useUserData from '../hooks/useUserData';

const UserContainer = () => {
 
  const {isLoading,data,error}= useUserData()
  return <UserList data={data} error={error} isLoading={isLoading} />;
};

export default UserContainer;
