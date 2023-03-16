import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function MovieDetail() {
  const [movieDetail, setMovieDetail] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  }, []);

  function getData() {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMovieDetail(data));
  }

  return (
    <div className="w-full relative flex flex-col items-center">
      <div className="w-[80%]">
        <img
          className="w-full h-[500px] object-cover object-[0_35%] brightness-[.70]"
          src={`https://image.tmdb.org/t/p/original${
            movieDetail ? movieDetail.backdrop_path : ""
          }`}
          alt="backdrop"
        />
      </div>
      <div className="flex items-center relative bottom-[225px] w-[75%]">
        <div className="mr-[30px]">
          <div>
            <img
              className="w-[300px] rounded-lg shadow-[rgba(0,0,0,0.86)_0px_22px_40px_6px]"
              src={`https://image.tmdb.org/t/p/original${
                movieDetail ? movieDetail.poster_path : ""
              }`}
              alt="poster"
            />
          </div>
        </div>
        <div className="text-white flex flex-col justify-between h-[450px]">
          <div>
            <div className="mb-2 font-semibold text-5xl">
              {movieDetail ? movieDetail.original_title : ""}
            </div>
            <div className="mb-2">{movieDetail ? movieDetail.tagline : ""}</div>
            <div className="mb-2">
              {movieDetail ? movieDetail.vote_average : ""}{" "}
              <i className="fas fa-star" />
              <span className="ml-4">
                {movieDetail ? "(" + movieDetail.vote_count + ") votes" : ""}
              </span>
            </div>
            <div className="mb-2">
              {movieDetail ? movieDetail.runtime + " mins" : ""}
            </div>
            <div className="mb-2">
              {movieDetail ? "Release date: " + movieDetail.release_date : ""}
            </div>
            <div className="my-5 mx-0">
              {movieDetail && movieDetail.genres
                ? movieDetail.genres.map((genre) => (
                    <>
                      <span
                        className="p-2 border-2 border-solid border-white rounded-[20px] mr-4"
                        id={genre.id}
                      >
                        {genre.name}
                      </span>
                    </>
                  ))
                : ""}
            </div>
          </div>
          <div className="my-8 mx-0 flex-[0.8]">
            <div className="text-2xl mb-5 font-semibold flex items-center relative">
              Synopsis
            </div>
            <div>{movieDetail ? movieDetail.overview : ""}</div>
          </div>
        </div>
      </div>
      <div className="relative b-[120px] flex justify-between w-3/4">
        <div className="text-[2.2rem]">Useful Links</div>
        {movieDetail && movieDetail.homepage && (
          <a
            href={movieDetail.homepage}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <p>
              <span className="bg-[rgb(214,31,31)] flex justify-center items-center py-[0.8rem] px-8 rounded-[20px] cursor-pointer w-[150px] text-black font-bold">
                Homepage{" "}
                <i className="ml-[1.4rem] fas fa-external-link-alt"></i>
              </span>
            </p>
          </a>
        )}
        {movieDetail && movieDetail.imdb_id && (
          <a
            href={"https://www.imdb.com/title/" + movieDetail.imdb_id}
            target="_blank"
          >
            <p>
              <span className="bg-[#f3ce13] flex justify-center items-center py-[0.8rem] px-8 rounded-[20px] cursor-pointer w-[150px] text-black font-bold">
                IMDb<i className="ml-[1.4rem] fas fa-external-link-alt"></i>
              </span>
            </p>
          </a>
        )}
      </div>
      <div className="text-[2.2rem]">Production companies</div>
      <div className="w-[85%] flex justify-center items-end mb-16">
        {movieDetail &&
          movieDetail.production_companies &&
          movieDetail.production_companies.map((company) => (
            <>
              {company.logo_path && (
                <span className="flex flex-col items-center justify-center">
                  <img
                    className="w-[200px] m-8"
                    src={
                      "https://image.tmdb.org/t/p/original" + company.logo_path
                    }
                  />
                  <span>{company.name}</span>
                </span>
              )}
            </>
          ))}
      </div>
    </div>
  );
}
