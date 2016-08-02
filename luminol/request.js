"use strict";
var RequestHeader_1 = require("./request/RequestHeader");
var RequestPayload_1 = require("./request/RequestPayload");
var RequestObjectResponse_1 = require("./request/RequestObjectResponse");
var VanuatuRequest = (function () {
    function VanuatuRequest(_xhr, _url) {
        this._xhr = _xhr;
        this._url = _url;
        this._event = {
            progress: function (ROR) { },
            load: function (ROR) { },
            error: function (ROR) { },
            abort: function (ROR) { }
        };
        this._xhr = new XMLHttpRequest();
    }
    VanuatuRequest.prototype.on = function (evt, fn) {
        this._event[evt] = fn;
    };
    VanuatuRequest.prototype.execute = function (method) {
        method = method.toUpperCase();
        var progress = function (e) {
            this._event.progress(new RequestObjectResponse_1.default({}));
        };
        var load = function (e) {
            this._event.progress(new RequestObjectResponse_1.default({}));
        };
        var fail = function (e) {
            this._event.progress(new RequestObjectResponse_1.default({}));
        };
        var abort = function (e) {
            this._event.progress(new RequestObjectResponse_1.default({}));
        };
        this._xhr.addEventListener("progress", progress, false);
        this._xhr.addEventListener("load", load, false);
        this._xhr.addEventListener("error", fail, false);
        this._xhr.addEventListener("abort", abort, false);
        this._xhr.open(method, this._url, true);
    };
    Object.defineProperty(VanuatuRequest.prototype, "header", {
        get: function () {
            return new RequestHeader_1.default(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VanuatuRequest.prototype, "payload", {
        get: function () {
            return new RequestPayload_1.default(this);
        },
        enumerable: true,
        configurable: true
    });
    return VanuatuRequest;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = VanuatuRequest;
