let mode = new URLSearchParams(window.location.search).get("mode");
let video = document.getElementById("video");
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let countText = document.getElementById("repCount");

document.getElementById("exerciseTitle").innerText =
    mode === "biceps" ? "💪 Biceps Curls" :
    mode === "squats" ? "🦵 Squats" :
    "  Pushups";

// ML Pose Model
const pose = new Pose({
    locateFile: (file) =>
        `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${file}`,
});

pose.setOptions({
    modelComplexity: 1,
    smoothLandmarks: true,
    minDetectionConfidence: 0.5,
    minTrackingConfidence: 0.5,
});

// Skeleton drawing
function drawSkeleton(landmarks) {
    ctx.fillStyle = "#00eaff";
    ctx.strokeStyle = "#39ff14";
    ctx.lineWidth = 3;

    landmarks.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x * canvas.width, p.y * canvas.height, 4, 0, 2 * Math.PI);
        ctx.fill();
    });
}

// Router to correct exercise logic
pose.onResults((results) => {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    ctx.drawImage(results.image, 0, 0, canvas.width, canvas.height);

    if (!results.poseLandmarks) return;

    drawSkeleton(results.poseLandmarks);

    if (mode === "biceps") handleBiceps(results.poseLandmarks);
    if (mode === "squats") handleSquats(results.poseLandmarks);
    if (mode === "pushups") handlePushups(results.poseLandmarks);
});

// Webcam feed
const camera = new Camera(video, {
    onFrame: async () => {
        await pose.send({ image: video });
    },
});
camera.start();

function resetCounter() {
    if (mode === "biceps") bicepsCount = 0;
    if (mode === "squats") squatCount = 0;
    if (mode === "pushups") pushupCount = 0;

    countText.innerText = "Reps: 0";
}
