import React from 'react'
import Item from '../Card/Item'
import "./wrapper.css";
const Wrapper = ({ list, loading }) => {
    return (
        <div className='wrapper'>
            {loading ? <h1>LOADING . . .</h1> : list && list.map((item, key) => {
                return <Item number={key} key={key} task={item.task} title={item.title} />
            })}
        </div>
    )
}

export default Wrapper
