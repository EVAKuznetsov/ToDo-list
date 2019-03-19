import React, {Component} from 'react';
import './todo-list-item.css'

export default class TodoListItem extends Component{ //вместо props мы через деструктуризацию сразу передаём параметр label
    constructor(props){
        super(props);
        this.state = {
            done:false,
            important:false
        }
    }
    //создали стрелочную функцию, чтобы обратиться к this, другой вариан - вызвать из jsx эту функцию с bind(this) или объявить её в конструкторе
    onLableClick=()=>{
        //ВАЖНО!!!!!! вызывать в setState функцию с актуальными state, если изменения зависят от текущего состояния 
        this.setState(()=>{
            return {
                done:!this.state.done
            };
        });
    }
    onImportantClick = () =>{
        this.setState(({important})=>{//тот же способ, что и вверху, только через деструктуризацию
            return{
                important:!important
            };
        });
    }
    render(){
        const {label,onDeleted} = this.props;
        const {done,important} = this.state;
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
                <span className={classNames} onClick = {this.onLableClick}>{label}</span>
                <button type = "button" className = "btn btn-outline-success btn-sm" onClick = {this.onImportantClick}>
                    <i className = "fa fa-exclamation" />
                </button>
                <button type = "button" onClick={onDeleted} className = "btn btn-outline-danger btn-sm">
                    <i className = "fa fa-trash-o" />
                </button>
            </span>
            </>
        )   
    } 
};
