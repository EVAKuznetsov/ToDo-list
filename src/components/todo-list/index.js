import React from 'react';
import TODOListItem from '../todo-list-item';
import './todo-list.css'

export default function ToDoList({todoData,onDeleted,onToggleImportant,onToggleDone}){
    const elements = todoData.map((item)=>{
        const {id,...itemProps}=item;
        return(            
            <li key = {id} className="list-group-item">
                {/* <TODOListItem label ={item.label} important = {item.important}/> */}
                <TODOListItem {...itemProps} 
                    onDeleted = {()=>onDeleted(id)} 
                    onToggleDone={()=>onToggleDone(id)}
                    onToggleImportant={()=>onToggleImportant(id)}
                /> {/*тоже самое, что и строчка выше, передаём все свойства через Spread*/}
            </li>
        );
    });
    return(
        <ul className="list-group todo-list">
            {elements}
        </ul>
    );
}