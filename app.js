let teamOneScore = 0

let teamTwoScore = 0

let totalScore = teamOneScore + teamTwoScore



function oneScorePlus() {
    teamOneScore++
    draw()
}
function oneScoreMinus() {
    teamOneScore--
    draw()
}
function twoScorePlus() {
    teamTwoScore++
    draw()
}
function twoScoreMinus() {
    teamTwoScore--
    draw()
}

function reset() {
    teamOneScore = 0
    teamTwoScore = 0
    draw()
}
function draw() {
    let teamOneScoreElem = document.getElementById('teamOne')
    teamOneScoreElem.innerText = teamOneScore
    let teamTwoScoreElem = document.getElementById('teamTwo')
    teamTwoScoreElem.innerText = teamTwoScore
    let totalElem = document.getElementById('total')
    totalElem.innerText = totalScore
}
