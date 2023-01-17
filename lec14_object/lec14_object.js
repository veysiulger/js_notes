/**Object veri tipi
 * Ecmascript ile modüler programlama desteği gelmeden önce, Object veri nesnesi ile
 * OOP konsepti basit olarak JS'de vardı. Lakin, OOP programlama JS'de yoktur! kapsülleme,
 * inheritance, sarmalama gibi teknikler yoktur. Lakin basit seviyede de olsa, OOP konsepti
 * kurulabilmektedir. Kurulan bu basit OOP günümüzde eski bir yaklaşımdır.
 *
 * User isminde objemiz olursa, email, age, name gibi alt değişkenlere
 * sahip olmaktadır.
 *  */
/**
 * Object içerisinde metot tanımlanabilmektedir.
 * Object nesnesi {} iletanımlanır.
 *
 * new ile yeni nesne oluşturulur.
 */

var book = new Object();

book.bookName = "test_book";
book.bookDate = 1234;
book.bookPages = 30;

/* user isimli bir nesne oluşturduk. username, email, age gibi değişkenler tanımnladık.
Bu değişkenlere properties denir. Bu yöntem kullanışsızdır, çünkü tek seferlik bir kullanımdır.*/

/*********         THIS KULLANIMI VE NESNE YAPILANDIRMASI       ******************/

function USER(username, email, age) {
  this.username = username;
  this.email = email;
  this.age;

  /**Burada abject'i bir fonksiyon gibi yazdık. yani statik değer kullanmak yerine,
   * her object oluşturulduğunda, farklı değerler, obje tarafından kullanılabilmektedir.
   * Aslında biz burada bir class tanımlamış olduk.
   */
}

var user1 = new USER("test_user","test@test.com",20);
console.log("username: "+user1.username);

 
/**Aslında burada basit seviyede de olsa oop yapısı kurmuş olduk. Yani temel mantık,
 * object nesnesini bir class gibi kullanmaktır. 
 */