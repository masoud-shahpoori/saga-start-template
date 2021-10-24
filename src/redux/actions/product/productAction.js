import axios from "axios";
import {
  take,
  takeEvery,
  delay,
  put,
  call,
  cancelled,
} from "redux-saga/effects";

export const getProduct = (data) => ({
  type: "getProduct",
  payload: data,
});
let fetchApi = "";

export function* startfetchingProduct(action) {
  const cancelSource = axios.CancelToken.source();
  try {
    //    const response =  yield call(axios.get, fetchApi+action.search , { cancelToken: cancelSource.token })
    //    const handlesuccess = yield put(successFetchedProduct(response.data))
  } catch (error) {
    //   const handlefailed=  yield put(failureFetchedProduct(''))
  } finally {
    if (yield cancelled()) {
      yield call(cancelSource.cancel);
    }
  }
}
