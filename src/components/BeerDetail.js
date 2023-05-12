import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import BeerItem from "./BeerItem";

function BeerDetail() {

  const [data, setData] = useState({});

  const { beerId } = useParams();

  useEffect(() => {
    // fetch all beers
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [beerId]);

  return (
    <>
      <Navbar />
      <BeerItem beer={data} />
    </>
  );
}

export default BeerDetail;