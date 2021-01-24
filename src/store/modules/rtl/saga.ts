import { all, select, takeLatest } from "redux-saga/effects";
import { toggleRtl } from "./actions";

function* switchRtl({ toggle }: any) {
  const previousState = yield select((state) => state.rtl);
  if (previousState !== toggle) {
    yield toggleRtl(toggle);
  }
}

export default all([
  takeLatest<string, (...args: any[]) => any>("@rtl/TOGGLE_RTL", switchRtl),
]);
