import React, { useState } from "react"
import Avatar from "@material-ui/core/Avatar";
import "./ChatScreen.css";

function ChatScreen(){
    const [input , setInput] = useState(' ');
    const [messages , setMessages] = useState([
    {
        name: "Dhoni",
        image:"...",
        message:"Hey! how are you",
    },
    {
        name: "Dhoni",
        image:"...",
        message:"What are you doing",
    },
     
    {
        message: "I'm good",
    },
    ]);

    const handleSend = e => {
        e.preventDefault();

        setMessages([...messages, {message : input}]);
        setInput("");
    }
   
    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">YOU MATCHED WITH DHONI on 07/07/2021</p>
            {messages.map((message) => 
            message.name ? (
                <div className="chatScreen__message">
            <Avatar
                  className= "chatScreen__image"
                  alt={message.name}
                  src={message.image}
                  />
                    <p className="chatScreen__text" >{message.message}</p>
                </div>
            ) : (
            <div className="chatScreen__message">
                <p className="chatScreen__textUser">{message.message}</p> 
            </div>   
            )
        )}
    <form className="chatScreen__input">
            <input 
            className="chatScreen__inputField"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message...."
            type="text" 
            />
            <button onClick={handleSend} type="submit" className="chatScreen__inputButton">SEND</button>
    </form>

        </div>
    );
    }
     
        
       
export default ChatScreen;