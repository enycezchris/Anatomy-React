import React, { Suspense } from "react";
import { Await, useRouteLoaderData } from "react-router-dom";
import styles from "../../styles/Thorax.module.css";

const ThoraxAnterior = () => {
  const data = useRouteLoaderData("thorax-data");
  const content = data.content;
  const fallbackContent = `<p>Loading Data...</p>`;
  return (
    <Suspense fallback={fallbackContent}>
      <Await resolve={content}>
        {(loadedContent) => {
          return (
            <main className={styles["main-container"]}>
              <h1>Anterior View of Thorax (Front View)</h1>
              <img
                src={loadedContent[0].anteriorView}
                alt=""
                className={styles.anterior}
              />
            </main>
          );
        }}
      </Await>
    </Suspense>
  );
};

export default ThoraxAnterior;
