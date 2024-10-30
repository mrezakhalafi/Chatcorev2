import React from 'react';
import Sidebar from './components/SideBar';
import SideMenu from './components/SideMenu';
import ChatWindow from './components/ChatWindow';
import Drawer from './components/Drawer';

function App() {
  return (
    <div className="flex h-screen">
      <SideMenu />
      <Sidebar />
      <ChatWindow />
    </div>
  );
}

export default App;
