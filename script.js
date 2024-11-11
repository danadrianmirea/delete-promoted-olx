// ==UserScript==
// @name         Delete promoted posts on OLX
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Deletes promoted posts on OLX
// @author       Dan Adrian Mirea
// @match        https://*.olx.ro/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function deletePromotedEntries() {
        var top_add = document.getElementById("div-gpt-ad-listing-sponsored-ad-first");
        if (top_add) {
            top_add.remove();
        }

        const allElements = document.querySelectorAll('*');
        const posts = Array.from(allElements).filter(element =>
            Array.from(element.attributes).some(attr =>
            attr.value.includes("card") || attr.value.includes("qa-advert-slot")));

        posts.forEach((post) => {
            if (post.textContent.toLowerCase().includes("promo")) {
                post.remove();
            }
        });
    }

      var intervalId = window.setInterval(function(){
        deletePromotedEntries();
    }, 1000);

})();
