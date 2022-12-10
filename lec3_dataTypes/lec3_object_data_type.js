/**OBJECT VERİ TÜRÜ:
 *
 * obje veri türü, süslü parantezler ile tanımlanmaktadır. mesela;
 *
 * obj_veri{
 *     "key1":value1,
 *     "key2":value2
 *         }
 *
 * key: değişken adı
 * value:değişkenin değeri
 * 
 * 
 */


/**Aşağıda students diye bir obje verisi yaratalım.
 * Bu yaratılan objeler fonksiyonlar ile de kullanılabilir. 
 */
var students = {
  school_name: ["x", "y", "z"],
  student: [
    {
      name: "Ali",
      no: 1,
    },
    {
      name: "Ayşe",
      no: 2,
    },
  ],
};

console.table("students objesi",students);

/**Obje verisi içinde, sadece student'deki verilere ulaşalım: */

console.log("Öğrenci adları ve numaraları:",students.student);
