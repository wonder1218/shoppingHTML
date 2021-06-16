function check() {
	let user="zhangsan";
	let password="zhangsan";
	
	if(document.getElementById("username").value=="") {
	    alert("没有输入用户名！");
	    return false;
	} else if(document.getElementById("password").value=="") {
	    alert("没有输入密码！");
	    return false;
	} else {
		if(document.getElementById("username").value==user&&document.getElementById("password").value==password){
			alert("登录成功");
			window.open("index.html");
		}else
		{
			alert("登录失败，请检查用户名或者密码是否正确");
		}
		
	}
}
// 注册开始

function register() {
	let reg=/^1\d{10}$/;
		
		let phone=document.querySelector("#telphone").value;
		
		if(reg.test(phone)){
			
			if(document.getElementById("telphone").value=="") {
			    alert("没有输入手机号码");
			    return false;
			} else if(document.getElementById("password1").value=="") {
			    alert("没有输入密码！");
			    return false;
			} else {
				alert("注册成功");
			}
		}else
		{
			alert("输入的手机号码不正确！请重新输入")
		}
	
}
// 注册结束
// 登录和注册切换开始
	let contents = document.querySelector("#con");
	let content = document.querySelector("#conn");
	
	
	let login=document.getElementsByTagName('li');
	let ll;
	class Tab{
	constructor(title,con,conArr) {
		this.titles = document.querySelectorAll(title);
		let contents = document.querySelector(con);
		
		this.conArr = conArr;
												
}	
	
	init(){
		var _this = this;
		for(let i = 0; i< this.titles.length; i++){
			this.titles[i].onclick = function(){
			_this.fnChange(i);
			}
		}
	}
		fnChange(i){
			for(var j = 0; j< this.titles.length;j++){
				this.titles[j].className = i == j ? 'active':'';
				ll=login[i].innerText;
				}
			if(ll=='登录'){
				contents.style.display="block";
				content.style.display="none";
			}else if(ll=='注册')
			{
				contents.style.display="none";
				content.style.display="block";
			}	
		}
	}
	var tab1 = new Tab('.tablist .title li','.tablist .con');
	tab1.init();
// 登录和注册切换结束
// 表单选中事件开始
 let User = document.querySelector('#username');

let Pwd = document.querySelector('#password');
 let User1 = document.querySelector('#telphone');

let Pwd1 = document.querySelector('#password1');
	User.onfocus = function(){
				   
				   this.style.backgroundColor = '#eee';
				   this.style.border='#ff6700';
	}
	User.onblur = function(){
			
					this.style.backgroundColor = '#f9f9f9';
					
	}
	Pwd.onfocus = function(){
				   
				   this.style.backgroundColor = '#eee';
				   this.style.border='#ff6700';
	}
	Pwd.onblur = function(){
			
					this.style.backgroundColor = '#f9f9f9';
					
	}
	// 注册
	User1.onfocus = function(){
				   
				   this.style.backgroundColor = '#eee';
				   this.style.border='#ff6700';
	}
	User1.onblur = function(){
			
					this.style.backgroundColor = '#f9f9f9';
					
	}
	Pwd1.onfocus = function(){
				   
				   this.style.backgroundColor = '#eee';
				   this.style.border='#ff6700';
	}
	Pwd1.onblur = function(){
			
					this.style.backgroundColor = '#f9f9f9';
					
	}
// 悬浮登录按钮事件
let btn=document.querySelector(".button");

btn.onmouseover=function(){
	btn.style.background='red';
}
btn.onmouseout=function(){
	btn.style.background='#FFBE99';
}
let btn1=document.querySelector(".button1");

btn1.onmouseover=function(){
	btn1.style.background='red';
}
btn1.onmouseout=function(){
	btn1.style.background='#FFBE99';
}
// 表单选中事件结束
// tab切换开始
    
	  function focusNextInput(thisInput){ 
	     var inputs = document.getElementsByTagName("input");
		 
	     for(var i = 0;i<inputs.length;i++){
	                
	      if(i==(inputs.length-1)){// 如果是最后一个，则焦点回到第一个             
	        inputs[0].focus();
	        break;
	      }else if(thisInput == inputs[i]){
	        inputs[i+1].focus();
	        break;            
	      }          
	    }      
	 }  
// 回车键登录
// function keyLogin(){
//     if (event.keyCode==13){  //回车键的键值为13
//         $("#button").click();  //xxxx为登录按钮的id
		 
//     }
// }
// function keyLogin1(){
//     if (event.keyCode==13){  //回车键的键值为13
//          //xxxx为登录按钮的id
// 		  $("#button1").click();
//     }
// // }
// function KeyDown() {
// 		if(event.keyCode==13){
// 		var btn_login=document.getElementById("button");//id为登录按钮id
// 		// btn_login.focus();
// 		btn_login.click();
// 		}
// 	}
// tab切换结束
