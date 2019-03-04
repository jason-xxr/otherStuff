// ==UserScript==
// @name         Leetcode console resize
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://leetcode.com/problems/*
// @grant        none
// @require      https://raw.githubusercontent.com/mlcheng/js-toast/master/toast.js
// ==/UserScript==

(function() {
    'use strict';
    var maxInputHeight = "200px";
    var maxPanelHeight = "450px";
    var toast = new iqwerty.toast.Toast();

    setTimeout(function(){
        var consolePanel = document.getElementsByClassName("custom-testcase__2ah7");
        console.log("consolePanel.length", consolePanel.length);
        
        if (consolePanel.length>0) {
            toast.setText('Console panel captured.')
                .setDuration(1000)
                .show();
            consolePanel[0].addEventListener("click", function(){
                setTimeout(function(){
                    var resultTab = document.getElementsByClassName("css-106l9hg-TabHeader e5i1odf4");
                    console.log("resultTab.length", resultTab.length);
                    if (resultTab.length>0) {
                        toast.setText('Activated.')
                            .setDuration(500)
                            .show();
                        resultTab[0].addEventListener("click", function(){
                            var resultPanel = document.getElementsByClassName("css-187w515-TabContent e5i1odf5");
                            console.log("resultPanel.length", resultPanel.length);
                            if (resultPanel.length>0) {
                                console.log("old box maxHeight", i, resultPanel[0].style.maxHeight);
                                resultPanel[0].style.maxHeight=maxPanelHeight;
                            }
                            var targets = document.getElementsByClassName("css-srz1f8-Value e5i1odf2");
                            console.log("targets.length", targets.length);
                            for (var i = 0; i<targets.length; i++) {
                                console.log("old input maxHeight", i, targets[i].style.maxHeight);
                                targets[i].style.maxHeight=maxInputHeight;
                            }
                            console.log("resized");
                        });
                    } else {
                        toast.setText('Result tab not found, please reload.')
                            .setDuration(1000)
                            .show();
                    }
                }, 1000);
            })
        } else {
            toast.setText('Console panel not found, please reload')
                .setDuration(3000)
                .show();
        }
    }, 5000);
})();
