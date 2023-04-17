import { combineReducers } from "@reduxjs/toolkit";
import { workerReducer } from "./worker";
import { skillsReducer } from "./skill";
import { portfolioReducer } from "./portfolio";
import { experienceReducer } from "./experience";

const rootReducer = combineReducers({
    workerReducer,
    skillsReducer,
    portfolioReducer,
    experienceReducer,
});

export default rootReducer;