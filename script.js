function firstWord(s) {
  // your code here
	if(s.length){
		return '';
	}

	const words = s.trim.split(' ');
	return words[0];
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
