import { combineReducers } from "redux";

import cart from "./cart/reducer";
import rtl from "./rtl/reducer";
import places from "./places/reducer";

export default combineReducers({ cart, rtl, places });
