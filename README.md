# AI Fitness Trainer App 

A browser-based AI fitness application built using Google MediaPipe Pose.  
Tracks **Biceps Curls**, **Squats**, and **Pushups** in real-time using webcam and pose estimation.

### Features
- Real-time pose detection using BlazePose (ML inference)
- Biceps curl counter (both arms)
- Squat counter
- Pushup counter
- Neon dark-themed UI
- Mobile responsive
- Works directly in browser (no backend)

### Technologies Used
- MediaPipe Pose (Machine Learning)
- JavaScript
- HTML / CSS
- Angle-based joint tracking
- Webcam video processing

###  Live Demo
https://balaji61.github.io/AI-Fitness-App/

### Project Structure
AI-Fitness-App/
├── index.html
├── workout.html
├── style.css
├── app.js
├── biceps.js
├── squats.js
├── pushups.js
└── README.md


### How It Works
1. Webcam video is passed into BlazePose ML model.
2. Model predicts 33 body keypoints.
3. We calculate elbow/knee angles.
4. Movement transitions (up/down) count reps.
5. UI shows reps + skeleton overlay in real-time.

### Author
Balaji K
