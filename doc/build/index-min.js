/*! kcopy - v2.0.0 - 2013-10-04 8:39:18 PM
* Copyright (c) 2013 Letao; Licensed  */
KISSY.add("kg/kcopy/2.0.0/index",function(a,b,c){function d(b,c){var e=this;return b&&(d.prototype._singleton||e).glue(a.one(b)),d.prototype._singleton?d.prototype._singleton:(d.prototype._singleton=e,e.options={},e.options=a.merge(e.options,m,c),this.handlers={},d.detectFlashSupport()&&p(),d.superclass.constructor.call(e,c),void 0)}b.all;var e=a.Event;a.DOM,!function(){var a=/\-([a-z])/g,b=function(a,b){return b.toUpperCase()};return function(c){return c.replace(a,b)}}();var f,g=function(){var b,c,d,e=1;return"function"==typeof document.body.getBoundingClientRect&&(b=document.body.getBoundingClientRect(),c=b.right-b.left,d=a.one("body").outerWidth(),e=Math.round(2.0.0*(c/d))/2.0.0),e},h=function(b){var c={left:0,top:0,width:0,height:0,zIndex:999999999},d=a.one(b);b=b[0];var e=a.one(document),f=d.css("zIndex");if(f&&"auto"!==f&&(c.zIndex=parseInt(f,10)),b.getBoundingClientRect){var h,i,j,k=b.getBoundingClientRect();"pageXOffset"in window&&"pageYOffset"in window?(h=window.pageXOffset,i=window.pageYOffset):(j=g(),h=Math.round(e.scrollLeft()/j),i=Math.round(e.scrollTop()/j));var l=document.documentElement.clientLeft||0,m=document.documentElement.clientTop||0;c.left=k.left+h-l,c.top=k.top+i-m,c.width="width"in k?k.width:k.right-k.left,c.height="height"in k?k.height:k.bottom-k.top}return c},i=function(a,b){var c=!(b&&b.useNoCache===!1);return c?(-1===a.indexOf("?")?"?":"&")+"nocache="+(new Date).getTime():""},j=function(a){var b=[],c=[];return a.trustedOrigins&&("string"==typeof a.trustedOrigins?c=c.push(a.trustedOrigins):"object"==typeof a.trustedOrigins&&"length"in a.trustedOrigins&&(c=c.concat(a.trustedOrigins))),a.trustedDomains&&("string"==typeof a.trustedDomains?c=c.push(a.trustedDomains):"object"==typeof a.trustedDomains&&"length"in a.trustedDomains&&(c=c.concat(a.trustedDomains))),c.length&&b.push("trustedOrigins="+encodeURIComponent(c.join(","))),"string"==typeof a.amdModuleId&&a.amdModuleId&&b.push("amdModuleId="+encodeURIComponent(a.amdModuleId)),"string"==typeof a.cjsModuleId&&a.cjsModuleId&&b.push("cjsModuleId="+encodeURIComponent(a.cjsModuleId)),b.join("&")},k=function(a){if("string"==typeof a)throw new TypeError("Kcopy doesn't accept query strings.");return a.length?a:[a]},l=function(a,b,c,d,e){e?setTimeout(function(){a.call(b,c,d)},0):a.call(b,c,d)},m={moviePath:"ZeroClipboard.swf",trustedOrigins:null,text:null,hoverClass:"kcopy-is-hover",activeClass:"kcopy-is-active",allowScriptAccess:"sameDomain",useNoCache:!0,forceHandCursor:!1},n=null,o=null,p=function(){var b=d.prototype._singleton,c=a.one("#global-kcopy-html-bridge");if(!c){var e={};e=a.merge(e,b.options),e.amdModuleId=n,e.cjsModuleId=o;var f=j(e),g='      <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="global-kcopy-flash-bridge" width="2.0.0%" height="2.0.0%">         <param name="movie" value="'+b.options.moviePath+i(b.options.moviePath,b.options)+'"/>         <param name="allowScriptAccess" value="'+b.options.allowScriptAccess+'"/>         <param name="scale" value="exactfit"/>         <param name="loop" value="false"/>         <param name="menu" value="false"/>         <param name="quality" value="best" />         <param name="bgcolor" value="#ffffff"/>         <param name="wmode" value="transparent"/>         <param name="flashvars" value="'+f+'"/>         <embed src="'+b.options.moviePath+i(b.options.moviePath,b.options)+'"           loop="false" menu="false"           quality="best" bgcolor="#ffffff"           width="2.0.0%" height="2.0.0%"           name="global-kcopy-flash-bridge"           allowScriptAccess="always"           allowFullScreen="false"           type="application/x-shockwave-flash"           wmode="transparent"           pluginspage="http://www.macromedia.com/go/getflashplayer"           flashvars="'+f+'"           scale="exactfit">         </embed>       </object>';c=a.one("<div>"),c.attr("id","global-kcopy-html-bridge"),c.attr("class","global-kcopy-container"),c.attr("data-clipboard-ready",!1),c.css({position:"absolute",left:"-9999px",top:"-9999px",width:"15px",height:"15px",zIndex:"9999"}),c.html(g),a.one("body").append(c)}b.htmlBridge=c[0],b.flashBridge=document["global-kcopy-flash-bridge"]||c.children()[0].lastElementChild},q=function(a){if(d.prototype._singleton){a||(a=window.event);var b;this!==window?b=this:a.target?b=a.target:a.srcElement&&(b=a.srcElement),d.prototype._singleton.setCurrent(b)}},r=function(a){this.ready()&&this.flashBridge.setHandCursor(a)},l=function(a,b,c,d,e){e?setTimeout(function(){a.call(b,c,d)},0):a.call(b,c,d)},s=[];return d.version="2.0.0.0",d.detectFlashSupport=function(){var a=!1;if("function"==typeof ActiveXObject)try{new ActiveXObject("ShockwaveFlash.ShockwaveFlash")&&(a=!0)}catch(b){}return!a&&navigator.mimeTypes["application/x-shockwave-flash"]&&(a=!0),a},d.dispatch=function(a,b){d.prototype._singleton.receiveEvent(a,b)},d.setDefaults=function(b){m=a.merge(m,b)},d.destroy=function(){d.prototype._singleton.unglue(s);var b=d.prototype._singleton.htmlBridge;a.one(b).remove(),delete d.prototype._singleton},a.extend(d,c,{resetBridge:function(){var b=a.one(this.htmlBridge);return b.css({left:"-9999px",top:"-9999px"}),b.removeAttr("title"),b.removeAttr("data-clipboard-text"),a.one(f).removeClass(this.options.activeClass),f=null,this.options.text=null,this},glue:function(b){return elements=k(b),a.each(elements,function(b){-1===a.indexOf(b,s)&&(s.push(b),e.on(b,"mouseover",q))}),this},setCurrent:function(b){b=a.one(b),f=b,this.reposition();var c=b.attr("title");c&&this.setTitle(c);var d=this.options.forceHandCursor===!0||"pointer"===b.css("cursor");return r.call(this,d),this},reposition:function(){if(!f)return!1;var b=h(f),c=a.one(this.htmlBridge);return c.css({top:b.top,left:b.left,width:b.width,height:b.height,zIndex:b.zIndex+1}),this.setSize(b.width,b.height),this},setSize:function(a,b){return this.ready()&&this.flashBridge.setSize(a,b),this},ready:function(){var b=a.one(this.htmlBridge).attr("data-clipboard-ready");return"true"===b||b===!0},setTitle:function(b){return b&&""!==b&&a.one(this.htmlBridge).attr("title",b),this},setText:function(a){return a&&""!==a&&(this.options.text=a,this.ready()&&this.flashBridge.setText(a)),this},on:function(a,b){for(var c=a.toString().split(/\s/g),e=0;e<c.length;e++)a=c[e].toLowerCase().replace(/^on/,""),this.handlers[a]||(this.handlers[a]=b);return this.handlers.noflash&&!d.detectFlashSupport()&&this.receiveEvent("onNoFlash",null),this},off:function(a,b){for(var c=a.toString().split(/\s/g),d=0;d<c.length;d++){a=c[d].toLowerCase().replace(/^on/,"");for(var e in this.handlers)e===a&&this.handlers[e]===b&&delete this.handlers[e]}return this},receiveEvent:function(b,c){b=b.toString().toLowerCase().replace(/^on/,"");var d=a.one(f),e=!0;switch(b){case"load":if(c&&parseFloat(c.flashVersion.replace(",",".").replace(/[^0-9\.]/gi,""))<10)return this.receiveEvent("onWrongFlash",{flashVersion:c.flashVersion}),void 0;a.one(this.htmlBridge).attr("data-clipboard-ready",!0);break;case"mouseover":d.addClass(this.options.hoverClass);break;case"mouseout":d.removeClass(this.options.hoverClass),this.resetBridge();break;case"mousedown":d.addClass(this.options.activeClass);break;case"mouseup":d.removeClass(this.options.activeClass);break;case"datarequested":var g=d.attr("data-clipboard-target"),h=g?a.one("#"+g):null;if(h){var i=h.val()||h.textContent||h.text();i&&this.setText(i)}else{var j=d.attr("data-clipboard-text");j&&this.setText(j)}e=!1;break;case"complete":this.options.text=null}if(this.handlers[b]){var k=this.handlers[b];"string"==typeof k&&"function"==typeof window[k]&&(k=window[k]),"function"==typeof k&&l(k,d,this,c,e)}},unglue:function(b){return b=k(b),a.each(b,function(b){e.detach(b,"mouseover",q);var c=a.indexOf(b,s);-1!=c&&s.splice(c,1)}),this},setHandCursor:function(a){return a="boolean"==typeof a?a:!!a,r.call(this,a),this.options.forceHandCursor=a,this}},{ATTRS:{}}),d.prototype.addEventListener=d.prototype.on,d.prototype.removeEventListener=d.prototype.off,window.ZeroClipboard=d,d},{requires:["node","base"]});