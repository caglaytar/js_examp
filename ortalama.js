function ortalama(dizi){
    toplam=0;
    for (i=0; i<dizi.length;i++){
        toplam +=dizi[i];
    }
    return toplam/dizi.length;
}

dizi = [1,2,36,55,98]
console.log(ortalama(dizi));