define(["require", "exports"], function (require, exports) {
    "use strict";
    var VanuatuRequestResponse = (function () {
        function VanuatuRequestResponse(_event, _xhr, _obj) {
            if (_obj === void 0) { _obj = {}; }
            this._event = _event;
            this._xhr = _xhr;
            this._obj = _obj;
            this._blob = null;
            this._text = null;
            this._json = null;
            this._url = null;
            this._mime = {
                images: [
                    "image/svg+xml",
                    "image/jpeg",
                    "image/png",
                    "image/gif"
                ]
            };
        }
        Object.defineProperty(VanuatuRequestResponse.prototype, "data", {
            get: function () {
                if (this._blob == null)
                    this._blob = this._xhr.response;
                return this._blob;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(VanuatuRequestResponse.prototype, "img", {
            get: function () {
                var find = this._mime.images.indexOf(this.data.type);
                if (find >= 0) {
                    var url = URL.createObjectURL(this.data);
                    var img = document.createElement("img");
                    img.setAttribute("src", url);
                    return img;
                }
                else {
                    return null;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(VanuatuRequestResponse.prototype, "text", {
            get: function () {
                if (this._text == null) {
                    if (this._obj.hasOwnProperty("text")) {
                        this._text = this._obj.text;
                    }
                    else {
                        this._text = "";
                    }
                }
                return this._text;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(VanuatuRequestResponse.prototype, "json", {
            get: function () {
                if (this._json == null) {
                    try {
                        this._json = JSON.parse(this.text);
                    }
                    catch (e) {
                        console.error(e);
                    }
                }
                return this._json;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(VanuatuRequestResponse.prototype, "xhr", {
            get: function () {
                return this._xhr;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(VanuatuRequestResponse.prototype, "complete", {
            get: function () {
                var evt = this._event;
                if (evt.loaded && evt.total) {
                    return evt.loaded / evt.total;
                }
                else {
                    return null;
                }
            },
            enumerable: true,
            configurable: true
        });
        return VanuatuRequestResponse;
    }());
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = VanuatuRequestResponse;
});
//# sourceMappingURL=Response.js.map