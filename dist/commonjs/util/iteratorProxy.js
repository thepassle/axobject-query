"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function iteratorProxy() {
    const values = this;
    let index = 0;
    const iter = {
        "@@iterator": function () {
            return iter;
        },
        next: function () {
            if (index < values.length) {
                const value = values[index];
                index = index + 1;
                return { done: false, value };
            }
            else {
                return { done: true, value: undefined };
            }
        },
    };
    return iter;
}
exports.default = iteratorProxy;
