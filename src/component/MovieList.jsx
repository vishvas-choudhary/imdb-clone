import { useEffect, useState } from "react";
import { Cards } from "./Card";
import { useParams } from "react-router-dom";

export function MovieList() {
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();

  function getData() {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        type ? type : "popular"
      }?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMovieList(data.results));
  }

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [type]);

  return (
    <div className="px-12 pt-0 pb-12">
      <h2 className="m-10 text-[1.75rem]">
        {(type ? type : "popular").toUpperCase()}
      </h2>
      <div className="flex flex-wrap justify-center">
        {movieList.map((movie, i) => (
          <Cards key={i} movie={movie} />
        ))}
      </div>
    </div>
  );
}
