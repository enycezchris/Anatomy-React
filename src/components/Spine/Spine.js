import React, { Suspense } from "react";
import { defer, Await, useRouteLoaderData } from "react-router-dom";
import axios from "axios";
import styles from "../../styles/Spine.module.css";

const loadSpineData = async () => {
  try {
    const response = await axios.get("http://localhost:3001/human/spine");
    const data = response.data;
    return data;
  } catch (error) {
    console.log("Error:", error);
  }
};

export const handleLoadHumanSpineData = async () => {
  return defer({
    content: await loadSpineData(),
  });
};

const Spine = () => {
  const data = useRouteLoaderData("spine-data");
  const content = data.content;
  console.log("Content", content);
  return (
    <Suspense fallback={<p>Loading Data...</p>}>
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

export default Spine;
