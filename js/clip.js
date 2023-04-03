
const Clip = (props) => {
  var {start, end, id, onDelete} = props;
  return e(
    'div',
    {style: {display: 'inline-block', margin: '2px', backgroundColor: '#FFF4', borderRadius: '0.4em', width: '7em', height: '7em', position: 'relative'}},
    e('span', {margin: '2em'}, `Clip ${start} - ${end}`),
    e('button', {onClick: () => onDelete(id), style: {position: 'absolute', bottom: 0, right: 0}}, 'Delete'),
  );
};
