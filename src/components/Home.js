import React, { Suspense } from "react";
import styles from "../styles/Home.module.css";
import axios from "axios";
import { defer, useLoaderData, Await } from "react-router-dom";

const loadHomeContent = async () => {
  try {
    const response = await axios.get("http://localhost:3001/home");
    const data = response.data;
    return data;
  } catch (error) {
    console.log("Error:", error);
  }
};

export const handleLoadHomeContent = async () => {
  // defer takes an object of all the http events that is being executed in the component. In this component is only the get request. (fetch home data). Loads a component/render component even though the data isn't loaded yet.
  return defer({
    // key: value must be a promise object
    content: await loadHomeContent(),
  });
};

const Home = () => {
  const data = useLoaderData();
  const content = data.content;
  console.log("data", data);
  return (
    // Suspense imported from React, is a component that can be used to render a "fall-back" component while the data is loading. (Will show a p tag with "Loading Events" while the data loads.s)
    <Suspense
      fallback={<p style={{ textAlign: "center" }}>Loading Events ...</p>}
    >
      <Await resolve={content}>
        {/* Only renders the EventsList component once the data has been resolved/loaded. It takes an anonymous function. */}
        {(loadedContent) => {
          return (
            <main className={styles["main-container"]}>
              <h1>{loadedContent.title}</h1>
              <h3>{loadedContent.description.replaceAll(/\./g, ".\n")}</h3>
              <h4>{loadedContent.anatomy.replaceAll(/\./g, ".\n")}</h4>
              <h4>{loadedContent.physiology.replaceAll(/\./g, ".\n")}</h4>
              <img src={loadedContent.image} alt="" />
            </main>
          );
        }}
      </Await>
    </Suspense>
  );
};

export default Home;
