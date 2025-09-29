import { useState } from 'react';
import './App.css';
import CustomInput from './components/customInput/CustomInput';
import DemoClassComponent from './components/DemoClassComponent';
import DemoFunctionComponent from './components/DemoFunctionComponent';
import DemoFragment from './components/fragment/DemoFragment';
import Signin from './pages/signin/Signin';
import PrManageState from './components/sharedata/PrManageState';
import ContainerComponent from './components/sharedata/ContainerComponent';
import GrandParentComponent from './components/sharedata/context/GrandParent';
import {BrowserRouter as Router} from 'react-router-dom';
import { Link, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './pages/home/Home';
import Signup from './pages/signup/Signup';
import PersonList from './components/sharedata/PersonList';
import { persons } from './Data';
function App() {
    
    return (
       
        <div className='App'>
            {/* <Router> */}
            {/* <Signin/> */}
            {/* <PrManageState/>
            <ContainerComponent/>
            <GrandParentComponent/> */}
            <div className='menu-links'>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                            <Link to='/signin'>Sign in</Link>
                            <Link to='/signup'>Sign up</Link>
                            <Link to='/person'>List Person</Link>
                        </li>
                    </ul>
                </nav>
            </div>
                <Switch>
                    <Route path='/signin'component={Signin} />
                    <Route path='/signup'component={Signup}/>
                    {/* <Route path='/person'component={PersonList}/> */}
                    <Route path='/person'render={routeProps =><PersonList persons={persons} {...routeProps}/>}/>
                    <Route path='/' component={Home} />
                </Switch>
            {/* </Router> */}
        </div>
    );
}

export default App;
