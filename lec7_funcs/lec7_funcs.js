var a = 3;
var b = 2.3;

function calc_sum(A, B) {
  return A + B;
}
function calc_multiple(A, B) {
  return A * B;
}
function againMessage() {
  console.log("bu fonksiyon tekrarlatildi.");
}
function lateMessage() {
  console.log("bu fonksiyon gec baslatildi.");
}

console.log("a+b= " + calc_sum(a, b));
console.log("a*b= " + calc_multiple(a, b));

//FONKSIYONLARI GEC BASLATMAK
setTimeout(function () {
  lateMessage();
}, 3000);

//FONKSIYONLARI TEKRARLATMAK
/**belirtilen sure boyunca fonksiyon surekli tekrarlatilir. */
setInterval(function () {
  againMessage();
}, 1000);
