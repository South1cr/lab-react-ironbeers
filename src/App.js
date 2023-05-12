import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Beers from "./components/Beers";
import BeerDetail from "./components/BeerDetail";
import RandomBeer from "./components/Random";
import NewBeer from "./components/NewBeer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/beers" element={<Beers />} />
      <Route path="/beers/:beerId" element={<BeerDetail />} />
      <Route path="/random-beer" element={<RandomBeer />} />
      <Route path="/new-beer" element={<NewBeer />} />
    </Routes>
  );
}

export default App;
