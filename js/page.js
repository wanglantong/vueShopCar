
window.onload=function(){
	var music=document.getElementById("music");
	var page1=document.getElementById("page1");
	var page2=document.getElementById("page2");
	var page3=document.getElementById("page3");
	var audio=document.getElementsByTagName("audio")[0];
	//音乐停止
	audio.addEventListener("ended",function(e){
		music.setAttribute("class","");
	},false)
	//点击图标
	/*music.onclick=function(){
		if(audio.paused){
			audio.play();
			this.setAttribute("class","play");
			//this.style.animationPlayState="running";
			//this.style.webkitAnimationPlayState="running";
		}else{
			audio.pause();
			this.setAttribute("class","");
			//this.style.animationPlayState="paused";
		}
		
	}*/

	music.addEventListener("touchstart",function(e){
		if(audio.paused){
			audio.play();
			this.setAttribute("class","play");
		}else{
			audio.pause();
			this.setAttribute("class","");
		}
	},false)
	page1.addEventListener("touchstart",function(e){
		page1.style.display="none";
		page2.style.display="block";
		page3.style.display="block";
		page3.style.top="100%";
		setTimeout(function(){
			page2.setAttribute("class","page fadeOut");
			page3.setAttribute("class","page fadeOut");
		},5500)
	},false)

}