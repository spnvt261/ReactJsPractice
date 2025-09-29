import {XMLHttpRequest} from 'xmlhttprequest-ts';
import axios from 'axios';
import { log } from 'console';

const loginWithPromise = (username: string, password: string) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username == 'Nguyen Van A' && password == '123abc') {
                console.log('username/password valid');
                resolve(username);
            } else {
                console.log('username/password invalid');
                reject('login fail')
            }
        }, 3000);
    })

}

const getPostById =(id)=>{
    return new Promise((rel,rej)=>{
        var request = new XMLHttpRequest();
        request.open('GET','https://jsonplaceholder.typicode.com/posts/'+id);

        request.onload =()=>{
            if(request.status==200){
                rel(request.responseText);
            }else{
                rej(Error(request.responseText));
            }
        }

        request.onerror =()=>{
            rej(Error('Error fetching data'));
        }

        request.send();
    })
}

const getUserInfo = () =>{
    return new Promise((rel,rej)=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response=>{
            rel(response.data)
        })
        .catch(err => rej(err))
    })
}

const firstPromise =() =>{
    return new Promise((rel,rej)=>{
        setTimeout(()=>{
            console.log('this is firt promise');
            rel('The first promise finished after 2s');
        },2000)
    })
}
const secondPromise =() =>{
    return new Promise((rel,rej)=>{
        setTimeout(()=>{
            console.log('this is second promise');
            rel('The second promise finished after 4s');
        },4000)
    })
}
const thirdPromise =() =>{
    return new Promise((rel,rej)=>{
        setTimeout(()=>{
            console.log('this is third promise');
            rel('The third promise finished after 6s');
        },6000)
    })
}

var combinePromise =()=>{
    Promise.all([firstPromise(),secondPromise(),thirdPromise()])
    .then(data =>{
        console.log(data);
        
    })
    .catch(err=>{
        console.log(err);
        
    })
}

export {
    loginWithPromise,
    getPostById,
    getUserInfo,
    combinePromise
}