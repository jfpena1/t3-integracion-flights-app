import React, {useState, useEffect, useMemo} from "react"
import {ChatController, MuiChat} from "chat-ui-react"


function Chat(props) {
    const [chatCtl] = useState(new ChatController());
    const messagesEndRef = React.createRef()
    
    async function addNewMessage(msg) {
        if (msg) {
            if(msg.name === props.username) {return}
            await chatCtl.addMessage({
                type: 'text',
                content: "user: " + msg.name + "\nmensaje: " + 
                msg.message + "\nFecha: " + Date(msg.date).toLocaleString('es-CL'),
                self: false,
              });
        }     
    }

    useEffect(() => {
        var lastOne = props.chatList.length - 1 
        addNewMessage(props.chatList[lastOne])
        scrollToBottom()
    }, [props.chatList])

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }
  
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