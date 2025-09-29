import styled from "styled-components"
import {RiMenuLine} from "react-icons/ri"

const HeaderContainer = styled.div`
    height: 7.2rem;
    // border:1px solid blue;
    box-shadow: 1px 2px 20px 0px rgba(0,0,0,0.1);
    width:100%;
    position:sticky;
    top:0;
    left:0;
    background-color:#fff;
    >.header-row1{
        width:100%;
        height:4rem;
        border-bottom: 1px solid lightgray;
        display:flex;
        align-items:center;
    }
    >.header-row2{
        width:100%;
    }
    .menu-icon{
        cursor:pointer;
        font-size:1.2rem;
        margin-left:.5rem;
    }
`
const Header = props => {
    return (
        <HeaderContainer className="header">
            <div className="header-row1">
                <RiMenuLine className='menu-icon'/>
            </div>
            <div className="header-row2">

            </div>
        </HeaderContainer>
    )
}

export default Header