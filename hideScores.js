document.getElementById('hideScores').onclick = function(event) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            {file: './highlightGames.js'}
        );
    });
}

// chrome.tabs.executeScript(
//     {file: './highlightGames.js'}
// );

// chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//     chrome.tabs.executeScript(
//         {code: `document.querySelectorAll('.imspo_mt__t-sc').forEach((node) => {
//             node.style.display = 'none';
//         })`
//         }
//     );
// });