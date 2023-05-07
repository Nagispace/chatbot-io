import User from '../user';

export default class Bot extends User {
    constructor(displayName, imgUrl, commands) {
        super(displayName, imgUrl);
        this.commands = commands;
        this.isBot = true;
    }
}
