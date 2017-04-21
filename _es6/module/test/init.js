import testModule from "./testModule.js";

export default class Test {
	constructor(){
	    this.a = 1;
	    this.b = (new testModule()).b;
	    this.c = 5;
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
