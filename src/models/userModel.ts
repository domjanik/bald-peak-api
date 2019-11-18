import * as bcrypt from 'bcryptjs';

export default class User {
    constructor(data) {
        if (this.validate(data)) {
            this.password = bcrypt.hashSync(data.password, 10);
            this.userName = data.userName;
            this.id = this.generateId(10);
        } else {
            throw new Error('Invalid data');
        }
    }

    id: string;
    userName: string;
    password: string;

    validate(data: any): boolean {
        let valid = true;
        if (!data.userName || data.userName.length === 0) {
            valid = false;
        } else if (!data.password || data.password.length === 0) {
            valid = false;
        }
        return valid;
    }

    generateId(length) {
        let result = '';
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
}
