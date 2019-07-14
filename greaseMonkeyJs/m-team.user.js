// ==UserScript==
// @name         TP Seeders 50+ or IMDB 8.0+
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://pt.m-team.cc/torrents.php*
// @match        https://tp.m-team.cc/torrents.php*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var threshold = 50;
    var imdbThreshold = 5.9;
    var imdbException = 7.9;

    var table = document.getElementById("form_torrent").getElementsByClassName("torrents")[0];
    for (var i = 1, row; row = table.rows[i]; i++) {
        var sd = row.cells[5].getElementsByTagName("a")[0];
        var imdb = row.cells[1].getElementsByTagName("a")[4];
        var lowSeed = (typeof sd === "undefined" || parseInt(sd.text.replace(/,/g, "")) < threshold);
        var lowImdb = (typeof imdb !== "undefined" && parseFloat(imdb.text) < imdbThreshold);
        var exception = (typeof imdb !== "undefined" && parseFloat(imdb.text) > imdbException);
        if (!exception && (lowSeed || lowImdb)) {
            row.style.display = 'none';
        }
    }

})();
