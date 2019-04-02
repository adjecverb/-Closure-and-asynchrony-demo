var father = document.querySelector('.content');
var blink = document.querySelector('.blink')

var input = document.querySelector(".my-input");
var clear = document.querySelector(".clear");
var last = '';
input.addEventListener('change',function(e){
	var str = e.target.value;	
	var len = str.length;
	var my_last = last;
	last = str;
	if(my_last[0] !== str[0]){
		str = '\n' + str;
	}
	else{
		for(var i = 0;i < len;i++){
			if(my_last[i] !== str[i]){
				str = str.slice(i,str.length);
			}
		}
	}
	len = str.length;
	for(var i = 0;i< len;i++){
		var color_num = Math.ceil(Math.random() * 23);        
	         if(str[i] == '<'){
	            continue;
	        }
	        if(str[i] == '>'){
	            continue;
	        }
		if(str != '\n'){
			var tmp = document.createElement('span');
			tmp.innerHTML = str[i];
			tmp.setAttribute('class','word color'+color_num)
		}
		if(str[i]=='\n'){
			var tmp = document.createElement('br');
		}
		(
			function(){
				var my_tmp = tmp;
				var j = i;
				window.setTimeout(function(){father.insertBefore(my_tmp,blink)},200*j);
			}
		)();
		
	}
})

clear.addEventListener('click',function(){
	var words = document.querySelectorAll('.word');
	var len = words.length;
	for(var i = 0;i < len;i++){
		father.removeChild(words[i]);
	}
})