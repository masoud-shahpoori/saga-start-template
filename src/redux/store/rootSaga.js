import {call,all} from 'redux-saga/effects'
import {productSaga} from '../actions/product/productSaga'

export default function* rootSaga(){
    yield all([
        call(productSaga)
    ])
}