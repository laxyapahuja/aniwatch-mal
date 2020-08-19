var execute = true;

chrome.tabs.onActivated.addListener( tab => {
    chrome.tabs.get(tab.tabId, current_tab_info => {
        var tablink = current_tab_info.url;
        console.log(tablink)
        if (tablink.startsWith("https://aniwatch.me/")) {
            if (execute==true) {
                execute = false;
                chrome.browserAction.onClicked.addListener(function(tab) {
                    chrome.tabs.executeScript(null, {file: './foreground.js'}, () => console.log('works'));
                });
            }
        }
    });
});