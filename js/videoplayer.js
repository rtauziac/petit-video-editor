
const VideoPlayer = (props) => {
  const [videoSrc, setVideoSrc] = React.useState(null);
  const player = e(
    'div',
    {style: {display: 'flex', flexDirection: 'column', alignItems: 'center'}, ...props},
    videoSrc ? null : e('button', {id: 'browseButton', style: {position: 'absolute'}, onClick: () => document.getElementById('fileBrowser').click()}, 'Browse'),
    e(
      'video',
      {id: 'videoPlayer', controls: true, controlsList: 'nofullscreen', src: props?.src, style: {width: '100%', height: '100%'},},
      'Your browser does not support the video tag.'),
    e('input', {type: 'file', id: 'fileBrowser', accept: 'video/*', style: {display: 'none'}, onChange: (event) => {
      var file = event.target.files[0];
      var reader = new FileReader();
      reader.onload = function(event) {
        var data = event.target.result;
        var video = document.getElementById("videoPlayer");
        var videoSrc = URL.createObjectURL(file);
        video.src = videoSrc;
        setVideoSrc(videoSrc);
        video.load();
      };
      reader.readAsDataURL(file);
    },}),
  );
  return player;
}
