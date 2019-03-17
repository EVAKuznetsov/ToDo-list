import React from 'react';
import TODOListItem from '../todo-list-item/todo-list-item';
import './todo-list.css'

export default function ToDoList({todoDate}){
    const elements = todoDate.map((item)=>{
        const {id,...itemProps}=item;
        return(            
            <li key = {id} className="list-group-item">
                {/* <TODOListItem label ={item.label} important = {item.important}/> */}
                <TODOListItem {...itemProps}/> {/*тоже самое, что и строчка выше, передаём все свойства через Spread*/}
            </li>
        );
    });
    return(
        <ul className="list-group todo-list">
            {elements}
        </ul>
    );
}