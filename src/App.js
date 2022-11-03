import { Navbar } from "./components/Navbar";
import { Taskbar } from "./components/Taskbar";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/Singup/Index";
import Login from "./components/Login/Index";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <section>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/myapp" element={<Taskbar />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
