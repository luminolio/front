import VanuatuRequestHeader from "./request/RequestHeader";
import VanuatuRequestPayload from "./request/RequestPayload";
import VanuatuRequestObjectResponse from "./request/RequestObjectResponse";

export default class VanuatuRequest{
		private _event = {
		progress : function(ROR: VanuatuRequestObjectResponse){},
		load     : function(ROR: VanuatuRequestObjectResponse){},
		error    : function(ROR: VanuatuRequestObjectResponse){},
		abort    : function(ROR: VanuatuRequestObjectResponse){}
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

		let progress = function(e){
			this._event.progress(
				new VanuatuRequestObjectResponse({
					// add data here
				})
			);
		};

		let load = function(e){
			this._event.progress(
				new VanuatuRequestObjectResponse({
					// add data here
				})
			);
		};

		let fail = function(e){
			this._event.progress(
				new VanuatuRequestObjectResponse({
					// add data here
				})
			);
		};

		let abort = function(e){
			this._event.progress(
				new VanuatuRequestObjectResponse({
					// add data here
				})
			);
		};

		this._xhr.addEventListener("progress" , progress , false);
		this._xhr.addEventListener("load"     , load     , false);
		this._xhr.addEventListener("error"    , fail     , false);
		this._xhr.addEventListener("abort"    , abort    , false);

    this._xhr.open(method, this._url, true);
  }

	get header(){
		return new VanuatuRequestHeader(this);
	}

	get payload(){
		return new VanuatuRequestPayload(this);
	}
}
