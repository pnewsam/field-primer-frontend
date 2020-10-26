import React from "react";
import styles from "./styles.module.css";

export const Section = ({ className, children }) => {
  const classes = `${styles.root} ${className}`;

  return (
    <section className={classes}>
      <div className={styles.content}>{children}</div>
    </section>
  );
};

export default Section;
