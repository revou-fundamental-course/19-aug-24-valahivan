
var person = prompt('Masukan Nama anda');
document.getElementById('person').innerHTML = person;

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n){
    showDivs(slideIndex += n);
}

function showDivs(n){
    var i;
    var imgList = document.getElementsByClassName('img-slideShow');
    if(n > imgList.length) slideIndex = 1;
     else if(n < imgList.length) slideIndex = imgList.length;

     for(i = 0; i < imgList.length; i++){
         imgList[i].style.display = 'none';
     }

    imgList[slideIndex - 1].style.display = 'block';
}

// setInterval(() => {
//     plusDivs(1);
// }, 1000);

function formValidation(){
    const nama = document.forms['message-form'] ['nama'].value;
    const tLahir = document.forms['message-form']['tLahir'].value;
    const jKelamin = document.forms['message-form']['jKelamin'].value;
    const pesan = document.forms['message-form']['pesan'].value;

    if(nama == '' || tLahir == '' || jKelamin == '' || pesan == ''){
        document.getElementById('respon').innerHTML = 'Tidak boleh kosong!!';

        return false;
    }

     document.getElementById('respon').innerHTML = '';
     alert('Data berhasil ditambahkan');
     
     output(nama, tLahir, pesan, jKelamin);
     return false;
}

function output(nama, tLahir, pesan, jKelamin){
    document.getElementById('sender-full-name').innerHTML = nama;
    document.getElementById('sender-date').innerHTML = tLahir;
    document.getElementById('sender-jKelamin').innerHTML = jKelamin;
    document.getElementById('sender-pesan').innerHTML = pesan;
}