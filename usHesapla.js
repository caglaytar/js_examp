function usHesapla(tabansayi, us) {
    return Math.pow(tabansayi, us);
}
var taban = 2;
var us = 3;
var sonuc = usHesapla(taban, us);
console.log(taban + " üzeri " + us + " = " + sonuc);