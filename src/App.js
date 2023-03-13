// @ts-nocheck
import React from "react";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import routes from "./router/Router";

const App = () => {
  return (
    <div>
      {/*===== provide Header context === */}

      <RouterProvider router={routes}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
};

export default App;
