
//**********IF, IF-ELSE, ELSE KULLANIMI********************/
var array = [
  {
    id: 1,
    name: "Ali",
    City: "Manisa",
  },
  {
    id: 2,
    name: "Veli",
    City: "İstanbul",
  },
  {
    id: 3,
    name: "Selami",
    City: "Van",
  },
];

var index = 2;//0,1,2
if (array != null) {
  if (array[index]["id"] == 1) {
    console.log("Kullanıcı ismi:", array[index]["name"]);
  } else if (array[index]["id"] == 2) {
    console.log("Kullanıcı ismi:", array[index]["name"]);
  } else if (array[index]["id"] == 3) {
    console.log("Kullanıcı ismi:", array[index]["name"]);
  } else {
    console.log("Kullanıcı ismi yok.");
  }
}
//*************TERNARY OPERATION****************/
var str=(array[0]["name"]) ? array[0]['name']:"İsim yok";
console.log("ternary operation:",str);

//*****************UZUN IFADELERI KISALTMAK **********/

var newArray=[1,2,3,4];

newArray[0] && newArray[1] && newArray[2]&&console.log("basarili!");
/* Burada newArray'larin hepsi mevcut ise, consolda "basarili!" yazar. MANTİK SOYLEDİR,
(1 and 1) and 1) bu islemin sonucu 1 oldugu icin, son komut yurutulur.*/

(((newArray[0] && newArray[1]) && newArray[5])&&console.log("basarili"));
/* Burada newArray[5] mevcut degil, bu yuzden, consolda "basarili!" yazmaz*/

(((newArray[0] && newArray[1]) || newArray[5])&&console.log("basarili"));
/* Burada newArray[5] mevcut degil, ama digerleri mevcut, arada veya baglaci var.
 bu yuzden, consolda "basarili!" yazar*/
 

 /********************************************************* */