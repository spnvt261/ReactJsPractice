function login(username: string, password: string) {
    setTimeout(() => {
        if (username == 'Nguyen Van A' && password == ' 123abc') {
            console.log('username/password valid');

        } else {
            console.log('username/password invalid');
        }
    }, 3000);
    console.log('Login successfully...');
    console.log('welcome to VTI');

}

function loginWithCallback(username: string, password: string, callback) {
    setTimeout(() => {
        let message = ''
        if (username == 'Nguyen Van A' && password == '123abc') {
            console.log('username/password valid');
            message = 'Login successfully';
        } else {
            console.log('username/password invalid');
            message = 'Login fail'
        }
        callback(username, message);
    }, 3000);
    // callback();
}

const showWelcome = () => {
    console.log('Login successfully...');
    console.log('welcome to VTI');
}
const showResult = (username: string, messageRespond: string) => {
    if (messageRespond === 'Login successfully') {
        console.log('Login successfully...');
        console.log('welcome to VTI ' +username);
    }else{
        console.log(messageRespond);
        
    }
}

const getMoneyATM =(cardNumber,PIN,callback)=>{
    // logic here
    callback();
}

// getMoneyATM()
export {
    login,
    loginWithCallback,
    showWelcome,
    showResult
}