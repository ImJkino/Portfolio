import React from "react";
import "./website.css";
import NavBar from "./Components/navbar/Navbar";
import Header from "./Components/header/Header"
import Experience from "./Components/experience/Experience";
import About from "./Components/about/About";
import Services from "./Components/services/Services";
import Portfolio from "./Components/portfolio/Portfolio";
import Testimonials from "./Components/testimonials/Testimonials";
import Contact from "./Components/contact/Contact";
import Footer from "./Components/footer/Footer"

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
