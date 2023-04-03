
const App = () => {
  return e(
    'div',
    {style: {display: 'flex', width: '100%', height: '100%'}},
    e(VideoPlayer, {style: {flex: 1}}),
    e('div', {style: {flex: 1, display: 'flex', flexDirection: 'column', backgroundColor: 'red'}}),
  );
}
