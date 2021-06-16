//时间倒计时start
function getRevTime(){
	let curd=new Date();
	let curTime=curd.getTime();
	
	let fd=new Date('2022-01-01 00:00:00');
	
	let fTime=fd.getTime();
	let sTime=fTime-curTime;
	let hours=Math.floor(sTime/(1000*60*60));
	sTime=sTime%(1000*60*60);
	let minutes=Math.floor(sTime/(1000*60));
	sTime=sTime%(1000*60);
	let seconds=Math.floor(sTime/(1000));
	sTime=sTime%(1000);
	document.querySelector("#hours").innerHTML=hours;
	document.querySelector("#minutes").innerHTML=minutes;
	document.querySelector("#seconds").innerHTML=seconds;
}
	setInterval(getRevTime,1000);
	function getD(n){
	if(n<10){
		return '0'+n;
	}
return n;
console.log(n);
}
//时间倒计时end

// 搜索框开始
				var menu_div =  $(".menu input");
				var menu_input = $("#menu_a");
				var menu_ul = $(".menu ul");
				var menu_li = $(".menu ul li");
				
				/*点击出现子菜单*/
				menu_div.click(function(){
					
					$(".menu ul").show();
					// menu_ul.css("color","red");
					// menu_input.css("border","1px solid red");
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
				})

// 搜索框结束

// 悬浮改变样式开始
let li=document.querySelector(".li");
						let xiaomi=document.querySelector(".xiaomi");
					
						
					
						
						
						let li1=document.querySelector(".li1");
						let xiaomi1=document.querySelector(".xiaomi1");
						
						let li2=document.querySelector(".li2");
						let xiaomi2=document.querySelector(".xiaomi2");
						
						let li3=document.querySelector(".li3");
						let xiaomi3=document.querySelector(".xiaomi3");
						
						let li4=document.querySelector(".li4");
						let xiaomi4=document.querySelector(".xiaomi4");
						
						let li5=document.querySelector(".li5");
						let xiaomi5=document.querySelector(".xiaomi5");
						li.onmouseover=function(){
							xiaomi.style.color='#FF6700'
							
							
						}
						li.onmouseout=function(){
							xiaomi.style.color='#fff'
						}
						li1.onmouseover=function(){
							xiaomi1.style.color='#FF6700'
						}
						li1.onmouseout=function(){
							xiaomi1.style.color='#fff'
						}
						li2.onmouseover=function(){
							xiaomi2.style.color='#FF6700'
						}
						li2.onmouseout=function(){
							xiaomi2.style.color='#fff'
						}
						li3.onmouseover=function(){
							xiaomi3.style.color='#FF6700'
						}
						li3.onmouseout=function(){
							xiaomi3.style.color='#fff'
						}
						li4.onmouseover=function(){
							xiaomi4.style.color='#FF6700'
						}
						li4.onmouseout=function(){
							xiaomi4.style.color='#fff'
						}
						li5.onmouseover=function(){
							xiaomi5.style.color='#FF6700'
						}
						li5.onmouseout=function(){
							xiaomi5.style.color='#fff'
						}
// 悬浮改变样式结束
// 轮播图开始
let imgs=document.querySelector('.imgs');
					
					let circlesLi=document.querySelectorAll('.circles li');
					
					let leftbtn=document.querySelector('.left-btn');
					let rightbtn=document.querySelector('.right-btn');
					let num=0;
					
					// 点击圆圈切换图片
								for(let i=0;i<circlesLi.length;i++){
									circlesLi[i].onclick=function(){
										num=i;
										changeImg();
									}
								}
								//左右按钮换图
								leftbtn.onclick=function(){
									num--;
									changeImg();
								}
								rightbtn.onclick=function(){
									num++;
									changeImg();
								}
								
								//自动播放;
							setInterval(function(){
									num++;
									changeImg();
								},6000);
								function stop1(){
									clearInterval(timer)
								}
								// 换图函数
								function changeImg(){
									// 判断num索引超出范围，循环播放
									if(num<0){
										num=4;
									}
									if(num>4){
										num=0;
									}
									// if(imgs.style.left>="-980.8*num+'px'"){
									// 	imgs.style.left=0*num+'px';
									// }
									imgs.style.left=-1226*num+'px';
									for(let j=0;j<circlesLi.length;j++){
										circlesLi[j].className=j==num? 'active':'';
									}
									
								}
