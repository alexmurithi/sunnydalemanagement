import React, { Suspense } from "react";
import Loader from "./Components/Loader/";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes";

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
