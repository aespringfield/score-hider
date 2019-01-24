function getGameElements(page) {
    return page.querySelectorAll('table.imspo_mt__mit');
}

function getTeamElements(gameElement) {
    return gameElement.querySelectorAll('.imspo_mt__tr');
}

function getRank(teamElement) {
    const rankSpan = teamElement.querySelector('span.liveresults-sports-immersive__team-seed-or-rank');
    return rankSpan ? parseInt(rankSpan.innerText) : null;
}

function bothTeamsRankedAtLeast(gameElement, rank) {
    const teamElements = getTeamElements(gameElement);
    const visitorRank = getRank(teamElements[0]);
    const homeRank = getRank(teamElements[1])
    return !!(visitorRank && visitorRank <= rank && homeRank && homeRank <= rank);
}

function highlightIfRankedAtLeast(gameElement, rank, color) {
    if (bothTeamsRankedAtLeast(gameElement, rank)) {
        gameElement.style['background-color'] = color;
    }
}

function highlightGamesRankedAtLeast(page, rank, color) {
    getGameElements(page).forEach((gameElement) => {
        highlightIfRankedAtLeast(gameElement, rank, color);
    });
}

highlightGamesRankedAtLeast(document, 25, '#FAF394');