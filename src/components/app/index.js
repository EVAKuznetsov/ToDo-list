import React,{Component} from 'react';
import './app.css'
import HeaderApp from '../header-app';
import SearchPanel from '../search-panel';
import ToDoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item_add_form'
export default class App extends Component{
    maxId = 1;
    constructor(){
        super();
        this.state = {
            todoData:[
                this.createTodoItem('Drink cofee'),
                this.createTodoItem('Mace Awesome App'),
                this.createTodoItem('Have a lunch')
            ],
            term:'',
            filter:'all' //active,all,done
        }
    }
    //сразу создадим функцию для создания элементов, чтобы не дублировать код
    createTodoItem(label){
        return{
            label,
            important:false,
            id:this.maxId++,
            done:false
        }
    }
    togglePropperty(arr,id,propperty){
        const idx = arr.findIndex((el)=>el.id===id);
        const oldItem = arr[idx];
        const newItem = {...oldItem, [propperty]:!oldItem[propperty]};
        const newData = [
            ...arr.slice(0,idx),
            newItem,
            ...arr.slice(idx+1)
        ];
        return newData
    }
    deletItem =(id) => { 
        this.setState(({todoData})=>{
            const idx = todoData.findIndex((el)=>el.id===id);
            //НЕЛЬЗЯ НАПРЯМУЮ РЕДАКТИРОВАТЬ STATE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            const newData = [...todoData];                              //перый вариант: копируем стэйты в новый массив и изменяем его
            newData.splice(idx,1);
            // const before = todoData.slice(0,idx);               //второй вариант
            // const after = todoData.slice(idx+1);                //создаём два массива и копируем туда элементы до нужного нам и после
            // const newArray = [...before, ...after];
            return{
                todoData:newData
            }
        });
    }
    addItem = (label) => {
        const newItem = this.createTodoItem(label);
        this.setState(({todoData})=>{
            const newArray = [...todoData, newItem];            
            return{todoData:newArray}            
        });
    }

    onToggleImportant = (id) => {
        this.setState(({todoData})=>{            
            return{todoData:this.togglePropperty(todoData,id,'important')}
        });
    }
    onToggleDone = (id) => {
        this.setState(({todoData})=>{            
            return{todoData:this.togglePropperty(todoData,id,'done')}
        });
    }
    searchItem = (term)=>{
        this.setState({term});
    }
    filter=(items,filter)=>{
        switch(filter){
            case 'all':
                return items;
            case 'active':
                return items.filter(item=>!item.done);
            case 'done':
                return items.filter(item=>item.done);
            default:
                return items
        }
    }
    toggleFilter = (filter) =>{
        this.setState({filter});
    } 

    render(){
        const {todoData,term,filter}=this.state
        const countDone = todoData.filter((el)=>el.done===true).length;
        const countTodo = todoData.length - countDone;        
        const searchData = todoData.filter((item)=>item.label.toLowerCase().includes(term.toLowerCase()));
        const filterData = this.filter(searchData,filter);
        return(
            <div className="container">
                <HeaderApp toDo ={countTodo} done = {countDone} />
                <div className="row-item">
                    <SearchPanel searchItem={this.searchItem}/>
                    <ItemStatusFilter toggleFilter = {this.toggleFilter} filter={filter}/>
                </div>
                <ToDoList 
                    todoData={filterData} 
                    onDeleted={this.deletItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone = {this.onToggleDone}
                 />
                <ItemAddForm addItem ={this.addItem}/>
            </div>
        )
    }
}