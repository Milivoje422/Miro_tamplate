
  // Open navbar 
  $( '.nav-bar-mobile-btn' ).click(function() {
    $('.nav-bar-mobile').css('display','table');

      $('.nav-bar-mobile li').each(function(index) {
          setTimeout(function(el) {
              el.fadeIn(550);
          }, index * 150, $(this));
      });

  });

  function closeNavBar(){
    $('.nav-bar-mobile').fadeOut();
    $('.nav-bar-mobile li').fadeOut();
  }

  $(document).ready(function(){
    function doOnOrientationChange()
        {
          switch(window.orientation) 
          {  
            case -90:                 
                   document.getElementById("landscape").style.display="block";
                   break;
            case 90:              
                  document.getElementById("landscape").style.display="block";                 
                  break;
           default:                   
                  document.getElementById("landscape").style.display="none";
                  break;                            
          }
        }
        //Listen to orientation change
        window.addEventListener('orientationchange', doOnOrientationChange);  
   });

$(window).load(function(){
  $('.perload-background').fadeOut(500);
});


 // window.onload = new function() { $('.perload-background').fadeOut(500); };

 var BrowserDetect = {
      init: function() {
          this.browser = this.searchString(this.dataBrowser) || "Other", this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "Unknown"
      },
      searchString: function(e) {
          for (var a = 0; a < e.length; a++) {
              var t = e[a].string;
              if (this.versionSearchString = e[a].subString, -1 !== t.indexOf(e[a].subString)) return e[a].identity
          }
      },
      searchVersion: function(e) {
          var a = e.indexOf(this.versionSearchString);
          if (-1 !== a) {
              var t = e.indexOf("rv:");
              return parseFloat(e.substring("Trident" === this.versionSearchString && -1 !== t ? t + 3 : a + this.versionSearchString.length + 1))
          }
      },
      dataBrowser: [{
          string: navigator.userAgent,
          subString: "Edge",
          identity: "MS Edge"
      }, {
          string: navigator.userAgent,
          subString: "Chrome",
          identity: "Chrome"
      }, {
          string: navigator.userAgent,
          subString: "MSIE",
          identity: "Explorer"
      }, {
          string: navigator.userAgent,
          subString: "Trident",
          identity: "Explorer"
      }, {
          string: navigator.userAgent,
          subString: "Firefox",
          identity: "Firefox"
      }, {
          string: navigator.userAgent,
          subString: "Safari",
          identity: "Safari"
      }, {
          string: navigator.userAgent,
          subString: "Opera",
          identity: "Opera"
      }]
  };


function workList() {
  0 == $(".archive-btn.selected").length && 1 == $(".archive-btn.visible").length && ($(window).width() > 1280 ? (
    $(".works-list > li:lt(15)").removeClass("archived-works").addClass("recent-works visible").show(),
    $(".works-list li").slice(15).removeClass("recent-works visible").addClass("archived-works").hide()
  ) :
    $(window).width() > 1024 ? (
      $(".works-list > li:lt(14)").removeClass("archived-works").addClass("recent-works visible").show(),
      $(".works-list li").slice(14).removeClass("recent-works visible").addClass("archived-works").hide()
    ) :
    $(window).width() > 960 ? (
      $(".works-list > li:lt(11)").removeClass("archived-works").addClass("recent-works visible").show(),
      $(".works-list li").slice(11).removeClass("recent-works visible").addClass("archived-works").hide()
    ) :
      ($(".works-list > li:lt(5)").removeClass("archived-works").addClass("recent-works visible").show(),
      $(".works-list li").slice(11).removeClass("recent-works visible").addClass("archived-works").hide()),
      $(".archive-btn").addClass("visible"))
};
 var content;
  function loadContent(content){
   var postData;
    $.ajax({
      'type': 'POST',
      'url': content,
      'data': postData,
      'success': function(response){
        $(".main-content").html(function() {
            return $(response).hide(500).fadeIn(1000);
        });
       },
       'error': function(jqXHR, textStatus, errorThrown){
         console.log('Error on saving appointment:', jqXHR, textStatus, errorThrown);    
       }
    });
  };

  function portfolioLoadFun(content){
   var postData;
     $.ajax({
      'type': 'POST',
      'url': content,
      'data': postData,
      'success': function(response){
        $(".main-content").html(function() {
            return $(response).hide(500).show();
        });
       },
       'error': function(jqXHR, textStatus, errorThrown){
         console.log('Error on saving appointment:', jqXHR, textStatus, errorThrown);    
       }
    });
  };

  function resizeElements() {
            workList();
  };

  function showElements(e, archiveBtn, s) {

    var a = $(e).hide().removeClass("visible");
      $(".archive-btn.visible").css("opacity", "0").removeClass("visible");

      var t = 0;
      animation = 1,
      function s() {
        a.eq(t++).stop(!0, !0).fadeIn(100, function() {
          0 != animation && ($(this).addClass("visible"),
          t === $(e).length + 1 && (animation = 0),
          "#works .work-open .thumb img" === e && resizeElements(),
          "#works .recent-works" === e && (t == $(e).length - 1 && $(".archive-btn").css("opacity", "1").addClass("visible"),
          1 == t && resizeElements(), 14 == t && workList()),
          "#works .archived-works" === e && ($(this).addClass("recent-works"),
          4 == t && 0 == $("body.mobile").length && $("#works").animate({
            scrollTop: $(".works-list").height() + $(".work-open").height()
        }, 1500)), "#the-lab a" === e && (
          $(this).css("opacity", 1), t == $(e).length && $("body").hasClass("desktop") && $("#video_lab").get(0).pause()),
          "#about .about-item" === e && $(this).find("p").addClass("visible"),
          s())
        })
      }();
      var t = 0;
  };

