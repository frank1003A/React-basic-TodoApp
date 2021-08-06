import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd}) => {

    return (
        <header className='header'>
            <h1>{title}</h1>
        </header>
    )
}
/*
Header.defaultProps = {
    title:'Task Tracker',
}
/*
Header.prototypes = {
    title:PropTypes.string.isRequired,
}
*/
export default Header
