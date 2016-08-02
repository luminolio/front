import Request from "../Request";

export default class VanuatuRequestPayload{
	constructor(public parent: Request){
		// lest rock
	}

	object(){
		return this.parent;
	}
}
