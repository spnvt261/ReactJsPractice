import React from "react";

const ChildComponentMemo = ({todos,addTodo}) =>{

    console.log('child component renderd...');

    return(
        <div>
            {
                todos.map((todo, index)=>{
                    return <p key={index}>{todo}</p>
                })
            }
            <button onClick={addTodo}>Add Todo</button>
        </div>
    )
}

export default React.memo(ChildComponentMemo)