import Person from "./Person"

const PersonList = props => {
    // console.log(props);

    return (
        <div className="person-list">
            {
                props.persons.map((person, index) => {
                    return(
                        <Person
                            key={index}
                            firstname = {person.firstname}
                            id = {person.id}
                            age = {person.age}
                            lastname = {person.lastname}
                        />
                    )
                })
            }
        </div>
    )
}

export default PersonList