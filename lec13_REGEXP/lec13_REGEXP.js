/**REGULAR EXPRESSION
 * Gelismis metin islemede kullanilmaktadir.
 * Metin arama, duzenleme, bir metinden belirli
 * formatta bilgi cekme vs.
 *
 * JS'in guzel bir RegExp nesnesi vardir. Bu nesne ile
 * duzenli tertipli nesneler tanimlayabiliriz.
 *
 * Bunun disinda, // (egik cizgiler) ile de duzenli ifade tanimlanabilir.
 *
 * let regJS=/javascript/i;
 *
 * RegExp(Desen,Ozellik)
 * https://www.w3schools.com/jsref/jsref_obj_regexp.asp
 */

{
  //Gercek gosterim: degismez gosterimdir. Dongulerde, sabit bir desen
  //aramak icin kullanilir.

  let regexpJS = new RegExp(/javascript/, "i"); //degismez
}

{
  //Yapilandirici: Aranan ifade,degisen bir desen ise yapilandirici
  //metot kullanilir.

  let regexpJS = new RegExp("javascript", "i"); //yapilandirici metot
}
{
  //Araliklar: Koseli parantez icerisinde belirli araliklar tanimlanir.
}

{
  //Meta: Ozel anlamlara sahip karakterler.
}
{
  //Duzenleyiciler:Global olarak, buyuk/kucuk harf onemsenmeden arama yapar.
  /*duzenleyici harfleri
    i,g,m
    */
}
{
  //Quantifier:Hedef tayini yapmaya yarar. Belirli ozelliklere gore hedefleme yapilir.
}

{
  //RegExp ile ilgili metotlari:
  /** Duzenli bir ifade oluşturduktan sonra, bu ifade ile
   * string'ler uzerinde calismalar yapmak icin bazi metotlar vardir.
   * Bu metotlar ile string uzerinde, eslesme, arama vs yapilabilir.
   */

  let strText = "lorem ipsum dolor sit";

  let result0 = strText.match(/lorem/);

  let result1 = strText.match(/lorem(em)/);

  let result2 = strText.match(/lorem/g);
 
  console.log(" sonuc0: " + result0, "\n sonuc1: " + result1, "\n sonuc2: " + result2);
}
