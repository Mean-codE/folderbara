//*
//cara inisialisasi atau pembuatan repostiory local harus berada di folder yang ingin dibuat
//cara masukan file ke dalam stagin area atau area sementara adalah dengan git add
//cara memastikan perubahan yang terjadi pada file ke record harus plus save data changes setelah itu kasih commit dan bisa langusng ke git push origin main

// 1. Inisialisasi Repository
// git init
// Digunakan untuk menginisialisasi repository Git di dalam folder.

// 2. Melihat Status Repository
// git status
// Digunakan untuk melihat status file di repository (apakah sudah di-track, belum di-track, atau ada perubahan yang belum di-commit).

// 3. Menambahkan File ke Staging Area
// git add <file>
// Menambahkan file ke staging area untuk siap di-commit. Bisa menggunakan `.` untuk menambahkan semua file yang ada di folder.

// 4. Commit Perubahan
// git commit -m "<message>"
// Commit perubahan yang ada di staging area dengan pesan yang menjelaskan perubahan.

// 5. Melihat Riwayat Commit
// git log
// Menampilkan riwayat commit, dengan detail seperti commit hash, author, tanggal, dan pesan commit.

// 6. Melihat Detail Commit
// git show <commit_hash>
// Menampilkan detail perubahan yang terjadi pada commit tertentu, berdasarkan commit hash yang diberikan.

// 7. Melihat Ringkasan Perubahan
// git show --stat <commit_hash>
// Menampilkan ringkasan perubahan (jumlah file yang diubah, berapa banyak baris yang ditambah/dihapus) pada commit tertentu.

// 8. Menghapus File dari Staging Area
// git reset <file>
// Menghapus file dari staging area (tidak membatalkan perubahan, hanya mengeluarkan file dari staging).

// 9. Melihat Remote Repository
// git remote -v
// Melihat remote repository yang terhubung dengan repository lokal.

// 10. Menambahkan Remote Repository (GitHub)
// git remote add origin <url>
// Menambahkan remote repository (misalnya GitHub) ke repository lokal.

// 11. Mengubah URL Remote Repository
// git remote set-url origin <url>
// Mengubah URL remote repository, misalnya dari HTTPS ke SSH.

// 12. Mengirim Perubahan ke Remote Repository (Push)
// git push origin <branch_name>
// Mengirim commit dari branch lokal ke remote repository.

// 13. Mengecek Koneksi SSH
// ssh -T git@github.com
// Mengecek apakah koneksi SSH berhasil dan terautentikasi dengan GitHub.

// 14. Membuat SSH Key
// ssh-keygen -t ed25519 -C "email@example.com"
// Membuat SSH key untuk autentikasi GitHub (menghubungkan laptop ke GitHub menggunakan SSH).

// 15. Menghapus Remote Repository
// git remote remove origin
// Menghapus remote repository yang terhubung dengan repository lokal.

// 1. Reset commit terakhir dan kembalikan perubahan ke staging area
// Perintah ini akan mengembalikan commit terakhir ke staging area
// git reset --soft HEAD~1;

// 2. Unstage file yang tidak ingin dipush
// Misalnya, jika ingin mengeluarkan "soal3.js" dari staging area
// git reset soal3.js;

// 3. Commit ulang perubahan yang tersisa
// Setelah mengeluarkan file yang tidak diinginkan dari staging, lakukan commit ulang
// git commit -m "Menambahkan soal1.js dan soal2.js";

// 4. Push perubahan yang sudah di-commit
// Mengirimkan perubahan ke remote repository, misalnya ke branch "main"
// git push origin main;

// 5. Jika ingin, commit file lain seperti soal3.js di kemudian hari
// Menambahkan file soal3.js kembali ke staging area dan melakukan commit
// git add soal3.js;
// git commit -m "Menambahkan soal3.js";
// git push origin main;

//ini perubahan/

//ini perubahan terkahir ke github
