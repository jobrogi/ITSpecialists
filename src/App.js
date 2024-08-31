import AboutUs from "./Components/AboutUs";
import LandingPage from "./Components/LandingPage";
import Navbar from "./Components/Nav";
import Services from "./Components/Services";

function App() {
  return (
    <div className="w-screen max-w-full max-h-full h-full bg-black">
      <Navbar />

      <LandingPage />

      <Services />
      <AboutUs />
    </div>
  );
}

export default App;
