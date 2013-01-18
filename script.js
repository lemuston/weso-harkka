$(document).ready(function () {
$("#etusivu").show()
});

$("#etusivu_nav").click(function(){
	$("#etusivu").show();
	$("#opiskelu").hide();
	$("#tutkimus").hide();
});

$('#opiskelu_nav').click(function (e) {
  $("#opiskelu").show()
  $("#etusivu").hide()
  $("#tutkimus").hide()
})

$('#tutkimus_nav').click(function (e) {
  $("#etusivu").hide();
  $("#opiskelu").hide();
  $("#tutkimus").show();
})

$('.carousel').carousel({
  interval: 5000
})

$(function() {
			$.getJSON('tutkimusryhmat.json', function(data) {
			    var template = $('#speakers-template').html();
			    var info = Mustache.to_html(template, data);
			    $('#talktitles').html(info);
			});
		});

