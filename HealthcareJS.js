$(document).ready(function(){

	/************************************
	        Smooth scrolling effect
	************************************/
	$('ul li a').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
	    && location.hostname == this.hostname) {
	      var $target = $(this.hash);
	      $target = $target.length && $target
	      || $('[name=' + this.hash.slice(1) +']');
	      if ($target.length) {
	        var targetOffset = $target.offset().top;
	        $('html,body')
	        .animate({scrollTop: targetOffset}, 1000);
	       return false;
	      }
	    }
  	});

  	/*Navbar background-color on scroll*/
  var scrollTop = 0;
  $(window).scroll(function(){
    scrollTop = $(window).scrollTop();
     $('.counter').html(scrollTop);
    
    if (scrollTop >= 100) {
    	$('nav').addClass('scroll');
       
    } else if (scrollTop < 100) {  	
        $('nav').removeClass('scroll');
    } 
    
  }); 

	/*************************************
	      Animate brand on mouseenter
	*************************************/
	$(".navbar-brand").mouseenter(function(){
		$(".secondNavSpan").removeClass("mainColor");
		$(".secondNavSpan").addClass("whiteColor");
		$(".firstNavSpan").addClass("mainColor");
		
	});

	$(".navbar-brand").mouseleave(function(){

		$(".secondNavSpan").removeClass("whiteColor");
		$(".secondNavSpan").addClass("mainColor");
		$(".firstNavSpan").removeClass("mainColor");
	});

	/*********************************
	            Toggle menu 
	*********************************/
	$("#navTeamItem").on("click", function(){
		$("#navTeamItem").css("color", "black !important");
	});

	$('#teamLi').mouseenter( function(){
		$("#teamUl").fadeIn(300);
	});

	$('#teamLi').mouseleave(function(){
		$("#teamUl").fadeOut(300);
	});

	/*****************************************
	   Service section, image hover effect 
	*****************************************/

	$("#colRadiology").mouseenter(function(){
		$(".rad").addClass("moveUp");
		$("#radilogyReadMore").fadeIn(300);
	});

	$("#colRadiology").mouseleave(function(){
		$(".rad").removeClass("moveUp");
		$("#radilogyReadMore").fadeOut(300);
	});

	$("#colCardiology").mouseenter(function(){
		$(".car").addClass("moveUp");
		$("#cardiologyReadMore").fadeIn(300);
	});

	$("#colCardiology").mouseleave(function(){
		$(".car").removeClass("moveUp");
		$("#cardiologyReadMore").fadeOut(300);
	});

	$("#colLaboratory").mouseenter(function(){
		$(".lab").addClass("moveUp");
		$("#laboratoryReadMore").fadeIn(300);
	});

	$("#colLaboratory").mouseleave(function(){
		$(".lab").removeClass("moveUp");
		$("#laboratoryReadMore").fadeOut(300);
	});

	$("#colDentistry").mouseenter(function(){
		$(".den").addClass("moveUp");
		$("#dentistryReadMore").fadeIn(300);
	});

	$("#colDentistry").mouseleave(function(){
		$(".den").removeClass("moveUp");
		$("#dentistryReadMore").fadeOut(300);
	});

	/********************************
	    Service section, onclick 
	********************************/
	$("#radilogyReadMore, #cardiologyReadMore, #laboratoryReadMore, #dentistryReadMore").on("click", function(){
		$('#light').fadeIn(400);
        $('#fade').fadeIn(400);
	});

	$('#btnClose, .black_overlay').on('click', function () {
        $('#light').fadeOut(400);
        $('#fade').fadeOut(400);
    });

    /********************
           Maps 
    ********************/

	var map = new GMaps({
	  div: '.map',
	  lat: 38.7436266,
	  lng: -9.05,
	  scrollwheel: false,
	  zoom: 12
	});

	map.addMarker({
	  lat: 38.7436266,
	  lng: -9.1602037,
	  title: 'Lisbon',
	  infoWindow: {
	  	content: '<p>Our Lisbon HQ</p>'
	  }
	});

});