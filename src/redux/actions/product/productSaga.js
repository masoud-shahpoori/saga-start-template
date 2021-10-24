import { takeEvery,put } from "@redux-saga/core/effects"
import axios from 'axios'
import {getProduct} from './productAction'

export function* productSaga(){
  yield  takeEvery("HI",startFetching)
}

function* startFetching(action){

yield console.log(action)
yield put(getProduct('amir'))

}