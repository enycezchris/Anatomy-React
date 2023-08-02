import React, { Suspense } from "react";
import { defer, Await, useRouteLoaderData } from "react-router-dom";
import axios from "axios";
import styles from "../../styles/Pelvis.module.css";

const loadHumanPelvisData = async () => {
  try {
    const response = await axios.get("http://3.142.12.33:3001/human/pelvis");
    const data = response.data;
    return data;
  } catch (error) {
    console.log("Error:", error);
  }
};

export const handleLoadHumanPelvisData = async () => {
  return defer({
    content: await loadHumanPelvisData(),
  });
};

const Pelvis = () => {
  const data = useRouteLoaderData("pelvis-data");
  const content = data.content;
  const fallbackContent = `<p>Loading data ...</p>`;
  return (
    <Suspense fallback={fallbackContent}>
      <Await resolve={content}>
        {(loadedContent) => {
          return (
            <main className={styles["main-container"]}>
              <h1>{loadedContent[0].name}</h1>
              <h3>{loadedContent[0].description.replaceAll(/\./g, ".\n")}</h3>
              <img
                className={styles.default}
                src={loadedContent[0].defaultView}
                alt=""
              />
            </main>
          );
        }}
      </Await>
    </Suspense>
  );
};

export default Pelvis;
