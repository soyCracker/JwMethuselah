const sendMessageId = document.getElementById("sendmessageid");
if (sendMessageId) {
  sendMessageId.onclick = function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {  
        chrome.tabs.sendMessage(tabs[0].id, { greeting: "你好" }, function(response) {  
            console.log(response.farewell);  
        });  
    });
  };
}