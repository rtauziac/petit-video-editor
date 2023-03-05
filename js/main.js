
window.onbeforeunload = function() {
    return "";
};

var currentVideoFile = null;

function loadLocalFile(event) {
  var file = event.target.files[0];
  var reader = new FileReader();
  reader.onload = function(event) {
    var data = event.target.result;
    var video = document.getElementById("videoPlayer");
    video.src = URL.createObjectURL(file);
    video.load();
    currentVideoFile = file;
  };
  reader.readAsDataURL(file);
}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("fileBrowser").addEventListener("change", loadLocalFile, false);
});

