export default class VanuatuRequestResponse{
  private _blob = null;
  private _url  = null;
  private _mime = {
    images : [
      "image/svg+xml",
      "image/jpeg",
      "image/png",
      "image/gif"
    ]
  };

  constructor(
    private _event: Event,
    private _xhr: XMLHttpRequest
  ){
    // lets rock
  }

  get data(){
    if(this._blob == null)
      this._blob = this._xhr.response;
    return this._blob;
  }

  get img(){
    var find = this._mime.images.indexOf(this.data.type);
    if(find >= 0){
      var url = URL.createObjectURL(this.data);
      var img = document.createElement("img");
      img.setAttribute("src", url);
      return img;
    }else{
      return null;
    }
  }

  get json(){
    return 0;
  }

  get xhr(){
    return this._xhr
  }

  get complete(){
    var evt = <ProgressEvent>this._event;
    if(evt.loaded && evt.total)
      return evt.loaded / evt.total;
    else
      return null;
  }
}
