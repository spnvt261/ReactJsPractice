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
import store from '../redux/Store';
import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from'react-redux';
import countActions from '../redux/actions/countActions';
import viewActions from '../redux/actions/viewActions';


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
    // console.log(store.getState().counter.count);

    // const [count,setCount] = useState(store.getState().counter.count)
    // const _incrementCount = ()=>{
    //     store.dispatch({
    //         type:'INCREMENT_COUNT',
    //         payload:null
    //     })
    // }

    // useEffect(()=>{
    //     store.subscribe(()=>{
    //         setCount(store.getState().counter.count)
    //     })
    // },[])
    const count = useSelector(state=>{
        // console.log(state);
        
        return state.counter.count
    })
    // console.log(1);
    
    const sidebarIsOpen = useSelector(state => state.view.sidebarIsOpen);
    
    const _clickMenuIcon =()=>{
        dispatch(viewActions.toggleSidebar())
    }
    const dispatch = useDispatch();
    const _incrementCount2=()=>{
        // dispatch({
        //     type:'INCREMENT_COUNT',
        //     payload:null
        // })
        dispatch(countActions.incrementCount())
    }
    return (
        <HeaderContainer>
            {/* <h2 className='h2-header'>Header</h2>
            <div>Navbar</div>
            <p>Top nav</p> */}
            <div className='header-row1'>
                <RiMenuLine className='menu-icon'
                    onClick={_clickMenuIcon}
                />
            </div>
            <div className='header-row2'>
                <button 
                onClick={_incrementCount2}
                >
                    Increment Count</button>
                <h4>Recieved from store {count}</h4>
                {/* <h4>Sidebar is open:  {sidebarIsOpen.toString()}</h4> */}
            </div>
        </HeaderContainer>
    )
}

export default Header;