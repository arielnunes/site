$( document ).ready(function() {

  $('#fullpage').fullpage({
    	sectionsColor: ['#f2f2f2', '#4BBFC3', '#f2f2f2', '#4BBFC3'],
    	css3: true,
    	verticalCentered: true,
    	scrollBar: true,
    	fitToSectionDelay: 100
    });
    
});

// MOUSE ANIMATION
var $mouseIcon = $('.mouse-container');
  $mouseIcon.addClass('fadeIn fast');
  
  setTimeout(function(){
     $mouseIcon.removeClass('fadeIn').addClass('fadeOut');
  }, 5000); 

// MAGIC SCROLL ANIMATION  
// When the DOM is ready
$(function() {
  
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
  
});


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
(function() {

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

})();


/**
document.querySelector( "#nav-toggle" )
  .addEventListener( "click", function() {
    this.classList.toggle( "active" );
  });*/