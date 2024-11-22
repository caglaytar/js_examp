function ciftSayi(dizi) {
    let ciftSayilar = [];
    for (let i = 0; i < dizi.length; i++) {
        if (dizi[i] % 2 === 0) {
            ciftSayilar.push(dizi[i]);
        }
    }
    return ciftSayilar;
}

let dizi = [2, 3, 8, 6, 7, 95, 30, 22, 25];
console.log("Çift sayılar: " + ciftSayi(dizi));
