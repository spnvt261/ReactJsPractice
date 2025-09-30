const DemoFunctionCoponent = (props) => {
    // console.log('Function - Props received from parent: ')
    // console.log(props)
    // const lastName = 'Rooney';
    return (
        <div className='domo-function-component'>
            <h1>Demo function component</h1>
            <p>Last Name: {props.lastName}</p>
            {/* <p>Last Name: {lastName}</p> */}
        </div>
    )
}

export default DemoFunctionCoponent;