import './style.css'
import * as data from './movies.json';

type Movie = typeof data.movies[0];

function movieTemplate(movie: Movie) {
  return `
  <div class="film">
    <div class="image-outer">
      <div class="image-inner">
        <img src="/cover/${movie.image}" alt="Beschreibung des Bildes" />
      </div>
    </div>
    <div class="content">
      <p class="title">${movie.title}</p>
      <p class="date">${movie.date}</p>
    </div>
  </div>`;
}

function appendMovies() {
  const wrapper = document.querySelector<HTMLDivElement>('.wrapper');
  if (!wrapper) return;
  data.movies.reverse().forEach(movie => {
    const movieString = movieTemplate(movie);
    const template = document.createElement('template');
    template.innerHTML = movieString;
    wrapper.appendChild(template.content.cloneNode(true));
  })
}

appendMovies();
