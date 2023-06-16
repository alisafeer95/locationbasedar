var video = document.getElementById("myVideo");
var marker = document.querySelector("a-marker");

marker.addEventListener("markerFound", function() {
  video.play();
});

marker.addEventListener("markerLost", function() {
  video.pause();
});
<a-video src="#myVideo" width="10" height="10" material="transparent: true" position="0 1.6 -2"></a-video>