import { IMG_CDN_URL } from "../constants";

import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantMenuDetail = (props) => {
  // dispatching the addItem event to add the items to the cart
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="border w-96 border-black p-2 m-2">
      <div className="flex m-2">
        <h3>{props?.name}</h3>
        {props?.showImage && (
          <img
            className="w-16 ml-auto"
            src={`${IMG_CDN_URL}${props?.imageId}`}
          />
        )}
      </div>
      <div className="flex flex-wrap">
        <h3 className="m-2">Rupees: {Math.floor(props?.price / 100)}.00</h3>
        <h3 className="m-2">InStock: {props?.inStock}</h3>
        <h3 className="m-2">
          Rating:{" "}
          {props?.ratings?.aggregatedRating?.rating
            ? `${props.ratings.aggregatedRating.rating} stars`
            : "NA"}
        </h3>
      </div>
      <button
        data-testid="addBtn"
        className="p-2 m-2 text-xs font-semibold text-white bg-black rounded-md"
        onClick={() => handleAddItem(props)}
      >
        Add to cart
      </button>
    </div>
  );
};

export default RestaurantMenuDetail;
