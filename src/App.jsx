import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className=" mx-2 lg:mx-32">
      <Navbar/>
      <Hero/>
    </div>
  );
};

export default App;