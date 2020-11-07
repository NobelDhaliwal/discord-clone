import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Chat from "./Components/Chat";
import Sidebar from "./Components/Sidebar";
import { selectUser } from "./features/userSlice";
import Login from "./Components/Login";
import { auth } from "./Firebase";
import { login, logout } from "./features/userSlice";

function App() {
  /*dispatch allows us to push things into the data layer 
  so we can retrieve where ever we feel like */
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
/*useSelector is a React hook and 
putting selectUser as a piece of state will retrieve that piece of information. */ 
  
/*useEffect is a React hook that fires the code only once when the component loads. 
We use a useEffect here because we wouldn’t want to be running in an infinite loop.*/ 
useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user is logged in
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        // the user is logged out
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    /*We want to online render the app once the user is logged in right.So in order to do that we have to use something called the ternary operator 
    which basically simplifies the if and else conditional statement to one line */
    <div className="app">
      {/* we need to pull in the user into App.js. with useSelector hook  */}
      {user ? (
        <>
        {/* We have two main components sidebar and chat */}
          <Sidebar />
          <Chat />
        </>
      ) : (
        <Login />
      )}
      {/* if there is no user show login page */}
    </div>
  );
}

export default App;
/*1.ConfigureStore replaces createStore,
 where you can still pass your reducers and middlewares as parameters.\
 2.createAction removes some of the boilerplate you usually have to write for each action,
  like the type parameter, 
 how the payload looks and the argument name you will use.
 3.createReducer is the last piece of the puzzle and the one with the most
  interesting differences compared to the conventional approach.
Instead of declaring a switch/case for each action type, you can use the
 actions themselves as parameters 
and have methods for how each of them should change the store's state.*/