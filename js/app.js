
const App = () => {
	const [videoClips, setVideoClips] = React.useState([]);
	const [clipStart, setClipStart] = React.useState(null);
	const [isPlayingBack, setIsPlayingBack] = React.useState(false);

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
						var videoPlayer = document.getElementById('videoPlayer');
						var clipEnd = videoPlayer.currentTime;
						var videoLength = videoPlayer.duration;
						var newClip = {start: clipStart, end: clipEnd, totalLength: videoLength, id: clipStart.toString()};
						setVideoClips([...videoClips, newClip]);
						setClipStart(null);
					} else {
						const videoPlayer = document.getElementById('videoPlayer');
						setClipStart(videoPlayer.currentTime);
					}
				}}, clipStart ? 'End clip' : 'Clip'),
				e('button', {id: 'playback', onClick: () => {
					if (!videoClips?.length || isPlayingBack) {
						return;
					}
					setIsPlayingBack(true);
					const videoPlayer = document.getElementById('videoPlayer');
					videoPlayer.currentTime = videoClips[0].start;
					videoPlayer.play();
					videoClips.reduce((acc, clip, index) => {
						console.log('plan to pause at', clip.end);
						if (index === videoClips.length - 1) {
							setTimeout(() => {
								videoPlayer.pause();
								setIsPlayingBack(false);
							}, (acc + (clip.end - clip.start)) * 1000);
						} else {
							var nextClip = videoClips[index + 1];
							var timeToNextClip = nextClip.start;
							console.debug('plan start next clip at', timeToNextClip);
							setTimeout(() => {
								videoPlayer.currentTime = timeToNextClip;
							}, (acc + clip.end - clip.start) * 1000);
						}
						return acc + clip.end - clip.start;
					}, 0);
				}}, 'Playback'),
			),
			e('div', {id: 'videoClips', style: {display: 'flex', flexWrap: 'wrap', flex: 1, backgroundColor: '#0002', overflow: 'scroll'}},
				videoClips.map((clip) => {
					return e(Clip, {...clip, key: clip.id, onDelete: (id) => {
						setVideoClips(videoClips.filter((clip) => clip.id !== id));
					}});
				}),
			),
		),
	);
}
