import { useState } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { filterData } from "../utils/helper";
// Custom Hooks
import useOnline from "../utils/useOnline";
import useRestaurants from "../utils/useRestaurants";

const Body = () => {
  const [allRestaurants, filteredRestaurants, setFilteredRestaurants] =
    useRestaurants();
  const [searchText, setSearchText] = useState("");

  if (!useOnline()) {
    return <h1>Offline!!! Please connect to a stable network</h1>;
  }

  // Not rendercomponent if this is undefined
  if (!allRestaurants) return null;

  // Conditional Rendering
  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex justify-center p-5 bg-pink-50 my-5">
        <input
          data-testid="search-input"
          type="text"
          className="w-96 focus:border-purple-900 p-2 m-2 rounded-md"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          data-testid="search-btn"
          className="p-2 m-2 bg-purple-900 text-white rounded-md hover:bg-black"
          onClick={() => {
            if (searchText != "") {
              //filter the data
              const data = filterData(searchText, allRestaurants);
              // update the  state -> restaurants
              setFilteredRestaurants(data);
            } else setFilteredRestaurants(allRestaurants);
          }}
        >
          Search
        </button>
      </div>

      <div
        className="flex flex-wrap justify-center"
        data-testid="restaurant-list"
      >
        {filteredRestaurants.length === 0 ? (
          <h1>No restaurants matched you filter!!!</h1>
        ) : (
          filteredRestaurants.map((restaurant) => {
            return (
              <Link
                to={`/restaurant/${restaurant.data.id}`}
                key={restaurant.data.id}
              >
                <RestaurantCard {...restaurant.data} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
