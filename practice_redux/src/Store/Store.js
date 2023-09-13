import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "./AllSlices/AuthToken";
import resultReducer from "./AllSlices/ResultSlices";

const store = configureStore({
  reducer: { token: tokenReducer, result: resultReducer },
});

export default store;
