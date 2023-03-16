import { Routes, Route } from "react-router-dom";
import { MovieList } from "./component/MovieList";
import { Navbar } from "./component/Navbar";
import { Home } from "./pages/Home";
import { MovieDetail } from "./pages/MovieDetail";

function App() {
  return (
    <div className="bg-black text-white font-sans">
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="movie/:id" element={<MovieDetail />} />
        <Route path="movies/:type" element={<MovieList />} />
        <Route path="/*" element={<h1>Error Page</h1>} />
      </Routes>
    </div>
  );
}

export default App;
