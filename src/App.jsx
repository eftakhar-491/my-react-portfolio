import Nav from "./components/Nav";
import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
function App() {
  return (
    <>
      <main className="">
        <header className="max-w-[1400px] mx-auto md:h-screen">
          <Nav />
          <Hero />
        </header>
        <hr />
        <About />
      </main>
    </>
  );
}

export default App;
