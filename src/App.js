import React from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";

import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import NavigationBar from "./components/NavigationBar";


// layout component to handle spacing for fixed navbar
function Layout({ children }){
return <div className="mt-0">{children}</div>; // no padding
}

export default function App() {
  return (
    <Router>
      <NavigationBar />
      <Layout>
      <Routes>
        <Route path="/" element={<Home />} />


        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </Layout>
    </Router>
  );
}
