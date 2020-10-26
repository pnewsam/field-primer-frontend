import React from "react";
import styles from "./styles.module.css";

const sampleDatum = {
  count: 1063,
  taxon: {
    observations_count: 33161,
    taxon_schemes_count: 4,
    ancestry: "48460/47126/211194/47125/47124/68220/68207/783666/68199",
    is_active: true,
    flag_counts: { unresolved: 0, resolved: 0 },
    wikipedia_url: "http://en.wikipedia.org/wiki/Larrea_tridentata",
    current_synonymous_taxon_ids: null,
    iconic_taxon_id: 47126,
    rank_level: 10,
    taxon_changes_count: 1,
    atlas_id: 2147,
    complete_species_count: null,
    parent_id: 68199,
    name: "Larrea tridentata",
    rank: "species",
    extinct: false,
    id: 68205,
    default_photo: {
      square_url:
        "https://static.inaturalist.org/photos/6962902/square.jpg?1491779335",
      attribution: "(c) David Kaposi, some rights reserved (CC BY-NC)",
      flags: [],
      medium_url:
        "https://static.inaturalist.org/photos/6962902/medium.jpg?1491779335",
      id: 6962902,
      license_code: "cc-by-nc",
      original_dimensions: { width: 2048, height: 1367 },
      url:
        "https://static.inaturalist.org/photos/6962902/square.jpg?1491779335",
    },
    ancestor_ids: [
      48460,
      47126,
      211194,
      47125,
      47124,
      68220,
      68207,
      783666,
      68199,
      68205,
    ],
    iconic_taxon_name: "Plantae",
    preferred_common_name: "creosote bush",
    english_common_name: "creosote bush",
  },
};

export const SpeciesCountResult = ({ data }) => {
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
        <h4 className={styles.commonName}>{preferred_common_name}</h4>
        <h5 className={styles.species}>{name}</h5>
        <h5 className={styles.observationCount}>{count} observations</h5>
      </div>
    </div>
  );
};

export default SpeciesCountResult;
