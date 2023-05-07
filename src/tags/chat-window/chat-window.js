import Message from '../../types/message/msgType';

class ChatWindow extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: 'open'});
        shadow.innerHTML = '<div id="messages"></div>';
        this.messagesObj = [];
    }

    static get observedAttributes() {
        return ['messages'];
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        if (oldVal !== newVal) {
            if (newVal === null) {
                this.messagesObj = null;
            } else {
                this.messagesObj = JSON.parse(newVal);
            }
            this.fixPrototype();
            this.render();
        }
    }

    render() {
        const el = this.shadowRoot.querySelector('#messages');
        if (this.messages !== null) {
            for (let i = 0; i < this.messages.length; i += 1) {
                if (this.messages[i] instanceof Message) {
                    // console.log(this.messages[i]);
                    // el.textContent += this.messages[i].text;
                    const msg = JSON.stringify(this.messages[i], 0, 2);
                    el.innerHTML += `<msg-bubble msg='${msg}'></msg-bubble>`;
                }
            }
        }
    }

    get messages() {
        return this.messagesObj;
    }

    addMessage(msg) {
        const lastIndex = this.messagesObj.length;
        this.messagesObj[lastIndex] = msg;
        this.fixPrototype();
        const el = this.shadowRoot.querySelector('#messages');
        const newMsg = escape(JSON.stringify(this.messages[lastIndex], null, 2));
        el.innerHTML += `<msg-bubble msg='${newMsg}'></msg-bubble>`;
        // Check bot commands
    }

    fixPrototype() {
        for (let i = 0; i < this.messages.length; i += 1) {
            Object.setPrototypeOf(this.messages[i], Message.prototype);
        }
    }
}

customElements.define('chat-window', ChatWindow);
