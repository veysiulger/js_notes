/**MATH METHODS
 * JS'in guclu Math metotlari vardir.
 * Math nesnesi, sabitler, metotlar, trigonometrik hesaplamalar gibi
 * islemleri iceren bir nesnedir.
 * 
 * Daha gelismis matematiksel islemler icin, 
 * https://mathjs.org/
 * 
 * adresini incele. Buradaki matematik nesnesine erismek icin,
 * math objesi kullanilmalidir. (math, m harfi kucuk.)
 *
 */

"use strict";

{//Matematik Sabitleri
  const PI = Math.PI;
  const euler = Math.E;
  console.log("pi=" + PI + " e=" + euler);
}

{//Logaritma
  var num = 5;

  var a = Math.log(num); // e tabanli logaritma => ln(5)
  var b = Math.log(num) / Math.log(3); //loaritma 3 tabaninda 5
  var c = Math.exp(num); // e uzeri 5 => e^5

  console.log("ln(" + num + ")=" + a);
  console.log("logaritma 3 tabaninda " + num + " = " + b);
  console.log("e^" + num + "=" + c);
}

{//Trigonometri

  //Acilar radyan olarak girilmelidir. pi/3 gibi.
  var a = Math.sin(Math.PI / 3);
  var b = Math.cos(Math.PI / 3);
  var c = Math.tan(Math.PI / 3);
  //Ters trigonometi. Sonuc radyan turunde olur.
  var ar_a = Math.asin(Math.PI / 3);
  var ar_b = Math.acos(Math.PI / 3);
  var ar_c = Math.atan(Math.PI / 3);

  console.log("a=" + a);
}


{//Bazı Math Metotlari

  var a=Math.abs(-12.34); //mutlak deger alir.
  var b=Math.max(2,4,5,6,-7,8,9,12);
  var c=Math.min(2,4,5,6,-7,8,9,12);
  var d=Math.pow(4,3);// taban 4, us 3. 4 uzeri 3.


  console.log("abs(-12.34)="+a);
  console.log("max array = "+b);
  console.log("min array = "+c);
  console.log("4 uzeri 3 = "+d);
}