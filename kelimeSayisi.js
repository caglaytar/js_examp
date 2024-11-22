function kelimeSayisiniBul(cumle) {
    return cumle.split(" ").length;
}
cumle = "Bu bir örnek cümledir.";
console.log("Cümledeki kelime sayısı: " + kelimeSayisiniBul(cumle));
