import { createChatBotMessage } from 'react-chatbot-kit';
import Avatar from './Avatar';
import StartBtn from './StartBtn';
import Datepicker from './DatePicker';


const config = {
  botName: "Happily Ever bot",
  initialMessages: [createChatBotMessage(`Hello, Welcome to student info system!`, {
    widget: "StartBtn",
  })],
  customComponents: {
    botAvatar: (props) => <Avatar {...props} />,
},
state: {
  checker: null,
  userData: {
      name: "",
      age: 0,     
  }
},
widgets: [
  {
    widgetName: 'StartBtn',
    widgetFunc: (props) => <StartBtn {...props} />,
  },
  {
    widgetName: 'datepicker',
    widgetFunc: (props) => <Datepicker {...props} />,
  }
]

};

export default config;