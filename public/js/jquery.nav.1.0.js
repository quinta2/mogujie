// 1.插件名推荐使用 jquery.[插件名].js，以免和其他 js 文件或者其他库相冲突；
//
//  2.文件开头注意加 ; 号，保证在合并文件时，不被其他非严格模式代码所影响
//
//  3.避免插件内部使用$，如果要使用，请传递 jQuery 进去。
//
//  4.局部对象附加 jquery.fn 对象上，全局函数附加在 jquery 上；
//
//  5.插件内部，this 指向是当前的局部对象；
// 
//  6.可以通过 this.each 来遍历所有元素；
//
//  7.所有的方法或插件，必须用分号结尾，避免出现问题；
//
//  8.插件应该返回的是 jQuery 对象，以保证可链式连缀；

//传参jQuery,接受参数$;用匿名函数
;(function($){
	"use strict"
	$.fn.extend({
		nav:function(){
			this.children("ul").children("li").hover(function(){
				$(this).children("ul").stop().slideDown(200)
				.end().siblings("li").children("ul").stop().slideUp(200);
			},function(){
				$(this).children("ul").stop().slideUp(200);
			})
		}
	})
})(jQuery);

//外部js书写规范
//1.先加;号,防止合并文件时,上一个文件的结束没有分号
//2.开启匿名函数,保证不影响全局空间
//3.开启严格模式,保证代码的规范
//4.将jquery传进来,用$接收,保证不被外部的$影响
//5.开始编写代码




