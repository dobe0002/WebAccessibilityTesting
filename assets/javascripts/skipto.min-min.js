/*@cc_on @*/
!function(){"undefined"==typeof document||"classList"in document.createElement("a")||function(e){"use strict";if("HTMLElement"in e||"Element"in e){var t="classList",n="prototype",i=(e.HTMLElement||e.Element)[n],o=Object,r=String[n].trim||function(){return this.replace(/^\s+|\s+$/g,"")},a=Array[n].indexOf||function(e){for(var t=0,n=this.length;n>t;t++)if(t in this&&this[t]===e)return t;return-1},s=function(e,t){this.name=e,this.code=DOMException[e],this.message=t},l=function(e,t){if(""===t)throw new s("SYNTAX_ERR","An invalid or illegal string was specified");if(/\s/.test(t))throw new s("INVALID_CHARACTER_ERR","String contains an invalid character");return a.call(e,t)},d=function(e){for(var t=r.call(e.className),n=t?t.split(/\s+/):[],i=0,o=n.length;o>i;i++)this.push(n[i]);this._updateClassName=function(){e.className=this.toString()}},u=d[n]=[],p=function(){return new d(this)};if(s[n]=Error[n],u.item=function(e){return this[e]||null},u.contains=function(e){return e+="",-1!==l(this,e)},u.add=function(){var e,t=arguments,n=0,i=t.length,o=!1;do{e=t[n]+"",-1===l(this,e)&&(this.push(e),o=!0)}while(++n<i);o&&this._updateClassName()},u.remove=function(){var e,t=arguments,n=0,i=t.length,o=!1;do{e=t[n]+"";var r=l(this,e);-1!==r&&(this.splice(r,1),o=!0)}while(++n<i);o&&this._updateClassName()},u.toggle=function(e,t){e+="";var n=this.contains(e),i=n?!0!==t&&"remove":!1!==t&&"add";return i&&this[i](e),!n},u.toString=function(){return this.join(" ")},o.defineProperty){var c={get:p,enumerable:!0,configurable:!0};try{o.defineProperty(i,"classList",c)}catch(e){-2146823252===e.number&&(c.enumerable=!1,o.defineProperty(i,"classList",c))}}else o[n].__defineGetter__&&i.__defineGetter__("classList",p)}}(self),Window.prototype.addEventListener||(HTMLDocument.prototype.addEventListener=Element.prototype.addEventListener=Window.prototype.addEventListener=function(e,t,n){var i="on"+e;if(n)throw new Error("This implementation of addEventListener does not support the capture phase");var o=this;this.attachEvent(i,function(e){Object.defineProperty(e,"currentTarget",{get:function(){return o}}),Object.defineProperty(e,"eventPhase",{get:function(){return e.srcElement==o?2:3}});var n=new Date;Object.defineProperty(e,"timeStamp",{get:function(){return n}}),"function"==typeof t&&t.call(o,e)})},Object.defineProperty(Event.prototype,"target",{get:function(){return this.srcElement}}),Event.prototype.stopPropagation=function(){this.cancelBubble=!0},Event.prototype.preventDefault=function(){this.returnValue=!1}),document.getElementsByClassName||(document.getElementsByClassName=function(e){return e=String(e).replace(/^|\s+/g,"."),document.querySelectorAll(e)},Element.prototype.getElementsByClassName=document.getElementsByClassName),Array.prototype.indexOf||(Array.prototype.indexOf=function(e){if(null==this)throw new TypeError;var t=Object(this),n=t.length>>>0;if(0===n)return-1;var i=0;if(arguments.length>1&&(i=Number(arguments[1]),i!=i?i=0:0!=i&&i!=1/0&&i!=-1/0&&(i=(i>0||-1)*Math.floor(Math.abs(i)))),i>=n)return-1;for(var o=i>=0?i:Math.max(n-Math.abs(i),0);n>o;o++)if(o in t&&t[o]===e)return o;return-1})}(),function(){"use strict";var e={};e.prototype={btn:null,prt:null,menu:null,wrap:"false",clearMenus:function(){var e=this;setTimeout(function(){e.prt.classList.contains("open")&&!e.prt.contains(document.activeElement)&&(e.prt.classList.remove("open"),e.btn.setAttribute("aria-expanded","false"))},150)},toggleOptList:function(e){this.btn=e.target,this.prt=this.btn.parentNode,this.menu=document.getElementById(this.btn.getAttribute("data-target")),void 0!==this.btn.getAttribute("data-wrap")&&(this.wrap=this.btn.getAttribute("data-wrap")),this.prt.classList.toggle("open"),this.prt.classList.contains("open")?this.btn.setAttribute("aria-expanded","true"):this.btn.setAttribute("aria-expanded","false");try{this.menu.getElementsByTagName("a")[0].focus()}catch(e){}},navigateMenus:function(e){var t=e.keyCode||e.which,n={spacebar:32,up:38,esc:27,down:40},i=this.prt.classList.contains("open"),o=this.menu.getElementsByTagName("a"),r=Array.prototype.indexOf.call(o,e.target);if(/(32|38|40|27)/.test(t)){switch(e.preventDefault(),t){case n.down:r+=1;break;case n.up:r-=1;break;case n.esc:if(i)return this.btn.click(),void this.btn.focus()}0>r&&(r="true"===this.wrap?o.length-1:0),r===o.length&&(r="true"===this.wrap?0:o.length-1),o.item(r).focus()}},init:function(){var e,t,n,i,o,r,a,s,l=document.getElementsByClassName("dropMenu-toggle"),d=this;for(t=0,n=l.length;n>t;t+=1)for(e=l[t],i=document.getElementById(e.getAttribute("data-target")),o=i.getElementsByTagName("a"),e.addEventListener("click",function(e){d.toggleOptList(e)}),e.addEventListener("keydown",function(e){32===(e.keyCode||e.which)&&(this.click(e),e.preventDefault())}),r=0,a=o.length;a>r;r+=1)s=o[r],s.addEventListener("keydown",function(e){d.navigateMenus(e)}),s.addEventListener("blur",function(e){d.clearMenus(e)})}},e.prototype.init(),window.skipToDropDownInit=function(){e.prototype.init()}}(),function(e){"use strict";var t={};t.prototype={headingElementsArr:[],landmarkElementsArr:[],idElementsArr:[],dropdownHTML:null,config:{buttonLabel:"Skip To...",buttonDivTitle:"Skip To Keyboard Navigation",buttonDivRole:"complementary",buttonDivLabel:"",menuLabel:"Skip To and Page Outline",landmarksLabel:"Skip To",headingsLabel:"Page Outline",main:'main, [role="main"]',landmarks:'[role="navigation"], [role="search"]',sections:"nav",headings:"h1, h2, h3",ids:"#SkipToA1, #SkipToA2",accessKey:"",wrap:"false",visibility:"onFocus",customClass:"",attachElement:document.body},setUpConfig:function(e){var t,n=this.config,i=void 0!==e.settings?e.settings.skipTo:{};for(t in i)n.hasOwnProperty(t)&&(n[t]=i[t])},init:function(e){if(this.setUpConfig(e),null!==document.getElementById("skipToMenu")){var t=document.getElementById("skipToMenu");t.parentNode.removeChild(t)}var n=document.createElement("div"),i=this.config.attachElement.nodeType?this.config.attachElement:document.querySelector(this.config.attachElement),o="";n.setAttribute("id","skipToMenu"),""!==this.config.buttonDivRole&&n.setAttribute("role",this.config.buttonDivRole),""!==this.config.buttonDivTitle&&n.setAttribute("title",this.config.buttonDivTitle),""!==this.config.buttonDivLabel&&n.setAttribute("aria-label",this.config.buttonDivLabel),this.addStyles(".skipTo{padding:.5em;position:absolute;background:transparent;color:#000;-webkit-transition:top .5s ease-out,background .5s linear;-moz-transition:top .5s ease-out,background .5s linear;-o-transition:top .5s ease-out,background .5s linear;transition:top .5s ease-out,background .5s linear}.skipTo:focus{position:absolute;top:0;left:0;background:#ccc;z-index:1000;text-decoration:underline;-webkit-transition:top .1s ease-in,background .3s linear;-moz-transition:top .1s ease-in,background .3s linear;-o-transition:top .1s ease-in,background .3s linear;transition:top .1s ease-in,background .3s linear}.onFocus{top:-5em;left:0}.onLoad{top:0;left:0;background:#ccc}.dropup,.dropMenu{position:relative}.dropMenu-toggle{*margin-bottom:-3px}.dropMenu-toggle:active,.open .dropMenu-toggle{outline:0}#skipToMenu .caret{display:inline-block;width:0;height:0;vertical-align:top;border-top:4px solid #000;border-right:4px solid transparent;border-left:4px solid transparent;content:'';pointer-events:none}#skipToMenu .dropMenu .caret{margin-top:8px;margin-left:2px}.dropMenu-menu{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:160px;padding:5px 0;margin:2px 0 0;list-style:none;background-color:#fff;border:1px solid #ccc;border:1px solid rgba(0,0,0,0.2);*border-right-width:2px;*border-bottom-width:2px;-webkit-border-radius:6px;-moz-border-radius:6px;border-radius:6px;-webkit-box-shadow:0 5px 10px rgba(0,0,0,0.2);-moz-box-shadow:0 5px 10px rgba(0,0,0,0.2);box-shadow:0 5px 10px rgba(0,0,0,0.2);-webkit-background-clip:padding-box;-moz-background-clip:padding;background-clip:padding-box}.dropMenu-menu.pull-right{right:0;left:auto}.dropMenu-menu .divider{*width:100%;height:1px;margin:9px 1px;*margin:-5px 0 5px;overflow:hidden;background-color:#e5e5e5;border-bottom:1px solid #fff}.dropMenu-menu>li>a{display:block;padding:3px 20px;clear:both;font-weight:normal;line-height:20px;color:#333;white-space:nowrap;text-decoration:none}.dropMenu-menu>li>a.po-h1{font-size:110%}.dropMenu-menu>li>a.po-h2{padding-left:28px}.dropMenu-menu>li>a.po-h3{padding-left:36px}.dropMenu-menu>li>a.po-h4{padding-left:44px}.dropMenu-menu>li>a.po-h5{padding-left:52px}.dropMenu-menu>li>a.po-6{padding-left:60px}.dropMenu-menu>li[role=separator]{padding-left:20px;margin-top:9px;font-weight:bold;border-bottom:thin solid black}.dropMenu-menu>li>a:hover,.dropMenu-menu>li>a:focus,.dropMenu-submenu:hover>a,.dropMenu-submenu:focus>a{text-decoration:none;color:#fff;background-color:#0081c2;background-image:-moz-linear-gradient(top,#08c,#0077b3);background-image:-webkit-gradient(linear,0 0,0 100%,from(#08c),to(#0077b3));background-image:-webkit-linear-gradient(top,#08c,#0077b3);background-image:-o-linear-gradient(top,#08c,#0077b3);background-image:linear-gradient(to bottom,#08c,#0077b3);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff0088cc',endColorstr='#ff0077b3',GradientType=0)}.dropMenu-menu>.active>a,.dropMenu-menu>.active>a:hover,.dropMenu-menu>.active>a:focus{color:#fff;text-decoration:none;outline:0;background-color:#0081c2;background-image:-moz-linear-gradient(top,#08c,#0077b3);background-image:-webkit-gradient(linear,0 0,0 100%,from(#08c),to(#0077b3));background-image:-webkit-linear-gradient(top,#08c,#0077b3);background-image:-o-linear-gradient(top,#08c,#0077b3);background-image:linear-gradient(to bottom,#08c,#0077b3);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff0088cc',endColorstr='#ff0077b3',GradientType=0)}.dropMenu-menu>.disabled>a,.dropMenu-menu>.disabled>a:hover,.dropMenu-menu>.disabled>a:focus{color:#999}.dropMenu-menu>.disabled>a:hover,.dropMenu-menu>.disabled>a:focus{text-decoration:none;background-color:transparent;background-image:none;filter:progid:DXImageTransform.Microsoft.gradient(enabled = false);cursor:default}.open{*z-index:1000}.open>.dropMenu-menu{display:block}.pull-right>.dropMenu-menu{right:0;left:auto}#skipToMenu .dropup .caret,#skipToMenu .navbar-fixed-bottom .dropMenu .caret{border-top:0;border-bottom:4px solid #000;content:''}#skipToMenu .dropup .dropMenu-menu,#skipToMenu .navbar-fixed-bottom .dropMenu .dropMenu-menu{top:auto;bottom:100%;margin-bottom:1px}.dropMenu-submenu{position:relative}.dropMenu-submenu>.dropMenu-menu{top:0;left:100%;margin-top:-6px;margin-left:-1px;-webkit-border-radius:0 6px 6px 6px;-moz-border-radius:0 6px 6px 6px;border-radius:0 6px 6px 6px}.dropMenu-submenu:hover>.dropMenu-menu{display:block}.dropup .dropMenu-submenu>.dropMenu-menu{top:auto;bottom:0;margin-top:0;margin-bottom:-2px;-webkit-border-radius:5px 5px 5px 0;-moz-border-radius:5px 5px 5px 0;border-radius:5px 5px 5px 0}.dropMenu-submenu>a:after{display:block;content:' ';float:right;width:0;height:0;border-color:transparent;border-style:solid;border-width:5px 0 5px 5px;border-left-color:#ccc;margin-top:5px;margin-right:-10px}.dropMenu-submenu:hover>a:after{border-left-color:#fff}.dropMenu-submenu.pull-left{float:none}.dropMenu-submenu.pull-left>.dropMenu-menu{left:-100%;margin-left:10px;-webkit-border-radius:6px 0 6px 6px;-moz-border-radius:6px 0 6px 6px;border-radius:6px 0 6px 6px}.dropMenu .dropMenu-menu .nav-header{padding-left:20px;padding-right:20px}"),this.dropdownHTML='<button   data-wrap="'+this.config.wrap+'"class="dropMenu-toggle skipTo '+this.config.visibility+" "+this.config.customClass+'" id="drop4"  aria-haspopup="true" ',""!==this.config.accessKey&&(this.dropdownHTML+='accesskey="'+this.config.accessKey+'" '),this.dropdownHTML+='aria-expanded="false" data-toggle="dropMenu"  data-target="menu1">'+this.config.buttonLabel+'<span class="caret"></span></button>',this.dropdownHTML+='<ul id="menu1" class="dropMenu-menu" role="menu" aria-label="'+this.config.menuLabel+'" style="top:3%; text-align:left">',this.getLandMarks(this.config.main),this.getLandMarks(this.config.landmarks),this.getSections(this.config.sections),this.getIdElements(),this.getHeadings(),o=this.getdropdownHTML(),this.dropdownHTML+=o+"</ul>",o.length>0&&(n.className="dropMenu",i.insertBefore(n,i.firstChild),n.innerHTML=this.dropdownHTML,this.addListeners()),window.skipToDropDownInit()},normalizeName:function(e){return"string"==typeof e?e.replace(/\w\S*/g,function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()}):""},getTextContent:function(e){function t(e,n){if(3===e.nodeType)n.push(e.data);else if(1===e.nodeType){var i=e.tagName.toLowerCase();if("img"===i||"area"===i)e.alt&&n.push(e.alt);else for(var o=e.firstChild;o;)t(o,n),o=o.nextSibling}}var n="Test",i=[];return t(e,i),i.length&&(n=i.join(" ")),n.length>30&&(n=n.substring(0,27)+"..."),n},getAccessibleName:function(e){var t=e.getAttribute("aria-labelledby"),n=e.getAttribute("aria-label"),i=e.getAttribute("title"),o="";if(t&&t.length){var r,a=[],s=t.split(" ");s.length||(s=[t]);for(var l=0,d=s.length;d>l;l+=1){var u=document.getElementById(s[l]);u&&(r=this.getTextContent(u)),r.length&&a.push(r)}o=a.join(" ")}else n&&n.length?o=n:i&&i.length&&(o=i);return o},getHeadings:function(){var e=this.config.headings;if("string"==typeof e&&0!==e.length){var t,n,i,o,r,a=document.querySelectorAll(e);for(t=0,n=a.length;n>t;t+=1)i=a[t],("string"!=typeof(o=i.getAttribute("role"))||"presentation"!==o)&&this.isVisible(i)&&(r=i.getAttribute("id")||i.innerHTML.replace(/\s+/g,"_").toLowerCase().replace(/[&\/\\#,+()$~%.'"!:*?<>{}¹]/g,"")+"_"+t,i.tabIndex="-1",i.setAttribute("id",r),this.headingElementsArr[r]={id:r,name:i.tagName.toLowerCase()+": "+this.getTextContent(i)})}},isVisible:function(e){function t(e){if(9===e.nodeType)return!0;var n=document.defaultView?document.defaultView.getComputedStyle(e,null).getPropertyValue("display"):e.currentStyle.display,i=document.defaultView?document.defaultView.getComputedStyle(e,null).getPropertyValue("visibility"):e.currentStyle.visibility,o=e.getAttribute("hidden"),r=e.getAttribute("aria-hidden"),a=e.getBoundingClientRect();return!("none"===n||"hidden"===i||null!==o||"true"===r||a.height<4||a.width<4)&&t(e.parentNode)}return t(e)},getSections:function(e){if("string"==typeof e&&0!==e.length){var t,n,i,o,r,a,s,l=document.querySelectorAll(e);for(t=0,n=l.length;n>t;t+=1)i=l[t],("string"!=typeof(r=i.getAttribute(r))||"presentation"!==r)&&this.isVisible(i)&&(o=i.getAttribute("id")||"ui-skip-"+Math.floor(100*Math.random()+1),i.tabIndex="-1",i.setAttribute("id",o),r=i.tagName.toLowerCase(),a=this.normalizeName(r),s=this.getAccessibleName(i),s&&s.length?a+=": "+s:"main"===r&&(a+=" Content"),this.landmarkElementsArr[o]=a)}},getLandMarks:function(e){if("string"==typeof e&&0!==e.length){var t,n,i,o,r,a,s,l=document.querySelectorAll(e);for(t=0,n=l.length;n>t;t+=1)i=l[t],("string"!=typeof(r=i.getAttribute("role"))||"presentation"!==r)&&this.isVisible(i)&&(o=i.getAttribute("id")||"ui-skip-"+Math.floor(100*Math.random()+1),i.tabIndex="-1",i.setAttribute("id",o),r||(r=i.tagName.toLowerCase()),a=this.getAccessibleName(i),"banner"===r&&(r="header"),"contentinfo"===r&&(r="footer"),"navigation"===r&&(r="nav"),s=this.normalizeName(r),a&&a.length?s+=": "+a:"main"===r&&(s+=" Content"),this.landmarkElementsArr[o]=s)}},getIdElements:function(){var e,t,n,i,o,r=document.querySelectorAll(this.config.ids);for(e=0,t=r.length;t>e;e+=1)n=r[e],i=n.getAttribute("id"),o=n.innerHTML.replace(/<\/?[^>]+>/gi,"").replace(/\s+/g," ").replace(/^\s+|\s+$/g,""),o.length>30&&(o=o.replace(o,o.substr(0,30)+"...")),this.idElementsArr[i]="id: "+o},getdropdownHTML:function(){var e,t,n="",i=!0,o=!0,r="";for(e in this.landmarkElementsArr)this.landmarkElementsArr.hasOwnProperty(e)&&(i&&(n+='<li role="separator" style="list-style:none outside none">'+this.config.landmarksLabel+"</li>",i=!1),t=this.landmarkElementsArr[e],n+='<li role="presentation" style="list-style:none outside none"><a tabindex="-1" role="menuitem" href="#',n+=e+'">'+t,n+="</a></li>");for(e in this.idElementsArr)this.idElementsArr.hasOwnProperty(e)&&(i&&(n+='<li role="separator" style="list-style:none outside none">'+this.config.landmarksLabel+"</li>",i=!1),t=this.idElementsArr[e],n+='<li role="presentation" style="list-style:none outside none"><a tabindex="-1" role="menuitem" href="#',n+=e+'">'+t,n+="</a></li>");for(e in this.headingElementsArr)this.headingElementsArr[e].name&&(o&&(n+='<li role="separator" style="list-style:none outside none">'+this.config.headingsLabel+"</li>",o=!1),t=this.headingElementsArr[e].name,r=t.substring(0,2),n+='<li role="presentation" style="list-style:none outside none"><a class="po-'+r+'" tabindex="-1" role="menuitem" href="#',n+=e+'">'+t,n+="</a></li>");return n},addStyles:function(e){var t,n=document.createElement("style"),i=document.getElementsByTagName("head")[0];n.setAttribute("type","text/css"),i.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:(t=document.createTextNode(e),n.appendChild(t))},addListeners:function(){window.addEventListener("hashchange",function(){var e=document.getElementById(location.hash.substring(1));e&&(/^(?:a|select|input|button|textarea)$/i.test(e.tagName)||(e.tabIndex=-1),e.focus(),e.scrollIntoView(!0))},!1)}},t.prototype.init(e),window.skipToMenuInit=function(){t.prototype.init(window.Drupal||window.Wordpress||window.SkipToConfig||{})}}(window.Drupal||window.Wordpress||window.SkipToConfig||{});