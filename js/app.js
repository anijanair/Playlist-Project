var playlist = new Playlist();

var hereComesTheSun = new Song("Here Comes the Sun", "The Beatles","2:54");
var walkingOnSunshine = new Song("Walking On Sunshine","Katrina and the Waves","3:43");

Playlist.add(hereComesTheSun);
Playlist.add(walkingOnSunshine);
var playlistElement = document.getElementById("playlist");
playlist.renderInElement(playlistElement);
