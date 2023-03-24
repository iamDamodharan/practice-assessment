import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Container/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;