$(document).ready(function(){
	// Hide the tooglebox when page loads
	var current , my_current =$(".toggle_this").hide();
    var current_class, my_class = $(".step2_wastun_todo");
	//slide up and down when clicking over ".toggle"
	$(".toggle").click(function(){
            current = $(this).next(".toggle_this");
            current_class = $(this).next(".step2_wastun_todo");
            my_current.not(current).slideUp('fast');
            current.slideDown("fast");
		return true;
	});

	$(".step2_wastun_todo").click(function(){
            
            current_class = $(this).siblings(".step2_wastun_todo");

            my_class.not(current_class).toggleClass("step2_wastun_todo step2_wastun_activ");
           
           
		return true;
	});



});
