let squatCount = 0;
let sStage = null;

function handleSquats(lm){
  let hip = lm[23];
  let knee = lm[25];
  let ankle = lm[27];

  let a = angle(hip, knee, ankle);

  if(a > 160) sStage = "up";
  if(a < 90 && sStage === "up"){
    sStage = "down";
    squatCount++;
    countText.innerText = "Reps: " + squatCount;
  }
}
