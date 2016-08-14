define(["require", "exports"], function (require, exports) {
    "use strict";
    var VanuatuRequestResponse = (function () {
        function VanuatuRequestResponse(_event, _xhr) {
            this._event = _event;
            this._xhr = _xhr;
            this._blob = null;
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
        Object.defineProperty(VanuatuRequestResponse.prototype, "json", {
            get: function () {
                return 0;
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
                if (evt.loaded && evt.total)
                    return evt.loaded / evt.total;
                else
                    return null;
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