// ==UserScript==
// @name         Jadisco kick player
// @namespace    http://tampermonkey.net/
// @version      2024-09-05
// @description  replace player with kick
// @author       romekb
// @match        https://jadisco.pl/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=jadisco.pl
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const iframe = Array.from(document.getElementsByTagName('iframe')).find(el => el.src.includes('youtube'));
    if (!iframe) {
        console.log('YT player not found!');
        return;
    }
    iframe.setAttribute('src', 'https://player.kick.com/wonziu');
    iframe.setAttribute('frameborder', 0);
    iframe.setAttribute('scrolling', 'no');
    iframe.setAttribute('allowfullscreen', 'true');
})();
