import { useCallback, useEffect, useMemo, useState } from "react"
import ChildComponentMemo from "./ChildComponentMemo";

const expensiveCalculation = number => {
    console.log("Calculator running...");
    for (let i = 0; i < 1000000000; i++) {
        number += 1;
    }
    return number;
}
const ParentComponentMemo = props => {
    const [count, setCount] = useState(0);
    const [todos, setTodo] = useState([
        'Learning React',
        'Studying CSS'
    ])
    // const _addTodo = () => {
    //     setTodo(todos => [...todos, 'New Todo'])
    // }
    const _addTodo = useCallback( () => {
        setTodo(todos => [...todos, 'New Todo'])
    },[todos])
    const increment = () => {
        setCount(c => c + 1)
    }
    console.log('parent component renderd...');
    const calculation = useMemo(() => expensiveCalculation(count), [count]);

    // let calculation2;
    // useEffect(()=>{
    //     calculation2 = expensiveCalculation(count);
    // },[count])
    return (
        <div>
            <ChildComponentMemo
                todos={todos}
                addTodo={_addTodo}
            />
            <div>---------count--------</div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <p>{calculation}</p>
        </div>
    )
}

export default ParentComponentMemo