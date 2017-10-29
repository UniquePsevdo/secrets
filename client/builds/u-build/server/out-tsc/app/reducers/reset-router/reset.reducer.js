"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var subscribtion = require("./reset.actions");
var initialState = {
    start: true
};
/*
  The reducer of the layout state. Each time an action for the layout is dispatched,
  it will create a new state for the layout.
 */
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    if (action) {
        switch (action.type) {
            case subscribtion.ROUTER_START:
                return Object.assign({}, state, {
                    start: true
                });
            case subscribtion.ROUTER_END:
                return Object.assign({}, state, {
                    start: false
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
//# sourceMappingURL=reset.reducer.js.map