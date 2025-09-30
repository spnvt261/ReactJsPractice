import styled from 'styled-components';

// const HeaderContainer = styled.div `
//     border: 1px solid green;
// `

// const H2Title = styled.h2 `
//     color: red;
// `;

// const DivNav = styled.div`
//     color: blue;
// `

// const PTopNav = styled.p`
//     color: orange;
// `

// const Header = props => {
//     return (
//         <HeaderContainer>
//             <H2Title>Header</H2Title>
//             <DivNav>Navbar</DivNav>
//             <PTopNav>Top nav</PTopNav>
//         </HeaderContainer>
//     )
// }
import { RiMenuLine } from 'react-icons/ri';


const HeaderContainer = styled.div `
    height: 7.2rem;
    border: 1px solid lightgray;
    box-shadow: 1px 2px 20px 0px rgba(0, 0, 0, .1);

    position: sticky;
    width: 100%;
    top: 0;
    left: 0;

    background-color: #ffffff;

    .header-row1 {
        height: 4rem;
        border-bottom: 1px solid lightgray;
        display: flex;
        align-items: center;
    }

    .menu-icon {
        cursor: pointer;
        font-size: 1.2rem;
        margin-left: .5rem;
    }
 `

const Header = props => {
    return (
        <HeaderContainer>
            {/* <h2 className='h2-header'>Header</h2>
            <div>Navbar</div>
            <p>Top nav</p> */}
            <div className='header-row1'>
                <RiMenuLine className='menu-icon'/>
            </div>
            <div className='header-row2'>

            </div>
        </HeaderContainer>
    )
}

export default Header;