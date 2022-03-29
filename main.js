let scores = [,]
playerCount = 0

function addPlayer(){
  playerCount++
  teamKey = "team-" + playerCount
  scores[teamKey] = 0
  renderPlayers()
}

function renderPlayers(){
  scorecard = ""
  template = ""
  indexer = 0

  for (let i = 0; i < playerCount; i++) { 
    indexer++;
    scorecard +=
      `<div class="col-6 card flex-row">Player ${indexer}: <span class="ms-2" id="team-${indexer}">0</span></div>`;
    template += 
      `<div class="col">
        <div class="d-flex score-card justify-content-center align-items-end">
          <div class="d-flex flex-column">
            <h6>Player ${indexer}:</h6>
            <button class="btn btn-player-${indexer} m-1" onclick="addPoint('team-${indexer}')">Gained 1 point!</button>
            <button class="btn btn-player-${indexer} m-1" onclick="addThreePoint('team-${indexer}')">Gained 3 points!</button>
          </div>
          <div class="d-flex flex-column">
            <button class="btn btn-player-${indexer} m-1" onclick="losePoint('team-${indexer}')">Lost 1 point :(</button>
            <button class="btn btn-player-${indexer} m-1" onclick="loseThreePoint('team-${indexer}')">Lost 3 points :x</button>
          </div>
        </div>
      </div>`;
  }
  let playerContainer = document.getElementById(`players`)
  playerContainer.innerHTML = template
  let scorecardElem = document.getElementById(`scorecard`)
  scorecardElem.innerHTML = scorecard
}

function drawScores(player, newScore) {
  let scoreElem = document.getElementById(player)
  scoreElem.innerText = newScore
}

function addPoint(team){
  scores[team]++
  let newScore = scores[team]
  console.log(scores[team])
  drawScores(team, newScore)
}

function losePoint(team){
  scores[team]--
  let newScore = scores[team]
  console.log(scores[team])
  drawScores(team, newScore)
}

function addThreePoint(team){
  scores[team] = scores[team] + 3
  let newScore = scores[team]
  console.log(scores[team])
  drawScores(team, newScore)
}

function loseThreePoint(team){
  scores[team] = scores[team] - 3
  let newScore = scores[team]
  console.log(scores[team])
  drawScores(team, newScore)
}

function resetScores(){
  console.log("Scores are", scores)
  scores.forEach(element => {
    console.log(scores[element])
    scores[element] = 0
  });
  // for (let i = 1; i < playerCount; i++) {
  //   console.log(i);
  //   console.log("team-" + i)
  //   scores["team-" + i] = 0;
  //   drawScores(scores["team-" + i], 0);
  // }
  console.log("Scores are reset to " , scores)
  
}
// clicking team1 button increases score of team1.
// repeat for team 2

//stretch goals
// allow scores to be reset
// add options to score more points
// more than 1 player
// allow score to decrease
// total all scores

