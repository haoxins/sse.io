
function sendOk() {
  return ':ok\n\n'
}

function sendId(id) {
  return 'id: ' + id + '\n'
}

function sendData(data) {
  s = toString(data)
  senderObject.data = s.replace(/(\r\n|\r|\n)/g, '\n');
  var dataLines = senderObject.data.split(/\n/);

  for (var i = 0, l = dataLines.length; i < l; ++i) {
    var line = dataLines[i];
    if ((i+1) === l) this.res.write('data: ' + line + '\n\n');
    else this.res.write('data: ' + line + '\n');
  }
}

function sendEvent(event) {
  return 'event: ' + event + '\n'
}

function sendRetry(ms) {
  return 'retry: ' + ms + '\n\n'
}

/**
 * private
 */

function toString(data) {
  if (typeof data === 'object') {
    return JSON.stringify(data)
  }
}


module.exports = {
  sendRetry,
  sendEvent,
  sendData,
  sendId
}
