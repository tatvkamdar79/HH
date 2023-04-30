import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Brands from "./Pages/Brands";
import Home from "./Pages/Home";
import HomeProducts from "./Pages/HomeProducts";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <HomeProducts />
      <Brands />
      <Footer />
    </div>
  );
}

export default App;
