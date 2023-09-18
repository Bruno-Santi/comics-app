import { Routes, Route } from "react-router-dom";
import { Home, Favorites, ComicDetail } from "../pages";
import { NavigateBack } from "../components";
// eslint-disable-next-line no-unused-vars
import index from "../styles/index.css";
export const AppRoutes = () => {
  return (
    <div
      className='justify-content-center align-middle mx-auto'
      style={{
        background:
          "linear-gradient(to top, #c4c5c7 0%, #dcdddf 52%, #ebebeb 100%)",
      }}
    >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/comics/:id' element={<ComicDetail />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/*' element={<NavigateBack />} />
      </Routes>
    </div>
  );
};
