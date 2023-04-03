
const Clip = (props) => {
  var {start, end, totalLength, id, onDelete} = props;
  return e(
    'div',
    {style: {display: 'inline-block', margin: '2px', backgroundColor: '#FFF4', borderRadius: '0.4em', width: '7em', height: '7em', position: 'relative'}},
    e('span', {margin: '2em'}, `Clip ${start} - ${end}`),
    e('div', {style: {margin: '0.5em', width: 'calc(100% - 1em)', height: '1em', backgroundColor: '#3335', position: 'relative'}},
      e('div', {style: {backgroundColor: '#494', height: '100%', width: `${((end - start) / totalLength) * 100}%`, left: `${(start / totalLength) * 100}%`, position: 'absolute'}}),
    ),
    e('button', {onClick: () => onDelete(id), style: {position: 'absolute', bottom: 0, right: 0}}, 'Delete'),
  );
};
