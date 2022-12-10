var date = new Date();
var dateString = "";
switch (date.getDay()) {
  case 0:
    dateString = "pazar";
    break;
  case 1:
    dateString = "pazartesi";
    break;
  case 2:
    dateString = "sali";
    break;
  case 3:
    dateString = "carsamba";
    break;
  case 4:
    dateString = "persembe";
    break;
  case 5:
    dateString = "cuma";
    break;
  case 6:
    dateString = "cumartesi";
    break;
  default:
    dateString = "";
    break;
}
console.log(dateString);
