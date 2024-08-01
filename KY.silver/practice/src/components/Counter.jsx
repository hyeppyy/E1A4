import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    const onIncrease = () => {
        setCount(prevCount => prevCount + 1)
    }
    const onDecrease = () => { 
        setCount(prevCount => prevCount - 1)
    }
    return (
        <>
            <h1 className="title">Counting 연습</h1>
            <h1>{ count }</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </>
    )
}

export default Counter;