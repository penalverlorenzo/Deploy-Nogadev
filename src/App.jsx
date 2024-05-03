import {Route, Routes, BrowserRouter  } from "react-router-dom";

import { Home } from './routes/Home'
import { BlogsView } from "./routes/BlogsView";
import { BlogView } from "./routes/BlogView";
import { AdminView } from "./routes/AdminView";
import { ContactView } from "./routes/ContactView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<BlogsView />} />
        <Route path="/blogs/:id" element={<BlogView />} />
        <Route path="/admin" element={<AdminView />} />
        <Route path="/contact" element={<ContactView />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
