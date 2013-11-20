if($.browser.mozilla||$.browser.opera){document.removeEventListener("DOMContentLoaded",$.ready,false);document.addEventListener("DOMContentLoaded",function(){$.ready()},false)}$.event.remove(window,"load",$.ready);$.event.add( window,"load",function(){$.ready()});$.extend({includeStates:{},include:function(url,callback,dependency){if(typeof callback!='function'&&!dependency){dependency=callback;callback=null}url=url.replace('\n','');$.includeStates[url]=false;var script=document.createElement('script');script.type='text/javascript';script.onload=function(){$.includeStates[url]=true;if(callback)callback.call(script)};script.onreadystatechange=function(){if(this.readyState!="complete"&&this.readyState!="loaded")return;$.includeStates[url]=true;if(callback)callback.call(script)};script.src=url;if(dependency){if(dependency.constructor!=Array)dependency=[dependency];setTimeout(function(){var valid=true;$.each(dependency,function(k,v){if(!v()){valid=false;return false}});if(valid)document.getElementsByTagName('head')[0].appendChild(script);else setTimeout(arguments.callee,10)},10)}else document.getElementsByTagName('head')[0].appendChild(script);return function(){return $.includeStates[url]}},readyOld:$.ready,ready:function(){if($.isReady) return;imReady=true;$.each($.includeStates,function(url,state){if(!state)return imReady=false});if(imReady){$.readyOld.apply($,arguments)}else{setTimeout(arguments.callee,10)}}});
$.include('js/superfish.js')
$.include('js/jquery.hoverIntent.minified.js')
$.include('js/tms-0.4.1.js')
$.include('js/uCarousel.js')
$.include('js/jquery.easing.1.3.js')
$.include('js/jquery.ui.totop.js')
$.include('js/jquery.backgroundPosition.js')
$(function(){	
	if($('#form1').length)$.include('js/forms.js');
	$('.carousel').uCarousel({show:5,buttonClass:'car-button', pageStep:1, shift:false})
$('.slider')._TMS({
		prevBu:'.prev',
		nextBu:'.next',
		playBu:'.play',
		duration:500,
		items:'.items li',
		pagination:true,
		banners:true,
		pauseOnHover:true,
		easing:'',
		bannerEasing:'easeInOutBack',
		preset:'zabor',
		slideshow:8000,
		numStatus:false,
		banners:'fromLeft',// fromLeft, fromRight, fromTop, fromBottom
		waitBannerAnimation:false})

$('.slider')._TMS({
		prevBu:'.prev',
		nextBu:'.next',
		playBu:'.play',
		duration:500,
		items:'.items li',
		pagination:true,
		banners:true,
		pauseOnHover:true,
		easing:'',
		bannerEasing:'easeInOutBack',
		preset:'zabor',
		slideshow:8000,
		numStatus:false,
		banners:'fromLeft',// fromLeft, fromRight, fromTop, fromBottom
		waitBannerAnimation:false})

// list-1 hover
	$('.list-1 li').hover(function(){
	  $(this).stop().animate({backgroundPosition:'5px 9px'},200)       
	 }, function(){
	  $(this).stop().animate({backgroundPosition:'0px 9px'},200)       
	 })

// box-hover

			$('.box-1 .bgr').css({opacity:'0'});
			$(".box-1").hover(function(){
				$(this).addClass("alt").find('.bgr').stop().animate({opacity:1}, "low");
			}, function(){
				$(this).removeClass("alt").find('.bgr').stop().animate({opacity:0}, "low");
			});

// list hover
	$('.list-2 li').hover(function(){
			th=$(this).find('a');					 
			th.stop().animate({left:'15px'}, 300);
		}, function(){
			th.stop().animate({left:'0px'}, 300);			
	});	

// list hover
	$('.block').hover(function(){
			var th=$(this);					 
			th.find('img').stop().animate({top:'10px'}, 600,'easeOutBounce');
		}, function(){
			var th=$(this);
			th.find('img').stop().animate({top:'0px'}, 600,'easeOutBounce');
	});	
	
///// jumper ////////////
		$('.hr').click(
			function (e) {
				$('html, body').animate({scrollTop: '0px'}, 800);
				return false;
			}
		);	
		$().UItoTop({ easingType: 'easeOutQuart' });
});
function onAfter(curr, next, opts, fwd){var $ht=$(this).height();$(this).parent().animate({height:$ht})}
