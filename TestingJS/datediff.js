///Datumsdifferenz berechnen
/// Autor: Adrian Spycher
/// Datum: 06.02.2020
var date1 = new Date()
const date2 = new Date(2021,04,25)

const difftime = Math.abs (date2 - date1) ;
const diffDays = Math.ceil (difftime / (1000 * 60 *60 * 24));


alert("Der Artikel ist noch " + diffDays + "Tage haltbar");
