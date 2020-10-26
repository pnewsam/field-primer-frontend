import React from "react";
import styles from "./styles.module.css";

export const PlantCard = ({ data }) => {
  const {
    count,
    taxon: {
      name,
      preferred_common_name,
      default_photo: { medium_url },
    },
  } = data;

  return (
    <div className={styles.root}>
      {/* <img src={medium_url}></img> */}
      <div
        className={styles.img}
        style={{ backgroundImage: `url(${medium_url})` }}
      ></div>
      <div className={styles.details}>
        <h5 className={styles.commonName}>{preferred_common_name}</h5>
        <h6 className={styles.species}>{name}</h6>
        <h6 className={styles.observationCount}>{count} observations</h6>
      </div>
    </div>
  );
};

export default PlantCard;
