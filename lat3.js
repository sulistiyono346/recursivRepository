function totalDigitRekursif(angka) {
  var stringangka=String(angka)
  if (stringangka.length==1) {
    return Number(stringangka[0]);
  }
    var angkaPertama=Number(stringangka[0])
    var selisih= stringangka.slice(1)

  return angkaPertama + totalDigitRekursif(Number(selisih))
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5

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
