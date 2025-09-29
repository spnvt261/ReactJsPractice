import MessageContext from "./MessageContext"
import ParentComponent from "./ParentComponent"

const GrandParentComponent = props =>{
    const message = 'hello children component'
    return(
        <div>
            <MessageContext.Provider value={message}>
                {/* <ParnetComponent message={message}/> */}
                <ParentComponent/>
            </MessageContext.Provider>
            
        </div>
    )
}

export default GrandParentComponent