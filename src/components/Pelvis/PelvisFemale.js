import React, { Suspense } from "react";
import { Await, useRouteLoaderData } from "react-router-dom";
import styles from "../../styles/Pelvis.module.css";

const PelvisFemale = () => {
  const data = useRouteLoaderData("pelvis-data");
  const content = data.content;
  const fallbackContent = `<p>Loading Data...</p>`;
  return (
    <Suspense fallback={fallbackContent}>
      <Await resolve={content}>
        {(loadedContent) => {
          return (
            <main className={styles["main-container"]}>
              <h1>Female Pelvic Girdle</h1>
              <h3>
                {loadedContent[0].femaleDescription.replaceAll(/\./g, ".\n")}
              </h3>
              <img
                className={styles.female}
                src={loadedContent[0].femalePelvis}
                alt=""
              />
            </main>
          );
        }}
      </Await>
    </Suspense>
  );
};

export default PelvisFemale;
