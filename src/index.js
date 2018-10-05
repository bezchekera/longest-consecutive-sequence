module.exports = function longestConsecutiveLength(array) { 
  let sha; 
  function compareNumeric(a, b) { 
  if (a > b) return 1; 
  if (a < b) return -1;   } 

  array.sort(compareNumeric); 
    
  let leng=lengg=1; 
  
  for (let i=0; i<array.length-2; i++){ 
  if (array[i+1]-array[i]==1){ 
  leng++;} 
  else 
  { if (array[i+1]-array[i]!=0){ if (lengg<leng) {lengg=leng;} 
  leng=1;  }
  } 
  } 
  
  if (lengg<leng) {lengg=leng;} 
  if (array.length==0) {return 0;} 
  else {return lengg;} 
  }