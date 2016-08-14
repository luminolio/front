import Response from "./request/Response";

export default class VanuatuRequest{
	private _payload       = "";
	private _xhr           = new XMLHttpRequest();;
	private _requestHeader = [];
	private _event         = {
		progress : function(vror){},
		load     : function(vror){},
		error    : function(vror){},
		abort    : function(vror){}
	};

	constructor(private _url : string){
		//
	}

	on(evt: string, fn: Function){
		this._event[ evt ] = fn;
		return this;
	}

	/**
	 *
	 */
	execute(method: string){
		method = method.toUpperCase();
		this._xhr.open(method, this._url, true);
		this._xhr.responseType = "blob";

		//console.log("requestHeader", this._requestHeader);

		let progress = (event) => {
			let response = new Response(event, this._xhr);
			this._event.progress(response);
		};

		let load = (event) => {
			let response = new Response(event, this._xhr);
			this._event.load(response);
		};

		let error = (event) => {
			let response = new Response(event, this._xhr);
			this._event.error(response);
		};

		let abort = (event) => {
			let response = new Response(event, this._xhr);
			this._event.abort(response);
		};

		this._xhr.addEventListener( "progress" , progress  , false );
		this._xhr.addEventListener( "load"     , load      , false );
		this._xhr.addEventListener( "error"    , error     , false );
		this._xhr.addEventListener( "abort"    , abort     , false );

		this._xhr.send();
	}

	get get(){
		this.execute("GET");
		return this;
	}
}
