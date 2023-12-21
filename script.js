//your JS code here. If required.
function mapLatters(str) {
	let map={};
	for(let i=0;i<str.length;i++){
		
		if(map[str[i]]){
			map[str[i]].push(i);
		}
		else{
			map[str[i]]=[i];
		}
	}
	return map;
}

const str=prompt();
alert(JSON.stringify(mapLatters(str)));