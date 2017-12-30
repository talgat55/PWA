// ---------------------------------------------------------
// !!!!!!!!!!!!!!!!!document ready!!!!!!!!!!!!!!!!!!!!!!!!!!
// ---------------------------------------------------------
 
jQuery(document).ready(function(){
	"use strict"; 

InitSearch();
InitMobilMenu();
backToTop();
InitXSlider(); 
var ua = navigator.userAgent;
if(ua.search(/MSIE/) > 0 || ua.search(/Opera/) > 0 || ua.search(/Chrome/) > 0 ){
	InitAnimations();
}
InitCounter();
InitBg();
InitTestimonials();
InitPortfolioSlider();
InitPortfolioFitRows(); 
InitRotator(); 
if(ua.search(/MSIE/) > 0 || ua.search(/Opera/) > 0 || ua.search(/Chrome/) > 0 ){
	InitHeaderSticky();
}

InitHeaderBottom();
InitContentSlider(); 
InitPostList();
InitLeftMenu(); 
InitBlogSlider();
Initfitsvideo();
InitAudio(); 
InitAccordion();
InitShopTab();
Initbacksize();
InitTabs();
InitFilterPortfolio(); 
InitHeaderFixed(); 
InitEventList(); 
InitMasonry(); 
InitAccordions();
// end redy function
});
 
function InitMasonry(){
	"use strict";
	
//------------------
//    Masonry
//------------------- 
	"use strict";
	
	if(jQuery('.masonry-posts').length){	
			var isotopeclass = jQuery('.masonry-posts.redy'); 
			  jQuery('.masonry-posts.redy').waitForImages( function(){
				jQuery('.masonry-posts.redy').isotope({  
				  itemSelector : '.post-wrapper' 
				});
			  }); 
				
			jQuery(window).resize(function() {
				
				jQuery('.masonry-posts.redy').isotope('layout');
				
			});
	 
	 
	}
}	
 		var repeatmasinit = setTimeout(function(){
			InitMasonry();
			clearTimeout(repeatmasinit);
		},400); 
/*
* Sevents
*/
function InitEventList(){
	"use strict";
	
	if(jQuery('.events-row').length){
		if(jQuery(window).width() > 1000 ){ 
			jQuery(".events-item").hover(
			function() {
				
				jQuery('.events-item').css('width', '20%'); 
				jQuery(this).css('width', '40%');
			}, function() {
				jQuery(this).css('width', '25%');
				jQuery('.events-item').css('width', '25%'); 
			});
		}
	}
}
//------------------
//    Accordion
//-------------------
function InitAccordions(){
	"use strict";
	
	if(jQuery('#accordion').length){

	 jQuery("#accordion").accordion();
	}
}	
 
 
//------------------
//    Filterable Portfolio
//-------------------
function InitFilterPortfolio(){
	"use strict";

	jQuery('.filter a').click(function(){
		var $this = jQuery(this).parent('li');
		if ( $this.hasClass('active') ) {
			return;
		}

		var $optionSet = $this.parents('.filter');
		$optionSet.find('.active').removeClass('active');
		$this.addClass('active');

		var selector = jQuery(this).attr('data-filter');
		jQuery('.portfolio-grid').isotope({ filter: selector });

			 
		return false;
	});
}
//------------------
//    Init Tabs 
//-------------------
function InitTabs(){
	"use strict";
	if(jQuery('.tabs').length){
		jQuery('.tabset-one').pwstabs({
		   effect: 'scale',
		   defaultTab: 3,
		   responsive: true, 
		   containerWidth: '100%'
		});
		jQuery('.tabset-two').pwstabs({
		   effect: 'slideleft',
		   defaultTab: 1,
		   responsive: true, 
		   containerWidth: '100%',
		   tabsPosition: 'vertical',
		   verticalPosition: 'left'
		});
	}
}

