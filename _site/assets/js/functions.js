$(function() {
  magicScroll(); 
  fullPage(); 
  mouseAnimation(); 
  menu();
  pageTransition();
  backButton();
  titleFadeInOut();
  hideBar();
});

function hideBar(){
	window.addEventListener("load",function() {
		// Set a timeout...
		setTimeout(function(){
			// Hide the address bar!
			window.scrollTo(0, 1);
		}, 0);
	});
}

function titleFadeInOut(){

		var tl = new TimelineMax({repeat:-1});
	
		tl.from(".titleRandom1", 0.5, {opacity: 0, ease:Strong.easeInOut})
		.to(".titleRandom1", 0.5, {opacity: 0, ease:Strong.easeInOut}, "+=3")
		
		.from(".titleRandom2", 0.5, {opacity: 0, ease:Strong.easeInOut})
		.to(".titleRandom2", 0.5, {opacity: 0, ease:Strong.easeInOut}, "+=3")
		
		.from(".titleRandom3", 0.5, {opacity: 0, ease:Strong.easeInOut})
		.to(".titleRandom3", 0.5, {opacity: 0, ease:Strong.easeInOut}, "+=3");
		
}

function pageTransition(){
	$('#holder').toggleClass("visible");

	$('a.link').click(function(event) {
		// Over-rides the link
		event.preventDefault();
		// Sets the new destination to the href of the link
		newLocation = this.href;
		color = $(this).data("color");
		$('body').css('background-color', color );
		$('#holder').css('opacity','0' );
		// Delays action
		window.setTimeout(function() {
		    // Redirects to new destination
				window.location = newLocation;
		}, 250);
	});

}

function backButton(){

	$('a.backLink').click(function(event) {
		TweenMax.to("#back-bar", 0.25, {left: -300, ease:Strong.easeInOut});
	});

}

function fullPage(){

  $('#fullpage').fullpage({
    	css3: true,
    	verticalCentered: true,
    	scrollBar: true,
    	fitToSectionDelay: 100
    });
       
}


// MOUSE ANIMATION
function mouseAnimation(){
var $mouseIcon = $('.mouse-container');
  $mouseIcon.addClass('fadeIn fast');
  
  setTimeout(function(){
     $mouseIcon.removeClass('fadeIn').addClass('fadeOut');
  }, 5000); 
}  

// MAGIC SCROLL ANIMATION  
function magicScroll(){
  
  // Init ScrollMagic Controller
	var controller = new ScrollMagic.Controller();
	  
	var navBlack = new TimelineMax();
	
	navBlack.from("#nav-black", 0.1, {opacity: 0, ease:Strong.easeInOut})
	.to("#nav-black", 0.1, {opacity: 1, ease:Strong.easeInOut})
	
	.from("#nav-toggle", 0.1, {opacity: 1, ease:Strong.easeInOut})
	.to("#nav-toggle", 0.1, {opacity: 0.5, ease:Strong.easeInOut}) 
		  
		  
	// Create Animation for 0.5s
	var tween1 = TweenMax.to('#nav-black', 0.3, {
	opacity: 1,
	});
	
	// Create the Scene and trigger when visible
	var scene1 = new ScrollMagic.Scene({
	triggerElement: '#introScene2',
	})
	
	.setTween(navBlack)
	.addTo(controller);
	  
	  
	// Create Animation for 0.5s
	var tween2 = TweenMax.to('#introAnimation2', 0.3, {
	backgroundColor: 'rgb(255, 255, 255)',
	scale: 15,
	});
	
	// Create the Scene and trigger when visible
	var scene2 = new ScrollMagic.Scene({
	triggerElement: '#introScene2',
	})
	
	.setTween(tween2)
	.addTo(controller);
	
	
	
	// Add debug indicators fixed on right side
	// scene1.addIndicators();
	// scene2.addIndicators();
  
}


/**
 * main.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2014, Codrops
 * http://www.codrops.com
 */
function menu() {

	var bodyEl = document.body,
		content = document.querySelector( '.content-wrap' ),
		openbtn = document.getElementById( 'open-button' ),
		closebtn = document.getElementById( 'nav-toggle' ),
		btnItem = document.querySelector( "#nav-toggle" ),
		isOpen = false;

	function init() {
		initEvents();
	}

	function initEvents() {
		openbtn.addEventListener( 'click', toggleMenu );
		if( closebtn ) {
			closebtn.addEventListener( 'click', toggleMenu );
		}

		// close the menu element if the target it´s not the menu element or one of its descendants..
		content.addEventListener( 'click', function(ev) {
			var target = ev.target;
			if( isOpen && target !== openbtn ) {
				toggleMenu();
			}
		} );
	}

	function toggleMenu() {
		if( isOpen ) {
			classie.remove( bodyEl, 'show-menu' );
			btnItem.classList.toggle( "active" );
		}
		else {
			classie.add( bodyEl, 'show-menu' );
			btnItem.classList.toggle( "active" );
		}
		isOpen = !isOpen;
	}

	init();

}