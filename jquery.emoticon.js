// pass it an element.
$.fn.emoticon = function(element) {
	// console.log( element );
	text = element.innerHTML;
	
	for( var a in emoticons.emoticon ) {
		emoticon = emoticons.emoticon[a];
		
		for( var emote in emoticon.emotes ) {
			text = text.replace( new RegExp( emote, 'g' ), '<img src="images/' + emoticon.image + '" />');
		}
	}
	
	element.innerHTML = text;
};