//------------------
//    Init Background 
//-------------------
function Initbacksize(){
	"use strict";
	if(jQuery('.backsize').length){

			var windowheightabout = jQuery(window).height(); 
			var windowwidthtabout = jQuery(window).width();
					jQuery(window).scroll(function() {
			
						if (jQuery(this).scrollTop() > windowheightabout){ 
							jQuery(".backsize").css({display: "none"}); 
						}else{
							jQuery(".backsize").css({display: "block"}); 
						}
				
					});
					// height 
					jQuery(".container-backsize").css({height: windowheightabout});
					if (windowwidthtabout > 1100){ 
						skrollr.init({
							edgeStrategy: "set",
							smoothScrolling: true,
							forceHeight: false
						});
						jQuery(".backsize").css({position: 'fixed'}); 
						
					
					} else{ 
					
						jQuery(".backsize").css({position: 'relative'}); 
						
					}
	}
}
//------------------
//    Shop TAbs
//-------------------
function InitShopTab(){
	"use strict";
	if(jQuery('.shop-tabs-single').length){
		jQuery('.shop-tabs-single').find('h4').click(function(){
			   jQuery(this).next().stop().slideToggle();
		}).next().stop().hide();
	}
}
//------------------
//    Accordion
//-------------------
function InitAccordion(){
	"use strict";
	if(jQuery('.accordion').length){
		jQuery('.accordion').find('li h5').click(function(){
			   jQuery(this).next().stop().slideToggle();
			   jQuery(this).toggleClass("accordion-open");
		}).next().stop().hide();		
	}
}

 

//------------------
//    Audio
//-------------------
function InitAudio(){
	"use strict";
	
	if(jQuery('audio').length){	
		jQuery( 'audio' ).mediaelementplayer({
			audioWidth: '100%'
		});
	}
}	
//------------------
//    FitVids
//-------------------
function Initfitsvideo(){
	"use strict";
	
	if(jQuery('.post-thumb-video').length){	
 		jQuery('.post-thumb-video').fitVids(); 
	}
}	
//------------------
//    Blog Slider
//-------------------
function InitBlogSlider(){
	"use strict";
	
	if(jQuery('.post-thumb-gallery').length){	
 		jQuery('.post-thumb-gallery').owlCarousel({
			navigation : true,
			autoPlay: true,
			pagination: false,
			singleItem: true 
		 });
	}
}	
 

//------------------
//   Left Menu
//-------------------
function InitLeftMenu(){
	"use strict";
	
	if(jQuery('.main-navigation-left').length){ 
		jQuery( '.main-navigation-left li:has(ul)' ).append('<i class="fa fa-angle-down"></i>');
			 
		if( jQuery(window).width() > 1020 ){
			jQuery('.main-navigation-left ').dcAccordion({
				eventType: 'click',
				autoClose: true,
				saveState: false,
				disableLink: true,
				menuClose: true,
				speed: 'fast', 
			});	
		}
	}
}	
			 
 
//------------------
//    Post List
//-------------------
function InitPostList(){
	"use strict";
	
	if(jQuery('.post-list-wrapper').length){
		if(jQuery(window).width() > 768 ){ 
			jQuery(".post-lists-holder").hover(
			function() {
				jQuery(this).css({'height': 500});
				jQuery('.postlistcontent').delay(400).fadeIn(); 
			}, function() {
				jQuery(this).css({'height': 200});
				jQuery('.postlistcontent').hide(); 
			});
		}
	}
}	

//------------------
//    Content Slider
//-------------------
function InitContentSlider(){
	"use strict";
	
	if(jQuery('.content-slider').length){	
 		jQuery('.content-slider').owlCarousel({
			navigation : false,
			autoPlay: true,
			singleItem:true
		 });
	}
}	
//------------------
//    Headers Bottom
//-------------------
function InitHeaderBottom(){
	"use strict";
	
	if(jQuery('.header-bottom-slider').length){	
 			jQuery('.main-navigation').onePageNav();		
	}
}		
	
//------------------
//  Fix Headers
//-------------------
function InitHeaderSticky(){
	"use strict";
	
	if(jQuery('.header-type-four-sticky, .header-type-tree-sticky').length){	
	
		jQuery(".header-type-four-sticky, .header-type-tree-sticky").scrollFix();
	
	}
}


//------------------
// Height Rotator Slider
//-------------------
function InitRotator(){
	"use strict";
	
	if(jQuery('.slider-rotator-wrap').length){	
			var heightvideosliderr = jQuery(window).height();
					jQuery(".full-widt-slider-rotator, .slider-rotator-wrap").css({height: heightvideosliderr });
					if(jQuery(window).width() > 768 ){ 
						skrollr.init({
								edgeStrategy: "set",
								smoothScrolling: true,
								forceHeight: false
						});
					}
	
					jQuery(window).scroll(function() {
			
						if (jQuery(this).scrollTop() > heightvideosliderr +7){ 
							jQuery(".slider-rotator-wrap").css({display: "none" }); 
						}else{
							jQuery(".slider-rotator-wrap").css({display: "block" }); 
						}
				
					});
	
	}
}
 
