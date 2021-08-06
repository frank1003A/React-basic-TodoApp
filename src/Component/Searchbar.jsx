import React from 'react'
import SearchBar from '@material-ui/core/TextField'
import Button from './Button'
import SearchIcon from '@material-ui/icons/Search'

export const Searchbar = (props) => {
    return (
        <div className="searchbar-header">
            <SearchBar 
            variant="standard" 
            placeholder="Search..." 
            onChange={props.onchange}
            name="s"/> 
        </div>
    )
}
