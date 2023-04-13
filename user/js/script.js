
// -------------------------------------------------------------------------------
// --------------------------------WAKTU----------------------------------------
// -------------------------------------------------------------------------------
// Waktu Sekarang
var today = new Date();
var tanggal = today.toLocaleDateString();

// Menampilkan tanggal pada elemen dengan id 'tanggal'
document.getElementById("tanggal").innerHTML = "Tanggal: " + tanggal
