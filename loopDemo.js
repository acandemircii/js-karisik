//8 tane 6 lık sayı üreten fonksiyon.
//iç içe döngülerde indeksi tutan i asla iki fonksiyona birden verilmez.Sonsuz döngü oluşur.
function sayiUret() {

    return Math.ceil(Math.random() * 49)
}
for (i = 1; i <= 8; i++) {

    console.log(i + '.KOLON')

    for (j = 1; j <= 6; j++) {

        console.log(sayiUret())
    }

}
