// this script will et injected
console.log("AV7");

function increasePlaybackSpeed(val) {
    let cur = null;
    try {
        cur = document.getElementsByTagName('video')[0].playbackRate;
        document.getElementsByTagName('video')[0].playbackRate = cur + val;
        console.log('speed = '+cur);
    } catch (error) {
        console.log('No video output found');
        console.log('val = '+val);
    }
}

chrome.runtime.onMessage.addListener(function (request) {
    if(request[0] === '+')
        increasePlaybackSpeed(0.25);
    else
        increasePlaybackSpeed(-0.25)
})


