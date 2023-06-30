import React, { Suspense } from "react";
import { Await, useRouteLoaderData } from "react-router-dom";
import styles from "../../styles/Spine.module.css";

const Sacral = () => {
  const data = useRouteLoaderData("spine-data");
  const content = data.content;

  return (
    <Suspense>
      <Await resolve={content}>
        {(loadedContent) => {
          return (
            <main className={styles["main-container"]}>
              <h1>Sacrum</h1>
              <img
                className={styles.sacral}
                src={loadedContent[0].sacral}
                alt=""
              />
            </main>
          );
        }}
      </Await>
    </Suspense>
  );
};

export default Sacral;
