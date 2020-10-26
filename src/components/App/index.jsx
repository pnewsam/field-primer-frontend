import React from "react";
import INaturalistFetch from "../iNaturalistLambda";
import styles from "./styles.module.css";

const App = () => {
  return (
    <main className={styles.root}>
      <div className={styles.content}>
        <h1>Lambda Sandbox</h1>
        <INaturalistFetch></INaturalistFetch>
      </div>
    </main>
  );
};

export default App;
