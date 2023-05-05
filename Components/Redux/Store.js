import {configureStore} from "@reduxjs/toolkit"
import RootReducer from "./RootReducer"
import SagaData from "./Saga"
import createSagaMiddleware from "redux-saga"

const SagaMiddleware = createSagaMiddleware()



const store = configureStore({
    reducer:RootReducer,
    middleware:()=>[SagaMiddleware]
})

SagaMiddleware.run(SagaData)
export default store