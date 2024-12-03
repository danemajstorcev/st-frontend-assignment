import "./App.scss";
import Header from "./components/Header/Header";
import Invoice from "./components/Invoice/Invoice";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import AboutUs from "./components/AboutUs/AboutUs";
import { InvoiceContext } from "./InvoiceContext";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Invoice />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
