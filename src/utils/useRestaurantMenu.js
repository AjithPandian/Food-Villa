// This is our custom hook which is design specifically for our restaurant menu api call
import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../constants";

const useRestaurantMenu = (id) => {
  const [restaurantMenu, setRestaurantMenu] = useState([]);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(`${FETCH_MENU_URL}${id}&submitAction=ENTER`);
    const json = await data.json();
    setRestaurantMenu(json.data.cards);
  }

  return restaurantMenu;
};

export default useRestaurantMenu;
