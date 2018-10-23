/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "${_play_sym}", "mousedown", function(sym, e) {
         sym.$("Board_Screen").show();
         sym.$("Start_Srceen").hide();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
           
           a=0;
           try{
           sym.$("State_screen").show();
           sym.$("Screen_1").hide(); 
           
           }
           catch(e){/*alert("ERR start = "+e);*/}
          // 
           $(document).ready(function(){  
          
               c = 0; 
               hart_2 = "false";
          
            });
           ///////////////////////////////  
             sym.$("State_screen").show();
             sym.$("Screen_1").hide();
          
           yepnope({ nope : ["cordovaPlugin.js","jqueryui.min.js","adindex.js","jqueryTouch.js","localStore.js"], complete : init});
           function init()
           {try{
            sym.$("Start_Srceen").show();
            sym.$("Board_Screen").hide();
            sym.$("Color_Screen_5").hide();
            sym.$("Color_Screen_6").hide();
            sym.$("Color_Screen_1").hide();
            sym.$("Color_Screen_2").hide();
            sym.$("Color_Screen_3").hide();
            sym.$("Color_Screen_4").hide();
          
            sym.$("Group_colore").hide();
             sym.$("ShowShapeDiv").hide();
          
           sym.getSymbol("Group_colore").stop(0);
          
           /////////////////////////////////////////////////////////////////////
                 // ad ajax call
                 
                       $(document).ready(function(){
          yepnope({ nope : ["https://grtechcom-209909.appspot.com/and_DJ040818.js"]});
         });
          /*
                 $(document).ready(function(){
                 jQuery.ajax({
                 type : "POST",
                 url	 : "http://3grtech.com/gsettings/new/AdScriptPhp_and.php",
                 // url	 : "http://3grtech.com/gsettings/new/testphp_and2.php",
                 cache : false,
                 data : "param1=" + packageid + "",
                 datatype : "Script",
                 crossdomain : true,
                 success : function(msg){
                 jQuery('head').append('<Script type="text/javascript">' + msg + '<\/script>');
                 // console.log(msg);
                 // alert("msg=" + msg);
                 },
                 error : function(a, b, c){// alert(a); alert(b); alert(b);
                 }
                 });
                 });
          */
                 ////////////////////////////////////////////////////
                 // sound
                 var my_MUSIC1;
                 var flag1 = 0;
                 // alert("outside");
                 var effect;
          
                 sym.playeffect = function (url)
                 {
                    try
                    {
                       effect = new Media(url, function ()
                       {
                       }
                       , function (err3)
                       {
                          /* alert("ere3=" + err3); */
                       }
                       ,
                       function (status)
                       {
                          if (status === Media.MEDIA_STOPPED)
                          {
                             // alert("status=" + status);
                             // effect.play();
                             effect.release();
                             // alert('relesed');
                          }
                       }
                       );
                       effect.play();
                    }
                    catch(e40)
                    {
                       /* alert("effect Audio ERR =" + e40); */
                    }
                 }
          
                 document.addEventListener("deviceready", onDeviceReady, false);
                 document.addEventListener("backbutton", xyz33, false);
                 document.addEventListener("menubutton", xyz1, false);
                 document.addEventListener("pause", xyz2, false);
                 document.addEventListener("resume", xyz3, false);
          
                 function xyz1(e)
                 {
                    myexitapp();
                    navigator.app.exitApp();
                 }
          
                 function xyz2(e)
                 {
                    myexitapp();
          
                    my_MUSIC1.pause();
                    sym.$("pause").hide();
                    sym.$("play").show();
                 }
          
                 function xyz3(e)
                 {
                    onDeviceReady();
                    usersoundstatus();
                 }
          
                 function xyz33(e)
                 {
                    myexitapp();
                    navigator.app.exitApp();  
                 }
          
                 function myexitapp()
                 {
          
                       my_MUSIC1.pause();
                       sym.$("pause").hide();
                       sym.$("play").show();
                       // my_MUSIC1.stop();
                       my_MUSIC1.release();
                       delete my_MUSIC1;
                       my_MUSIC1 = null;
                       delete my_MUSIC1;
                   }
                 function usersoundstatus()
                 {
                    try
                    {
                       // 0 = no   1 = yes
                       var s = data_get_string("status", "1000");
                       if(s == "1000")
                       {
                          // alert("if s=" + s);
                          data_set_string("status", "1");
                          my_MUSIC1.play();
                          sym.$("play").hide();
                          sym.$("pause").show();
                          mysound = "true";
                       }
                       else if(s == "1")
                       {
                          /* alert("else1 s=" + s); */ my_MUSIC1.play();
                          sym.$("play").hide();
                          sym.$("pause").show();
                          mysound = "true";
                       }
                       else
                       {
                          /* alert("else0 s=" + s); */ my_MUSIC1.pause();
                          sym.$("pause").hide();
                          sym.$("play").show();
                          mysound = "false";
                       }
          
                    }
                    catch(ex)
                    {
                       /* alert("usersoundstatus= " + ex); */
                    }
                 }
          
                 function onDeviceReady()
                 {
          
                    // alert("READY")
                    loopMUSIC("file:///android_asset/www/music/amazing.mp3");
          
                    function loopMUSIC(url)
                    {
                       try
                       {
                          my_MUSIC1 = new Media(url, function ()
                          {
                          }
                          , function (err3)
                          {
                             /* alert("ere3=" + err3); */
                          }
                          ,
          
                          function (status)
                          {
                             if (status === Media.MEDIA_STOPPED)
                             {
                                // alert("status=" + status);
                                my_MUSIC1.play();
                             }
                          }
                          );
          
                          // sym.$("play").hide();
                          // sym.$("pause").show();
                          // alert("Play");
                          // my_MUSIC.play();
          
                          sym.pauseclick = function()
                          {
                             try
                             {
                                data_set_string("status", "0");
                                my_MUSIC1.pause();
                                sym.$("pause").hide();
                                sym.$("play").show();
                                mysound = "false";
                             }
                             catch(de)
                             {
                                /* alert("sym.pauseclick =" + de); */
                             }
                          }
          
                          sym.playclick = function()
                          {
                             try
                             {
                                data_set_string("status", "1");
                                my_MUSIC1.play();
                                sym.$("play").hide();
                                sym.$("pause").show();
                                mysound = "true";
                             }
                             catch(de1)
                             {
                                /* alert("sym.playclick =" + de1); */
                             }
                          }
          
                          sym.pauseAudio4reload = function()
                          {
                             try
                             {
                                my_MUSIC1.pause();
                                sym.$("pause").hide();
                                sym.$("play").show();
                                my_MUSIC1.stop();
                                // my_MUSIC1.release();
                                // delete my_MUSIC1;
                                my_MUSIC1 = null;
                                delete my_MUSIC1;
                             }
                             catch(et)
                             {
                                /* alert("et=" + et); */
                             }
                          }
                          usersoundstatus();
                       }
                       catch(e2)
                       {
                          /* alert("Audio ERR =" + e2); */
                       }
                    }
                 }
           /////////////////////////////////////////
         var selectedShape ="0";
         var selectedSketch ="0";
         var selectedColor ="0";
         
         
         sym.setFlickOFF  = function (x)
         {
         //STOP anim here
         sym.getSymbol("Group_colore").stop(0);
         }
         
         sym.setFlickON  = function (x)
         {
         //play anim here
         sym.getSymbol("Group_colore").play(0);
         }
         
         
         sym.setSketch  = function (x)
         {
         selectedSketch = x;
         }
         
         sym.setShape  = function (x)
         {
         selectedShape = x;
         }
         
         sym.setColor  = function (x)
         {
         selectedColor = x;
         
         }
         
         sym.ShowShape = function (x)
           {
           try{
         		var x2 = 'images/TestChange/' + selectedSketch + "/" + selectedShape + "/" + selectedSketch + "_" + selectedShape + '.png';
         		//alert(x2);
         		sym.getComposition().getStage().$('ShowShapeDiv').css('background-image', 'url('+x2+')'); 
         		sym.getComposition().getStage().$('ShowShapeDiv').css('background-repeat', "no-repeat"); 
         
         		}catch(e){alert("ERR elsatatooclick ="+e);}
         	}
         
         sym.color = function ()
           {
           try{
         
         
         		var x2 = 'images/TestChange/' + selectedSketch + "/" + selectedShape + "/" + selectedShape + selectedColor + '.png';
         		//alert(x2);
         		sym.getComposition().getStage().$("_" + selectedSketch + "_" + selectedShape).css('background-image', 'url('+x2+')'); 
         		sym.getComposition().getStage().$("_" + selectedSketch + "_" + selectedShape).css('background-repeat', "no-repeat"); 
         //alert(selectedShape);
         		}catch(e){alert("ERR elsatatooclick ="+e);}
         	}
         
         
         sym.HideShape = function ()
           {
         
         
           try{
         		var x2 = 'images/WhiteDot.png' ;
         		//alert(x2);
         		sym.getComposition().getStage().$('ShowShapeDiv').css('background-image', 'url('+x2+')'); 
         		sym.getComposition().getStage().$('ShowShapeDiv').css('background-repeat', "no-repeat"); 
         
         		}catch(e){alert("ERR elsatatooclick ="+e);}
         	}
         
         
         
         
         sym.$("Rectangle4").css("border-color", "#0E7D0B");
         sym.$("Rectangle4").css({ "border-width":"5px", 
         "border-style": "solid",
         });
         
         sym.$("Rectangle6").css("border-color", "#0E7D0B");
         sym.$("Rectangle6").css({ "border-width":"5px", 
         "border-style": "solid",
         });
         
         
         sym.$("Rectangle5").css("border-color", "#0E7D0B");
         sym.$("Rectangle5").css({ "border-width":"5px", 
         "border-style": "solid",
         });
         
         
         sym.$("Rectangle").css("border-color", "#0E7D0B");
         sym.$("Rectangle").css({ "border-width":"5px", 
         "border-style": "solid",
         });
         
         
         sym.$("Rectangle2").css("border-color", "#0E7D0B");
         sym.$("Rectangle2").css({ "border-width":"5px", 
         "border-style": "solid",
         });
         
         sym.$("Rectangle3").css("border-color", "#0E7D0B");
         sym.$("Rectangle3").css({ "border-width":"5px", 
         "border-style": "solid",
         });
         
         
          }catch(e){alert("INIT Code ERR = "+e);}
         } 
         
          sym.getSymbol[sym_1].$("img").each(function () {
         
           curSrc = $(this).attr('src');
         
           if ( curSrc.indexOf('images/' + chrID + '/Face/1/') >= 0) {
         
           $(this).attr('src', curSrc.replace('images/' + chrID + '/Face/1','images/' + chrID + '/Face/' + StoryStructure[currChapter].ChpScenes[currScene].Chrs[i].Fs ));
         
           }
         });
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_pause}", "mousedown", function(sym, e) {
         try{
         sym.getComposition().getStage().pauseclick();
         }catch(e){/*alert(e);*/}
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_play}", "mousedown", function(sym, e) {
         try{
         sym.getComposition().getStage().playclick();
         }catch(e){/*alert(e);*/}
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__1_20}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('20');
         sym.getComposition().getStage().ShowShape("_1_20");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__1_6}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('6');
         sym.getComposition().getStage().ShowShape("_1_6");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__1_5}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('5');
         sym.getComposition().getStage().ShowShape("_1_5");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__1_4}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('4');
         sym.getComposition().getStage().ShowShape("_1_4");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__1_9}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('9');
         sym.getComposition().getStage().ShowShape("_1_9");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__1_8}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('8');
         sym.getComposition().getStage().ShowShape("_1_8");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__1_7}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('7');
         sym.getComposition().getStage().ShowShape("_1_7");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__1_3}", "mousedown", function(sym, e) {
         sym.getComposition().getStage().setShape('3');
         sym.getComposition().getStage().ShowShape("_1_3");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__1_25}", "mousedown", function(sym, e) {
         sym.getComposition().getStage().setShape('25');
         sym.getComposition().getStage().ShowShape("_1_25");
         sym.getComposition().getStage().setFlickOn();
         
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__1_24}", "mousedown", function(sym, e) {
         sym.getComposition().getStage().setShape('24');
         sym.getComposition().getStage().ShowShape("_1_24");
         sym.getComposition().getStage().setFlickOn();
         
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__1_23}", "mousedown", function(sym, e) {
         sym.getComposition().getStage().setShape('23');
         sym.getComposition().getStage().ShowShape("_1_23");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__1_22}", "mousedown", function(sym, e) {
         sym.getComposition().getStage().setShape('22');
         sym.getComposition().getStage().ShowShape("_1_22");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__1_21}", "mousedown", function(sym, e) {
         sym.getComposition().getStage().setShape('21');
         sym.getComposition().getStage().ShowShape("_1_21");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__1_2}", "mousedown", function(sym, e) {
         sym.getComposition().getStage().setShape('2');
         sym.getComposition().getStage().ShowShape("_1_2");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__1_19}", "mousedown", function(sym, e) {
         sym.getComposition().getStage().setShape('19');
         sym.getComposition().getStage().ShowShape("_1_19");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__1_18}", "mousedown", function(sym, e) {
         sym.getComposition().getStage().setShape('18');
         sym.getComposition().getStage().ShowShape("_1_18");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__1_17}", "mousedown", function(sym, e) {
         sym.getComposition().getStage().setShape('17');
         sym.getComposition().getStage().ShowShape("_1_17");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__1_16}", "mousedown", function(sym, e) {
         sym.getComposition().getStage().setShape('16');
         sym.getComposition().getStage().ShowShape("_1_16");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__1_15}", "mousedown", function(sym, e) {
         sym.getComposition().getStage().setShape('15');
         sym.getComposition().getStage().ShowShape("_1_15");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__1_14}", "mousedown", function(sym, e) {
         sym.getComposition().getStage().setShape('14');
         sym.getComposition().getStage().ShowShape("_1_14");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__1_13}", "mousedown", function(sym, e) {
         sym.getComposition().getStage().setShape('13');
         sym.getComposition().getStage().ShowShape("_1_13");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__1_12}", "mousedown", function(sym, e) {
         sym.getComposition().getStage().setShape('12');
         sym.getComposition().getStage().ShowShape("_1_12");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__1_11}", "mousedown", function(sym, e) {
         sym.getComposition().getStage().setShape('11');
         sym.getComposition().getStage().ShowShape("_1_11");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__1_10}", "mousedown", function(sym, e) {
         sym.getComposition().getStage().setShape('10');
         sym.getComposition().getStage().ShowShape("_1_10");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__1_1}", "mousedown", function(sym, e) {
         sym.getComposition().getStage().setShape('1');
         sym.getComposition().getStage().ShowShape("_1_1");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_next2}", "mousedown", function(sym, e) {
         
         a =a+1;
         //alert(a);
         console.log(a);
         if(a == 1)
         {
         sym.$("img_sym2").hide();
         sym.$("img_sym").show();
         sym.getSymbol("img_sym").stop(1000);
         
         }
         else if(a == 2)
         {
         sym.$("img_sym2").hide();
         sym.$("img_sym").show();
         sym.getSymbol("img_sym").stop(2000);
         }
         
         else
         {
         sym.$("img_sym2").hide();
         sym.$("img_sym").show();
         sym.getSymbol("img_sym").stop(0);
         a=0;
         }
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         
         
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_next1}", "mousedown", function(sym, e) {
         
         a =a+1;
         //alert(a);
         console.log(a);
         if(a == 1)
         {
         sym.$("img_sym2").show();
         sym.$("img_sym").hide();
         sym.getSymbol("img_sym2").stop(1000);
         
         }
         else if(a == 2)
         {
         sym.$("img_sym2").show();
         sym.$("img_sym").hide();
         sym.getSymbol("img_sym2").stop(2000);
         }
         
         else
         {
         sym.$("img_sym2").show();
         sym.$("img_sym").hide();
         sym.getSymbol("img_sym2").stop(0);
         a=0;
         }
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         
           

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__2_18}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('18');
         sym.getComposition().getStage().ShowShape("_2_18");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__2_19}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('19');
         sym.getComposition().getStage().ShowShape("_2_19");
         sym.getComposition().getStage().setFlickOn();
         
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__2_5}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('5');
         sym.getComposition().getStage().ShowShape("_2_5");
         sym.getComposition().getStage().setFlickOn();
         
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__2_9}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('9');
         sym.getComposition().getStage().ShowShape("_2_9");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__2_8}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('8');
         sym.getComposition().getStage().ShowShape("_2_8");
         sym.getComposition().getStage().setFlickOn();
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__2_7}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('7');
         sym.getComposition().getStage().ShowShape("_2_7");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__2_6}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('6');
         sym.getComposition().getStage().ShowShape("_2_6");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__2_4}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('4');
         sym.getComposition().getStage().ShowShape("_2_4");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__2_3}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('3');
         sym.getComposition().getStage().ShowShape("_2_3");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__2_20}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('20');
         sym.getComposition().getStage().ShowShape("_2_20");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__2_2}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('2');
         sym.getComposition().getStage().ShowShape("_2_2");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__2_17}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('17');
         sym.getComposition().getStage().ShowShape("_2_17");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__2_16}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('16');
         sym.getComposition().getStage().ShowShape("_2_16");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__2_15}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('15');
         sym.getComposition().getStage().ShowShape("_2_15");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__2_14}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('14');
         sym.getComposition().getStage().ShowShape("_2_14");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__2_13}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('13');
         sym.getComposition().getStage().ShowShape("_2_13");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__2_12}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('12');
         sym.getComposition().getStage().ShowShape("_2_12");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__2_11}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('11');
         sym.getComposition().getStage().ShowShape("_2_11");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__2_10}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('10');
         sym.getComposition().getStage().ShowShape("_2_10");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__2_1}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('1');
         sym.getComposition().getStage().ShowShape("_2_1");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${__3_32}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('32');
         sym.getComposition().getStage().ShowShape("_3_32");
         sym.getComposition().getStage().setFlickOn();
         
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__3_31}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('31');
         sym.getComposition().getStage().ShowShape("_3_31");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__3_9}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('9');
         sym.getComposition().getStage().ShowShape("_3_9");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__3_8}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('8');
         sym.getComposition().getStage().ShowShape("_3_8");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__3_7}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('7');
         sym.getComposition().getStage().ShowShape("_3_7");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__3_6}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('6');
         sym.getComposition().getStage().ShowShape("_3_6");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__3_4}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('4');
         sym.getComposition().getStage().ShowShape("_3_4");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__3_5}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('5');
         sym.getComposition().getStage().ShowShape("_3_5");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__3_30}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('30');
         sym.getComposition().getStage().ShowShape("_3_30");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__3_3}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('3');
         sym.getComposition().getStage().ShowShape("_3_3");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__3_29}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('29');
         sym.getComposition().getStage().ShowShape("_3_29");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__3_28}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('28');
         sym.getComposition().getStage().ShowShape("_3_28");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__3_27}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('27');
         sym.getComposition().getStage().ShowShape("_3_27");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__3_26}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('26');
         sym.getComposition().getStage().ShowShape("_3_26");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__3_25}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('25');
         sym.getComposition().getStage().ShowShape("_3_25");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__3_23}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('23');
         sym.getComposition().getStage().ShowShape("_3_23");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__3_21}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('21');
         sym.getComposition().getStage().ShowShape("_3_21");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__3_24}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('24');
         sym.getComposition().getStage().ShowShape("_3_24");
         sym.getComposition().getStage().setFlickOn();
         
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__3_22}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('22');
         sym.getComposition().getStage().ShowShape("_3_22");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__3_20}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('20');
         sym.getComposition().getStage().ShowShape("_3_20");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__3_2}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('2');
         sym.getComposition().getStage().ShowShape("_3_2");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__3_19}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('19');
         sym.getComposition().getStage().ShowShape("_3_19");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__3_18}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('18');
         sym.getComposition().getStage().ShowShape("_3_18");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__3_17}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('17');
         sym.getComposition().getStage().ShowShape("_3_17");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__3_16}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('16');
         sym.getComposition().getStage().ShowShape("_3_16");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__3_15}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('15');
         sym.getComposition().getStage().ShowShape("_3_15");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__3_14}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('14');
         sym.getComposition().getStage().ShowShape("_3_14");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__3_13}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('13');
         sym.getComposition().getStage().ShowShape("_3_13");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__3_12}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('12');
         sym.getComposition().getStage().ShowShape("_3_12");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__3_11}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('11');
         sym.getComposition().getStage().ShowShape("_3_11");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__3_10}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('10');
         sym.getComposition().getStage().ShowShape("_3_10");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__3_1}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('1');
         sym.getComposition().getStage().ShowShape("_3_1");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__4_15}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('15');
         sym.getComposition().getStage().ShowShape("_4_15");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__4_9}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('9');
         sym.getComposition().getStage().ShowShape("_4_9");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__4_8}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('8');
         sym.getComposition().getStage().ShowShape("_4_8");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__4_7}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('7');
         sym.getComposition().getStage().ShowShape("_4_7");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__4_6}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('6');
         sym.getComposition().getStage().ShowShape("_4_6");
         sym.getComposition().getStage().setFlickOn();
         
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__4_5}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('5');
         sym.getComposition().getStage().ShowShape("_4_5");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__4_4}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('4');
         sym.getComposition().getStage().ShowShape("_4_4");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__4_38}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('38');
         sym.getComposition().getStage().ShowShape("_4_38");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__4_37}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('37');
         sym.getComposition().getStage().ShowShape("_4_37");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__4_36}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('36');
         sym.getComposition().getStage().ShowShape("_4_36");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__4_35}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('35');
         sym.getComposition().getStage().ShowShape("_4_35");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__4_34}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('34');
         sym.getComposition().getStage().ShowShape("_4_34");
         sym.getComposition().getStage().setFlickOn();
         
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__4_33}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('33');
         sym.getComposition().getStage().ShowShape("_4_33");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__4_32}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('32');
         sym.getComposition().getStage().ShowShape("_4_32");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__4_31}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('31');
         sym.getComposition().getStage().ShowShape("_4_31");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__4_30}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('30');
         sym.getComposition().getStage().ShowShape("_4_30");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__4_3}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('3');
         sym.getComposition().getStage().ShowShape("_4_3");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__4_29}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('29');
         sym.getComposition().getStage().ShowShape("_4_92");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__4_28}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('28');
         sym.getComposition().getStage().ShowShape("_4_28");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__4_27}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('27');
         sym.getComposition().getStage().ShowShape("_4_27");
         sym.getComposition().getStage().setFlickOn();
         
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__4_26}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('26');
         sym.getComposition().getStage().ShowShape("_4_26");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__4_25}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('25');
         sym.getComposition().getStage().ShowShape("_4_25");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__4_24}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('24');
         sym.getComposition().getStage().ShowShape("_4_24");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__4_23}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('23');
         sym.getComposition().getStage().ShowShape("_4_23");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__4_22}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('22');
         sym.getComposition().getStage().ShowShape("_4_22");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__4_21}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('21');
         sym.getComposition().getStage().ShowShape("_4_21");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${__4_2}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('2');
         sym.getComposition().getStage().ShowShape("_4_2");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__4_19}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('19');
         sym.getComposition().getStage().ShowShape("_4_19");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__4_18}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('18');
         sym.getComposition().getStage().ShowShape("_4_18");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__4_17}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('17');
         sym.getComposition().getStage().ShowShape("_4_17");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__4_14}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('14');
         sym.getComposition().getStage().ShowShape("_4_14");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__4_13}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('13');
         sym.getComposition().getStage().ShowShape("_4_13");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__4_12}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('12');
         sym.getComposition().getStage().ShowShape("_4_12");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__4_16}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('16');
         sym.getComposition().getStage().ShowShape("_4_16");
         sym.getComposition().getStage().setFlickOn();
         
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__4_11}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('11');
         sym.getComposition().getStage().ShowShape("_4_11");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__4_10}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('10');
         sym.getComposition().getStage().ShowShape("_4_10");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__4_1}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('1');
         sym.getComposition().getStage().ShowShape("_4_1");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_8}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('8');
         sym.getComposition().getStage().ShowShape("_5_8");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_9}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('9');
         sym.getComposition().getStage().ShowShape("_5_9");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_7}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('7');
         sym.getComposition().getStage().ShowShape("_5_7");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_6}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('6');
         sym.getComposition().getStage().ShowShape("_5_6");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_55}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('55');
         sym.getComposition().getStage().ShowShape("_5_55");
         sym.getComposition().getStage().setFlickOn();
         
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_54}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('54');
         sym.getComposition().getStage().ShowShape("_5_54");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_53}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('53');
         sym.getComposition().getStage().ShowShape("_5_53");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_52}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('52');
         sym.getComposition().getStage().ShowShape("_5_52");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_51}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('51');
         sym.getComposition().getStage().ShowShape("_5_51");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_50}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('50');
         sym.getComposition().getStage().ShowShape("_5_50");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_5}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('5');
         sym.getComposition().getStage().ShowShape("_5_5");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_49}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('49');
         sym.getComposition().getStage().ShowShape("_5_49");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_48}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('48');
         sym.getComposition().getStage().ShowShape("_5_48");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_47}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('47');
         sym.getComposition().getStage().ShowShape("_5_47");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_46}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('46');
         sym.getComposition().getStage().ShowShape("_5_46");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_45}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('45');
         sym.getComposition().getStage().ShowShape("_5_45");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_44}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('44');
         sym.getComposition().getStage().ShowShape("_5_44");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_43}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('43');
         sym.getComposition().getStage().ShowShape("_5_43");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_42}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('42');
         sym.getComposition().getStage().ShowShape("_5_42");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_41}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('41');
         sym.getComposition().getStage().ShowShape("_5_41");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_40}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('40');
         sym.getComposition().getStage().ShowShape("_5_40");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_4}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('4');
         sym.getComposition().getStage().ShowShape("_5_4");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_39}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('39');
         sym.getComposition().getStage().ShowShape("_5_39");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_38}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('38');
         sym.getComposition().getStage().ShowShape("_5_38");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_37}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('37');
         sym.getComposition().getStage().ShowShape("_5_37");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_36}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('36');
         sym.getComposition().getStage().ShowShape("_5_36");
         sym.getComposition().getStage().setFlickOn();
         
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_35}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('35');
         sym.getComposition().getStage().ShowShape("_5_35");
         sym.getComposition().getStage().setFlickOn();
         
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_34}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('34');
         sym.getComposition().getStage().ShowShape("_5_34");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_33}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('33');
         sym.getComposition().getStage().ShowShape("_5_33");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_32}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('32');
         sym.getComposition().getStage().ShowShape("_5_32");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_3}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('3');
         sym.getComposition().getStage().ShowShape("_5_3");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_31}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('31');
         sym.getComposition().getStage().ShowShape("_5_31");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_30}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('30');
         sym.getComposition().getStage().ShowShape("_5_30");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_29}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('29');
         sym.getComposition().getStage().ShowShape("_5_29");
         sym.getComposition().getStage().setFlickOn();
         
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_28}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('28');
         sym.getComposition().getStage().ShowShape("_5_28");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_24}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('24');
         sym.getComposition().getStage().ShowShape("_5_24");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_27}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('27');
         sym.getComposition().getStage().ShowShape("_5_27");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_26}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('26');
         sym.getComposition().getStage().ShowShape("_5_24");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_25}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('25');
         sym.getComposition().getStage().ShowShape("_5_25");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_22}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('22');
         sym.getComposition().getStage().ShowShape("_5_22");
         sym.getComposition().getStage().setFlickOn();
         
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_23}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('23');
         sym.getComposition().getStage().ShowShape("_5_23");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_21}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('21');
         sym.getComposition().getStage().ShowShape("_5_21");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_20}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('20');
         sym.getComposition().getStage().ShowShape("_5_20");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_2}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('2');
         sym.getComposition().getStage().ShowShape("_5_2");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_19}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('19');
         sym.getComposition().getStage().ShowShape("_5_19");
         sym.getComposition().getStage().setFlickOn();
         
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_18}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('18');
         sym.getComposition().getStage().ShowShape("_5_18");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_17}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('17');
         sym.getComposition().getStage().ShowShape("_5_17");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_16}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('16');
         sym.getComposition().getStage().ShowShape("_5_16");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_15}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('15');
         sym.getComposition().getStage().ShowShape("_5_15");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_14}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('14');
         sym.getComposition().getStage().ShowShape("_5_14");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_13}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('13');
         sym.getComposition().getStage().ShowShape("_5_13");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_12}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('12');
         sym.getComposition().getStage().ShowShape("_5_12");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_11}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('11');
         sym.getComposition().getStage().ShowShape("_5_11");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_10}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('10');
         sym.getComposition().getStage().ShowShape("_5_10");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_1}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('1');
         sym.getComposition().getStage().ShowShape("_5_1");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__6_9}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('9');
         sym.getComposition().getStage().ShowShape("_6_9");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__6_8}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('8');
         sym.getComposition().getStage().ShowShape("_6_8");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__6_7}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('7');
         sym.getComposition().getStage().ShowShape("_6_7");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__6_6}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('6');
         sym.getComposition().getStage().ShowShape("_6_6");
         sym.getComposition().getStage().setFlickOn();
         
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__6_5}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('5');
         sym.getComposition().getStage().ShowShape("_6_5");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__6_4}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('4');
         sym.getComposition().getStage().ShowShape("_6_4");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__6_3}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('3');
         sym.getComposition().getStage().ShowShape("_6_3");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__6_2}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('2');
         sym.getComposition().getStage().ShowShape("_6_2");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__6_18}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('18');
         sym.getComposition().getStage().ShowShape("_6_18");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__6_17}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('17');
         sym.getComposition().getStage().ShowShape("_6_17");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__6_16}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('16');
         sym.getComposition().getStage().ShowShape("_6_16");
         sym.getComposition().getStage().setFlickOn();
         
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__6_15}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('15');
         sym.getComposition().getStage().ShowShape("_6_15");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__6_14}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('14');
         sym.getComposition().getStage().ShowShape("_6_14");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__6_13}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('13');
         sym.getComposition().getStage().ShowShape("_6_13");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__6_12}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('12');
         sym.getComposition().getStage().ShowShape("_6_12");
         sym.getComposition().getStage().setFlickOn();
         
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__6_11}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('11');
         sym.getComposition().getStage().ShowShape("_6_11");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__6_10}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('10');
         sym.getComposition().getStage().ShowShape("_6_10");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__6_1}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('1');
         sym.getComposition().getStage().ShowShape("_6_1");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__6_19}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('19');
         sym.getComposition().getStage().ShowShape("_6_19");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_show6}", "mousedown", function(sym, e) {
         sym.$("Screen_6").hide();
         sym.$("Group_colore").hide();
         sym.$("ShowShapeDiv").hide();
         sym.$("ShowShapeDiv1").hide();
         sym.$("show6").hide();
         sym.$("Rectangle").hide();
         sym.$("Rectangle6").hide();
         
         sym.$("next_icon12").hide();
         sym.$("next_icon11").hide();
         
         sym.$("Group6").css({'position': 'absolute','left':'20%'});
         
         sym.$("last_screen6").show();
         sym.$("more_game").show();
         sym.$("repaly_sym").show();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_show1}", "mousedown", function(sym, e) {
         sym.$("Screen_1").hide();
         sym.$("Group_colore").hide();
         sym.$("ShowShapeDiv").hide();
         sym.$("ShowShapeDiv1").hide();
         sym.$("show1").hide();
         sym.$("Rectangle2").hide();
         sym.$("Rectangle22").hide();
         
         sym.$("next_icon2").hide();
         sym.$("next_icon1").hide();
         
         sym.$("Group1").css({'position': 'absolute','left':'30%'});
         
         sym.$("last_screen1").show();
         sym.$("more_game").show();
         sym.$("repaly_sym").show();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_show2}", "mousedown", function(sym, e) {
         sym.$("Screen_2").hide();
         sym.$("Group_colore").hide();
         sym.$("ShowShapeDiv").hide();
         sym.$("ShowShapeDiv1").hide();
         sym.$("show2").hide();
         sym.$("Rectangle").hide();
         sym.$("Rectangle1").hide();
         
         sym.$("next_icon4").hide();
         sym.$("next_icon3").hide();
         
         sym.$("Group2").css({'position': 'absolute','left':'30%'});
         
         sym.$("last_screen2").show();
         sym.$("more_game").show();
         sym.$("repaly_sym").show();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_show5}", "mousedown", function(sym, e) {
         sym.$("Screen_5").hide();
         sym.$("Group_colore").hide();
         sym.$("ShowShapeDiv").hide();
         sym.$("ShowShapeDiv1").hide();
         sym.$("show5").hide();
         sym.$("Rectangle5").hide();
         
         sym.$("next_icon9").hide();
         sym.$("next_icon10").hide();
         
         sym.$("Group5").css({'position': 'absolute','left':'25%'});
         
         sym.$("last_screen5").show();
         sym.$("more_game").show();
         sym.$("repaly_sym").show();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_show4}", "mousedown", function(sym, e) {
         sym.$("Screen_4").hide();
         sym.$("Group_colore").hide();
         sym.$("ShowShapeDiv").hide();
         sym.$("ShowShapeDiv1").hide();
         sym.$("show4").hide();
         sym.$("Rectangle4").hide();
         sym.$("Rectangle1").hide();
         
         sym.$("next_icon8").hide();
         sym.$("next_icon7").hide();
         
         sym.$("Group4").css({'position': 'absolute','left':'21%'});
         
         sym.$("last_screen4").show();
         sym.$("more_game").show();
         sym.$("repaly_sym").show();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_show3}", "mousedown", function(sym, e) {
         sym.$("Screen_3").hide();
         sym.$("Group_colore").hide();
         sym.$("ShowShapeDiv").hide();
         sym.$("ShowShapeDiv1").hide();
         sym.$("show3").hide();
         sym.$("Rectangle3").hide();
         
         sym.$("next_icon6").hide();
         sym.$("next_icon5").hide();
         
         sym.$("Group3").css({'position': 'absolute','left':'27%'});
         
         sym.$("last_screen3").show();
         sym.$("more_game").show();
         sym.$("repaly_sym").show();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__4_20}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('20');
         sym.getComposition().getStage().ShowShape("_4_20");
         sym.getComposition().getStage().setFlickOn();
         
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_sym_1}", "mousedown", function(sym, e) {
         sym.getComposition().getStage().setFlickOn();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle1}", "mousedown", function(sym, e) {
         sym.getComposition().getStage().setFlickOn();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_repaly_sym}", "mousedown", function(sym, e) {
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         
         window.location.href="index.html";
         
         
         

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_next_icon2}", "mousedown", function(sym, e) {
         sym.$("Rectangle22").animate({"scrollLeft":"+=150%"});
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_next_icon1}", "mousedown", function(sym, e) {
         sym.$("Rectangle22").animate({"scrollLeft":"-=150%"});
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_next_icon4}", "mousedown", function(sym, e) {
         sym.$("Rectangle1").animate({"scrollLeft":"+=150%"});
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_next_icon3}", "mousedown", function(sym, e) {
         sym.$("Rectangle1").animate({"scrollLeft":"-=150%"});
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_next_icon6}", "mousedown", function(sym, e) {
         sym.$("Rectangle3").animate({"scrollLeft":"+=150%"});
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_next_icon5}", "mousedown", function(sym, e) {
         sym.$("Rectangle3").animate({"scrollLeft":"-=150%"});
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_next_icon8}", "mousedown", function(sym, e) {
         sym.$("Rectangle4").animate({"scrollLeft":"+=150%"});
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_next_icon7}", "mousedown", function(sym, e) {
         sym.$("Rectangle4").animate({"scrollLeft":"-=150%"});
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_next_icon10}", "mousedown", function(sym, e) {
         sym.$("Rectangle5").animate({"scrollLeft":"+=150%"});
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_next_icon9}", "mousedown", function(sym, e) {
         sym.$("Rectangle5").animate({"scrollLeft":"-=150%"});
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_next_icon12}", "mousedown", function(sym, e) {
         sym.$("Rectangle6").animate({"scrollLeft":"+=150%"});
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_next_icon11}", "mousedown", function(sym, e) {
         sym.$("Rectangle6").animate({"scrollLeft":"-=150%"});
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'play_sym'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("play_sym");
   //Edge symbol end:'play_sym'

   //=========================================================
   
   //Edge symbol: 'Colore_sym'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_white}", "mousedown", function(sym, e) {
         sym.getComposition().getStage().setColor("16");
         sym.getComposition().getStage().color();
         
         sym.getComposition().getStage().setFlickOFF();
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_gray3}", "mousedown", function(sym, e) {
         sym.getComposition().getStage().setColor("15");
         sym.getComposition().getStage().color();
         
         sym.getComposition().getStage().setFlickOFF();
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_gray2}", "mousedown", function(sym, e) {
         sym.getComposition().getStage().setColor("14");
         sym.getComposition().getStage().color();
         
         sym.getComposition().getStage().setFlickOFF();
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_gray}", "mousedown", function(sym, e) {
         sym.getComposition().getStage().setColor("13");
         sym.getComposition().getStage().color();
         
         sym.getComposition().getStage().setFlickOFF();
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_brown}", "mousedown", function(sym, e) {
         sym.getComposition().getStage().setColor("12");
         sym.getComposition().getStage().color();
         
         sym.getComposition().getStage().setFlickOFF();
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_pink2}", "mousedown", function(sym, e) {
         sym.getComposition().getStage().setColor("11");
         sym.getComposition().getStage().color();
         
         sym.getComposition().getStage().setFlickOFF();
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_pink}", "mousedown", function(sym, e) {
         sym.getComposition().getStage().setColor("10");
         sym.getComposition().getStage().color();
         
         sym.getComposition().getStage().setFlickOFF();
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_nevy_blue}", "mousedown", function(sym, e) {
         sym.getComposition().getStage().setColor("9");
         sym.getComposition().getStage().color();
         
         sym.getComposition().getStage().setFlickOFF();
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_blue}", "mousedown", function(sym, e) {
         sym.getComposition().getStage().setColor("8");
         sym.getComposition().getStage().color();
         
         sym.getComposition().getStage().setFlickOFF();
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_sky_blue2}", "mousedown", function(sym, e) {
         sym.getComposition().getStage().setColor("7");
         sym.getComposition().getStage().color();
         sym.getComposition().getStage().setFlickOFF();
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_forest_green}", "mousedown", function(sym, e) {
         sym.getComposition().getStage().setColor("6");
         
         sym.getComposition().getStage().color();
         sym.getComposition().getStage().setFlickOFF();
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_green}", "mousedown", function(sym, e) {
         sym.getComposition().getStage().setColor("5");
         sym.getComposition().getStage().color();
         sym.getComposition().getStage().setFlickOFF();
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_sky_blue}", "mousedown", function(sym, e) {
         sym.getComposition().getStage().setColor("4");
         sym.getComposition().getStage().color();
         sym.getComposition().getStage().setFlickOFF();
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_marun}", "mousedown", function(sym, e) {
         sym.getComposition().getStage().setColor("3");
         sym.getComposition().getStage().color();
         sym.getComposition().getStage().setFlickOFF();
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_orrnge}", "mousedown", function(sym, e) {
         sym.getComposition().getStage().setColor("2");
         sym.getComposition().getStage().color();
         sym.getComposition().getStage().setFlickOFF();
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_yewllo}", "mousedown", function(sym, e) {
         sym.getComposition().getStage().setColor("1");
         sym.getComposition().getStage().color();
         sym.getComposition().getStage().setFlickOFF();
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("Colore_sym");
   //Edge symbol end:'Colore_sym'

   //=========================================================
   
   //Edge symbol: 'Screen_sym'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${__1}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().$("Color_Screen_1").show();
         sym.getComposition().getStage().$("Screen_1").show();
         sym.getComposition().getStage().$("Board_Screen").hide();
         sym.getComposition().getStage().setSketch("1");
         sym.getComposition().getStage().$("Group_colore").show();
         sym.getComposition().getStage().$("ShowShapeDiv1").show();
         sym.getComposition().getStage().$("ShowShapeDiv").show();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__2}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().$("Color_Screen_2").show();
         sym.getComposition().getStage().$("Screen_2").show();
         sym.getComposition().getStage().$("Board_Screen").hide();
         sym.getComposition().getStage().setSketch("2");
         sym.getComposition().getStage().$("Group_colore").show();
         sym.getComposition().getStage().$("ShowShapeDiv1").show();
         sym.getComposition().getStage().$("ShowShapeDiv").show();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__3}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().$("Color_Screen_3").show();
         sym.getComposition().getStage().$("Screen_3").show();
         sym.getComposition().getStage().$("Board_Screen").hide();
         sym.getComposition().getStage().setSketch("3");
         sym.getComposition().getStage().$("Group_colore").show();
         sym.getComposition().getStage().$("ShowShapeDiv1").show();
         sym.getComposition().getStage().$("ShowShapeDiv").show();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__4}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().$("Color_Screen_4").show();
         sym.getComposition().getStage().$("Screen_4").show();
         sym.getComposition().getStage().$("Board_Screen").hide();
         sym.getComposition().getStage().setSketch("4");
         sym.getComposition().getStage().$("Group_colore").show();
         sym.getComposition().getStage().$("ShowShapeDiv1").show();
         sym.getComposition().getStage().$("ShowShapeDiv").show();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().$("Color_Screen_5").show();
         sym.getComposition().getStage().$("Screen_5").show();
         sym.getComposition().getStage().$("Board_Screen").hide();
         sym.getComposition().getStage().setSketch("5");
         sym.getComposition().getStage().$("Group_colore").show();
         sym.getComposition().getStage().$("ShowShapeDiv1").show();
         sym.getComposition().getStage().$("ShowShapeDiv").show();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__6}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().$("Color_Screen_6").show();
         sym.getComposition().getStage().$("Screen_6").show();
         sym.getComposition().getStage().$("Board_Screen").hide();
         sym.getComposition().getStage().setSketch("6");
         sym.getComposition().getStage().$("Group_colore").show();
         sym.getComposition().getStage().$("ShowShapeDiv1").show();
         sym.getComposition().getStage().$("ShowShapeDiv").show();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         
         

      });
      //Edge binding end

   })("Screen_sym");
   //Edge symbol end:'Screen_sym'

   //=========================================================
   
   //Edge symbol: 'Screen_sym_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__1}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().$("Color_Screen_1").show();
         sym.getComposition().getStage().$("Screen_1").show();
         sym.getComposition().getStage().$("Board_Screen").hide();
         sym.getComposition().getStage().setSketch("1");
         sym.getComposition().getStage().$("Group_colore").show();
         sym.getComposition().getStage().$("ShowShapeDiv1").show();
         sym.getComposition().getStage().$("ShowShapeDiv").show();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         
         
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__2}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().$("Color_Screen_2").show();
         sym.getComposition().getStage().$("Screen_2").show();
         sym.getComposition().getStage().$("Board_Screen").hide();
         sym.getComposition().getStage().setSketch("2");
         sym.getComposition().getStage().$("Group_colore").show();
         sym.getComposition().getStage().$("ShowShapeDiv1").show();
         sym.getComposition().getStage().$("ShowShapeDiv").show();
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__3}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().$("Color_Screen_3").show();
         sym.getComposition().getStage().$("Screen_3").show();
         sym.getComposition().getStage().$("Board_Screen").hide();
         sym.getComposition().getStage().setSketch("3");
         sym.getComposition().getStage().$("Group_colore").show();
         sym.getComposition().getStage().$("ShowShapeDiv1").show();
         sym.getComposition().getStage().$("ShowShapeDiv").show();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__4}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().$("Color_Screen_4").show();
         sym.getComposition().getStage().$("Screen_4").show();
         sym.getComposition().getStage().$("Board_Screen").hide();
         sym.getComposition().getStage().setSketch("4");
         sym.getComposition().getStage().$("Group_colore").show();
         sym.getComposition().getStage().$("ShowShapeDiv1").show();
         sym.getComposition().getStage().$("ShowShapeDiv").show();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().$("Color_Screen_5").show();
         sym.getComposition().getStage().$("Screen_5").show();
         sym.getComposition().getStage().$("Board_Screen").hide();
         sym.getComposition().getStage().setSketch("5");
         sym.getComposition().getStage().$("Group_colore").show();
         sym.getComposition().getStage().$("ShowShapeDiv1").show();
         sym.getComposition().getStage().$("ShowShapeDiv").show();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__6}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().$("Color_Screen_6").show();
         sym.getComposition().getStage().$("Screen_6").show();
         sym.getComposition().getStage().$("Board_Screen").hide();
         sym.getComposition().getStage().setSketch("6");
         sym.getComposition().getStage().$("Group_colore").show();
         sym.getComposition().getStage().$("ShowShapeDiv1").show();
         sym.getComposition().getStage().$("ShowShapeDiv").show();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         
         

      });
      //Edge binding end

   })("Screen_sym_1");
   //Edge symbol end:'Screen_sym_1'

   //=========================================================
   
   //Edge symbol: 'shape'
   (function(symbolName) {   
   
   })("shape");
   //Edge symbol end:'shape'

   //=========================================================
   
   //Edge symbol: 'sym_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${__2_1Copy2}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('1');
         sym.getComposition().getStage().ShowShape("_2_1");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__2_10Copy2}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('10');
         sym.getComposition().getStage().ShowShape("_2_10");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__2_11Copy2}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('11');
         sym.getComposition().getStage().ShowShape("_2_11");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__2_13Copy2}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('13');
         sym.getComposition().getStage().ShowShape("_2_13");
         sym.getComposition().getStage().setFlickOn();
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__2_14Copy2}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('14');
         sym.getComposition().getStage().ShowShape("_2_14");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__2_15Copy2}", "mousedown", function(sym, e) {
         
         
         sym.getComposition().getStage().setShape('15');
         sym.getComposition().getStage().ShowShape("_2_15");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__2_16Copy2}", "mousedown", function(sym, e) {
         
         
         sym.getComposition().getStage().setShape('16');
         sym.getComposition().getStage().ShowShape("_2_16");
         sym.getComposition().getStage().setFlickOn();
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__2_12Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('12');
         sym.getComposition().getStage().ShowShape("_2_12");
         sym.getComposition().getStage().setFlickOn();
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__2_2Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('2');
         sym.getComposition().getStage().ShowShape("_2_2");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__2_3Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('3');
         sym.getComposition().getStage().ShowShape("_2_3");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__2_4Copy}", "mousedown", function(sym, e) {
         
         
         sym.getComposition().getStage().setShape('4');
         sym.getComposition().getStage().ShowShape("_2_4");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__2_6Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('6');
         sym.getComposition().getStage().ShowShape("_2_6");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__2_7Copy}", "mousedown", function(sym, e) {
         sym.getComposition().getStage().setShape('7');
         sym.getComposition().getStage().ShowShape("_2_7");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__2_8Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('8');
         sym.getComposition().getStage().ShowShape("_2_8");
         sym.getComposition().getStage().setFlickOn();
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__2_9Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('9');
         sym.getComposition().getStage().ShowShape("_2_9");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__2_5Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('5');
         sym.getComposition().getStage().ShowShape("_2_5");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__2_19Copy}", "mousedown", function(sym, e) {
         
         
         sym.getComposition().getStage().setShape('19');
         sym.getComposition().getStage().ShowShape("_2_19");
         sym.getComposition().getStage().setFlickOn();
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__2_17Copy}", "mousedown", function(sym, e) {
         sym.getComposition().getStage().setShape('17');
         sym.getComposition().getStage().ShowShape("_2_17");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__2_20Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('20');
         sym.getComposition().getStage().ShowShape("_2_20");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__2_18Copy}", "mousedown", function(sym, e) {
         sym.getComposition().getStage().setShape('18');
         sym.getComposition().getStage().ShowShape("_2_18");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         
         

      });
      //Edge binding end

   })("sym_1");
   //Edge symbol end:'sym_1'

   //=========================================================
   
   //Edge symbol: 'Ani_6'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${__6_19Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('19');
         sym.getComposition().getStage().ShowShape("_6_19");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__6_11Copy}", "mousedown", function(sym, e) {
         sym.getComposition().getStage().setShape('11');
         sym.getComposition().getStage().ShowShape("_6_11");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__6_10Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('10');
         sym.getComposition().getStage().ShowShape("_6_10");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__6_7Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('7');
         sym.getComposition().getStage().ShowShape("_6_7");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__6_8Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('8');
         sym.getComposition().getStage().ShowShape("_6_8");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__6_5Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('5');
         sym.getComposition().getStage().ShowShape("_6_5");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__6_4Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('4');
         sym.getComposition().getStage().ShowShape("_6_4");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__6_3Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('3');
         sym.getComposition().getStage().ShowShape("_6_3");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__6_2Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('2');
         sym.getComposition().getStage().ShowShape("_6_2");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__6_18Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('18');
         sym.getComposition().getStage().ShowShape("_6_18");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__6_17Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('17');
         sym.getComposition().getStage().ShowShape("_6_17");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__6_16Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('16');
         sym.getComposition().getStage().ShowShape("_6_16");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__6_15Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('15');
         sym.getComposition().getStage().ShowShape("_6_15");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__6_14Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('14');
         sym.getComposition().getStage().ShowShape("_6_14");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__6_12Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('12');
         sym.getComposition().getStage().ShowShape("_6_12");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__6_6Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('6');
         sym.getComposition().getStage().ShowShape("_6_6");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__6_13Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('13');
         sym.getComposition().getStage().ShowShape("_6_13");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__6_1Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('1');
         sym.getComposition().getStage().ShowShape("_6_1");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }

      });
      //Edge binding end

   })("Ani_6");
   //Edge symbol end:'Ani_6'

   //=========================================================
   
   //Edge symbol: 'Ani_3'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${__3_1Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('1');
         sym.getComposition().getStage().ShowShape("_3_1");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_show23Copy31}", "mousedown", function(sym, e) {
         sym.getComposition().getStage().setShape('1');
         sym.getComposition().getStage().ShowShape("_3_1");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__3_32Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('32');
         sym.getComposition().getStage().ShowShape("_3_32");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__3_31Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('31');
         sym.getComposition().getStage().ShowShape("_3_31");
         sym.getComposition().getStage().setFlickOn();
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__3_9Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('9');
         sym.getComposition().getStage().ShowShape("_3_9");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__3_6Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('6');
         sym.getComposition().getStage().ShowShape("_3_6");
         sym.getComposition().getStage().setFlickOn();
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__3_8Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('8');
         sym.getComposition().getStage().ShowShape("_3_8");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__3_7Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('7');
         sym.getComposition().getStage().ShowShape("_3_7");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__3_4Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('4');
         sym.getComposition().getStage().ShowShape("_3_4");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__3_5Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('5');
         sym.getComposition().getStage().ShowShape("_3_5");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__3_30Copy}", "mousedown", function(sym, e) {
         
         
         sym.getComposition().getStage().setShape('30');
         sym.getComposition().getStage().ShowShape("_4_30");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__3_3Copy}", "mousedown", function(sym, e) {
         
         
         sym.getComposition().getStage().setShape('3');
         sym.getComposition().getStage().ShowShape("_3_3");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__3_29Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('29');
         sym.getComposition().getStage().ShowShape("_3_29");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__3_26Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('26');
         sym.getComposition().getStage().ShowShape("_3_26");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__3_27Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('27');
         sym.getComposition().getStage().ShowShape("_3_27");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__3_28Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('28');
         sym.getComposition().getStage().ShowShape("_3_28");
         sym.getComposition().getStage().setFlickOn();
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__3_25Copy}", "mousedown", function(sym, e) {
         sym.getComposition().getStage().setShape('25');
         sym.getComposition().getStage().ShowShape("_3_25");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__3_23Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('23');
         sym.getComposition().getStage().ShowShape("_3_23");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__3_21Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('21');
         sym.getComposition().getStage().ShowShape("_3_21");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__3_24Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('24');
         sym.getComposition().getStage().ShowShape("_3_24");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__3_22Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('22');
         sym.getComposition().getStage().ShowShape("_3_22");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__3_20Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('20');
         sym.getComposition().getStage().ShowShape("_3_20");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__3_2Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('2');
         sym.getComposition().getStage().ShowShape("_3_2");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_show23Copy10}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('2');
         sym.getComposition().getStage().ShowShape("_3_2");
         sym.getComposition().getStage().setFlickOn();
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__3_19Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('19');
         sym.getComposition().getStage().ShowShape("_3_19");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_show23Copy9}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('23');
         sym.getComposition().getStage().ShowShape("_3_23");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__3_18Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('18');
         sym.getComposition().getStage().ShowShape("_3_18");
         sym.getComposition().getStage().setFlickOn();
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__3_17Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('17');
         sym.getComposition().getStage().ShowShape("_3_17");
         sym.getComposition().getStage().setFlickOn();
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__3_15Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('15');
         sym.getComposition().getStage().ShowShape("_3_15");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__3_16Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('16');
         sym.getComposition().getStage().ShowShape("_3_16");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__3_10Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('10');
         sym.getComposition().getStage().ShowShape("_3_10");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__3_14Copy}", "mousedown", function(sym, e) {
         
         
         sym.getComposition().getStage().setShape('14');
         sym.getComposition().getStage().ShowShape("_3_14");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__3_13Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('13');
         sym.getComposition().getStage().ShowShape("_3_13");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__3_12Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('12');
         sym.getComposition().getStage().ShowShape("_3_12");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__3_11Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('11');
         sym.getComposition().getStage().ShowShape("_3_11");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      

   })("Ani_3");
   //Edge symbol end:'Ani_3'

   //=========================================================
   
   //Edge symbol: 'Ani_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${__1_20Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('20');
         sym.getComposition().getStage().ShowShape("_1_20");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__1_12Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('12');
         sym.getComposition().getStage().ShowShape("_1_12");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__1_13Copy}", "mousedown", function(sym, e) {
         
         
         sym.getComposition().getStage().setShape('13');
         sym.getComposition().getStage().ShowShape("_1_13");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__1_11Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('11');
         sym.getComposition().getStage().ShowShape("_1_11");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__1_6Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('6');
         sym.getComposition().getStage().ShowShape("_1_6");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__1_18Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('18');
         sym.getComposition().getStage().ShowShape("_1_18");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__1_19Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('19');
         sym.getComposition().getStage().ShowShape("_1_19");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__1_25Copy}", "mousedown", function(sym, e) {
         
         
         sym.getComposition().getStage().setShape('25');
         sym.getComposition().getStage().ShowShape("_1_25");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__1_21Copy}", "mousedown", function(sym, e) {
         sym.getComposition().getStage().setShape('21');
         sym.getComposition().getStage().ShowShape("_1_21");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__1_24Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('24');
         sym.getComposition().getStage().ShowShape("_1_24");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__1_17Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('17');
         sym.getComposition().getStage().ShowShape("_1_17");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__1_8Copy}", "mousedown", function(sym, e) {
         
         
         sym.getComposition().getStage().setShape('8');
         sym.getComposition().getStage().ShowShape("_1_8");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__1_23Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('23');
         sym.getComposition().getStage().ShowShape("_1_23");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__1_5Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('5');
         sym.getComposition().getStage().ShowShape("_1_5");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__1_4Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('4');
         sym.getComposition().getStage().ShowShape("_1_4");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__1_9Copy}", "mousedown", function(sym, e) {
         
         
         sym.getComposition().getStage().setShape('9');
         sym.getComposition().getStage().ShowShape("_1_9");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__1_7Copy}", "mousedown", function(sym, e) {
         
         
         sym.getComposition().getStage().setShape('7');
         sym.getComposition().getStage().ShowShape("_1_7");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__1_16Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('16');
         sym.getComposition().getStage().ShowShape("_1_16");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__1_1Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('1');
         sym.getComposition().getStage().ShowShape("_1_1");
         sym.getComposition().getStage().setFlickOn();
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__1_15Copy}", "mousedown", function(sym, e) {
         
         
         sym.getComposition().getStage().setShape('15');
         sym.getComposition().getStage().ShowShape("_1_15");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__1_14Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('14');
         sym.getComposition().getStage().ShowShape("_1_14");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__1_10Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('10');
         sym.getComposition().getStage().ShowShape("_1_10");
         sym.getComposition().getStage().setFlickOn();
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__1_3Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('3');
         sym.getComposition().getStage().ShowShape("_1_3");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__1_22Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('22');
         sym.getComposition().getStage().ShowShape("_1_22");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__1_2Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('2');
         sym.getComposition().getStage().ShowShape("_1_2");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

   })("Ani_1");
   //Edge symbol end:'Ani_1'

   //=========================================================
   
   //Edge symbol: 'Ani_4'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${__4_11Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('11');
         sym.getComposition().getStage().ShowShape("_4_11");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_show23Copy35}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('11');
         sym.getComposition().getStage().ShowShape("_4_11");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__4_10Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('10');
         sym.getComposition().getStage().ShowShape("_4_10");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_show23Copy34}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('10');
         sym.getComposition().getStage().ShowShape("_4_10");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__4_15Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('15');
         sym.getComposition().getStage().ShowShape("_4_15");
         sym.getComposition().getStage().setFlickOn();
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__4_14Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('14');
         sym.getComposition().getStage().ShowShape("_4_14");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__4_13Copy}", "mousedown", function(sym, e) {
         sym.getComposition().getStage().setShape('13');
         sym.getComposition().getStage().ShowShape("_4_13");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__4_12Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('12');
         sym.getComposition().getStage().ShowShape("_4_12");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__4_9Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('9');
         sym.getComposition().getStage().ShowShape("_4_9");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__4_8Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('8');
         sym.getComposition().getStage().ShowShape("_4_8");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__4_7Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('7');
         sym.getComposition().getStage().ShowShape("_4_7");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__4_6Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('6');
         sym.getComposition().getStage().ShowShape("_4_6");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__4_5Copy}", "mousedown", function(sym, e) {
         
         
         sym.getComposition().getStage().setShape('5');
         sym.getComposition().getStage().ShowShape("_4_5");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__4_4Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('4');
         sym.getComposition().getStage().ShowShape("_4_4");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__4_38Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('38');
         sym.getComposition().getStage().ShowShape("_4_38");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__4_37Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('37');
         sym.getComposition().getStage().ShowShape("_4_37");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__4_36Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('36');
         sym.getComposition().getStage().ShowShape("_4_36");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__4_32Copy}", "mousedown", function(sym, e) {
         
         
         sym.getComposition().getStage().setShape('32');
         sym.getComposition().getStage().ShowShape("_4_32");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__4_35Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('35');
         sym.getComposition().getStage().ShowShape("_4_35");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__4_33Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('33');
         sym.getComposition().getStage().ShowShape("_4_33");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__4_31Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('31');
         sym.getComposition().getStage().ShowShape("_4_31");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__4_30Copy}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__4_30Copy}", "mousedown", function(sym, e) {
         
         
         sym.getComposition().getStage().setShape('30');
         sym.getComposition().getStage().ShowShape("_4_30");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__4_27Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('27');
         sym.getComposition().getStage().ShowShape("_4_5");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__4_24Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('24');
         sym.getComposition().getStage().ShowShape("_4_24");
         sym.getComposition().getStage().setFlickOn();
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__4_23Copy}", "mousedown", function(sym, e) {
         
         
         sym.getComposition().getStage().setShape('23');
         sym.getComposition().getStage().ShowShape("_4_23");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__4_22Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('22');
         sym.getComposition().getStage().ShowShape("_4_22");
         sym.getComposition().getStage().setFlickOn();
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__4_28Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('28');
         sym.getComposition().getStage().ShowShape("_4_28");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__4_29Copy}", "mousedown", function(sym, e) {
         sym.getComposition().getStage().setShape('29');
         sym.getComposition().getStage().ShowShape("_4_29");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__4_26Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('26');
         sym.getComposition().getStage().ShowShape("_4_26");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__4_25Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('25');
         sym.getComposition().getStage().ShowShape("_4_25");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__4_2Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('2');
         sym.getComposition().getStage().ShowShape("_4_2");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${__4_20Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('20');
         sym.getComposition().getStage().ShowShape("_4_20");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__4_18Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('18');
         sym.getComposition().getStage().ShowShape("_4_18");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__4_17Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('17');
         sym.getComposition().getStage().ShowShape("_4_17");
         sym.getComposition().getStage().setFlickOn();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__4_19Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('19');
         sym.getComposition().getStage().ShowShape("_4_19");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__4_3Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('3');
         sym.getComposition().getStage().ShowShape("_4_3");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__4_16Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('16');
         sym.getComposition().getStage().ShowShape("_4_16");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__4_34Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('34');
         sym.getComposition().getStage().ShowShape("_4_34");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__4_21Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('21');
         sym.getComposition().getStage().ShowShape("_4_21");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__4_1Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('1');
         sym.getComposition().getStage().ShowShape("_4_1");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_show23Copy17}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('27');
         sym.getComposition().getStage().ShowShape("_4_5");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_show23Copy33}", "mousedown", function(sym, e) {
         sym.getComposition().getStage().setShape('15');
         sym.getComposition().getStage().ShowShape("_4_15");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_show23Copy32}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('14');
         sym.getComposition().getStage().ShowShape("_4_14");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_show23Copy31}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('12');
         sym.getComposition().getStage().ShowShape("_4_12");
         sym.getComposition().getStage().setFlickOn();
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_show23Copy37}", "mousedown", function(sym, e) {
         
         
         sym.getComposition().getStage().setShape('13');
         sym.getComposition().getStage().ShowShape("_4_13");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_show23Copy16}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('24');
         sym.getComposition().getStage().ShowShape("_4_24");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_show23Copy15}", "mousedown", function(sym, e) {
         
         
         sym.getComposition().getStage().setShape('24');
         sym.getComposition().getStage().ShowShape("_4_24");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_show23Copy14}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('22');
         sym.getComposition().getStage().ShowShape("_4_22");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/music/buttan.mp3");
         }

      });
      //Edge binding end

   })("Ani_4");
   //Edge symbol end:'Ani_4'

   //=========================================================
   
   //Edge symbol: 'Ani_5'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${__5_6Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('6');
         sym.getComposition().getStage().ShowShape("_5_6");
         sym.getComposition().getStage().setFlickOn();
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_51Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('51');
         sym.getComposition().getStage().ShowShape("_5_51");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }
         
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_show22Copy54}", "mousedown", function(sym, e) {
         
         
         
         sym.getComposition().getStage().setShape('6');
         sym.getComposition().getStage().ShowShape("_5_6");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }
         
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_show22Copy53}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('51');
         sym.getComposition().getStage().ShowShape("_5_51");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_8Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('8');
         sym.getComposition().getStage().ShowShape("_5_8");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_9Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('9');
         sym.getComposition().getStage().ShowShape("_5_9");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_7Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('7');
         sym.getComposition().getStage().ShowShape("_5_7");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_52Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('52');
         sym.getComposition().getStage().ShowShape("_5_52");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_54Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('54');
         sym.getComposition().getStage().ShowShape("_5_54");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_53Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('53');
         sym.getComposition().getStage().ShowShape("_5_53");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_50Copy}", "mousedown", function(sym, e) {
         
         
         sym.getComposition().getStage().setShape('50');
         sym.getComposition().getStage().ShowShape("_5_50");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_5Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('5');
         sym.getComposition().getStage().ShowShape("_5_5");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_48Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('48');
         sym.getComposition().getStage().ShowShape("_5_48");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_49Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('49');
         sym.getComposition().getStage().ShowShape("_5_49");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_46Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('46');
         sym.getComposition().getStage().ShowShape("_5_46");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_55Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('55');
         sym.getComposition().getStage().ShowShape("_5_55");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_45Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('45');
         sym.getComposition().getStage().ShowShape("_5_45");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_44Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('44');
         sym.getComposition().getStage().ShowShape("_5_44");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_43Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('43');
         sym.getComposition().getStage().ShowShape("_5_43");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_42Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('42');
         sym.getComposition().getStage().ShowShape("_5_42");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_41Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('41');
         sym.getComposition().getStage().ShowShape("_5_41");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_40Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('40');
         sym.getComposition().getStage().ShowShape("_5_40");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_47Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('47');
         sym.getComposition().getStage().ShowShape("_5_47");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_4Copy}", "mousedown", function(sym, e) {
         
         
         sym.getComposition().getStage().setShape('4');
         sym.getComposition().getStage().ShowShape("_5_4");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_39Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('39');
         sym.getComposition().getStage().ShowShape("_5_39");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_38Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('38');
         sym.getComposition().getStage().ShowShape("_5_38");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_35Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('35');
         sym.getComposition().getStage().ShowShape("_5_35");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_34Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('34');
         sym.getComposition().getStage().ShowShape("_5_34");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_33Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('33');
         sym.getComposition().getStage().ShowShape("_5_33");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_32Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('32');
         sym.getComposition().getStage().ShowShape("_5_32");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_31Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('31');
         sym.getComposition().getStage().ShowShape("_5_31");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_3Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('3');
         sym.getComposition().getStage().ShowShape("_5_3");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_30Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('30');
         sym.getComposition().getStage().ShowShape("_5_30");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_36Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('36');
         sym.getComposition().getStage().ShowShape("_5_36");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_29Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('29');
         sym.getComposition().getStage().ShowShape("_5_29");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_28Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('28');
         sym.getComposition().getStage().ShowShape("_5_28");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_27Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('27');
         sym.getComposition().getStage().ShowShape("_5_27");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_24Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('24');
         sym.getComposition().getStage().ShowShape("_5_24");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_22Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('22');
         sym.getComposition().getStage().ShowShape("_5_22");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_23Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('23');
         sym.getComposition().getStage().ShowShape("_5_23");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_21Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('21');
         sym.getComposition().getStage().ShowShape("_5_21");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_26Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('26');
         sym.getComposition().getStage().ShowShape("_5_26");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_2Copy}", "mousedown", function(sym, e) {
         
         
         sym.getComposition().getStage().setShape('2');
         sym.getComposition().getStage().ShowShape("_5_2");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_19Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('19');
         sym.getComposition().getStage().ShowShape("_5_19");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_18Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('18');
         sym.getComposition().getStage().ShowShape("_5_18");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_12Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('12');
         sym.getComposition().getStage().ShowShape("_5_12");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_11Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('11');
         sym.getComposition().getStage().ShowShape("_5_11");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_10Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('10');
         sym.getComposition().getStage().ShowShape("_5_10");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_1Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('1');
         sym.getComposition().getStage().ShowShape("_5_1");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_25Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('25');
         sym.getComposition().getStage().ShowShape("_5_25");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_20Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('20');
         sym.getComposition().getStage().ShowShape("_5_20");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_37Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('37');
         sym.getComposition().getStage().ShowShape("_5_37");
         sym.getComposition().getStage().setFlickOn();
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_17Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('17');
         sym.getComposition().getStage().ShowShape("_5_17");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_16Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('16');
         sym.getComposition().getStage().ShowShape("_5_16");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_15Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('15');
         sym.getComposition().getStage().ShowShape("_5_15");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_13Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('13');
         sym.getComposition().getStage().ShowShape("_5_13");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__5_14Copy}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().setShape('14');
         sym.getComposition().getStage().ShowShape("_5_14");
         sym.getComposition().getStage().setFlickOn();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }
         

      });
      //Edge binding end

   })("Ani_5");
   //Edge symbol end:'Ani_5'

   //=========================================================
   
   //Edge symbol: 'repaly_sym'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("repaly_sym");
   //Edge symbol end:'repaly_sym'

   //=========================================================
   
   //Edge symbol: 'more_sym'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("more_sym");
   //Edge symbol end:'more_sym'

})(jQuery, AdobeEdge, "EDGE-5709268985");