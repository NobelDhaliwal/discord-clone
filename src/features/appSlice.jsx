import { createSlice } from '@reduxjs/toolkit';
//How to add "slices" of reducer logic to the Redux store with createSlice

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    channelId:null,
    channelName:null,
  },
  reducers: {
  setChannelInfo: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.channelId=action.payload.channelId;
      state.channelName=action.payload.channelName;
    },
    },
  
});

export const { setChannelId } = appSlice.actions;


export const {setChannelInfo}=appSlice.actions;
export const  selectChannelName = state => state.app.channelName;
 export const selectChannelId = state => state.app.channelId;

export default appSlice.reducer;
