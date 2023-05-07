import './tailwind.css';
import './tags/msg/msg';
import Bot from './types/users/bot/bot';
import Human from './types/users/human/human';
import Message from './types/message/msgType';
import ChatWindow from './tags/chat-window/chat-window';
import BroomClosetCommand from './types/commands/broomCloset';

console.clear();

const sendButton = document.getElementById('sendButton');
const textInput = document.getElementById('textInput');
const theHuman = new Human('The Player', 'https://media.discordapp.net/attachments/720610453608333324/1098211787129765888/image.png');
const chatWindow = document.createElement('chat-window');
document.getElementById('chat-bubbles').appendChild(chatWindow);

function submitText() {
    theHuman.sendMessage(textInput.value, chatWindow);
    textInput.value = '';
}

const bot1 = new Bot('Stanley', 'https://media.discordapp.net/attachments/720610453608333324/1098211787129765888/image.png', new BroomClosetCommand());
bot1.sendMessage('Hello', chatWindow);
// const msgString = JSON.stringify(new Message('test'), 0, 2);
// chatWindow.setAttribute('messages', msgString);
// chatWindow.setAttribute('messages', msgString);

sendButton.addEventListener('click', submitText);
textInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        submitText();
    }
});
// TODO FIX THE FUCKING WEBPACK SERVE ISSUE QWITH TAILWIND
