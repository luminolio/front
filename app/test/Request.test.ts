import Request from "../../luminol/luminol/Request";

//
// GET
//

var req =

  // new Request("http://httpbin.org/get")
  // new Request("http://httpbin.org/bytes/100024")
  new Request("http://httpbin.org/image/jpeg")
  // new Request("http://httpbin.org/image/png")
  // new Request("http://httpbin.org/image/svg")

  .on("progress", (response) => {
    console.log("progress", response.complete);
  })

  .on("fail", (response) => {
    console.log("fail", response);
  })

  .on("abort", (response) => {
    console.log("abort", response);
  })

  .on("load", (response) => {
    // console.log("load", response.data);

    // console.log(response.text);
    console.log(response.json);
    // document.body.appendChild(response.img);
  })

  .get;
