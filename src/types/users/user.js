import Message from '../message/msgType';

export default class User {
    constructor(displayName, imgUrl) {
        this.displayName = displayName;
        this.imgUrl = imgUrl;
    }

    sendMessage(message, chatWindow) {
        // console.log(chatWindow);
        if (chatWindow !== undefined) {
            chatWindow.addMessage(new Message(message, this));
        }
    }
}
