import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  
    const initialAction = () => {
      const message = createChatBotMessage('Pick a slot !', {
        widget: "datepicker"
      });
      updateState(message, "slot")
  }
  const afterSlotMessage = () => {
    const message = createChatBotMessage("Enter your Name")
    updateState(message, "name")
}
  
  const afterNameMessage = () => {
    const message = createChatBotMessage("Enter your Age")
    updateState(message, "age")
}

const finalMessage = (userData) => { // Accept userData as a parameter
  console.log("Age:", userData.age);
  console.log("Name:", userData.name);
  const message = createChatBotMessage(`Your name ${userData.name} aged ${userData.age} has been added to student system`);
  updateState(message); 
}


const updateState = (message, checker) => {
  setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      checker,
  }))
}

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            initialAction,
            afterSlotMessage,
            afterNameMessage,
            finalMessage
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;