import React from "react";
import PlantsSection from "../PlantsSection";
import Section from "../Section";
import styles from "./styles.module.css";

const App = () => {
  return (
    <main className={styles.root}>
      <Section>
        <h2 className={styles.subHeading}>Your Field Primer to:</h2>
        <h1 className={styles.mainHeading}>Red Rock Conservation Area</h1>
      </Section>
      <PlantsSection></PlantsSection>
    </main>
  );
};

export default App;
