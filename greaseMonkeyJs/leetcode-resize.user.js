// ==UserScript==
// @name         Leetcode console resize
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://leetcode.com/problems/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var maxHeight = "200px";
    var target = "css-srz1f8-Value e5i1odf2";
    setTimeout(function(){
        var consolePanel = document.getElementsByClassName("custom-testcase__2ah7");
        console.log("consolePanel.length", consolePanel.length);
        if (consolePanel.length>0) {
            consolePanel[0].addEventListener("click", function(){
                setTimeout(function(){
                    var resultTab = document.getElementsByClassName("css-106l9hg-TabHeader e5i1odf4");
                    console.log("resultTab.length", resultTab.length);
                    if (resultTab.length>0) {
                        resultTab[0].addEventListener("click", function(){
                            var targets = document.getElementsByClassName(target);
                            console.log("targets.length", targets.length);
                            for (var i = 0; i<targets.length; i++) {
                                console.log("old H", i, targets[i].style.maxHeight);
                                targets[i].style.maxHeight=maxHeight;
                            }
                            console.log("resized");
                        });
                    }
                }, 1000);
            })
        }
    }, 4000);
})();
