import { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../constants";
import { useSelector } from "react-redux";

const Title = () => (
  <a href="/">
    <img
      data-testid="logo"
      className="h-28 p-2"
      alt="logo"
      src={LOGO_URL}
    ></img>
  </a>
);

const Header = () => {
  const [isLoggedIn, setLoggedData] = useState(false);

  // used to fetch the value from our store
  const cartItem = useSelector((store) => store.cart.items);
  // console.log(cartItem);
  return (
    <div className="flex justify-between bg-pink-50 shadow-lg">
      <Title />
      <div className="">
        <ul className="flex py-10 text-purple-800 font-bold ">
          <Link className="px-2" to="/">
            <li>Home</li>
          </Link>
          <Link className="px-2" to="/about">
            <li>About</li>
          </Link>
          <Link className="px-2" to="/contact">
            <li>Contact</li>
          </Link>
          <Link className="px-2" to="/instamart">
            <li>Instamart</li>
          </Link>
          <li className="px-2" data-testid="cart">
            Cart - {cartItem.length} items
          </li>

          {isLoggedIn ? (
            <button className="px-4 ml-10" onClick={() => setLoggedData(false)}>
              LogOut
            </button>
          ) : (
            <button className="px-4 ml-10" onClick={() => setLoggedData(true)}>
              LogIn
            </button>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
