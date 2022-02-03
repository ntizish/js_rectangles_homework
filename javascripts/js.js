$(document).ready(function(){
$(".blue").click(function(){
$(this).toggleClass("green"); {
}
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

$(document).ready(function(){
	$(".black").click(function(){
		$(this).css({
			height: function(index, value) {
				return parseFloat (value) -50;
			}
		});
		$(this).css({
			width: function(index, value) {
				return parseFloat (value) -50;
			}
		});
	});
});

$(document).ready(function(){
	$(".green").click(function(){
		$(".green").toggleClass("rounded-corners");
	});
});

$(document).ready(function(){
	$(".magenta").click(function(){
		$(".magenta").toggleClass("rotated-ninty");
	});
});

$(document).ready(function(){
	$(".purple").click(function(){
		$(".purple").toggleClass("skewed");
	});
});

$(document).ready(function(){
	$(".red").click(function(){
		$(".red").toggleClass("ran");
	});
});

$(document).ready(function(){
	$(".gray").click(function(){
		$(this).css({
			opacity: function(index, value) {
				return parseFloat (value) -0.1;
			}
		});
	});
});

$(document).ready(function(){
	$(".orange").click(function(){
		$(".orange").toggleClass("bye");
	});
});
