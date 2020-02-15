// setTimeout()

// const tes = setTimeout(function(){
// 	console.log('Hello Jaenudin');}, 5000);


// const tombol = document.getElementById('tombol');
// tombol.addEventListener('click', function(){
// 	clearTimeout(tes);
// 	console.log('selesai');
// });



// setInterval()
// const tes = setInterval(function(){

// 	console.log('Hellp Jaenudin!');

// },2000);

// const tombol = document.getElementById('tombol');
// tombol.addEventListener('click', function(){
// 	clearInterval(tes);
// 	console.log('selesai');
// });


// program hitung mundur
const tanggalTujuan = new Date('Nov 21, 2019 05:56:00').getTime();

const hitungMundur = setInterval(function() {

const sekarang = new Date().getTime();

const selisih = tanggalTujuan- sekarang;

const hari =Math.floor( selisih / (1000 *60 * 60 * 24));

const jam = Math.floor( selisih % (1000 * 60 * 60 * 24) / (1000 * 60 *60));

const menit = Math.floor( selisih % (1000 * 60 * 60) / (1000 * 60));

const detik = Math.floor( selisih % (1000 * 60) / (1000));

const teks = document.getElementById('teks');

// teks.innerHTML = 'Anda Tinggal :' + hari + ' hari ' + jam + ' jam ' + menit + ' menit ' + detik + ' detik lagi ';
teks.innerHTML =''  + jam + ' : ' + menit + ' :  ' + detik + '';
// teks.innerHTML = 'Kode bayar Anda AKan Berakhir Pada '  + jam + ' : ' + menit + ' :  ' + detik + ' detik lagi ';
// if(selisih < 0 ){

// 		clearInterval(hitungMundur);
// 		teks.innerHTML = ' Anda habis!';
// 	}
	

}, 1000);



// console.log(sekarang);
// console.log(tanggalTujuan);

// console.log(selisih);
// console.log(hari);
// console.log(jam);
// console.log(menit);
// console.log(detik);