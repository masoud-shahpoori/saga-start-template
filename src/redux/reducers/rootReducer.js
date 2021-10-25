import { combineReducers } from "redux";
import productReducer from "./product/productreducer";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  //   whitelist: ["productReducer"],
};

const rootReducer = combineReducers({
  productReducer: productReducer,
});

export default persistReducer(persistConfig, rootReducer);
