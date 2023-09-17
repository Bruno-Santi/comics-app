import { Routes, Route } from "react-router-dom";
import { Home, Favorites, ComicDetail } from "../pages";
import { NavigateBack } from "../components";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/comics/:id' element={<ComicDetail />} />
      <Route path='/favorites' element={<Favorites />} />
      <Route path='/*' element={<NavigateBack />} />
    </Routes>
  );
};
