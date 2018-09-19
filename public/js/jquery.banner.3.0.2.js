;(function($){
	"use strict"
	$.fn.banner3 = function(options){
	
		var that = this;
		options.delayTime = options.delayTime || 2000;
		options.timer = options.timer || 200;		
		this.LOCAL = {
			index:options.items.length-1,
			iNow:0
		}
		if(typeof options.list == "object" && options.list.length != 0){
			options.list.on("click",function(){
				if(that.LOCAL.iNow == $(this).index()){console.log("无操作")}
				if(that.LOCAL.iNow < $(this).index()){
					that.LOCAL.listMove(1,$(this).index())
				}
				if(that.LOCAL.iNow > $(this).index()){
					that.LOCAL.listMove(-1,$(this).index())
				}
				
			})
		}
		
		this.LOCAL.listMove = function(num,index){
			options.items.eq(that.LOCAL.iNow).css({
				left:0
			}).stop().animate({
				left:-options.items.eq(0).width()*num
			}).end().eq(index).css({
				left:options.items.eq(0).width()*num
			}).stop().animate({
				left:0
			})
			options.list.removeClass(options.active).eq(index).addClass(options.active)
			that.LOCAL.iNow = index;
			
			
//			if(that.LOCAL.iNow == 0){
//				console.log(0)
//				options.color.backgroundColor = "#FEA1BE";
//			}else if(that.LOCAL.iNow == 1){
//				console.log(1)
//				options.color.backgroundColor = "#81ECFF";
//			}else if(that.LOCAL.iNow == 3){
//				console.log(2)
//				options.color.backgroundColor = "#FDA8BD";
//			}
			
		}
		
		
		if(typeof options.left == "object" && options.left.length != 0 && typeof options.right == "object" && options.right.length != 0){
			options.right.on("click",function(){
				if(that.LOCAL.iNow == options.items.length-1){
					that.LOCAL.iNow = 0;
					that.LOCAL.index = options.items.length-1;
				}else{
					that.LOCAL.iNow++;
					that.LOCAL.index = that.LOCAL.iNow-1;
				}
				that.LOCAL.btnMove(-1)
			})
			
			options.left.on("click",function(){
				if(that.LOCAL.iNow == 0){
					that.LOCAL.iNow = options.items.length-1;
					that.LOCAL.index = 0;
				}else{
					that.LOCAL.iNow--;
					that.LOCAL.index = that.LOCAL.iNow + 1;
				}
				that.LOCAL.btnMove(1)
			})
		}
		
		this.LOCAL.btnMove = function(num){
			
			options.items.eq(that.LOCAL.index).css({
				left:0
			}).stop().animate({
				left:options.items.eq(0).width()*num
			},options.timer).end().eq(that.LOCAL.iNow).css({
				left:-options.items.eq(0).width()*num
			}).stop().animate({
				left:0
			},options.timer)
			options.list.removeClass(options.active).eq(that.LOCAL.iNow).addClass(options.active)
		}
		
		if(options.autoPlay == true || options.autoPlay == undefined){
			if(typeof options.left == "object" && options.left.length != 0 && typeof options.right == "object" && options.right.length != 0){
				this.LOCAL.timer = setInterval(()=>{
					options.right.trigger("click")
				},options.delayTime)
			
				this.hover(function(){
					clearInterval(that.LOCAL.timer)
				},function(){
					clearInterval(that.LOCAL.timer)
					that.LOCAL.timer = setInterval(()=>{
						options.right.trigger("click")
					},options.delayTime)
				})
			}
		}
	}
	
})(jQuery);
