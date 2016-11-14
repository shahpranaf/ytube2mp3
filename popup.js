document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('checkPage');
  checkPageButton.addEventListener('click', function() {

    chrome.tabs.getSelected(null, function(tab) {
      d = document;
      var vid = (youtube_parser(tab.url)) ? youtube_parser(tab.url) : "";
      
      /*var f = d.createElement('form');
      var vid = (youtube_parser(tab.url)) ? youtube_parser(tab.url) : "";
      f.action = 'https://shah-music-app-shahpranaf.c9users.io/';
      f.method = 'get';
      var i = d.createElement('input');
      i.type = 'text';
      i.name = 'vid';
      i.value = vid;
      f.appendChild(i);
      d.body.appendChild(f);
      f.submit();*/
      var linkText = d.createTextNode("Download");
      var src = "https://shah-music-app-shahpranaf.c9users.io/?vid="+vid;
      var srcDtos = src+"&dtos=true";
      var a = d.createElement('a');
      a.href = src;
      a.target = "_blank";
      a.appendChild(linkText);
      d.body.appendChild(a);

      var br = d.createElement('br');
      d.body.appendChild(br);

      var b = d.createElement('a');
      var linkText2 = d.createTextNode("Download to server");
      b.href = srcDtos;
      b.target = "_blank";
      b.appendChild(linkText2);
      d.body.appendChild(b);
      //document.getElementById('link').setAttribute("src", "https://shah-music-app-shahpranaf.c9users.io/?vid="+vid);
    });

    function youtube_parser(url){
      var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
      var match = url.match(regExp);
      return (match&&match[7].length==11)? match[7] : false;
    }
  }, false);
}, false);