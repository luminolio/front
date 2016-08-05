import Request from "../Request";

export default class VanuatuRequestPayload{
	constructor(public parent: Request){
		// lest rock
	}

	object(object: Object){
		return this.parent;
	}

	htmlForm(form: HTMLFormElement){
		return this.parent;	
	}
}
