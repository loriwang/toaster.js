var fixture =
'<div class="toaster-toast">' +
'	<div class="toaster-toast-header">' +
'		<a class="toaster-toast-close-button" href="#">x</a>' +
'	</div>' +
'	<div class="toaster-toast-message">' +
'	</div>' +
'</div>'
;

var loadToastDom = function() {
	$('body').append(fixture);
};

var removeToastDom = function() {
	$('.toaster-toast').remove();
};
