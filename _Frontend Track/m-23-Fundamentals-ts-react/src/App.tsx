/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext, useState } from "react";
import "./App.css";
import UserStateExample from "./pages/hooksPages/UserStateExample";
import Form from "./pages/hooksPages/Form";
import UseReducer from "./pages/hooksPages/UseReducer";
import UseEffectExample from "./pages/hooksPages/UseEffectExample";
import UseRefExample from "./pages/hooksPages/UseRefExample";
import { ThemeContext, TThemenContext } from "./context/ThemeProvider";
import { MenuItem, MenuList } from "./context/Menu";
import GameResult from "./pages/GameResult";
import UserContainer from "./components/UserContainer";
import Select from "./components/Select";

function App() {
  // const [counter, setCounter] = useState(0);
  // const { dark, setDark } = useContext(ThemeContext) as TThemenContext;
  return (
    <div
      // className={`${dark ? "bg-black- text-white-" : "bg-white- text-black-" }  w-screen h-screen`}
    >
      {/* <button
        className="border-b rounded p-2"
        onClick={() => setDark((prev: boolean) => !prev)}
      >
        Toggle
      </button> */}

      {/* <UserStateExample counter={counter} setCounter={setCounter}/> */}
      {/* <Form/> */}
      {/* <UseReducer/> */}
      {/* <UseEffectExample/> */}

      {/* <UseRefExample />
      <MenuList>
        <MenuItem />
      </MenuList> */}

      {/* <GameResult/> */}
      {/* <UserContainer/> */}

<Select>
  <Select.SelectOption value={'1'}>option 1</Select.SelectOption>
  <Select.SelectOption value={'2'}>option 2</Select.SelectOption>
  <Select.SelectOption value={'3'}>option 3</Select.SelectOption>
  <Select.SelectOption value={'4'}>option 4</Select.SelectOption>
</Select>
    </div>
  );
}

export default App;
