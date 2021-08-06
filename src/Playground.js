import React from 'react'
import { useState,useEffect } from 'react'

const Playground = () => {
    const [searchvalue, setSeachvalue] = useState("");

/*
    useEffect(() => {
        setTimeout(
            products = () =>{
            "Chidi Ezene",
            "Frank Ezene",
            "Bryan Ezene"
            }
        )
    },[])
    */

    const test = (event) => {
        setSeachvalue(event.target.value)
    }

    return (
        <div className="container">
            <div className="add-form">
            <label>{searchvalue}</label>
            <input type="text" value={searchvalue} onChange={test}/>
            </div>   
        </div>
    )
}

export default Playground
