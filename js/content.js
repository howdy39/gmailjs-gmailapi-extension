
var j = document.createElement('script');
j.src = chrome.extension.getURL('js/lib/jquery-1.10.2.min.js');
(document.head || document.documentElement).appendChild(j);

var g = document.createElement('script');
g.src = chrome.extension.getURL('js/lib/gmail.js');
(document.head || document.documentElement).appendChild(g);

var s = document.createElement('script');
s.src = chrome.extension.getURL('js/main.js');
(document.head || document.documentElement).appendChild(s);

window.addEventListener("message", function(event) {
    if (event.data.text && event.origin === 'https://mail.google.com') {
        console.log(event.origin);
        console.log("Content script received:1 " + event.data.text);
        
        chrome.runtime.sendMessage(event.data.text, function (response){
            console.log("受け取ったデータ：", response)
        });
    }
}, false);