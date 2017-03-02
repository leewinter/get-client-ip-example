'use strict';

var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status == 200) {
        callback(null, xhr.response);
      } else {
        callback(status);
      }
    };
    xhr.send();
};

getJSON('/api/getClientHostname',
function(err, data) {
  if (err != null) {
    console.log('Something went wrong: ', err);
  } else {
    console.log('getClientHostname: ', data);
    var iDiv = `<div>IP: ${data.ip}</div><br />
                <div>Hostnames: ${data.domains.toString()}</div>`;
    document.getElementById("clientDetailsPanel").innerHTML = iDiv;
  }
});