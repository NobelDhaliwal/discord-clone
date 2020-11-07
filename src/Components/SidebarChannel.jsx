import React from "react";
import { useDispatch } from "react-redux";
import { setChannelInfo } from "../features/appSlice";
import "./SidebarChannel.css";

const SidebarChannel=({ id, channelName })=> {  //props passed
  const dispatch = useDispatch();

  return (
    /* When we click on the channel name we want Redux to update the store.
     We need to declare dispatch in order to do this.*/ 
    <div
      className="sidebarChannel"
      onClick={() =>
        dispatch(
          setChannelInfo({
            channelId: id,
            channelName: channelName,
          })
        )}
    >
      <h4>
        <span className="sidebarChannel__hash">#</span>
        {channelName}
      </h4>
    </div>
  );
};

export default SidebarChannel;
