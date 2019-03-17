import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import HeaderApp from './components/header-app/header-app';
import SearchPanel from './components/search-panel/search-panel';
import ToDoList from './components/todo-list/todo-list';
import ItemStatusFilter from './components/item-status-filter/item-status-filter'

function App(){
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
ReactDOM.render(<App />, document.getElementById('root'));

