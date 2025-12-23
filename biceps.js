let bicepsCount = 0;
let bStage = null;

function angle(a,b,c){
  let radians = Math.atan2(c.y-b.y, c.x-b.x) -
                Math.atan2(a.y-b.y, a.x-b.x);
  let deg = Math.abs(radians*180/Math.PI);
  if(deg>180) deg = 360-deg;
  return deg;
}

function handleBiceps(lm){
  let shoulder = lm[11];
  let elbow = lm[13];
  let wrist = lm[15];

  let a = angle(shoulder, elbow, wrist);

  if(a > 160) bStage = "down";
  if(a < 40 && bStage === "down"){
    bStage = "up";
    bicepsCount++;
    countText.innerText = "Reps: " + bicepsCount;
  }
}
