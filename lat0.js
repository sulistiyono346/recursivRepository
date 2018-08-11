function makan(waktu) {
  if (waktu===0) {
    return 0
  }
  if (waktu<=10) {
    return 1
  }
  if (waktu>=15) {
    var time=waktu-15
    var count=" "
    count+="A"
  }

return count+makan(waktu)
}
console.log(makan(66));
console.log(makan(100));
console.log(makan(90));
console.log(makan(10));
console.log(makan(0));
