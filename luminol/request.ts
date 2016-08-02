class RequestPayload{
	constructor(public parent: Request){
		// lest rock
	}

	object(){
		return this.parent;
	}
}




class RequestHeader{
	constructor(public parent: Request){
		// make peace
	}
}




class RequestObjectResponse{

}




export class Request{
		private _event = {
		progress : function(RequestObjectResponse){},
		load     : function(RequestObjectResponse){},
		error    : function(RequestObjectResponse){},
		abort    : function(RequestObjectResponse){}
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
  }

	get header(){
		return new RequestHeader(this);
	}

	get payload(){
		return new RequestPayload(this);
	}
}
