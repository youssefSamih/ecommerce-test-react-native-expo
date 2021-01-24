import { all, takeLatest } from "redux-saga/effects";
import { setPlaces } from "./actions";

function* switchRtl({ place }: any) {
  yield setPlaces(place);
}

export default all([
  takeLatest<string, (...args: any[]) => any>("@places/SET_PLACE", switchRtl),
]);
