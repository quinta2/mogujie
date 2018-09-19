class Shop{
	constructor(options){
		this.cont = options.cont
		this.load()
	}
	load(){
		var that = this;
		$.ajax({
			url:"json/goods.json"
		}).then(function(res){
			//因为现在请求的是json文件，所以数据会自动转成对象，如果是文本文件或php文件，需要手动转换
			that.res = res;
			that.display();
			that.init();
		},function(a,b,c){
			console.error("当前请求失败，错误代码为：" + b)
		});
	}
	display(){
		var str = "";
		for(var i = 0;i<this.res.length;i++){
			str += `
					<dl data-id="${this.res[i].goodsId}">
						<dt>
							<a href="detailPage.html"><img src="${this.res[i].src}" /></a>
							<a><em class="gobuy_car">找相似</em></a>
						</dt>
						<dd>
							<a href="detailPage.html">${this.res[i].title}</a>
							<span class="now_pri">￥${this.res[i].now_pri}</span>
							<span class="ori_pri">￥${this.res[i].ori_pri}</span>
							<a href="#"><i class="iconfont">&#xe60f;<em class="browsing">${this.res[i].browsing}</em></i></a>
						</dd>
					</dl>
				`			
		}
		this.cont.html(str)
	}
	init(){
		this.cont.on("click","em",function(){
			var index = $(this).parent("a").parent("dl").attr("data-id");
			
			var goods = [];
			
			if(!$.cookie("goods")){
				goods.push({
					"id":index,
					"num":1
				})
				var a = JSON.stringify(goods);
				$.cookie("goods",a)
			}else{
				goods = JSON.parse($.cookie("goods"));
				var onOff = true;
				for(var i = 0;i< goods.length;i++){
					if(index == goods[i].id){
						goods[i].num ++;
						onOff = false;
					}
				}
				if(onOff){
					goods.push({
						"id":index,
						"num":1
					})
				}
				var b = JSON.stringify(goods);
				$.cookie("goods",b)
			}
		})
	}
}

new Shop({
	cont:$(".ban10_list")
})
