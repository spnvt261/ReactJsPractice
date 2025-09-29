"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showUserInfo = showUserInfo;
var User = /** @class */ (function () {
    function User(id, username) {
        this.id = id;
        this.username = username;
    }
    User.prototype.getId = function () {
        return this.id;
    };
    User.prototype.setId = function (id) {
        this.id = id;
    };
    User.prototype.getUsername = function () {
        return this.username;
    };
    User.prototype.setUsername = function (username) {
        this.username = username;
    };
    return User;
}());
function showUserInfo(ac) {
    console.log('Account Info: ');
    console.log('Id: ' + ac.getId() + '; username: ' + ac.getUsername());
}
exports.default = User;
