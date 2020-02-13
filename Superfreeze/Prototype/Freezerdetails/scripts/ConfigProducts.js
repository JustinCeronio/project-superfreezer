
function showInfo(ident) {
  document.getElementById("ZoneText").style.display = "block";
  document.getElementById("TZoneID").textContent = 'Zone ' + ident;
}


// Produktinventar

  //Produkt entfernen
  function removeProd(){
    var rowNumber = prompt("Geben Sie die Produkt ID des zu löschenden Produkts ein");
    document.getElementById(rowNumber).remove();
    alert("Zeile " + rowNumber + " wurde entfernt.");
  }

  var incrementId = 0;
  //Produkt hinzufügen
  function addProd(){
    incrementId++;
    var prodName = prompt('Wie nennt sich das neue Produkt?');
    var prodAnzahl = prompt('Wie viele Exemplare des Produkts möchten Sie registrieren?')
    var prodPreis = prompt('Wie viel kostet das Produkt pro Stück?')
    var prodADatum = prompt('Bitte geben Sie das Verfalldatum ')
    var table = document.getElementById("t1");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    cell1.innerHTML = prodName;
    cell2.innerHTML = prodAnzahl;
    cell3.innerHTML = prodPreis;
    cell4.innerHTML = prodADatum;
    cell5.innerHTML = incrementId;

    row.id = incrementId;
    alert('Sie haben erfolgreich das Produkt ' + prodName + ' hinzugefügt.');
    return incrementId;
  }
