function firstWord(s) {
  // your code here
	  if (s.length === 0) {
    return '';
  }
  
  // Split the string by spaces
  const words = s.trim().split(' ');
  
  // Return the first word
  return words[0];
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
