$( document ).ready(function() {

  $('#fullpage').fullpage({
    	sectionsColor: ['#f2f2f2', '#4BBFC3', '#f2f2f2', '#4BBFC3'],
    	css3: true,
    	verticalCentered: true
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
  