import React, { Suspense } from "react";
import { Await, useRouteLoaderData } from "react-router-dom";
import styles from "../../styles/Cranium.module.css";

const CraniumSuperior = () => {
  const fallbackContent = `<p>Loading Data...</p>`;
  const routerDataId = "cranium-data";
  const data = useRouteLoaderData(routerDataId);
  const content = data.content;
  return (
    <Suspense fallback={fallbackContent}>
      <Await resolve={content}>
        {(loadedContent) => {
          return (
            <main className={styles["main-container"]}>
              <h1>Superior View of Cranium (Top View)</h1>
              <img
                className={styles.superior}
                src={loadedContent[0].superiorView}
                alt=""
              />
            </main>
          );
        }}
      </Await>
    </Suspense>
  );
};

export default CraniumSuperior;
