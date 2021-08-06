import React from 'react'
import PropTypes from 'prop-types'
import TaskAdd from './TaskAdd'
import MButton from '@material-ui/core/Button'

const Button = ({color,text, onclick}) => {
    return <MButton 
    variant="contained" 
    onClick={onclick} 
    style={{backgroundColor:color}}    
    className='btn btn-block'>{text}</MButton>
}

Button.defaultProps = {
    color:'steelblue'
}

Button.prototypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onclick: PropTypes.func,
}

export default Button
