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
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

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
    <div className="app">
      {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
        <Login />
      )}
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