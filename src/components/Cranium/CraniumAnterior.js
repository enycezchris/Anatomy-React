import React, { Suspense } from "react";
import { Await, useRouteLoaderData } from "react-router-dom";
import styles from "../../styles/Cranium.module.css";

const CraniumAnterior = () => {
  const data = useRouteLoaderData("cranium-data");
  const content = data.content;
  console.log("content", content);
  return (
    <Suspense fallback={<p>Loading data...</p>}>
      <Await resolve={content}>
        {(loadedContent) => {
          return (
            <main className={styles["main-container"]}>
              <h1>Anterior View of Cranium (Front View)</h1>
              <img
                className={styles.anterior}
                src={loadedContent[0].anteriorView}
                alt=""
              />
            </main>
          );
        }}
      </Await>
    </Suspense>
  );
};

export default CraniumAnterior;
