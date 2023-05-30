import { IMG_CDN_URL } from "../constants";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

import RestaurantMenuDetail from "./RestaurantMenuDetail";

const RestaurantMenu = () => {
  const { id } = useParams();
  const restaurantMenu = useRestaurantMenu(id);

  const restaurantInfo = restaurantMenu[0]?.card?.card?.info;
  const menu =
    restaurantMenu[restaurantMenu.length - 1]?.groupedCard?.cardGroupMap
      ?.REGULAR?.cards;

  if (restaurantMenu.length === 0) return <Shimmer />;

  return (
    <div className="flex p-4 m-4">
      <div className="flex-1">
        <h1 className="font-bold text-2xl mb-4">Restaurant id: {id}</h1>
        <h2 className="font-bold text-xl mb-3">{restaurantInfo?.name}</h2>
        <img
          className="border border-black mt-4 mb-4 border-x-4 border-y-4"
          crossOrigin="anonymous"
          src={`${IMG_CDN_URL}${restaurantInfo?.cloudinaryImageId}`}
        />
        <h3>
          <span className="font-bold text-xl">Place: </span>
          {restaurantInfo?.areaName}
        </h3>
        <h3>
          <span className="font-bold text-xl">City: </span>
          {restaurantInfo?.city}
        </h3>
        <h3>
          <span className="font-bold text-xl">Rating: </span>
          {restaurantInfo?.avgRating} stars
        </h3>
        <h3>
          <span className="font-bold text-xl">Cost For Two: </span>
          {restaurantInfo?.costForTwoMessage}
        </h3>
      </div>

      <div className="p-4 m-4 flex-1">
        {menu.map((card, index) => {
          if (card?.card?.card?.title) {
            return (
              <div>
                <h1 className="font-bold text-xl " key={index}>
                  {card.card.card.title}
                </h1>
                {card?.card?.card?.itemCards?.length > 0
                  ? card.card.card.itemCards.map((restMenu, index) => {
                      return (
                        <RestaurantMenuDetail
                          key={
                            restMenu?.card?.info?.id
                              ? restMenu.card.info.id
                              : index
                          }
                          {...restMenu?.card?.info}
                        />
                      );
                    })
                  : null}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
