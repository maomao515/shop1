//1.导入模块的公用部分
!function($){
	$('.topcontent').load('header.html');
	//第一个参数：地址。
	//第二个参数：选择器。
	$('.footercontent').load('footer.html');
//1.	全部商品分类二级菜单
	var $fnav=$(".kinds");
	var $snav=$('.sub_kinds ');
	
	 $fnav.hover(function() {
            $(this).find("h3").css({
            	'background-color':'#fff',
            });
            $(this).find("h3 a").css({
            	color:'#3ea600'
            });
              $(this).find(".sub_kinds").css("display","block");             
        },function() {
        $(this).find("h3").css({
        	'background-color':'#3ea600',
        	color:'#fff'
        });
        $(this).find("h3 a").css({
            	color:'#fff'
            });
              $(this).find(".sub_kinds").css("display","none"); 
         }); 
         
  //2.轮播图       
        var $banner=$('.banner .banner-con');
	   	var $btns=$('.banner .banner-con .slider-num li');
		var $imgs=$('.banner .banner-con ul li');
		var $leftbtn=$('.banner .banner-con .slider-btn .fl');
		var $rightbtn=$('.banner .banner-con .slider-btn .fr');
		var $index=0;//当前的索引.
		var $qindex=0;//前一个索引.
		var $timer=null;
		//1.点击小圆圈进行图片的切换
		$btns.mousemove(function(){
			$index=$(this).index();//当前的索引
			$imgs.eq($qindex).css('display','none');
			//imgchange();
			$imgs.eq($index).css('display','block');
			$(this).addClass('hover').siblings('li').removeClass('hover');
			$qindex=$index;//当前的索引变成上一个索引
	   });
	   
	
	$banner.hover(function(){
		$leftbtn.show();		
		$rightbtn.show();
	},function(){
		$leftbtn.hide();		
		$rightbtn.hide();
	});
	$rightbtn.on('click',function(){
		$imgs.eq($qindex).css('display','none');
		$index++;
		if($index>8){
			$qindex=8;
			$index=0;
		}
		$imgs.eq($index).css('display','block');
		$btns.eq($index).addClass('hover').siblings('li').removeClass('hover');
//		imgchange();
		$qindex=$index;//当前的索引变成上一个索引.
	});
	
	$leftbtn.on('click',function(){
		$imgs.eq($qindex).css('display','none');
		
		$index--;
		if($index<0){
			$qindex=0;
			$index=8;
		}
//		imgchange();
		$qindex=$index;//当前的索引变成上一个索引.
		$imgs.eq($index).css('display','block');
		$btns.eq($index).addClass('hover').siblings('li').removeClass('hover');
	});
	$timer=setInterval(function(){
				$imgs.eq($qindex).css('display','none');
				$index++;
				if($index>8){
					$qindex=8;
					$index=0;
				}
				$imgs.eq($index).css('display','block');
				$qindex=$index;//当前的索引变成上一个索引.
				$btns.eq($index).addClass('hover').siblings('li').removeClass('hover');
	},2000);
	$banner.mousemove(function(){
			clearInterval($timer);
	});
	$banner.mouseout(function(){
			$timer=setInterval(function(){
				$imgs.eq($qindex).css('display','none');
				$index++;
				if($index>8){
					$qindex=8;
					$index=0;
				}
				$imgs.eq($index).css('display','block');
				$qindex=$index;//当前的索引变成上一个索引.
				$btns.eq($index).addClass('hover').siblings('li').removeClass('hover');
	},2000);
	});
//3.tab切换
	var $stn=$('.cont_w .cont_r .public .title li');
	var $content=$('.cont_w .cont_r .public .cont_wrap .cont');
	/*$stn.mousemove(function(){
		$(this).addClass('active').siblings('li').removeClass('active');
		$(this).css({
			'border-bottom': '2px solid #2d8800',
            'background-color': '#fff'
		});
		$(this).find("a").css({
            	color:'#0D8700'
            });
		$content.eq($(this).index()).show().siblings('li').hide();
	});	
	
	$stn.mouseout(function(){
		$(this).addClass('active').siblings('li').removeClass('active');
		$(this).css({
			'border-bottom': 'none',
            'background-color': '#F7F7F7'
		});
		$(this).find("a").css({
            	color:'#3c3c3c'
            });
		$content.eq($(this).index()).show().siblings('li').hide();
	});	*/
	
	
	$stn.hover(function(){
		$(this).addClass('active').siblings('li').removeClass('active');
		$(this).css({
			'border-bottom': '2px solid #2d8800',
            'background-color': '#fff'
		});
		$(this).find("a").css({
            	color:'#0D8700'
            });
		$content.eq($(this).index()).show().siblings('li').hide();
	},function(){
		$(this).addClass('active').siblings('li').removeClass('active');
		$(this).css({
			'border-bottom': 'none',
            'background-color': '#F7F7F7'
		});
		$(this).find("a").css({
            	color:'#3c3c3c'
            });
		$content.eq($(this).index()).show().siblings('li').hide();
	});
//每日劲爆品	
var $daybox=$('.recommend-pro .madden-pro .verticabox');
var $day=$('.recommend-pro .madden-pro .verticabox ul');	
var $left=$('.left_btn');
var $right=$('.right_btn');
var $bt=$('.recommend-pro .madden-pro .verticabox .png');
	$daybox.hover(function(){
		$left.show();		
		$right.show();
	},function(){
		$left.hide();		
		$right.hide();
	});
	$bt.on('click',function(){
		var lt=$day.position().left;
		if(lt==0){
			$day.css({
			left: '-972px'
		    });
		};
		if(lt==-972){
			$day.css({
			left: '0px'
		    });
		};
	});
//我买推荐
var $remd=$('.commend .commend-pro');
var $re=$('.commend .commend-pro ul');
var $bnt=$('.commend .commend-pro .png');
$remd.hover(function(){
		$left.show();		
		$right.show();
	},function(){
		$left.hide();		
		$right.hide();
	});
	$bnt.on('click',function(){
		var lt=$re.position().left;
		if(lt==0){
			$re.css({
			left: '-1210px'
		    });
		};
		if(lt==-1210){
			$re.css({
			left: '0px'
		    });
		};
	});
//一楼
class firstfloor{
	constructor(){
		this.$fbtn=$('.floor .floor-r .tit li ');
		this.$fmn=$('.floor .floor-r .con');
	}
	init(){
		        var that=this;
				this.$fbtn.hover(function(){
				$(this).addClass('cur').siblings('li').removeClass('cur');
				/*$(this).css({
					'border-bottom': '2px solid #a1c0f6',
		            color:'#434343'
				});*/
				that.$fmn.eq($(this).index()).show().siblings('div').hide();
			},function(){
				$(this).addClass('cur').siblings('li').removeClass('cur');
				/*$(this).css({
					'border-bottom': 'none',
		            color:'#383838'
				});*/
				that.$fmn.eq($(this).index()).show().siblings('div').hide();
			});
		
	}
}
new firstfloor().init();
//四楼
class fourfloor{
	constructor(){
		this.$fbtn4=$('.floor2 .floor-r .tit li ');
		this.$fmn4=$('.floor2 .floor-r .con');
	}
	init(){
		        var that=this;
				this.$fbtn4.hover(function(){
				$(this).addClass('cur').siblings('li').removeClass('cur');
				that.$fmn4.eq($(this).index()).show().siblings('div').hide();
			},function(){
				$(this).addClass('cur').siblings('li').removeClass('cur');
				that.$fmn4.eq($(this).index()).show().siblings('div').hide();
			});
		
	}
}
new fourfloor().init();
//十一楼
class elfloor{
	constructor(){
		this.$fbtn11=$('.floor4 .floor-r .tit11 li ');
		this.$fmn11=$('.floor .floor-even .floor-r .con11 ');
	}
	init(){
		        var that=this;
				this.$fbtn11.hover(function(){
				$(this).addClass('cur').siblings('li').removeClass('cur');
				that.$fmn11.eq($(this).index()).show().siblings('div').hide();
			},function(){
				$(this).addClass('cur').siblings('li').removeClass('cur');
				that.$fmn11.eq($(this).index()).show().siblings('div').hide();
			});
	}
}
new elfloor().init();
//右侧侧边栏
class rightfix{
	constructor(){
		this.$rbtn=$('.wm-toolbar .wm-toolbar-tab');
		//this.$rcont=$('.floor-r .con');
	}
	init(){
		var that=this;
				this.$rbtn.hover(function(){
				$(this).addClass('cur').siblings('li').removeClass('cur');
				//that.$fmn11.eq($(this).index()).show().siblings('div').hide();
			},function(){
				$(this).addClass('cur').siblings('li').removeClass('cur');
				//that.$fmn11.eq($(this).index()).show().siblings('div').hide();
			});
	}
}
}(jQuery);	
	
	
	
	
	
	/*//定时器自动播放
		timer=setInterval(function(){
			rightbtn.onclick();//主动触发右键事件。
		},2000);
		baidu.onmouseover=function(){
			clearInterval(timer);
		}
		baidu.onmouseout=function(){
			timer=setInterval(function(){
				rightbtn.onclick();//主动触发右键事件。
			},2000);*/
	/*function imgchange(ev){
		
		$btns.eq($index).addClass('hover').siblings('li').removeClass('hover');
		if($index==0&&$qindex==8){
			if(ev.target.nodeName=='LI'){
				$imgs.eq($qindex).animate({
					left:1349
				});
				$imgs.eq($index).css('left','-800px').animate({
					left:0
				});
			}else{
				$imgs.eq($qindex).animate({
					left:-1349
				});
				$imgs.eq($index).css('left','800px').animate({
					left:0
				});
			}
			
		}else if($index==8&&$qindex==0){
			if(ev.target.nodeName=='LI'){
				$imgs.eq($qindex).animate({
					left:-1349
				});
				$imgs.eq($index).css('left','800px').animate({
					left:0
				});
			}else{
				$imgs.eq($qindex).animate({
					left:1349
				});
				$imgs.eq($index).css('left','-800px').animate({
					left:0
				});
			}
			
		}else if($index>$qindex){
			$imgs.eq($qindex).animate({
				left:-1349
			});
			$imgs.eq($index).css('left','800px').animate({
				left:0
			});
		}else if($qindex>$index){
			$imgs.eq($qindex).animate({
				left:1349
			});
			$imgs.eq($index).css('left','-800px').animate({
				left:0
			});
		}
		
	}*/

