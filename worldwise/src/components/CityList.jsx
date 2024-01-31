import CityItem from "./CityItem";
import Spinner from "./Spinner";
import Message from "./Message";

import styles from "./City.module.css";

export default function City({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return <Message message="Add your firsts city by clicking on the map" />;

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}
