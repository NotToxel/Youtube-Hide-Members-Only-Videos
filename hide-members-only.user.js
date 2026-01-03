// ==UserScript==
// @name         Hide Members-Only & Members-First Videos
// @namespace    http://tampermonkey.net/
// @version      1.5
// @description  Hides YouTube members-only and members-first videos from all sections
// @author       Caleb Lim (Updated)
// @match        https://www.youtube.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    function hideMembersVideos() {
        // Updated selectors to include more possible video containers
        const allVideoElements = document.querySelectorAll('ytd-rich-item-renderer, ytd-video-renderer, ytd-grid-video-renderer, yt-lockup-view-model, ytd-compact-video-renderer');

        allVideoElements.forEach(video => {
            // Skip if we've already confirmed this is a normal video or hidden it
            if (video.dataset.cbChecked) return;

            const textContent = video.textContent || "";
            
            // 1. Check for both "Members only" and "Members first"
            // We use "Members " to catch both variations
            if (textContent.includes('Members only') || textContent.includes('Members first')) {
                video.style.display = 'none';
                video.dataset.cbChecked = 'true'; // Permanently hide and mark
                return;
            }

            // 2. STABILITY CHECK:
            // YouTube loads badges (Members Only) and metadata (Views/Date) separately.
            // We only mark a video as "Checked" (Safe) if we can see the metadata line.
            // This ensures we don't accidentally mark a video as "Safe" before the "Members" badge has loaded.
            const hasMetadata = video.querySelector('#metadata-line, .ytd-video-meta-block, #video-info');
            
            if (hasMetadata) {
                // If we reached here, there is metadata but NO members text found above.
                // It is now safe to mark this video as checked.
                video.dataset.cbChecked = 'true';
            }
        });
    }

    // Use requestAnimationFrame to debounce the observer for better performance
    let rafHandle;
    const debouncedHide = () => {
        if (rafHandle) cancelAnimationFrame(rafHandle);
        rafHandle = requestAnimationFrame(hideMembersVideos);
    };

    const observer = new MutationObserver(debouncedHide);
    observer.observe(document.body, { childList: true, subtree: true });

    // Initial runs for fast-loading content
    hideMembersVideos();
    setTimeout(hideMembersVideos, 1000);
    setTimeout(hideMembersVideos, 2500); // Second pass for slower elements
})();
