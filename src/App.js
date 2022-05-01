import logo from "./logo.svg";
import "./App.css";
import HomePage from "./Pages/HomePage";
import Navbar from "./Components/Navbar";
import ProfilePage from "./Pages/ProfilePage";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App container-fluid">
      <Navbar/>
    
        <Routes>
            <Route index  element={<HomePage/>}/>
            <Route path="profilepage" element={<ProfilePage/>}/>
            <Route path="nav" element={<Navbar/>}/>
        </Routes>
      
    </div>
  );
}

export default App;
