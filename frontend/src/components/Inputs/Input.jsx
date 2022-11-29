import React, { useState, useEffect } from 'react'
import "./Input.css";
import { ReactNotifications } from "react-notifications-component";
import getList from '../../Functions/getList';
import addNewItem from '../../Functions/AddItem';

const Input = ({ list, setList, loading, switchLoad}) => {
    //Defining States
    const [title, setTitle] = useState("");
    const [task, setTask] = useState("");

    //UseEffect
    useEffect(() => {
        const getAllItems = async () => {
            const { data } = await getList()
            setList(data.allItems);
        }
        console.log("Asd")
        getAllItems();
    }, [loading,setList])

    //Function for Creating a new Item
    const addItem = async (e) => {
        e.preventDefault();
        await addNewItem(title, task,  switchLoad);
        setTitle("");
        setTask("");
    }
    return (
        <div>
            <ReactNotifications />
            <center>
                <div id='inputbox'>
                    <input className="input" placeholder='Title' id='input1' type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} />
                    <input className="input" placeholder='Task' id='input2' type="text" value={task} onChange={(e) => { setTask(e.target.value) }} />
                    <br />
                    <button className="button-64" type='submit' onClick={addItem}>Add Item</button>
                </div>
            </center>
            <hr />
        </div>
    )
}

export default Input
