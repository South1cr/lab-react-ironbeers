import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import BeerItem from "./BeerItem";

function RandomBeer() {

  const [data, setData] = useState({});

  useEffect(() => {
    // fetch all beers
    console.log('ran')
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Navbar />
      <BeerItem beer={data} />
    </>
  );
}

export default RandomBeer;