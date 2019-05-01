import { combineReducers } from "redux";

import header from "./header/header";
import footer from "./footer/footer";
import calclator from "./calclator/calclator"

export default combineReducers({ header, footer, calclator });