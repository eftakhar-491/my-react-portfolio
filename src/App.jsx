import Nav from "./components/Nav";
import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
function App() {
  return (
    <>
      <main className="max-w-[1400px] mx-auto md:h-screen xl:h-[700px]">
        <Nav />
        <Hero />

        <hr />
        <About />
        <Skills />
      </main>
    </>
  );
}

export default App;
