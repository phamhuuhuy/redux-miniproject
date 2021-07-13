import { configureStore } from "@reduxjs/toolkit";
import photoReducer from "features/Photo/photoSlice"

const rootReducers = {
    photos: photoReducer
}

const store = configureStore({
    reducer: rootReducers
})

export default store;