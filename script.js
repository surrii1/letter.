function scrollBooking(){

document.getElementById("booking")
.scrollIntoView();

}



function pilihLayanan(nama,harga){

document.getElementById("layananInput")
.value=nama;

document.getElementById("hargaInput")
.value="Rp "+harga;

}



function booking(){

let nama=document.getElementById("nama").value;

let layanan=document.getElementById("layananInput").value;

let tanggal=document.getElementById("tanggal").value;

let jam=document.getElementById("jam").value;


if(nama=="" || layanan==""){

alert("Isi data dulu");

}else{

alert("Booking berhasil atas nama "+nama);

}

}
