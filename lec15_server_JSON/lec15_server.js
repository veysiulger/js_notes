/********   FETCH API   ******************
 *
 * JS sunuculara istek gönderip alabilir. Form üzerinden bilgi
 * gönderip alabilir.
 *
 * fetch() API'si http isteklerine erişmeyi sağlar. Asenkron yapılı
 * olduğu için, modern ve kolaydır.
 *
 * Fetch api ile yapabildiğimiz şey, bir veri sunucudan çıktıktan
 * sonrasında işlem yapabilmeli.
 *
 */

//Veri çekme örneği:
 

fetch("https://reqres.in/api/users")
  .then((response) => response.json())
  .then((data) => console.log(data));

fetch("https://reqres.in/api/users")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
