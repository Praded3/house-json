!function(){var e=document.querySelectorAll("._anim-items");if(e.length>0){function t(t){for(var n=0;n<e.length;n++){var i=e[n],o=i.offsetHeight,s=(d=i,a=void 0,l=void 0,f=void 0,a=d.getBoundingClientRect(),l=window.pageXOffset||document.documentElement.scrollLeft,f=window.pageYOffset||document.documentElement.scrollTop,{top:a.top+f,left:a.left+l}).top,c=window.innerHeight-o/4;o>window.innerHeight&&(c=window.innerHeight-window.innerHeight/4),pageYOffset>s-c&&pageYOffset<s+o?i.classList.add("_active"):(i.classList.remove("_active"),i.classList.contains("_anim-no-hide")||i.classList.remove("_active"))}var d,a,l,f}window.addEventListener("scroll",t),setTimeout((function(){t()}),300)}}();
//# sourceMappingURL=index.35928549.js.map