export default class Message {
    constructor(text, user) {
        this.text = text;
        this.user = user;
        this.sendDate = new Date().toLocaleDateString();
    }
}
