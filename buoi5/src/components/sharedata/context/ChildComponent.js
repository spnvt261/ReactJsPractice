import MessageContext from "./MessageContext"

const ChildComponent = props => {
    return (
        <MessageContext.Consumer>
            {
                // message => {
                //     return (
                //         <div>
                //             <h1>Message from grand {message}</h1>
                //         </div>
                //     )
                // }
                message => <div><h1>Message from grand: {message}</h1>  </div>
            }

        </MessageContext.Consumer>
    )
}

export default ChildComponent