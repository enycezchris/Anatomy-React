import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home, { handleLoadHomeContent } from "./components/Home";
import HumanLayout from "./components/HumanLayout";
import HumanHomePage, {
  handleLoadHumanHomeContent,
} from "./components/HumanHomePage";
import Cranium, { handleLoadHumanCraniumData } from "./components/Cranium";
import CraniumLayout from "./components/CraniumLayout";
import CraniumAnterior from "./components/CraniumAnterior";
import CraniumPosterior from "./components/CraniumPosterior";
import CraniumLateral from "./components/CraniumLateral";
import CraniumInferior from "./components/CraniumInferior";
import CraniumSuperior from "./components/CraniumSuperior";
import ThoraxLayout from "./components/ThoraxLayout";
import Thorax, { handleLoadHumanThoraxData } from "./components/Thorax";
import ThoraxAnterior from "./components/ThoraxAnterior";
import ThoraxPosterior from "./components/ThoraxPosterior";
import ThoraxLateral from "./components/ThoraxLateral";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: handleLoadHomeContent,
      },
      {
        path: "human",
        element: <HumanLayout />,
        children: [
          {
            index: true,
            element: <HumanHomePage />,
            loader: handleLoadHumanHomeContent,
            id: "human-home-page",
          },
          {
            path: "cranium",
            element: <CraniumLayout />,
            loader: handleLoadHumanCraniumData,
            id: "cranium-data",
            children: [
              {
                index: true,
                element: <Cranium />,
              },
              {
                path: "anterior",
                element: <CraniumAnterior />,
              },
              {
                path: "posterior",
                element: <CraniumPosterior />,
              },
              {
                path: "lateral",
                element: <CraniumLateral />,
              },
              {
                path: "inferior",
                element: <CraniumInferior />,
              },
              {
                path: "superior",
                element: <CraniumSuperior />,
              },
            ],
          },
          {
            path: "thorax",
            element: <ThoraxLayout />,
            id: "thorax-data",
            loader: handleLoadHumanThoraxData,
            children: [
              {
                index: true,
                element: <Thorax />,
              },
              { path: "anterior", element: <ThoraxAnterior /> },
              { path: "posterior", element: <ThoraxPosterior /> },
              { path: "lateral", element: <ThoraxLateral /> },
            ],
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
