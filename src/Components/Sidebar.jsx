import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import SidebarChannel from "./SidebarChannel";
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import CallIcon from "@material-ui/icons/Call";
import { Avatar } from "@material-ui/core";
import MicIcon from "@material-ui/icons/Mic";
import HeadsetIcon from "@material-ui/icons/Headset";
import SettingsIcon from "@material-ui/icons/Settings";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import db, { auth } from "../Firebase";

const Sidebar=()=> {
  const user = useSelector(selectUser); //react-redux hooks
       //useState Hooks
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    //collection in firebase->channels and takes snapshot of collection
    //Give me channels folder nd onSnapshot gives me 
    //snapshot of channels collection (folder)
    db.collection("channels").onSnapshot((snapshot) =>
      setChannels(
        //snapahot.docs gives us array (list of channels)---(going to all snapshot docs)
        snapshot.docs.map((doc) => ({  //map thru every single document
          id: doc.id,
          channel: doc.data(),
        }))
      )
    );
  }, []);
/*useEffects takes two arguments and dependencies.having empty arrar means run ony once
having dependencies name means run when dependencies ex name,age change*/
  
//Adding Channel
const handleAddChannel = () => {
  //JS|window prompt() method is used to display a dialog with an optional message
    const channelName = prompt("Enter a new channel name");
    if (channelName) {
      //We are going into the db, inside the channel collection, and add the channelName.
      db.collection("channels").add({
        channelName: channelName,
      });
    }
  };

  return (
    <div className="sidebar">

      {/* Top Sidebar Section */}
      <div className="sidebar_top">
        <h3> Code With Nobel </h3>
        <ExpandMoreIcon />
      </div>

       {/* Channels Section 
       we want sidebar channel to take maximum space or room*/}
      <div className="sidebar_channels">

        <div className="sidebar_channelsHeader">
          <div className="sidebar_header">
            <ExpandMoreIcon />
            <h4>Text Channels</h4>
          </div>
    <AddIcon onClick={handleAddChannel} className="sidebar__addChannel" />
        </div>

                {/*Sidebar Channel Components */}
        <div className="sidebar_channelsList">
             {/* Array.map method */}
          {channels.map(({ id, channel }) => (
            <SidebarChannel
              key={id}
              id={id}
              channelName={channel.channelName}
            />
          ))}
        </div>
      </div>
      
      {/* Bottom voice section */}
     <div className="sidebar_voice">
        <SignalCellularAltIcon
          className="sidebar_voiceIcon"
          fontSize="large"
        />
        <div className="sidebar_voiceInfo">
          <h3>Voice Connected</h3>
          <p>Stream</p>
        </div>

        <div className="sidebar_voiceIcons">
          <InfoOutlinedIcon />
          <CallIcon />
        </div>
      </div>
        {/*Profile Section  */}
        {/* What we want to do if we click our profile image on the sidebar
         then it should log us out. */}
      <div className="sidebar__profile">
        {/*  So we are going to add an onClick event handler to the Avatar 
        and the function will be auth.signOut.  */}
        <Avatar onClick={() => auth.signOut()} src={user.photo} />
        <div className="sidebar__profileInfo">
          <h3>{user.displayName}</h3>
          <p>#{user.uid.substring(0, 5)}</p>
        </div>
{/* Substring is a method that in this case only gets the first five characters. 
The first number is inclusive and the last number is exclusive. */}
        <div className="sidebar__profileIcons">
          <MicIcon />
          <HeadsetIcon />
          <SettingsIcon />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;