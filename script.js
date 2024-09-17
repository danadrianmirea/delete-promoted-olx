// ==UserScript==
// @name         Delete promoted posts on olx
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Deletes pomoted posts on olx
// @author       Dan Adrian Mirea
// @match        https://*.olx.ro/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=linkedin.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function deletePromotedEntries() {
        var posts = document.querySelectorAll(".css-1sw7q4x");
        let i = 0;
        while (i < posts.length) {
            if(posts[i].textContent.toLowerCase().includes("promo"))
            {
                //posts[i].style.opacity = 0.2;
                posts[i].remove();
            }
            i++;
        }
    }

    var intervalId = window.setInterval(function(){
        deletePromotedEntries();
    }, 1000);


})();
