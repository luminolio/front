System.register(["../../luminol/luminol/Request"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Request_1;
    var test;
    return {
        setters:[
            function (Request_1_1) {
                Request_1 = Request_1_1;
            }],
        execute: function() {
            test = (function () {
                function test() {
                }
                test.get = function () {
                    var req = new Request_1.default("http://httpbin.org/get")
                        .header
                        .contentType
                        .formUrlEncode
                        .payload
                        .object({
                        nome: "Daniel",
                        snome: [
                            "de",
                            "andrade",
                            "varela"
                        ]
                    })
                        .execute("get");
                };
                return test;
            }());
        }
    }
});
//# sourceMappingURL=Request.test.js.map