//------------------
//   Fit Rows Portfolio
//-------------------

function InitPortfolioFitRows(){
	"use strict";
	
	if(jQuery('.portfolio-grid.fitrows').length){  
				jQuery('.portfolio-grid.fitrows').waitForImages( function(){
				jQuery('.portfolio-grid.fitrows').isotope({  
				  itemSelector : '.portfolio-item', 
				  layoutMode: 'fitRows'
				});
			  }); 
				
			jQuery(window).resize(function() {
				
				jQuery('.portfolio-grid.fitrows').isotope('layout');
				
			});
	}
}
 		var repeatportfolioinit = setTimeout(function(){
			InitPortfolioFitRows();
			clearTimeout(repeatportfolioinit);
		},400); 
//------------------
//  Slider Portfolio
//-------------------
function InitPortfolioSlider(){
	"use strict";
	if(jQuery('.portfolio-item-holder-slider').length){	
		jQuery('.portfolio-item-holder-slider').bxSlider({ 
			auto: true,
			pager: false,
			controls: false
			
		});
	}
}

//------------------
// Testimonials Slider
//-------------------
function InitTestimonials(){
	"use strict";
	if(jQuery('.test-newslider').length){	
		jQuery('.test-newslider').flexslider({
                animationLoop: true, 
				directionNav: false,
                pauseOnAction: true,
                pauseOnHover: false, 
                itemMargin: 0, 
                minItems: 1,
                maxItems: 1 
		});
	}
}
// ---------------------------------------------------------
//  Bg
// --------------------------------------------------------- 
function InitBg(){
	"use strict"; 
	if(jQuery('div[data-type="background"]').length){
		var bgwindowwidth = jQuery(window).width();
		if(bgwindowwidth > 1020){
			var $objWindow = jQuery(window);
			jQuery('div[data-type="background"]').each(function(){
				var $bgObj = jQuery(this);
				jQuery(window).scroll(function() {
					var yPos = -($objWindow.scrollTop() / $bgObj.data('speed'));
					var coords = '100% '+ yPos + 'px';
					$bgObj.css({ backgroundPosition: coords });

				});
			});
		}else{
			var $objWindow = jQuery(window);
			jQuery('div[data-type="background"]').each(function(){
				var $bgObj = jQuery(this); 
					var coords = '100%';
					$bgObj.css({ backgroundPosition: coords });

			 
			});
		}
		 
		
	}
}
//---------------------
// Counter
//----------------------
function InitCounter(){
	"use strict"; 
	if(jQuery('.counter').length){
	   
			jQuery('.counter').each(function() {
				jQuery(this).appear(function() {
					jQuery(this).countTo();
				 
				},{accX: 0, accY: -50});
			});
	}
}
//--------------------------
// Animations
//--------------------------
function InitAnimations(){
	"use strict";
	
new WOW().init();
}

