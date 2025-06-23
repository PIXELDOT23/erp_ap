// Import Modules
import { Routes, Route } from "react-router";

// Import Components
import Navbar from "./components/Navbar.jsx";
import Auth_btn from "./components/Auth_btn.jsx";
import Footer from "./components/Footer.jsx";

// Import Routes
import Register from "./Routes/Auth/Register.jsx";
import Login from "./Routes/Auth/Login.jsx";
import Home from "./Routes/Home.jsx";

function App() {


  return (
    <>
        <section className="h-dvh tracking-widest">
           <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/auth/register" element={<Register />} />
                <Route path="/auth/login" element={<Login />} />
            </Routes>
            <Footer />
        </section>
    </>
  )
}

export default App
