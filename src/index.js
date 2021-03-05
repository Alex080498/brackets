module.exports = function check(str, bracketsConfig) {
  const stack = [];
  for (let element of str) {
    if (element=='(') {
      stack.push(element);
    }
    if (element ==')') {
      stack.pop(element);
    }
    if (element=='{') {
      stack.push(element);
    }
    if (element =='}') {
      stack.pop(element);
    }
    if (element=='|') {
      stack.push(element);
    }
    if (element =='|') {
      stack.pop(element);
    }
    if (element=='[') {
      stack.push(element);
    }
    if (element ==']') {
      stack.pop(element);
    }
  }
if (stack.length==0) {
return true;
} else {
  return false;}
}


  
