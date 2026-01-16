// Simple, privacy-focused pageview tracker
(function() {
  // Only track once per page load
  if (window._pageviewTracked) return;
  window._pageviewTracked = true;

  // Get current path
  const path = window.location.pathname;

  // Get referrer (if any)
  const referrer = document.referrer || undefined;

  // Send pageview data to API
  fetch('/api/pageview', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      path,
      referrer
    })
  }).catch(() => {
    // Silently fail if tracking doesn't work
    // We don't want to break the user experience
  });
})();
