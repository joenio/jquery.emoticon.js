$.fn.emoticon = function(theText) {
	var imagePath = "http://uprising.tv/marak/jquery.emoticon.js/emotes/"; 
	var newText = theText;
	for( var a in emoticons.emoticon ) {
		emoticon = emoticons.emoticon[a];
		for( var emote in emoticon.emotes ) {
			newText = newText.replace( new RegExp( emote, 'g' ), '<img src="'+imagePath + emoticon.image + '" />');
		}
	}
	return newText;
};