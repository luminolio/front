System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var VanuatuRequestHeaderContentType, VanuatuRequestHeader;
    return {
        setters:[],
        execute: function() {
            VanuatuRequestHeaderContentType = (function () {
                function VanuatuRequestHeaderContentType(parent) {
                    this.parent = parent;
                }
                VanuatuRequestHeaderContentType.prototype.set = function (value) {
                    this.parent.xhr.setRequestHeader("Content-type", value);
                };
                Object.defineProperty(VanuatuRequestHeaderContentType.prototype, "formUrlEncode", {
                    get: function () {
                        this.set("application/x-www-form-urlencoded");
                        return this.parent;
                    },
                    enumerable: true,
                    configurable: true
                });
                return VanuatuRequestHeaderContentType;
            }());
            VanuatuRequestHeader = (function () {
                function VanuatuRequestHeader(parent) {
                    this.parent = parent;
                }
                Object.defineProperty(VanuatuRequestHeader.prototype, "contentType", {
                    get: function () {
                        return new VanuatuRequestHeaderContentType(this.parent);
                    },
                    enumerable: true,
                    configurable: true
                });
                return VanuatuRequestHeader;
            }());
            exports_1("default", VanuatuRequestHeader);
        }
    }
});
//# sourceMappingURL=RequestHeader.js.map