$(function() {
  magicScroll(); 
  fullPage(); 
  mouseAnimation(); 
  menu();
  pageTransition();
  backButton();
});


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
	  
  // Create Animation for 0.5s
  var tween1 = TweenMax.to('#introAnimation1', 0.3, {
    backgroundColor: 'rgb(255, 39, 46)',
    scale: 15,
  });
  
  // Create the Scene and trigger when visible
  var scene1 = new ScrollMagic.Scene({
    triggerElement: '#introScene1',
  })

  .setTween(tween1)
  .addTo(controller);
  
  
    // Create Animation for 0.5s
    var tween2 = TweenMax.to('#introAnimation2', 0.3, {
      backgroundColor: 'rgb(255, 39, 46)',
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