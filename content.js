// Observe YouTube route changes (SPA behavior)

let lastUrl = location.href;
new MutationObserver(() => {
	const currentUrl = location.href;
	if (currentUrl !== lastUrl) {
		lastUrl = currentUrl;
		initVideoHandler(); // re-run when video page changes
	}
}).observe(document, { subtree: true, childList: true });

function initVideoHandler() {
	// Only apply on watch pages
	// console.log(window.location.href.includes("/watch"));
	if (!window.location.href.includes("/watch")) return;

	// Wait until video is available
	const interval = setInterval(() => {
		const video = document.querySelector("video");
		if (video) {
			clearInterval(interval);

			// Prevent duplicate listeners
			if (!video.dataset.listenerAttached) {
				document.addEventListener("visibilitychange", () => {
					if (document.visibilityState === "visible") {
						video.muted = true; // mute the video
						video.play().catch((err) => console.warn("Autoplay failed:", err));
					} else {
						video.pause();
					}
				});
				video.dataset.listenerAttached = "true"; // mark as attached
			}
		}
	}, 100);
}

// Initial call
initVideoHandler();
