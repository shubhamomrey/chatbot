import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';

const MessageParser = ({ children, actions }) => {
  const { checker } = children.props.state;

  const [userData, setUserData] = useState({
    name: '',
    age: '',
  });

  console.log(children.props.state)
  const navigate = useNavigate()
  const parse = (message) => {
    if(checker === "slot"){
      actions.afterSlotMessage()     
    }
    if(checker === "name" && String(message)){
      const updatedUserData = { ...userData, name: message };
      setUserData(updatedUserData);   
      actions.afterNameMessage(message)  
    }
    if (checker === "age" && Number(message)) {
      const updatedUserData = { ...userData, name: userData.name, age: message };
      setUserData(updatedUserData);
      actions.finalMessage(updatedUserData); // Pass userData instead of message
      setTimeout(() => {  
        navigate("/finalresult");
      }, 7000);
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;