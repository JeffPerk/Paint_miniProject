$(document).ready(function() {

	var box = $('.box');
	var colors = 'white green red blue yellow';

 	box.on('mousedown', function() {
  		$(this).addClass(color);
 	})

  	box.on('dblclick', function() {
    	$(this).removeClass(color);
  	})

  	$('#reset').on('click', function() {
  		box.removeClass(colors);
  	})

  	var color = 'white';

  	$('#red').on('click', function() {
  		color = 'red';
  	})

  	$('#blue').on('click', function() {
  		color = 'blue';
  	})

  	$('#green').on('click', function() {
  		color = 'green';
  	})

  	$('#yellow').on('click', function() {
  		color = 'yellow';
  	})

  	$('#white').on('click', function() {
  		color = 'white';
  	})

})