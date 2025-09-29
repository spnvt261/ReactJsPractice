import PersonList from "./PersonList"

const ContainerComponent = props =>{
    const persons =[
        {
            id: 1,
            firstname: 'Nguyen Quang',
            lastname: 'Hai',
            age: 25
        },
        {
            id: 2,
            firstname: 'Nguyen Cong',
            lastname: 'Phuong',
            age: 20
        },
        {
            id: 3,
            firstname: 'Nguyen Tuan',
            lastname: 'Anh',
            age: 21
        },
    ]
    return(
        <div>
            <PersonList persons={persons}/>
        </div>
    )
}

export default ContainerComponent