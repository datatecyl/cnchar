(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{534:function(t,e,n){},542:function(t,e,n){"use strict";var o=n(94),i=n(9),s=n(16),c=n(606),a=n(95);o("search",1,(function(t,e,n){return[function(e){var n=s(this),o=null==e?void 0:e[t];return void 0!==o?o.call(e,n):new RegExp(e)[t](String(n))},function(t){var o=n(e,t,this);if(o.done)return o.value;var s=i(t),l=String(this),r=s.lastIndex;c(r,0)||(s.lastIndex=0);var d=a(s,l);return c(s.lastIndex,r)||(s.lastIndex=r),null===d?-1:d.index}]}))},606:function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e}},607:function(t,e,n){var o=n(1),i=n(608);o({target:"Array",proto:!0,forced:i!==[].lastIndexOf},{lastIndexOf:i})},608:function(t,e,n){"use strict";var o=n(18),i=n(41),s=n(10),c=n(43),a=n(17),l=Math.min,r=[].lastIndexOf,d=!!r&&1/[1].lastIndexOf(1,-0)<0,u=c("lastIndexOf"),h=a("indexOf",{ACCESSORS:!0,1:0}),f=d||!u||!h;t.exports=f?function(t){if(d)return r.apply(this,arguments)||0;var e=o(this),n=s(e.length),c=n-1;for(arguments.length>1&&(c=l(c,i(arguments[1]))),c<0&&(c=n+c);c>=0;c--)if(c in e&&e[c]===t)return c||0;return-1}:r},609:function(t,e,n){"use strict";var o=n(534);n.n(o).a},618:function(t,e,n){"use strict";n.r(e);n(139),n(59),n(60);var o=n(71),i=(n(138),n(39),n(542),n(207),n(44),n(38)),s=n(86),c={},a={},l=function(t){return void 0===t};function r(t){return!!c[t]}var d=function(){function t(e){Object(i.a)(this,t),this.name=e,this.listeners=[]}return Object(s.a)(t,[{key:"regist",value:function(t){this.listeners.push(t)}},{key:"emit",value:function(t){this.listeners.forEach((function(e){e(t)}))}}]),t}(),u={EVENT:a,emit:function(t,e){r(t)&&c[t].emit(e)},regist:function t(e,n){var i;if(i=e,"object"!==Object(o.a)(i))r(e)||function(t){l(a[t])&&(c[t]=new d(t),a[t]=t)}(e),c[e].regist(n);else for(var s in e)t(s,e[s])},checkEvent:r,remove:function(t,e){if(!r(t))return console.warn("removeEvent:未找到事件 "+t),!1;if(l(e))return console.error("请传入要移除的listener"),!1;var n=c[t].listeners.indexOf(e);return-1===n?(console.warn("removeEvent:未找到监听函数 "+t),!1):(c[t].listeners.splice(n,1),!0)}};n(198),n(607),n(58),n(200),n(201),n(199),n(57),n(202),n(203);function h(t){var e=t.match(/<script(.|\n)*?>(.|\n)*?<\/script>/g);if(!e)return{html:t,js:""};var n=e.map((function(e){return t=t.replace(e,""),function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"script";return t.substring(t.indexOf(">")+1,t.lastIndexOf("</"+e+">")).trim()}(e)})).join("\n").trim();return n&&(n="//@ sourceURL=jsbox_run.js \n"+n),{html:t,js:n}}function f(t,e,n){if("/"===t[t.length-1]&&(t=t.substr(0,t.length-1)),void 0!==e){if(""!==t){var o=new RegExp("(^|&)"+e+"=([^&]*?)(&|$)","i"),i=t.substr(1).match(o);if(null!=i)return unescape(i[2])}return void 0!==n?n:null}if(""===t)return{};var s=t.substr(1).split("&"),c={};return s.forEach((function(t){var e=t.split("=");c[e[0]]=e[1]})),c}var v=null;function p(){return-1!==window.location.host.indexOf("localhost")?"https://theajack.gitee.io/jsbox?theme=dark&remind=false":"".concat(window.location.protocol,"//").concat(window.location.host,"/jsbox?theme=dark&remind=false")}var m=function(){if(null!==v)return v;var t,e;t=console.log,console.log=function(){for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];u.emit("onlog",n),t.apply(void 0,n)},(e=document.createElement("style")).innerText="\n    .jsbox-mask{\n        position: fixed;\n        z-index: 1000;\n        left: 0;\n        top: 0;\n        width: 100%;\n        height: 100%;\n        background-color: #000000dd;\n        display: none;\n    }\n    .jsbox-header{\n        height: 4%;\n        vertical-align: middle;\n        font-size: 1rem;\n        color: #eee;\n        display: flex;\n        align-items: center;\n        padding: 0 5px;\n        background-color: #1e1e1e;\n    }\n    .jsbox-link{\n        margin-left: 5px;\n    }\n    .jsbox-close{\n        cursor: pointer;\n        position: absolute;\n        right: 10px;\n        font-size: 1.5rem;\n    }\n    .jsbox-close:hover{\n        color: #e88;\n    }\n    .jsbox-iframe{\n        width: 100%;\n        height: 96%;\n        box-shadow: 0 0 15px #000;\n        position: relative;\n    }\n    .jsbox-loading-w{\n        position: absolute;\n        font-size: 3rem;\n        color: #aaa;\n        top: 50%;\n        transform: translate(-50%,-50%);\n        left: 50%;\n    }",document.head.appendChild(e);var n=function(){var t=document.createElement("div");return t.className="jsbox-mask",t.innerHTML="\n    <div class='jsbox-header'>\n        Powered by <a class='jsbox-link' target='view_window' href='https://github.com/theajack/jsbox'><i class='ei-cube-alt'></i> JSBox</a>\n        <i class='ei-times jsbox-close'></i>\n    </div>\n    <div class='jsbox-loading-w'><i class='ei-spinner-indicator ei-spin'></i></div>\n    <iframe class='jsbox-iframe' src='' frameborder='0'></iframe>",document.body.appendChild(t),t}(),o=n.querySelector(".jsbox-iframe");function i(){n.style.display="block",document.body.style.overflow="hidden"}function s(){n.style.display="none",document.body.style.overflow="auto"}return n.querySelector(".jsbox-close").onclick=s,v={open:i,close:s,code:function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";v._code!==e&&(v._code=e,v.url="".concat(p(),"&code=").concat(encodeURIComponent(t)),o.src=v.url),i()},id:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=t;try{var n=o.contentWindow,s=n.document.location.search;s&&(e=f(s,"id"))}catch(t){}if(v._id!==t||e!==t){v._id=t;var c=-1!==location.host.indexOf("localhost")?"http://localhost:8080/config.js":"https://cdn.jsdelivr.net/gh/theajack/cnchar/docs/config.js";v.url="".concat(p(),"&config=").concat(encodeURIComponent(c),"&id=").concat(t),o.src=v.url}i()}}},g=null,x={props:{id:{type:String,default:"easy-use"},code:{type:String,default:""},format:{type:Boolean,default:!1},fold:{type:Boolean,default:!1},lang:{type:String,default:"javascript"},title:String,desc:String,onlineLink:{type:String,default:""}},data:function(){return{localCode:"",localLang:"",localDesc:"",localFold:"",html:""}},mounted:function(){var t=this;if(g=m(),this.localFold=this.fold,this.code)this.localCode=this.code,this.localLang=this.lang,this.localDesc=this.desc;else{var e=window.jsbox_config.codes;this.localCode=e[this.id].code,this.localLang="html"===e[this.id].lang?"html":"javascript",this.localDesc=e[this.id].desc||this.desc}var n="";if("html"===this.localLang){var o=h(this.localCode);n=o.js,this.html=o.html}else n=this.localCode;this.$nextTick((function(){var e,o;u.regist("onlog",t.onLog),e={code:n}.code,""!==(o=void 0===e?"":e).trim()?(-1===o.indexOf("\n")&&(o="console.log(".concat(o,")")),new Function(o.trim())()):console.warn("execute code 参数不可为空"),u.remove("onlog",t.onLog)}))},methods:{onLog:function(t){var e=this;if("html"!==this.localLang){var n="",i="";t.forEach((function(t){"object"===Object(o.a)(t)&&(t instanceof Array&&!e.format||(i='style="white-space: pre"'),t=JSON.stringify(t,null,4)),n+="<div ".concat(i,">").concat(t,"</div>")})),this.html+=n}},copy:function(){!function(t){var e=document.getElementById("_copy_input_");e||((e=document.createElement("input")).setAttribute("type","text"),e.setAttribute("style","height:10px;position:fixed;top:-100px;opacity:0;"),e.setAttribute("id","_copy_input_"),document.body.appendChild(e)),e.value=t,e.select();try{return!!document.execCommand("Copy")}catch(t){return!1}}(this.localCode)?this.$message.error("复制成功"):this.$message.success("复制成功")},run:function(){this.code?g.code(this.code):g.id(this.id)},showToggle:function(){this.localFold=!this.localFold}}},b=(n(609),n(21)),w=Object(b.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"code-box"},[n("div",[n("span",{staticClass:"code-title"},[t._v(t._s(t.title||t.id))]),t._v(" "),n("span",{staticClass:"code-desc"},[t._v(t._s(t.localDesc))]),t._v(" "),n("i",{staticClass:"ei-play code-btn",attrs:{title:"在线运行"},on:{click:t.run}}),t._v(" "),n("i",{staticClass:"ei-copy code-btn",attrs:{title:"复制代码"},on:{click:t.copy}})]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:""!==t.html,expression:'html!==""'}]},[n("div",{staticClass:"output-title"},[t._v("运行结果")]),t._v(" "),n("div",{staticClass:"output-area",class:{folded:t.localFold}},[n("div",{staticClass:"show-toggle",on:{click:t.showToggle}},[n("i",{class:"ei-angle-"+(t.localFold?"down":"up")}),t._v(" "),n("span",{staticClass:"show-text"},[t._v(t._s(t.localFold?"显示结果":"隐藏结果"))])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.localFold,expression:"!localFold"}],domProps:{innerHTML:t._s(t.html)}})])]),t._v(" "),t._m(0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"powered-by"},[this._v("\n        Powered by "),e("a",{staticClass:"jsbox-link",attrs:{target:"view_window",href:"https://github.com/theajack/jsbox"}},[e("i",{staticClass:"ei-cube-alt"}),this._v(" JSBox")])])}],!1,null,"1063a38d",null);e.default=w.exports}}]);