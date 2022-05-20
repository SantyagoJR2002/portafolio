$(document).ready(function()){
	$('ul.tabs li a:first').addClass('active');
	$('.about .container').hide();
	$('.about .container:first').show();

	$('ul.tabs li a').click(function(){
	$('ul.tabs li a').removeClass('active');
    $(this).addClass('active');
    $('.about .container').hide()

    var activeTab = $(this).attr('href');
    $(activeTab).show();
    return false;
	}) 
}



