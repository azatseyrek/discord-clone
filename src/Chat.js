import { AddCircle, CardGiftcard, EmojiEmotions, Gif } from "@mui/icons-material";
import React from "react";
import "./Chat.css";
import ChatHeader from "./ChatHeader";
import Message from "./Message";

const Chat = () => {
  return (
    <div className="chat">
<ChatHeader/>
<div className="chat__messages">
<Message/>
<Message/>
<Message/>
</div>

<div className="chat__input">
<AddCircle fontSize='large'/>
<form >
    <input placeholder={`Message #TESTCHANNEL`}/>
    <button className='chat__inputButton' type='submit'>Send Message</button>
</form>
<div className="chat__inputIcons">
    <CardGiftcard/>
    <Gif/>
    <EmojiEmotions/>
</div>
</div>
    </div>
  );
};

export default Chat;
