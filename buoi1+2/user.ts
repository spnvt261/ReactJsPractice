class User {
    public id: string;
    private username: string;

    constructor(id: string, username: string) {
        this.id = id;
        this.username = username;
    }
    public getId() {
        return this.id;
    }

    public setId(id: string) {
        this.id = id;
    }
    public getUsername() {
        return this.username;
    }

    public setUsername(username: string) {
        this.username = username;
    }
}

export function showUserInfo(ac:User){
    console.log('Account Info: ');
    console.log('Id: ' +ac.getId() +'; username: '+ac.getUsername() );
    
    
}

export default User;