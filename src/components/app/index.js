import React,{Component} from 'react';
import './app.css'
import HeaderApp from '../header-app';
import SearchPanel from '../search-panel';
import ToDoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item_add_form'
export default class App extends Component{
    state = {
        todoData:[
            {label:'Drink cofee', important:false, id:1},
            {label:'Mace Awesome App', important:true, id:2},
            {label:'Have a lunch', important:false, id:3}
        ]
    }
    maxId = 100;
    deletItem =(id) =>{
        this.setState(({todoData})=>{
            const idx = todoData.findIndex((el)=>el.id===id);
            //НЕЛЬЗЯ НАПРЯМУЮ РЕДАКТИРОВАТЬ STATE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            const newData = todoData;                              //перый вариант: копируем стэйты в новый массив и изменяем его
            newData.splice(idx,1);
            // const before = todoData.slice(0,idx);               //второй вариант
            // const after = todoData.slice(idx+1);                //создаём два массива и копируем туда элементы до нужного нам и после
            // const newArray = [...before, ...after];
            return{
                todoData:newData
            }
        });
    }
    addItem = (label)=>{
        const newItem = {
            label:label,
            important:false,
            id:this.maxId++
        };
        this.setState(({todoData})=>{
            const newArray = [...todoData, newItem];            
            return{
                todoData:newArray
            }
            
        });
    }
    render(){
        return(
            <div className="container">
                <HeaderApp toDo ="2" done = "3" />
                <div className="row-item">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
                <ToDoList todoData={this.state.todoData} onDeleted={this.deletItem} />
                <ItemAddForm addItem ={this.addItem}/>
            </div>
        )
    }
}