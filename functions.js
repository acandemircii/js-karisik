//Random Sayı üretme --> Random fonksiyondur.Bu fonks. 1den küçük sayıları üretir o yüzden sınır olan sayı ile çarpılır.
//Ceil fonks. bu sayıları bir üste yuvarlar.




var sayi1=Math.ceil(Math.random()*49)
var sayi2=Math.ceil(Math.random()*49)
var sayi3=Math.ceil(Math.random()*49)
var sayi4=Math.ceil(Math.random()*49)
var sayi5=Math.ceil(Math.random()*49)
var sayi6=Math.ceil(Math.random()*49)


console.log('Kolon :' + sayi1 + ' '+sayi2+ ' '+ sayi3 +' ' 
+ sayi4 +' '+sayi5+ ' '+ sayi6
)

//Bu bir fonksiyondur.Return olmadan fonksiyonlar çalışmaz.
//Fonksiyonlar çağrılmadan kendi kendine gelmez.
//Fonksiyonun içinde tanımlanan değişkenler dışarıdan çekilemez.Ama Dışarıda tanımlanan değişkenler
//fonksiyonun içinde çekilebilir.

function sayiUret(){
    
    return Math.ceil(Math.random()*49)
}

var sayi7 = sayiUret()
 console.log('kolon :' + sayi7)

