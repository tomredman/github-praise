function blameToPraise() {
	var fileHeader = document.getElementsByClassName('file-header');
	if (fileHeader != null) {
		var inner = fileHeader[0].innerHTML;
		var res = inner.replace("Blame", "Praise");
		fileHeader[0].innerHTML = res;
	}
}

//Not quite working as expected
$(window).bind('hashchange', function() {
	console.log("hashchange");
	blameToPraise();
});

//Not quite working as expected
window.addEventListener("hashchange", blameToPraise);

blameToPraise();