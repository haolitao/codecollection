function oop(){
   //�������
   var aaa = this;
   
   //��ʼ��
   this.init = function(){
   	   aaa.addnotice();
   	   aaa.unchange();
   	   return aaa;
   }

   //���function
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

   //���function

   this.cleannotice = function(){
       $("input[type='text']").each(function(){
       		if($(this).val() == $(this).attr('notice')){
       			$(this).val("");
       		}
       });

   }

   //���function
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