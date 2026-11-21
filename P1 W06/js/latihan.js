// Latihan JavaScript Dasar - Minggu 06
// Kalkulator nilai rapor di Console
// 1. Pesan pertama ke Console
console.log("Halo, saya Kendio!");
console.log("Ini latihan JavaScript pertamaku.");

// 2. Data siswa
const nama = "KENDIO JUAN RENJIRO PUTRA";
const kelas = "X RPL B";
const kkm = 75;
let nilaiTugas = 85;
let nilaiUts = 78;
let nilaiUas = 89;
let kehadiran = 90;

console.log(`Nama: ${nama}, kelas ${kelas}`);
console.log(`Nilai tugas ${nilaiTugas}, UTS ${nilaiUts}, UAS ${nilaiUas}`);

// 3. Hasil nilai Andi
const rataRata = (nilaiTugas + nilaiUts + nilaiUas) / 3;
const lulus = rataRata >= kkm;
const dapatSertifikat = lulus && kehadiran >= 80;
console.log(`Rata-rata nilai: ${rataRata}`);
console.log(`Lulus KKM: ${lulus}`);
console.log(`Dapat sertifikat: ${dapatSertifikat}`);
let nilai = 60;
if (nilai === 100) {
console.log("Nilai sempurna!");
}
console.log(`Isi nilai sekarang: ${nilai}`);

// Predikat dengan if, else if, dan else
let predikatNilai;
if (rataRata >= 90) {
predikatNilai = "A";
} else if (rataRata >= 80) {
predikatNilai = "B";
} else if (rataRata >= 70) {
predikatNilai = "C";
} else {
predikatNilai = "D";
}
console.log(`Predikat: ${predikatNilai}`);

// Pesan kelulusan
if (lulus) {
console.log("Selamat, kamu lulus KKM!");
} else {
console.log("Tetap semangat, ikuti remedial ya.");
}
function sapa(namaSiswa) {
console.log(`Halo, ${namaSiswa}! Selamat belajar JavaScript.`);
}
sapa("Andi");
sapa("Sinta");
sapa("Budi");
function tambahLog(a, b) {
console.log(a + b);
}
function tambahReturn(a, b) {
return a + b;
}
const hasil1 = tambahLog(2, 3);
const hasil2 = tambahReturn(2, 3);
console.log(`hasil1 = ${hasil1}`);
console.log(`hasil2 = ${hasil2}`);

// 3. Fungsi
const hitungRataRata = (tugas, uts, uas) => (tugas + uts + uas) / 3;
function predikat(nilai) {
if (nilai >= 90) {
return "A";
} else if (nilai >= 80) {
return "B";
} else if (nilai >= 70) {
return "C";
} else {
return "D";
}
}

// 4. Hasil nilai Andi
const rataRata = hitungRataRata(nilaiTugas, nilaiUts, nilaiUas);
const lulus = rataRata >= kkm;
const dapatSertifikat = lulus && kehadiran >= 80;
console.log(`Rata-rata nilai: ${rataRata}`);
console.log(`Predikat: ${predikat(rataRata)}`);
console.log(`Lulus KKM: ${lulus}`);
console.log(`Dapat sertifikat: ${dapatSertifikat}`);
// Pesan kelulusan
if (lulus) {
console.log("Selamat, kamu lulus KKM!");
} else {
console.log("Tetap semangat, ikuti remedial ya.");
}