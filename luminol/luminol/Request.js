System.register(["./request/RequestHeader", "./request/RequestPayload", "./request/RequestObjectResponse"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var RequestHeader_1, RequestPayload_1, RequestObjectResponse_1;
    var VanuatuRequest;
    return {
        setters:[
            function (RequestHeader_1_1) {
                RequestHeader_1 = RequestHeader_1_1;
            },
            function (RequestPayload_1_1) {
                RequestPayload_1 = RequestPayload_1_1;
            },
            function (RequestObjectResponse_1_1) {
                RequestObjectResponse_1 = RequestObjectResponse_1_1;
            }],
        execute: function() {
            VanuatuRequest = (function () {
                function VanuatuRequest(_url) {
                    this._url = _url;
                    this._payload = "";
                    this._event = {
                        progress: function (vror) { },
                        load: function (vror) { },
                        error: function (vror) { },
                        abort: function (vror) { }
                    };
                    this._xhr = new XMLHttpRequest();
                }
                VanuatuRequest.prototype.on = function (evt, fn) {
                    this._event[evt] = fn;
                };
                VanuatuRequest.prototype.execute = function (method) {
                    method = method.toUpperCase();
                    this._xhr.open(method, this._url, true);
                    var progress = function (event) {
                        var percentComplete = event.loaded / event.total * 100;
                        this._event.progress(new RequestObjectResponse_1.default(this, event, {
                            percent: percentComplete
                        }));
                    };
                    var load = function (event) {
                        this._event.progress(new RequestObjectResponse_1.default(this, event, {}));
                    };
                    var fail = function (event) {
                        this._event.progress(new RequestObjectResponse_1.default(this, event, {}));
                    };
                    var abort = function (event) {
                        this._event.progress(new RequestObjectResponse_1.default(this, event, {}));
                    };
                    this._xhr.addEventListener("progress", progress, false);
                    this._xhr.addEventListener("load", load, false);
                    this._xhr.addEventListener("error", fail, false);
                    this._xhr.addEventListener("abort", abort, false);
                    this._xhr.send(this._payload);
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
                Object.defineProperty(VanuatuRequest.prototype, "xhr", {
                    get: function () {
                        return this.xhr;
                    },
                    enumerable: true,
                    configurable: true
                });
                return VanuatuRequest;
            }());
            exports_1("default", VanuatuRequest);
        }
    }
});
//# sourceMappingURL=Request.js.map