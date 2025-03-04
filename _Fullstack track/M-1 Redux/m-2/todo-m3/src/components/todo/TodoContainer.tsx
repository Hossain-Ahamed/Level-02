import React from "react";
import TodoCard from "./TodoCard";
import { Button } from "../ui/button";
import AddTodoModal from "./AddTodoModal";
import { TodoFilter } from "./TodoFilter";
import { useAppSelector } from "@/redux/hooks";

const TodoContainer = () => {

  const {todos} = useAppSelector(state=>state.todos);

  return (
    <div>
      <div className="flex justify-between my-3 ">
        <Button className="bg-primary-gradient">Add todo</Button>
       <AddTodoModal/>
       <TodoFilter/>
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-5 space-y-3">
        {
          todos.length ===0 ?
          <>
          <div className="bg-white rounded-md w-full font-semibold p-3 ">
            <p className="text-center">There is no Task pending</p>
        </div>
          </>
          :
          todos.map(item=><TodoCard key={item.id} data={item} />)
        }
       
      </div>
    </div>
  );
};

export default TodoContainer;
