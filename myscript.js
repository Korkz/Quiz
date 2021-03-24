$(document).ready(function() {
	$("#revOne").click(function() {
		$("#revOne").toggle(1000);
		$("#flagOne").toggle(1000);
	});
	$("#flagOne").click(function() {
		$("#revOne").toggle(1000);
		$("#flagOne").toggle(1000);	
	});
	$("#qOne").click(function() {
		$("#ansOne").toggle(1000);
	});
});
