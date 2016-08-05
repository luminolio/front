System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var VanuatuRequestPayload;
    return {
        setters:[],
        execute: function() {
            VanuatuRequestPayload = (function () {
                function VanuatuRequestPayload(parent) {
                    this.parent = parent;
                }
                VanuatuRequestPayload.prototype.object = function (object) {
                    return this.parent;
                };
                VanuatuRequestPayload.prototype.htmlForm = function (form) {
                    return this.parent;
                };
                return VanuatuRequestPayload;
            }());
            exports_1("default", VanuatuRequestPayload);
        }
    }
});
//# sourceMappingURL=RequestPayload.js.map