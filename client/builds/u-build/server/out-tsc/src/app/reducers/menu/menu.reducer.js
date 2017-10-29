"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var menu = require("./menu.actions");
var initialState = {
    navParams: { parent: "", children: [] },
    isMainPage: true
};
/*
  The reducer of the layout state. Each time an action for the layout is dispatched,
  it will create a new state for the layout.
 */
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    if (action) {
        switch (action.type) {
            case menu.ROUTE_TO:
                return Object.assign({}, state, {
                    navParams: action.payload
                });
            case menu.SET_NAV_PARAMS:
                return Object.assign({}, state, {
                    navParams: action.payload
                });
            case menu.SET_IS_MAIN_PAGE:
                return Object.assign({}, state, {
                    isMainPage: action.payload
                });
            default:
                return state;
        }
    }
    else {
        return state;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=menu.reducer.js.map