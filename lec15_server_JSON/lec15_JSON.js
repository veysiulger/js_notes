/**JSON: Javascript object notation. Js nesne gösterimi.
 * Dış kaynak verilerini kullanmak için json veri modeli kullanılır.
 * Js'den bağımsız olarak tüm programlama dillerinde vardır.
 * JSON ile veri transferi, veri depolama gibi işlemler yapılabilir.
 *
 * süslü parantezler objeyi tutarken, köşeli parantezler dizidir.
 */

let datas = {
  users: [
    { name: "user1", email: "user1@test.com" },
    { name: "user2", email: "user2@test.com" },
    { name: "user3", email: "user3@test.com" },
  ],
};

for (user of datas.users) {
  console.log(user.email);
}
