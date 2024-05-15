import {Route, Routes, BrowserRouter  } from "react-router-dom";

import { Home } from './routes/Home'
// import { BlogsView } from "./routes/BlogsView";
import { BlogView } from "./routes/BlogView";
import { AdminView } from "./routes/AdminView";
import { ContactView } from "./routes/ContactView";
import { ThanksView } from "./routes/ThanksView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/blogs" element={<BlogsView />} /> */}
        <Route path="/blogs/:id" element={<BlogView />} />
        <Route path="/admin" element={<AdminView />} />
        <Route path="/contact" element={<ContactView />} />
        <Route path="/thanks" element={<ThanksView />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
