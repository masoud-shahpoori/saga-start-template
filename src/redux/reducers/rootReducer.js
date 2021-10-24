import {combineReducers} from "redux"
import productReducer from './product/productreducer'


const rootReducer= combineReducers({
    productReducer:productReducer
})
export default rootReducer