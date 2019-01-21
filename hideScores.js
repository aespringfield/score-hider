document.getElementById('hideScores').onclick = function(event) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            {code: `document.querySelectorAll('.imspo_mt__t-sc, svg.imspo_mt__triangle').forEach((node) => {
                node.style.display = 'none';
            })`
            }
        );
    });
}

// chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//     chrome.tabs.executeScript(
//         {code: `document.querySelectorAll('.imspo_mt__t-sc').forEach((node) => {
//             node.style.display = 'none';
//         })`
//         }
//     );
// });