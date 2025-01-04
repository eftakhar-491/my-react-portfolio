import Nav from "./components/Nav";
import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import { Outlet, useLocation } from "react-router-dom";
import Contact from "./components/Contact";
import { HelmetProvider } from "react-helmet-async";
function App() {
  const location = useLocation();
  return (
    <>
      <HelmetProvider>
        <main className="max-w-[1400px] mx-auto md:h-screen xl:h-[700px]">
          <Nav />
          {location.pathname === "/" ? (
            <>
              <Hero />
              <hr />
              <About />
              <Skills />
              <Projects />
              <Contact />
            </>
          ) : (
            <Outlet />
          )}
        </main>
      </HelmetProvider>
    </>
  );
}

export default App;
