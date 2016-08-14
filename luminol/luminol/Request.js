define(["require", "exports", "./request/Response"], function (require, exports, Response_1) {
    "use strict";
    var VanuatuRequest = (function () {
        function VanuatuRequest(_url) {
            this._url = _url;
            this._payload = "";
            this._xhr = new XMLHttpRequest();
            this._requestHeader = [];
            this._event = {
                progress: function (vror) { },
                load: function (vror) { },
                error: function (vror) { },
                abort: function (vror) { }
            };
        }
        ;
        VanuatuRequest.prototype.on = function (evt, fn) {
            this._event[evt] = fn;
            return this;
        };
        VanuatuRequest.prototype.execute = function (method) {
            var _this = this;
            method = method.toUpperCase();
            this._xhr.open(method, this._url, true);
            this._xhr.responseType = "blob";
            var progress = function (event) {
                var response = new Response_1.default(event, _this._xhr);
                _this._event.progress(response);
            };
            var load = function (event) {
                var response = new Response_1.default(event, _this._xhr);
                _this._event.load(response);
            };
            var error = function (event) {
                var response = new Response_1.default(event, _this._xhr);
                _this._event.error(response);
            };
            var abort = function (event) {
                var response = new Response_1.default(event, _this._xhr);
                _this._event.abort(response);
            };
            this._xhr.addEventListener("progress", progress, false);
            this._xhr.addEventListener("load", load, false);
            this._xhr.addEventListener("error", error, false);
            this._xhr.addEventListener("abort", abort, false);
            this._xhr.send();
        };
        Object.defineProperty(VanuatuRequest.prototype, "get", {
            get: function () {
                this.execute("GET");
                return this;
            },
            enumerable: true,
            configurable: true
        });
        return VanuatuRequest;
    }());
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = VanuatuRequest;
});
//# sourceMappingURL=Request.js.map