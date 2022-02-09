import "./App.css";
import AddUsers from "./components/AddUsers";
import AllUsers from "./components/AllUsers";
import CodeForInterview from "./components/CodeForInterview";
import Navbar from "./components/Navbar";
import { BrowserRouter ,  Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
<Routes>
      <Route exact path="/" element={<CodeForInterview />} />
      <Route exact path="/all" element={<AllUsers />} />
      <Route exact path="/add" element={<AddUsers />} />
      <Route path="*" element={<NotFound/>} />
      </Routes>
    </ BrowserRouter>
  );
}

export default App;
