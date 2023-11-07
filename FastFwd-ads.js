// ==UserScript==
// @name         Fastfwd vg-ads
// @namespace    http://tampermonkey.net/
// @version      2.1
// @description  Fast forwards vg-tv ads
// @author       kimhegg
// @match        https://tv.vg.no/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=vg.no
// @updateURL    https://github.com/kimhegg/fastfwdads/blob/main/FastFwd-ads.js
// @downloadURL  https://github.com/kimhegg/fastfwdads/blob/main/FastFwd-ads.js
// @grant        none
// ==/UserScript==

(function()
 {
    //
    //      Config
    //

    // Enable The Adblocker
    const adblocker = true;

    // Enable debug messages into the console
    const debug = true;

    //
    //      CODE
    //

    if (debug) console.log("FastFwd ads: Script started");
    

    if(adblocker) addblocker();
  
    function addblocker()
    {
        setInterval(() =>
                    {
 
            const vg_ad = [...document.querySelectorAll('.vgp-ad-layout')][0];
            const vg_mainContainer = document.getElementById('player');
            const vg_sidAd = document.querySelector('vgp-ad-layout');
            if(vg_ad){
            const video = document.querySelector('video');
                video.playbackRate = 10;
                video.volume = 0;
                //localStorage.setItem('pulse4test', 'check');
                var currentTime = Date.now();
                var newTime = Number(currentTime);
                if(typeof(newTime == 'number')){
                   localStorage.setItem('youbora.dataTime', currentTime);
                   sessionStorage.setItem('youbora.dataTime', currentTime);

                }
            
            }
         }
         , 50)
    }
})();
