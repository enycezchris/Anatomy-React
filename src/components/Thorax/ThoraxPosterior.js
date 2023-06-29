import React, { Suspense } from "react";
import { Await, useRouteLoaderData } from "react-router-dom";
import styles from "../../styles/Thorax.module.css";

const ThoraxPosterior = () => {
  const data = useRouteLoaderData("thorax-data");
  const content = data.content;
  const fallbackContent = `<p>Loading Data...</p>`;
  return (
    <Suspense fallback={fallbackContent}>
      <Await resolve={content}>
        {(loadedContent) => {
          return (
            <main className={styles["main-container"]}>
              <h1>Posterior View of Thorax (Back View)</h1>
              <img
                src={loadedContent[0].posteriorView}
                alt=""
                className={styles.posterior}
              />
            </main>
          );
        }}
      </Await>
    </Suspense>
  );
};

export default ThoraxPosterior;
