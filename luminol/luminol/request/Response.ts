export default class VanuatuRequestResponse{
  private _blob: Blob   = null;
  private _text: string = null;
  private _json: any    = null;
  private _url : string = null;

  private _mime = {
    images : [
      "image/svg+xml",
      "image/jpeg",
      "image/png",
      "image/gif"
    ]
  };

  constructor(
    private _event : Event,
    private _xhr   : XMLHttpRequest,
    private _obj   : Object = {}
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

  get text(){
    if(this._text == null){
      if(this._obj.hasOwnProperty("text")){
        this._text = (<any>this._obj).text;
      }else{
        this._text = "";
      }
    }
    return this._text;
  }

  get json(){
    if(this._json == null){
      try{
        this._json = JSON.parse( this.text );
      }catch(e){
        console.error(e);
      }
    }
    return this._json;
  }

  get xhr(){
    return this._xhr
  }

  get complete(){
    var evt = <ProgressEvent>this._event;
    if(evt.loaded && evt.total){
      return evt.loaded / evt.total;
    }else{
      return null;
    }
  }
}
