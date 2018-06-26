export function BreakStringFilter(val){

	function nextLetter(s){
		return s.replace(/([a-zA-Z])[^a-zA-Z]*$/, function(a){
			var c= a.charCodeAt(0);
			switch(c){
				case 90: return 'A';
				case 122: return 'a';
				default: return String.fromCharCode(++c);
			}
		});
	}

	if(val) {
		var firstLetter = val[0];
		firstLetter = nextLetter(firstLetter);
		val = firstLetter + val.slice(1);
		return val;
	}

}