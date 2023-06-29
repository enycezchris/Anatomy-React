import React, { Suspense } from "react";
import { Await, useRouteLoaderData } from "react-router-dom";
import styles from "../../styles/Cranium.module.css";

const CraniumPosterior = () => {
  const data = useRouteLoaderData("cranium-data");
  const content = data.content;
  console.log("content", content);
  return (
    <Suspense fallback={<p>Loading data...</p>}>
      <Await resolve={content}>
        {(loadedContent) => {
          return (
            <main className={styles["main-container"]}>
              <h1>Posterior View of Cranium (Back View)</h1>
              <img
                className={styles.posterior}
                src={loadedContent[0].posteriorView}
                alt=""
              />
            </main>
          );
        }}
      </Await>
    </Suspense>
  );
};

export default CraniumPosterior;
