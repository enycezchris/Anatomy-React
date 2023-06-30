import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home, { handleLoadHomeContent } from "./components/Home";
import HumanLayout from "./components/HumanLayout";
import HumanHomePage, {
  handleLoadHumanHomeContent,
} from "./components/HumanHomePage";
import Cranium, {
  handleLoadHumanCraniumData,
} from "./components/Cranium/Cranium";
import CraniumLayout from "./components/Cranium/CraniumLayout";
import CraniumAnterior from "./components/Cranium/CraniumAnterior";
import CraniumPosterior from "./components/Cranium/CraniumPosterior";
import CraniumLateral from "./components/Cranium/CraniumLateral";
import CraniumInferior from "./components/Cranium/CraniumInferior";
import CraniumSuperior from "./components/Cranium/CraniumSuperior";
import ThoraxLayout from "./components/Thorax/ThoraxLayout";
import Thorax, { handleLoadHumanThoraxData } from "./components/Thorax/Thorax";
import ThoraxAnterior from "./components/Thorax/ThoraxAnterior";
import ThoraxPosterior from "./components/Thorax/ThoraxPosterior";
import ThoraxLateral from "./components/Thorax/ThoraxLateral";
import PelvisLayout from "./components/Pelvis/PelvisLayout";
import Pelvis, { handleLoadHumanPelvisData } from "./components/Pelvis/Pelvis";
import PelvisAnterior from "./components/Pelvis/PelvisAnterior";
import PelvisPosterior from "./components/Pelvis/PelvisPosterior";
import PelvisMale from "./components/Pelvis/PelvisMale";
import PelvisFemale from "./components/Pelvis/PelvisFemale";
import PelvisMaleLayout from "./components/Pelvis/PelvisMaleLayout";
import PelvisFemaleLayout from "./components/Pelvis/PelvisFemaleLayout";
import PelvisComparison from "./components/Pelvis/PelvisComparison";
import Spine, { handleLoadHumanSpineData } from "./components/Spine/Spine";
import SpineLayout from "./components/Spine/SpineLayout";
import Cervical from "./components/Spine/Cervical";
import Thoracic from "./components/Spine/Thoracic";
import Lumbar from "./components/Spine/Lumbar";
import Sacral from "./components/Spine/Sacral";
import Coccyx from "./components/Spine/Coccyx";

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
          {
            path: "pelvis",
            element: <PelvisLayout />,
            id: "pelvis-data",
            loader: handleLoadHumanPelvisData,
            children: [
              {
                index: true,
                element: <Pelvis />,
              },
              {
                path: "comparison",
                element: <PelvisComparison />,
              },
              {
                path: "male",
                element: <PelvisMaleLayout />,
                children: [
                  {
                    index: true,
                    element: <PelvisMale />,
                  },
                  {
                    path: "anterior",
                    element: <PelvisAnterior />,
                  },
                  {
                    path: "posterior",
                    element: <PelvisPosterior />,
                  },
                ],
              },
              {
                path: "female",
                element: <PelvisFemaleLayout />,
                children: [
                  { index: true, element: <PelvisFemale /> },
                  {
                    path: "anterior",
                    element: <PelvisAnterior />,
                  },
                  {
                    path: "posterior",
                    element: <PelvisPosterior />,
                  },
                ],
              },
            ],
          },
          {
            path: "spine",
            element: <SpineLayout />,
            id: "spine-data",
            loader: handleLoadHumanSpineData,
            children: [
              { index: true, element: <Spine /> },
              {
                path: "cervical",
                element: <Cervical />,
              },
              {
                path: "thoracic",
                element: <Thoracic />,
              },
              {
                path: "Lumbar",
                element: <Lumbar />,
              },
              {
                path: "Sacral",
                element: <Sacral />,
              },
              {
                path: "Coccyx",
                element: <Coccyx />,
              },
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
