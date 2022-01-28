$(document).ready(function(){
$(".blue").click(function(){
$(this).toggleClass("green");
});
});

$(document).ready(function(){
	$(".yellow").click(function(){
		$(this).css({
			height: function(index, value) {
				return parseFloat (value) +50;
			}
		});
	});
});

$(document).ready(function(){
	$(".pink").click(function(){
		$(this).css({
			height: function(index, value) {
				return parseFloat (value) -50;
			}
		});
	});
});
