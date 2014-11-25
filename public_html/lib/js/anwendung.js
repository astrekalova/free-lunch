/* 
 * JSApp_01 - Beispiel für Anwendungsstruktur
 * anwendung.js
 * 
 * Dieses Skript enthält - abgetrennt von den Bibliotheken - die eigentliche
 * Anwendungslogik. 
 * 
 */

/**
 * Konstruktor-Funktion für die Anwendung
 * @returns {undefined}
 */
function MeinAnwendung() {
    // Initialisierung, ausgelagert, aber hier aufgerufen (nicht explizit).
    this.init();
}

/**
 * Ausgelagerte Initialisierung der Anwendungslogik
 * @returns {undefined}
 */
MeinAnwendung.prototype.init = function(){
  console.log('MeinAnwendung.init');
  // z.B. Bindung der DOM-Elemente an Event-Handler. 
  // Diese Handler wären entweder Methoden des app-Objekts oder weiterer 
  // Hilfsobjekte, evtl. auch anonyme Funktionen
  document.getElementById("container").innerHTML = "App geladen!";
};

// Start der Initialisierung - wenn das DOM geladen wurde
window.onload = function (event){
  console.log('window.onload');
  
  var app = new MeinAnwendung();
  
  // Falls gefordert(!): Anwendungsobjekt ebenfalls in den globalen Scope legen: 
  window.app = app;
};