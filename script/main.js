// trigger to play music in the background with sweetalert
window.addEventListener("load", () => {
  const overlay = document.getElementById("click-to-start");
  const song = document.querySelector(".song");

  const startEverything = () => {
    song.play().then(() => {
      animationTimeline();
      overlay.remove(); // Remove the overlay once done
    }).catch(err => {
      console.warn("Playback failed:", err);
      animationTimeline(); // Run animation anyway
      overlay.remove();
    });
  };

  overlay.addEventListener("click", startEverything, { once: true });
});
// Uncomment the following lines if you want to automatically play the song on page load


// window.addEventListener("load", () => {
//   const song = document.querySelector(".song");
//   if (song) {
//     song.play().catch((e) => {
//       // Optional: Handle autoplay restrictions
//       console.warn("Autoplay failed:", e);
//     });
//   }
//   animationTimeline();
// });


document.addEventListener("DOMContentLoaded", function () {
  const dayElement = document.getElementById("day");
  const monthElement = document.getElementById("month");
  const yearElement = document.getElementById("year");
  const ageElement = document.getElementById("age");

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const targetDay = 11;
  const targetMonthIndex = 7; // August
  const targetYear = 2025;
  const birthYear = 2003;

  let currentDay = 1;
  let currentMonthIndex = 0;
  let currentYear = birthYear;
  let currentAge = 0;

  const interval = setInterval(() => {
    // Update day, month, year, and age in the DOM
    dayElement.textContent = currentDay;
    monthElement.textContent = months[currentMonthIndex];
    yearElement.textContent = currentYear;
    ageElement.textContent = currentAge;

    // Smoothly increment day, month, year, and age
    if (currentDay < targetDay) {
      currentDay++;
    } else if (currentMonthIndex < targetMonthIndex) {
      currentDay = targetDay; // Fix day
      currentMonthIndex++;
    } else if (currentYear < targetYear) {
      currentMonthIndex = targetMonthIndex; // Fix month
      currentYear++;
      currentAge++;
    } else {
      // Stop animation when target is reached
      clearInterval(interval);
    }
  }, 250); // Smoother speed adjustment
});

