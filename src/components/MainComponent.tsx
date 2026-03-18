import React from "react";
import "../styles/MainComponentStyle.scss";
import MainButton from "./MainButton";
import FilmDescriptionComponent from "./FilmDescriptionComponent";
import { api } from "../api/api";

export interface filmInterface {
  id: string;
  filmName: string;
  filmDescription: string;
  filmDirector: string;
  filmWriter: string;
  filmYearOfProduction: string;
  filmCountry: string;
  filmGenre: string;
  filmBudget: string;
  filmFees: string;
  filmLimitAge: string;
  filmDuration: string;
  filmPhoto: string;
}

function MainComponent() {
  const [filmState, setFilmState] = React.useState<filmInterface>();
  const [isLoading, setIsLoading] = React.useState<boolean>(true)

  async function getFilm() {
    setIsLoading(!isLoading)
    return await api
      .get<filmInterface>("/films")
      .then((res) => {
        setFilmState(res.data);
        setIsLoading(!!isLoading)
      });
  }

  return (
    isLoading ? (<div className="main_component_container">
      <FilmDescriptionComponent film={filmState} />
      <br />
      <MainButton buttonFunction={getFilm} />
    </div>) : <div className="loadDiv">Loading...</div>
  );
}

export default MainComponent;
