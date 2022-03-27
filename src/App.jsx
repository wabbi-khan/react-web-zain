import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Nabvar from "./Components/Nabvar";
import Profile from "./Components/Profile";
import Home from "./Components/Home";
function App() {
  return (
    <>
      <Nabvar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
