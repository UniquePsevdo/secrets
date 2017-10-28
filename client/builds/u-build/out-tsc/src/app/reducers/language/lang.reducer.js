"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var language = require("./lang.actions");
var environment_1 = require("../../../environments/environment");
var initialState = {
    currentLang: '',
    languages: [],
    IsDefaultCurrent: 'initial'
};
/*
  The reducer of the layout state. Each time an action for the layout is dispatched,
  it will create a new state for the layout.
 */
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    if (action) {
        switch (action.type) {
            case language.SET_CURRENT_LANG:
                return Object.assign({}, state, {
                    currentLang: action.payload
                });
            case language.SET_DEF_CURRENT_LANG:
                var temp = void 0;
                if (environment_1.environment.envName !== 'local') {
                    temp = action.payload.filter(function (item) {
                        if (item.is_default) {
                            return true;
                        }
                        else {
                            return false;
                        }
                    })[0].code;
                }
                return Object.assign({}, state, {
                    currentLang: temp || 'en'
                });
            case language.SET_LANGUAGES:
                return Object.assign({}, state, {
                    languages: action.payload
                });
            case language.SET_DEFAULT_IS_CURRENT:
                return Object.assign({}, state, {
                    IsDefaultCurrent: action.payload
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
//# sourceMappingURL=lang.reducer.js.map