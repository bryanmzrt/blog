(function printMsg() {
    var _0x6a32x8 = document["getElementById"]("credits");
    _0x6a32x8["innerHTML"] = "Template Created by <a href=\'https://www.kompiajaib.com/\' target=\'_blank\' title=\'Kompi Ajaib\'>Kompi Ajaib</a> Proudly powered by <a href=\'https://www.blogger.com\' target=\'_blank\' title=\'Blogger\'>Blogger</a>";
})();
var button=document.querySelector("#nav-icon");button.addEventListener("click",function(){var t=document.querySelector(button.getAttribute("data-target"));t.style.display="block"==t.style.display?"none":"block"});
for(var imgEl=document.getElementsByTagName("img"),i=0;i<imgEl.length;i++)imgEl[i].getAttribute("src")&&(imgEl[i].setAttribute("data-src",imgEl[i].getAttribute("src")),imgEl[i].removeAttribute("src"),imgEl[i].setAttribute("src","data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="));console.log(document.body.innerHTML);
var imgDefer=document.getElementsByTagName("img");for(var i=0;i<imgDefer.length;i++){if(imgDefer[i].getAttribute("data-src")){imgDefer[i].setAttribute("src",imgDefer[i].getAttribute("data-src"))}};
!function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://apis.google.com/js/plusone.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}();
function toggleSearchBox(e){var t=document.getElementById(e),h="52px";t.style.height==h?t.style.height="0px":t.style.height=h};
var jump=function(o){if(o)var t=jQuery(this).attr("href").replace("/","");else var t=location.hash;jQuery("html,body").animate({scrollTop:jQuery(t).offset().top-80},4e3,function(){})};jQuery(document).ready(function(o){o(document).on("click","a[href*=#]",jump),location.hash?setTimeout(function(){o("html, body").scrollTop(0).show(),jump()},0):o("html, body").show()});
