// ==UserScript==
// @name         Hide Members-Only Videos
// @namespace    http://tampermonkey.net/
// @version      1.3
// @description  Hides YouTube members-only videos from all sections including experimental layouts
// @author       NotToxel
// @match        https://www.youtube.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    function hideMembersOnlyVideos() {
        const allVideoElements = document.querySelectorAll('ytd-rich-item-renderer, ytd-video-renderer, ytd-grid-video-renderer, yt-lockup-view-model');

        allVideoElements.forEach(video => {
            if (!video.dataset.cbChecked) {
                const badgeTexts = video.querySelectorAll('*');
                for (let el of badgeTexts) {
                    if (el.textContent && el.textContent.trim().includes('Members only')) {
                        video.style.display = 'none';
                        break;
                    }
                }
                video.dataset.cbChecked = 'true'; // Prevent re-checking
            }
        });
    }

    const observer = new MutationObserver(() => {
        hideMembersOnlyVideos();
    });

    observer.observe(document.body, { childList: true, subtree: true });
    window.addEventListener('scroll', hideMembersOnlyVideos);
    hideMembersOnlyVideos();
})();
