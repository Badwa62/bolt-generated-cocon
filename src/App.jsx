<file path="src/App.jsx">
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Forum from './pages/Forum';
import Chat from './pages/Chat';
import Profile from './pages/Profile';

function App() {
  return (
    
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    
  );
}

export default App;
</file>
