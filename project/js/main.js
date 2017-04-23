$(function(){
			var top = document.getElementById('top');
			var items = document.getElementsByTagName('li');
			var iframe = document.getElementById('main');
			
			function scrollToAnimation(yPos,speed){
				var tag =setInterval(function(){
					scrollTo(0,pageYOffset+25);
					if(pageYOffset >= yPos){
						//停止滚动
						clearInterval(tag);
					}
				},speed);
				
			}
			function acitve(e){
				for(var i = 0,len = items.length;i<len;i++){
					removeClass(items[i],'active');
				}
				console.log('you click a li');
				addClass(this,'active'); //tag this li

				//页面滚动到iframe
				//console.log(iframe.offsetTop);
				scrollToAnimation(iframe.offsetTop,10);
				console.log(iframe.firstChild);
				console.log(iframe.childNodes[1]);
				console.log(iframe.lastChild);
				// iframe.style.height = iframe.
			

			}

			for(var i=0;i<items.length;i++){
				items[i].onclick = acitve;
			}



			//回到顶部按钮，
			$("#backToTop").click(function(){
				var tag = setInterval(function(){
					console.log(pageYOffset);
					scrollBy(0,-60)
					if(pageYOffset<=50){
						clearInterval(tag);
						tag = setInterval(function(){
							console.log(pageYOffset);
							scrollBy(0,-6);
							if(pageYOffset<=0){
								clearInterval(tag);
								//alert("成功到达");
							}
						},20);
					}
				},20);		
			});

			var bToTop = document.getElementById('backToTop');
			window.onscroll = function(){
				if(pageYOffset>=600){
					top.style.display='none';
					bToTop.style.display='block';
				}else if (pageYOffset<600){
					bToTop.style.display='none';
					top.style.display='block';
				}
			};

		});


		    function hasClass(element, className) {
		        return element.className.match(new RegExp('(\\s|^)'+className+'(\\s|$)'));
		    }
		    //添加一个class，如果不存在的话
		    function addClass(element, className) {
		        if (!hasClass(element, className)) {
		            element.className += " "+className;
		        }
		    }
		    //删除一个class，如果存在的话
		    function removeClass(element, className) {
		        if (hasClass(element, className)) {
		            element.className = element.className.replace(
		                    new RegExp('(\\s|^)'+className+'(\\s|$)'),' ');
		        }
		    }
