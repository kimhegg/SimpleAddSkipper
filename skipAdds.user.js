// ==UserScript==
// @name         SkipAdds
// @namespace    http://tampermonkey.net/
// @version      2.4
// @description  Skip adds for webpages in norway
// @author       kimhegg
// @match        https://tv.vg.no/*
// @match        https://www.vg.no/*
// @match        https://www.tv2.no/video/*
// @match        https://www.dagbladet.no/video/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=vg.no
// @grant        none
// @downloadURL https://github.com/kimhegg/SimpleAddSkipper/raw/main/skipAdds.user.js
// @updateURL https://githubt.com/kimhegg/SimpleAddSkipper/raw/main/skipAdds.user.js
// ==/UserScript==

(function()
 {
    const skip_adds = true;

    if(skip_adds) skipAdds();
  
    function skipAdds()
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
            
            }
             const tv2_ads= document.getElementById('ad-container');
            const db_ads = document.getElementsByClassName('videoAdUi');
             if(tv2_ads || db_ads){
                document.querySelector('iframe')?.remove();
                document.getElementById('videoAdUi')?.remove();
                console.log("Other ads removed");
              }
         }
         , 50)
    }
})();
