import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import axios from "axios";

function Beers() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // fetch all beers
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(data);

  return (
    <>
      <Navbar />
      <div>
        {data.map((elem, i) => {
          return (
            <div className="beers-container" key={i}>
              <img src={elem.image_url}></img>
              <div>
                <h3>{elem.name}</h3>
                <h4>{elem.tagline}</h4>
                <p>Contributed by: {elem.contributed_by}</p>
                <a href={`/beers/${elem._id}`}>Details...</a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Beers;
