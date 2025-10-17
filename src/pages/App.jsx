import "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import CharacterPage from "./CharacterPage";
import NotFoundPage from "./NotFoundPage";
import "../styles/app.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/character/:id" element={<CharacterPage />} />
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
