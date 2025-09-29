import styled from "styled-components"
const MainContainer = styled.div`
    height:30rem;
`
const Main =props=>{
    return(
        <MainContainer className="main">
            <h1>Main</h1>
        </MainContainer>
    )
}

export default Main