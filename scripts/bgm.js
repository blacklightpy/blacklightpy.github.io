var isChromiumBasedBrowser = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
var bgplayer;
if(isChromiumBasedBrowser){
  bgplayer = document.createElement("iframe");
  bgplayer.setAttribute("src", "/music/intro.mp3");
  bgplayer.setAttribute("allow", "autoplay");
  bgplayer.setAttribute("style", "display:none");
}
else{
  bgplayer = document.createElement("audio");
  bgplayer.setAttribute("autoplay", "autoplay");
  bgplayer.setAttribute("loop", "loop");
  var src = document.createElement("source");
  src.setAttribute("src", "/music/intro.mp3");
  src.setAttribute("type", "audio/mpeg");
  bgplayer.appendChild(src);
}
bgplayer.setAttribute("id", "bgm");
document.body.appendChild(bgplayer);

$("bgm").click(function(){ 
  if (bgplayer.paused){
    if(isChromiumBasedBrowser)
      $("#bgm").attr("src", "/music/intro.mp3");
    else
      $("#bgm").play();            
    $("#toggle").text('Pause');
  }
  else{
    if(isChromiumBasedBrowser)
      $("#bgm").removeAttr("src");
    else
      $("#bgm").pause(); 
    $("#toggle").text('Play');
  }
});
