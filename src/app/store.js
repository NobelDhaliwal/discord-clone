import {configureStore} from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import appReducer from "../features/appSlice";

/*Redux is state Management Tool or library. 
your Application state are managed by redux.
Redux is a pattern and library for managing and updating application state,
 using events called "actions"
1.store 2.reducers 3.actions are 3 main concepts in redux 
Redux help us to create global states like context API.*/
export default configureStore ({
//reducer is something that listens to actions
// configureStore is similar to createStore function from redux 
/*To create store we use configureStore function and pass a reducer in it.
With onfigureStore we can pass different reducers in a object*/
    reducer: {
        user:userReducer, //reducers in object 
        app:appReducer,
    }
});

