/**STRING
 * Harf, sayi, ozel karakter, cumlelerden olusabilir.
 * Gelismis metin islemleri icin, Vocajs kullanilabilir.
 * https://vocajs.com/
 * 
 * bu nesnenin kullanilabilmesi icin, v nesnesi ile erisebiliriz.
 * Ornegin, v.titleCase() 
 * 
 */
"use strict";

{//String Tanimlamasi

    var myText="\n cift tirnakli string";
    var myText2='\n tek tirnakli string';

    var longText="\n bu uzun bir";
    longText=longText+" cumledir, o yuzden boyle oldu.";

    console.log(myText,myText2,longText);

}
{//Bazi Guzel Metotlar

    //length
    var myText="acaba bu cumle kac karakter icerir?";
    var num=myText.length;
    console.log("cumle uzunlugu: "+num)

    //toString(): bir veriyi str'ye donusturur.
    var floor=12;
    var str=floor.toString();

    //split(): str tipindeki metni, belirli bir ozel karaktere gore,
    //parcalara ayirir ve her parca array'in bir elemani olur.

    var myText4="bu veriyi, parcalamak gerekiyor";
    var arrVirgul=myText4.split(",");
    var arrBosluk=myText4.split(" ");
    var arrTumHarf=myText4.split("");
    
    console.log(arrVirgul);

    //trim():bosluk siler.
    var myText5="   bombos bir text    ";
    var withTrim=myText5.trim();
    console.log(myText5);//trimless
    console.log(withTrim);//withTrim

    //slice() & substring(): kirpici. metin kirpar.
    var myText6="bu nasil bir dunya";
    var sliceText=myText6.slice(2,-5);//negatif deger alir.
    var sliceText2=myText6.slice(9); 
    var substringText=myText6.substring(2,7);//negatif deger almaz.
    var substringText2=myText6.substring(4);

    console.log(sliceText); 
}