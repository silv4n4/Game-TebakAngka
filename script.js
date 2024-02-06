alert("GAME TEBAK ANGKA \n Pilih angka 1-10 \n Kamu punya 3 kesempatan");

const angkaBenar = Math.floor(Math.random() * 10) + 1;

for (let nyawa = 3; nyawa >= 1; nyawa --) {
    const tebakanUser = prompt("Masukkan tebakan angka");

    if (tebakanUser == angkaBenar) { 
        // validasi check input benar
       alert(`Tebakan anda benar! \n Angka yang benar adalah ${angkaBenar}`); 
       break;
    } else if (tebakanUser > angkaBenar) { 
        // validasi check input lebih besar
        alert(`Tebakan anda terlalu TINGGI! \n Anda masih punya ${nyawa} kesempatan`);  
    } else if (tebakanUser < angkaBenar) { 
        // validasi check input lebih kecil
        alert(`Tebakan anda terlalu RENDAH! \n Anda masih punya ${nyawa} kesempatan`);
    }
    
    
}
if (nyawa == 1) {
    alert(`Anda Gagal! \n Angka yang benar adalah ${angkabenar}`);
}