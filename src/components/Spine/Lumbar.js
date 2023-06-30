import React, { Suspense } from "react";
import { Await, useRouteLoaderData } from "react-router-dom";
import styles from "../../styles/Spine.module.css";

const Lumbar = () => {
  const data = useRouteLoaderData("spine-data");
  const content = data.content;
  return (
    <Suspense fallback={<p>Loading Data...</p>}>
      <Await resolve={content}>
        {(loadedContent) => {
          return (
            <main className={styles["main-container"]}>
              <h1>Lumbar Spine ( L1 - L5 )</h1>
              <img
                className={styles.lumbar}
                src={loadedContent[0].lumbar}
                alt=""
              />
            </main>
          );
        }}
      </Await>
    </Suspense>
  );
};

export default Lumbar;
