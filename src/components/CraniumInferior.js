import React, { Suspense } from "react";
import { Await, useRouteLoaderData } from "react-router-dom";
import styles from "../styles/Cranium.module.css";

const CraniumInferior = () => {
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
              <h1>Inferior View of Cranium (Base View)</h1>
              <img
                className={styles.inferior}
                src={loadedContent[0].inferiorView}
                alt=""
              />
            </main>
          );
        }}
      </Await>
    </Suspense>
  );
};

export default CraniumInferior;
