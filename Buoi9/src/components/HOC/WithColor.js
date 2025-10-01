import { useState } from "react";

const WithColor = WrappedComponent =>{ // HOC  
    const randomColor = ()=>{
        let letters = '0123456789ABCDEF';
        let color ='#';
        for(let i=0;i<6;i++){
            color += letters[Math.floor(Math.random()*16)]
        }
        return color
    }
    
    const WithColorComponent = props=>{
        const [number, setNumber] = useState(0);
        return (
            <div style={{color:randomColor()}}>
                {/* Component A */}
                <WrappedComponent {...props} number={number}/>
            </div>
        )
    }
    // Component A'
    return WithColorComponent;
}

export default WithColor