import {Route, Routes, BrowserRouter  } from "react-router-dom";

import './App.css'
import { Home } from './routes/Home'
import { BlogsView } from "./routes/BlogsView";
import { BlogView } from "./routes/BlogView";
import { AdminView } from "./routes/AdminView";
import ChatBotContain from './components/chatBot/chatBotContain'
function App() {
  return (
      <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<BlogsView />} />
        <Route path="/blogs/:id" element={<BlogView />} />
        <Route path="/admin" element={<AdminView />} />
      </Routes>
    </BrowserRouter>
    <ChatBotContain></ChatBotContain>
    </>
  )
}

export default App
