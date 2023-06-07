// By making these kind of functions makes my code more readable and testable
export function filterData(searchText, restaurants) {
  const filteredData = restaurants.filter((restaurant) =>
    restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filteredData;
}

export function getTopRatedRestaurants(restaurants) {
  return restaurants.filter((restaurant) => {
    let number = Number(restaurant.data.avgRating);
    return !isNaN(number) && number > 4;
  });
}
