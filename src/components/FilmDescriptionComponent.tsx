import React from "react";
import "../styles/FilmDescriptionComponentStyle.scss";
import pulpPoster from "../assets/pulp_poster.jpg";
import johnImg from "../assets/john.webp";
import samImg from "../assets/sam_l.webp";
import type { filmInterface } from "./MainComponent";


interface currentFilmDescription {
  film: filmInterface | undefined;
}

const baseUrl = import.meta.env.APP_API_URL || 'http://localhost:3001';

function FilmDescriptionComponent({ film }: currentFilmDescription) {
  return (
    <>
      {film ? (
        <div className="film_description_container">
          <div className="film_description_poster_container">
            <img src={`${baseUrl}/films/upload/${film.filmPhoto}`} alt="film_poster" width={300} height={300} />
            <div className="film_description_director">
              <h3>Режиссер: {film.filmDirector}</h3>
              <h3>Сценарий: {film.filmWriter}</h3>
            </div>
          </div>
          <div className="film_description_name_container">
            <div className="film_description_name">
              <h1>
                {film.filmName} ({film.filmYearOfProduction})
              </h1>
            </div>
            <div className="film_description_text">
              <span>{film.filmDescription}</span>
              <div className="film_description_characteristic">
                <h3>Год производства: {film.filmYearOfProduction}</h3>
                <h3>Страна: {film.filmCountry}</h3>
                <h3>Жанр: {film.filmGenre}</h3>
                <h3>Бюджет: ${film.filmBudget}</h3>
                <h3>Сборы в мире: ${film.filmFees}</h3>
                <h3>Возраст: {film.filmLimitAge}+</h3>
                <h3>Время: {film.filmDuration}</h3>
              </div>
              {/* <div className="film_description_actors">
            <div>
              <img src={johnImg} alt="actor_first" width={50} height={50} />
            </div>
            <div>
              <img src={samImg} alt="second" width={50} height={50} />
            </div>
          </div> */}
            </div>
          </div>
        </div>
      ) : (
        <div>Для поиска фильма нажмите на кнопку</div>
      )}
    </>
  );
}

export default FilmDescriptionComponent;
