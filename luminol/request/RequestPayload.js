"use strict";
var VanuatuRequestPayload = (function () {
    function VanuatuRequestPayload(parent) {
        this.parent = parent;
    }
    VanuatuRequestPayload.prototype.object = function () {
        return this.parent;
    };
    return VanuatuRequestPayload;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = VanuatuRequestPayload;
