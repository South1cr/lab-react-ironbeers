import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="App">
      <div>
        <img src="./beers.png"></img>
        <br></br>
        <Link to={"/beers"}>All Beers</Link>
        <p>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged.
        </p>
      </div>
      <div>
        <img src="./random-beer.png"></img>
        <br></br>
        <Link to={"/random-beer"}>Random Beer</Link>
        <p>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged.
        </p>
      </div>
      <img src="./new-beer.png"></img>
      <br></br>
      <Link to={"/new-beer"}>New Beer</Link>
      <p>
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book. It has survived not only five centuries, but
        also the leap into electronic typesetting, remaining essentially
        unchanged.
      </p>
    </div>
  );
}

export default Home;
