import React from 'react';
import './App.css';
import Chat from './Components/Chat.jsx';
import Sidebar from "./Components/Sidebar.jsx";

function App() {
  return (
    <div className="App">
    {/* sidebar */}
    <Sidebar/>
    {/* chat */}
    <Chat/>
    </div>
  );
}

export default App;
