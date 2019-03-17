import React from 'react'
import './item-status-filter.css'

export default function ItemStatusFilter(){
    return(
        <div className="btn-group">
            <buttont className="btn btn-info">All</buttont>
            <buttont className="btn btn-outline-secondary">Active</buttont>
            <buttont className="btn btn-outline-secondary">Done</buttont>
        </div>
    );
}