import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./pages/Hero";

function App() {
  return (
    <>
      <div className=" ">
       
        <Hero></Hero>
        <Footer />
      </div>
    </>
  );
}

export default App;
