$(document).ready(function(){
  
   /*
    getjson("skys");
    setTimeout(function(){
        $("#container_div").html(ch);
       
    },400);*/
    // alert($("iframe"));
    
    
  
	$('#menu').click(function() {  
             
           if($("#right_slide").width()< 200){               
                $("#right_slide").animate({left:'-200px'}, {queue:false, duration: 500});          
           }
           else
           {            
                  $("#right_slide").animate({left:'40px'}, {queue:false, duration: 500});                  
           }
        
        
          var arr = ["skys", "skys1", "skys2"];
          $("#ch").html("");
          for(var ar in arr)
            $("#ch").append("<li style='margin:5px;height:100px;width:85%;'><a style='width:100%; background:url(img/"+arr[ar]+".jpg);  background-repeat: no-repeat; background-size:cover;margin-bottom:2%; display:block; background-position: center;background-size: 100% 100%;position:relative; height:100%;' value='"+arr[ar]+"' href='#'></a></li>");
        
        
           $("#ch li a").click(function(){  
                getjson($(this).attr("value"));
                setTimeout(function(){
                    $("#container_div").html(ch);
                });
               
               $("#container_div iframe").css({"margin-left": 'auto', "margin-right": 'auto'});
         
	       });

    });
    
    
});

var ch="";

var getjson=function(val){
   
    $.ajax({
         url:"http://nettv.yzi.me/nettv/connect.php",
         data:"menu="+val,
         type:"POST",
         dataType:"json",  
         //contentType:"application/x-www-form-urlencoded; charset=utf-8",   
         success:function(data)
         {
            ch = data.channel;
          
            //alert("Data from Server "+data.channel);
         },
         error:function(jqXHR,textStatus,errorThrown)
         {
            //alert("You can not send Cross Domain AJAX requests: "+errorThrown);
         }
    });   

}


      /*   
       $.ajax({
            url : "http://nettv.yzi.me/nettv/connect.php",
            dataType:"jsonp",
            jsonp:"mycallbacks",
            success:function(data)
            {
                alert("Name:"+data.name+"\nage:"+data.age+"\nlocation:"+data.location);
            }
       });
    
    
   $.ajax({
        type: 'GET',
        url: 'http://localhost/antest/connect.php',
        dataType: 'jsonp',
        jsonp:"mycallbacks",
        success: function (data) {
            alert(data);
        }
    });
 
    $.ajax({
     url:"http://localhost/antest/connect.php",
     data:"menu=2",
     type:"POST",
     dataType:"json",	
     success:function(data)
     {
        alert("Data from Server "+JSON.stringify(data));
     },
     error:function(jqXHR,textStatus,errorThrown)
     {
        alert("You can not send Cross Domain AJAX requests: "+errorThrown);
     }
    });
    
    
      $.ajax({
                  url: 'http://localhost/antest/connect.php',
                  dataType: 'jsonp',
                  jsonp:'action',                 
                  success: function(result) {             
                      alert(result);
                  }
      });
    
   
    var jqxhr = $.getJSON( "http://localhost/antest/connect.php?action=auto", function() {
        alert( "success" );
    })
    .done(function() {
        alert( "second success" );
    })
    .fail(function() {
        alert( "error" );
    })
    .always(function() {
        alert( "complete" );
    });
  
    jqxhr.complete(function() {
        alert( "second complete" );
    });

    
     var send_obj={};
     send_obj["menu"]="1";   
     $.ajax({
                  type: 'POST',
                  url: 'http://localhost/antest/connect.php',
                  data: send_obj,
                  dataType: 'json',
                  cache: false,
                  success: function(result) {             
                      alert(result);
                  }
      });
    
        var request="auto";
        $.get( "http://localhost/antest/connect.php?action="+request, function( data ) {
            alert(data);
        }, "json") 
        .done(function() {
            alert( "second success" );
        })
        .fail(function() {
            alert( "error" );
        })
        .always(function() {
            alert( "finished" );
        });*/
    

