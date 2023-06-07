import "@testing-library/jest-dom";
import Header from "../Header";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import store from "../../utils/Store";
import { render, waitFor, fireEvent } from "@testing-library/react";
import { MENU_DATA } from "../../mocks/data";
import RestaurantMenu from "../RestaurantMenu";

// Creating a dummy function to replicate our fetch method

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MENU_DATA),
  });
});

test("Add items to cart", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
        <RestaurantMenu />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("menu")));

  const addBtn = body.getAllByTestId("addBtn");

  fireEvent.click(addBtn[0]);

  const cart = body.getByTestId("cart");
  expect(cart.innerHTML).toBe("Cart - 1 items");
});
