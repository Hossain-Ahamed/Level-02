import { createContext, useContext, useState } from "react";

const SelectContext = createContext(null);
const Select = ({ children }) => {
  const [selectedOption, setSelectedOption] = useState("");
  return (
    <SelectContext.Provider value={{ selectedOption, setSelectedOption }}>
      {selectedOption}
      <select onChange={(e) => setSelectedOption(e.target.value)}>
        {children}
      </select>
    </SelectContext.Provider>
  );
};

const SelectOption = ({ value, children }) => {
  const { selectedOption, setSelectedOption } = useSelectContext();

  const isActive = selectedOption === value;

  return (
    <option
      className={`${isActive ? "bg-red-500" : "bg-blue-400"}`}
      value={value}
    >
      {children} 
    </option>
  );
};

Select.SelectOption = SelectOption;
export default Select;

const useSelectContext = () => {
  const context = useContext(SelectContext);
  if (!context) {
    throw new Error("Context out of bound");
  }
  return context;
};