$('.closed-btn').click(function(){
  closeNavBar();
});



  $('.link-contact').on('click',function(){
    loadContent('contactCopy.html');
    closeNavBar();
  });

  $('.link-home').on('click',function(){
    loadContent('mainContent.html');
    closeNavBar();
  });

  $('.link-portfolio').on('click',function(){
    $('section.view').css('display', 'block');
    portfolioLoadFun('portfolioLoad.html');
    closeNavBar();
  });



  
    $('#link-contact').on('click',function(){
    loadContent('contactCopy.html');
  });

  $('#portfolio-link').on('click',function(){
    $('section.view').css('display', 'block');
    portfolioLoadFun('portfolioLoad.html');
  });


  // Opera 8.0+
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

// Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined';

// Safari 3.0+ "[object HTMLElementConstructor]" 
var isSafari = /constructor/i.test(window.HTMLElement) || 
(function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);

// Internet Explorer 6-11
var isIE = /*@cc_on!@*/false || !!document.documentMode;

// Edge 20+
var isEdge = !isIE && !!window.StyleMedia;

// Chrome 1+
var isChrome = !!window.chrome && !!window.chrome.webstore;

// Blink engine detection
var isBlink = (isChrome || isOpera) && !!window.CSS;

console.log("Opera = "+isOpera, "FireFox = "+isFirefox, "Safari = "+isSafari, "Explorer = "+isIE, "Edge = "+isEdge, "Chrome = "+isChrome, "Blink = "+isBlink);



var my_video = videojs('video-js');
// my_video.on('pause', function(){
//       checkPausePlay();
//       console.log('Posed... ');
//     });
//     my_video.on('play', function(e){

//         // e.preventDefault();
//         // $('.vjs-fullscreen-control').click();

//         // checkPausePlay();

//     });
//     my_video.on('seeked', function(){
//         console.log("2");
//     });
//     my_video.on('ended', function(){
//         console.log("End...");
//     });
 

   // my_video.on("touchstart click", function(event){
   //  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
   //          // alert("Only for phones");
   //        event.preventDefault();
   //        this.requestFullscreen();    
   //      }else{
              
   //      }

   //  });

   // function setFull(){
   //    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
   //        // alert("Only for phones");
   //      event.preventDefault();
   //      this.requestFullscreen();    
   //    }else{
            
   //    }
   // }

   // var clickEventType=((document.ontouchstart!==null) ? 'click':'touchstart');
   //  my_video.on(clickEventType, setFull);

my_video.on('click', function (e) {
    e.stopPropagation(); e.preventDefault();
    console.log('ttttt');

});

  // var checkPausePlay = function() {
//       var isPaused = my_video.paused();
//       var time_video = my_video.currentTime();
//       if(isPaused === true) {
//           console.log("1");
//       } else {
        
//       }
//   };


// function toggleFullScreen(video) {
//   if (!video.fullscreenElement &&    // alternative standard method
//       !video.mozFullScreenElement && !video.webkitFullscreenElement && !video.msFullscreenElement ) {  // current working methods
//     if (video.documentElement.requestFullscreen) {
//       video.documentElement.requestFullscreen();
//     } else if (video.documentElement.msRequestFullscreen) {
//       video.documentElement.msRequestFullscreen();
//     } else if (video.documentElement.mozRequestFullScreen) {
//       video.documentElement.mozRequestFullScreen();
//     } else if (video.documentElement.webkitRequestFullscreen) {
//       video.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
//     }
//   } else {
//     if (video.exitFullscreen) {
//       video.exitFullscreen();
//     } else if (video.msExitFullscreen) {
//       video.msExitFullscreen();
//     } else if (video.mozCancelFullScreen) {
//       video.mozCancelFullScreen();
//     } else if (video.webkitExitFullscreen) {
//       video.webkitExitFullscreen();
//     }
//   }
// }

// toggleFullScreen();
 

