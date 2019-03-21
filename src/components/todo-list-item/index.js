import React from 'react';
import './todo-list-item.css'

export default function TodoListItem (props){ //можем вместо props через деструктуризацию сразу передать параметры

    const {label,onDeleted,onToggleImportant,onToggleDone,important,done} = props;
    let classNames = 'todo-list-item-label';
    if (done){
        classNames+=' done';
    }
    if (important){
        classNames+=' important';
    }
    return(
        <>
        <span className="todo-list-item">
            <span className={classNames} onClick = {onToggleDone}>{label}</span>
            <button type = "button" className = "btn btn-outline-success btn-sm" onClick = {onToggleImportant}>
                <i className = "fa fa-exclamation" />
            </button>
            <button type = "button" onClick={onDeleted} className = "btn btn-outline-danger btn-sm">
                <i className = "fa fa-trash-o" />
            </button>
        </span>
        </>
    )   

};
