const navEntry = performance.getEntriesByType("navigation")[0];

// Handle tab visibility: close if tab is hidden and not a reload
if (navEntry?.type !== "reload") {
	setTimeout(() => {
		window.addEventListener("visibilitychange", () => {
			if (document.visibilityState !== "visible") {
				window.close();
			}
		});
	}, 500);
}

let cancel = null;

function startInactivityTimer() {
	cancel = setTimeout(() => {
		console.log("Inactive - closing window.");
		window.close();
	}, 10000);
}

startInactivityTimer();

document.body.addEventListener("mousemove", () => {
	if (cancel !== null) {
		clearTimeout(cancel);
		cancel = null;
	}
	startInactivityTimer();
});
