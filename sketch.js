var canvas, contestantCount, database, quiz, question, contestant, answer, allContestants;
var gameState = 0;

function setup(){
  canvas = createCanvas(displayWidth, 400);
  database = firebase.database();

  quiz = new Quiz();
  quiz.getState();
  quiz.start();

}


function draw(){
  background("pink");

  if (contestantCount === 4){
    quiz.update(1);
  }
  if (gameState === 1){
    quiz.play();
  }
}
