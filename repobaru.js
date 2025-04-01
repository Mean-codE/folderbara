/**
 * 4.
 * a. Mengcopy nilai pada object
 * - Buat sebuah object A
 * - Ubah object A dengan menambahkan beberapa property baru
 * - Copy object tersebut kedalam object B
 * - Ubah object B dengan menambah property baru
 * - Ubah object A dengan menghapus property lama
 *
 * Tampilkan hasil dari object A dan object B (komputasi pada object A tidak akan
 * menghubah object B)
 *
 * b. Mengcopy object untuk mentransform object yang sama didalam function
 */

const objecta = {
  nama: "handy",
  kelas: "2",
  tahunLahir: 2000,
};

objecta.pekerjaan = "software engineer";
objecta.gaji = 10000000;

console.log(objecta);

const objectb = {
  ...objecta,
  nama: "budi",
};

console.log(objectb);

delete objecta.kelas;
console.log(objecta);

const copyobject = (objectdata, ...rest) => {
  return { ...objectdata, hobby: rest[0], kesukaan: rest[1] };
};

const object3 = copyobject(objecta, "mancing", "makan");
console.log(object3);

const baru = "halo ini changes baru";