// 轮播图结束
// 4个图片轮播开始
let fl=document.querySelector(".ul");
								console.log(fl);
								let Li=document.querySelectorAll('.ul li');
								let prev=document.querySelector('.prev');
								let next=document.querySelector('.next');
								let num1=0;
								let t;
								for(let i=0;i<Li.length-6;i++){
									
										num1=i;
										console.log(num1)
									
									
								}
								//左右按钮换图
								prev.onclick=function(){
									num1++;
									changeImg1();
									stop();
								}
								next.onclick=function(){
									num1++;
									changeImg1();
									stop();
								}
								//自动播放;
								setInterval(function(){
									num1++;
									changeImg1();
								},6000);
								function stop()
								{
								clearTimeout(t);
								}
								// 换图函数
								function changeImg1(){
									// 判断num索引超出范围，循环播放
									if(num1<1){
										num1=0;
									}
									if(num1>1){
										num1=0;
									}
									if(fl.style.left>="-978*num1+'px'"){
										fl.style.left=0*num1+'px';
									}
									fl.style.left=-978*num1+'px';
									
								}
// 4个图片轮播结束
// 菜单固定定位开始
		
			let oNav=document.querySelector('.header');
			console.log(oNav);
			 window.onscroll=function(){
			 	let sTop=document.documentElement.scrollTop;
				
			 	if(sTop>=300){
			 		oNav.className='header fixed';
					
			 		
			 	}else{
			 		oNav.className='header';
					
			 	}
			 }
	
//菜单固定定位结束
//右侧导航栏开始

			let home=document.querySelector('.home');
			let span1=document.querySelector(".span");
			let img11=document.querySelector(".img1");
			let img12=document.querySelector(".img2");
			let er=document.querySelector(".pop-content");
			
			
			let home1=document.querySelector('.home1');
			let span2=document.querySelector(".span1");
			let img13=document.querySelector(".img3");
			let img14=document.querySelector(".img4");
			
			let home2=document.querySelector('.home2');
			let span3=document.querySelector(".span2");
			let img15=document.querySelector(".img5");
			let img16=document.querySelector(".img6");
			
			let home3=document.querySelector('.home3');
			let span4=document.querySelector(".span3");
			let img17=document.querySelector(".img7");
			let img18=document.querySelector(".img8");
			
			let home4=document.querySelector('.home4');
			let span5=document.querySelector(".span5");
			let img19=document.querySelector(".img9");
			let img110=document.querySelector(".img10");
			
			let home5=document.querySelector('.home5');
			let span6=document.querySelector(".span6");
			let img111=document.querySelector(".img11");
			let img112=document.querySelector(".img12");
			// console.log(img11);
			// console.log(home);
			home.onmouseover=function(){
				img11.style.display='none';
				img12.style.display='block';
				span1.style.color='#ff6700';
				er.style.position='fixed';
				er.style.right='100px';
				er.style.left='auto';
				er.style.marginTop='115px';
				er.style.opacity='1';
				er.style.visibility='visible';
			}
			home.onmouseout=function(){
				img11.style.display='block';
				img12.style.display='none';
				span1.style.color='#757575';
				er.style.opacity='0';
				er.style.visibility='hidden';
			}
			home1.onmouseover=function(){
				img13.style.display='none';
				img14.style.display='block';
				span2.style.color='#ff6700';
			}
			home1.onmouseout=function(){
				img13.style.display='block';
				img14.style.display='none';
				span2.style.color='#757575';
			}
			home2.onmouseover=function(){
				img15.style.display='none';
				img16.style.display='block';
				span3.style.color='#ff6700';
			}
			home2.onmouseout=function(){
				img15.style.display='block';
				img16.style.display='none';
				span3.style.color='#757575';
			}
			home3.onmouseover=function(){
				img17.style.display='none';
				img18.style.display='block';
				span4.style.color='#ff6700';
			}
			home3.onmouseout=function(){
				img17.style.display='block';
				img18.style.display='none';
				span4.style.color='#757575';
			}
			home4.onmouseover=function(){
				img19.style.display='none';
				img110.style.display='block';
				span5.style.color='#ff6700';
			}
			home4.onmouseout=function(){
				img19.style.display='block';
				img110.style.display='none';
				span5.style.color='#757575';
			}
			home5.onmouseover=function(){
				img11.style.display='none';
				img112.style.display='block';
				span6.style.color='#ff6700';
			}
			home5.onmouseout=function(){
				img11.style.display='block';
				img112.style.display='none';
				span6.style.color='#757575';
			}

//右侧导航栏结束