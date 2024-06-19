import "./App.css";
import Footer from "./components/footer/Footer.jsx";
import Hero from "./components/hero/Hero.jsx";
import Join from "./components/join/Join.jsx";
import Plans from "./components/plans/Plans.jsx";
import Programs from "./components/programs/Programs.jsx";
import Reasons from "./components/reasons/Reasons.jsx";
import Testimonials from "./components/testimonials/Testimonials.jsx";

function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
