
browser.webRequest.onBeforeRequest.addListener(
  function(details) { return {cancel: true}; },
//{ urls: ["https://www.youtube.com/*"] },
  { urls: ["*://*.doubleclick.net/*"] },
  ["blocking"]
);
