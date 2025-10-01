import { useSelector } from 'react-redux';
import { menuLinks } from '../../data';
import CustomLinks from '../customlinks/CustomLinks';
import store from '../redux/Store';
import './Sidebar.css';

// console.log(store);


const Sidebar = props => {
    // console.log(store.getState().counter.count);
    const count = useSelector(state=>state.counter.count);
    const sidebarIsOpen = useSelector(state => state.view.sidebarIsOpen);
    
    return(
        <div className={sidebarIsOpen?"sidebar sidebar-open":"sidebar sidebar-close"}>
            <h1>Sidebar</h1>
            <h4>{count}</h4>
            <CustomLinks menuLinks={menuLinks}/>
        </div>
    )
}

export default Sidebar;