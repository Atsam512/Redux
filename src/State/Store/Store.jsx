import { createStoreHook } from "react-redux";
import { applyMiddleware } from "redux";


export const Store = createStoreHook(reducers , {} . applyMiddleware(thunk))

