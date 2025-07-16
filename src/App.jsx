import "./App.css";
import NavBar from "./components/Navbar";
import ScrollTimeline from "./components/ScrollIndicator";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Project";
import SocialSidebar from "./components/Sidebar";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <NavBar />
      <SocialSidebar />
      <Hero />
      <Skills />

      <Projects />
      <ScrollTimeline />
      <Contact />
    </div>
  );
}

export default App;
