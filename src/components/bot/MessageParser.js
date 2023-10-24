import React from 'react';
import { useNavigate } from 'react-router-dom';

const MessageParser = ({ children, actions }) => {
  console.log(children.props.state)
  const navigate = useNavigate()
  const parse = (message) => {
    if(children.props.state.checker === "slot"){
      actions.afterSlotMessage()     
    }
    if(children.props.state.checker === "name" && String(message)){
      actions.afterNameMessage()     
    }
    if (children.props.state.checker === "age" && Number(message)) {
      actions.finalMessage(message); 
      setTimeout(() => {  
        navigate("/finalresult");
      }, 5000);
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