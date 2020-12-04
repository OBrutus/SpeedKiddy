document.addEventListener('DOMContentLoaded', 
    function(){
        document.querySelector('button')
            .addEventListener('click', inc, false)
        function inc() {
            chrome.tabs.query({currentWindow: true, active: true},
                function (tabs) {
                    chrome.tabs.sendMessage(tabs[0].id, '+');
                })
        }
    } 
);



document.addEventListener('DOMContentLoaded', 
    function(){
        document.querySelectorAll('button')[1]
            .addEventListener('click', inc, false)
        function inc() {
            chrome.tabs.query({currentWindow: true, active: true},
                function (tabs) {
                    chrome.tabs.sendMessage(tabs[0].id, '-');
                })
        }
    } 
);
