import { combineReducers } from "redux";

import cart from "./cart/reducer";
import rtl from "./rtl/reducer";

export default combineReducers({ cart, rtl });
