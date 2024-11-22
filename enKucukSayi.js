function enKucukSayi(dizi) {
    return Math.min(...dizi);
}

let dizi = [10, 5, 8, 3, 15, 2];
console.log("Dizideki en küçük sayı: " + enKucukSayi(dizi));