import React from 'react';
import './app.css'
import HeaderApp from '../header-app';
import SearchPanel from '../search-panel';
import ToDoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter'

export default function App(){
    const todoDate =[
        {label:'Drink cofee', important:false, id:1},
        {label:'Mace Awesome App', important:true, id:2},
        {label:'Have a lunch', important:false, id:3}

    ]
    return(
        <div className="container">
            <HeaderApp toDo ="2" done = "3" />
            <div className="row-item">
                <SearchPanel />
                <ItemStatusFilter />
            </div>
            <ToDoList todoDate={todoDate}/>
        </div>
    )
}