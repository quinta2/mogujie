require.config({//应用配置
　　　　paths: {
　　　　　　"jq": "../js/jquery",
　　　　　　"banner2": "../js/jquery.banner.2.0",
		"banner3": "../js/jquery.banner.3.0",
　　　　}
});
//第二个函数为回调函数
require(["jq","banner2","banner3"],function(_,ban1,ban2){
	
	ban1.init({
		items:$(".banner .imgbox").children("p"),		//必选
		left:$(".banner .imgbox ").children(".btns").children("#prev"),				//可选
		right:$(".banner .imgbox").children(".btns").children("#next"),				//可选
		list:$(".banner .imgbox").children(".list").children("li"),	//可选
		autoPlay:true,					//可选，默认自动播放
		delayTime:2000,					//可选，有自动播放时，两张图片间隔的时间
		timer:1000						//可选，一张图片运动的时间
	})
	ban1.init({
		items:$(".ban4_l").children("a"),		//必选
		left:$(".ban4_l ").children(".btns").children("#prev"),				//可选
		right:$(".ban4_l").children(".btns").children("#next"),				//可选
		list:$(".ban4_l").children(".list").children("li"),	//可选
		autoPlay:true,					//可选，默认自动播放
		delayTime:2000,					//可选，有自动播放时，两张图片间隔的时间
		timer:200						//可选，一张图片运动的时间
	})
	ban2.init({
		items:$(".ban3_r .ban3_rlist").children(".ban3_rlist1"),		//必选
		left:$(".ban3_r .ban3_rlist").children("#prev"),				//可选
		right:$(".ban3_r .ban3_rlist").children("#next"),				//可选
		autoPlay:true,					//可选，默认自动播放
		delayTime:2000,					//可选，有自动播放时，两张图片间隔的时间
		timer:200						//可选，一张图片运动的时间
	})
})





