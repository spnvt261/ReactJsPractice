import { useState } from 'react';
import './App.css';
import CustomInput from './components/customInput/CustomInput';
import DemoClassComponent from './components/DemoClassComponent';
import DemoFunctionComponent from './components/DemoFunctionComponent';
import DemoFragment from './components/fragment/DemoFragment';
import Signin from './components/pages/signin/Signin';

function App() {
    const lastName = 'Rooney';
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const _getData = (msg) => {
        console.log(msg);

    }
    const submitForm = (e) => {
        e.preventDefault();
        alert('username:' + username + 'password' + password)
    }
    const _inputChange = (e) => {
        // console.log(e);

        console.log(e.target.value);
        console.log(e.target.name);
        if (e.target.name === 'username') {
            setUsername(e.target.value);
        }
        if (e.target.name === 'password') {
            setPassword(e.target.value);
            console.log(password);
        }

    }
    return (
        // <div className="App">
        //     <DemoClassComponent
        //         x={lastName}
        //         y={500}
        //         getData={_getData}
        //     />
        //     <DemoFunctionComponent
        //         lastName={lastName}
        //         getData={_getData}
        //     />
        //     <form>
        //         <h1>Sign in</h1>
        //         <CustomInput
        //             name="username"
        //             label="username"
        //             type="text"
        //             placeholder="username"
        //             inputChange={_inputChange}
        //         />
        //         <CustomInput
        //             name="password"
        //             label="password"
        //             type="password"
        //             placeholder="password"
        //             inputChange={_inputChange}
        //         />
        //         <button type='submit' onClick={submitForm}>Submit</button>
        //     </form>
        //     {/* Buoi 4  */}
        //     <br></br><hr></hr>
        //     <h1>Buoi4 Ro26</h1>
        //     <DemoFragment />
        //     <div style={{
        //         height:'600px', 
        //         width:'600px',
        //         margin:'auto', 
        //         paddingTop:'20px',
        //         border:'1px solid green'
        //     }}>
        //         <CustomInput
        //             name="email"
        //             label="Email Adress *"
        //             type="Email Adress *"
        //             // placeholder="Email Adress *"
        //             inputChange={_inputChange}
        //         />
        //     </div>

        // </div>
        <div className='App'>
            <Signin/>
        </div>
    );
}

export default App;
