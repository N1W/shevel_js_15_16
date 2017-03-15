$(function(){
	'use strict;'
	var $close_button = $('.position');
	var $modal = $('.modale');


	$close_button.click(function(){
		$modal.addClass('hide');	

		$(".question").val(null);
		$(".answer1").val(null);
		$(".answer2").val(null);
		$(".answer3").val(null);
		$(".first_answer").prop('checked', false);
		$(".second_answer").prop('checked', false);
		$(".third_answer").prop('checked', false);

		var myAnswers = JSON.parse(localStorage.getItem('rightAnswers'));
		var myQuestion = JSON.parse(localStorage.getItem('test'));

		for (var i = 0; i < myQuestion.length; i++){
			console.log("question: ", myQuestion[i].question);
			console.log("answer1: ", myQuestion[i].answer1);
			console.log("answer2: ", myQuestion[i].answer2);
			console.log("answer3: ", myQuestion[i].answer3);
			if (myAnswers[i].rightAnswer == undefined){	
				console.log("right_answers: ", myAnswers[i].rightAnswer1, " ", myAnswers[i].rightAnswer2);
			} else {
				console.log("right_answers: ", myAnswers[i].rightAnswer);
			}
		}
		console.log("--------------------------------------------------");
	});

});