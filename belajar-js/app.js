// console.log('hello world');

// alert('sudah makan belom?');

// let role = prompt('masukkan role anda?');

// if (role == 'admin') {
//     console.log ('Anda bisa mengaksesnya');
// } else {
//     console.log (`${role} bukanlah admin!`);
// }

let day = Number (prompt ('Masukkan angka 1 sampai 7 :'));

switch (day) {
    case 1:
        console.log ('Monday');
        break;
    case 2:
        console.log ('Tuesday');
        break;
    case 3:
        console.log ('Wednesday');
        break;
    case 4:
        console.log ('Thursday');
        break;
    case 5:
        console.log ('Friday');
        break;
    case 6:
        console.log ('Saturday');
        break;
    case 7:
        console.log ('Sunday');
        break;
    default:
        console.log ('Input yang anda masukkan salah')
}