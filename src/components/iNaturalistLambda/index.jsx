import React, { useEffect, useState } from "react";
import mockData from "./mockData.json";
import { SpeciesCountResult } from "../SpeciesCountResult";
import styles from "./styles.module.css";

// const url =
//   "https://api.inaturalist.org/v1/observations/species_counts?verifiable=true&spam=false&nelat=36.7082166&nelng=-115.2985785&swlat=35.7771922&swlng=-115.5557585&iconic_taxa[]=Plantae&locale=en-US&page=1&per_page=20";

// const fetchObservations = async () => {
//   const response = await fetch(url);
//   if (response.ok) {
//     return response.json();
//   }
// };

export const INaturalistFetch = () => {
  const [data, setData] = useState(null);

  //   useEffect(() => {
  //     (async () => {
  //       const observations = await fetchObservations();
  //       console.log(observations);
  //       setData(observations);
  //     })();
  //   }, []);

  console.log(mockData);

  const { results } = mockData;

  return (
    <section className={styles.root}>
      {results.map((result) => (
        <SpeciesCountResult key={result.taxon.id} data={result} />
      ))}
    </section>
  );
};

export default INaturalistFetch;
