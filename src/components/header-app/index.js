import React from 'react';
import './header-app.css'

export default function HeaderApp({toDo,done}){
    return(
        <div className = "app-header d-flex">
            <h1>Todo List</h1>
            <h2>{toDo} more to do, {done} done</h2>
        </div>
    );
}