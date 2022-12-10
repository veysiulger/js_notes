//HATA YONETIMI

/**yazilan programda, runtime hatasi oldugu zaman,
 * program ya durur, ya da fatal error verir.
 *
 * olusan hatayi ekrana, console.error()
 * metodu ile yazdirabiliriz.
 *
 * mantiksal hata disinda, diger hatalari yakalamak
 * icin, idealdir.
 */
var array = [1, 2, 3];

calc(array);
multiple(array);
operation(array);

// TRY-CATCH ANAHTARLARI
function calc(array) {
  try {
    var sum = array[2] + array[0];
    console.log(sum);
  } catch {
    console.error("hata!");
  }
}
// HATA OBJESI
/** hata objesi, js de, hatanin ne hatasi oldugunu ekrana yazdirir.
 * error objesinin 3 farkli ozelligi vardir; name, message, stack
 */
function multiple(array) {
  try {
    calc_number(array);
  } catch (error) {
    console.error(
      "hata olustu. Hata =>",
      error.name,
      error.message,
      error.stack
    );
  }
}

// FINALY ANAHTARI
/**kod hatali veya hatasiz, olsa da, calistirmak istenirse,
 * finally eklenir.
 */
function operation(array) {
  try {
    multiple_number(array);
  } catch (error) {
    console.error("burada hata olustu. hata => " + error);
  } finally {
    console.log("islem bitti...");
  }
}

//THROW NEW ERROR (hata fincitmak) -> ARASTIR!!!
