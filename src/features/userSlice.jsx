import { createSlice } from '@reduxjs/toolkit';
  /* We're going to use the Redux Toolkit createSlice function 
  to make a reducer function that knows how to handle our posts data.
 Reducer functions need to have some initial data included 
so that the Redux store has those values loaded when the app starts up*/
export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user:null,
  },
  reducers: {
   login: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.user=action.payload;
    },
    logout: state => {
      state.user = null;
 
  
    },
  },
});

export const { login,logout} = userSlice.actions;



export const selectUser = state => state.user.user;


export default userSlice.reducer;