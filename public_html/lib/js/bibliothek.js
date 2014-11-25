/*
 * JSApp_01 - Beispiel für Anwendungsstruktur
 * bibliothek.js
 *
 * Dieses Skript soll ausgelagerte Bibliotheken enthalten, v.a.
 * - Konstruktor-Funktionen, in diesem Sinne Typ-Definitionen
 * - Initialisierung muss gekapselt werden
 * - Funktionalität muss im globalen Scope bereitgestellt werden
 */

(function(){
    // Bibliotheks-Schnittstellen-Objekt erzeugen
    var libObj = {};

    libObj.printObject = function(o){
        for (var key in o) {
            console.log('Feld ', key, "=", o[key]);
        }
    };

    // Bereitstellen im globalen Scope:
    window.debugLib = libObj;
}());



