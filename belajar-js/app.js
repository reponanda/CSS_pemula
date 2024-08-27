// console.log('hello world');

// alert('sudah makan belom?');

// let role = prompt('masukkan role anda?');

// if (role == 'admin') {
//     console.log ('Anda bisa mengaksesnya');
// } else {
//     console.log (`${role} bukanlah admin!`);
// }


// switch pengganti if
// let day = Number (prompt ('Masukkan angka 1 sampai 7 :'));

// switch (day) {
//     case 1:
//         console.log ('Monday');
//         break;
//     case 2:
//         console.log ('Tuesday');
//         break;
//     case 3:
//         console.log ('Wednesday');
//         break;
//     case 4:
//         console.log ('Thursday');
//         break;
//     case 5:
//         console.log ('Friday');
//         break;
//     case 6:
//         console.log ('Saturday');
//         break;
//     case 7:
//         console.log ('Sunday');
//         break;
//     default:
//         console.log ('Input yang anda masukkan salah')
// }

// // lexical scope
// // function di dalam function
// function lamarKerja() { // ketika ingin mendapatkan output maka function orangDalam() juga harus dipanggil
//     const jabatan = 'programmer';

//     function orangDalam() { // fungsi ini hanya bisa dipanggil di dalam scope lamarKerja() saja
//         let kenalan = `orang dalam bisa memasukkan ${jabatan}`;
//         console.log (kenalan); 
//     }

//     orangDalam(); 
// }

// // function expressions
// const perpangkatan = function (nilai) {
//     return nilai*nilai;
// }

// perpangkatan(5);

// // function sebagai argumen dari function lain
// function duaKali(func) {
//     func();
//     func();
// }

// function lemparDadu() {
//     const hasil = Math.floor(Math.random() * 6) + 1;
//     console.log(hasil);
// }

// // Function bernilai balik function
// function hasilnyaAdalahFunction() {
//     const rand = Math.random();

//     if (rand > 0.1) {
        
//         return function() {
//             console.log('Selamat angkanya lebih besar');
//         };

//     } else {

//         return
//     }
// }