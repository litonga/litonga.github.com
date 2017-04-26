//连缀
function Base(){  //构造函数
    this.elements=[];  //该数组用于保存获取的节点或节点数组。
    this.getId=function(id){
        this.elements.push(document.getElementById(id));
        return this;
    };
    this.getName=function(name){
        var names = document.getElementsByName(name);
        for(var i=0;i<names.length;i++ ){
            this.elements.push(names[i]);
        }
        return this;
    };
    this.getTagName=function(tagName){
        var tagNames = document.getElementsByTagName(tagName);
        for(var i=0;i<tagNames.length;i++ ){
            this.elements.push(tagNames[i]);
        }
        return this;
    };
}

function $(){  //每次调用$()函数时都会重新返回一个新的Base()对象
    return new Base();
}

//css()函数的难点在于要获取样式表内的样式
Base.prototype.css=function(attr,value){
    if(arguments.length ==1){
        if(typeof window.getComputedStyle !="undefined"){ //如果支持该函数
            return window.getComputedStyle(this.elements[0],null)[attr];
        }else if(typeof this.elements[0].currentStyle !='undefined'){
            return this.elements[0].currentStyle[attr];
        }//****注意，此方法只能返回一个集合中的第一个元素的样式。
    }
    for (var i=0;i<this.elements.length;i++){
        this.elements[i].style[attr]=value;//修改css属性
        //alert(attr+"  "+zhi);
    }
    return this;
};
Base.prototype.html=function(str){ //传入字符串，  修改文本
    if(arguments.length==0){ //如果未传入参数
        return this.elements[0].innerHTML;  //返回元素内容，函数结束
    }
    //如果有参数：执行下面。
    for(var i=0;i<this.elements.length;i++){
        this.elements[i].innerHTML=str;
    }
    return this;
};
Base.prototype.click=function(fn){
    for(var i=0;i<this.elements.length;i++){
        this.elements[i].onclick=fn;
    }
    return this;
};

//通过class获取节点；
Base.prototype.getClass = function(className){
  var all = document.getElementsByTagName("*");
    for(var i=0;i<all.length;i++){
        if(className==all[i].className){
            this.elements.push(all[i]);
        }
    }
    return this;
};

Base.prototype.getElement = function(num){
    var element = this.elements[num];
    this.elements=[];
    this.elements[0]=element;
    return this;

};

//addClass
Base.prototype.addClass = function(className){
    for(var i=0;i<this.elements.length;i++){
        //为节点对象添加class属性值，要先确保不会重复添加。
        if(!this.elements[i].className.match(new RegExp("(\\s|^)"+className+"(\\s|$)"))){
            this.elements[i].className +='' +className;
        }
    }
    return this;
};


//removeClass
Base.prototype.removeClass = function(className){
    for(var i=0;i<this.elements.length;i++){
        if(this.elements[i].className.match(new RegExp("(\\s|^)"+className+"\\s|$"))){
            this.elements[i].className=this.elements[i].className.replace(new RegExp("(\\s|^)"+className+"\\s|$")," ");
        }
    }
};

//设置link或style中的css规则
Base.prototype.addRule = function(){

};

Base.prototype.hide =function(){
  for(var i=0;i<this.elements.length;i++){
      this.elements[i].style.display ='none';
  }
    return this;
};
Base.prototype.show=function(){
    for(var i=0;i<this.elements.length;i++){
        this.elements[i].style.display='block';
    }
    //alert("show执行到了");
    return this;
};
Base.prototype.hover = function(over,out){
    for(var i = 0;i < this.elements.length;i++){
        this.elements[i].onmouseover = over;//传入事件处理函数
        this.elements[i].onmouseout = out;
    }
};

//封装窗口居中：
Base.prototype.center = function(width,height){
    var top = (document.documentElement.clientHeight-height)/2;
    var left = (document.documentElement.clientWidth-width)/2;
    for(var i=0;i<this.elements.length;i++){
        this.elements[i].style.top=top+"px";
        this.elements[i].style.left = left+"px";
    }
    return this;
};
Base.prototype.resize = function(fn){
    window.onresize=fn;
    return this;
}