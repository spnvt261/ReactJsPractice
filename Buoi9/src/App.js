import { useState } from 'react';
import './App.css';
import CustomInput from './components/custominput/CustomInput';
import DemoClassComponent from './components/DemoClassComponent';
import DemoFunctionCoponent from './components/DemoFunctionComponent';
import DemoFragment from './components/fragment/DemoFragment';
import ContainerComponent from './components/sharedata/ContainerComponent';
import GrandParentComponent from './components/sharedata/context/GrandParent';
import PrManageState from './components/sharedata/PrManageState';
import Signin from './pages/signin/Signin';

import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Home from './pages/home/Home';
import Signup from './pages/signup/Signup';
import PersonList from './components/sharedata/PersonList';

import { persons } from './data/index';

function App() {
    return (
        <div className="App">
            {/* <PrManageState />
            <ContainerComponent />
            <GrandParentComponent /> */}
            
            {/* <div className='menu-links'>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                            <Link to='/signin'>Signin</Link>
                            <Link to='/signup'>Signup</Link>
                            <Link to='/persons'>List Persons</Link>
                        </li>
                    </ul>
                </nav>
            </div> */}
        
            <Switch>
                <Route path='/signin' component={Signin}/>
                <Route path='/signup' component={Signup}/>
                {/* <Route path='/persons' component={PersonList}/>  */}
                <Route path='/persons' 
                    render={routeProps => <PersonList persons={persons} {...routeProps}/>} 
                /> 
                {/* <PersonList x={100}/> */}
                <Route path='/' component={Home}/>
            </Switch>
       </div>
    );
}

export default App;
