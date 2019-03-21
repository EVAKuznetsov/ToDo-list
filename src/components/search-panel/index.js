import React,{Component} from 'react';
import './search-panel.css'

export default class SearchPanel extends Component{
    state={
        term:''
    }
    onChange=(term)=>{
        this.setState({term});
        this.props.searchItem(term);
    }
    render(){
        return(
            //контролируемый компонент
            <input className = "form-control search-input" type="text" placeholder="Search" 
                onChange = {(e)=>this.onChange(e.target.value)} 
                value = {this.state.term}/>
        );
    }
}