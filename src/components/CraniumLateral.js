import React, { Suspense } from "react";
import { Await, useRouteLoaderData } from "react-router-dom";
import styles from "../styles/Cranium.module.css";

const CraniumLateral = () => {
  const data = useRouteLoaderData("cranium-data");
  const content = data.content;
  return (
    <Suspense fallback={<p>Loading Data...</p>}>
      <Await resolve={content}>
        {(loadedContent) => {
          return (
            <main className={styles["main-container"]}>
              <h1>Lateral View of Cranium (Side View)</h1>
              <img
                className={styles.lateral}
                alt=""
                src={loadedContent[0].lateralView}
              />
            </main>
          );
        }}
      </Await>
    </Suspense>
  );
};

export default CraniumLateral;
