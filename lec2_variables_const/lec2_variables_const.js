/**DEĞİŞKENLER:
 * js tanımsız bir dildir. Yani, Değişken bir kez tanımlandıktan
 * sonra farklı değerler alabilir. int iken, str olabilir, duruma göre.
 * Diğer önemli durum ise, kullanmadığımız, işimiz olmayan değişkenleri
 * serbest bırakmak, yani null olarak atamak...
 * var a; olsun. eğer a değişkeni ile işimiz bittiyse,
 * a=null; dememiz gerekir.
 */

/**VAR TANIMLAMASI:
 * değişken tanımlaması için var deyimi kullanılır.
 * var function scope özelliği taşır. var ile tanımlanan bir değişken,
 * bir fonksiyon içerisinde oluşturulmuş ise, sadece o ve
 * nested dediğimiz fonksiyon içerisinde bulunan diğer
 * fonksiyonlar içerisinde çağırılıp kullanılabilir.
 * Örneğin,
 * var degiskenAdi;
 * 
 */
/**CONST TANIMLAMASI: Sabit değişkenler için.
 * 
*/
/**LET TANIMLAMASI:
 * let ile oluşturulan bir değişken sadece oluşturulduğu
 * yerdeki süslü parantezler içerisinde erişilebilirdir
 * ve dışarısında kullanılamaz.
 */
var number1 = 12;
var number2 = 32;
var sum;
sum = number1 + number2;
console.log(sum);

var number3; //number3 değişkeni şuan da tanımsızdır. boş değildir.
var number4;

const PI=3.14; 


number4="bu bir str"; //number4 str oldu.
number4=4.23; //number4 float oldu.
number4=["num4"]; //number4 içinde str bir ifade taşıyan array object oldu.
number4=[{"id":1}]; //number4 bir json object oldu. key=id, value=1.




