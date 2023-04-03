
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

const VideoPlayer = (props) => {
  const [videoSrc, setVideoSrc] = React.useState(null);
  const player = e(
    'div',
    {style: {display: 'flex', flexDirection: 'column', alignItems: 'center'}, ...props},
    e('button', {id: 'browseButton', style: {position: 'relative'}, onClick: () => document.getElementById('fileBrowser').click()}, 'Browse'),
    e('video', {id: 'videoPlayer', controls: true, src: props?.src}),
    e('input', {type: 'file', id: 'fileBrowser', accept: 'video/*', style: {display: 'none'}, onChange: loadLocalFile}),
  );
  return player;
}
