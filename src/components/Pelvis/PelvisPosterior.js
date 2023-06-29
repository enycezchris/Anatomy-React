import React, { Suspense } from "react";
import { Await, useLocation, useRouteLoaderData } from "react-router-dom";
import styles from "../../styles/Pelvis.module.css";

const PelvisPosterior = () => {
  const data = useRouteLoaderData("pelvis-data");
  const content = data.content;
  const location = useLocation();
  const pathIsMale = location.pathname.includes("male");
  const pathIsFemale = location.pathname.includes("female");
  const fallbackContent = `<p>Loading Data...</p>`;

  let contentToRender;

  if (pathIsMale) {
    contentToRender = (
      <Suspense fallback={fallbackContent}>
        <Await resolve={content}>
          {(loadedContent) => {
            return (
              <main className={styles["main-container"]}>
                <h1>Posterior View of Male Pelvic Girdle (Back View)</h1>
                <img
                  className={styles.male}
                  src={loadedContent[0].malePosteriorView}
                  alt=""
                />
              </main>
            );
          }}
        </Await>
      </Suspense>
    );
  }

  if (pathIsFemale) {
    contentToRender = (
      <Suspense fallback={fallbackContent}>
        <Await resolve={content}>
          {(loadedContent) => {
            return (
              <main className={styles["main-container"]}>
                <h1>Posterior View of Female Pelvic Girdle (Back View)</h1>
                <img
                  className={styles.female}
                  src={loadedContent[0].femalePosteriorView}
                  alt=""
                />
              </main>
            );
          }}
        </Await>
      </Suspense>
    );
  }

  return contentToRender;
};

export default PelvisPosterior;
