// ==UserScript==
// @name         TP Seeders 100+
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://tp.m-team.cc/torrents.php*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var threshold = 100;
    var table = document.getElementById("form_torrent").getElementsByClassName("torrents")[0];
    for (var i = 1, row; row = table.rows[i]; i++) {
        var sd = row.cells[5].getElementsByTagName("a")[0];
        if (typeof sd === "undefined" || parseInt(sd.text) < threshold) {
            row.style.display = 'none';
        }
    }

})();
