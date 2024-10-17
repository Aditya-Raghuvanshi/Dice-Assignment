import { configureStore } from "@reduxjs/toolkit";
import userConfig from "./userConfig";

const store=configureStore({
    reducer:{
        user:userConfig,
    }
})

export default store