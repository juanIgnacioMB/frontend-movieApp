import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { FavMovies } from "../pages/FavMovies";
import { Header } from "./Header";
import { Details } from "../pages/Details";
import { Results } from "../pages/Results";
import { GenreResults } from "../pages/GenresResults";
import { Register } from "../pages/Register";
import { Footer } from "./Footer";
import { AnimatePresence } from "framer-motion";
import { PageNotFound } from "../pages/PageNotFound";

export const RoutesMenu = () => {
  const pageTransition = {
    in: {
      opacity: 1,
      duration: 3,
    },
    out: {
      opacity: 0,
      duration: 3,
    },
  };

  return (
    <AnimatePresence>
      <BrowserRouter>
        {/*!localStorage.getItem("loged") && <Register/>*/}
        <Header />
        <div style={{ backgroundColor: "#222a31" }}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/favmovies" element={<FavMovies />}></Route>
            <Route path="/results" element={<Results />}></Route>
            <Route path="/details/:id" element={<Details />}></Route>
            <Route path="/GenreResults" element={<GenreResults />}></Route>
            <Route path="/Register" element={<Register />}></Route>
            <Route path="/not" element={<PageNotFound />}></Route>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </AnimatePresence>
  );
};
