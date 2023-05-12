function BeerItem({ beer }) {
  return (
    <div>
        <img src={beer.image_url}></img>
        <h2>{beer.name}</h2>
        <h3>{beer.tagline}</h3>
        <p>{beer.first_brewed}&emsp;{beer.attenuation_level}</p>
        <p>{beer.description}</p>
        <p>{beer.contributed_by}</p>
    </div>
  );
}
export default BeerItem;
