"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var AdminInteractionData = (function () {
    function AdminInteractionData() {
        this.showContentChildren = new BehaviorSubject_1.BehaviorSubject(false);
        this.showContentChildren$ = this.showContentChildren.asObservable();
    }
    AdminInteractionData.prototype.setShowContentChildren = function (showContentChildren) {
        this.showContentChildren.next(showContentChildren);
    };
    return AdminInteractionData;
}());
AdminInteractionData.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
AdminInteractionData.ctorParameters = function () { return []; };
exports.AdminInteractionData = AdminInteractionData;
//# sourceMappingURL=admin-interaction-data.js.map