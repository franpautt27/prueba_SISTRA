import { Footer } from "./components/Footer";
import { InfoCard } from "./components/InfoCard";
import { NavBar } from "./components/NavBar";


function App() {
  return (
    <>
      <NavBar />
      <div className="container my-5">
        <InfoCard />
      </div>
      <Footer />
    </>
  );
}

export default App;
