import React from 'react';
import "./Chat.css";
import ChatHeader from "./ChatHeader.jsx";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import Message from "./Message.jsx";
const Chat = () => {
    return (
        // After sidebar we have Chat Section in which we have ChatHeader
        <div className="chat">
            {/* Chat Header Section */}
            <ChatHeader />

             {/* Chat Message Section*/}
            <div className="chat_msg">
                <Message/>
                <Message/>
                <Message/>
                <Message/>
            </div>

            <div className="chat_input"> 
            <AddCircleIcon fontSize="large"/>
           <form action="">
          <input type="text" placeholder={`Message #TESTCHANNEL`} />
                <button type="Submit" className="chat_inputButton">
               Send Message
               </button>
               </form>

         {/* icons of chat message */}
         <div className="chat_inputIcons">
             <CardGiftcardIcon fontSize="large"/>
             <GifIcon fontSize="large"/>
             <EmojiEmotionsIcon fontSize="large"/>
           </div>
            </div>


        </div>
    );
};

export default Chat;
