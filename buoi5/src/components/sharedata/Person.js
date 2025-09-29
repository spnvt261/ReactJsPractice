const Person = props =>{
    return(
        <div 
        style={{border:'1px solid green'}}
        className="person">
            <h2>Fullname: {props.firstname +' '+ props.lastname}</h2>
            <h3>Id: {props.id}</h3>
            <p>Age: {props.age}</p>
        </div>
    )
}

export default Person