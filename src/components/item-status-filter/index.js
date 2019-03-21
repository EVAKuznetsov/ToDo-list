import React,{Component} from 'react'
import './item-status-filter.css'

export default class ItemStatusFilter extends Component{
    buttons=[
        {name:'all', label:'All'},
        {name:'active', label:'Active'},
        {name:'done', label:'Done'}
    ];
    state={
        filter:'all'        
    }
    handleClick=(filter)=>{
        this.setState({filter});
        this.props.toggleFilter(filter);        
    }
    
    render(){
        const {filter}=this.props
        const buttons = this.buttons.map(({name,label})=>{
            const isActive = filter===name;
            const clazz = isActive?'btn-info':'btn-outline-secondary';
            return(
                <button key ={name} className={`btn ${clazz}`} onClick = {()=>this.handleClick(name)}>{label}</button>
            )
        });
        return(
            <div className="btn-group">
                {buttons}
                
            </div>
        );
    }
}