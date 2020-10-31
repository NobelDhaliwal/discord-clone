import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import CallIcon from '@material-ui/icons/Call';
import "./Sidebar.css";
import SidebarChannel from "./SidebarChannel";
import { Avatar } from '@material-ui/core';
import MicIcon from '@material-ui/icons/Mic';
import HeadsetIcon from '@material-ui/icons/Headset';
import SettingsIcon from '@material-ui/icons/Settings';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

const Sidebar = () => {
    return (
        <div className="sidebar">
            {/* SidebarTop Section*/}

            <div className="sidebar_top">
                <h3>Code With Nobel</h3>
                <ExpandMoreIcon />
            </div>

            {/* Channels */}
            {/* we want channels to take as much as width as possible */}
            <div className="sidebar_channels">
                <div className="sidebar_channelsHeader">
                    <div className="sidebar_header">
                        <ExpandMoreIcon />
                        <h4>Text Channels</h4>
                    </div>
                    <AddIcon className="sidebar_addChannel" />
                </div>
                {/* channel list */}
                <div className="sidebar__channelsList">
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                </div>
            </div>
            {/* channels Section ended */}

            {/*bottom Section */}
            <div className="sidebar_voice">

                <SignalCellularAltIcon
                    className="sidebar_voiceIcon"
                    fontSize="large"
                />
                {/* this div to take as much as space possible */}
                <div className="sidebar_voiceInfo">
                    <h3>Voice Connected</h3>
                    <p>Stream</p>
                </div>
                {/*  */}

                <div className="sidebar_voiceIcons">
                    <InfoOutlinedIcon />
                    <CallIcon />
                </div>
            </div>
            {/* Bottom Section ended */}

            {/* profile section */}
            <div className="sidebar__profile">
                <Avatar />
                <div className="sidebar__profileInfo">
                    <h3>Nobel</h3>
                    <p># nobel20@gmail.com</p>
                </div>
                <div className="sidebar__profileIcon">
                    <MicIcon />
                    <HeadsetIcon />
                    <SettingsIcon />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
