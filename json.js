$.getJSON("http://api.twitter.com/1/statuses/user_timeline/TKOaly.json?count=4&callback=?",
    function(data) {
        $.each(data, function(i, item) {
            $("<p/><br>").text(item.text).appendTo("#viestit");
        });
    }
);

$(function() {
			$.getJSON('tutkimusryhmat.json', function(data) {
			    var template = $('#tutkimusryhmat').html();
			    var info = Mustache.to_html(template, data);
			    $('#tutkimus').html(info);
			});
		});
		
$(function() {
			$.getJSON('ajankohtaista.json', function(data) {
			    var template = $('#ajankohtaista').html();
			    var info = Mustache.to_html(template, data);
			    $('#uutinen').html(info);
			});
		});