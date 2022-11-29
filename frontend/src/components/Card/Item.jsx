import React from 'react'
import "./Item.css";
const Item = ({ title, task, number }) => {
    return (<div className="container">

        <div className="card">
            <div className="face face1">
                <div className="content">
                    <span className="stars"></span>
                    <h2 className="java">{title}</h2>
                    <p className="java">{task}</p>
                </div>
            </div>
            <div className="face face2">
                <h2>{number+1}</h2>
            </div>
        </div>

    </div>
    )
}

export default Item
