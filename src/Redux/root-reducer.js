import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user-reducer';
import cartReducer from './cart/cart-reducer';
import productReducer from './products/product-reducer';
import categoryReducer from './category/category-reducer';
import searchbarReducer from './searchbar/searchbar-reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  products: productReducer,
  searchbar: searchbarReducer,
  category: categoryReducer
});

export default persistReducer(persistConfig, rootReducer);