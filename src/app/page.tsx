import Image from 'next/image';
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
          {movies.map(movie => (
            <div key={movie.title} className="film">
              <div className="image-outer">
                <div className="image-inner">
                  <Image
                    src={`/cover/${movie.image.src}`}
                    alt="Beschreibung des Bildes"
                    width={160}
                    height={Math.floor(
                      movie.image.height / (movie.image.width / 160)
                    )}
                  />
                </div>
              </div>
              <div className="content">
                <p className="title">{movie.title}</p>
                <p className="date">{movie.date}</p>
                <p className="rating">Filmclub Rating: {movie.rating}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
