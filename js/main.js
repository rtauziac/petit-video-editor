'use strict';

const e = React.createElement;

const domContainer = document.getElementById('root');
function render() {
  ReactDOM.render(
    e(
      App,
      {style: {flex: 1}}
    ),
    domContainer);
}

window.addEventListener('load', render);

// Show a message before closing the window
/*
window.onbeforeunload = function() {
    return "";
};
*/

