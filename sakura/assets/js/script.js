$(function(){
	
	var note = $('#note');

		
	$('#countdown').countdown({
		callback	: function(hours, minutes, seconds){
			
			var message = "";
			message += hours + " hour" + ( hours==1 ? '':'s' ) + " : ";
			message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " : ";
			message += seconds + " second" + ( seconds==1 ? '':'s' ) + " <br />";
			
			note.html(message);
		}
	});
	
});
