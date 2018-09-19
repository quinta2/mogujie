define(function(){
	function ban2(options){
		var that = this;
		
		this.LOCAL = {
			index:options.items.length-1,
			iNow:0,
		}   

		if(typeof options.list == "object" && options.list.length != 0){
			
			options.list.on("click",function(){
				if(that.LOCAL.iNow == $(this).index()){console.log("当前无操作")}
				if(that.LOCAL.iNow < $(this).index()){
					options.items.eq(that.LOCAL.iNow).css({
						opacity:1
					}).stop().animate({
						opacity:0
					}).end().eq($(this).index()).css({
						opacity:0
					}).stop().animate({
						opacity:1
					})
				}
				if(that.LOCAL.iNow > $(this).index()){
					options.items.eq(that.LOCAL.iNow).css({
						opacity:1
					}).stop().animate({
						opacity:0
					}).end().eq($(this).index()).css({
						opacity:0
					}).stop().animate({
						opacity:1
					})
				}
				
				options.list.removeClass("active").eq($(this).index()).addClass("active")
				that.LOCAL.iNow = $(this).index();
				
			})
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
//				console.log(that.LOCAL.index,that.LOCAL.iNow)

				options.items.eq(that.LOCAL.index).css({
					opacity:1
				}).stop().animate({
					opacity:0
				}).end().eq(that.LOCAL.iNow).css({
					opacity:0
				}).stop().animate({
					opacity:1
				})
				
				options.list.removeClass("active").eq(that.LOCAL.iNow).addClass("active")
				
			})
			
			options.left.on("click",function(){
				if(that.LOCAL.iNow == 0){
					that.LOCAL.iNow = options.items.length-1;
					that.LOCAL.index = 0;
				}else{
					that.LOCAL.iNow--;
					that.LOCAL.index = that.LOCAL.iNow + 1;
				}
//				console.log(that.LOCAL.index,that.LOCAL.iNow)

				options.items.eq(that.LOCAL.index).css({
					opacity:1
				}).stop().animate({
					opacity:0
				}).end().eq(that.LOCAL.iNow).css({
					opacity:0
				}).stop().animate({
					opacity:1
				})
				
				options.list.removeClass("active").eq(that.LOCAL.iNow).addClass("active")
			})
		}
		
		
		if(options.autoPlay == true || options.autoPlay == undefined){
			if(typeof options.left == "object" && options.left.length != 0 && typeof options.right == "object" && options.right.length != 0){
				this.LOCAL.timer = setInterval(()=>{
					options.right.trigger("click")
				},2000)
			
				options.items.hover(function(){
					clearInterval(that.LOCAL.timer)
				},function(){
					clearInterval(that.LOCAL.timer)
					that.LOCAL.timer = setInterval(()=>{
						options.right.trigger("click")
					},2000)
				})
			}else{
				console.error("如果你想要自动播放，那么你还需要传入左右按钮")
			}
		}
	}
	return {
			init:ban2
		}
})
