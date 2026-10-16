const YT_TV_URL = "https://www.youtube.com/tv?oxrt=true&oxe=%5B%5D#/";

chrome.action.onClicked.addListener(async () => {
  const tabs = await chrome.tabs.query({ url: "https://www.youtube.com/tv*" });
  if (tabs.length > 0) {
    await chrome.tabs.update(tabs[0].id, { active: true });
    await chrome.windows.update(tabs[0].windowId, { focused: true });
  } else {
    await chrome.tabs.create({ url: YT_TV_URL });
  }
});
