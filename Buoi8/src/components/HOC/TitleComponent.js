const TitleComponent = (props) =>{
    
    return(
        <div>
            <h1>Title component</h1>
            <h3>{props.shortTitle}</h3>
            <p>{props.number}</p>
        </div>
    )
}

export default TitleComponent