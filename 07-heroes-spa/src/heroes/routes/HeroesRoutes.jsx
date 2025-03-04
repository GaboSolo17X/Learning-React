import { Route,Routes,Navigate } from "react-router";
import { Navbar } from "../../UI";
import { MarvelPage,DCPage, SearchPage,HeroPage} from "../pages";

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container">
      <Routes>
        <Route path="Marvel" element={<MarvelPage />} />
        <Route path="DC" element={<DCPage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="hero/:id" element={<HeroPage />} />

        <Route path="/" element={<Navigate to="/Marvel" />} />
      </Routes>
      </div>
   
    </>
  );
};
