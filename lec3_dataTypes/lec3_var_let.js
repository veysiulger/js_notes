/**VERİ TİPİ DÖNÜŞÜMLERİ:
 * 
 * typeof: Bu anahtar sözcük ile, bir değişkenin tipini öğrenebiliriz.
 * 
 * parseFloat():floata çevirir.
 * 
 * parseInt();int'e çevir.
 * 
 * Number(); Sayıya çevirme.
 * 
 * String();Metine çevirme.
 * 
 * toFixed(x); Virgülden sonra x kadar sayı olsun.
 * 
 * Metin Toplaması: Metin birleştirme işlemi. Metisnsel veya metinsel olmayan
 * ifadelerin uç uca eklenmesi. 
 * 
 * UNDEFINED:Tanımlı değil. Değer atanmamış. => var x;
 * NULL: Hiç. var =>  x=NULL;
 * EMPTY(Boş):"".  => var x="";
 * 
 * 
 * ÖNEMLİ NOT: boş demek, null değildir. NULL!=""
 */
var x="11";

console.log("x'in veri tipi:",x,typeof x);

var new_x=Number(x);

console.log("x'in degismis hali:",new_x,typeof new_x);

var y=23.675;
var new_y=String(y);
console.log("y'nin degismis hali:",new_y,typeof new_y);

var total=10+"45";
console.log("Tam sayı 10 + Metinsel Sayı '45'=",total);

//Null, Undefined, empty(boş)

var value_null=null;
console.log("type of value_null",typeof value_null);

var value_undefined;
console.log("type of undefined value", typeof value_undefined );