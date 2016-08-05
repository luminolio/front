import Request from "../Request";

//
//
//
//

class VanuatuRequestHeaderContentType{
	constructor(public parent: Request){
		// winners dont use drugs
	}

	set(value: string){
		this.parent.xhr.setRequestHeader("Content-type", value);
	}

	get formUrlEncode(){
		this.set("application/x-www-form-urlencoded");
		return this.parent;
	}
}

//
//
//
//

export default class VanuatuRequestHeader{
	constructor(public parent: Request){
		// make peace
	}

	get contentType(){
		return new VanuatuRequestHeaderContentType(this.parent)
	}
}
