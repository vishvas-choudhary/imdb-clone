import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import { MovieList } from "../component/MovieList";

export function Home() {
  const [popularMovies, setPopularMovies] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
    )
      .then((res) => res.json())
      .then((data) => setPopularMovies(data.results));
  });
  return (
    <div>
      <Carousel
        showThumbs={false}
        autoPlay={true}
        transitionTime={3}
        infiniteLoop={true}
        showStatus={false}
      >
        {popularMovies.map((movie) => (
          <Link to={`/movie/${movie.id}`}>
            <div className="h-[600px]">
              <img
                className="m-auto block w-full"
                src={`https://image.tmdb.org/t/p/original${
                  movie && movie.backdrop_path
                }`}
                alt="movie poster"
              />
            </div>
            <div className="absolute bottom-0 h-[70%] p-20 flex flex-col w-full justify-end items-start bg-[linear-gradient(rgba(0,0,0,0),_rgba(0,0,0,1))]">
              <div>{movie ? movie.original_title : ""}</div>
              <div className="text-3xl mb-4">
                {movie ? movie.release_date : ""}{" "}
                <span className="ml-12">
                  {movie ? movie.vote_average : ""}
                  <i className="fas fa-star" />
                </span>
              </div>
              <div className="italic text-base mb-1 flex text-left w-1/2">
                {movie ? movie.overview : ""}
              </div>
            </div>
          </Link>
        ))}
      </Carousel>
      <MovieList />
    </div>
  );
}
