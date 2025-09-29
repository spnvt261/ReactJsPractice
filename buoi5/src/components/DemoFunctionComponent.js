const DemoFunctionComponent = (props)=>{
    // console.log(props);
    
    return( 
        <div className="demo-function-component">
            <h1>Demo function component</h1>
            <p>Last Name: {props.lastName}</p>
        </div>
    )
}

export default DemoFunctionComponent;