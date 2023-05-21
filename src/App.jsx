import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Details from "./Details";
import "./App.css";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />}
          />
          <Route
            path="/:country"
            element={<Details darkMode={darkMode} setDarkMode={setDarkMode} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
