import React from 'react'
import 'react-chatbot-kit/build/main.css'
import Chatbot from 'react-chatbot-kit';

import config from './bot/config';
import MessageParser from './bot/MessageParser';
import ActionProvider from './bot/ActionProvider';

const chatbot = () => {
   
  return (
    <div className='bot'>
       <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  )
}


export default chatbot