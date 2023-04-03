
const App = () => {
  const [videoClips, setVideoClips] = React.useState([]);
  const [clipStart, setClipStart] = React.useState(null);

  return e(
    'div',
    {id: 'mainContainer', style: {display: 'flex', flex: 1}},
    e(VideoPlayer, {style: {flex: 1}}),
    e(
      'div',
      {style: {flex: 1, display: 'flex', flexDirection: 'column', backgroundColor: '#0002'}},
      e('div', {id: 'actionButtons', style: {backgroundColor: '#FFF2', margin: '4px'}},
        e('button', {id: 'clip', onClick: () => {
          if (clipStart) {
            var clipEnd = document.getElementById('videoPlayer').currentTime;
            var newClip = {start: clipStart, end: clipEnd, id: clipStart.toString()};
            setVideoClips([...videoClips, newClip]);
            setClipStart(null);
          } else {
            const videoPlayer = document.getElementById('videoPlayer');
            setClipStart(videoPlayer.currentTime);
          }
        }}, 'Clip'),
        clipStart ? e('span', null, clipStart) : null,
      ),
      e('div', {id: 'videoClips', style: {display: 'flex', flexWrap: 'wrap', flex: 1, backgroundColor: '#0002', overflow: 'scroll'}},
        videoClips.map((clip) => {
          var {start, end, id} = clip;
          return e(Clip, {start, end, id, key: id, onDelete: (id) => {
            setVideoClips(videoClips.filter((clip) => clip.id !== id));
          }});
        }),
      ),
    ),
  );
}
