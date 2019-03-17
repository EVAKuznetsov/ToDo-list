import React from 'react';
import './todo-list-item.css'

export default ({label, important = false}) => { //вместо props мы через деструктуризацию сразу передаём параметр label
    const Style ={
        color:important?'steelblue':'black',
        fontWeight:important?'bold':'normal'
    }
    return(
        <>
        <span className="todo-list-item" style={Style}>
            <span className="todo-list-item-label">{label}</span>
            <button type = "button" className = "btn btn-outline-success btn-sm">
                <i className = "fa fa-exclamation" />
            </button>
            <button type = "button" className = "btn btn-outline-danger btn-sm">
                <i className = "fa fa-trash-o" />
            </button>
        </span>
        </>
    )    
};
