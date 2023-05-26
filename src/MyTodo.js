import React from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

export const MyTodo = ({text, updatingInInput, deleteTodo}) => {
    return (
        <div className="plans">
            <p>{text}</p>
            <div className="icons">
                <AiFillEdit className="icon" onClick={updatingInInput}></AiFillEdit>
                <AiFillDelete className="icon" onClick={deleteTodo}></AiFillDelete>
            </div>
        </div>
    )
}
