export const initialState = {
  basket: [
    {
      id: "3535554849",
      title: "DualShock 4 Wireless Controller for PlayStation 4",
      price: 65,
      rating: 4,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/81L9%2B4dTIgL._SX522_.jpg",
      Quantity: 2,
    },
  ],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "ADD_TO_BASKET":
      // logic for adding to basket

      console.log(action);

      return { ...state, basket: [...state.basket, action.item] };

    case "REMOVE_FROM_BASKET":
      // logic to remove

      let newBasket = [...state.basket];

      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `can't remove product (id: ${action.id}) as its not at basket`
        );
      }

      return { ...state, basket: newBasket };

    default:
      return state;
  }
};

export default reducer;
