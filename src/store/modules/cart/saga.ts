import { call, select, put, all, takeLatest } from "redux-saga/effects";
import api from "../../../services/api";
import { addToCartSuccess, updateAmountSuccess } from "./actions";
import ToastAlert from "../../../util/ToastAlert";

interface CartParams {
  id?: any;
  amount: any;
}

function* addToCart({ id }: CartParams) {
  const productExists = yield select((state) =>
    state.cart.find((p: { id: any }) => p.id === id)
  );
  const currentAmount = productExists ? productExists.amount : 0;
  const amount = currentAmount + 1;
  ToastAlert({
    message: "Product added to cart",
  });

  if (productExists) {
    yield put(updateAmountSuccess(id, amount));
  } else {
    const response = yield call(api.get, `/${id}`);

    const data = {
      ...response.data,
      amount: 1,
      finalPrice: Number(response.data.price),
    };

    yield put(addToCartSuccess(data));
  }
}

function* updateAmount({ id, amount }: CartParams) {
  if (amount <= 0) return;
  yield put(updateAmountSuccess(id, amount));
}

export default all([
  takeLatest<string, (...args: any[]) => any>("@cart/ADD_REQUEST", addToCart),
  takeLatest<string, (...args: any[]) => any>(
    "@cart/UPDATE_AMOUNT_REQUEST",
    updateAmount
  ),
]);
