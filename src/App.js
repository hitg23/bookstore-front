import { Routes, Route, BrowserRouter } from "react-router-dom";
import ListPage from "./Components/ListPage/ListPage";
import DetailEditPage from "./Components/DetailEditPage/DetailEditPAge";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";

// https://secret-reaches-29153-d015566fd3ab.herokuapp.com/
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/list-page" element={<ListPage />} />
        <Route path="/detail-edit" element={<DetailEditPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
