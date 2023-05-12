import { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

function NewBeer() {
  const [formData, setFormData] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: "",
  });

  const handleFormData = (prop, value) => {
    const fd = { ...formData };
    fd[prop] = value;
    setFormData(fd);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Navbar />
      <form>
        <label>Name</label>
        <br></br>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => handleFormData("name", e.target.value)}
        ></input>
        <br></br>
        <label>tagline</label>
        <br></br>
        <input
          type="text"
          value={formData.tagline}
          onChange={(e) => handleFormData("tagline", e.target.value)}
        ></input>
        <br></br>
        <label>description</label>
        <br></br>
        <input
          type="text"
          value={formData.description}
          onChange={(e) => handleFormData("description", e.target.value)}
        ></input>
        <br></br>
        <label>first_brewed</label>
        <br></br>
        <input
          type="text"
          value={formData.first_brewed}
          onChange={(e) => handleFormData("first_brewed", e.target.value)}
        ></input>
        <br></br>
        <label>brewers_tips</label>
        <br></br>
        <input
          type="text"
          value={formData.brewers_tips}
          onChange={(e) => handleFormData("brewers_tips", e.target.value)}
        ></input>
        <br></br>
        <label>Attenuation Level</label>
        <br></br>
        <input
          type="number"
          value={formData.attenuation_level}
          onChange={(e) => handleFormData("attenuation_level", e.target.value)}
        ></input>
        <br></br>
        <label>contributed by</label>
        <br></br>
        <input
          type="text"
          value={formData.contributed_by}
          onChange={(e) => handleFormData("contributed_by", e.target.value)}
        ></input>
        <br></br>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  );
}

export default NewBeer;
