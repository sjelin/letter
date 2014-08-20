var defaultText;//Will be lorem ipsum, but I'm setting it at the bottom

function injectText(text) {
	var paragraphs = ((text||"").trim() || defaultText).split("\n");
	var contactInfo = true;
	for(var i = 0; i < paragraphs.length; i++) {
		var paragraph = paragraphs[i].trim();
		if(paragraph.length) {
			var $p = $("<p>");
			$p.text(paragraph);
			if(contactInfo)
				$(".their.info .content").append($p);
			else
				$(".letter .content .signature").before($p);
		} else
			contactInfo = false;
	}
}

window.onload = function() {
	$.ajax(	"https://docs.google.com/feeds/download/documents/export/Export"+
			"?id="+(window.location.search||"").slice(1)+"&exportFormat=txt"
			).done(injectText).fail(function() { injectText(); });
}


defaultText =	"Lorem ipsum\n"+
				"dolorsit.amet\n"+
				"Consectetur, AE\n\n"+
				"Dear Lorem ipsum,\n"+
				"Maecenas vitae odio in ipsum tempus volutpat nec non nisl. Phasellus faucibus lorem nunc, et aliquet ante interdum et. Morbi turpis risus, egestas sed eros vel, elementum vulputate turpis. Ut a dui sollicitudin, tincidunt elit ut, sagittis ipsum. Duis varius felis a metus congue dapibus. Praesent quis luctus mauris, sit amet vulputate sapien. Curabitur quis lacus sit amet quam viverra malesuada. Sed sit amet erat id purus congue blandit. Duis bibendum malesuada dolor, lobortis luctus felis eleifend nec. Mauris vitae risus nibh. Quisque tempus sem feugiat tellus blandit, in faucibus arcu placerat. Phasellus ac augue id velit aliquet rutrum. Etiam porttitor elit tristique nisi convallis, a rutrum lectus posuere.\n"+
				"Quisque hendrerit in nunc a vulputate. Sed eu neque congue, hendrerit nunc a, dapibus ante. Pellentesque vulputate viverra lacus, eu auctor ligula fermentum vitae. Aenean ultrices blandit ultricies. Praesent sem lectus, tristique nec odio in, ornare ornare justo. Vivamus sollicitudin quam turpis, vitae commodo dolor euismod eu. Pellentesque dolor felis, ullamcorper at nisi sit amet, faucibus ultricies urna. Mauris placerat quam ipsum, ac feugiat ante bibendum cursus. Nulla dictum lacus ut sapien dignissim, sit amet convallis mi tristique. Maecenas in pellentesque turpis. Nulla imperdiet urna lectus, ac malesuada justo condimentum nec. Quisque id facilisis arcu. Donec imperdiet lorem a dolor suscipit fringilla.\n"+
				"Vivamus vitae lacinia neque, eu rutrum mauris. Donec sit amet nibh ac urna faucibus lobortis. Fusce scelerisque aliquam tincidunt. Fusce tempus libero ac risus blandit, nec consectetur sapien tincidunt. Proin lacinia mauris non mi tempus rhoncus. Phasellus commodo nibh quis hendrerit aliquam. Pellentesque sit amet eros purus. Phasellus sit amet blandit orci. Nulla felis tellus, vestibulum ac libero id, vulputate adipiscing turpis. Mauris ac consequat tellus.\n"+
				"Etiam condimentum, dolor non blandit gravida, odio leo fringilla ante, quis pharetra turpis dui a odio. Mauris id nisi ultrices, eleifend erat id, varius nulla. Sed id eros suscipit, fermentum nibh sit amet, tempus neque. Etiam convallis est ac purus varius interdum. Nam euismod lacus a odio cursus rhoncus. Nunc molestie elementum dolor, in molestie tortor tristique quis. In ut arcu nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et turpis accumsan, egestas sapien nec, vehicula sem. Nam sodales, dolor vitae auctor porttitor, justo tortor ornare arcu, id blandit nunc felis ut est. Donec posuere urna enim, id sodales sapien suscipit at. Quisque tristique eget purus eu consectetur. Curabitur at magna ac metus tempor gravida id ac enim. Fusce sem lacus, lacinia semper nulla feugiat, ullamcorper mattis augue. Nunc eget est massa.\n"+
				"Nulla quis consectetur leo. Curabitur suscipit pellentesque augue a pulvinar. Morbi aliquam ligula in mauris fermentum, nec pharetra neque posuere. Nullam eget euismod nulla, eu tincidunt eros. Curabitur luctus ac felis nec sagittis. Proin feugiat sollicitudin vulputate. Sed iaculis urna turpis, quis euismod mi pharetra ac.";
