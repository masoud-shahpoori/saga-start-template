import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "../reducers/rootReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import { persistStore } from "redux-persist";

const sagaMiddleware = createSagaMiddleware();
const middleware = [logger, sagaMiddleware];

export const store = createStore(rootReducer, applyMiddleware(...middleware));

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

// export default { store, persistor };
