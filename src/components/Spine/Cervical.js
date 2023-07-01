import React, { Suspense } from "react";
import { Await, useRouteLoaderData } from "react-router-dom";
import styles from "../../styles/Spine.module.css";

const Cervical = () => {
  const data = useRouteLoaderData("spine-data");
  const content = data.content;
  return (
    <Suspense fallback={<p>Loading Data...</p>}>
      <Await resolve={content}>
        {(loadedContent) => {
          return (
            <main className={styles["main-container"]}>
              <h1>Cervical Spine ( C1 - C7 )</h1>
              <img
                className={styles.cervical}
                src={loadedContent[0].cervical}
                alt=""
              />
            </main>
          );
        }}
      </Await>
    </Suspense>
  );
};

export default Cervical;
