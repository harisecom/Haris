export const initialState = {
  basket: [],
  cartStatus: false,
  user: null
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);


const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

      case "Cart_Status_Change":
          if(state.cartStatus == false){
              return {
                  ...state,
                  cartStatus : true
              }
          }
          else{
              return {
                  ...state,
                  cartStatus : false
              }
          }
    
      case "REMOVE_FROM_BASKET":
         const index = state.basket.findIndex((basktetItem) => basktetItem.id === action.id);
         let newBasket = [...state.basket];


         if ( index >= 0){
           newBasket.splice(index, 1);

         }
         else{
           console.warn(
             `Cant remove product (id: ${action.id}) as its not in basket!`
           )
         }

         return {
           ...state,
           basket : newBasket
         };

         case "SET_USER":
          return {
            ...state,
            user: action.user
          };


    default:
      return state;
  }
};

export default reducer;
