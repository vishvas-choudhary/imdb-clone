import { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";

export function Cards({ movie }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="inline-block relative m-[0.19rem] min-w-[200px] h-[300px] overflow-hidden cursor-pointer z-0 border-[1px_solid_rgb(99,99,99)] rounded-[10px] transition-transform hover:scale-[1.2] hover:z-50 hover:shadow-[rgba(0,0,0,0.25)_0px_54px_55px,_rgba(0,0,0,0.12)_0px_-12px_30px,_rgba(0,0,0,0.12)_0px_4px_6px,_rgba(0,0,0,0.17)_0px_12px_13px,_rgba(0,0,0,0.09)_0px_-3px_5px]">
          <SkeletonTheme
            baseColor="#202020"
            highlightColor="#444"
            width={"100%"}
          >
            <Skeleton height={300} duration={2} />
          </SkeletonTheme>
        </div>
      ) : (
        <Link to={`/movie/${movie.id}`}>
          <div className="inline-block relative m-[0.19rem] min-w-[200px] h-[300px] overflow-hidden cursor-pointer z-0 border border-solid border-[rgb(99,99,99)] rounded-[10px] transition-[transform_0.2s] hover:scale-[1.2] hover:z-50 hover:shadow-[rgba(0,0,0,0.25)_0px_54px_55px,_rgba(0,0,0,0.12)_0px_-12px_30px,_rgba(0,0,0,0.12)_0px_4px_6px,_rgba(0,0,0,0.17)_0px_12px_13px,_rgba(0,0,0,0.09)_0px_-3px_5px]">
            <img
              className="h-[300px]"
              src={`https://image.tmdb.org/t/p/original${
                movie ? movie.poster_path : ""
              }`}
              alt=""
            />
            <div className="absolute px-4 pt-0 pb-4 bottom-0 h-[290px] flex flex-col w-full justify-end bg-[linear-gradient(rgb(0,0,0,0),_rgb(0,0,0,1))] opacity-0 transition-opacity hover:opacity-100">
              <div className="font-black text-base mb-[0.4rem]">
                {movie ? movie.original_title : ""}
              </div>
              <div className="text-xs mb-1">
                {movie ? movie.release_date : ""}
                <span className="float-right">
                  {movie ? movie.vote_average : ""}
                </span>
              </div>
              <div className="italic text-xs mb-1">
                {movie ? movie.overview.slice(0, 118) + "..." : ""}
              </div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
}