/*弹窗，输入验证，数据列表展示，商品详情放大镜，菜单，轮播图，TAB切换，楼梯，懒加载，购物车等......*/

//	//1.tab切换
//	var $btn=$('.tab_title a');
//	var $content=$('.tab_content ul');
//	$btn.on('click',function(){
//		$(this).addClass('active').siblings('a').removeClass('active');
//		$content.eq($(this).index()).show().siblings('ul').hide();
//	});
//	 
//	//2.轮播图
//	
//	
//	
//	
//	
//	//3.1:鼠标移入移出显示小方和大方。
//	$('#spic').hover(function(){
//		$('#sf').css('visibility','visible');
//		$('#bf').css('visibility','visible');
//		
//		//3.1:小方的尺寸
//		$('#sf').width($(this).width()*$('#bf').width()/$('#bpic').width());
//		$('#sf').height($(this).height()*$('#bf').height()/$('#bpic').height());
//		
//		var $bili=$('#bpic').width()/$('#spic').width();
//		
//		//3.2鼠标在小方里面移动
//		$('#spic').on('mousemove',function(ev){
//			var $left=ev.pageX-$('.wrap').offset().left-$('#sf').width()/2;
//			var $top=ev.pageY-$('.wrap').offset().top-$('#sf').height()/2;
//			if($left<=0){
//				$left=0;
//			}else if($left>=$('#spic').width()-$('#sf').width()){
//				$left=$('#spic').width()-$('#sf').width();
//			}
//			
//			
//			if($top<=0){
//				$top=0;
//			}else if($top>=$('#spic').height()-$('#sf').height()){
//				$top=$('#spic').height()-$('#sf').height();
//			}
//			
//			
//			$('#sf').css({
//				left:$left,
//				top:$top
//			});
//			
//			$('#bpic').css({
//				left:-$bili*$left,
//				top:-$bili*$top
//			})
//		});
//		
//	},function(){
//		$('#sf').css('visibility','hidden');
//		$('#bf').css('visibility','hidden');
//	});
//	
//	//设置ul尺寸
//	var $li=$('#list ul li');
//	var $ul=$('#list ul');
//	var $liwidth=$li.eq(0).innerWidth();
//	$ul.width($li.size()* $liwidth);
//	
//	
//	$li.on('click',function(){
//		var url=$(this).find('img').attr('src');//当前点击的li下面的图片路径
//		$('#spic').find('img').attr('src',url);
//		$('#bpic').attr('src',url);
//	});
//	
//	var $num=6;//当前ul里面显示的个数。
//	if($li.length<=6){
//		$('#left,#right').css('color','#fff');
//	}
//	$('#right').on('click',function(){
//		if($num<$li.size()){
//			$num++;
//			$('#left').css('color','#333');
//			if($num==$li.size()){
//				$('#right').css('color','#fff');
//			}
//			$ul.animate({
//				left:-($num-6)*$liwidth
//			});
//		}
//	});
//	
//	
//	$('#left').on('click',function(){
//		if($num>6){
//			$num--;
//			$('#right').css('color','#333');
//			if($num==6){
//				$('#left').css('color','#fff');
//			}
//			$ul.animate({
//				left:-($num-6)*$liwidth
//			});
//		}
//	});
//	
//	//4.楼梯效果
//	//4.1:滚轮事件显示左侧的楼梯。
//	var $louti=$('#loutinav');//左侧楼梯
//	var $loutili=$('#loutinav li');
//	var $louceng=$('#main .louti');
//	$(window).on('scroll',function(){
//		var $scrolltop=$(window).scrollTop();//获取滚动条的top值。
//		if($scrolltop>=600){
//			$louti.show();
//		}else{
//			$louti.hide();
//		}
//		
//		//4.4:拖动滚轮，对应的楼梯添加对应的类名
//		$louceng.each(function(index,element){//index:0-8
//			//通过遍历的方式获取每一个楼层的top值
//			var $top=$louceng.eq(index).offset().top+$(this).innerHeight()/2;
//			if($top>$scrolltop){
//				$loutili.removeClass('active');//清除所有的类
//				$loutili.eq($(this).index()).addClass('active');
//				return false;//阻止循环
//				//每次只能有一个满足条件添加类，其他的通过循环阻止
//			}
//		});
//	});
//	//4.2点击左侧楼梯，右边对应的楼层跳转。
//	$loutili.not('.last').on('click',function(){
//		$(this).addClass('active').siblings('li').removeClass('active');
//		var $top=$louceng.eq($(this).index()).offset().top;
//		$('html,body').animate({//赋值时考虑兼容。
//			scrollTop: $top
//		});
//	});
//	
//	//4.3点击top回到顶部
//	$('.last').on('click',function(){
//		$('html,body').animate({//赋值时考虑兼容。
//			scrollTop: 0
//		});
//	});
//	
//	
//}(jQuery);
