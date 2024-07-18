import React, {useState} from "react";
import classes from './Counter.modules.scss'
 const Counter = () => {
    const [count, setCount] = useState<number>(0)

     const increment = () =>setCount(count + 1)
     const decrement = () =>setCount(count - 1)

    return <div className={classes.button}>
        <div>{count}</div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
    </div>
 }

export default Counter