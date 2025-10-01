import WithColor from "./WithColor"
const Article = (props) =>{
    
    return(
        <div>
            <h1>Article component</h1>
            <h3>{props.article}</h3>
        </div>
    )
}

export default WithColor(Article) 