
$(function(){
	var temp_array=new Array();
	var temp_right_item=1;
	var str="";
	$('#left>ul>li').click(function(){
		//点击左侧改变颜色
			if($(this).attr("class")!="selected")//如果没有被选择过
			{$(this).toggleClass("selecting");}	 //选中它			 
		});
//点击右侧改变颜色.并获取该项目*******************************
		$('#right>ul>li').click(function(){
			temp_right_item=$(this).children('ul');
			$('.not_select').css({"background":"#a6bffb"});
			$(this).css({"background":"#5e7dfd"});
		});
//******************************************************************
		$("#add").click(function(){
			//将点击的项目添加到临时数组中
			$.each( $(".selecting"), function(i, n){
			 temp_array[i+1]='<li  class="child_li">'+n.innerHTML+'<div class="del_img"></div></li>';
			});
			if(temp_array.length==1)
				{alert("请选择左侧项目")}
			else{
					if(temp_right_item==1)
						{alert("请选择右侧项目");}
					else
						{	
							str=temp_array.join(' ');
							temp_right_item.append(str);
							temp_array.length=1;
							//选过的项目更改class
							$.each( $(".selecting"), function(i, n){
								n.className="selected";
							});
						}
				}
			});
//**********************************************************************
		//为del_img绑定事件 ，进行右侧条目删除
		$(".not_select").on("click",'.del_img',function(){
			$(this).parent().remove();
			 var b=$(this).parent();     
			//b为该子条目的内容
			 $.each( $(".selected"), function(i, n){
					if(n.innerHTML==b.text())
						{n.className="";}
			 });
		});
		
});
