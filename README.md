# book-store

Nama : Rendi Widjaya

####TAKS 1 ####

https://github.com/renwidjaya/API-BOOKS-STORE

####TAKS 2 ####

SELECT C.NAME
FROM CUSTOMER C
WHERE C.ID NOT IN (SELECT DISTINCT CUSTOMER_ID FROM ORDER_TABLE);

####TAKS 3 ####

SELECT nim, kode_matakuliah, COUNT( *) AS jumlah_duplikasi
FROM mahasiswa
GROUP BY nim, kode_matakuliah
HAVING COUNT(* ) > 1;
