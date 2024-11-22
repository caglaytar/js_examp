function tekSayilariToplama(dizi) {
    let toplam = 0;
    for (let i = 0; i < dizi.length; i++){
        if (dizi[i] % 2 !== 0){
            toplam += dizi[i];
            
        }
    }
    return toplam;
}

dizi = [1,2,36,5,9,11];
console.log("tek sayıların toplamı: " + tekSayilariToplama(dizi))