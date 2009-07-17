$.fn.emoticon = function(element){
	
    	var imagePath = "emotes/";   
        var ee;
		
		for (emote in emoticons.emoticon) {
			console.log(emoticons.emoticon[emote]);
			//$(element).append('<img src = "'+imagePath+emoticons.emoticon[emote].image+'" />');
			for(face in emoticons.emoticon[emote].emotes)
			{
				console.log(face);
				//$(element).append(face);
			}
			
		}
		
		
		
		/*
        for(emote in emoticons.emotes)
        {
            ee=emoticons.emotes[emote].emotes;
            for(e in ee)
                {
                
                var k = '$(element).html().replace(/'+e+'/g,"::smile")';
                eval(k);
	        console.log(k);
                $(element).html(k);
                }
        }
*/
	
	
	
}; 