import {createStore,applyMiddleware} from 'redux'
import logger from 'redux-logger'
import rootReducer from '../reducers/rootReducer'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga'

const sagaMiddleware = createSagaMiddleware()
const middleware=[logger,sagaMiddleware]

const store = createStore(rootReducer,applyMiddleware(...middleware))

sagaMiddleware.run(rootSaga)
export default store
