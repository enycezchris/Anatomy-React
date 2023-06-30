import React, { Suspense } from "react";
import { Await, useRouteLoaderData } from "react-router-dom";
import styles from "../../styles/Spine.module.css";

const Coccyx = () => {
  const data = useRouteLoaderData("spine-data");
  const content = data.content;
  return (
    <Suspense fallback={<p>Loading Data...</p>}>
      <Await resolve={content}>
        {(loadedContent) => {
          return (
            <main className={styles["main-container"]}>
              <h1>Coccyx (TailBone)</h1>
              <img
                className={styles.coccyx}
                src={loadedContent[0].coccyx}
                alt=""
              />
            </main>
          );
        }}
      </Await>
    </Suspense>
  );
};

export default Coccyx;
