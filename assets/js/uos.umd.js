!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):e.uos=n()}(this,function(){var e=[];function n(){for(var n,t,o=e.length;o--;)t=(n=e[o])[1]<=1?(pageYOffset/(document.body.scrollHeight-innerHeight)-n[0])/(n[1]-n[0]):(pageYOffset-n[0])/(n[1]-n[0]),n[2](t<0?0:t>1?1:t)}return function(t,o,f,i){return(i=e.push([t,o,f]))>1||addEventListener("scroll",n),function(t){e.splice(i-1,1),t&&removeEventListener("scroll",n)}}});
