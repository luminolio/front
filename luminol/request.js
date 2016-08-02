"use strict";
var RequestPayload = (function () {
    function RequestPayload(parent) {
        this.parent = parent;
    }
    RequestPayload.prototype.object = function () {
        return this.parent;
    };
    return RequestPayload;
}());
var RequestHeader = (function () {
    function RequestHeader(parent) {
        this.parent = parent;
    }
    return RequestHeader;
}());
var RequestObjectResponse = (function () {
    function RequestObjectResponse() {
    }
    return RequestObjectResponse;
}());
var Request = (function () {
    function Request(_xhr, _url) {
        this._xhr = _xhr;
        this._url = _url;
        this._event = {
            progress: function (RequestObjectResponse) { },
            load: function (RequestObjectResponse) { },
            error: function (RequestObjectResponse) { },
            abort: function (RequestObjectResponse) { }
        };
        this._xhr = new XMLHttpRequest();
    }
    Request.prototype.on = function (evt, fn) {
        this._event[evt] = fn;
    };
    Request.prototype.execute = function (method) {
        method = method.toUpperCase();
        this._xhr.open(method, this._url, true);
    };
    Object.defineProperty(Request.prototype, "header", {
        get: function () {
            return new RequestHeader(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Request.prototype, "payload", {
        get: function () {
            return new RequestPayload(this);
        },
        enumerable: true,
        configurable: true
    });
    return Request;
}());
exports.Request = Request;
