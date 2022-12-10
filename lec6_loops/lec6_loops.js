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
//DO-WHLIE (once islem yapilir, sonrasinda ise kontrol yapilir)
var mathArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var index = 0;
do {
  let sum = mathArray[index]+1;
  console.log("toplam deger:"+sum);
  index++;
} while (index <=8);
// break ve continue deyimleri ile, donguden cikilabilir. 
