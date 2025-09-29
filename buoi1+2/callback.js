"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showResult = exports.showWelcome = void 0;
exports.login = login;
exports.loginWithCallback = loginWithCallback;
function login(username, password) {
    setTimeout(function () {
        if (username == 'Nguyen Van A' && password == ' 123abc') {
            console.log('username/password valid');
        }
        else {
            console.log('username/password invalid');
        }
    }, 3000);
    console.log('Login successfully...');
    console.log('welcome to VTI');
}
function loginWithCallback(username, password, callback) {
    setTimeout(function () {
        var message = '';
        if (username == 'Nguyen Van A' && password == '123abc') {
            console.log('username/password valid');
            message = 'Login successfully';
        }
        else {
            console.log('username/password invalid');
            message = 'Login fail';
        }
        callback(username, message);
    }, 3000);
    // callback();
}
var showWelcome = function () {
    console.log('Login successfully...');
    console.log('welcome to VTI');
};
exports.showWelcome = showWelcome;
var showResult = function (username, messageRespond) {
    if (messageRespond === 'Login successfully') {
        console.log('Login successfully...');
        console.log('welcome to VTI ' + username);
    }
    else {
        console.log(messageRespond);
    }
};
exports.showResult = showResult;
var getMoneyATM = function (cardNumber, PIN, callback) {
    // logic here
    callback();
};
