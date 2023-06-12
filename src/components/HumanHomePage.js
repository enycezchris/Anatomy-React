import React, { Suspense } from "react";
import { defer, Await, useRouteLoaderData } from "react-router-dom";
import axios from "axios";
import styles from "../styles/HumanHomePage.module.css";

const loadHumanHomeContent = async () => {
  try {
    const response = await axios.get("http://localhost:3001/home/human");
    const data = response.data;
    return data;
  } catch (error) {
    console.log("Error:", error);
  }
};

export const handleLoadHumanHomeContent = async () => {
  // defer takes an object of all the http events that is being executed in the component. In this component is only the get request. (fetch home data). Loads a component/render component even though the data isn't loaded yet.
  return defer({
    // key: value must be a promise object
    content: await loadHumanHomeContent(), // get the data back from executing the loadHumanHomeContent function.
  });
};

const HumanHomePage = () => {
  const data = useRouteLoaderData("human-home-page"); // using the id defined in the routes in App.js to load data.
  const content = data.content;
  console.log("content", content);
  return (
    // Suspense imported from React, is a component that can be used to render a "fall-back" component while the data is loading. (Will show a p tag with "Loading Events" while the data loads.s)
    <Suspense fallback={<p>Loading data...</p>}>
      <Await resolve={content}>
        {(loadedContent) => {
          {
            /* Only renders the HumanHomePage component once the data has been resolved/loaded. Otherwise, it will load the fallback <p>Loading data...</p>. It takes an anonymous function. */
          }
          return (
            <main className={styles["main-container"]}>
              <h1>{loadedContent.title}</h1>
              <h3>{loadedContent.description.replaceAll(/\./g, ".\n")}</h3>
              <img className={styles.human} src={loadedContent.image} alt="" />
            </main>
          );
        }}
      </Await>
    </Suspense>
  );
};

export default HumanHomePage;
