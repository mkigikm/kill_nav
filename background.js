chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  console.log("Kill nav on ", tab.url);
  chrome.tabs.executeScript({
    file: "kill_nav.js"
  });
});
