import VanuatuRequest from "../../luminol/luminol/Request";

//
//
//
//

class test{
  static get(){
    var req =
      new VanuatuRequest("http://httpbin.org/get")

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
  }
}