//--------------------------
// Headers
//--------------------------
function InitHeaderFixed(){
	if(jQuery('.header-type-one, .header-type-two').length){  
				jQuery(window).scroll(function() { 
						var windowwidth4 = jQuery(window).width();
						if (windowwidth4 >= 1020){   
							if (jQuery(this).scrollTop() >0){  
								jQuery(".full-header").addClass("fixedheader_show");  
								
							}else{ 
								jQuery(".full-header").removeClass("fixedheader_show");  
							}
						}else{ 
							jQuery(".full-header").removeClass("fixedheader_show"); 
						}

					});
	}	
}
//--------------------------
// X Slider
//--------------------------
function InitXSlider(){
	"use strict";	          
	if(jQuery('.swiper-containers').length){          
		var swiperSlider = new Swiper('.swiper-containers',{ 
							slidesPerView: 1, 
							simulateTouch: false,
							pagination: '.pagination-slider',  
							paginationClickable: true,
							loop: true,
							 onSwiperCreated: function(swiper){
								jQuery('.animation-captions').each(function(){
									var $animtionclass = jQuery(this);
									var $animationdelay = jQuery(this).attr('data-delay-animation');
									var $animationdelaytime = 0;
										if( $animationdelay ) { 
											$animationdelaytime = Number( $animationdelay ) + 700; 
										} else { 
											$animationdelaytime = 700; 
										}
											if( !$animtionclass.hasClass('animation-activex') ) {
												$animtionclass.addClass('animation-noactivex'); 
												var elementanimation = $animtionclass.attr('animation-captions');
													setTimeout(function() {
														$animtionclass.removeClass('animation-noactivex').addClass( elementanimation + ' animation-activex');
													}, $animationdelaytime);
											}
								}); 
								 jQuery('.swiper-containers .swiper-slide').each(function(){
									if(jQuery(this).find('video').length > 0) { 
										jQuery(this).find('video').get(0).pause(); 
										jQuery(".videocarousel").prop("muted", true);
									}
								});
								
								var $menulogosx = jQuery(".swiper-slide-active"); 
								if($menulogosx.hasClass("dark")){
									 jQuery('.full-header').addClass('headers-dark').removeClass('headers-light'); 
									 jQuery('.light-logo').hide();
									 jQuery('.dark-logo').show();
									 jQuery('.pagination-slider').addClass('pagin-dark').removeClass('pagin-light');
									 jQuery('.swiper-containers').addClass('arrows-dark').removeClass('arrows-light'); 
								}else if($menulogosx.hasClass("light")){
									jQuery('.light-logo').show();
									jQuery('.pagination-slider').addClass('pagin-light').removeClass('pagin-dark');
									jQuery('.full-header').addClass('headers-light').removeClass('headers-dark'); 
									jQuery('.swiper-containers').addClass('arrows-light').removeClass('arrows-dark');
									jQuery('.dark-logo').hide(); 
								} 
							},
							 onSlideChangeStart: function(swiper){
							 jQuery('.animation-captions').each(function(){
										var $animtionclass = jQuery(this);
										var elementanimation = $animtionclass.attr('animation-captions');
										$animtionclass.removeClass('animation-activex').removeClass(elementanimation).addClass('animation-noactivex');
								});
									var $menulogosx = jQuery(".swiper-slide-active"); 
								if($menulogosx.hasClass("dark")){
									 jQuery('.dark-logo').show();
									 jQuery('.full-header').addClass('headers-dark').removeClass('headers-light'); 
									 jQuery('.swiper-containers').addClass('arrows-dark').removeClass('arrows-light');
									 jQuery('.pagination-slider').addClass('pagin-dark').removeClass('pagin-light');
									 jQuery('.light-logo').hide(); 
								}else if($menulogosx.hasClass("light")){
									jQuery('.light-logo').show();
									jQuery('.pagination-slider').addClass('pagin-light').removeClass('pagin-dark');
									jQuery('.full-header').addClass('headers-light').removeClass('headers-dark'); 
									jQuery('.swiper-containers').addClass('arrows-light').removeClass('arrows-dark');
									jQuery('.dark-logo').hide(); 
								} 
								
							 },
							onSlideChangeEnd: function(swiper){
								jQuery('.swiper-containers .swiper-slide').each(function(){
									if(jQuery(this).find('video').length > 0) { 
										jQuery(this).find('video').get(0).pause(); 
										jQuery(".videocarousel").prop("muted", true);
									}
								});
								jQuery('.swiper-containers .swiper-slide:not(".swiper-slide-active")').each(function(){
									if(jQuery(this).find('video').length > 0) {
										if(jQuery(this).find('video').get(0).currentTime != 0 ){
											jQuery(this).find('video').get(0).currentTime = 0;
											
										}
									}
								});
								if( jQuery('.swiper-containers .swiper-slide.swiper-slide-active').find('video').length > 0 ) { 
									jQuery('.swiper-containers .swiper-slide.swiper-slide-active').find('video').get(0).play(); 
									 
								}

								jQuery('.swiper-containers .swiper-slide.swiper-slide-active .animation-captions').each(function(){
									var $animtionclass = jQuery(this);
									var $animationdelay = jQuery(this).attr('data-delay-animation');
									var $animationdelaytime = 0;
									if( $animationdelay ) { 
										$animationdelaytime = Number( $animationdelay ) + 300; 
									} else { 
										$animationdelaytime = 300; 
									}
									if( !$animtionclass.hasClass('animation-activex') ) {
										$animtionclass.addClass('animation-noactivex'); 
										var elementanimation = $animtionclass.attr('animation-captions');
										setTimeout(function() {
											$animtionclass.removeClass('animation-noactivex').addClass( elementanimation + ' animation-activex');
										}, $animationdelaytime);
									}
								});
							}
							
							});
							
					jQuery('#slider-arrow-left, #slider-arrow-left-type-two').on('click', function(e){
							e.preventDefault();
							swiperSlider.swipePrev();
							swiperSlider.stopAutoplay();
							swiperSlider.params.autoplay = 4000;
							swiperSlider.startAutoplay();
						});

						jQuery('#slider-arrow-right, #slider-arrow-right-type-two').on('click', function(e){
							e.preventDefault();
							swiperSlider.swipeNext();
							swiperSlider.stopAutoplay();
							swiperSlider.params.autoplay = 4000;
							swiperSlider.startAutoplay();
						});
						
					var heightvideosliderr = jQuery(window).height();
					jQuery(".swiper-containers, .swiper-slide").css({height: heightvideosliderr });
					if(jQuery(window).width() > 768 ){ 
						skrollr.init({
								edgeStrategy: "set",
								smoothScrolling: true,
								forceHeight: false
						});
					}  
					jQuery(window).scroll(function() {
			
						if (jQuery(this).scrollTop() > heightvideosliderr +7){ 
							jQuery(".swiper-slide").css({display: "none" });
							jQuery(".swiper-containers").css({"visibility": "hidden"});
						}else{
							jQuery(".swiper-slide").css({display: "block" });
							jQuery(".swiper-containers").css({"visibility": "visible"});
						}
				
					});
	}
}
// ---------------------------------------------------------
// Back To Top
// --------------------------------------------------------- 
function backToTop(){
	"use strict";
	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() > 100) {
			jQuery('#back_to_top').addClass('backactive');
		} else {
			jQuery('#back_to_top').removeClass('backactive');
		}
	});
	jQuery(document).on('click','#back_to_top',function(e){
		e.preventDefault();
		
		jQuery('body,html').animate({scrollTop: 0}, jQuery(window).scrollTop()/3, 'linear');
	});
	
}
// ---------------------------------------------------------
// Search
// --------------------------------------------------------- 
function InitSearch(){
	"use strict";
	if(jQuery("#top-search-trigger").length){
			/*jQuery("#top-search-trigger").click(function(){
				 jQuery('.search-wrapper').fadeIn();
			});*/
			 
			jQuery("#top-search i").click(function(){
				jQuery('.search-wrapper').toggleClass("search-open");
				return false;
			});
	}
}
// ---------------------------------------------------------
// Mobil Menu
// ---------------------------------------------------------

