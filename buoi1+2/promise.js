"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.combinePromise = exports.getUserInfo = exports.getPostById = exports.loginWithPromise = void 0;
var xmlhttprequest_ts_1 = require("xmlhttprequest-ts");
var axios_1 = require("axios");
var loginWithPromise = function (username, password) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (username == 'Nguyen Van A' && password == '123abc') {
                console.log('username/password valid');
                resolve(username);
            }
            else {
                console.log('username/password invalid');
                reject('login fail');
            }
        }, 3000);
    });
};
exports.loginWithPromise = loginWithPromise;
var getPostById = function (id) {
    return new Promise(function (rel, rej) {
        var request = new xmlhttprequest_ts_1.XMLHttpRequest();
        request.open('GET', 'https://jsonplaceholder.typicode.com/posts/' + id);
        request.onload = function () {
            if (request.status == 200) {
                rel(request.responseText);
            }
            else {
                rej(Error(request.responseText));
            }
        };
        request.onerror = function () {
            rej(Error('Error fetching data'));
        };
        request.send();
    });
};
exports.getPostById = getPostById;
var getUserInfo = function () {
    return new Promise(function (rel, rej) {
        axios_1.default.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(function (response) {
            rel(response.data);
        })
            .catch(function (err) { return rej(err); });
    });
};
exports.getUserInfo = getUserInfo;
var firstPromise = function () {
    return new Promise(function (rel, rej) {
        setTimeout(function () {
            console.log('this is firt promise');
            rel('The first promise finished after 2s');
        }, 2000);
    });
};
var secondPromise = function () {
    return new Promise(function (rel, rej) {
        setTimeout(function () {
            console.log('this is second promise');
            rel('The second promise finished after 2s');
        }, 4000);
    });
};
var thirdPromise = function () {
    return new Promise(function (rel, rej) {
        setTimeout(function () {
            console.log('this is third promise');
            rel('The third promise finished after 2s');
        }, 6000);
    });
};
var combinePromise = function () {
    Promise.all([firstPromise(), secondPromise(), thirdPromise()])
        .then(function (data) {
        console.log(data);
    })
        .catch(function (err) {
        console.log(err);
    });
};
exports.combinePromise = combinePromise;
