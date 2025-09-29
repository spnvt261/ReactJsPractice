"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = require("./user");
var promise_1 = require("./promise");
// console.log("demo type script");
var x = 100;
// console.log('x= ' +x);
// console.log(name);
var fullName = "hello";
// console.log(fullName);
var y;
// y='abc';
var Account = /** @class */ (function () {
    function Account(fullName, username) {
        this.fullName = fullName;
        this.username = username;
    }
    Account.prototype.getUsername = function () {
        return this.username;
    };
    Account.prototype.setUsername = function (username) {
        this.username = username;
    };
    return Account;
}());
var ac = new Account('Nguyen Quang Hai', 'quanghai');
// console.log(ac);
var user = new user_1.default('1a', 'vietson');
// console.log(user);
// showUserInfo(user);
// login('Nguyen Van A','123abc')
// loginWithCallback('Nguyen Van A','123abcd',showResult)
// function a(x, callback){
//     console.log('x=' + x);
// }
// a(100, function(){
//     console.log('this is call back function');
// });
// console.log(loginWithPromise('Nguyen Van A','123abc'));
// loginWithPromise('Nguyen Van A','123abc')
// .then((data)=>{
//     console.log(data);
// })
// .catch(error=>{
//     console.log(error);
// })
// getPostById(1)
// .then(data=>{
//     console.log(data);
// })
// .catch(err=>{
//     console.log(err);
// })
// getUserInfo()
// .then(data=>{
//     console.log(data);
// })
// .catch(err=>{
//     console.log(err);
// })
(0, promise_1.combinePromise)();
