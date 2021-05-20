import React, {useState, useEffect, useMemo} from "react"
import {ChatController, MuiChat} from "chat-ui-react"


function Chat(props) {
    const [chatCtl] = useState(new ChatController());
    
    async function addNewMessage(msg) {
        if (msg) {
            await chatCtl.addMessage({
                type: 'text',
                content: msg.name + ": " + msg.message + "\n" + Date(msg.date),
                self: false,
              });
        }     
    }

    useEffect(() => {
        var lastOne = props.chatList.length - 1 
        addNewMessage(props.chatList[lastOne])
    }, [props.chatList])
  
    useMemo(async () => {
        // Chat content is displayed using ChatController
        const response = await chatCtl.setActionRequest({ 
            type: 'text',
            always: true, },
            (response) => {
                props.handleChatEmitted(response)
              }
            );
    }, [chatCtl, props]);
  
    return (
        <MuiChat  
            chatController={chatCtl} 
            onSubmit={props.handleChatEmitted}
        />  
    )
  }
  

export default Chat