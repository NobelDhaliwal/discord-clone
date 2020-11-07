import React from 'react';
import "./ChatHeader.css";
import NotificationsIcon from '@material-ui/icons/Notifications';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PeopleIcon from '@material-ui/icons/People';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import HelpRoundedIcon from '@material-ui/icons/HelpRounded';
const ChatHeader = ({channelName}) => {
    return (
        <div className="chatHeader">
            {/* in chatheader we have leftchatheader and rightchatheader */}
            
            {/* left side */}
            <div className="chatHeader_left">
                {/* Title*/}
                <h3>
                    <span className="chatHeader_hash">#</span>
            {channelName}
               </h3>
            </div>

            {/* right side */}
            <div className="ChatHeader_right">
                {/* Icons */}
                <div className="icon_chat">
                    <NotificationsIcon />
                    <LocationOnIcon />
                    <PeopleIcon />

                    <div className="chatHeader_search">
                        {/* search */}
                        <input placeholder="Search" />
                        <SearchRoundedIcon />
                    </div>

                    {/* icons */}

                    <SendRoundedIcon />
                    <HelpRoundedIcon />
                </div>
            </div>

        </div>
    );
};

export default ChatHeader;
