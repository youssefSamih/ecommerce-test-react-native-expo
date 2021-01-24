import { all } from "redux-saga/effects";

import cart from "./cart/saga";
import rtl from "./rtl/saga";

export default function* rootSaga() {
  return yield all([cart, rtl]);
}
