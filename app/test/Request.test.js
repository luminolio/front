define(["require", "exports", "../../luminol/luminol/Request"], function (require, exports, Request_1) {
    "use strict";
    var req = new Request_1.default("http://httpbin.org/image/svg")
        .on("progress", function (response) {
        console.log("progress", response.complete);
    })
        .on("fail", function (response) {
        console.log("fail", response);
    })
        .on("abort", function (response) {
        console.log("abort", response);
    })
        .on("load", function (response) {
        console.log("load", response.json);
    })
        .get;
});
//# sourceMappingURL=Request.test.js.map