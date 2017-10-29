"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ROUTER_START = '[Reset] ROUTER_START';
exports.ROUTER_END = '[Reset] ROUTER_END';
var routerStart = (function () {
    function routerStart() {
        this.type = exports.ROUTER_START;
    }
    return routerStart;
}());
exports.routerStart = routerStart;
var routerEnd = (function () {
    function routerEnd() {
        this.type = exports.ROUTER_END;
    }
    return routerEnd;
}());
exports.routerEnd = routerEnd;
//# sourceMappingURL=reset.actions.js.map