function InitMobilMenu(){
	"use strict";

		var widthmobil = jQuery(window).width();
	if( widthmobil > 1020 ){ 
			jQuery('.main-navigation').superfish({
				autoArrows:  false,
				dropShadows: false 
			});
		jQuery( '.main-row-menu ul li:has(ul)' ).append('<i class="fa fa-angle-right"></i>');
	}else{
		 
		jQuery( '.main-navigation ul li:has(ul), .main-navigation-left ul li:has(ul)' ).append('<i class="fa fa-angle-down"></i>');
		jQuery('.main-navigation, .main-navigation-left').find('li a').click(function(){
			   jQuery(this).next().stop().slideToggle();
		}).next().stop().hide();
		jQuery('.main-navigation  ul, .main-navigation-left ul').hide();	
		
			jQuery(".mobil-menu .fa-bars").click(function(){
				 jQuery('.main-navigation, .main-navigation-left').fadeIn();
					  jQuery('.mobil-menu .fa-bars').hide();
					  jQuery('.mobil-menu .fa-times').show();
				 
			});
			jQuery(".mobil-menu .fa-times").click(function(){
				 jQuery('.main-navigation, .main-navigation-left').fadeOut();
					  jQuery('.mobil-menu .fa-bars').show();
					  jQuery('.mobil-menu .fa-times').hide();
				 
			});
	}	 
} 

	 

		 
 