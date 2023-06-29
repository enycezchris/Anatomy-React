import React, { Suspense } from "react";
import { Await, useRouteLoaderData } from "react-router-dom";
import styles from "../../styles/Pelvis.module.css";

const PelvisComparison = () => {
  const data = useRouteLoaderData("pelvis-data");
  const content = data.content;
  const fallbackContent = `<p>Loading Data...</p>`;
  console.log("content", content);
  return (
    <Suspense fallback={fallbackContent}>
      <Await resolve={content}>
        {(loadedContent) => {
          return (
            <main className={styles["main-container"]}>
              <div className={styles["comparison-container"]}>
                <div className={styles["male-container"]}>
                  <h1>Male Pelvic</h1>
                  <img
                    className={styles["comparison-img"]}
                    src={loadedContent[0].comparison.male}
                    alt=""
                  />
                </div>
                <div className={styles["female-container"]}>
                  <h1>Female Pelvic</h1>
                  <img
                    className={styles["comparison-img"]}
                    src={loadedContent[0].comparison.female}
                    alt=""
                  />
                </div>
              </div>
            </main>
          );
        }}
      </Await>
    </Suspense>
  );
};

export default PelvisComparison;
