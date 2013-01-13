function oop(){
   //定义变量
   var aaa = this;
   
   //初始化
   this.init = function(){
   	   aaa.addnotice();
   	   aaa.unchange();
   	   return aaa;
   }

   //添加function
   this.addnotice = function(){
       $("input[type='text']").each(function(){
       		$(this)
       		.focus(function(){
       			if($(this).val() == $(this).attr('notice')){
       				$(this).val("");
       			}
       		})

       		.blur(function(){
       			if($(this).val() == $(this).attr('notice') || $.trim($(this).val()) == ""){
       				$(this).val($(this).attr('notice'));
       			}
       		});
       });
   }

   //添加function

   this.cleannotice = function(){
       $("input[type='text']").each(function(){
       		if($(this).val() == $(this).attr('notice')){
       			$(this).val("");
       		}
       });

   }

   //添加function
   this.unchange = function(){
       $(".select").bind('change',function(){
       		if($(this).val() == '0'){
	       		alert('noselect');
       		}else{
       			alert($(this).val());
       		}

       });

   }

}