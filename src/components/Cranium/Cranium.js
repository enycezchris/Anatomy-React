import React, { Suspense } from "react";
import axios from "axios";
import { defer, Await, useRouteLoaderData } from "react-router-dom";
import styles from "../../styles/Cranium.module.css";

const loadHumanCraniumData = async () => {
  try {
    const response = await axios.get("http://localhost:3001/human/cranium");
    const data = response.data;
    return data;
  } catch (error) {
    console.log("Error:", error);
  }
};

export const handleLoadHumanCraniumData = async () => {
  return defer({
    content: await loadHumanCraniumData(),
  });
};

const Cranium = () => {
  const data = useRouteLoaderData("cranium-data");
  const content = data.content;
  return (
    <Suspense fallback={<p>Loading Data...</p>}>
      <Await resolve={content}>
        {(loadedContent) => {
          console.log("loaded content", loadedContent);
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
export default Cranium;
