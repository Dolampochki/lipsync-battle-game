$(document).ready(function() {
	var timerRewatch;
	
	var loadingTimer = 2000;
	var votesTimer = 500;
	
	// opening
	$( ".opening-screen" ).addClass(" animated slideInUp");
	$( ".heart-bg" ).addClass(" animated zoomIn");
	
	$(".opening-screen-sound").volume = 0.2;
	$(".opening-screen-sound").trigger('play');
	

	
	var video1 = document.querySelector('.choose-video-1');
	var video2 = document.querySelector('.choose-video-2');
	
	//if ( video1.readyState === 4 ) {
		loading = setTimeout(function(){		
			$( ".opening-screen" ).removeClass(" animated slideInUp").addClass(" animated slideOutUp");		
			$( ".heart-bg" ).removeClass(" animated zoomIn").addClass(" animated zoomOut");
			$(".choose-screen").removeClass("hide").addClass(" show animated rotateInUpLeft");
			$(".choose-video-1").trigger('play');
			$(".choose-video-2").trigger('play');		
		}, loadingTimer);	
	//}
	
	
	// choose
	
	$(".block-radio").click(function(){
		$(".choose-video-1").trigger('pause');
		$(".choose-video-2").trigger('pause');
		
		
		$(".overlay").removeClass('hide');
		$(".choose-blocks .block-votes").removeClass('hide');
		$(".choose-blocks .block-votes-progress").removeClass('hide');
		
		$(".lipsync_battle .choose-block .choose-video-container").animate({   height: "70%"  }, votesTimer);
		$(".lipsync_battle .choose-block .block-choose").animate({   height: "30%"  }, votesTimer);
		$(".lipsync_battle .choose-block .block-title").animate({   height: "30%", padding: "2% 6%"  }, votesTimer);
		

		
		votes = setTimeout(function(){		
			$(".choose-block.block-1 .block-votes-progress .block-votes-progress-white").after().animate({   width: "80%"  }, votesTimer);
			$(".choose-block.block-2 .block-votes-progress .block-votes-progress-white").after().animate({   width: "58%"  }, votesTimer);	
		}, votesTimer);
		
		
		if($("#block-radio-1").is(":checked")) {
			$(".result-screen .choose-block").css("background-color","#9b1458"); 
			$(".result-screen .choose-block .user-profile-pic").css("background-image","url('http://media.chosen.fm/chosen-fm-images/84/0a/d790c9e6c0b5e02c87b375e782ac01bc/Lipsync_83da7c539e1ab4e7_59623c38d8737e9e_Image.png')");
			$(".result-screen .block-title span").html("Jamie Soricelli");
			$(".result-screen .screen-title").html("Perfect Choice!<br /><small>You have chosen the winner</small>");
			$(".result-screen .game-large-icon img").attr("src", "img/game_icon_right_choice.png");
			$(".result-screen .result-screen-correct").addClass(" sound-play");
			$(".result-screen .result-screen-wrong").removeClass(" sound-play");
		}
		
		if($("#block-radio-2").is(":checked")) {
			$(".result-screen .choose-block").css("background-color","#2a82ba"); 
			$(".result-screen .choose-block .user-profile-pic").css("background-image","url('http://media.chosen.fm/chosen-fm-images/5e/06/46031b3d04dc90994ca317a7c55c4289/Lipsync_f8f122d50eba11c3_af5607575b277bc6_Image.png')");
			$(".result-screen .block-title span").html("Jeremi Floodman");
			$(".result-screen .screen-title").html("Wrong Choice");
			$(".result-screen .game-large-icon img").attr("src", "img/game_icon_wrong_choice.png");
			$(".result-screen .result-screen-correct").removeClass(" sound-play");
			$(".result-screen .result-screen-wrong").addClass(" sound-play");
		}
		
		
		$(".choose-screen").delay(1500).queue(function(next){
		    $(this).removeClass(" animated rotateInUpLeft").addClass(" animated slideOutUp");
		    next();
		});    
		    
		setTimeout(function(){
			$(".result-screen").removeClass("hide").addClass(" show animated slideInDown");
			$(".overlay").addClass('hide');
			$(".sound-play").volume = 0.5;
		    $(".sound-play").trigger('play');
		    $( ".heart-bg" ).removeClass(" animated zoomOut").addClass(" animated zoomIn");
		}, 2000);
		
		setTimeout(function(){
			$(".result-screen").removeClass(" animated rotateInUpLeft").addClass(" animated slideOutUp");
			$( ".heart-bg" ).removeClass(" animated zoomIn").addClass(" animated zoomOut");
		}, 5000);
		
		if($("#block-radio-1").is(":checked")) {
		
			setTimeout(function(){
				$(".xp-screen").removeClass("hide").addClass(" show animated fadeInUp");
				$(".xp-video").trigger('play');
			}, 5200);
			
			setTimeout(function(){
				$(".xp-screen").removeClass(" animated fadeInUp").addClass(" animated fadeOutUp");
			}, 8000);
			
			setTimeout(function(){
				$(".share-screen").removeClass("hide").addClass(" show animated slideInUp");
			}, 8500);		
		} else {
			setTimeout(function(){
				$(".share-screen").removeClass("hide").addClass(" show animated slideInUp");
			}, 5200);
		}
				
		
	});
	
	// rewatch
	
	$(".share-screen .block-1 .review-clip").click(function(){
		$(".card-screen .screen-label").html("Performance <strong>1</strong> from <strong>2</strong>"); 
		$(".card-screen .card-performance-details .screen-title").html("Jamie Soricelli"); 		
		$(".card-screen .rewatch-video-1").removeClass(" hide").addClass(" rewatch-video");
		$(".card-screen .rewatch-video-2").removeClass(" rewatch-video").addClass(" hide");
	});
	
	$(".share-screen .block-2 .review-clip").click(function(){
		$(".card-screen .screen-label").html("Performance <strong>2</strong> from <strong>2</strong>"); 
		$(".card-screen .card-performance-details .screen-title").html("Jeremi Floodman"); 
		$(".card-screen .rewatch-video-1").removeClass(" rewatch-video").addClass(" hide");
		$(".card-screen .rewatch-video-2").removeClass(" hide").addClass(" rewatch-video");
	});
	
	
	$(".share-screen .review-clip").click(function(){
		clearTimeout(timerRewatch);
		$(".share-screen").removeClass(" animated slideInRight").addClass(" animated rotateOutDownLeft");
		$(".card-screen").delay(400).queue(function(next){
		    $(this).removeClass("hide animated rotateOutDownRight").addClass(" show animated rotateInUpRight");
		    $('.rewatch-video')[0].currentTime=20;
		    $(".rewatch-video").trigger('play');
		    $(".game-card .card-performance-timer").html("<img src='img/timer.gif?timestamp=" + new Date().getTime() + "' />");
		    next();
		});
		
		timerRewatch = setTimeout(function(){
			$(".card-screen").removeClass(" animated rotateInUpRight").addClass(" animated rotateOutDownRight");
			$(".rewatch-video").trigger('pause');
			$(".share-screen").delay(300).queue(function(next){
			    $(this).removeClass(" animated rotateOutDownLeft").addClass(" animated rotateInUpLeft");
			    next();
			});
			timerRewatch = null;
		}, 15000);
		
	});
	
	// back to share
	
	
	
	$(".card-screen .top-right-icon").click(function(){
		$(".card-screen").removeClass(" animated rotateInUpRight").addClass(" animated rotateOutDownRight");
		$(".rewatch-video").trigger('pause');
		$(".share-screen").delay(300).queue(function(next){
		    $(this).removeClass(" animated rotateOutDownLeft").addClass(" animated rotateInUpLeft");
		    next();
		});
	});		
	
	// next round
	
	$(".share-screen .game-result-button").click(function(){
		location.reload();
	});
	
	

});

