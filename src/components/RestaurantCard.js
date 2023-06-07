// This is known as the named imports
import { IMG_CDN_URL } from "../constants";

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  deliveryTime,
  avgRating,
  // the above one's are known as the props
}) => {
  return (
    <div className="justify-self-start w-72 min-h-[350px] p-4 mx-8 my-4 bg-white hover:shadow-lg hover:border hover:border-b-gray-200 rounded-md">
      <img
        crossOrigin="anonymous"
        src={`${IMG_CDN_URL}${cloudinaryImageId}`}
      ></img>
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>
        <span className="font-bold">Cuisines: </span>
        {cuisines?.join(", ")}
      </h3>
      <h4>
        <span className="font-bold">Delivery time: </span>
        {deliveryTime} minutes
      </h4>
      <h4>
        <span className="font-bold">Rating: </span>
        {isNaN(+avgRating) ? "NA" : `${avgRating} stars`}
      </h4>
    </div>
  );
};

export default RestaurantCard;
