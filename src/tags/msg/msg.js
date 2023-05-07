import Message from '../../types/message/msgType';
import User from '../../types/users/user';

class ChatMessage extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: 'open'});
        const topDiv = document.createElement('div');
        const subDiv = document.createElement('div');
        const msg = Object.setPrototypeOf(JSON.parse(unescape(this.getAttribute('msg'))), Message.prototype);
        const {user} = msg;
        const img = document.createElement('img');
        img.setAttribute('width', '50');
        img.setAttribute('height', '50');
        img.src = user.imgUrl;
        subDiv.innerHTML = `<p>${msg.text}</p>`;
        topDiv.appendChild(img);
        topDiv.appendChild(subDiv);
        shadow.appendChild(topDiv);
    }
}

customElements.define('msg-bubble', ChatMessage);
