import testModule from "./testModule.js";

export default class Test {
	constructor(){
	    this.a = 1;
	    this.b = (new testModule()).b;
	}

	init(){
		alert(this.a);
	}

	tools(){
		return {
			func:()=>{

			}
		}
	}

	bindEvent(){

	}
}
