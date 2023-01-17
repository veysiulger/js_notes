// FOR LOOPS
var array = [
  { id: 1, name: "user1" },
  { id: 2, name: "user2" },
  { id: 3, name: "user3" },
  { id: 4, name: "user4" },
];
for (let begin = 0, end = array.length; begin < end; begin++) {
  console.log("id=> " + array[begin].id + " name=> " + array[begin].name);
}
/************************************************************* */
//FOREACH
let text = ["abc", "xyz", "klm", "npq", "erty"];

text.forEach(function (element, index) {
  console.log(element, index);

  text[index] = element.toUpperCase();
});
console.log(text);
/************************************************************* */
//FOR IN

let user1 = { name: "testuser", email: "test@mail", age: 23 };

for (let property in user1) {
  console.log(property, user1[property]);
}
/************************************************************* */
//FOR IN

let floors = ["01", "02", "03"];

for (let flr of floors) {
  console.log("kat: "+flr);
}

/************************************************************* */
//DO-WHLIE (once islem yapilir, sonrasinda ise kontrol yapilir)
var mathArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var index = 0;
do {
  let sum = mathArray[index] + 1;
  console.log("toplam deger:" + sum);
  index++;
} while (index <= 8);

/************************************************************* */
// break ve continue deyimleri ile, donguden cikilabilir.
