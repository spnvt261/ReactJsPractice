import { menuLinks } from '../../data';
import CustomLinks from '../customlinks/CustomLinks';
import './Sidebar.css';

const Sidebar = props => {
    return(
        <div className="sidebar">
            <h1>Sidebar</h1>
            <CustomLinks menuLinks={menuLinks}/>
        </div>
    )
}

export default Sidebar;