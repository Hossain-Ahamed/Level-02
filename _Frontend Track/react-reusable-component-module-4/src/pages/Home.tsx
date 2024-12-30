import { useState } from "react";
import { Button } from "../components/UI/Button";
import Modal from "../components/UI/Modal";

const Home = () => {
  //4-8 modal
  const [modal, setModal] = useState<boolean>(false);
  const handleChange = () => {
    setModal((prev) => !prev);
  };
  const handleSubmit = (e : React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.target)
  }
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <Button onClick={() => setModal((prev) => !prev)}>Open Modal</Button>
      <Modal isOpen={modal} OnClose={handleChange}>
        <Modal.Header>

        <Modal.closeButton/>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
          <input type="email" name="email" id="" className="border border-1 rounded-sm bg-gray-100 focus:outline px-2 py-1 mx-3 my-2 w-full"/>
          <input type="password" name="password" id="" className="border border-1 rounded-sm bg-gray-100 focus:outline px-2 py-1 mx-3 my-2 w-full"/>
          <input type="submit" value="submit" />
        </form>
      </Modal>
    </div>
  );
};

export default Home;
