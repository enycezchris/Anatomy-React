import React, { Suspense } from "react";
import { defer, Await, useRouteLoaderData } from "react-router-dom";
import axios from "axios";
import styles from "../../styles/Thorax.module.css";

const loadThoraxHomePageData = async () => {
  try {
    const response = await axios.get("http://localhost:3001/human/thorax");
    const data = response.data;
    return data;
  } catch (error) {
    console.log("Error:", error);
  }
};

export const handleLoadHumanThoraxData = async () => {
  return defer({
    content: await loadThoraxHomePageData(),
  });
};

const ThoraxHomePage = () => {
  const data = useRouteLoaderData("thorax-data");
  const content = data.content;
  const fallbackContent = `<p>Loading Data...</p>`;
  return (
    <Suspense fallback={fallbackContent}>
      <Await resolve={content}>
        {(loadedContent) => {
          return (
            <main className={styles["main-container"]}>
              <h1>{loadedContent[0].name}</h1>
              <h3>{loadedContent[0].description.replaceAll(/\./g, ".\n")}</h3>
              <img
                src={loadedContent[0].defaultView}
                alt=""
                className={styles.default}
              />
            </main>
          );
        }}
      </Await>
    </Suspense>
  );
};

export default ThoraxHomePage;
