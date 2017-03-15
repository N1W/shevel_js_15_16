$(function(){

	$(".btn").click(function(e){
		e.preventDefault();
		$('.result_box').empty();
		var API_KEY = '4816270-af36daff094a60749f62b82b6';
		var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+$("#find").val()+"&per_page=21";
		$.getJSON(URL, function(data){
			if (parseInt(data.totalHits) > 0)
				$.each(data.hits, function(i, hit){ 
					console.log(data);
					console.log(hit.previewURL); 
					$('.result_box').append('<img src="' + hit.previewURL + '" alt="">');
				});
			else
				console.log('No hits');
		});
	});
});
