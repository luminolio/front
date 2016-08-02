import VanuatuRequestHeader from "./request/RequestHeader";
import VanuatuRequestPayload from "./request/RequestPayload";
import VanuatuRequestObjectResponse from "./request/RequestObjectResponse";

export default class VanuatuRequest{
		private _event = {
		progress : function(vror : VanuatuRequestObjectResponse){},
		load     : function(vror : VanuatuRequestObjectResponse){},
		error    : function(vror : VanuatuRequestObjectResponse){},
		abort    : function(vror : VanuatuRequestObjectResponse){}
	};

	constructor(
    private _xhr : XMLHttpRequest,
    private _url : string
  ){
		this._xhr = new XMLHttpRequest();
	}

  on(evt: string, fn: Function){
    this._event[ evt ] = fn;
  }

  execute(method: string){
    method = method.toUpperCase();
		this._xhr.open(method, this._url, true);

		let progress = function(event){
			let percentComplete = event.loaded / event.total * 100;
			this._event.progress(new VanuatuRequestObjectResponse(this, event, {
					percent: percentComplete
			}));
		};

		let load = function(event){
			this._event.progress(new VanuatuRequestObjectResponse(this, event, {
					// add data
			}));
		};

		let fail = function(event){
			this._event.progress(new VanuatuRequestObjectResponse(this, event, {
					// add data
			}));
		};

		let abort = function(event){
			this._event.progress(new VanuatuRequestObjectResponse(this, event, {
					// add data
			}));
		};

		this._xhr.addEventListener("progress" , progress , false);
		this._xhr.addEventListener("load"     , load     , false);
		this._xhr.addEventListener("error"    , fail     , false);
		this._xhr.addEventListener("abort"    , abort    , false);
  }

	get header(){
		return new VanuatuRequestHeader(this);
	}

	get payload(){
		return new VanuatuRequestPayload(this);
	}
}
