console.log("JwMethuselah start")

chrome.runtime.onMessage.addListener(  
    function(request, sender, sendResponse) {  
        console.log(sender.tab ?   
          "取得到tab，這是來自內容腳本的訊息：" + sender.tab.url   
          : "沒有tab，這是來自擴充功能內部的訊息");  
        console.log("收到:" + request.greeting);
        sendResponse({farewell: "再見"});  
    });

window.onload = function ()
{
    console.log("onload start");

    $("audio").attr("loop",true);

    console.log("onload end");
}