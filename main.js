let stringOne = "Uwielbiam JavaScript";
let stringTwo = "Jestem świetnym programistą";
function longerString(string1, string2) {
  if (string1.length > string2.length) {
    return string1;
  } else {
    return string2;
  }
}
console.log(longerString(stringOne, stringTwo));
