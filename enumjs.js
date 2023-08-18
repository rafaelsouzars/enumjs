/*
	Enumerador Javascript v1.0
	Autor: Rafael Souza
	Versão: 1.0
	Data: 17/08/2023
	Repositório: https://github/rafaelsouzars/enumjs.git
	Linkedin: https://linkedin/in/rafaelsouzars 
*/


class Enum {
	
	constructor(enums){
		for(let i in enums){
			this.__defineGetter__(enums[i],()=>{
				return i;
			});
		}
	}
	
	showAll(){
		let obj = {};
		for(let i in this){
			obj[i] = this[i];
		}
		return obj;
	}
	
}