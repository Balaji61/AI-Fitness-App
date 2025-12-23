let leftCount = 0;
let rightCount = 0;

let leftStage = "down";
let rightStage = "down";

function angle(a, b, c) {
  let radians =
    Math.atan2(c.y - b.y, c.x - b.x) -
    Math.atan2(a.y - b.y, a.x - b.x);

  let deg = Math.abs((radians * 180) / Math.PI);
  if (deg > 180) deg = 360 - deg;
  return deg;
}

function handleBiceps(lm) {
  // LEFT ARM
  let lShoulder = lm[11];
  let lElbow = lm[13];
  let lWrist = lm[15];

  let leftAngle = angle(lShoulder, lElbow, lWrist);

  if (leftAngle > 150) leftStage = "down";

  if (leftAngle < 55 && leftStage === "down") {
    leftStage = "up";
    leftCount++;
  }

  // RIGHT ARM
  let rShoulder = lm[12];
  let rElbow = lm[14];
  let rWrist = lm[16];

  let rightAngle = angle(rShoulder, rElbow, rWrist);

  if (rightAngle > 150) rightStage = "down";

  if (rightAngle < 55 && rightStage === "down") {
    rightStage = "up";
    rightCount++;
  }

  countText.innerText =
    `Left: ${leftCount} | Right: ${rightCount} | Total: ${leftCount + rightCount}`;
}
