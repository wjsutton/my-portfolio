import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
// import Projects from './components/Projects';
// import Testimonials from './components/Testimonials';
// import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';


function App() {
    return (
        <div className="App">
            <Navbar />
            <Header />
            <About />
            {/* <Projects />
            <Testimonials />
            <Contact /> */}
            <Footer />
        </div>
    );
}

export default App;
