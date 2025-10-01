import { useSelector } from 'react-redux';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Main from '../main/Main';
import './Wrapper.css';

const Wrapper = props => {
    const sidebarIsOpen = useSelector(state => state.view.sidebarIsOpen);
    // console.log(sidebarIsOpen);
    // console.log(1);
    
    return(
        <div className={sidebarIsOpen?"wrapper sidebar-open":"wrapper sidebar-close"}>
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

export default Wrapper;