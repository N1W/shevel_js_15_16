$(function(){
	'use strict;'

	var $modal = $('.modale');

	function test (question, answer1, answer2, answer3) {
		this.question = question;
		this.answer1 = answer1;
		this.answer2 = answer2;
		this.answer3 = answer3;
	}

	function testRadio (rightAnswer) {
		this.rightAnswer = rightAnswer;
	}

	function testCheckbox (rightAnswer1, rightAnswer2) {
		this.rightAnswer1 = rightAnswer1;
		this.rightAnswer2 = rightAnswer2;
	}

	var questions = [];
	var test_arr = [];


	$(".custom").click(function(e){
		e.preventDefault();
		if ($(".question").val() == "" || 
			$(".answer1").val() == "" || 
			$(".answer2").val() == "" || 
			$(".answer3").val() == "" ||
			$(".first_answer").prop('checked') == false && $(".second_answer").prop('checked') == false && $(".third_answer").prop('checked') == false){
			alert("заполните все поля");
		} else {

		var newQuestion = new test($(".question").val(), $(".answer1").val(), $(".answer2").val(), $(".answer3").val());
		if ($(".first_answer").prop("checked") && $(".second_answer").prop("checked") && $(".third_answer").prop("checked")) {
			alert("Все варианты не могут быть верными.")
		} else {
			if ($(".first_answer").prop("checked") && $(".second_answer").prop("checked")) {
				testCheckbox.prototype = new test($(".question").val(), $(".answer1").val(), $(".answer2").val(), $(".answer3").val());
				var newTestCheckbox = new testCheckbox($(".answer1").val(), $(".answer2").val());
				questions.push(newTestCheckbox);
				test_arr.push(new test($(".question").val(), $(".answer1").val(), $(".answer2").val(), $(".answer3").val()));
			} else { 	
				if ($(".first_answer").prop("checked") && $(".third_answer").prop("checked")) {
					testCheckbox.prototype = new test($(".question").val(), $(".answer1").val(), $(".answer2").val(), $(".answer3").val());
					var newTestCheckbox = new testCheckbox($(".answer1").val(), $(".answer3").val());
					questions.push(newTestCheckbox);
					test_arr.push(new test($(".question").val(), $(".answer1").val(), $(".answer2").val(), $(".answer3").val()));
				} else {
					if ($(".second_answer").prop("checked") && $(".third_answer").prop("checked")) {
						testCheckbox.prototype = new test($(".question").val(), $(".answer1").val(), $(".answer2").val(), $(".answer3").val());
						var newTestCheckbox = new testCheckbox($(".answer2").val(), $(".answer3").val());
						questions.push(newTestCheckbox);
						test_arr.push(new test($(".question").val(), $(".answer1").val(), $(".answer2").val(), $(".answer3").val()));
					} else {
						if ($(".first_answer").prop("checked")) {
							testRadio.prototype = new test($(".question").val(), $(".answer1").val(), $(".answer2").val(), $(".answer3").val());
							var newTestRadio = new testRadio($(".answer1").val());
							questions.push(newTestRadio);
							test_arr.push(new test($(".question").val(), $(".answer1").val(), $(".answer2").val(), $(".answer3").val()));
						} else {
							if ($(".second_answer").prop("checked")) {
								testRadio.prototype = new test($(".question").val(), $(".answer1").val(), $(".answer2").val(), $(".answer3").val());
								var newTestRadio = new testRadio($(".answer2").val());
								questions.push(newTestRadio);
								test_arr.push(new test($(".question").val(), $(".answer1").val(), $(".answer2").val(), $(".answer3").val()));
							} else {
								if ($(".third_answer").prop("checked")) {
									testRadio.prototype = new test($(".question").val(), $(".answer1").val(), $(".answer2").val(), $(".answer3").val());
									var newTestRadio = new testRadio($(".answer3").val());
									questions.push(newTestRadio);
									test_arr.push(new test($(".question").val(), $(".answer1").val(), $(".answer2").val(), $(".answer3").val()));
								}
							}
						}
					}
				}
			}
		}
		localStorage.setItem('rightAnswers', JSON.stringify(questions));
		localStorage.setItem('test', JSON.stringify(test_arr));
		$modal.removeClass('hide');
		}
	});

	
});