import React from 'react';
import { Button } from '../ui/button';
import { removeTodo, toggleComplete, TTodo } from '@/redux/features/todoSlice';
import { useAppDispatch } from '@/redux/hooks';

const TodoCard = ({data} : {data : TTodo}) => {
    const dispatch=useAppDispatch();
    
    const handleDelete = ()=>{
        dispatch(removeTodo(data.id));
    }
    const toggleState = ()=>{
        dispatch(toggleComplete(data.id))
    }
    
    return (
        <div className="bg-white rounded-md flex justify-between items-center p-3">
            <input type="checkbox" name="" id=""  onChange={toggleState}/>
            <p className="font-semibold">{data.title}</p>
            <p>{data.isCompleted ? "Done" : "Pending"}</p>
            <p>{data.description}</p>
            <div className="space-x-5">
                <Button className="bg-red-500" onClick={handleDelete}>Delete</Button>
                <Button className='bg-blue-500'>Edit</Button>
            </div>

        </div>
    );
};

export default TodoCard;