'use strict';

const e = React.createElement;

const domContainer = document.getElementById('root');
ReactDOM.render(
  e(
    App,
    {style: {flex: 1}}
  ),
  domContainer);

// Show a message before closing the window
/*
window.onbeforeunload = function() {
    return "";
};
*/

