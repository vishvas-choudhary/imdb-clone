import { Link, NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <div className="my-0 mx-1 py-2 px-0 flex justify-between items-center">
      <div className="flex items-center">
        <Link to="/">
          <img
            className="w-[80px] cursor-pointer"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
            alt="imdb logo"
          />
        </Link>

        <NavLink
          to="/movies/popular"
          className={({ isActive }) =>
            isActive ? "text-red-600" : "text-white hover:text-gray-400"
          }
        >
          <span className="my-0 mx-[30px] text-[1.3rem] cursor-pointer">
            Popular
          </span>
        </NavLink>
        <NavLink
          to="/movies/top_rated"
          className={({ isActive }) =>
            isActive ? "text-red-600" : "text-white hover:text-gray-400"
          }
        >
          <span className="my-0 mx-[30px] text-[1.3rem] cursor-pointer">
            Top Rated
          </span>
        </NavLink>
        <NavLink
          to="/movies/upcoming"
          className={({ isActive }) =>
            isActive ? "text-red-600" : "text-white hover:text-gray-400"
          }
        >
          <span className="my-0 mx-[30px] text-[1.3rem] cursor-pointer">
            Upcoming
          </span>
        </NavLink>
      </div>
    </div>
  );
}
