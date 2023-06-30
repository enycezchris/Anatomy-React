import React, { Suspense } from "react";
import { Await, useRouteLoaderData } from "react-router-dom";
import styles from "../../styles/Spine.module.css";

const Thoracic = () => {
  const data = useRouteLoaderData("spine-data");
  const content = data.content;

  return (
    <Suspense fallback={<p>Loading Data...</p>}>
      <Await resolve={content}>
        {(loadedContent) => {
          return (
            <main className={styles["main-container"]}>
              <h1>Thoracic Spine ( T1 - T12 )</h1>
              <img
                className={styles.thoracic}
                src={loadedContent[0].thoracic}
                alt=""
              />
            </main>
          );
        }}
      </Await>
    </Suspense>
  );
};

export default Thoracic;
