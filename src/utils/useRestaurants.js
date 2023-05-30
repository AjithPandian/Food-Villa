import { useEffect, useState } from "react";
import { FETCH_RESTAURANTS_URL } from "../constants";

const useRestaurants = () => {
  // Using these two states, one to maintain when all the
  // data is present and one to used when filtering data
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(`${FETCH_RESTAURANTS_URL}`);
    const json = await data.json();
    // All ways use optional chaining
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  return [allRestaurants, filteredRestaurants, setFilteredRestaurants];
};

export default useRestaurants;
