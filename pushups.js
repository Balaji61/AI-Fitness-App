let pushupCount = 0;
let pStage = null;

function handlePushups(lm){
  let shoulder = lm[11];
  let elbow = lm[13];
  let wrist = lm[15];

  let a = angle(shoulder, elbow, wrist);

  if(a > 160) pStage = "up";
  if(a < 70 && pStage === "up"){
    pStage = "down";
    pushupCount++;
    countText.innerText = "Reps: " + pushupCount;
  }
}
