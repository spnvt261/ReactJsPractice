export {};
import User from "./user";
import { showUserInfo } from "./user";
import { 
    login,
    loginWithCallback,
    showWelcome,
    showResult
 } from "./callback";
import { combinePromise, getPostById, getUserInfo, loginWithPromise } from "./promise";
import { log } from "console";
import { demoAsync } from "./async";
// console.log("demo type script");

var x:number=100;
// console.log('x= ' +x);


// console.log(name);

var fullName:string = "hello";
// console.log(fullName);

var  y:number;
// y='abc';

class Account{
    public fullName: string;
    private username:string;

    constructor(fullName:string, username:string){
        this.fullName = fullName;
        this.username = username;
    }

    public getUsername(){
        return this.username;
    }

    public setUsername(username:string){
        this.username = username;
    }
}

var ac = new Account('Nguyen Quang Hai','quanghai');
// console.log(ac);

var user = new User('1a','vietson');
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

// combinePromise();

demoAsync()