;(function(){
	"use strict";

	$.fn.banner = function(options){

		var index = 0;
		//先判断是否有list对象,并且list.length>0;options.list的类型是object类型
		if(typeof options.list == "object" && options.list.length != 0){
			options.list.on("click",function(){
				if(index == $(this).index()){
					console.log("无操作")
				}
				if(index < $(this).index()){
					console.log("左");					
					options.items.eq(index).css({
						//前一张图片的left值
						opacity:1
					}).stop().animate({
						//停止动画之后图片的left值
						opacity:0
					}).end().eq($(this).index()).css({
						//点击之后的图片的left值
						opacity:0
					}).stop().animate({
						//点击之后的图片的动画停止的left值
						opacity:1
					})
				}
				if(index > $(this).index()){
					console.log("右");					
					options.items.eq(index).css({
						//前一张图片的left值
						opacity:1
					}).stop().animate({
						//停止动画之后图片的left值
						opacity:0
					}).end().eq($(this).index()).css({
						//点击之后的图片的left值
						opacity:0
					}).stop().animate({
						//点击之后的图片的动画停止的left值
						opacity:1
					})
				}
				//给所有list.li删除class,给当前li添加class
				options.list.removeClass("active").eq($(this).index()).addClass("active");
				index = $(this).index();
			})
		}
		//button按钮动画
		if(typeof options.left == "object" && options.left.length != 0 &&
		typeof options.right == "object" && options.right.length != 0){
			options.right.on("click",function(){
//				console.log("右边点击了")				
				if(index >= options.items.length-1){
					index = 0;
				}else{
					index ++;					
				}	
				console.log(index)
				options.items.eq(index-1).css({
					//前一张图片开始位置
					opacity:1
				}).stop().animate({
					//前一张图片停止动画的位置
					opacity:0
				}).end().eq(index).css({
					//点击之后的图片的left值
					opacity:0
				}).stop().animate({
					//点击之后的图片的动画停止的left值
					opacity:1
				})
				options.list.removeClass("active").eq(index).addClass("active");
			})
			options.left.on("click",function(){
//				console.log("左边点击了")
				if(index <= 0){
					index = options.items.length-1;
				}else{
					index --;
				}
				console.log(index)
				options.items.eq(index+1).css({
					//后一张图片的开始位置
					opacity:1
				}).stop().animate({
					//后一张图片停止动画的位置
					opacity:0
				}).end().eq(index).css({
					opacity:0
				}).stop().animate({
					opacity:1
				})
				options.list.removeClass("active").eq(index).addClass("active");
			})
		}
		var timer = 0;
		//默认自动播放
		if(options.autoPlay == true && options.autoPlay == undefined){
			console.log(1)
			//判断是否有左右按钮,若有,则执行自动播放
			if(typeof options.left == "object" && options.left.length != 0 &&
			typeof options.right == "object" && options.right.length != 0){
				timer = setTimeout(()=>{
					//模拟自动播放事件
					options.right.trigger("click");
				},1000)
				//hover 当前图片,停止计时器 this 指向fn的dom元素
				console.log(timer);
				this.hover(function(){
					clearInterval(timer);
				},function(){
					clearInterval(timer);
					timer = setTimeout(()=>{
						options.right.trigger("click");
					})
				})
			}else{
				console.error("如果你想要自动播放，那么你还需要传入左右按钮");
			}
		}
	}
})(jQuery);
