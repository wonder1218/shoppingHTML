//购物车start
$(function(){
						;(function(){
							let shop=$(".cart");
							let shop_hide=$(".gouwu-erji");
							shop.hover(function(){
								shop_hide.stop(true).slideDown();
							},function(){
								shop_hide.stop(true).slideUp();
							})
						})()
					});
//购物车end

//app start
$(function(){
						;(function(){
							let shop=$(".yiji");
							let shop_hide=$(".erji-phot");
							shop.hover(function(){
								shop_hide.stop(true).slideDown();
							},function(){
								shop_hide.stop(true).slideUp();
							})
						})()
					});
//app end
// //主导航二级start

// //主导航二级end

// //主导航二级start
// $(function(){
// 						;(function(){
// 							let shop=$(".link2");
// 							let shop_hide=$(".erji1");
// 							shop.hover(function(){
// 								shop_hide.stop(true).slideDown();
// 							},function(){
// 								shop_hide.stop(true).slideUp();
// 							})
// 						})()
// 					});
// //主导航二级end
// //主导航二级start
// $(function(){
// 						;(function(){
// 							let shop=$(".link3");
// 							let shop_hide=$(".erji2");
// 							shop.hover(function(){
// 								shop_hide.stop(true).slideDown();
// 							},function(){
// 								shop_hide.stop(true).slideUp();
// 							})
// 						})()
// 					});
// //主导航二级end
// //主导航二级start
// $(function(){
// 						;(function(){
// 							let shop=$(".link4");
// 							let shop_hide=$(".erji3");
// 							shop.hover(function(){
// 								shop_hide.stop(true).slideDown();
// 							},function(){
// 								shop_hide.stop(true).slideUp();
// 							})
// 						})()
// 					});
// //主导航二级end
// //主导航二级start
// $(function(){
// 						;(function(){
// 							let shop=$(".link5");
// 							let shop_hide=$(".erji4");
// 							shop.hover(function(){
// 								shop_hide.stop(true).slideDown();
// 							},function(){
// 								shop_hide.stop(true).slideUp();
// 							})
// 						})()
// 					});
// //主导航二级end
// //主导航二级start
// $(function(){
// 						;(function(){
// 							let shop=$(".link6");
// 							let shop_hide=$(".erji5");
// 							shop.hover(function(){
// 								shop_hide.stop(true).slideDown();
// 							},function(){
// 								shop_hide.stop(true).slideUp();
// 							})
// 						})()
// 					});
// //主导航二级end
// //主导航二级start
// $(function(){
// 						;(function(){
// 							let shop=$(".link7");
// 							let shop_hide=$(".erji6");
// 							shop.hover(function(){
// 								shop_hide.stop(true).slideDown();
// 							},function(){
// 								shop_hide.stop(true).slideUp();
// 							})
// 						})()
// 					});
// //主导航二级end
//搜索框start
var menu_div =  $(".menu input");
			var menu_input = $("#menu_a");
			var menu_ul = $(".menu ul");
			var menu_li = $(".menu ul li");
			
			/*点击出现子菜单*/
			menu_div.click(function(){
				
				$(".menu ul").show();
				menu_input.css("color","red");
				menu_ul.css("height","auto");
			  
			});
			
			/*点击子菜单获取文本并替换主菜单内容*/
			
			menu_li.click(function(){
			    
			    menu_input.val($(this).attr('name')); 
			    menu_ul.css("display","none");
				
			});
			
			/*文本外点击隐藏菜单*/
			
			$(document).bind("click",function(e){
			    var target = $(e.target);
			    if(target.closest(".menu").length == 0){
			        
			        menu_ul.css("display","none");
					
			    }
			});
//搜索框end
//侧边栏start

$(window).scroll(function () {
			    var this_scrollTop = $(this).scrollTop();
			    if (this_scrollTop > 800) {
			        $(".home5").slideDown();
			    } else {
			        $(".home5").slideUp();
			    }
			
			});

//侧边栏end