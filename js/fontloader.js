
3
4
5
6
7
8
9
10
11
12
WebFontConfig = {
google: { families: ["Fresca","Flamenco","Indie Flower", "Freckle Face", "Slackey", "Just Me Again Down Here"] }
};
(function() {
var wf = document.createElement('script');
wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
'://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
wf.type = 'text/javascript';
wf.async = 'true';
var s = document.getElementsByTagName('script')[0];
s.parentNode.insertBefore(wf, s);
})();
