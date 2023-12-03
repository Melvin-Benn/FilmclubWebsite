import data from 'src/movies.json';

const movies = Array.from(data.movies).reverse();

export default function Page() {
    return (
        <>
        <header>
    <h1>filmclub</h1>
  </header>
  <div className="flex">
  <div className="wrapper">
    <div className="line"></div>
   {movies.map(movie => 
    <div key={movie.title} className="film">
    <div className="image-outer">
      <div className="image-inner">
        <img src={`/cover/${movie.image}`} alt="Beschreibung des Bildes" />
      </div>
    </div>
    <div className="content">
      <p className="title">{movie.title}</p>
      <p className="date">{movie.date}</p>
      <p className="rating">Filmclub Rating: {movie.rating}</p>
    </div>
  </div>)}
  </div>
</div> 
</>
    )
  }