// animation timeline
const animationTimeline = () => {
  // split chars that needs to be animated individually
  const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
  const hbd = document.getElementsByClassName("wish-hbd")[0];

  textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
    .split("")
    .join("</span><span>")}</span>`;

  hbd.innerHTML = `<span>${hbd.innerHTML
    .split("")
    .join("</span><span>")}</span>`;

  const ideaTextTrans = {
    opacity: 0,
    y: -20,
    rotationX: 5,
    skewX: "15deg",
  };

  const ideaTextTransLeave = {
    opacity: 0,
    y: 20,
    rotationY: 5,
    skewX: "-15deg",
  };

  // timeline
  const tl = new TimelineMax();

  tl.to(".container", 0.6, {
    visibility: "visible",
  })
    .from(".one", 0.9, {
      opacity: 0,
      y: 10,
    })
    .from(".two", 0.9, {
      opacity: 0,
      y: 10,
    })
    .to(
      ".one",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "+=3.5"
    )
    .to(
      ".two",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "-=1"
    )
    .from(".three", 0.7, {
      opacity: 0,
      y: 10,
    })
    .to(
      ".three",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "+=3"
    )
    .from(".four", 0.7, {
      scale: 0.2,
      opacity: 0,
    })
    .from(".fake-btn", 0.3, {
      scale: 0.2,
      opacity: 0,
    })
    .staggerTo(
      ".hbd-chatbox span",
      1.5,
      {
        visibility: "visible",
      },
      0.05
    )
    .to(
      ".fake-btn",
      0.1,
      {
        backgroundColor: "rgb(127, 206, 248)",
      },
      "+=4"
    )
    .to(
      ".four",
      0.5,
      {
        scale: 0.2,
        opacity: 0,
        y: -150,
      },
      "+=1"
    )
    .from(".idea-1", 0.7, ideaTextTrans)
    .to(".idea-1", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-2", 0.7, ideaTextTrans)
    .to(".idea-2", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-3", 0.7, ideaTextTrans)
    .to(".idea-3 strong", 0.5, {
      scale: 1.2,
      x: 10,
      backgroundColor: "rgb(21, 161, 237)",
      color: "#fff",
    })
    .to(".idea-3", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-4", 0.7, ideaTextTrans)
    .to(".idea-4", 0.7, ideaTextTransLeave, "+=2.5")
    .from(
      ".idea-5",
      0.7,
      {
        rotationX: 15,
        rotationZ: -10,
        skewY: "-5deg",
        y: 50,
        z: 10,
        opacity: 0,
      },
      "+=1.5"
    )
    .to(
      ".idea-5 span",
      0.7,
      {
        rotation: 90,
        x: 8,
      },
      "+=1.4"
    )
    .to(
      ".idea-5",
      0.7,
      {
        scale: 0.2,
        opacity: 0,
      },
      "+=2"
    )
    .staggerFrom(
      ".idea-6 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: 15,
        ease: Expo.easeOut,
      },
      0.2
    )
    .staggerTo(
      ".idea-6 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: -15,
        ease: Expo.easeOut,
      },
      0.2,
      "+=1.5"
    )
    .staggerFromTo(
      ".baloons img",
      2.5,
      {
        opacity: 0.9,
        y: 1400,
      },
      {
        opacity: 1,
        y: -1000,
      },
      0.2
    )
    .from(
      ".profile-picture",
      0.5,
      {
        scale: 3.5,
        opacity: 0,
        x: 25,
        y: -25,
        rotationZ: -45,
      },
      "-=2"
    )
    .from(".hat", 0.5, {
      x: -100,
      y: 350,
      rotation: -180,
      opacity: 0,
    })
    .staggerFrom(
      ".wish-hbd span",
      0.7,
      {
        opacity: 0,
        y: -50,
        // scale: 0.3,
        rotation: 150,
        skewX: "30deg",
        ease: Elastic.easeOut.config(1, 0.5),
      },
      0.1
    )
    .staggerFromTo(
      ".wish-hbd span",
      0.7,
      {
        scale: 1.4,
        rotationY: 150,
      },
      {
        scale: 1,
        rotationY: 0,
        color: "#ff69b4",
        ease: Expo.easeOut,
      },
      0.1,
      "party"
    )
    .from(
      ".wish h5",
      0.5,
      {
        opacity: 0,
        y: 10,
        skewX: "-15deg",
      },
      "party"
    )
    .staggerTo(
      ".eight svg",
      1.5,
      {
        visibility: "visible",
        opacity: 0,
        scale: 80,
        repeat: 3,
        repeatDelay: 1.4,
      },
      0.3
    )
    .to(".six", 0.5, {
      opacity: 0,
      y: 30,
      zIndex: "-1",
    })
    .staggerFrom(".nine p", 1, ideaTextTrans, 1.2)
    .to(
      ".last-smile",
      0.5,
      {
        rotation: 90,
      },
      "+=1"
    );


const replayBtn = document.getElementById("replay");
const video = document.getElementById("surpriseVideo");
const videoSource = document.getElementById("videoSource");
const bgMusic = document.getElementById("bgMusic");

const videoList = ["./video/1.mp4", "./video/2.mp4"];
let currentVideoIndex = 0;

replayBtn.addEventListener("click", async () => {
  // Pause the background music
  bgMusic.pause();
  bgMusic.currentTime = 0;

  // Show video
  video.style.display = "block";

  // Try to fullscreen the video for mobile and desktop
  try {
    if (video.requestFullscreen) {
      await video.requestFullscreen();
    } else if (video.webkitEnterFullscreen) {
      // iPhones Safari
      video.webkitEnterFullscreen();
    } else if (video.msRequestFullscreen) {
      await video.msRequestFullscreen();
    }
  } catch (err) {
    console.warn("Fullscreen failed:", err);
  }

  // Play first video
  currentVideoIndex = 0;
  playVideo(videoList[currentVideoIndex]);
});

// Auto-play next video or reload
video.addEventListener("ended", async () => {
  currentVideoIndex++;
  if (currentVideoIndex < videoList.length) {
    playVideo(videoList[currentVideoIndex]);
  } else {
    // Exit fullscreen (if supported) then reload
    if (document.fullscreenElement) {
      await document.exitFullscreen();
    }
    setTimeout(() => location.reload(), 1000); // Wait briefly before reload
  }
});

function playVideo(src) {
  videoSource.src = src;
  video.load();
  video.play().catch(err => {
    console.error("Playback error:", err);
  });
}



};;
