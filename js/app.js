'use strict';

/*! jQuery v2.2.4 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="2.2.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isPlainObject:function(a){var b;if("object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype||{},"isPrototypeOf"))return!1;for(b in a);return void 0===b||k.call(a,b)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=d.createElement("script"),b.text=a,d.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:h.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(d=e.call(arguments,2),f=function(){return a.apply(b||this,d.concat(e.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return h.call(b,a)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&f.parentNode&&(this.length=1,this[0]=f),this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?void 0!==c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?h.call(n(a),this[0]):h.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||n.uniqueSort(e),D.test(a)&&e.reverse()),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.removeEventListener("DOMContentLoaded",J),a.removeEventListener("load",J),n.ready()}n.ready.promise=function(b){return I||(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(n.ready):(d.addEventListener("DOMContentLoaded",J),a.addEventListener("load",J))),I.promise(b)},n.ready.promise();var K=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)K(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},L=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function M(){this.expando=n.expando+M.uid++}M.uid=1,M.prototype={register:function(a,b){var c=b||{};return a.nodeType?a[this.expando]=c:Object.defineProperty(a,this.expando,{value:c,writable:!0,configurable:!0}),a[this.expando]},cache:function(a){if(!L(a))return{};var b=a[this.expando];return b||(b={},L(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[b]=c;else for(d in b)e[d]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=a[this.expando];if(void 0!==f){if(void 0===b)this.register(a);else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in f?d=[b,e]:(d=e,d=d in f?[d]:d.match(G)||[])),c=d.length;while(c--)delete f[d[c]]}(void 0===b||n.isEmptyObject(f))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!n.isEmptyObject(b)}};var N=new M,O=new M,P=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Q=/[A-Z]/g;function R(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Q,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:P.test(c)?n.parseJSON(c):c;
}catch(e){}O.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return O.hasData(a)||N.hasData(a)},data:function(a,b,c){return O.access(a,b,c)},removeData:function(a,b){O.remove(a,b)},_data:function(a,b,c){return N.access(a,b,c)},_removeData:function(a,b){N.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=O.get(f),1===f.nodeType&&!N.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),R(f,d,e[d])));N.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){O.set(this,a)}):K(this,function(b){var c,d;if(f&&void 0===b){if(c=O.get(f,a)||O.get(f,a.replace(Q,"-$&").toLowerCase()),void 0!==c)return c;if(d=n.camelCase(a),c=O.get(f,d),void 0!==c)return c;if(c=R(f,d,void 0),void 0!==c)return c}else d=n.camelCase(a),this.each(function(){var c=O.get(this,d);O.set(this,d,b),a.indexOf("-")>-1&&void 0!==c&&O.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){O.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=N.get(a,b),c&&(!d||n.isArray(c)?d=N.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return N.get(a,c)||N.access(a,c,{empty:n.Callbacks("once memory").add(function(){N.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=N.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function W(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&T.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var X=/^(?:checkbox|radio)$/i,Y=/<([\w:-]+)/,Z=/^$|\/(?:java|ecma)script/i,$={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};$.optgroup=$.option,$.tbody=$.tfoot=$.colgroup=$.caption=$.thead,$.th=$.td;function _(a,b){var c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function aa(a,b){for(var c=0,d=a.length;d>c;c++)N.set(a[c],"globalEval",!b||N.get(b[c],"globalEval"))}var ba=/<|&#?\w+;/;function ca(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],o=0,p=a.length;p>o;o++)if(f=a[o],f||0===f)if("object"===n.type(f))n.merge(m,f.nodeType?[f]:f);else if(ba.test(f)){g=g||l.appendChild(b.createElement("div")),h=(Y.exec(f)||["",""])[1].toLowerCase(),i=$[h]||$._default,g.innerHTML=i[1]+n.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;n.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",o=0;while(f=m[o++])if(d&&n.inArray(f,d)>-1)e&&e.push(f);else if(j=n.contains(f.ownerDocument,f),g=_(l.appendChild(f),"script"),j&&aa(g),c){k=0;while(f=g[k++])Z.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var da=/^key/,ea=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,fa=/^([^.]*)(?:\.(.+)|)/;function ga(){return!0}function ha(){return!1}function ia(){try{return d.activeElement}catch(a){}}function ja(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ja(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=ha;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return"undefined"!=typeof n&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(G)||[""],j=b.length;while(j--)h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.hasData(a)&&N.get(a);if(r&&(i=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&N.remove(a,"handle events")}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(N.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!==this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||d,e=c.documentElement,f=c.body,a.pageX=b.clientX+(e&&e.scrollLeft||f&&f.scrollLeft||0)-(e&&e.clientLeft||f&&f.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||f&&f.scrollTop||0)-(e&&e.clientTop||f&&f.clientTop||0)),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ea.test(f)?this.mouseHooks:da.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=d),3===a.target.nodeType&&(a.target=a.target.parentNode),h.filter?h.filter(a,g):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==ia()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===ia()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ga:ha):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:ha,isPropagationStopped:ha,isImmediatePropagationStopped:ha,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ga,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ga,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ga,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),n.fn.extend({on:function(a,b,c,d){return ja(this,a,b,c,d)},one:function(a,b,c,d){return ja(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=ha),this.each(function(){n.event.remove(this,a,c,b)})}});var ka=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,la=/<script|<style|<link/i,ma=/checked\s*(?:[^=]|=\s*.checked.)/i,na=/^true\/(.*)/,oa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function pa(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function qa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function ra(a){var b=na.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function sa(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(N.hasData(a)&&(f=N.access(a),g=N.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}O.hasData(a)&&(h=O.access(a),i=n.extend({},h),O.set(b,i))}}function ta(a,b){var c=b.nodeName.toLowerCase();"input"===c&&X.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function ua(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&ma.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),ua(f,b,c,d)});if(o&&(e=ca(b,a[0].ownerDocument,!1,a,d),g=e.firstChild,1===e.childNodes.length&&(e=g),g||d)){for(h=n.map(_(e,"script"),qa),i=h.length;o>m;m++)j=e,m!==p&&(j=n.clone(j,!0,!0),i&&n.merge(h,_(j,"script"))),c.call(a[m],j,m);if(i)for(k=h[h.length-1].ownerDocument,n.map(h,ra),m=0;i>m;m++)j=h[m],Z.test(j.type||"")&&!N.access(j,"globalEval")&&n.contains(k,j)&&(j.src?n._evalUrl&&n._evalUrl(j.src):n.globalEval(j.textContent.replace(oa,"")))}return a}function va(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(_(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&aa(_(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(ka,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=_(h),f=_(a),d=0,e=f.length;e>d;d++)ta(f[d],g[d]);if(b)if(c)for(f=f||_(a),g=g||_(h),d=0,e=f.length;e>d;d++)sa(f[d],g[d]);else sa(a,h);return g=_(h,"script"),g.length>0&&aa(g,!i&&_(a,"script")),h},cleanData:function(a){for(var b,c,d,e=n.event.special,f=0;void 0!==(c=a[f]);f++)if(L(c)){if(b=c[N.expando]){if(b.events)for(d in b.events)e[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);c[N.expando]=void 0}c[O.expando]&&(c[O.expando]=void 0)}}}),n.fn.extend({domManip:ua,detach:function(a){return va(this,a,!0)},remove:function(a){return va(this,a)},text:function(a){return K(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.appendChild(a)}})},prepend:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(_(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return K(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!la.test(a)&&!$[(Y.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(_(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return ua(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(_(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),f=e.length-1,h=0;f>=h;h++)c=h===f?this:this.clone(!0),n(e[h])[b](c),g.apply(d,c.get());return this.pushStack(d)}});var wa,xa={HTML:"block",BODY:"block"};function ya(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function za(a){var b=d,c=xa[a];return c||(c=ya(a,b),"none"!==c&&c||(wa=(wa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=wa[0].contentDocument,b.write(),b.close(),c=ya(a,b),wa.detach()),xa[a]=c),c}var Aa=/^margin/,Ba=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ca=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Ea=d.documentElement;!function(){var b,c,e,f,g=d.createElement("div"),h=d.createElement("div");if(h.style){h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,g.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",g.appendChild(h);function i(){h.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",h.innerHTML="",Ea.appendChild(g);var d=a.getComputedStyle(h);b="1%"!==d.top,f="2px"===d.marginLeft,c="4px"===d.width,h.style.marginRight="50%",e="4px"===d.marginRight,Ea.removeChild(g)}n.extend(l,{pixelPosition:function(){return i(),b},boxSizingReliable:function(){return null==c&&i(),c},pixelMarginRight:function(){return null==c&&i(),e},reliableMarginLeft:function(){return null==c&&i(),f},reliableMarginRight:function(){var b,c=h.appendChild(d.createElement("div"));return c.style.cssText=h.style.cssText="-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",h.style.width="1px",Ea.appendChild(g),b=!parseFloat(a.getComputedStyle(c).marginRight),Ea.removeChild(g),h.removeChild(c),b}})}}();function Fa(a,b,c){var d,e,f,g,h=a.style;return c=c||Ca(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Ba.test(g)&&Aa.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0!==g?g+"":g}function Ga(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Ha=/^(none|table(?!-c[ea]).+)/,Ia={position:"absolute",visibility:"hidden",display:"block"},Ja={letterSpacing:"0",fontWeight:"400"},Ka=["Webkit","O","Moz","ms"],La=d.createElement("div").style;function Ma(a){if(a in La)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ka.length;while(c--)if(a=Ka[c]+b,a in La)return a}function Na(a,b,c){var d=T.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Oa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Pa(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ca(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Fa(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ba.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Oa(a,b,c||(g?"border":"content"),d,f)+"px"}function Qa(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=N.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=N.access(d,"olddisplay",za(d.nodeName)))):(e=V(d),"none"===c&&e||N.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Fa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=T.exec(c))&&e[1]&&(c=W(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Fa(a,b,d)),"normal"===e&&b in Ja&&(e=Ja[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Ha.test(n.css(a,"display"))&&0===a.offsetWidth?Da(a,Ia,function(){return Pa(a,b,d)}):Pa(a,b,d):void 0},set:function(a,c,d){var e,f=d&&Ca(a),g=d&&Oa(a,b,d,"border-box"===n.css(a,"boxSizing",!1,f),f);return g&&(e=T.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=n.css(a,b)),Na(a,c,g)}}}),n.cssHooks.marginLeft=Ga(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Fa(a,"marginLeft"))||a.getBoundingClientRect().left-Da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px":void 0}),n.cssHooks.marginRight=Ga(l.reliableMarginRight,function(a,b){return b?Da(a,{display:"inline-block"},Fa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Aa.test(a)||(n.cssHooks[a+b].set=Na)}),n.fn.extend({css:function(a,b){return K(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ca(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Qa(this,!0)},hide:function(){return Qa(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function Ra(a,b,c,d,e){return new Ra.prototype.init(a,b,c,d,e)}n.Tween=Ra,Ra.prototype={constructor:Ra,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ra.propHooks[this.prop];return a&&a.get?a.get(this):Ra.propHooks._default.get(this)},run:function(a){var b,c=Ra.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ra.propHooks._default.set(this),this}},Ra.prototype.init.prototype=Ra.prototype,Ra.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},Ra.propHooks.scrollTop=Ra.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=Ra.prototype.init,n.fx.step={};var Sa,Ta,Ua=/^(?:toggle|show|hide)$/,Va=/queueHooks$/;function Wa(){return a.setTimeout(function(){Sa=void 0}),Sa=n.now()}function Xa(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=U[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ya(a,b,c){for(var d,e=(_a.tweeners[b]||[]).concat(_a.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Za(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&V(a),q=N.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?N.get(a,"olddisplay")||za(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Ua.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?za(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=N.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;N.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ya(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function $a(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function _a(a,b,c){var d,e,f=0,g=_a.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Sa||Wa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:Sa||Wa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for($a(k,j.opts.specialEasing);g>f;f++)if(d=_a.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,Ya,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(_a,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return W(c.elem,a,T.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],_a.tweeners[c]=_a.tweeners[c]||[],_a.tweeners[c].unshift(b)},prefilters:[Za],prefilter:function(a,b){b?_a.prefilters.unshift(a):_a.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=_a(this,n.extend({},a),f);(e||N.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=N.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Va.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=N.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Xa(b,!0),a,d,e)}}),n.each({slideDown:Xa("show"),slideUp:Xa("hide"),slideToggle:Xa("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Sa=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Sa=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ta||(Ta=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(Ta),Ta=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",l.checkOn=""!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=d.createElement("input"),a.value="t",a.type="radio",l.radioValue="t"===a.value}();var ab,bb=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return K(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ab:void 0)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)}}),ab={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=bb[b]||n.find.attr;bb[b]=function(a,b,d){var e,f;return d||(f=bb[b],bb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,bb[b]=f),e}});var cb=/^(?:input|select|textarea|button)$/i,db=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return K(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),
void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):cb.test(a.nodeName)||db.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var eb=/[\t\r\n\f]/g;function fb(a){return a.getAttribute&&a.getAttribute("class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,fb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,fb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,fb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=fb(this),b&&N.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":N.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+fb(c)+" ").replace(eb," ").indexOf(b)>-1)return!0;return!1}});var gb=/\r/g,hb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(gb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(hb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(n.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var ib=/^(?:focusinfocus|focusoutblur)$/;n.extend(n.event,{trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!ib.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),l=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},f||!o.trigger||o.trigger.apply(e,c)!==!1)){if(!f&&!o.noBubble&&!n.isWindow(e)){for(j=o.delegateType||q,ib.test(j+q)||(h=h.parentNode);h;h=h.parentNode)p.push(h),i=h;i===(e.ownerDocument||d)&&p.push(i.defaultView||i.parentWindow||a)}g=0;while((h=p[g++])&&!b.isPropagationStopped())b.type=g>1?j:o.bindType||q,m=(N.get(h,"events")||{})[b.type]&&N.get(h,"handle"),m&&m.apply(h,c),m=l&&h[l],m&&m.apply&&L(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=q,f||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!L(e)||l&&n.isFunction(e[q])&&!n.isWindow(e)&&(i=e[l],i&&(e[l]=null),n.event.triggered=q,e[q](),n.event.triggered=void 0,i&&(e[l]=i)),b.result}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b)}}),n.fn.extend({trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),l.focusin="onfocusin"in a,l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=N.access(d,b);e||d.addEventListener(a,c,!0),N.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=N.access(d,b)-1;e?N.access(d,b,e):(d.removeEventListener(a,c,!0),N.remove(d,b))}}});var jb=a.location,kb=n.now(),lb=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var mb=/#.*$/,nb=/([?&])_=[^&]*/,ob=/^(.*?):[ \t]*([^\r\n]*)$/gm,pb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,qb=/^(?:GET|HEAD)$/,rb=/^\/\//,sb={},tb={},ub="*/".concat("*"),vb=d.createElement("a");vb.href=jb.href;function wb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function xb(a,b,c,d){var e={},f=a===tb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function yb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function zb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Ab(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:jb.href,type:"GET",isLocal:pb.test(jb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":ub,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?yb(yb(a,n.ajaxSettings),b):yb(n.ajaxSettings,a)},ajaxPrefilter:wb(sb),ajaxTransport:wb(tb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m=n.ajaxSetup({},c),o=m.context||m,p=m.context&&(o.nodeType||o.jquery)?n(o):n.event,q=n.Deferred(),r=n.Callbacks("once memory"),s=m.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,getResponseHeader:function(a){var b;if(2===v){if(!h){h={};while(b=ob.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===v?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return v||(a=u[c]=u[c]||a,t[a]=b),this},overrideMimeType:function(a){return v||(m.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>v)for(b in a)s[b]=[s[b],a[b]];else x.always(a[x.status]);return this},abort:function(a){var b=a||w;return e&&e.abort(b),z(0,b),this}};if(q.promise(x).complete=r.add,x.success=x.done,x.error=x.fail,m.url=((b||m.url||jb.href)+"").replace(mb,"").replace(rb,jb.protocol+"//"),m.type=c.method||c.type||m.method||m.type,m.dataTypes=n.trim(m.dataType||"*").toLowerCase().match(G)||[""],null==m.crossDomain){j=d.createElement("a");try{j.href=m.url,j.href=j.href,m.crossDomain=vb.protocol+"//"+vb.host!=j.protocol+"//"+j.host}catch(y){m.crossDomain=!0}}if(m.data&&m.processData&&"string"!=typeof m.data&&(m.data=n.param(m.data,m.traditional)),xb(sb,m,c,x),2===v)return x;k=n.event&&m.global,k&&0===n.active++&&n.event.trigger("ajaxStart"),m.type=m.type.toUpperCase(),m.hasContent=!qb.test(m.type),f=m.url,m.hasContent||(m.data&&(f=m.url+=(lb.test(f)?"&":"?")+m.data,delete m.data),m.cache===!1&&(m.url=nb.test(f)?f.replace(nb,"$1_="+kb++):f+(lb.test(f)?"&":"?")+"_="+kb++)),m.ifModified&&(n.lastModified[f]&&x.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&x.setRequestHeader("If-None-Match",n.etag[f])),(m.data&&m.hasContent&&m.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",m.contentType),x.setRequestHeader("Accept",m.dataTypes[0]&&m.accepts[m.dataTypes[0]]?m.accepts[m.dataTypes[0]]+("*"!==m.dataTypes[0]?", "+ub+"; q=0.01":""):m.accepts["*"]);for(l in m.headers)x.setRequestHeader(l,m.headers[l]);if(m.beforeSend&&(m.beforeSend.call(o,x,m)===!1||2===v))return x.abort();w="abort";for(l in{success:1,error:1,complete:1})x[l](m[l]);if(e=xb(tb,m,c,x)){if(x.readyState=1,k&&p.trigger("ajaxSend",[x,m]),2===v)return x;m.async&&m.timeout>0&&(i=a.setTimeout(function(){x.abort("timeout")},m.timeout));try{v=1,e.send(t,z)}catch(y){if(!(2>v))throw y;z(-1,y)}}else z(-1,"No Transport");function z(b,c,d,h){var j,l,t,u,w,y=c;2!==v&&(v=2,i&&a.clearTimeout(i),e=void 0,g=h||"",x.readyState=b>0?4:0,j=b>=200&&300>b||304===b,d&&(u=zb(m,x,d)),u=Ab(m,u,x,j),j?(m.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(n.lastModified[f]=w),w=x.getResponseHeader("etag"),w&&(n.etag[f]=w)),204===b||"HEAD"===m.type?y="nocontent":304===b?y="notmodified":(y=u.state,l=u.data,t=u.error,j=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),x.status=b,x.statusText=(c||y)+"",j?q.resolveWith(o,[l,y,x]):q.rejectWith(o,[x,y,t]),x.statusCode(s),s=void 0,k&&p.trigger(j?"ajaxSuccess":"ajaxError",[x,m,j?l:t]),r.fireWith(o,[x,y]),k&&(p.trigger("ajaxComplete",[x,m]),--n.active||n.event.trigger("ajaxStop")))}return x},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return!n.expr.filters.visible(a)},n.expr.filters.visible=function(a){return a.offsetWidth>0||a.offsetHeight>0||a.getClientRects().length>0};var Bb=/%20/g,Cb=/\[\]$/,Db=/\r?\n/g,Eb=/^(?:submit|button|image|reset|file)$/i,Fb=/^(?:input|select|textarea|keygen)/i;function Gb(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Cb.test(a)?d(a,e):Gb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Gb(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Gb(c,a[c],b,e);return d.join("&").replace(Bb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Fb.test(this.nodeName)&&!Eb.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Db,"\r\n")}}):{name:b.name,value:c.replace(Db,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Hb={0:200,1223:204},Ib=n.ajaxSettings.xhr();l.cors=!!Ib&&"withCredentials"in Ib,l.ajax=Ib=!!Ib,n.ajaxTransport(function(b){var c,d;return l.cors||Ib&&!b.crossDomain?{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Hb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=n("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Jb=[],Kb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Jb.pop()||n.expando+"_"+kb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Kb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Kb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Kb,"$1"+e):b.jsonp!==!1&&(b.url+=(lb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Jb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ca([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var Lb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Lb)return Lb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function Mb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(e=d.getBoundingClientRect(),c=Mb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ea})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;n.fn[a]=function(d){return K(this,function(a,d,e){var f=Mb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ga(l.pixelPosition,function(a,c){return c?(c=Fa(a,b),Ba.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return K(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)},size:function(){return this.length}}),n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Nb=a.jQuery,Ob=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Ob),b&&a.jQuery===n&&(a.jQuery=Nb),n},b||(a.jQuery=a.$=n),n});

//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){function n(n){function t(t,r,e,u,i,o){for(;i>=0&&o>i;i+=n){var a=u?u[i]:i;e=r(e,t[a],a,t)}return e}return function(r,e,u,i){e=b(e,i,4);var o=!k(r)&&m.keys(r),a=(o||r).length,c=n>0?0:a-1;return arguments.length<3&&(u=r[o?o[c]:c],c+=n),t(r,e,u,o,c,a)}}function t(n){return function(t,r,e){r=x(r,e);for(var u=O(t),i=n>0?0:u-1;i>=0&&u>i;i+=n)if(r(t[i],i,t))return i;return-1}}function r(n,t,r){return function(e,u,i){var o=0,a=O(e);if("number"==typeof i)n>0?o=i>=0?i:Math.max(i+a,o):a=i>=0?Math.min(i+1,a):i+a+1;else if(r&&i&&a)return i=r(e,u),e[i]===u?i:-1;if(u!==u)return i=t(l.call(e,o,a),m.isNaN),i>=0?i+o:-1;for(i=n>0?o:a-1;i>=0&&a>i;i+=n)if(e[i]===u)return i;return-1}}function e(n,t){var r=I.length,e=n.constructor,u=m.isFunction(e)&&e.prototype||a,i="constructor";for(m.has(n,i)&&!m.contains(t,i)&&t.push(i);r--;)i=I[r],i in n&&n[i]!==u[i]&&!m.contains(t,i)&&t.push(i)}var u=this,i=u._,o=Array.prototype,a=Object.prototype,c=Function.prototype,f=o.push,l=o.slice,s=a.toString,p=a.hasOwnProperty,h=Array.isArray,v=Object.keys,g=c.bind,y=Object.create,d=function(){},m=function(n){return n instanceof m?n:this instanceof m?void(this._wrapped=n):new m(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=m),exports._=m):u._=m,m.VERSION="1.8.3";var b=function(n,t,r){if(t===void 0)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,e){return n.call(t,r,e)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}},x=function(n,t,r){return null==n?m.identity:m.isFunction(n)?b(n,t,r):m.isObject(n)?m.matcher(n):m.property(n)};m.iteratee=function(n,t){return x(n,t,1/0)};var _=function(n,t){return function(r){var e=arguments.length;if(2>e||null==r)return r;for(var u=1;e>u;u++)for(var i=arguments[u],o=n(i),a=o.length,c=0;a>c;c++){var f=o[c];t&&r[f]!==void 0||(r[f]=i[f])}return r}},j=function(n){if(!m.isObject(n))return{};if(y)return y(n);d.prototype=n;var t=new d;return d.prototype=null,t},w=function(n){return function(t){return null==t?void 0:t[n]}},A=Math.pow(2,53)-1,O=w("length"),k=function(n){var t=O(n);return"number"==typeof t&&t>=0&&A>=t};m.each=m.forEach=function(n,t,r){t=b(t,r);var e,u;if(k(n))for(e=0,u=n.length;u>e;e++)t(n[e],e,n);else{var i=m.keys(n);for(e=0,u=i.length;u>e;e++)t(n[i[e]],i[e],n)}return n},m.map=m.collect=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=Array(u),o=0;u>o;o++){var a=e?e[o]:o;i[o]=t(n[a],a,n)}return i},m.reduce=m.foldl=m.inject=n(1),m.reduceRight=m.foldr=n(-1),m.find=m.detect=function(n,t,r){var e;return e=k(n)?m.findIndex(n,t,r):m.findKey(n,t,r),e!==void 0&&e!==-1?n[e]:void 0},m.filter=m.select=function(n,t,r){var e=[];return t=x(t,r),m.each(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e},m.reject=function(n,t,r){return m.filter(n,m.negate(x(t)),r)},m.every=m.all=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(!t(n[o],o,n))return!1}return!0},m.some=m.any=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(t(n[o],o,n))return!0}return!1},m.contains=m.includes=m.include=function(n,t,r,e){return k(n)||(n=m.values(n)),("number"!=typeof r||e)&&(r=0),m.indexOf(n,t,r)>=0},m.invoke=function(n,t){var r=l.call(arguments,2),e=m.isFunction(t);return m.map(n,function(n){var u=e?t:n[t];return null==u?u:u.apply(n,r)})},m.pluck=function(n,t){return m.map(n,m.property(t))},m.where=function(n,t){return m.filter(n,m.matcher(t))},m.findWhere=function(n,t){return m.find(n,m.matcher(t))},m.max=function(n,t,r){var e,u,i=-1/0,o=-1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],e>i&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(u>o||u===-1/0&&i===-1/0)&&(i=n,o=u)});return i},m.min=function(n,t,r){var e,u,i=1/0,o=1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],i>e&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(o>u||1/0===u&&1/0===i)&&(i=n,o=u)});return i},m.shuffle=function(n){for(var t,r=k(n)?n:m.values(n),e=r.length,u=Array(e),i=0;e>i;i++)t=m.random(0,i),t!==i&&(u[i]=u[t]),u[t]=r[i];return u},m.sample=function(n,t,r){return null==t||r?(k(n)||(n=m.values(n)),n[m.random(n.length-1)]):m.shuffle(n).slice(0,Math.max(0,t))},m.sortBy=function(n,t,r){return t=x(t,r),m.pluck(m.map(n,function(n,r,e){return{value:n,index:r,criteria:t(n,r,e)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={};return r=x(r,e),m.each(t,function(e,i){var o=r(e,i,t);n(u,e,o)}),u}};m.groupBy=F(function(n,t,r){m.has(n,r)?n[r].push(t):n[r]=[t]}),m.indexBy=F(function(n,t,r){n[r]=t}),m.countBy=F(function(n,t,r){m.has(n,r)?n[r]++:n[r]=1}),m.toArray=function(n){return n?m.isArray(n)?l.call(n):k(n)?m.map(n,m.identity):m.values(n):[]},m.size=function(n){return null==n?0:k(n)?n.length:m.keys(n).length},m.partition=function(n,t,r){t=x(t,r);var e=[],u=[];return m.each(n,function(n,r,i){(t(n,r,i)?e:u).push(n)}),[e,u]},m.first=m.head=m.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:m.initial(n,n.length-t)},m.initial=function(n,t,r){return l.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},m.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:m.rest(n,Math.max(0,n.length-t))},m.rest=m.tail=m.drop=function(n,t,r){return l.call(n,null==t||r?1:t)},m.compact=function(n){return m.filter(n,m.identity)};var S=function(n,t,r,e){for(var u=[],i=0,o=e||0,a=O(n);a>o;o++){var c=n[o];if(k(c)&&(m.isArray(c)||m.isArguments(c))){t||(c=S(c,t,r));var f=0,l=c.length;for(u.length+=l;l>f;)u[i++]=c[f++]}else r||(u[i++]=c)}return u};m.flatten=function(n,t){return S(n,t,!1)},m.without=function(n){return m.difference(n,l.call(arguments,1))},m.uniq=m.unique=function(n,t,r,e){m.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=x(r,e));for(var u=[],i=[],o=0,a=O(n);a>o;o++){var c=n[o],f=r?r(c,o,n):c;t?(o&&i===f||u.push(c),i=f):r?m.contains(i,f)||(i.push(f),u.push(c)):m.contains(u,c)||u.push(c)}return u},m.union=function(){return m.uniq(S(arguments,!0,!0))},m.intersection=function(n){for(var t=[],r=arguments.length,e=0,u=O(n);u>e;e++){var i=n[e];if(!m.contains(t,i)){for(var o=1;r>o&&m.contains(arguments[o],i);o++);o===r&&t.push(i)}}return t},m.difference=function(n){var t=S(arguments,!0,!0,1);return m.filter(n,function(n){return!m.contains(t,n)})},m.zip=function(){return m.unzip(arguments)},m.unzip=function(n){for(var t=n&&m.max(n,O).length||0,r=Array(t),e=0;t>e;e++)r[e]=m.pluck(n,e);return r},m.object=function(n,t){for(var r={},e=0,u=O(n);u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},m.findIndex=t(1),m.findLastIndex=t(-1),m.sortedIndex=function(n,t,r,e){r=x(r,e,1);for(var u=r(t),i=0,o=O(n);o>i;){var a=Math.floor((i+o)/2);r(n[a])<u?i=a+1:o=a}return i},m.indexOf=r(1,m.findIndex,m.sortedIndex),m.lastIndexOf=r(-1,m.findLastIndex),m.range=function(n,t,r){null==t&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;e>i;i++,n+=r)u[i]=n;return u};var E=function(n,t,r,e,u){if(!(e instanceof t))return n.apply(r,u);var i=j(n.prototype),o=n.apply(i,u);return m.isObject(o)?o:i};m.bind=function(n,t){if(g&&n.bind===g)return g.apply(n,l.call(arguments,1));if(!m.isFunction(n))throw new TypeError("Bind must be called on a function");var r=l.call(arguments,2),e=function(){return E(n,e,t,this,r.concat(l.call(arguments)))};return e},m.partial=function(n){var t=l.call(arguments,1),r=function(){for(var e=0,u=t.length,i=Array(u),o=0;u>o;o++)i[o]=t[o]===m?arguments[e++]:t[o];for(;e<arguments.length;)i.push(arguments[e++]);return E(n,r,this,this,i)};return r},m.bindAll=function(n){var t,r,e=arguments.length;if(1>=e)throw new Error("bindAll must be passed function names");for(t=1;e>t;t++)r=arguments[t],n[r]=m.bind(n[r],n);return n},m.memoize=function(n,t){var r=function(e){var u=r.cache,i=""+(t?t.apply(this,arguments):e);return m.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},m.delay=function(n,t){var r=l.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},m.defer=m.partial(m.delay,m,1),m.throttle=function(n,t,r){var e,u,i,o=null,a=0;r||(r={});var c=function(){a=r.leading===!1?0:m.now(),o=null,i=n.apply(e,u),o||(e=u=null)};return function(){var f=m.now();a||r.leading!==!1||(a=f);var l=t-(f-a);return e=this,u=arguments,0>=l||l>t?(o&&(clearTimeout(o),o=null),a=f,i=n.apply(e,u),o||(e=u=null)):o||r.trailing===!1||(o=setTimeout(c,l)),i}},m.debounce=function(n,t,r){var e,u,i,o,a,c=function(){var f=m.now()-o;t>f&&f>=0?e=setTimeout(c,t-f):(e=null,r||(a=n.apply(i,u),e||(i=u=null)))};return function(){i=this,u=arguments,o=m.now();var f=r&&!e;return e||(e=setTimeout(c,t)),f&&(a=n.apply(i,u),i=u=null),a}},m.wrap=function(n,t){return m.partial(t,n)},m.negate=function(n){return function(){return!n.apply(this,arguments)}},m.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},m.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},m.before=function(n,t){var r;return function(){return--n>0&&(r=t.apply(this,arguments)),1>=n&&(t=null),r}},m.once=m.partial(m.before,2);var M=!{toString:null}.propertyIsEnumerable("toString"),I=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];m.keys=function(n){if(!m.isObject(n))return[];if(v)return v(n);var t=[];for(var r in n)m.has(n,r)&&t.push(r);return M&&e(n,t),t},m.allKeys=function(n){if(!m.isObject(n))return[];var t=[];for(var r in n)t.push(r);return M&&e(n,t),t},m.values=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},m.mapObject=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=u.length,o={},a=0;i>a;a++)e=u[a],o[e]=t(n[e],e,n);return o},m.pairs=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},m.invert=function(n){for(var t={},r=m.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},m.functions=m.methods=function(n){var t=[];for(var r in n)m.isFunction(n[r])&&t.push(r);return t.sort()},m.extend=_(m.allKeys),m.extendOwn=m.assign=_(m.keys),m.findKey=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=0,o=u.length;o>i;i++)if(e=u[i],t(n[e],e,n))return e},m.pick=function(n,t,r){var e,u,i={},o=n;if(null==o)return i;m.isFunction(t)?(u=m.allKeys(o),e=b(t,r)):(u=S(arguments,!1,!1,1),e=function(n,t,r){return t in r},o=Object(o));for(var a=0,c=u.length;c>a;a++){var f=u[a],l=o[f];e(l,f,o)&&(i[f]=l)}return i},m.omit=function(n,t,r){if(m.isFunction(t))t=m.negate(t);else{var e=m.map(S(arguments,!1,!1,1),String);t=function(n,t){return!m.contains(e,t)}}return m.pick(n,t,r)},m.defaults=_(m.allKeys,!0),m.create=function(n,t){var r=j(n);return t&&m.extendOwn(r,t),r},m.clone=function(n){return m.isObject(n)?m.isArray(n)?n.slice():m.extend({},n):n},m.tap=function(n,t){return t(n),n},m.isMatch=function(n,t){var r=m.keys(t),e=r.length;if(null==n)return!e;for(var u=Object(n),i=0;e>i;i++){var o=r[i];if(t[o]!==u[o]||!(o in u))return!1}return!0};var N=function(n,t,r,e){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof m&&(n=n._wrapped),t instanceof m&&(t=t._wrapped);var u=s.call(n);if(u!==s.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}var i="[object Array]"===u;if(!i){if("object"!=typeof n||"object"!=typeof t)return!1;var o=n.constructor,a=t.constructor;if(o!==a&&!(m.isFunction(o)&&o instanceof o&&m.isFunction(a)&&a instanceof a)&&"constructor"in n&&"constructor"in t)return!1}r=r||[],e=e||[];for(var c=r.length;c--;)if(r[c]===n)return e[c]===t;if(r.push(n),e.push(t),i){if(c=n.length,c!==t.length)return!1;for(;c--;)if(!N(n[c],t[c],r,e))return!1}else{var f,l=m.keys(n);if(c=l.length,m.keys(t).length!==c)return!1;for(;c--;)if(f=l[c],!m.has(t,f)||!N(n[f],t[f],r,e))return!1}return r.pop(),e.pop(),!0};m.isEqual=function(n,t){return N(n,t)},m.isEmpty=function(n){return null==n?!0:k(n)&&(m.isArray(n)||m.isString(n)||m.isArguments(n))?0===n.length:0===m.keys(n).length},m.isElement=function(n){return!(!n||1!==n.nodeType)},m.isArray=h||function(n){return"[object Array]"===s.call(n)},m.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},m.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(n){m["is"+n]=function(t){return s.call(t)==="[object "+n+"]"}}),m.isArguments(arguments)||(m.isArguments=function(n){return m.has(n,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(m.isFunction=function(n){return"function"==typeof n||!1}),m.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},m.isNaN=function(n){return m.isNumber(n)&&n!==+n},m.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===s.call(n)},m.isNull=function(n){return null===n},m.isUndefined=function(n){return n===void 0},m.has=function(n,t){return null!=n&&p.call(n,t)},m.noConflict=function(){return u._=i,this},m.identity=function(n){return n},m.constant=function(n){return function(){return n}},m.noop=function(){},m.property=w,m.propertyOf=function(n){return null==n?function(){}:function(t){return n[t]}},m.matcher=m.matches=function(n){return n=m.extendOwn({},n),function(t){return m.isMatch(t,n)}},m.times=function(n,t,r){var e=Array(Math.max(0,n));t=b(t,r,1);for(var u=0;n>u;u++)e[u]=t(u);return e},m.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},m.now=Date.now||function(){return(new Date).getTime()};var B={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},T=m.invert(B),R=function(n){var t=function(t){return n[t]},r="(?:"+m.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};m.escape=R(B),m.unescape=R(T),m.result=function(n,t,r){var e=null==n?void 0:n[t];return e===void 0&&(e=r),m.isFunction(e)?e.call(n):e};var q=0;m.uniqueId=function(n){var t=++q+"";return n?n+t:t},m.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var K=/(.)^/,z={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\u2028|\u2029/g,L=function(n){return"\\"+z[n]};m.template=function(n,t,r){!t&&r&&(t=r),t=m.defaults({},t,m.templateSettings);var e=RegExp([(t.escape||K).source,(t.interpolate||K).source,(t.evaluate||K).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,o,a){return i+=n.slice(u,a).replace(D,L),u=a+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":o&&(i+="';\n"+o+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var o=new Function(t.variable||"obj","_",i)}catch(a){throw a.source=i,a}var c=function(n){return o.call(this,n,m)},f=t.variable||"obj";return c.source="function("+f+"){\n"+i+"}",c},m.chain=function(n){var t=m(n);return t._chain=!0,t};var P=function(n,t){return n._chain?m(t).chain():t};m.mixin=function(n){m.each(m.functions(n),function(t){var r=m[t]=n[t];m.prototype[t]=function(){var n=[this._wrapped];return f.apply(n,arguments),P(this,r.apply(m,n))}})},m.mixin(m),m.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=o[n];m.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],P(this,r)}}),m.each(["concat","join","slice"],function(n){var t=o[n];m.prototype[n]=function(){return P(this,t.apply(this._wrapped,arguments))}}),m.prototype.value=function(){return this._wrapped},m.prototype.valueOf=m.prototype.toJSON=m.prototype.value,m.prototype.toString=function(){return""+this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return m})}).call(this);
//# sourceMappingURL=underscore-min.map
/*! Tiny Pub/Sub - v0.7.0 - 2013-01-29
* https://github.com/cowboy/jquery-tiny-pubsub
* Copyright (c) 2013 "Cowboy" Ben Alman; Licensed MIT */
(function(n){var u=n({});n.subscribe=function(){u.on.apply(u,arguments)},n.unsubscribe=function(){u.off.apply(u,arguments)},n.publish=function(){u.trigger.apply(u,arguments)}})(jQuery);
/*! Hammer.JS - v2.0.8 - 2016-04-23
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
!function(a,b,c,d){"use strict";function e(a,b,c){return setTimeout(j(a,c),b)}function f(a,b,c){return Array.isArray(a)?(g(a,c[b],c),!0):!1}function g(a,b,c){var e;if(a)if(a.forEach)a.forEach(b,c);else if(a.length!==d)for(e=0;e<a.length;)b.call(c,a[e],e,a),e++;else for(e in a)a.hasOwnProperty(e)&&b.call(c,a[e],e,a)}function h(b,c,d){var e="DEPRECATED METHOD: "+c+"\n"+d+" AT \n";return function(){var c=new Error("get-stack-trace"),d=c&&c.stack?c.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",f=a.console&&(a.console.warn||a.console.log);return f&&f.call(a.console,e,d),b.apply(this,arguments)}}function i(a,b,c){var d,e=b.prototype;d=a.prototype=Object.create(e),d.constructor=a,d._super=e,c&&la(d,c)}function j(a,b){return function(){return a.apply(b,arguments)}}function k(a,b){return typeof a==oa?a.apply(b?b[0]||d:d,b):a}function l(a,b){return a===d?b:a}function m(a,b,c){g(q(b),function(b){a.addEventListener(b,c,!1)})}function n(a,b,c){g(q(b),function(b){a.removeEventListener(b,c,!1)})}function o(a,b){for(;a;){if(a==b)return!0;a=a.parentNode}return!1}function p(a,b){return a.indexOf(b)>-1}function q(a){return a.trim().split(/\s+/g)}function r(a,b,c){if(a.indexOf&&!c)return a.indexOf(b);for(var d=0;d<a.length;){if(c&&a[d][c]==b||!c&&a[d]===b)return d;d++}return-1}function s(a){return Array.prototype.slice.call(a,0)}function t(a,b,c){for(var d=[],e=[],f=0;f<a.length;){var g=b?a[f][b]:a[f];r(e,g)<0&&d.push(a[f]),e[f]=g,f++}return c&&(d=b?d.sort(function(a,c){return a[b]>c[b]}):d.sort()),d}function u(a,b){for(var c,e,f=b[0].toUpperCase()+b.slice(1),g=0;g<ma.length;){if(c=ma[g],e=c?c+f:b,e in a)return e;g++}return d}function v(){return ua++}function w(b){var c=b.ownerDocument||b;return c.defaultView||c.parentWindow||a}function x(a,b){var c=this;this.manager=a,this.callback=b,this.element=a.element,this.target=a.options.inputTarget,this.domHandler=function(b){k(a.options.enable,[a])&&c.handler(b)},this.init()}function y(a){var b,c=a.options.inputClass;return new(b=c?c:xa?M:ya?P:wa?R:L)(a,z)}function z(a,b,c){var d=c.pointers.length,e=c.changedPointers.length,f=b&Ea&&d-e===0,g=b&(Ga|Ha)&&d-e===0;c.isFirst=!!f,c.isFinal=!!g,f&&(a.session={}),c.eventType=b,A(a,c),a.emit("hammer.input",c),a.recognize(c),a.session.prevInput=c}function A(a,b){var c=a.session,d=b.pointers,e=d.length;c.firstInput||(c.firstInput=D(b)),e>1&&!c.firstMultiple?c.firstMultiple=D(b):1===e&&(c.firstMultiple=!1);var f=c.firstInput,g=c.firstMultiple,h=g?g.center:f.center,i=b.center=E(d);b.timeStamp=ra(),b.deltaTime=b.timeStamp-f.timeStamp,b.angle=I(h,i),b.distance=H(h,i),B(c,b),b.offsetDirection=G(b.deltaX,b.deltaY);var j=F(b.deltaTime,b.deltaX,b.deltaY);b.overallVelocityX=j.x,b.overallVelocityY=j.y,b.overallVelocity=qa(j.x)>qa(j.y)?j.x:j.y,b.scale=g?K(g.pointers,d):1,b.rotation=g?J(g.pointers,d):0,b.maxPointers=c.prevInput?b.pointers.length>c.prevInput.maxPointers?b.pointers.length:c.prevInput.maxPointers:b.pointers.length,C(c,b);var k=a.element;o(b.srcEvent.target,k)&&(k=b.srcEvent.target),b.target=k}function B(a,b){var c=b.center,d=a.offsetDelta||{},e=a.prevDelta||{},f=a.prevInput||{};b.eventType!==Ea&&f.eventType!==Ga||(e=a.prevDelta={x:f.deltaX||0,y:f.deltaY||0},d=a.offsetDelta={x:c.x,y:c.y}),b.deltaX=e.x+(c.x-d.x),b.deltaY=e.y+(c.y-d.y)}function C(a,b){var c,e,f,g,h=a.lastInterval||b,i=b.timeStamp-h.timeStamp;if(b.eventType!=Ha&&(i>Da||h.velocity===d)){var j=b.deltaX-h.deltaX,k=b.deltaY-h.deltaY,l=F(i,j,k);e=l.x,f=l.y,c=qa(l.x)>qa(l.y)?l.x:l.y,g=G(j,k),a.lastInterval=b}else c=h.velocity,e=h.velocityX,f=h.velocityY,g=h.direction;b.velocity=c,b.velocityX=e,b.velocityY=f,b.direction=g}function D(a){for(var b=[],c=0;c<a.pointers.length;)b[c]={clientX:pa(a.pointers[c].clientX),clientY:pa(a.pointers[c].clientY)},c++;return{timeStamp:ra(),pointers:b,center:E(b),deltaX:a.deltaX,deltaY:a.deltaY}}function E(a){var b=a.length;if(1===b)return{x:pa(a[0].clientX),y:pa(a[0].clientY)};for(var c=0,d=0,e=0;b>e;)c+=a[e].clientX,d+=a[e].clientY,e++;return{x:pa(c/b),y:pa(d/b)}}function F(a,b,c){return{x:b/a||0,y:c/a||0}}function G(a,b){return a===b?Ia:qa(a)>=qa(b)?0>a?Ja:Ka:0>b?La:Ma}function H(a,b,c){c||(c=Qa);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return Math.sqrt(d*d+e*e)}function I(a,b,c){c||(c=Qa);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return 180*Math.atan2(e,d)/Math.PI}function J(a,b){return I(b[1],b[0],Ra)+I(a[1],a[0],Ra)}function K(a,b){return H(b[0],b[1],Ra)/H(a[0],a[1],Ra)}function L(){this.evEl=Ta,this.evWin=Ua,this.pressed=!1,x.apply(this,arguments)}function M(){this.evEl=Xa,this.evWin=Ya,x.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function N(){this.evTarget=$a,this.evWin=_a,this.started=!1,x.apply(this,arguments)}function O(a,b){var c=s(a.touches),d=s(a.changedTouches);return b&(Ga|Ha)&&(c=t(c.concat(d),"identifier",!0)),[c,d]}function P(){this.evTarget=bb,this.targetIds={},x.apply(this,arguments)}function Q(a,b){var c=s(a.touches),d=this.targetIds;if(b&(Ea|Fa)&&1===c.length)return d[c[0].identifier]=!0,[c,c];var e,f,g=s(a.changedTouches),h=[],i=this.target;if(f=c.filter(function(a){return o(a.target,i)}),b===Ea)for(e=0;e<f.length;)d[f[e].identifier]=!0,e++;for(e=0;e<g.length;)d[g[e].identifier]&&h.push(g[e]),b&(Ga|Ha)&&delete d[g[e].identifier],e++;return h.length?[t(f.concat(h),"identifier",!0),h]:void 0}function R(){x.apply(this,arguments);var a=j(this.handler,this);this.touch=new P(this.manager,a),this.mouse=new L(this.manager,a),this.primaryTouch=null,this.lastTouches=[]}function S(a,b){a&Ea?(this.primaryTouch=b.changedPointers[0].identifier,T.call(this,b)):a&(Ga|Ha)&&T.call(this,b)}function T(a){var b=a.changedPointers[0];if(b.identifier===this.primaryTouch){var c={x:b.clientX,y:b.clientY};this.lastTouches.push(c);var d=this.lastTouches,e=function(){var a=d.indexOf(c);a>-1&&d.splice(a,1)};setTimeout(e,cb)}}function U(a){for(var b=a.srcEvent.clientX,c=a.srcEvent.clientY,d=0;d<this.lastTouches.length;d++){var e=this.lastTouches[d],f=Math.abs(b-e.x),g=Math.abs(c-e.y);if(db>=f&&db>=g)return!0}return!1}function V(a,b){this.manager=a,this.set(b)}function W(a){if(p(a,jb))return jb;var b=p(a,kb),c=p(a,lb);return b&&c?jb:b||c?b?kb:lb:p(a,ib)?ib:hb}function X(){if(!fb)return!1;var b={},c=a.CSS&&a.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(d){b[d]=c?a.CSS.supports("touch-action",d):!0}),b}function Y(a){this.options=la({},this.defaults,a||{}),this.id=v(),this.manager=null,this.options.enable=l(this.options.enable,!0),this.state=nb,this.simultaneous={},this.requireFail=[]}function Z(a){return a&sb?"cancel":a&qb?"end":a&pb?"move":a&ob?"start":""}function $(a){return a==Ma?"down":a==La?"up":a==Ja?"left":a==Ka?"right":""}function _(a,b){var c=b.manager;return c?c.get(a):a}function aa(){Y.apply(this,arguments)}function ba(){aa.apply(this,arguments),this.pX=null,this.pY=null}function ca(){aa.apply(this,arguments)}function da(){Y.apply(this,arguments),this._timer=null,this._input=null}function ea(){aa.apply(this,arguments)}function fa(){aa.apply(this,arguments)}function ga(){Y.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function ha(a,b){return b=b||{},b.recognizers=l(b.recognizers,ha.defaults.preset),new ia(a,b)}function ia(a,b){this.options=la({},ha.defaults,b||{}),this.options.inputTarget=this.options.inputTarget||a,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=a,this.input=y(this),this.touchAction=new V(this,this.options.touchAction),ja(this,!0),g(this.options.recognizers,function(a){var b=this.add(new a[0](a[1]));a[2]&&b.recognizeWith(a[2]),a[3]&&b.requireFailure(a[3])},this)}function ja(a,b){var c=a.element;if(c.style){var d;g(a.options.cssProps,function(e,f){d=u(c.style,f),b?(a.oldCssProps[d]=c.style[d],c.style[d]=e):c.style[d]=a.oldCssProps[d]||""}),b||(a.oldCssProps={})}}function ka(a,c){var d=b.createEvent("Event");d.initEvent(a,!0,!0),d.gesture=c,c.target.dispatchEvent(d)}var la,ma=["","webkit","Moz","MS","ms","o"],na=b.createElement("div"),oa="function",pa=Math.round,qa=Math.abs,ra=Date.now;la="function"!=typeof Object.assign?function(a){if(a===d||null===a)throw new TypeError("Cannot convert undefined or null to object");for(var b=Object(a),c=1;c<arguments.length;c++){var e=arguments[c];if(e!==d&&null!==e)for(var f in e)e.hasOwnProperty(f)&&(b[f]=e[f])}return b}:Object.assign;var sa=h(function(a,b,c){for(var e=Object.keys(b),f=0;f<e.length;)(!c||c&&a[e[f]]===d)&&(a[e[f]]=b[e[f]]),f++;return a},"extend","Use `assign`."),ta=h(function(a,b){return sa(a,b,!0)},"merge","Use `assign`."),ua=1,va=/mobile|tablet|ip(ad|hone|od)|android/i,wa="ontouchstart"in a,xa=u(a,"PointerEvent")!==d,ya=wa&&va.test(navigator.userAgent),za="touch",Aa="pen",Ba="mouse",Ca="kinect",Da=25,Ea=1,Fa=2,Ga=4,Ha=8,Ia=1,Ja=2,Ka=4,La=8,Ma=16,Na=Ja|Ka,Oa=La|Ma,Pa=Na|Oa,Qa=["x","y"],Ra=["clientX","clientY"];x.prototype={handler:function(){},init:function(){this.evEl&&m(this.element,this.evEl,this.domHandler),this.evTarget&&m(this.target,this.evTarget,this.domHandler),this.evWin&&m(w(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&n(this.element,this.evEl,this.domHandler),this.evTarget&&n(this.target,this.evTarget,this.domHandler),this.evWin&&n(w(this.element),this.evWin,this.domHandler)}};var Sa={mousedown:Ea,mousemove:Fa,mouseup:Ga},Ta="mousedown",Ua="mousemove mouseup";i(L,x,{handler:function(a){var b=Sa[a.type];b&Ea&&0===a.button&&(this.pressed=!0),b&Fa&&1!==a.which&&(b=Ga),this.pressed&&(b&Ga&&(this.pressed=!1),this.callback(this.manager,b,{pointers:[a],changedPointers:[a],pointerType:Ba,srcEvent:a}))}});var Va={pointerdown:Ea,pointermove:Fa,pointerup:Ga,pointercancel:Ha,pointerout:Ha},Wa={2:za,3:Aa,4:Ba,5:Ca},Xa="pointerdown",Ya="pointermove pointerup pointercancel";a.MSPointerEvent&&!a.PointerEvent&&(Xa="MSPointerDown",Ya="MSPointerMove MSPointerUp MSPointerCancel"),i(M,x,{handler:function(a){var b=this.store,c=!1,d=a.type.toLowerCase().replace("ms",""),e=Va[d],f=Wa[a.pointerType]||a.pointerType,g=f==za,h=r(b,a.pointerId,"pointerId");e&Ea&&(0===a.button||g)?0>h&&(b.push(a),h=b.length-1):e&(Ga|Ha)&&(c=!0),0>h||(b[h]=a,this.callback(this.manager,e,{pointers:b,changedPointers:[a],pointerType:f,srcEvent:a}),c&&b.splice(h,1))}});var Za={touchstart:Ea,touchmove:Fa,touchend:Ga,touchcancel:Ha},$a="touchstart",_a="touchstart touchmove touchend touchcancel";i(N,x,{handler:function(a){var b=Za[a.type];if(b===Ea&&(this.started=!0),this.started){var c=O.call(this,a,b);b&(Ga|Ha)&&c[0].length-c[1].length===0&&(this.started=!1),this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:za,srcEvent:a})}}});var ab={touchstart:Ea,touchmove:Fa,touchend:Ga,touchcancel:Ha},bb="touchstart touchmove touchend touchcancel";i(P,x,{handler:function(a){var b=ab[a.type],c=Q.call(this,a,b);c&&this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:za,srcEvent:a})}});var cb=2500,db=25;i(R,x,{handler:function(a,b,c){var d=c.pointerType==za,e=c.pointerType==Ba;if(!(e&&c.sourceCapabilities&&c.sourceCapabilities.firesTouchEvents)){if(d)S.call(this,b,c);else if(e&&U.call(this,c))return;this.callback(a,b,c)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var eb=u(na.style,"touchAction"),fb=eb!==d,gb="compute",hb="auto",ib="manipulation",jb="none",kb="pan-x",lb="pan-y",mb=X();V.prototype={set:function(a){a==gb&&(a=this.compute()),fb&&this.manager.element.style&&mb[a]&&(this.manager.element.style[eb]=a),this.actions=a.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var a=[];return g(this.manager.recognizers,function(b){k(b.options.enable,[b])&&(a=a.concat(b.getTouchAction()))}),W(a.join(" "))},preventDefaults:function(a){var b=a.srcEvent,c=a.offsetDirection;if(this.manager.session.prevented)return void b.preventDefault();var d=this.actions,e=p(d,jb)&&!mb[jb],f=p(d,lb)&&!mb[lb],g=p(d,kb)&&!mb[kb];if(e){var h=1===a.pointers.length,i=a.distance<2,j=a.deltaTime<250;if(h&&i&&j)return}return g&&f?void 0:e||f&&c&Na||g&&c&Oa?this.preventSrc(b):void 0},preventSrc:function(a){this.manager.session.prevented=!0,a.preventDefault()}};var nb=1,ob=2,pb=4,qb=8,rb=qb,sb=16,tb=32;Y.prototype={defaults:{},set:function(a){return la(this.options,a),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(a){if(f(a,"recognizeWith",this))return this;var b=this.simultaneous;return a=_(a,this),b[a.id]||(b[a.id]=a,a.recognizeWith(this)),this},dropRecognizeWith:function(a){return f(a,"dropRecognizeWith",this)?this:(a=_(a,this),delete this.simultaneous[a.id],this)},requireFailure:function(a){if(f(a,"requireFailure",this))return this;var b=this.requireFail;return a=_(a,this),-1===r(b,a)&&(b.push(a),a.requireFailure(this)),this},dropRequireFailure:function(a){if(f(a,"dropRequireFailure",this))return this;a=_(a,this);var b=r(this.requireFail,a);return b>-1&&this.requireFail.splice(b,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(a){return!!this.simultaneous[a.id]},emit:function(a){function b(b){c.manager.emit(b,a)}var c=this,d=this.state;qb>d&&b(c.options.event+Z(d)),b(c.options.event),a.additionalEvent&&b(a.additionalEvent),d>=qb&&b(c.options.event+Z(d))},tryEmit:function(a){return this.canEmit()?this.emit(a):void(this.state=tb)},canEmit:function(){for(var a=0;a<this.requireFail.length;){if(!(this.requireFail[a].state&(tb|nb)))return!1;a++}return!0},recognize:function(a){var b=la({},a);return k(this.options.enable,[this,b])?(this.state&(rb|sb|tb)&&(this.state=nb),this.state=this.process(b),void(this.state&(ob|pb|qb|sb)&&this.tryEmit(b))):(this.reset(),void(this.state=tb))},process:function(a){},getTouchAction:function(){},reset:function(){}},i(aa,Y,{defaults:{pointers:1},attrTest:function(a){var b=this.options.pointers;return 0===b||a.pointers.length===b},process:function(a){var b=this.state,c=a.eventType,d=b&(ob|pb),e=this.attrTest(a);return d&&(c&Ha||!e)?b|sb:d||e?c&Ga?b|qb:b&ob?b|pb:ob:tb}}),i(ba,aa,{defaults:{event:"pan",threshold:10,pointers:1,direction:Pa},getTouchAction:function(){var a=this.options.direction,b=[];return a&Na&&b.push(lb),a&Oa&&b.push(kb),b},directionTest:function(a){var b=this.options,c=!0,d=a.distance,e=a.direction,f=a.deltaX,g=a.deltaY;return e&b.direction||(b.direction&Na?(e=0===f?Ia:0>f?Ja:Ka,c=f!=this.pX,d=Math.abs(a.deltaX)):(e=0===g?Ia:0>g?La:Ma,c=g!=this.pY,d=Math.abs(a.deltaY))),a.direction=e,c&&d>b.threshold&&e&b.direction},attrTest:function(a){return aa.prototype.attrTest.call(this,a)&&(this.state&ob||!(this.state&ob)&&this.directionTest(a))},emit:function(a){this.pX=a.deltaX,this.pY=a.deltaY;var b=$(a.direction);b&&(a.additionalEvent=this.options.event+b),this._super.emit.call(this,a)}}),i(ca,aa,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[jb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.scale-1)>this.options.threshold||this.state&ob)},emit:function(a){if(1!==a.scale){var b=a.scale<1?"in":"out";a.additionalEvent=this.options.event+b}this._super.emit.call(this,a)}}),i(da,Y,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[hb]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime>b.time;if(this._input=a,!d||!c||a.eventType&(Ga|Ha)&&!f)this.reset();else if(a.eventType&Ea)this.reset(),this._timer=e(function(){this.state=rb,this.tryEmit()},b.time,this);else if(a.eventType&Ga)return rb;return tb},reset:function(){clearTimeout(this._timer)},emit:function(a){this.state===rb&&(a&&a.eventType&Ga?this.manager.emit(this.options.event+"up",a):(this._input.timeStamp=ra(),this.manager.emit(this.options.event,this._input)))}}),i(ea,aa,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[jb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.rotation)>this.options.threshold||this.state&ob)}}),i(fa,aa,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:Na|Oa,pointers:1},getTouchAction:function(){return ba.prototype.getTouchAction.call(this)},attrTest:function(a){var b,c=this.options.direction;return c&(Na|Oa)?b=a.overallVelocity:c&Na?b=a.overallVelocityX:c&Oa&&(b=a.overallVelocityY),this._super.attrTest.call(this,a)&&c&a.offsetDirection&&a.distance>this.options.threshold&&a.maxPointers==this.options.pointers&&qa(b)>this.options.velocity&&a.eventType&Ga},emit:function(a){var b=$(a.offsetDirection);b&&this.manager.emit(this.options.event+b,a),this.manager.emit(this.options.event,a)}}),i(ga,Y,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[ib]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime<b.time;if(this.reset(),a.eventType&Ea&&0===this.count)return this.failTimeout();if(d&&f&&c){if(a.eventType!=Ga)return this.failTimeout();var g=this.pTime?a.timeStamp-this.pTime<b.interval:!0,h=!this.pCenter||H(this.pCenter,a.center)<b.posThreshold;this.pTime=a.timeStamp,this.pCenter=a.center,h&&g?this.count+=1:this.count=1,this._input=a;var i=this.count%b.taps;if(0===i)return this.hasRequireFailures()?(this._timer=e(function(){this.state=rb,this.tryEmit()},b.interval,this),ob):rb}return tb},failTimeout:function(){return this._timer=e(function(){this.state=tb},this.options.interval,this),tb},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==rb&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),ha.VERSION="2.0.8",ha.defaults={domEvents:!1,touchAction:gb,enable:!0,inputTarget:null,inputClass:null,preset:[[ea,{enable:!1}],[ca,{enable:!1},["rotate"]],[fa,{direction:Na}],[ba,{direction:Na},["swipe"]],[ga],[ga,{event:"doubletap",taps:2},["tap"]],[da]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var ub=1,vb=2;ia.prototype={set:function(a){return la(this.options,a),a.touchAction&&this.touchAction.update(),a.inputTarget&&(this.input.destroy(),this.input.target=a.inputTarget,this.input.init()),this},stop:function(a){this.session.stopped=a?vb:ub},recognize:function(a){var b=this.session;if(!b.stopped){this.touchAction.preventDefaults(a);var c,d=this.recognizers,e=b.curRecognizer;(!e||e&&e.state&rb)&&(e=b.curRecognizer=null);for(var f=0;f<d.length;)c=d[f],b.stopped===vb||e&&c!=e&&!c.canRecognizeWith(e)?c.reset():c.recognize(a),!e&&c.state&(ob|pb|qb)&&(e=b.curRecognizer=c),f++}},get:function(a){if(a instanceof Y)return a;for(var b=this.recognizers,c=0;c<b.length;c++)if(b[c].options.event==a)return b[c];return null},add:function(a){if(f(a,"add",this))return this;var b=this.get(a.options.event);return b&&this.remove(b),this.recognizers.push(a),a.manager=this,this.touchAction.update(),a},remove:function(a){if(f(a,"remove",this))return this;if(a=this.get(a)){var b=this.recognizers,c=r(b,a);-1!==c&&(b.splice(c,1),this.touchAction.update())}return this},on:function(a,b){if(a!==d&&b!==d){var c=this.handlers;return g(q(a),function(a){c[a]=c[a]||[],c[a].push(b)}),this}},off:function(a,b){if(a!==d){var c=this.handlers;return g(q(a),function(a){b?c[a]&&c[a].splice(r(c[a],b),1):delete c[a]}),this}},emit:function(a,b){this.options.domEvents&&ka(a,b);var c=this.handlers[a]&&this.handlers[a].slice();if(c&&c.length){b.type=a,b.preventDefault=function(){b.srcEvent.preventDefault()};for(var d=0;d<c.length;)c[d](b),d++}},destroy:function(){this.element&&ja(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},la(ha,{INPUT_START:Ea,INPUT_MOVE:Fa,INPUT_END:Ga,INPUT_CANCEL:Ha,STATE_POSSIBLE:nb,STATE_BEGAN:ob,STATE_CHANGED:pb,STATE_ENDED:qb,STATE_RECOGNIZED:rb,STATE_CANCELLED:sb,STATE_FAILED:tb,DIRECTION_NONE:Ia,DIRECTION_LEFT:Ja,DIRECTION_RIGHT:Ka,DIRECTION_UP:La,DIRECTION_DOWN:Ma,DIRECTION_HORIZONTAL:Na,DIRECTION_VERTICAL:Oa,DIRECTION_ALL:Pa,Manager:ia,Input:x,TouchAction:V,TouchInput:P,MouseInput:L,PointerEventInput:M,TouchMouseInput:R,SingleTouchInput:N,Recognizer:Y,AttrRecognizer:aa,Tap:ga,Pan:ba,Swipe:fa,Pinch:ca,Rotate:ea,Press:da,on:m,off:n,each:g,merge:ta,extend:sa,assign:la,inherit:i,bindFn:j,prefixed:u});var wb="undefined"!=typeof a?a:"undefined"!=typeof self?self:{};wb.Hammer=ha,"function"==typeof define&&define.amd?define(function(){return ha}):"undefined"!=typeof module&&module.exports?module.exports=ha:a[c]=ha}(window,document,"Hammer");
//# sourceMappingURL=hammer.min.js.map
(function(factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery', 'hammerjs'], factory);
    } else if (typeof exports === 'object') {
        factory(require('jquery'), require('hammerjs'));
    } else {
        factory(jQuery, Hammer);
    }
}(function($, Hammer) {
    function hammerify(el, options) {
        var $el = $(el);
        if(!$el.data("hammer")) {
            $el.data("hammer", new Hammer($el[0], options));
        }
    }

    $.fn.hammer = function(options) {
        return this.each(function() {
            hammerify(this, options);
        });
    };

    // extend the emit method to also trigger jQuery events
    Hammer.Manager.prototype.emit = (function(originalEmit) {
        return function(type, data) {
            originalEmit.call(this, type, data);
            $(this.element).trigger({
                type: type,
                gesture: data
            });
        };
    })(Hammer.Manager.prototype.emit);
}));

/** @license
 *
 * SoundManager 2: JavaScript Sound for the Web
 * ----------------------------------------------
 * http://schillmania.com/projects/soundmanager2/
 *
 * Copyright (c) 2007, Scott Schiller. All rights reserved.
 * Code provided under the BSD License:
 * http://schillmania.com/projects/soundmanager2/license.txt
 *
 * V2.97a.20150601
 */
(function(h,g){function w(gb,w){function Z(b){return c.preferFlash&&A&&!c.ignoreFlash&&c.flash[b]!==g&&c.flash[b]}function r(b){return function(c){var d=this._s;return d&&d._a?b.call(this,c):null}}this.setupOptions={url:gb||null,flashVersion:8,debugMode:!0,debugFlash:!1,useConsole:!0,consoleOnly:!0,waitForWindowLoad:!1,bgColor:"#ffffff",useHighPerformance:!1,flashPollingInterval:null,html5PollingInterval:null,flashLoadTimeout:1E3,wmode:null,allowScriptAccess:"always",useFlashBlock:!1,useHTML5Audio:!0,
forceUseGlobalHTML5Audio:!1,ignoreMobileRestrictions:!1,html5Test:/^(probably|maybe)$/i,preferFlash:!1,noSWFCache:!1,idPrefix:"sound"};this.defaultOptions={autoLoad:!1,autoPlay:!1,from:null,loops:1,onid3:null,onload:null,whileloading:null,onplay:null,onpause:null,onresume:null,whileplaying:null,onposition:null,onstop:null,onfailure:null,onfinish:null,multiShot:!0,multiShotEvents:!1,position:null,pan:0,stream:!0,to:null,type:null,usePolicyFile:!1,volume:100};this.flash9Options={isMovieStar:null,usePeakData:!1,
useWaveformData:!1,useEQData:!1,onbufferchange:null,ondataerror:null};this.movieStarOptions={bufferTime:3,serverURL:null,onconnect:null,duration:null};this.audioFormats={mp3:{type:['audio/mpeg; codecs="mp3"',"audio/mpeg","audio/mp3","audio/MPA","audio/mpa-robust"],required:!0},mp4:{related:["aac","m4a","m4b"],type:['audio/mp4; codecs="mp4a.40.2"',"audio/aac","audio/x-m4a","audio/MP4A-LATM","audio/mpeg4-generic"],required:!1},ogg:{type:["audio/ogg; codecs=vorbis"],required:!1},opus:{type:["audio/ogg; codecs=opus",
"audio/opus"],required:!1},wav:{type:['audio/wav; codecs="1"',"audio/wav","audio/wave","audio/x-wav"],required:!1}};this.movieID="sm2-container";this.id=w||"sm2movie";this.debugID="soundmanager-debug";this.debugURLParam=/([#?&])debug=1/i;this.versionNumber="V2.97a.20150601";this.altURL=this.movieURL=this.version=null;this.enabled=this.swfLoaded=!1;this.oMC=null;this.sounds={};this.soundIDs=[];this.didFlashBlock=this.muted=!1;this.filePattern=null;this.filePatterns={flash8:/\.mp3(\?.*)?$/i,flash9:/\.mp3(\?.*)?$/i};
this.features={buffering:!1,peakData:!1,waveformData:!1,eqData:!1,movieStar:!1};this.sandbox={};this.html5={usingFlash:null};this.flash={};this.ignoreFlash=this.html5Only=!1;var N,c=this,Oa=null,k=null,aa,u=navigator.userAgent,Pa=h.location.href.toString(),p=document,pa,Qa,qa,m,y=[],O=!1,P=!1,l=!1,B=!1,ra=!1,Q,x,sa,ba,ta,F,H,I,Ra,ua,va,ca,J,da,G,wa,R,xa,ea,K,Sa,ya,Ta,za,Ua,S=null,Aa=null,T,Ba,L,fa,ga,q,U=!1,Ca=!1,Va,Wa,Xa,ha=0,V=null,ia,W=[],X,v=null,Ya,ja,Y,D,ka,Da,Za,t,hb=Array.prototype.slice,
z=!1,Ea,A,Fa,$a,C,la,ab=0,Ga,Ha=u.match(/(ipad|iphone|ipod)/i),Ia=u.match(/android/i),E=u.match(/msie/i),ib=u.match(/webkit/i),ma=u.match(/safari/i)&&!u.match(/chrome/i),Ja=u.match(/opera/i),na=u.match(/(mobile|pre\/|xoom)/i)||Ha||Ia,bb=!Pa.match(/usehtml5audio/i)&&!Pa.match(/sm2\-ignorebadua/i)&&ma&&!u.match(/silk/i)&&u.match(/OS X 10_6_([3-7])/i),Ka=p.hasFocus!==g?p.hasFocus():null,oa=ma&&(p.hasFocus===g||!p.hasFocus()),cb=!oa,db=/(mp3|mp4|mpa|m4a|m4b)/i,La=p.location?p.location.protocol.match(/http/i):
null,jb=La?"":"http://",eb=/^\s*audio\/(?:x-)?(?:mpeg4|aac|flv|mov|mp4||m4v|m4a|m4b|mp4v|3gp|3g2)\s*(?:$|;)/i,fb="mpeg4 aac flv mov mp4 m4v f4v m4a m4b mp4v 3gp 3g2".split(" "),kb=new RegExp("\\.("+fb.join("|")+")(\\?.*)?$","i");this.mimePattern=/^\s*audio\/(?:x-)?(?:mp(?:eg|3))\s*(?:$|;)/i;this.useAltURL=!La;var Ma;try{Ma=Audio!==g&&(Ja&&opera!==g&&10>opera.version()?new Audio(null):new Audio).canPlayType!==g}catch(lb){Ma=!1}this.hasHTML5=Ma;this.setup=function(b){var e=!c.url;b!==g&&l&&v&&c.ok();
sa(b);if(!z)if(na){if(!c.setupOptions.ignoreMobileRestrictions||c.setupOptions.forceUseGlobalHTML5Audio)W.push(J.globalHTML5),z=!0}else c.setupOptions.forceUseGlobalHTML5Audio&&(W.push(J.globalHTML5),z=!0);if(!Ga&&na)if(c.setupOptions.ignoreMobileRestrictions)W.push(J.ignoreMobile);else if(c.setupOptions.useHTML5Audio=!0,c.setupOptions.preferFlash=!1,Ha)c.ignoreFlash=!0;else if(Ia&&!u.match(/android\s2\.3/i)||!Ia)z=!0;b&&(e&&R&&b.url!==g&&c.beginDelayedInit(),R||b.url===g||"complete"!==p.readyState||
setTimeout(G,1));Ga=!0;return c};this.supported=this.ok=function(){return v?l&&!B:c.useHTML5Audio&&c.hasHTML5};this.getMovie=function(b){return aa(b)||p[b]||h[b]};this.createSound=function(b,e){function d(){a=fa(a);c.sounds[a.id]=new N(a);c.soundIDs.push(a.id);return c.sounds[a.id]}var a,f=null;if(!l||!c.ok())return!1;e!==g&&(b={id:b,url:e});a=x(b);a.url=ia(a.url);a.id===g&&(a.id=c.setupOptions.idPrefix+ab++);if(q(a.id,!0))return c.sounds[a.id];if(ja(a))f=d(),f._setup_html5(a);else{if(c.html5Only||
c.html5.usingFlash&&a.url&&a.url.match(/data\:/i))return d();8<m&&null===a.isMovieStar&&(a.isMovieStar=!!(a.serverURL||a.type&&a.type.match(eb)||a.url&&a.url.match(kb)));a=ga(a,void 0);f=d();8===m?k._createSound(a.id,a.loops||1,a.usePolicyFile):(k._createSound(a.id,a.url,a.usePeakData,a.useWaveformData,a.useEQData,a.isMovieStar,a.isMovieStar?a.bufferTime:!1,a.loops||1,a.serverURL,a.duration||null,a.autoPlay,!0,a.autoLoad,a.usePolicyFile),a.serverURL||(f.connected=!0,a.onconnect&&a.onconnect.apply(f)));
a.serverURL||!a.autoLoad&&!a.autoPlay||f.load(a)}!a.serverURL&&a.autoPlay&&f.play();return f};this.destroySound=function(b,e){if(!q(b))return!1;var d=c.sounds[b],a;d.stop();d._iO={};d.unload();for(a=0;a<c.soundIDs.length;a++)if(c.soundIDs[a]===b){c.soundIDs.splice(a,1);break}e||d.destruct(!0);delete c.sounds[b];return!0};this.load=function(b,e){return q(b)?c.sounds[b].load(e):!1};this.unload=function(b){return q(b)?c.sounds[b].unload():!1};this.onposition=this.onPosition=function(b,e,d,a){return q(b)?
c.sounds[b].onposition(e,d,a):!1};this.clearOnPosition=function(b,e,d){return q(b)?c.sounds[b].clearOnPosition(e,d):!1};this.start=this.play=function(b,e){var d=null,a=e&&!(e instanceof Object);if(!l||!c.ok())return!1;if(q(b,a))a&&(e={url:e});else{if(!a)return!1;a&&(e={url:e});e&&e.url&&(e.id=b,d=c.createSound(e).play())}null===d&&(d=c.sounds[b].play(e));return d};this.setPosition=function(b,e){return q(b)?c.sounds[b].setPosition(e):!1};this.stop=function(b){return q(b)?c.sounds[b].stop():!1};this.stopAll=
function(){for(var b in c.sounds)c.sounds.hasOwnProperty(b)&&c.sounds[b].stop()};this.pause=function(b){return q(b)?c.sounds[b].pause():!1};this.pauseAll=function(){var b;for(b=c.soundIDs.length-1;0<=b;b--)c.sounds[c.soundIDs[b]].pause()};this.resume=function(b){return q(b)?c.sounds[b].resume():!1};this.resumeAll=function(){var b;for(b=c.soundIDs.length-1;0<=b;b--)c.sounds[c.soundIDs[b]].resume()};this.togglePause=function(b){return q(b)?c.sounds[b].togglePause():!1};this.setPan=function(b,e){return q(b)?
c.sounds[b].setPan(e):!1};this.setVolume=function(b,e){var d,a;if(b===g||isNaN(b)||e!==g)return q(b)?c.sounds[b].setVolume(e):!1;d=0;for(a=c.soundIDs.length;d<a;d++)c.sounds[c.soundIDs[d]].setVolume(b)};this.mute=function(b){var e=0;b instanceof String&&(b=null);if(b)return q(b)?c.sounds[b].mute():!1;for(e=c.soundIDs.length-1;0<=e;e--)c.sounds[c.soundIDs[e]].mute();return c.muted=!0};this.muteAll=function(){c.mute()};this.unmute=function(b){b instanceof String&&(b=null);if(b)return q(b)?c.sounds[b].unmute():
!1;for(b=c.soundIDs.length-1;0<=b;b--)c.sounds[c.soundIDs[b]].unmute();c.muted=!1;return!0};this.unmuteAll=function(){c.unmute()};this.toggleMute=function(b){return q(b)?c.sounds[b].toggleMute():!1};this.getMemoryUse=function(){var b=0;k&&8!==m&&(b=parseInt(k._getMemoryUse(),10));return b};this.disable=function(b){var e;b===g&&(b=!1);if(B)return!1;B=!0;for(e=c.soundIDs.length-1;0<=e;e--)Ta(c.sounds[c.soundIDs[e]]);Q(b);t.remove(h,"load",H);return!0};this.canPlayMIME=function(b){var e;c.hasHTML5&&
(e=Y({type:b}));!e&&v&&(e=b&&c.ok()?!!(8<m&&b.match(eb)||b.match(c.mimePattern)):null);return e};this.canPlayURL=function(b){var e;c.hasHTML5&&(e=Y({url:b}));!e&&v&&(e=b&&c.ok()?!!b.match(c.filePattern):null);return e};this.canPlayLink=function(b){return b.type!==g&&b.type&&c.canPlayMIME(b.type)?!0:c.canPlayURL(b.href)};this.getSoundById=function(b,e){return b?c.sounds[b]:null};this.onready=function(b,c){if("function"===typeof b)c||(c=h),ta("onready",b,c),F();else throw T("needFunction","onready");
return!0};this.ontimeout=function(b,c){if("function"===typeof b)c||(c=h),ta("ontimeout",b,c),F({type:"ontimeout"});else throw T("needFunction","ontimeout");return!0};this._wD=this._writeDebug=function(b,c){return!0};this._debug=function(){};this.reboot=function(b,e){var d,a,f;for(d=c.soundIDs.length-1;0<=d;d--)c.sounds[c.soundIDs[d]].destruct();if(k)try{E&&(Aa=k.innerHTML),S=k.parentNode.removeChild(k)}catch(g){}Aa=S=v=k=null;c.enabled=R=l=U=Ca=O=P=B=z=c.swfLoaded=!1;c.soundIDs=[];c.sounds={};ab=
0;Ga=!1;if(b)y=[];else for(d in y)if(y.hasOwnProperty(d))for(a=0,f=y[d].length;a<f;a++)y[d][a].fired=!1;c.html5={usingFlash:null};c.flash={};c.html5Only=!1;c.ignoreFlash=!1;h.setTimeout(function(){e||c.beginDelayedInit()},20);return c};this.reset=function(){return c.reboot(!0,!0)};this.getMoviePercent=function(){return k&&"PercentLoaded"in k?k.PercentLoaded():null};this.beginDelayedInit=function(){ra=!0;G();setTimeout(function(){if(Ca)return!1;ea();da();return Ca=!0},20);I()};this.destruct=function(){c.disable(!0)};
N=function(b){var e,d,a=this,f,n,h,M,p,r,u=!1,l=[],v=0,y,B,w=null,A;d=e=null;this.sID=this.id=b.id;this.url=b.url;this._iO=this.instanceOptions=this.options=x(b);this.pan=this.options.pan;this.volume=this.options.volume;this.isHTML5=!1;this._a=null;A=this.url?!1:!0;this.id3={};this._debug=function(){};this.load=function(b){var e=null,d;b!==g?a._iO=x(b,a.options):(b=a.options,a._iO=b,w&&w!==a.url&&(a._iO.url=a.url,a.url=null));a._iO.url||(a._iO.url=a.url);a._iO.url=ia(a._iO.url);d=a.instanceOptions=
a._iO;if(!d.url&&!a.url)return a;if(d.url===a.url&&0!==a.readyState&&2!==a.readyState)return 3===a.readyState&&d.onload&&la(a,function(){d.onload.apply(a,[!!a.duration])}),a;a.loaded=!1;a.readyState=1;a.playState=0;a.id3={};if(ja(d))e=a._setup_html5(d),e._called_load||(a._html5_canplay=!1,a.url!==d.url&&(a._a.src=d.url,a.setPosition(0)),a._a.autobuffer="auto",a._a.preload="auto",a._a._called_load=!0);else{if(c.html5Only||a._iO.url&&a._iO.url.match(/data\:/i))return a;try{a.isHTML5=!1,a._iO=ga(fa(d)),
a._iO.autoPlay&&(a._iO.position||a._iO.from)&&(a._iO.autoPlay=!1),d=a._iO,8===m?k._load(a.id,d.url,d.stream,d.autoPlay,d.usePolicyFile):k._load(a.id,d.url,!!d.stream,!!d.autoPlay,d.loops||1,!!d.autoLoad,d.usePolicyFile)}catch(f){K({type:"SMSOUND_LOAD_JS_EXCEPTION",fatal:!0})}}a.url=d.url;return a};this.unload=function(){0!==a.readyState&&(a.isHTML5?(M(),a._a&&(a._a.pause(),w=ka(a._a))):8===m?k._unload(a.id,"about:blank"):k._unload(a.id),f());return a};this.destruct=function(b){a.isHTML5?(M(),a._a&&
(a._a.pause(),ka(a._a),z||h(),a._a._s=null,a._a=null)):(a._iO.onfailure=null,k._destroySound(a.id));b||c.destroySound(a.id,!0)};this.start=this.play=function(b,e){var d,f,n,h,Na;f=!0;f=null;e=e===g?!0:e;b||(b={});a.url&&(a._iO.url=a.url);a._iO=x(a._iO,a.options);a._iO=x(b,a._iO);a._iO.url=ia(a._iO.url);a.instanceOptions=a._iO;if(!a.isHTML5&&a._iO.serverURL&&!a.connected)return a.getAutoPlay()||a.setAutoPlay(!0),a;ja(a._iO)&&(a._setup_html5(a._iO),p());1!==a.playState||a.paused||(d=a._iO.multiShot,
d||(a.isHTML5&&a.setPosition(a._iO.position),f=a));if(null!==f)return f;b.url&&b.url!==a.url&&(a.readyState||a.isHTML5||8!==m||!A?a.load(a._iO):A=!1);a.loaded||(0===a.readyState?(a.isHTML5||c.html5Only?a.isHTML5?a.load(a._iO):f=a:(a._iO.autoPlay=!0,a.load(a._iO)),a.instanceOptions=a._iO):2===a.readyState&&(f=a));if(null!==f)return f;!a.isHTML5&&9===m&&0<a.position&&a.position===a.duration&&(b.position=0);if(a.paused&&0<=a.position&&(!a._iO.serverURL||0<a.position))a.resume();else{a._iO=x(b,a._iO);
if((!a.isHTML5&&null!==a._iO.position&&0<a._iO.position||null!==a._iO.from&&0<a._iO.from||null!==a._iO.to)&&0===a.instanceCount&&0===a.playState&&!a._iO.serverURL){d=function(){a._iO=x(b,a._iO);a.play(a._iO)};a.isHTML5&&!a._html5_canplay?(a.load({_oncanplay:d}),f=!1):a.isHTML5||a.loaded||a.readyState&&2===a.readyState||(a.load({onload:d}),f=!1);if(null!==f)return f;a._iO=B()}(!a.instanceCount||a._iO.multiShotEvents||a.isHTML5&&a._iO.multiShot&&!z||!a.isHTML5&&8<m&&!a.getAutoPlay())&&a.instanceCount++;
a._iO.onposition&&0===a.playState&&r(a);a.playState=1;a.paused=!1;a.position=a._iO.position===g||isNaN(a._iO.position)?0:a._iO.position;a.isHTML5||(a._iO=ga(fa(a._iO)));a._iO.onplay&&e&&(a._iO.onplay.apply(a),u=!0);a.setVolume(a._iO.volume,!0);a.setPan(a._iO.pan,!0);a.isHTML5?2>a.instanceCount?(p(),f=a._setup_html5(),a.setPosition(a._iO.position),f.play()):(n=new Audio(a._iO.url),h=function(){t.remove(n,"ended",h);a._onfinish(a);ka(n);n=null},Na=function(){t.remove(n,"canplay",Na);try{n.currentTime=
a._iO.position/1E3}catch(b){}n.play()},t.add(n,"ended",h),a._iO.volume!==g&&(n.volume=Math.max(0,Math.min(1,a._iO.volume/100))),a.muted&&(n.muted=!0),a._iO.position?t.add(n,"canplay",Na):n.play()):(f=k._start(a.id,a._iO.loops||1,9===m?a.position:a.position/1E3,a._iO.multiShot||!1),9!==m||f||a._iO.onplayerror&&a._iO.onplayerror.apply(a))}return a};this.stop=function(b){var c=a._iO;1===a.playState&&(a._onbufferchange(0),a._resetOnPosition(0),a.paused=!1,a.isHTML5||(a.playState=0),y(),c.to&&a.clearOnPosition(c.to),
a.isHTML5?a._a&&(b=a.position,a.setPosition(0),a.position=b,a._a.pause(),a.playState=0,a._onTimer(),M()):(k._stop(a.id,b),c.serverURL&&a.unload()),a.instanceCount=0,a._iO={},c.onstop&&c.onstop.apply(a));return a};this.setAutoPlay=function(b){a._iO.autoPlay=b;a.isHTML5||(k._setAutoPlay(a.id,b),b&&(a.instanceCount||1!==a.readyState||a.instanceCount++))};this.getAutoPlay=function(){return a._iO.autoPlay};this.setPosition=function(b){b===g&&(b=0);var c=a.isHTML5?Math.max(b,0):Math.min(a.duration||a._iO.duration,
Math.max(b,0));a.position=c;b=a.position/1E3;a._resetOnPosition(a.position);a._iO.position=c;if(!a.isHTML5)b=9===m?a.position:b,a.readyState&&2!==a.readyState&&k._setPosition(a.id,b,a.paused||!a.playState,a._iO.multiShot);else if(a._a){if(a._html5_canplay){if(a._a.currentTime!==b)try{a._a.currentTime=b,(0===a.playState||a.paused)&&a._a.pause()}catch(e){}}else if(b)return a;a.paused&&a._onTimer(!0)}return a};this.pause=function(b){if(a.paused||0===a.playState&&1!==a.readyState)return a;a.paused=!0;
a.isHTML5?(a._setup_html5().pause(),M()):(b||b===g)&&k._pause(a.id,a._iO.multiShot);a._iO.onpause&&a._iO.onpause.apply(a);return a};this.resume=function(){var b=a._iO;if(!a.paused)return a;a.paused=!1;a.playState=1;a.isHTML5?(a._setup_html5().play(),p()):(b.isMovieStar&&!b.serverURL&&a.setPosition(a.position),k._pause(a.id,b.multiShot));!u&&b.onplay?(b.onplay.apply(a),u=!0):b.onresume&&b.onresume.apply(a);return a};this.togglePause=function(){if(0===a.playState)return a.play({position:9!==m||a.isHTML5?
a.position/1E3:a.position}),a;a.paused?a.resume():a.pause();return a};this.setPan=function(b,c){b===g&&(b=0);c===g&&(c=!1);a.isHTML5||k._setPan(a.id,b);a._iO.pan=b;c||(a.pan=b,a.options.pan=b);return a};this.setVolume=function(b,e){b===g&&(b=100);e===g&&(e=!1);a.isHTML5?a._a&&(c.muted&&!a.muted&&(a.muted=!0,a._a.muted=!0),a._a.volume=Math.max(0,Math.min(1,b/100))):k._setVolume(a.id,c.muted&&!a.muted||a.muted?0:b);a._iO.volume=b;e||(a.volume=b,a.options.volume=b);return a};this.mute=function(){a.muted=
!0;a.isHTML5?a._a&&(a._a.muted=!0):k._setVolume(a.id,0);return a};this.unmute=function(){a.muted=!1;var b=a._iO.volume!==g;a.isHTML5?a._a&&(a._a.muted=!1):k._setVolume(a.id,b?a._iO.volume:a.options.volume);return a};this.toggleMute=function(){return a.muted?a.unmute():a.mute()};this.onposition=this.onPosition=function(b,c,e){l.push({position:parseInt(b,10),method:c,scope:e!==g?e:a,fired:!1});return a};this.clearOnPosition=function(a,b){var c;a=parseInt(a,10);if(isNaN(a))return!1;for(c=0;c<l.length;c++)a!==
l[c].position||b&&b!==l[c].method||(l[c].fired&&v--,l.splice(c,1))};this._processOnPosition=function(){var b,c;b=l.length;if(!b||!a.playState||v>=b)return!1;for(--b;0<=b;b--)c=l[b],!c.fired&&a.position>=c.position&&(c.fired=!0,v++,c.method.apply(c.scope,[c.position]));return!0};this._resetOnPosition=function(a){var b,c;b=l.length;if(!b)return!1;for(--b;0<=b;b--)c=l[b],c.fired&&a<=c.position&&(c.fired=!1,v--);return!0};B=function(){var b=a._iO,c=b.from,e=b.to,d,f;f=function(){a.clearOnPosition(e,f);
a.stop()};d=function(){if(null!==e&&!isNaN(e))a.onPosition(e,f)};null===c||isNaN(c)||(b.position=c,b.multiShot=!1,d());return b};r=function(){var b,c=a._iO.onposition;if(c)for(b in c)if(c.hasOwnProperty(b))a.onPosition(parseInt(b,10),c[b])};y=function(){var b,c=a._iO.onposition;if(c)for(b in c)c.hasOwnProperty(b)&&a.clearOnPosition(parseInt(b,10))};p=function(){a.isHTML5&&Va(a)};M=function(){a.isHTML5&&Wa(a)};f=function(b){b||(l=[],v=0);u=!1;a._hasTimer=null;a._a=null;a._html5_canplay=!1;a.bytesLoaded=
null;a.bytesTotal=null;a.duration=a._iO&&a._iO.duration?a._iO.duration:null;a.durationEstimate=null;a.buffered=[];a.eqData=[];a.eqData.left=[];a.eqData.right=[];a.failures=0;a.isBuffering=!1;a.instanceOptions={};a.instanceCount=0;a.loaded=!1;a.metadata={};a.readyState=0;a.muted=!1;a.paused=!1;a.peakData={left:0,right:0};a.waveformData={left:[],right:[]};a.playState=0;a.position=null;a.id3={}};f();this._onTimer=function(b){var c,f=!1,g={};if(a._hasTimer||b)return a._a&&(b||(0<a.playState||1===a.readyState)&&
!a.paused)&&(c=a._get_html5_duration(),c!==e&&(e=c,a.duration=c,f=!0),a.durationEstimate=a.duration,c=1E3*a._a.currentTime||0,c!==d&&(d=c,f=!0),(f||b)&&a._whileplaying(c,g,g,g,g)),f};this._get_html5_duration=function(){var b=a._iO;return(b=a._a&&a._a.duration?1E3*a._a.duration:b&&b.duration?b.duration:null)&&!isNaN(b)&&Infinity!==b?b:null};this._apply_loop=function(a,b){a.loop=1<b?"loop":""};this._setup_html5=function(b){b=x(a._iO,b);var c=z?Oa:a._a,e=decodeURI(b.url),d;z?e===decodeURI(Ea)&&(d=!0):
e===decodeURI(w)&&(d=!0);if(c){if(c._s)if(z)c._s&&c._s.playState&&!d&&c._s.stop();else if(!z&&e===decodeURI(w))return a._apply_loop(c,b.loops),c;d||(w&&f(!1),c.src=b.url,Ea=w=a.url=b.url,c._called_load=!1)}else b.autoLoad||b.autoPlay?(a._a=new Audio(b.url),a._a.load()):a._a=Ja&&10>opera.version()?new Audio(null):new Audio,c=a._a,c._called_load=!1,z&&(Oa=c);a.isHTML5=!0;a._a=c;c._s=a;n();a._apply_loop(c,b.loops);b.autoLoad||b.autoPlay?a.load():(c.autobuffer=!1,c.preload="auto");return c};n=function(){if(a._a._added_events)return!1;
var b;a._a._added_events=!0;for(b in C)C.hasOwnProperty(b)&&a._a&&a._a.addEventListener(b,C[b],!1);return!0};h=function(){var b;a._a._added_events=!1;for(b in C)C.hasOwnProperty(b)&&a._a&&a._a.removeEventListener(b,C[b],!1)};this._onload=function(b){var c=!!b||!a.isHTML5&&8===m&&a.duration;a.loaded=c;a.readyState=c?3:2;a._onbufferchange(0);a._iO.onload&&la(a,function(){a._iO.onload.apply(a,[c])});return!0};this._onbufferchange=function(b){if(0===a.playState||b&&a.isBuffering||!b&&!a.isBuffering)return!1;
a.isBuffering=1===b;a._iO.onbufferchange&&a._iO.onbufferchange.apply(a,[b]);return!0};this._onsuspend=function(){a._iO.onsuspend&&a._iO.onsuspend.apply(a);return!0};this._onfailure=function(b,c,e){a.failures++;if(a._iO.onfailure&&1===a.failures)a._iO.onfailure(b,c,e)};this._onwarning=function(b,c,e){if(a._iO.onwarning)a._iO.onwarning(b,c,e)};this._onfinish=function(){var b=a._iO.onfinish;a._onbufferchange(0);a._resetOnPosition(0);a.instanceCount&&(a.instanceCount--,a.instanceCount||(y(),a.playState=
0,a.paused=!1,a.instanceCount=0,a.instanceOptions={},a._iO={},M(),a.isHTML5&&(a.position=0)),(!a.instanceCount||a._iO.multiShotEvents)&&b&&la(a,function(){b.apply(a)}))};this._whileloading=function(b,c,e,d){var f=a._iO;a.bytesLoaded=b;a.bytesTotal=c;a.duration=Math.floor(e);a.bufferLength=d;a.durationEstimate=a.isHTML5||f.isMovieStar?a.duration:f.duration?a.duration>f.duration?a.duration:f.duration:parseInt(a.bytesTotal/a.bytesLoaded*a.duration,10);a.isHTML5||(a.buffered=[{start:0,end:a.duration}]);
(3!==a.readyState||a.isHTML5)&&f.whileloading&&f.whileloading.apply(a)};this._whileplaying=function(b,c,e,d,f){var n=a._iO;if(isNaN(b)||null===b)return!1;a.position=Math.max(0,b);a._processOnPosition();!a.isHTML5&&8<m&&(n.usePeakData&&c!==g&&c&&(a.peakData={left:c.leftPeak,right:c.rightPeak}),n.useWaveformData&&e!==g&&e&&(a.waveformData={left:e.split(","),right:d.split(",")}),n.useEQData&&f!==g&&f&&f.leftEQ&&(b=f.leftEQ.split(","),a.eqData=b,a.eqData.left=b,f.rightEQ!==g&&f.rightEQ&&(a.eqData.right=
f.rightEQ.split(","))));1===a.playState&&(a.isHTML5||8!==m||a.position||!a.isBuffering||a._onbufferchange(0),n.whileplaying&&n.whileplaying.apply(a));return!0};this._oncaptiondata=function(b){a.captiondata=b;a._iO.oncaptiondata&&a._iO.oncaptiondata.apply(a,[b])};this._onmetadata=function(b,c){var e={},d,f;d=0;for(f=b.length;d<f;d++)e[b[d]]=c[d];a.metadata=e;a._iO.onmetadata&&a._iO.onmetadata.call(a,a.metadata)};this._onid3=function(b,c){var e=[],d,f;d=0;for(f=b.length;d<f;d++)e[b[d]]=c[d];a.id3=x(a.id3,
e);a._iO.onid3&&a._iO.onid3.apply(a)};this._onconnect=function(b){b=1===b;if(a.connected=b)a.failures=0,q(a.id)&&(a.getAutoPlay()?a.play(g,a.getAutoPlay()):a._iO.autoLoad&&a.load()),a._iO.onconnect&&a._iO.onconnect.apply(a,[b])};this._ondataerror=function(b){0<a.playState&&a._iO.ondataerror&&a._iO.ondataerror.apply(a)}};xa=function(){return p.body||p.getElementsByTagName("div")[0]};aa=function(b){return p.getElementById(b)};x=function(b,e){var d=b||{},a,f;a=e===g?c.defaultOptions:e;for(f in a)a.hasOwnProperty(f)&&
d[f]===g&&(d[f]="object"!==typeof a[f]||null===a[f]?a[f]:x(d[f],a[f]));return d};la=function(b,c){b.isHTML5||8!==m?c():h.setTimeout(c,0)};ba={onready:1,ontimeout:1,defaultOptions:1,flash9Options:1,movieStarOptions:1};sa=function(b,e){var d,a=!0,f=e!==g,n=c.setupOptions;for(d in b)if(b.hasOwnProperty(d))if("object"!==typeof b[d]||null===b[d]||b[d]instanceof Array||b[d]instanceof RegExp)f&&ba[e]!==g?c[e][d]=b[d]:n[d]!==g?(c.setupOptions[d]=b[d],c[d]=b[d]):ba[d]===g?a=!1:c[d]instanceof Function?c[d].apply(c,
b[d]instanceof Array?b[d]:[b[d]]):c[d]=b[d];else if(ba[d]===g)a=!1;else return sa(b[d],d);return a};t=function(){function b(a){a=hb.call(a);var b=a.length;d?(a[1]="on"+a[1],3<b&&a.pop()):3===b&&a.push(!1);return a}function c(b,e){var g=b.shift(),h=[a[e]];if(d)g[h](b[0],b[1]);else g[h].apply(g,b)}var d=h.attachEvent,a={add:d?"attachEvent":"addEventListener",remove:d?"detachEvent":"removeEventListener"};return{add:function(){c(b(arguments),"add")},remove:function(){c(b(arguments),"remove")}}}();C={abort:r(function(){}),
canplay:r(function(){var b=this._s,c;if(b._html5_canplay)return!0;b._html5_canplay=!0;b._onbufferchange(0);c=b._iO.position===g||isNaN(b._iO.position)?null:b._iO.position/1E3;if(this.currentTime!==c)try{this.currentTime=c}catch(d){}b._iO._oncanplay&&b._iO._oncanplay()}),canplaythrough:r(function(){var b=this._s;b.loaded||(b._onbufferchange(0),b._whileloading(b.bytesLoaded,b.bytesTotal,b._get_html5_duration()),b._onload(!0))}),durationchange:r(function(){var b=this._s,c;c=b._get_html5_duration();isNaN(c)||
c===b.duration||(b.durationEstimate=b.duration=c)}),ended:r(function(){this._s._onfinish()}),error:r(function(){this._s._onload(!1)}),loadeddata:r(function(){var b=this._s;b._loaded||ma||(b.duration=b._get_html5_duration())}),loadedmetadata:r(function(){}),loadstart:r(function(){this._s._onbufferchange(1)}),play:r(function(){this._s._onbufferchange(0)}),playing:r(function(){this._s._onbufferchange(0)}),progress:r(function(b){var c=this._s,d,a,f=0,f=b.target.buffered;d=b.loaded||0;var g=b.total||1;
c.buffered=[];if(f&&f.length){d=0;for(a=f.length;d<a;d++)c.buffered.push({start:1E3*f.start(d),end:1E3*f.end(d)});f=1E3*(f.end(0)-f.start(0));d=Math.min(1,f/(1E3*b.target.duration))}isNaN(d)||(c._whileloading(d,g,c._get_html5_duration()),d&&g&&d===g&&C.canplaythrough.call(this,b))}),ratechange:r(function(){}),suspend:r(function(b){var c=this._s;C.progress.call(this,b);c._onsuspend()}),stalled:r(function(){}),timeupdate:r(function(){this._s._onTimer()}),waiting:r(function(){this._s._onbufferchange(1)})};
ja=function(b){return b&&(b.type||b.url||b.serverURL)?b.serverURL||b.type&&Z(b.type)?!1:b.type?Y({type:b.type}):Y({url:b.url})||c.html5Only||b.url.match(/data\:/i):!1};ka=function(b){var e;b&&(e=ma?"about:blank":c.html5.canPlayType("audio/wav")?"data:audio/wave;base64,/UklGRiYAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQIAAAD//w==":"about:blank",b.src=e,b._called_unload!==g&&(b._called_load=!1));z&&(Ea=null);return e};Y=function(b){if(!c.useHTML5Audio||!c.hasHTML5)return!1;var e=b.url||null;b=b.type||
null;var d=c.audioFormats,a;if(b&&c.html5[b]!==g)return c.html5[b]&&!Z(b);if(!D){D=[];for(a in d)d.hasOwnProperty(a)&&(D.push(a),d[a].related&&(D=D.concat(d[a].related)));D=new RegExp("\\.("+D.join("|")+")(\\?.*)?$","i")}(a=e?e.toLowerCase().match(D):null)&&a.length?a=a[1]:b&&(e=b.indexOf(";"),a=(-1!==e?b.substr(0,e):b).substr(6));a&&c.html5[a]!==g?e=c.html5[a]&&!Z(a):(b="audio/"+a,e=c.html5.canPlayType({type:b}),e=(c.html5[a]=e)&&c.html5[b]&&!Z(b));return e};Za=function(){function b(a){var b,d=b=
!1;if(!e||"function"!==typeof e.canPlayType)return b;if(a instanceof Array){h=0;for(b=a.length;h<b;h++)if(c.html5[a[h]]||e.canPlayType(a[h]).match(c.html5Test))d=!0,c.html5[a[h]]=!0,c.flash[a[h]]=!!a[h].match(db);b=d}else a=e&&"function"===typeof e.canPlayType?e.canPlayType(a):!1,b=!(!a||!a.match(c.html5Test));return b}if(!c.useHTML5Audio||!c.hasHTML5)return v=c.html5.usingFlash=!0,!1;var e=Audio!==g?Ja&&10>opera.version()?new Audio(null):new Audio:null,d,a,f={},n,h;n=c.audioFormats;for(d in n)if(n.hasOwnProperty(d)&&
(a="audio/"+d,f[d]=b(n[d].type),f[a]=f[d],d.match(db)?(c.flash[d]=!0,c.flash[a]=!0):(c.flash[d]=!1,c.flash[a]=!1),n[d]&&n[d].related))for(h=n[d].related.length-1;0<=h;h--)f["audio/"+n[d].related[h]]=f[d],c.html5[n[d].related[h]]=f[d],c.flash[n[d].related[h]]=f[d];f.canPlayType=e?b:null;c.html5=x(c.html5,f);c.html5.usingFlash=Ya();v=c.html5.usingFlash;return!0};J={};T=function(){};fa=function(b){8===m&&1<b.loops&&b.stream&&(b.stream=!1);return b};ga=function(b,c){b&&!b.usePolicyFile&&(b.onid3||b.usePeakData||
b.useWaveformData||b.useEQData)&&(b.usePolicyFile=!0);return b};pa=function(){return!1};Ta=function(b){for(var c in b)b.hasOwnProperty(c)&&"function"===typeof b[c]&&(b[c]=pa)};za=function(b){b===g&&(b=!1);(B||b)&&c.disable(b)};Ua=function(b){var e=null;if(b)if(b.match(/\.swf(\?.*)?$/i)){if(e=b.substr(b.toLowerCase().lastIndexOf(".swf?")+4))return b}else b.lastIndexOf("/")!==b.length-1&&(b+="/");b=(b&&-1!==b.lastIndexOf("/")?b.substr(0,b.lastIndexOf("/")+1):"./")+c.movieURL;c.noSWFCache&&(b+="?ts="+
(new Date).getTime());return b};va=function(){m=parseInt(c.flashVersion,10);8!==m&&9!==m&&(c.flashVersion=m=8);var b=c.debugMode||c.debugFlash?"_debug.swf":".swf";c.useHTML5Audio&&!c.html5Only&&c.audioFormats.mp4.required&&9>m&&(c.flashVersion=m=9);c.version=c.versionNumber+(c.html5Only?" (HTML5-only mode)":9===m?" (AS3/Flash 9)":" (AS2/Flash 8)");8<m?(c.defaultOptions=x(c.defaultOptions,c.flash9Options),c.features.buffering=!0,c.defaultOptions=x(c.defaultOptions,c.movieStarOptions),c.filePatterns.flash9=
new RegExp("\\.(mp3|"+fb.join("|")+")(\\?.*)?$","i"),c.features.movieStar=!0):c.features.movieStar=!1;c.filePattern=c.filePatterns[8!==m?"flash9":"flash8"];c.movieURL=(8===m?"soundmanager2.swf":"soundmanager2_flash9.swf").replace(".swf",b);c.features.peakData=c.features.waveformData=c.features.eqData=8<m};Sa=function(b,c){if(!k)return!1;k._setPolling(b,c)};ya=function(){};q=this.getSoundById;L=function(){var b=[];c.debugMode&&b.push("sm2_debug");c.debugFlash&&b.push("flash_debug");c.useHighPerformance&&
b.push("high_performance");return b.join(" ")};Ba=function(){T("fbHandler");var b=c.getMoviePercent(),e={type:"FLASHBLOCK"};if(c.html5Only)return!1;c.ok()?c.oMC&&(c.oMC.className=[L(),"movieContainer","swf_loaded"+(c.didFlashBlock?" swf_unblocked":"")].join(" ")):(v&&(c.oMC.className=L()+" movieContainer "+(null===b?"swf_timedout":"swf_error")),c.didFlashBlock=!0,F({type:"ontimeout",ignoreInit:!0,error:e}),K(e))};ta=function(b,c,d){y[b]===g&&(y[b]=[]);y[b].push({method:c,scope:d||null,fired:!1})};
F=function(b){b||(b={type:c.ok()?"onready":"ontimeout"});if(!l&&b&&!b.ignoreInit||"ontimeout"===b.type&&(c.ok()||B&&!b.ignoreInit))return!1;var e={success:b&&b.ignoreInit?c.ok():!B},d=b&&b.type?y[b.type]||[]:[],a=[],f,e=[e],g=v&&!c.ok();b.error&&(e[0].error=b.error);b=0;for(f=d.length;b<f;b++)!0!==d[b].fired&&a.push(d[b]);if(a.length)for(b=0,f=a.length;b<f;b++)a[b].scope?a[b].method.apply(a[b].scope,e):a[b].method.apply(this,e),g||(a[b].fired=!0);return!0};H=function(){h.setTimeout(function(){c.useFlashBlock&&
Ba();F();"function"===typeof c.onload&&c.onload.apply(h);c.waitForWindowLoad&&t.add(h,"load",H)},1)};Fa=function(){if(A!==g)return A;var b=!1,c=navigator,d=c.plugins,a,f=h.ActiveXObject;if(d&&d.length)(c=c.mimeTypes)&&c["application/x-shockwave-flash"]&&c["application/x-shockwave-flash"].enabledPlugin&&c["application/x-shockwave-flash"].enabledPlugin.description&&(b=!0);else if(f!==g&&!u.match(/MSAppHost/i)){try{a=new f("ShockwaveFlash.ShockwaveFlash")}catch(n){a=null}b=!!a}return A=b};Ya=function(){var b,
e,d=c.audioFormats;Ha&&u.match(/os (1|2|3_0|3_1)\s/i)?(c.hasHTML5=!1,c.html5Only=!0,c.oMC&&(c.oMC.style.display="none")):!c.useHTML5Audio||c.html5&&c.html5.canPlayType||(c.hasHTML5=!1);if(c.useHTML5Audio&&c.hasHTML5)for(e in X=!0,d)d.hasOwnProperty(e)&&d[e].required&&(c.html5.canPlayType(d[e].type)?c.preferFlash&&(c.flash[e]||c.flash[d[e].type])&&(b=!0):(X=!1,b=!0));c.ignoreFlash&&(b=!1,X=!0);c.html5Only=c.hasHTML5&&c.useHTML5Audio&&!b;return!c.html5Only};ia=function(b){var e,d,a=0;if(b instanceof
Array){e=0;for(d=b.length;e<d;e++)if(b[e]instanceof Object){if(c.canPlayMIME(b[e].type)){a=e;break}}else if(c.canPlayURL(b[e])){a=e;break}b[a].url&&(b[a]=b[a].url);b=b[a]}return b};Va=function(b){b._hasTimer||(b._hasTimer=!0,!na&&c.html5PollingInterval&&(null===V&&0===ha&&(V=setInterval(Xa,c.html5PollingInterval)),ha++))};Wa=function(b){b._hasTimer&&(b._hasTimer=!1,!na&&c.html5PollingInterval&&ha--)};Xa=function(){var b;if(null!==V&&!ha)return clearInterval(V),V=null,!1;for(b=c.soundIDs.length-1;0<=
b;b--)c.sounds[c.soundIDs[b]].isHTML5&&c.sounds[c.soundIDs[b]]._hasTimer&&c.sounds[c.soundIDs[b]]._onTimer()};K=function(b){b=b!==g?b:{};"function"===typeof c.onerror&&c.onerror.apply(h,[{type:b.type!==g?b.type:null}]);b.fatal!==g&&b.fatal&&c.disable()};$a=function(){if(!bb||!Fa())return!1;var b=c.audioFormats,e,d;for(d in b)if(b.hasOwnProperty(d)&&("mp3"===d||"mp4"===d)&&(c.html5[d]=!1,b[d]&&b[d].related))for(e=b[d].related.length-1;0<=e;e--)c.html5[b[d].related[e]]=!1};this._setSandboxType=function(b){};
this._externalInterfaceOK=function(b){if(c.swfLoaded)return!1;c.swfLoaded=!0;oa=!1;bb&&$a();setTimeout(qa,E?100:1)};ea=function(b,e){function d(a,b){return'<param name="'+a+'" value="'+b+'" />'}if(O&&P)return!1;if(c.html5Only)return va(),c.oMC=aa(c.movieID),qa(),P=O=!0,!1;var a=e||c.url,f=c.altURL||a,h=xa(),k=L(),m=null,m=p.getElementsByTagName("html")[0],l,r,q,m=m&&m.dir&&m.dir.match(/rtl/i);b=b===g?c.id:b;va();c.url=Ua(La?a:f);e=c.url;c.wmode=!c.wmode&&c.useHighPerformance?"transparent":c.wmode;
null!==c.wmode&&(u.match(/msie 8/i)||!E&&!c.useHighPerformance)&&navigator.platform.match(/win32|win64/i)&&(W.push(J.spcWmode),c.wmode=null);h={name:b,id:b,src:e,quality:"high",allowScriptAccess:c.allowScriptAccess,bgcolor:c.bgColor,pluginspage:jb+"www.macromedia.com/go/getflashplayer",title:"JS/Flash audio component (SoundManager 2)",type:"application/x-shockwave-flash",wmode:c.wmode,hasPriority:"true"};c.debugFlash&&(h.FlashVars="debug=1");c.wmode||delete h.wmode;if(E)a=p.createElement("div"),r=
['<object id="'+b+'" data="'+e+'" type="'+h.type+'" title="'+h.title+'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0">',d("movie",e),d("AllowScriptAccess",c.allowScriptAccess),d("quality",h.quality),c.wmode?d("wmode",c.wmode):"",d("bgcolor",c.bgColor),d("hasPriority","true"),c.debugFlash?d("FlashVars",h.FlashVars):"","</object>"].join("");else for(l in a=p.createElement("embed"),h)h.hasOwnProperty(l)&&
a.setAttribute(l,h[l]);ya();k=L();if(h=xa())if(c.oMC=aa(c.movieID)||p.createElement("div"),c.oMC.id)q=c.oMC.className,c.oMC.className=(q?q+" ":"movieContainer")+(k?" "+k:""),c.oMC.appendChild(a),E&&(l=c.oMC.appendChild(p.createElement("div")),l.className="sm2-object-box",l.innerHTML=r),P=!0;else{c.oMC.id=c.movieID;c.oMC.className="movieContainer "+k;l=k=null;c.useFlashBlock||(c.useHighPerformance?k={position:"fixed",width:"8px",height:"8px",bottom:"0px",left:"0px",overflow:"hidden"}:(k={position:"absolute",
width:"6px",height:"6px",top:"-9999px",left:"-9999px"},m&&(k.left=Math.abs(parseInt(k.left,10))+"px")));ib&&(c.oMC.style.zIndex=1E4);if(!c.debugFlash)for(q in k)k.hasOwnProperty(q)&&(c.oMC.style[q]=k[q]);try{E||c.oMC.appendChild(a),h.appendChild(c.oMC),E&&(l=c.oMC.appendChild(p.createElement("div")),l.className="sm2-object-box",l.innerHTML=r),P=!0}catch(t){throw Error(T("domError")+" \n"+t.toString());}}return O=!0};da=function(){if(c.html5Only)return ea(),!1;if(k||!c.url)return!1;k=c.getMovie(c.id);
k||(S?(E?c.oMC.innerHTML=Aa:c.oMC.appendChild(S),S=null,O=!0):ea(c.id,c.url),k=c.getMovie(c.id));"function"===typeof c.oninitmovie&&setTimeout(c.oninitmovie,1);return!0};I=function(){setTimeout(Ra,1E3)};ua=function(){h.setTimeout(function(){c.setup({preferFlash:!1}).reboot();c.didFlashBlock=!0;c.beginDelayedInit()},1)};Ra=function(){var b,e=!1;if(!c.url||U)return!1;U=!0;t.remove(h,"load",I);if(A&&oa&&!Ka)return!1;l||(b=c.getMoviePercent(),0<b&&100>b&&(e=!0));setTimeout(function(){b=c.getMoviePercent();
if(e)return U=!1,h.setTimeout(I,1),!1;!l&&cb&&(null===b?c.useFlashBlock||0===c.flashLoadTimeout?c.useFlashBlock&&Ba():!c.useFlashBlock&&X?ua():F({type:"ontimeout",ignoreInit:!0,error:{type:"INIT_FLASHBLOCK"}}):0!==c.flashLoadTimeout&&(!c.useFlashBlock&&X?ua():za(!0)))},c.flashLoadTimeout)};ca=function(){if(Ka||!oa)return t.remove(h,"focus",ca),!0;Ka=cb=!0;U=!1;I();t.remove(h,"focus",ca);return!0};Q=function(b){if(l)return!1;if(c.html5Only)return l=!0,H(),!0;var e=!0,d;c.useFlashBlock&&c.flashLoadTimeout&&
!c.getMoviePercent()||(l=!0);d={type:!A&&v?"NO_FLASH":"INIT_TIMEOUT"};if(B||b)c.useFlashBlock&&c.oMC&&(c.oMC.className=L()+" "+(null===c.getMoviePercent()?"swf_timedout":"swf_error")),F({type:"ontimeout",error:d,ignoreInit:!0}),K(d),e=!1;B||(c.waitForWindowLoad&&!ra?t.add(h,"load",H):H());return e};Qa=function(){var b,e=c.setupOptions;for(b in e)e.hasOwnProperty(b)&&(c[b]===g?c[b]=e[b]:c[b]!==e[b]&&(c.setupOptions[b]=c[b]))};qa=function(){if(l)return!1;if(c.html5Only)return l||(t.remove(h,"load",
c.beginDelayedInit),c.enabled=!0,Q()),!0;da();try{k._externalInterfaceTest(!1),Sa(!0,c.flashPollingInterval||(c.useHighPerformance?10:50)),c.debugMode||k._disableDebug(),c.enabled=!0,c.html5Only||t.add(h,"unload",pa)}catch(b){return K({type:"JS_TO_FLASH_EXCEPTION",fatal:!0}),za(!0),Q(),!1}Q();t.remove(h,"load",c.beginDelayedInit);return!0};G=function(){if(R)return!1;R=!0;Qa();ya();!A&&c.hasHTML5&&c.setup({useHTML5Audio:!0,preferFlash:!1});Za();!A&&v&&(W.push(J.needFlash),c.setup({flashLoadTimeout:1}));
p.removeEventListener&&p.removeEventListener("DOMContentLoaded",G,!1);da();return!0};Da=function(){"complete"===p.readyState&&(G(),p.detachEvent("onreadystatechange",Da));return!0};wa=function(){ra=!0;G();t.remove(h,"load",wa)};Fa();t.add(h,"focus",ca);t.add(h,"load",I);t.add(h,"load",wa);p.addEventListener?p.addEventListener("DOMContentLoaded",G,!1):p.attachEvent?p.attachEvent("onreadystatechange",Da):K({type:"NO_DOM2_EVENTS",fatal:!0})}if(!h||!h.document)throw Error("SoundManager requires a browser with window and document objects.");
var N=null;h.SM2_DEFER!==g&&SM2_DEFER||(N=new w);"object"===typeof module&&module&&"object"===typeof module.exports?(module.exports.SoundManager=w,module.exports.soundManager=N):"function"===typeof define&&define.amd&&define(function(){return{constructor:w,getInstance:function(g){!h.soundManager&&g instanceof Function&&(g=g(w),g instanceof w&&(h.soundManager=g));return h.soundManager}}});h.SoundManager=w;h.soundManager=N})(window);
/* MIT license */
var clusterfck = (function() {var require = function (file, cwd) {
    var resolved = require.resolve(file, cwd || '/');
    var mod = require.modules[resolved];
    if (!mod) throw new Error(
        'Failed to resolve module ' + file + ', tried ' + resolved
    );
    var res = mod._cached ? mod._cached : mod();
    return res;
}

require.paths = [];
require.modules = {};
require.extensions = [".js",".coffee"];

require._core = {
    'assert': true,
    'events': true,
    'fs': true,
    'path': true,
    'vm': true
};

require.resolve = (function () {
    return function (x, cwd) {
        if (!cwd) cwd = '/';

        if (require._core[x]) return x;
        var path = require.modules.path();
        var y = cwd || '.';

        if (x.match(/^(?:\.\.?\/|\/)/)) {
            var m = loadAsFileSync(path.resolve(y, x))
                || loadAsDirectorySync(path.resolve(y, x));
            if (m) return m;
        }

        var n = loadNodeModulesSync(x, y);
        if (n) return n;

        throw new Error("Cannot find module '" + x + "'");

        function loadAsFileSync (x) {
            if (require.modules[x]) {
                return x;
            }

            for (var i = 0; i < require.extensions.length; i++) {
                var ext = require.extensions[i];
                if (require.modules[x + ext]) return x + ext;
            }
        }

        function loadAsDirectorySync (x) {
            x = x.replace(/\/+$/, '');
            var pkgfile = x + '/package.json';
            if (require.modules[pkgfile]) {
                var pkg = require.modules[pkgfile]();
                var b = pkg.browserify;
                if (typeof b === 'object' && b.main) {
                    var m = loadAsFileSync(path.resolve(x, b.main));
                    if (m) return m;
                }
                else if (typeof b === 'string') {
                    var m = loadAsFileSync(path.resolve(x, b));
                    if (m) return m;
                }
                else if (pkg.main) {
                    var m = loadAsFileSync(path.resolve(x, pkg.main));
                    if (m) return m;
                }
            }

            return loadAsFileSync(x + '/index');
        }

        function loadNodeModulesSync (x, start) {
            var dirs = nodeModulesPathsSync(start);
            for (var i = 0; i < dirs.length; i++) {
                var dir = dirs[i];
                var m = loadAsFileSync(dir + '/' + x);
                if (m) return m;
                var n = loadAsDirectorySync(dir + '/' + x);
                if (n) return n;
            }

            var m = loadAsFileSync(x);
            if (m) return m;
        }

        function nodeModulesPathsSync (start) {
            var parts;
            if (start === '/') parts = [ '' ];
            else parts = path.normalize(start).split('/');

            var dirs = [];
            for (var i = parts.length - 1; i >= 0; i--) {
                if (parts[i] === 'node_modules') continue;
                var dir = parts.slice(0, i + 1).join('/') + '/node_modules';
                dirs.push(dir);
            }

            return dirs;
        }
    };
})();

require.alias = function (from, to) {
    var path = require.modules.path();
    var res = null;
    try {
        res = require.resolve(from + '/package.json', '/');
    }
    catch (err) {
        res = require.resolve(from, '/');
    }
    var basedir = path.dirname(res);

    var keys = Object_keys(require.modules);

    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        if (key.slice(0, basedir.length + 1) === basedir + '/') {
            var f = key.slice(basedir.length);
            require.modules[to + f] = require.modules[basedir + f];
        }
        else if (key === basedir) {
            require.modules[to] = require.modules[basedir];
        }
    }
};

require.define = function (filename, fn) {
    var dirname = require._core[filename]
        ? ''
        : require.modules.path().dirname(filename)
    ;

    var require_ = function (file) {
        return require(file, dirname)
    };
    require_.resolve = function (name) {
        return require.resolve(name, dirname);
    };
    require_.modules = require.modules;
    require_.define = require.define;
    var module_ = { exports : {} };

    require.modules[filename] = function () {
        require.modules[filename]._cached = module_.exports;
        fn.call(
            module_.exports,
            require_,
            module_,
            module_.exports,
            dirname,
            filename
        );
        require.modules[filename]._cached = module_.exports;
        return module_.exports;
    };
};

var Object_keys = Object.keys || function (obj) {
    var res = [];
    for (var key in obj) res.push(key)
    return res;
};

var process;
if (typeof process === 'undefined') process = {};

if (!process.nextTick) process.nextTick = function (fn) {
    setTimeout(fn, 0);
};

if (!process.title) process.title = 'browser';

if (!process.binding) process.binding = function (name) {
    if (name === 'evals') return require('vm')
    else throw new Error('No such module')
};

if (!process.cwd) process.cwd = function () { return '.' };

require.define("path", function (require, module, exports, __dirname, __filename) {
    function filter (xs, fn) {
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (fn(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length; i >= 0; i--) {
    var last = parts[i];
    if (last == '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Regex to split a filename into [*, dir, basename, ext]
// posix version
var splitPathRe = /^(.+\/(?!$)|\/)?((?:.+?)?(\.[^.]*)?)$/;

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
var resolvedPath = '',
    resolvedAbsolute = false;

for (var i = arguments.length; i >= -1 && !resolvedAbsolute; i--) {
  var path = (i >= 0)
      ? arguments[i]
      : process.cwd();

  // Skip empty and invalid entries
  if (typeof path !== 'string' || !path) {
    continue;
  }

  resolvedPath = path + '/' + resolvedPath;
  resolvedAbsolute = path.charAt(0) === '/';
}

// At this point the path should be resolved to a full absolute path, but
// handle relative paths to be safe (might happen when process.cwd() fails)

// Normalize the path
resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
var isAbsolute = path.charAt(0) === '/',
    trailingSlash = path.slice(-1) === '/';

// Normalize the path
path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};


// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    return p && typeof p === 'string';
  }).join('/'));
};


exports.dirname = function(path) {
  var dir = splitPathRe.exec(path)[1] || '';
  var isWindows = false;
  if (!dir) {
    // No dirname
    return '.';
  } else if (dir.length === 1 ||
      (isWindows && dir.length <= 3 && dir.charAt(1) === ':')) {
    // It is just a slash or a drive letter with a slash
    return dir;
  } else {
    // It is a full dirname, strip trailing slash
    return dir.substring(0, dir.length - 1);
  }
};


exports.basename = function(path, ext) {
  var f = splitPathRe.exec(path)[2] || '';
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPathRe.exec(path)[3] || '';
};

});

require.define("/clusterfck.js", function (require, module, exports, __dirname, __filename) {
    module.exports = {
   hcluster: require("./hcluster"),
   kmeans: require("./kmeans")
};
});

require.define("/hcluster.js", function (require, module, exports, __dirname, __filename) {
    var distances = require("./distance");

var HierarchicalClustering = function(distance, linkage, threshold) {
   this.distance = distance;
   this.linkage = linkage;
   this.threshold = threshold == undefined ? Infinity : threshold;
}

HierarchicalClustering.prototype = {
   cluster : function(items, snapshotPeriod, snapshotCb) {
      this.clusters = [];
      this.dists = [];  // distances between each pair of clusters
      this.mins = []; // closest cluster for each cluster
      this.index = []; // keep a hash of all clusters by key

      for (var i = 0; i < items.length; i++) {
         var cluster = {
            value: items[i],
            key: i,
            index: i,
            size: 1
         };
         this.clusters[i] = cluster;
         this.index[i] = cluster;
         this.dists[i] = [];
         this.mins[i] = 0;
      }

      for (var i = 0; i < this.clusters.length; i++) {
         for (var j = 0; j <= i; j++) {
            var dist = (i == j) ? Infinity :
               this.distance(this.clusters[i].value, this.clusters[j].value);
            this.dists[i][j] = dist;
            this.dists[j][i] = dist;

            if (dist < this.dists[i][this.mins[i]]) {
               this.mins[i] = j;
            }
         }
      }

      var merged = this.mergeClosest();
      var i = 0;
      while (merged) {
        if (snapshotCb && (i++ % snapshotPeriod) == 0) {
           snapshotCb(this.clusters);
        }
        merged = this.mergeClosest();
      }

      this.clusters.forEach(function(cluster) {
        // clean up metadata used for clustering
        delete cluster.key;
        delete cluster.index;
      });

      return this.clusters;
   },

   mergeClosest: function() {
      // find two closest clusters from cached mins
      var minKey = 0, min = Infinity;
      for (var i = 0; i < this.clusters.length; i++) {
         var key = this.clusters[i].key,
             dist = this.dists[key][this.mins[key]];
         if (dist < min) {
            minKey = key;
            min = dist;
         }
      }
      if (min >= this.threshold) {
         return false;
      }

      var c1 = this.index[minKey],
          c2 = this.index[this.mins[minKey]];

      // merge two closest clusters
      var merged = {
         left: c1,
         right: c2,
         key: c1.key,
         size: c1.size + c2.size
      };

      this.clusters[c1.index] = merged;
      this.clusters.splice(c2.index, 1);
      this.index[c1.key] = merged;

      // update distances with new merged cluster
      for (var i = 0; i < this.clusters.length; i++) {
         var ci = this.clusters[i];
         var dist;
         if (c1.key == ci.key) {
            dist = Infinity;
         }
         else if (this.linkage == "single") {
            dist = this.dists[c1.key][ci.key];
            if (this.dists[c1.key][ci.key] > this.dists[c2.key][ci.key]) {
               dist = this.dists[c2.key][ci.key];
            }
         }
         else if (this.linkage == "complete") {
            dist = this.dists[c1.key][ci.key];
            if (this.dists[c1.key][ci.key] < this.dists[c2.key][ci.key]) {
               dist = this.dists[c2.key][ci.key];
            }
         }
         else if (this.linkage == "average") {
            dist = (this.dists[c1.key][ci.key] * c1.size
                   + this.dists[c2.key][ci.key] * c2.size) / (c1.size + c2.size);
         }
         else {
            dist = this.distance(ci.value, c1.value);
         }

         this.dists[c1.key][ci.key] = this.dists[ci.key][c1.key] = dist;
      }


      // update cached mins
      for (var i = 0; i < this.clusters.length; i++) {
         var key1 = this.clusters[i].key;
         if (this.mins[key1] == c1.key || this.mins[key1] == c2.key) {
            var min = key1;
            for (var j = 0; j < this.clusters.length; j++) {
               var key2 = this.clusters[j].key;
               if (this.dists[key1][key2] < this.dists[key1][min]) {
                  min = key2;
               }
            }
            this.mins[key1] = min;
         }
         this.clusters[i].index = i;
      }

      // clean up metadata used for clustering
      delete c1.key; delete c2.key;
      delete c1.index; delete c2.index;

      return true;
   }
}

var hcluster = function(items, distance, linkage, threshold, snapshot, snapshotCallback) {
   distance = distance || "euclidean";
   linkage = linkage || "average";

   if (typeof distance == "string") {
     distance = distances[distance];
   }
   var clusters = (new HierarchicalClustering(distance, linkage, threshold))
                  .cluster(items, snapshot, snapshotCallback);

   if (threshold === undefined) {
      return clusters[0]; // all clustered into one
   }
   return clusters;
}

module.exports = hcluster;

});

require.define("/distance.js", function (require, module, exports, __dirname, __filename) {
    module.exports = {
  euclidean: function(v1, v2) {
      var total = 0;
      for (var i = 0; i < v1.length; i++) {
         total += Math.pow(v2[i] - v1[i], 2);
      }
      return Math.sqrt(total);
   },
   manhattan: function(v1, v2) {
     var total = 0;
     for (var i = 0; i < v1.length ; i++) {
        total += Math.abs(v2[i] - v1[i]);
     }
     return total;
   },
   max: function(v1, v2) {
     var max = 0;
     for (var i = 0; i < v1.length; i++) {
        max = Math.max(max , Math.abs(v2[i] - v1[i]));
     }
     return max;
   }
};
});

require.define("/kmeans.js", function (require, module, exports, __dirname, __filename) {
    var distances = require("./distance");

function randomCentroids(points, k) {
   var centroids = points.slice(0); // copy
   centroids.sort(function() {
      return (Math.round(Math.random()) - 0.5);
   });
   return centroids.slice(0, k);
}

function closestCentroid(point, centroids, distance) {
   var min = Infinity,
       index = 0;
   for (var i = 0; i < centroids.length; i++) {
      var dist = distance(point, centroids[i]);
      if (dist < min) {
         min = dist;
         index = i;
      }
   }
   return index;
}

function kmeans(points, k, distance, snapshotPeriod, snapshotCb) {
   distance = distance || "euclidean";
   if (typeof distance == "string") {
      distance = distances[distance];
   }

   var centroids = randomCentroids(points, k);
   var assignment = new Array(points.length);
   var clusters = new Array(k);

   var iterations = 0;
   var movement = true;
   while (movement) {
      // update point-to-centroid assignments
      for (var i = 0; i < points.length; i++) {
         assignment[i] = closestCentroid(points[i], centroids, distance);
      }

      // update location of each centroid
      movement = false;
      for (var j = 0; j < k; j++) {
         var assigned = [];
         assignment.forEach(function(centroid, index) {
            if (centroid == j) {
               assigned.push(points[index]);
            }
         });

         if (!assigned.length) {
            continue;
         }
         var centroid = centroids[j];
         var newCentroid = new Array(centroid.length);

         for (var g = 0; g < centroid.length; g++) {
            var sum = 0;
            for (var i = 0; i < assigned.length; i++) {
               sum += assigned[i][g];
            }
            newCentroid[g] = sum / assigned.length;

            if (newCentroid[g] != centroid[g]) {
               movement = true;
            }
         }
         centroids[j] = newCentroid;
         clusters[j] = assigned;
      }

      if (snapshotCb && (iterations++ % snapshotPeriod == 0)) {
         snapshotCb(clusters);
      }
   }
   return clusters;
}

module.exports = kmeans;

});
 return require('/clusterfck')})();

/*!
 * The MIT License (MIT)
 *
 * Copyright (c) 2016 Juan Cazala - juancazala.com
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE
 *
 *
 *
 * ********************************************************************************************
 *                                   SYNAPTIC (v1.0.7)
 * ********************************************************************************************
 *
 * Synaptic is a javascript neural network library for node.js and the browser, its generalized
 * algorithm is architecture-free, so you can build and train basically any type of first order
 * or even second order neural network architectures.
 *
 * http://en.wikipedia.org/wiki/Recurrent_neural_network#Second_Order_Recurrent_Neural_Network
 *
 * The library includes a few built-in architectures like multilayer perceptrons, multilayer
 * long-short term memory networks (LSTM) or liquid state machines, and a trainer capable of
 * training any given network, and includes built-in training tasks/tests like solving an XOR,
 * passing a Distracted Sequence Recall test or an Embeded Reber Grammar test.
 *
 * The algorithm implemented by this library has been taken from Derek D. Monner's paper:
 *
 *
 * A generalized LSTM-like training algorithm for second-order recurrent neural networks
 * http://www.overcomplete.net/papers/nn2012.pdf
 *
 * There are references to the equations in that paper commented through the source code.
 *
 */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var Synaptic = {
	    Neuron: __webpack_require__(2),
	    Layer: __webpack_require__(4),
	    Network: __webpack_require__(5),
	    Trainer: __webpack_require__(6),
	    Architect: __webpack_require__(7)
	};

	// CommonJS & AMD
	if (true)
	{
	  !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){ return Synaptic }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}

	// Node.js
	if (typeof module !== 'undefined' && module.exports)
	{
	  module.exports = Synaptic;
	}

	// Browser
	if (typeof window == 'object')
	{
	  (function(){
	    var oldSynaptic = window['synaptic'];
	    Synaptic.ninja = function(){
	      window['synaptic'] = oldSynaptic;
	      return Synaptic;
	    };
	  })();

	  window['synaptic'] = Synaptic;
	}


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {// export
	if (module) module.exports = Neuron;

	/******************************************************************************************
	                                         NEURON
	*******************************************************************************************/

	function Neuron() {
	  this.ID = Neuron.uid();
	  this.label = null;
	  this.connections = {
	    inputs: {},
	    projected: {},
	    gated: {}
	  };
	  this.error = {
	    responsibility: 0,
	    projected: 0,
	    gated: 0
	  };
	  this.trace = {
	    elegibility: {},
	    extended: {},
	    influences: {}
	  };
	  this.state = 0;
	  this.old = 0;
	  this.activation = 0;
	  this.selfconnection = new Neuron.connection(this, this, 0); // weight = 0 -> not connected
	  this.squash = Neuron.squash.LOGISTIC;
	  this.neighboors = {};
	  this.bias = Math.random() * .2 - .1;
	}

	Neuron.prototype = {

	  // activate the neuron
	  activate: function(input) {
	    // activation from enviroment (for input neurons)
	    if (typeof input != 'undefined') {
	      this.activation = input;
	      this.derivative = 0;
	      this.bias = 0;
	      return this.activation;
	    }

	    // old state
	    this.old = this.state;

	    // eq. 15
	    this.state = this.selfconnection.gain * this.selfconnection.weight *
	      this.state + this.bias;

	    for (var i in this.connections.inputs) {
	      var input = this.connections.inputs[i];
	      this.state += input.from.activation * input.weight * input.gain;
	    }

	    // eq. 16
	    this.activation = this.squash(this.state);

	    // f'(s)
	    this.derivative = this.squash(this.state, true);

	    // update traces
	    var influences = [];
	    for (var id in this.trace.extended) {
	      // extended elegibility trace
	      var xtrace = this.trace.extended[id];
	      var neuron = this.neighboors[id];

	      // if gated neuron's selfconnection is gated by this unit, the influence keeps track of the neuron's old state
	      var influence = neuron.selfconnection.gater == this ? neuron.old : 0;

	      // index runs over all the incoming connections to the gated neuron that are gated by this unit
	      for (var incoming in this.trace.influences[neuron.ID]) { // captures the effect that has an input connection to this unit, on a neuron that is gated by this unit
	        influence += this.trace.influences[neuron.ID][incoming].weight *
	          this.trace.influences[neuron.ID][incoming].from.activation;
	      }
	      influences[neuron.ID] = influence;
	    }

	    for (var i in this.connections.inputs) {
	      var input = this.connections.inputs[i];

	      // elegibility trace - Eq. 17
	      this.trace.elegibility[input.ID] = this.selfconnection.gain * this.selfconnection
	        .weight * this.trace.elegibility[input.ID] + input.gain * input.from
	        .activation;

	      for (var id in this.trace.extended) {
	        // extended elegibility trace
	        var xtrace = this.trace.extended[id];
	        var neuron = this.neighboors[id];
	        var influence = influences[neuron.ID];

	        // eq. 18
	        xtrace[input.ID] = neuron.selfconnection.gain * neuron.selfconnection
	          .weight * xtrace[input.ID] + this.derivative * this.trace.elegibility[
	            input.ID] * influence;
	      }
	    }

	    //  update gated connection's gains
	    for (var connection in this.connections.gated) {
	      this.connections.gated[connection].gain = this.activation;
	    }

	    return this.activation;
	  },

	  // back-propagate the error
	  propagate: function(rate, target) {
	    // error accumulator
	    var error = 0;

	    // whether or not this neuron is in the output layer
	    var isOutput = typeof target != 'undefined';

	    // output neurons get their error from the enviroment
	    if (isOutput)
	      this.error.responsibility = this.error.projected = target - this.activation; // Eq. 10

	    else // the rest of the neuron compute their error responsibilities by backpropagation
	    {
	      // error responsibilities from all the connections projected from this neuron
	      for (var id in this.connections.projected) {
	        var connection = this.connections.projected[id];
	        var neuron = connection.to;
	        // Eq. 21
	        error += neuron.error.responsibility * connection.gain * connection.weight;
	      }

	      // projected error responsibility
	      this.error.projected = this.derivative * error;

	      error = 0;
	      // error responsibilities from all the connections gated by this neuron
	      for (var id in this.trace.extended) {
	        var neuron = this.neighboors[id]; // gated neuron
	        var influence = neuron.selfconnection.gater == this ? neuron.old : 0; // if gated neuron's selfconnection is gated by this neuron

	        // index runs over all the connections to the gated neuron that are gated by this neuron
	        for (var input in this.trace.influences[id]) { // captures the effect that the input connection of this neuron have, on a neuron which its input/s is/are gated by this neuron
	          influence += this.trace.influences[id][input].weight * this.trace.influences[
	            neuron.ID][input].from.activation;
	        }
	        // eq. 22
	        error += neuron.error.responsibility * influence;
	      }

	      // gated error responsibility
	      this.error.gated = this.derivative * error;

	      // error responsibility - Eq. 23
	      this.error.responsibility = this.error.projected + this.error.gated;
	    }

	    // learning rate
	    rate = rate || .1;

	    // adjust all the neuron's incoming connections
	    for (var id in this.connections.inputs) {
	      var input = this.connections.inputs[id];

	      // Eq. 24
	      var gradient = this.error.projected * this.trace.elegibility[input.ID];
	      for (var id in this.trace.extended) {
	        var neuron = this.neighboors[id];
	        gradient += neuron.error.responsibility * this.trace.extended[
	          neuron.ID][input.ID];
	      }
	      input.weight += rate * gradient; // adjust weights - aka learn
	    }

	    // adjust bias
	    this.bias += rate * this.error.responsibility;
	  },

	  project: function(neuron, weight) {
	    // self-connection
	    if (neuron == this) {
	      this.selfconnection.weight = 1;
	      return this.selfconnection;
	    }

	    // check if connection already exists
	    var connected = this.connected(neuron);
	    if (connected && connected.type == "projected") {
	      // update connection
	      if (typeof weight != 'undefined')
	        connected.connection.weight = weight;
	      // return existing connection
	      return connected.connection;
	    } else {
	      // create a new connection
	      var connection = new Neuron.connection(this, neuron, weight);
	    }

	    // reference all the connections and traces
	    this.connections.projected[connection.ID] = connection;
	    this.neighboors[neuron.ID] = neuron;
	    neuron.connections.inputs[connection.ID] = connection;
	    neuron.trace.elegibility[connection.ID] = 0;

	    for (var id in neuron.trace.extended) {
	      var trace = neuron.trace.extended[id];
	      trace[connection.ID] = 0;
	    }

	    return connection;
	  },

	  gate: function(connection) {
	    // add connection to gated list
	    this.connections.gated[connection.ID] = connection;

	    var neuron = connection.to;
	    if (!(neuron.ID in this.trace.extended)) {
	      // extended trace
	      this.neighboors[neuron.ID] = neuron;
	      var xtrace = this.trace.extended[neuron.ID] = {};
	      for (var id in this.connections.inputs) {
	        var input = this.connections.inputs[id];
	        xtrace[input.ID] = 0;
	      }
	    }

	    // keep track
	    if (neuron.ID in this.trace.influences)
	      this.trace.influences[neuron.ID].push(connection);
	    else
	      this.trace.influences[neuron.ID] = [connection];

	    // set gater
	    connection.gater = this;
	  },

	  // returns true or false whether the neuron is self-connected or not
	  selfconnected: function() {
	    return this.selfconnection.weight !== 0;
	  },

	  // returns true or false whether the neuron is connected to another neuron (parameter)
	  connected: function(neuron) {
	    var result = {
	      type: null,
	      connection: false
	    };

	    if (this == neuron) {
	      if (this.selfconnected()) {
	        result.type = 'selfconnection';
	        result.connection = this.selfconnection;
	        return result;
	      } else
	        return false;
	    }

	    for (var type in this.connections) {
	      for (var connection in this.connections[type]) {
	        var connection = this.connections[type][connection];
	        if (connection.to == neuron) {
	          result.type = type;
	          result.connection = connection;
	          return result;
	        } else if (connection.from == neuron) {
	          result.type = type;
	          result.connection = connection;
	          return result;
	        }
	      }
	    }

	    return false;
	  },

	  // clears all the traces (the neuron forgets it's context, but the connections remain intact)
	  clear: function() {

	    for (var trace in this.trace.elegibility)
	      this.trace.elegibility[trace] = 0;

	    for (var trace in this.trace.extended)
	      for (var extended in this.trace.extended[trace])
	        this.trace.extended[trace][extended] = 0;

	    this.error.responsibility = this.error.projected = this.error.gated = 0;
	  },

	  // all the connections are randomized and the traces are cleared
	  reset: function() {
	    this.clear();

	    for (var type in this.connections)
	      for (var connection in this.connections[type])
	        this.connections[type][connection].weight = Math.random() * .2 - .1;
	    this.bias = Math.random() * .2 - .1;

	    this.old = this.state = this.activation = 0;
	  },

	  // hardcodes the behaviour of the neuron into an optimized function
	  optimize: function(optimized, layer) {

	    optimized = optimized || {};
	    var that = this;
	    var store_activation = [];
	    var store_trace = [];
	    var store_propagation = [];
	    var varID = optimized.memory || 0;
	    var neurons = optimized.neurons || 1;
	    var inputs = optimized.inputs || [];
	    var targets = optimized.targets || [];
	    var outputs = optimized.outputs || [];
	    var variables = optimized.variables || {};
	    var activation_sentences = optimized.activation_sentences || [];
	    var trace_sentences = optimized.trace_sentences || [];
	    var propagation_sentences = optimized.propagation_sentences || [];
	    var layers = optimized.layers || { __count: 0, __neuron: 0 };

	    // allocate sentences
	    var allocate = function(store){
	      var allocated = layer in layers && store[layers.__count];
	      if (!allocated)
	      {
	        layers.__count = store.push([]) - 1;
	        layers[layer] = layers.__count;
	      }
	    }
	    allocate(activation_sentences);
	    allocate(trace_sentences);
	    allocate(propagation_sentences);
	    var currentLayer = layers.__count;

	    // get/reserve space in memory by creating a unique ID for a variablel
	    var getVar = function() {
	      var args = Array.prototype.slice.call(arguments);

	      if (args.length == 1) {
	        if (args[0] == 'target') {
	          var id = 'target_' + targets.length;
	          targets.push(varID);
	        } else
	          var id = args[0];
	        if (id in variables)
	          return variables[id];
	        return variables[id] = {
	          value: 0,
	          id: varID++
	        };
	      } else {
	        var extended = args.length > 2;
	        if (extended)
	          var value = args.pop();

	        var unit = args.shift();
	        var prop = args.pop();

	        if (!extended)
	          var value = unit[prop];

	        var id = prop + '_';
	        for (var property in args)
	          id += args[property] + '_';
	        id += unit.ID;
	        if (id in variables)
	          return variables[id];

	        return variables[id] = {
	          value: value,
	          id: varID++
	        };
	      }
	    };

	    // build sentence
	    var buildSentence = function() {
	      var args = Array.prototype.slice.call(arguments);
	      var store = args.pop();
	      var sentence = "";
	      for (var i in args)
	        if (typeof args[i] == 'string')
	          sentence += args[i];
	        else
	          sentence += 'F[' + args[i].id + ']';

	      store.push(sentence + ';');
	    }

	    // helper to check if an object is empty
	    var isEmpty = function(obj) {
	      for (var prop in obj) {
	        if (obj.hasOwnProperty(prop))
	          return false;
	      }
	      return true;
	    };

	    // characteristics of the neuron
	    var noProjections = isEmpty(this.connections.projected);
	    var noGates = isEmpty(this.connections.gated);
	    var isInput = layer == 'input' ? true : isEmpty(this.connections.inputs);
	    var isOutput = layer == 'output' ? true : noProjections && noGates;

	    // optimize neuron's behaviour
	    var rate = getVar('rate');
	    var activation = getVar(this, 'activation');
	    if (isInput)
	      inputs.push(activation.id);
	    else {
	      activation_sentences[currentLayer].push(store_activation);
	      trace_sentences[currentLayer].push(store_trace);
	      propagation_sentences[currentLayer].push(store_propagation);
	      var old = getVar(this, 'old');
	      var state = getVar(this, 'state');
	      var bias = getVar(this, 'bias');
	      if (this.selfconnection.gater)
	        var self_gain = getVar(this.selfconnection, 'gain');
	      if (this.selfconnected())
	        var self_weight = getVar(this.selfconnection, 'weight');
	      buildSentence(old, ' = ', state, store_activation);
	      if (this.selfconnected())
	        if (this.selfconnection.gater)
	          buildSentence(state, ' = ', self_gain, ' * ', self_weight, ' * ',
	            state, ' + ', bias, store_activation);
	        else
	          buildSentence(state, ' = ', self_weight, ' * ', state, ' + ',
	            bias, store_activation);
	      else
	        buildSentence(state, ' = ', bias, store_activation);
	      for (var i in this.connections.inputs) {
	        var input = this.connections.inputs[i];
	        var input_activation = getVar(input.from, 'activation');
	        var input_weight = getVar(input, 'weight');
	        if (input.gater)
	          var input_gain = getVar(input, 'gain');
	        if (this.connections.inputs[i].gater)
	          buildSentence(state, ' += ', input_activation, ' * ',
	            input_weight, ' * ', input_gain, store_activation);
	        else
	          buildSentence(state, ' += ', input_activation, ' * ',
	            input_weight, store_activation);
	      }
	      var derivative = getVar(this, 'derivative');
	      switch (this.squash) {
	        case Neuron.squash.LOGISTIC:
	          buildSentence(activation, ' = (1 / (1 + Math.exp(-', state, ')))',
	            store_activation);
	          buildSentence(derivative, ' = ', activation, ' * (1 - ',
	            activation, ')', store_activation);
	          break;
	        case Neuron.squash.TANH:
	          var eP = getVar('aux');
	          var eN = getVar('aux_2');
	          buildSentence(eP, ' = Math.exp(', state, ')', store_activation);
	          buildSentence(eN, ' = 1 / ', eP, store_activation);
	          buildSentence(activation, ' = (', eP, ' - ', eN, ') / (', eP, ' + ', eN, ')', store_activation);
	          buildSentence(derivative, ' = 1 - (', activation, ' * ', activation, ')', store_activation);
	          break;
	        case Neuron.squash.IDENTITY:
	          buildSentence(activation, ' = ', state, store_activation);
	          buildSentence(derivative, ' = 1', store_activation);
	          break;
	        case Neuron.squash.HLIM:
	          buildSentence(activation, ' = +(', state, ' > 0)', store_activation);
	          buildSentence(derivative, ' = 1', store_activation);
	        case Neuron.squash.RELU:
	          buildSentence(activation, ' = ', state, ' > 0 ? ', state, ' : 0', store_activation);
	          buildSentence(derivative, ' = ', state, ' > 0 ? 1 : 0', store_activation);
	          break;
	      }

	      for (var id in this.trace.extended) {
	        // calculate extended elegibility traces in advance

	        var xtrace = this.trace.extended[id];
	        var neuron = this.neighboors[id];
	        var influence = getVar('influences[' + neuron.ID + ']');
	        var neuron_old = getVar(neuron, 'old');
	        var initialized = false;
	        if (neuron.selfconnection.gater == this)
	        {
	          buildSentence(influence, ' = ', neuron_old, store_trace);
	          initialized = true;
	        }
	        for (var incoming in this.trace.influences[neuron.ID]) {
	          var incoming_weight = getVar(this.trace.influences[neuron.ID]
	            [incoming], 'weight');
	          var incoming_activation = getVar(this.trace.influences[neuron.ID]
	            [incoming].from, 'activation');

	          if (initialized)
	            buildSentence(influence, ' += ', incoming_weight, ' * ', incoming_activation, store_trace);
	          else {
	            buildSentence(influence, ' = ', incoming_weight, ' * ', incoming_activation, store_trace);
	            initialized = true;
	          }
	        }
	      }

	      for (var i in this.connections.inputs) {
	        var input = this.connections.inputs[i];
	        if (input.gater)
	          var input_gain = getVar(input, 'gain');
	        var input_activation = getVar(input.from, 'activation');
	        var trace = getVar(this, 'trace', 'elegibility', input.ID, this.trace
	          .elegibility[input.ID]);
	        if (this.selfconnected()) {
	          if (this.selfconnection.gater) {
	            if (input.gater)
	              buildSentence(trace, ' = ', self_gain, ' * ', self_weight,
	                ' * ', trace, ' + ', input_gain, ' * ', input_activation,
	                store_trace);
	            else
	              buildSentence(trace, ' = ', self_gain, ' * ', self_weight,
	                ' * ', trace, ' + ', input_activation, store_trace);
	          } else {
	            if (input.gater)
	              buildSentence(trace, ' = ', self_weight, ' * ', trace, ' + ',
	                input_gain, ' * ', input_activation, store_trace);
	            else
	              buildSentence(trace, ' = ', self_weight, ' * ', trace, ' + ',
	                input_activation, store_trace);
	          }
	        } else {
	          if (input.gater)
	            buildSentence(trace, ' = ', input_gain, ' * ', input_activation,
	              store_trace);
	          else
	            buildSentence(trace, ' = ', input_activation, store_trace);
	        }
	        for (var id in this.trace.extended) {
	          // extended elegibility trace
	          var xtrace = this.trace.extended[id];
	          var neuron = this.neighboors[id];
	          var influence = getVar('influences[' + neuron.ID + ']');
	          var neuron_old = getVar(neuron, 'old');

	          var trace = getVar(this, 'trace', 'elegibility', input.ID, this.trace
	            .elegibility[input.ID]);
	          var xtrace = getVar(this, 'trace', 'extended', neuron.ID, input.ID,
	            this.trace.extended[neuron.ID][input.ID]);
	          if (neuron.selfconnected())
	            var neuron_self_weight = getVar(neuron.selfconnection, 'weight');
	          if (neuron.selfconnection.gater)
	            var neuron_self_gain = getVar(neuron.selfconnection, 'gain');
	          if (neuron.selfconnected())
	            if (neuron.selfconnection.gater)
	              buildSentence(xtrace, ' = ', neuron_self_gain, ' * ',
	                neuron_self_weight, ' * ', xtrace, ' + ', derivative, ' * ',
	                trace, ' * ', influence, store_trace);
	            else
	              buildSentence(xtrace, ' = ', neuron_self_weight, ' * ',
	                xtrace, ' + ', derivative, ' * ', trace, ' * ',
	                influence, store_trace);
	          else
	            buildSentence(xtrace, ' = ', derivative, ' * ', trace, ' * ',
	              influence, store_trace);
	        }
	      }
	      for (var connection in this.connections.gated) {
	        var gated_gain = getVar(this.connections.gated[connection], 'gain');
	        buildSentence(gated_gain, ' = ', activation, store_activation);
	      }
	    }
	    if (!isInput) {
	      var responsibility = getVar(this, 'error', 'responsibility', this.error
	        .responsibility);
	      if (isOutput) {
	        var target = getVar('target');
	        buildSentence(responsibility, ' = ', target, ' - ', activation,
	          store_propagation);
	        for (var id in this.connections.inputs) {
	          var input = this.connections.inputs[id];
	          var trace = getVar(this, 'trace', 'elegibility', input.ID, this.trace
	            .elegibility[input.ID]);
	          var input_weight = getVar(input, 'weight');
	          buildSentence(input_weight, ' += ', rate, ' * (', responsibility,
	            ' * ', trace, ')', store_propagation);
	        }
	        outputs.push(activation.id);
	      } else {
	        if (!noProjections && !noGates) {
	          var error = getVar('aux');
	          for (var id in this.connections.projected) {
	            var connection = this.connections.projected[id];
	            var neuron = connection.to;
	            var connection_weight = getVar(connection, 'weight');
	            var neuron_responsibility = getVar(neuron, 'error',
	              'responsibility', neuron.error.responsibility);
	            if (connection.gater) {
	              var connection_gain = getVar(connection, 'gain');
	              buildSentence(error, ' += ', neuron_responsibility, ' * ',
	                connection_gain, ' * ', connection_weight,
	                store_propagation);
	            } else
	              buildSentence(error, ' += ', neuron_responsibility, ' * ',
	                connection_weight, store_propagation);
	          }
	          var projected = getVar(this, 'error', 'projected', this.error.projected);
	          buildSentence(projected, ' = ', derivative, ' * ', error,
	            store_propagation);
	          buildSentence(error, ' = 0', store_propagation);
	          for (var id in this.trace.extended) {
	            var neuron = this.neighboors[id];
	            var influence = getVar('aux_2');
	            var neuron_old = getVar(neuron, 'old');
	            if (neuron.selfconnection.gater == this)
	              buildSentence(influence, ' = ', neuron_old, store_propagation);
	            else
	              buildSentence(influence, ' = 0', store_propagation);
	            for (var input in this.trace.influences[neuron.ID]) {
	              var connection = this.trace.influences[neuron.ID][input];
	              var connection_weight = getVar(connection, 'weight');
	              var neuron_activation = getVar(connection.from, 'activation');
	              buildSentence(influence, ' += ', connection_weight, ' * ',
	                neuron_activation, store_propagation);
	            }
	            var neuron_responsibility = getVar(neuron, 'error',
	              'responsibility', neuron.error.responsibility);
	            buildSentence(error, ' += ', neuron_responsibility, ' * ',
	              influence, store_propagation);
	          }
	          var gated = getVar(this, 'error', 'gated', this.error.gated);
	          buildSentence(gated, ' = ', derivative, ' * ', error,
	            store_propagation);
	          buildSentence(responsibility, ' = ', projected, ' + ', gated,
	            store_propagation);
	          for (var id in this.connections.inputs) {
	            var input = this.connections.inputs[id];
	            var gradient = getVar('aux');
	            var trace = getVar(this, 'trace', 'elegibility', input.ID, this
	              .trace.elegibility[input.ID]);
	            buildSentence(gradient, ' = ', projected, ' * ', trace,
	              store_propagation);
	            for (var id in this.trace.extended) {
	              var neuron = this.neighboors[id];
	              var neuron_responsibility = getVar(neuron, 'error',
	                'responsibility', neuron.error.responsibility);
	              var xtrace = getVar(this, 'trace', 'extended', neuron.ID,
	                input.ID, this.trace.extended[neuron.ID][input.ID]);
	              buildSentence(gradient, ' += ', neuron_responsibility, ' * ',
	                xtrace, store_propagation);
	            }
	            var input_weight = getVar(input, 'weight');
	            buildSentence(input_weight, ' += ', rate, ' * ', gradient,
	              store_propagation);
	          }

	        } else if (noGates) {
	          buildSentence(responsibility, ' = 0', store_propagation);
	          for (var id in this.connections.projected) {
	            var connection = this.connections.projected[id];
	            var neuron = connection.to;
	            var connection_weight = getVar(connection, 'weight');
	            var neuron_responsibility = getVar(neuron, 'error',
	              'responsibility', neuron.error.responsibility);
	            if (connection.gater) {
	              var connection_gain = getVar(connection, 'gain');
	              buildSentence(responsibility, ' += ', neuron_responsibility,
	                ' * ', connection_gain, ' * ', connection_weight,
	                store_propagation);
	            } else
	              buildSentence(responsibility, ' += ', neuron_responsibility,
	                ' * ', connection_weight, store_propagation);
	          }
	          buildSentence(responsibility, ' *= ', derivative,
	            store_propagation);
	          for (var id in this.connections.inputs) {
	            var input = this.connections.inputs[id];
	            var trace = getVar(this, 'trace', 'elegibility', input.ID, this
	              .trace.elegibility[input.ID]);
	            var input_weight = getVar(input, 'weight');
	            buildSentence(input_weight, ' += ', rate, ' * (',
	              responsibility, ' * ', trace, ')', store_propagation);
	          }
	        } else if (noProjections) {
	          buildSentence(responsibility, ' = 0', store_propagation);
	          for (var id in this.trace.extended) {
	            var neuron = this.neighboors[id];
	            var influence = getVar('aux');
	            var neuron_old = getVar(neuron, 'old');
	            if (neuron.selfconnection.gater == this)
	              buildSentence(influence, ' = ', neuron_old, store_propagation);
	            else
	              buildSentence(influence, ' = 0', store_propagation);
	            for (var input in this.trace.influences[neuron.ID]) {
	              var connection = this.trace.influences[neuron.ID][input];
	              var connection_weight = getVar(connection, 'weight');
	              var neuron_activation = getVar(connection.from, 'activation');
	              buildSentence(influence, ' += ', connection_weight, ' * ',
	                neuron_activation, store_propagation);
	            }
	            var neuron_responsibility = getVar(neuron, 'error',
	              'responsibility', neuron.error.responsibility);
	            buildSentence(responsibility, ' += ', neuron_responsibility,
	              ' * ', influence, store_propagation);
	          }
	          buildSentence(responsibility, ' *= ', derivative,
	            store_propagation);
	          for (var id in this.connections.inputs) {
	            var input = this.connections.inputs[id];
	            var gradient = getVar('aux');
	            buildSentence(gradient, ' = 0', store_propagation);
	            for (var id in this.trace.extended) {
	              var neuron = this.neighboors[id];
	              var neuron_responsibility = getVar(neuron, 'error',
	                'responsibility', neuron.error.responsibility);
	              var xtrace = getVar(this, 'trace', 'extended', neuron.ID,
	                input.ID, this.trace.extended[neuron.ID][input.ID]);
	              buildSentence(gradient, ' += ', neuron_responsibility, ' * ',
	                xtrace, store_propagation);
	            }
	            var input_weight = getVar(input, 'weight');
	            buildSentence(input_weight, ' += ', rate, ' * ', gradient,
	              store_propagation);
	          }
	        }
	      }
	      buildSentence(bias, ' += ', rate, ' * ', responsibility,
	        store_propagation);
	    }
	    return {
	      memory: varID,
	      neurons: neurons + 1,
	      inputs: inputs,
	      outputs: outputs,
	      targets: targets,
	      variables: variables,
	      activation_sentences: activation_sentences,
	      trace_sentences: trace_sentences,
	      propagation_sentences: propagation_sentences,
	      layers: layers
	    }
	  }
	}


	// represents a connection between two neurons
	Neuron.connection = function Connection(from, to, weight) {

	  if (!from || !to)
	    throw new Error("Connection Error: Invalid neurons");

	  this.ID = Neuron.connection.uid();
	  this.from = from;
	  this.to = to;
	  this.weight = typeof weight == 'undefined' ? Math.random() * .2 - .1 :
	    weight;
	  this.gain = 1;
	  this.gater = null;
	}


	// squashing functions
	Neuron.squash = {};

	// eq. 5 & 5'
	Neuron.squash.LOGISTIC = function(x, derivate) {
	  if (!derivate)
	    return 1 / (1 + Math.exp(-x));
	  var fx = Neuron.squash.LOGISTIC(x);
	  return fx * (1 - fx);
	};
	Neuron.squash.TANH = function(x, derivate) {
	  if (derivate)
	    return 1 - Math.pow(Neuron.squash.TANH(x), 2);
	  var eP = Math.exp(x);
	  var eN = 1 / eP;
	  return (eP - eN) / (eP + eN);
	};
	Neuron.squash.IDENTITY = function(x, derivate) {
	  return derivate ? 1 : x;
	};
	Neuron.squash.HLIM = function(x, derivate) {
	  return derivate ? 1 : x > 0 ? 1 : 0;
	};
	Neuron.squash.RELU = function(x, derivate) {
	  if (derivate)
	    return x > 0 ? 1 : 0;
	  return x > 0 ? x : 0;
	};

	// unique ID's
	(function() {
	  var neurons = 0;
	  var connections = 0;
	  Neuron.uid = function() {
	    return neurons++;
	  }
	  Neuron.connection.uid = function() {
	    return connections++;
	  }
	  Neuron.quantity = function() {
	    return {
	      neurons: neurons,
	      connections: connections
	    }
	  }
	})();

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {// export
	if (module) module.exports = Layer;

	// import
	var Neuron  = __webpack_require__(2)
	,   Network = __webpack_require__(5)

	/*******************************************************************************************
	                                            LAYER
	*******************************************************************************************/

	function Layer(size, label) {
	  this.size = size | 0;
	  this.list = [];
	  this.label = label || null;
	  this.connectedTo = [];

	  while (size--) {
	    var neuron = new Neuron();
	    this.list.push(neuron);
	  }
	}

	Layer.prototype = {

	  // activates all the neurons in the layer
	  activate: function(input) {

	    var activations = [];

	    if (typeof input != 'undefined') {
	      if (input.length != this.size)
	        throw new Error("INPUT size and LAYER size must be the same to activate!");

	      for (var id in this.list) {
	        var neuron = this.list[id];
	        var activation = neuron.activate(input[id]);
	        activations.push(activation);
	      }
	    } else {
	      for (var id in this.list) {
	        var neuron = this.list[id];
	        var activation = neuron.activate();
	        activations.push(activation);
	      }
	    }
	    return activations;
	  },

	  // propagates the error on all the neurons of the layer
	  propagate: function(rate, target) {

	    if (typeof target != 'undefined') {
	      if (target.length != this.size)
	        throw new Error("TARGET size and LAYER size must be the same to propagate!");

	      for (var id = this.list.length - 1; id >= 0; id--) {
	        var neuron = this.list[id];
	        neuron.propagate(rate, target[id]);
	      }
	    } else {
	      for (var id = this.list.length - 1; id >= 0; id--) {
	        var neuron = this.list[id];
	        neuron.propagate(rate);
	      }
	    }
	  },

	  // projects a connection from this layer to another one
	  project: function(layer, type, weights) {

	    if (layer instanceof Network)
	      layer = layer.layers.input;

	    if (layer instanceof Layer) {
	      if (!this.connected(layer))
	        return new Layer.connection(this, layer, type, weights);
	    } else
	      throw new Error("Invalid argument, you can only project connections to LAYERS and NETWORKS!");


	  },

	  // gates a connection betwenn two layers
	  gate: function(connection, type) {

	    if (type == Layer.gateType.INPUT) {
	      if (connection.to.size != this.size)
	        throw new Error("GATER layer and CONNECTION.TO layer must be the same size in order to gate!");

	      for (var id in connection.to.list) {
	        var neuron = connection.to.list[id];
	        var gater = this.list[id];
	        for (var input in neuron.connections.inputs) {
	          var gated = neuron.connections.inputs[input];
	          if (gated.ID in connection.connections)
	            gater.gate(gated);
	        }
	      }
	    } else if (type == Layer.gateType.OUTPUT) {
	      if (connection.from.size != this.size)
	        throw new Error("GATER layer and CONNECTION.FROM layer must be the same size in order to gate!");

	      for (var id in connection.from.list) {
	        var neuron = connection.from.list[id];
	        var gater = this.list[id];
	        for (var projected in neuron.connections.projected) {
	          var gated = neuron.connections.projected[projected];
	          if (gated.ID in connection.connections)
	            gater.gate(gated);
	        }
	      }
	    } else if (type == Layer.gateType.ONE_TO_ONE) {
	      if (connection.size != this.size)
	        throw new Error("The number of GATER UNITS must be the same as the number of CONNECTIONS to gate!");

	      for (var id in connection.list) {
	        var gater = this.list[id];
	        var gated = connection.list[id];
	        gater.gate(gated);
	      }
	    }
	    connection.gatedfrom.push({layer: this, type: type});
	  },

	  // true or false whether the whole layer is self-connected or not
	  selfconnected: function() {

	    for (var id in this.list) {
	      var neuron = this.list[id];
	      if (!neuron.selfconnected())
	        return false;
	    }
	    return true;
	  },

	  // true of false whether the layer is connected to another layer (parameter) or not
	  connected: function(layer) {
	    // Check if ALL to ALL connection
	    var connections = 0;
	    for (var here in this.list) {
	      for (var there in layer.list) {
	        var from = this.list[here];
	        var to = layer.list[there];
	        var connected = from.connected(to);
	        if (connected.type == 'projected')
	          connections++;
	      }
	    }
	    if (connections == this.size * layer.size)
	      return Layer.connectionType.ALL_TO_ALL;

	    // Check if ONE to ONE connection
	    connections = 0;
	    for (var neuron in this.list) {
	      var from = this.list[neuron];
	      var to = layer.list[neuron];
	      var connected = from.connected(to);
	      if (connected.type == 'projected')
	        connections++;
	    }
	    if (connections == this.size)
	      return Layer.connectionType.ONE_TO_ONE;
	  },

	  // clears all the neuorns in the layer
	  clear: function() {
	    for (var id in this.list) {
	      var neuron = this.list[id];
	      neuron.clear();
	    }
	  },

	  // resets all the neurons in the layer
	  reset: function() {
	    for (var id in this.list) {
	      var neuron = this.list[id];
	      neuron.reset();
	    }
	  },

	  // returns all the neurons in the layer (array)
	  neurons: function() {
	    return this.list;
	  },

	  // adds a neuron to the layer
	  add: function(neuron) {
	    this.neurons[neuron.ID] = neuron || new Neuron();
	    this.list.push(neuron);
	    this.size++;
	  },

	  set: function(options) {
	    options = options || {};

	    for (var i in this.list) {
	      var neuron = this.list[i];
	      if (options.label)
	        neuron.label = options.label + '_' + neuron.ID;
	      if (options.squash)
	        neuron.squash = options.squash;
	      if (options.bias)
	        neuron.bias = options.bias;
	    }
	    return this;
	  }
	}

	// represents a connection from one layer to another, and keeps track of its weight and gain
	Layer.connection = function LayerConnection(fromLayer, toLayer, type, weights) {
	  this.ID = Layer.connection.uid();
	  this.from = fromLayer;
	  this.to = toLayer;
	  this.selfconnection = toLayer == fromLayer;
	  this.type = type;
	  this.connections = {};
	  this.list = [];
	  this.size = 0;
	  this.gatedfrom = [];

	  if (typeof this.type == 'undefined')
	  {
	    if (fromLayer == toLayer)
	      this.type = Layer.connectionType.ONE_TO_ONE;
	    else
	      this.type = Layer.connectionType.ALL_TO_ALL;
	  }

	  if (this.type == Layer.connectionType.ALL_TO_ALL ||
	      this.type == Layer.connectionType.ALL_TO_ELSE) {
	    for (var here in this.from.list) {
	      for (var there in this.to.list) {
	        var from = this.from.list[here];
	        var to = this.to.list[there];
	        if(this.type == Layer.connectionType.ALL_TO_ELSE && from == to)
	          continue;
	        var connection = from.project(to, weights);

	        this.connections[connection.ID] = connection;
	        this.size = this.list.push(connection);
	      }
	    }
	  } else if (this.type == Layer.connectionType.ONE_TO_ONE) {

	    for (var neuron in this.from.list) {
	      var from = this.from.list[neuron];
	      var to = this.to.list[neuron];
	      var connection = from.project(to, weights);

	      this.connections[connection.ID] = connection;
	      this.size = this.list.push(connection);
	    }
	  }

	  fromLayer.connectedTo.push(this);
	}

	// types of connections
	Layer.connectionType = {};
	Layer.connectionType.ALL_TO_ALL = "ALL TO ALL";
	Layer.connectionType.ONE_TO_ONE = "ONE TO ONE";
	Layer.connectionType.ALL_TO_ELSE = "ALL TO ELSE";

	// types of gates
	Layer.gateType = {};
	Layer.gateType.INPUT = "INPUT";
	Layer.gateType.OUTPUT = "OUTPUT";
	Layer.gateType.ONE_TO_ONE = "ONE TO ONE";

	(function() {
	  var connections = 0;
	  Layer.connection.uid = function() {
	    return connections++;
	  }
	})();

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {// export
	if (module) module.exports = Network;

	// import
	var Neuron  = __webpack_require__(2)
	,   Layer   = __webpack_require__(4)
	,   Trainer = __webpack_require__(6)

	/*******************************************************************************************
	                                         NETWORK
	*******************************************************************************************/

	function Network(layers) {
	  if (typeof layers != 'undefined') {
	    this.layers = layers || {
	      input: null,
	      hidden: {},
	      output: null
	    };
	    this.optimized = null;
	  }
	}
	Network.prototype = {

	  // feed-forward activation of all the layers to produce an ouput
	  activate: function(input) {

	    if (this.optimized === false)
	    {
	      this.layers.input.activate(input);
	      for (var layer in this.layers.hidden)
	        this.layers.hidden[layer].activate();
	      return this.layers.output.activate();
	    }
	    else
	    {
	      if (this.optimized == null)
	        this.optimize();
	      return this.optimized.activate(input);
	    }
	  },

	  // back-propagate the error thru the network
	  propagate: function(rate, target) {

	    if (this.optimized === false)
	    {
	      this.layers.output.propagate(rate, target);
	      var reverse = [];
	      for (var layer in this.layers.hidden)
	        reverse.push(this.layers.hidden[layer]);
	      reverse.reverse();
	      for (var layer in reverse)
	        reverse[layer].propagate(rate);
	    }
	    else
	    {
	      if (this.optimized == null)
	        this.optimize();
	      this.optimized.propagate(rate, target);
	    }
	  },

	  // project a connection to another unit (either a network or a layer)
	  project: function(unit, type, weights) {

	    if (this.optimized)
	      this.optimized.reset();

	    if (unit instanceof Network)
	      return this.layers.output.project(unit.layers.input, type, weights);

	    if (unit instanceof Layer)
	      return this.layers.output.project(unit, type, weights);

	    throw new Error("Invalid argument, you can only project connections to LAYERS and NETWORKS!");
	  },

	  // let this network gate a connection
	  gate: function(connection, type) {
	    if (this.optimized)
	      this.optimized.reset();
	    this.layers.output.gate(connection, type);
	  },

	  // clear all elegibility traces and extended elegibility traces (the network forgets its context, but not what was trained)
	  clear: function() {

	    this.restore();

	    var inputLayer = this.layers.input,
	      outputLayer = this.layers.output;

	    inputLayer.clear();
	    for (var layer in this.layers.hidden) {
	      var hiddenLayer = this.layers.hidden[layer];
	      hiddenLayer.clear();
	    }
	    outputLayer.clear();

	    if (this.optimized)
	      this.optimized.reset();
	  },

	  // reset all weights and clear all traces (ends up like a new network)
	  reset: function() {

	    this.restore();

	    var inputLayer = this.layers.input,
	      outputLayer = this.layers.output;

	    inputLayer.reset();
	    for (var layer in this.layers.hidden) {
	      var hiddenLayer = this.layers.hidden[layer];
	      hiddenLayer.reset();
	    }
	    outputLayer.reset();

	    if (this.optimized)
	      this.optimized.reset();
	  },

	  // hardcodes the behaviour of the whole network into a single optimized function
	  optimize: function() {

	    var that = this;
	    var optimized = {};
	    var neurons = this.neurons();

	    for (var i in neurons) {
	      var neuron = neurons[i].neuron;
	      var layer = neurons[i].layer;
	      while (neuron.neuron)
	        neuron = neuron.neuron;
	      optimized = neuron.optimize(optimized, layer);
	    }
	    for (var i in optimized.propagation_sentences)
	      optimized.propagation_sentences[i].reverse();
	    optimized.propagation_sentences.reverse();

	    var hardcode = "";
	    hardcode += "var F = Float64Array ? new Float64Array(" + optimized.memory +
	      ") : []; ";
	    for (var i in optimized.variables)
	      hardcode += "F[" + optimized.variables[i].id + "] = " + (optimized.variables[
	        i].value || 0) + "; ";
	    hardcode += "var activate = function(input){\n";
	    for (var i in optimized.inputs)
	      hardcode += "F[" + optimized.inputs[i] + "] = input[" + i + "]; ";
	    for (var currentLayer in optimized.activation_sentences) {
	      if (optimized.activation_sentences[currentLayer].length > 0) {
	        for (var currentNeuron in optimized.activation_sentences[currentLayer]) {
	          hardcode += optimized.activation_sentences[currentLayer][currentNeuron].join(" ");
	          hardcode += optimized.trace_sentences[currentLayer][currentNeuron].join(" ");
	        }
	      }
	    }
	    hardcode += " var output = []; "
	    for (var i in optimized.outputs)
	      hardcode += "output[" + i + "] = F[" + optimized.outputs[i] + "]; ";
	    hardcode += "return output; }; "
	    hardcode += "var propagate = function(rate, target){\n";
	    hardcode += "F[" + optimized.variables.rate.id + "] = rate; ";
	    for (var i in optimized.targets)
	      hardcode += "F[" + optimized.targets[i] + "] = target[" + i + "]; ";
	    for (var currentLayer in optimized.propagation_sentences)
	      for (var currentNeuron in optimized.propagation_sentences[currentLayer])
	        hardcode += optimized.propagation_sentences[currentLayer][currentNeuron].join(" ") + " ";
	    hardcode += " };\n";
	    hardcode +=
	      "var ownership = function(memoryBuffer){\nF = memoryBuffer;\nthis.memory = F;\n};\n";
	    hardcode +=
	      "return {\nmemory: F,\nactivate: activate,\npropagate: propagate,\nownership: ownership\n};";
	    hardcode = hardcode.split(";").join(";\n");

	    var constructor = new Function(hardcode);

	    var network = constructor();
	    network.data = {
	      variables: optimized.variables,
	      activate: optimized.activation_sentences,
	      propagate: optimized.propagation_sentences,
	      trace: optimized.trace_sentences,
	      inputs: optimized.inputs,
	      outputs: optimized.outputs,
	      check_activation: this.activate,
	      check_propagation: this.propagate
	    }

	    network.reset = function() {
	      if (that.optimized) {
	        that.optimized = null;
	        that.activate = network.data.check_activation;
	        that.propagate = network.data.check_propagation;
	      }
	    }

	    this.optimized = network;
	    this.activate = network.activate;
	    this.propagate = network.propagate;
	  },

	  // restores all the values from the optimized network the their respective objects in order to manipulate the network
	  restore: function() {
	    if (!this.optimized)
	      return;

	    var optimized = this.optimized;

	    var getValue = function() {
	      var args = Array.prototype.slice.call(arguments);

	      var unit = args.shift();
	      var prop = args.pop();

	      var id = prop + '_';
	      for (var property in args)
	        id += args[property] + '_';
	      id += unit.ID;

	      var memory = optimized.memory;
	      var variables = optimized.data.variables;

	      if (id in variables)
	        return memory[variables[id].id];
	      return 0;
	    }

	    var list = this.neurons();

	    // link id's to positions in the array
	    var ids = {};
	    for (var i in list) {
	      var neuron = list[i].neuron;
	      while (neuron.neuron)
	        neuron = neuron.neuron;

	      neuron.state = getValue(neuron, 'state');
	      neuron.old = getValue(neuron, 'old');
	      neuron.activation = getValue(neuron, 'activation');
	      neuron.bias = getValue(neuron, 'bias');

	      for (var input in neuron.trace.elegibility)
	        neuron.trace.elegibility[input] = getValue(neuron, 'trace',
	          'elegibility', input);

	      for (var gated in neuron.trace.extended)
	        for (var input in neuron.trace.extended[gated])
	          neuron.trace.extended[gated][input] = getValue(neuron, 'trace',
	            'extended', gated, input);
	    }

	    // get connections
	    for (var i in list) {
	      var neuron = list[i].neuron;
	      while (neuron.neuron)
	        neuron = neuron.neuron;

	      for (var j in neuron.connections.projected) {
	        var connection = neuron.connections.projected[j];
	        connection.weight = getValue(connection, 'weight');
	        connection.gain = getValue(connection, 'gain');
	      }
	    }
	  },

	  // returns all the neurons in the network
	  neurons: function() {

	    var neurons = [];

	    var inputLayer = this.layers.input.neurons(),
	      outputLayer = this.layers.output.neurons();

	    for (var neuron in inputLayer)
	      neurons.push({
	        neuron: inputLayer[neuron],
	        layer: 'input'
	      });

	    for (var layer in this.layers.hidden) {
	      var hiddenLayer = this.layers.hidden[layer].neurons();
	      for (var neuron in hiddenLayer)
	        neurons.push({
	          neuron: hiddenLayer[neuron],
	          layer: layer
	        });
	    }
	    for (var neuron in outputLayer)
	      neurons.push({
	        neuron: outputLayer[neuron],
	        layer: 'output'
	      });

	    return neurons;
	  },

	  // returns number of inputs of the network
	  inputs: function() {
	    return this.layers.input.size;
	  },

	  // returns number of outputs of hte network
	  outputs: function() {
	    return this.layers.output.size;
	  },

	  // sets the layers of the network
	  set: function(layers) {

	    this.layers = layers;
	    if (this.optimized)
	      this.optimized.reset();
	  },

	  setOptimize: function(bool){
	    this.restore();
	    if (this.optimized)
	      this.optimized.reset();
	    this.optimized = bool? null : false;
	  },

	  // returns a json that represents all the neurons and connections of the network
	  toJSON: function(ignoreTraces) {

	    this.restore();

	    var list = this.neurons();
	    var neurons = [];
	    var connections = [];

	    // link id's to positions in the array
	    var ids = {};
	    for (var i in list) {
	      var neuron = list[i].neuron;
	      while (neuron.neuron)
	        neuron = neuron.neuron;
	      ids[neuron.ID] = i;

	      var copy = {
	        trace: {
	          elegibility: {},
	          extended: {}
	        },
	        state: neuron.state,
	        old: neuron.old,
	        activation: neuron.activation,
	        bias: neuron.bias,
	        layer: list[i].layer
	      };

	      copy.squash = neuron.squash == Neuron.squash.LOGISTIC ? "LOGISTIC" :
	        neuron.squash == Neuron.squash.TANH ? "TANH" :
	        neuron.squash == Neuron.squash.IDENTITY ? "IDENTITY" :
	        neuron.squash == Neuron.squash.HLIM ? "HLIM" :
	        null;

	      neurons.push(copy);
	    }

	    // get connections
	    for (var i in list) {
	      var neuron = list[i].neuron;
	      while (neuron.neuron)
	        neuron = neuron.neuron;

	      for (var j in neuron.connections.projected) {
	        var connection = neuron.connections.projected[j];
	        connections.push({
	          from: ids[connection.from.ID],
	          to: ids[connection.to.ID],
	          weight: connection.weight,
	          gater: connection.gater ? ids[connection.gater.ID] : null,
	        });
	      }
	      if (neuron.selfconnected())
	        connections.push({
	          from: ids[neuron.ID],
	          to: ids[neuron.ID],
	          weight: neuron.selfconnection.weight,
	          gater: neuron.selfconnection.gater ? ids[neuron.selfconnection.gater.ID] : null,
	        });
	    }

	    return {
	      neurons: neurons,
	      connections: connections
	    }
	  },

	  // export the topology into dot language which can be visualized as graphs using dot
	  /* example: ... console.log(net.toDotLang());
	              $ node example.js > example.dot
	              $ dot example.dot -Tpng > out.png
	  */
	  toDot: function(edgeConnection) {
	    if (! typeof edgeConnection)
	      edgeConnection = false;
	    var code = "digraph nn {\n    rankdir = BT\n";
	    var layers = [this.layers.input].concat(this.layers.hidden, this.layers.output);
	    for (var layer in layers) {
	      for (var to in layers[layer].connectedTo) { // projections
	        var connection = layers[layer].connectedTo[to];
	        var layerTo = connection.to;
	        var size = connection.size;
	        var layerID = layers.indexOf(layers[layer]);
	        var layerToID = layers.indexOf(layerTo);
	        /* http://stackoverflow.com/questions/26845540/connect-edges-with-graph-dot
	         * DOT does not support edge-to-edge connections
	         * This workaround produces somewhat weird graphs ...
	        */
	        if ( edgeConnection) {
	          if (connection.gatedfrom.length) {
	            var fakeNode = "fake" + layerID + "_" + layerToID;
	            code += "    " + fakeNode +
	              " [label = \"\", shape = point, width = 0.01, height = 0.01]\n";
	            code += "    " + layerID + " -> " + fakeNode + " [label = " + size + ", arrowhead = none]\n";
	            code += "    " + fakeNode + " -> " + layerToID + "\n";
	          } else
	            code += "    " + layerID + " -> " + layerToID + " [label = " + size + "]\n";
	          for (var from in connection.gatedfrom) { // gatings
	            var layerfrom = connection.gatedfrom[from].layer;
	            var type = connection.gatedfrom[from].type;
	            var layerfromID = layers.indexOf(layerfrom);
	            code += "    " + layerfromID + " -> " + fakeNode + " [color = blue]\n";
	          }
	        } else {
	          code += "    " + layerID + " -> " + layerToID + " [label = " + size + "]\n";
	          for (var from in connection.gatedfrom) { // gatings
	            var layerfrom = connection.gatedfrom[from].layer;
	            var type = connection.gatedfrom[from].type;
	            var layerfromID = layers.indexOf(layerfrom);
	            code += "    " + layerfromID + " -> " + layerToID + " [color = blue]\n";
	          }
	        }
	      }
	    }
	    code += "}\n";
	    return {
	      code: code,
	      link: "https://chart.googleapis.com/chart?chl=" + escape(code.replace("/ /g", "+")) + "&cht=gv"
	    }
	  },

	  // returns a function that works as the activation of the network and can be used without depending on the library
	  standalone: function() {
	    if (!this.optimized)
	      this.optimize();

	    var data = this.optimized.data;

	    // build activation function
	    var activation = "function (input) {\n";

	    // build inputs
	    for (var i in data.inputs)
	      activation += "F[" + data.inputs[i] + "] = input[" + i + "];\n";

	    // build network activation
	    for (var neuron in data.activate) { // shouldn't this be layer?
	      for (var sentence in data.activate[neuron])
	        activation += data.activate[neuron][sentence].join('') + "\n";
	    }

	    // build outputs
	    activation += "var output = [];\n";
	    for (var i in data.outputs)
	      activation += "output[" + i + "] = F[" + data.outputs[i] + "];\n";
	    activation += "return output;\n}";

	    // reference all the positions in memory
	    var memory = activation.match(/F\[(\d+)\]/g);
	    var dimension = 0;
	    var ids = {};
	    for (var address in memory) {
	      var tmp = memory[address].match(/\d+/)[0];
	      if (!(tmp in ids)) {
	        ids[tmp] = dimension++;
	      }
	    }
	    var hardcode = "F = {\n";
	    for (var i in ids)
	      hardcode += ids[i] + ": " + this.optimized.memory[i] + ",\n";
	    hardcode = hardcode.substring(0, hardcode.length - 2) + "\n};\n";
	    hardcode = "var run = " + activation.replace(/F\[(\d+)]/g, function(
	      index) {
	      return 'F[' + ids[index.match(/\d+/)[0]] + ']'
	    }).replace("{\n", "{\n" + hardcode + "") + ";\n";
	    hardcode += "return run";

	    // return standalone function
	    return new Function(hardcode)();
	  },


	  // Return a HTML5 WebWorker specialized on training the network stored in `memory`.
	  // Train based on the given dataSet and options.
	  // The worker returns the updated `memory` when done.
	  worker: function(memory, set, options) {

	    // Copy the options and set defaults (options might be different for each worker)
	    var workerOptions = {};
	    if(options) workerOptions = options
	    workerOptions.rate = options.rate || .2;
	    workerOptions.iterations = options.iterations || 100000;
	    workerOptions.error = options.error || .005;
	    workerOptions.cost = options.cost || null;
	    workerOptions.crossValidate = options.crossValidate || null;

	    // Cost function might be different for each worker
	    costFunction = "var cost = " + (options && options.cost || this.cost || Trainer.cost.MSE) + ";\n";
	    var workerFunction = Network.getWorkerSharedFunctions();
	    workerFunction = workerFunction.replace(/var cost = options && options\.cost \|\| this\.cost \|\| Trainer\.cost\.MSE;/g, costFunction);

	    // Set what we do when training is finished
	    workerFunction = workerFunction.replace('return results;',
	                      'postMessage({action: "done", message: results, memoryBuffer: F}, [F.buffer]);');

	    // Replace log with postmessage
	    workerFunction = workerFunction.replace("console.log('iterations', iterations, 'error', error, 'rate', currentRate)",
	              "postMessage({action: 'log', message: {\n" +
	                  "iterations: iterations,\n" +
	                  "error: error,\n" +
	                  "rate: currentRate\n" +
	                "}\n" +
	              "})");

	    // Replace schedule with postmessage
	    workerFunction = workerFunction.replace("abort = this.schedule.do({ error: error, iterations: iterations, rate: currentRate })",
	              "postMessage({action: 'schedule', message: {\n" +
	                  "iterations: iterations,\n" +
	                  "error: error,\n" +
	                  "rate: currentRate\n" +
	                "}\n" +
	              "})");

	    if (!this.optimized)
	      this.optimize();

	    var hardcode = "var inputs = " + this.optimized.data.inputs.length + ";\n";
	    hardcode += "var outputs = " + this.optimized.data.outputs.length + ";\n";
	    hardcode += "var F =  new Float64Array([" + this.optimized.memory.toString() + "]);\n";
	    hardcode += "var activate = " + this.optimized.activate.toString() + ";\n";
	    hardcode += "var propagate = " + this.optimized.propagate.toString() + ";\n";
	    hardcode +=
	        "onmessage = function(e) {\n" +
	          "if (e.data.action == 'startTraining') {\n" +
	            "train(" + JSON.stringify(set) + "," + JSON.stringify(workerOptions) + ");\n" +
	          "}\n" +
	        "}";

	    var workerSourceCode = workerFunction + '\n' + hardcode;
	    var blob = new Blob([workerSourceCode]);
	    var blobURL = window.URL.createObjectURL(blob);

	    return new Worker(blobURL);
	  },

	  // returns a copy of the network
	  clone: function() {
	    return Network.fromJSON(this.toJSON());
	  }
	}

	/**
	 * Creates a static String to store the source code of the functions
	 *  that are identical for all the workers (train, _trainSet, test)
	 *
	 * @return {String} Source code that can train a network inside a worker.
	 * @static
	 */
	Network.getWorkerSharedFunctions = function() {
	  // If we already computed the source code for the shared functions
	  if(typeof Network._SHARED_WORKER_FUNCTIONS !== 'undefined')
	    return Network._SHARED_WORKER_FUNCTIONS;

	  // Otherwise compute and return the source code
	  // We compute them by simply copying the source code of the train, _trainSet and test functions
	  //  using the .toString() method

	  // Load and name the train function
	  var train_f = Trainer.prototype.train.toString();
	  train_f = train_f.replace('function (set', 'function train(set') + '\n';

	  // Load and name the _trainSet function
	  var _trainSet_f = Trainer.prototype._trainSet.toString().replace(/this.network./g, '');
	  _trainSet_f = _trainSet_f.replace('function (set', 'function _trainSet(set') + '\n';
	  _trainSet_f = _trainSet_f.replace('this.crossValidate', 'crossValidate');
	  _trainSet_f = _trainSet_f.replace('crossValidate = true', 'crossValidate = { }');

	  // Load and name the test function
	  var test_f = Trainer.prototype.test.toString().replace(/this.network./g, '');
	  test_f = test_f.replace('function (set', 'function test(set') + '\n';

	  return Network._SHARED_WORKER_FUNCTIONS = train_f + _trainSet_f + test_f;
	};

	// rebuild a network that has been stored in a json using the method toJSON()
	Network.fromJSON = function(json) {

	  var neurons = [];

	  var layers = {
	    input: new Layer(),
	    hidden: [],
	    output: new Layer()
	  }

	  for (var i in json.neurons) {
	    var config = json.neurons[i];

	    var neuron = new Neuron();
	    neuron.trace.elegibility = {};
	    neuron.trace.extended = {};
	    neuron.state = config.state;
	    neuron.old = config.old;
	    neuron.activation = config.activation;
	    neuron.bias = config.bias;
	    neuron.squash = config.squash in Neuron.squash ? Neuron.squash[config.squash] : Neuron.squash.LOGISTIC;
	    neurons.push(neuron);

	    if (config.layer == 'input')
	      layers.input.add(neuron);
	    else if (config.layer == 'output')
	      layers.output.add(neuron);
	    else {
	      if (typeof layers.hidden[config.layer] == 'undefined')
	        layers.hidden[config.layer] = new Layer();
	      layers.hidden[config.layer].add(neuron);
	    }
	  }

	  for (var i in json.connections) {
	    var config = json.connections[i];
	    var from = neurons[config.from];
	    var to = neurons[config.to];
	    var weight = config.weight
	    var gater = neurons[config.gater];

	    var connection = from.project(to, weight);
	    if (gater)
	      gater.gate(connection);
	  }

	  return new Network(layers);
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {// export
	if (module) module.exports = Trainer;

	/*******************************************************************************************
	                                        TRAINER
	*******************************************************************************************/

	function Trainer(network, options) {
	  options = options || {};
	  this.network = network;
	  this.rate = options.rate || .2;
	  this.iterations = options.iterations || 100000;
	  this.error = options.error || .005;
	  this.cost = options.cost || null;
	  this.crossValidate = options.crossValidate || null;
	}

	Trainer.prototype = {

	  // trains any given set to a network
	  train: function(set, options) {

	    var error = 1;
	    var iterations = 0;
      var bucketSize = 0;
	    var abort = false;
	    var input, output, target, currentRate;
	    var cost = options && options.cost || this.cost || Trainer.cost.MSE;
	    var crossValidate = false, testSet, trainSet;

	    var start = Date.now();

	    if (options) {
	      if (options.shuffle) {
	        //+ Jonas Raoni Soares Silva
	        //@ http://jsfromhell.com/array/shuffle [v1.0]
	        function shuffle(o) { //v1.0
	          for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	          return o;
	        };
	      }
	      if (options.iterations)
	        this.iterations = options.iterations;
	      if (options.error)
	        this.error = options.error;
	      if (options.rate)
	        this.rate = options.rate;
	      if (options.cost)
	        this.cost = options.cost;
	      if (options.schedule)
	        this.schedule = options.schedule;
	      if (options.customLog){
	        // for backward compatibility with code that used customLog
	        console.log('Deprecated: use schedule instead of customLog')
	        this.schedule = options.customLog;
	      }
	      if (this.crossValidate || options.crossValidate) {
	        if(!this.crossValidate) this.crossValidate = {};
	        crossValidate = true;
	        if (options.crossValidate.testSize)
	          this.crossValidate.testSize = options.crossValidate.testSize;
	        if (options.crossValidate.testError)
	          this.crossValidate.testError = options.crossValidate.testError;
	      }
	    }

	    currentRate = this.rate;
	    if(Array.isArray(this.rate)) {
	      bucketSize = Math.floor(this.iterations / this.rate.length);
	    }

	    if(crossValidate) {
	      var numTrain = Math.ceil((1 - this.crossValidate.testSize) * set.length);
	      trainSet = set.slice(0, numTrain);
	      testSet = set.slice(numTrain);
	    }

	    while ((!abort && iterations < this.iterations && error > this.error)) {
	      if (crossValidate && error <= this.crossValidate.testError) {
	        break;
	      }

	      var currentSetSize = set.length;
	      error = 0;

	      if(bucketSize > 0) {
	        var currentBucket = Math.floor(iterations / bucketSize);
	        currentRate = this.rate[currentBucket] || currentRate;
	      }

	      if (crossValidate) {
	        this._trainSet(trainSet, currentRate, cost);
	        error += this.test(testSet).error;
	        currentSetSize = 1;
	      } else {
	        error += this._trainSet(set, currentRate, cost);
	        currentSetSize = set.length;
	      }

	      // check error
	      iterations++;
	      error /= currentSetSize;

	      if (options) {
	        if (this.schedule && this.schedule.every && iterations %
	          this.schedule.every == 0)
	          abort = this.schedule.do({ error: error, iterations: iterations, rate: currentRate });
	        else if (options.log && iterations % options.log == 0) {
	          console.log('iterations', iterations, 'error', error, 'rate', currentRate);
	        };
	        if (options.shuffle)
	          shuffle(set);
	      }
	    }

	    var results = {
	      error: error,
	      iterations: iterations,
	      time: Date.now() - start
	    }

	    return results;
	  },

	  // trains any given set to a network, using a WebWorker (only for the browser). Returns a Promise of the results.
	  trainAsync: function(set, options) {
	    var train = this.workerTrain.bind(this)
	    return new Promise(function(resolve, reject) {
	      try {
	        train(set, resolve, options, true)
	      } catch(e) {
	        reject(e)
	      }
	    })
	  },

	  // preforms one training epoch and returns the error (private function used in this.train)
	  _trainSet: function(set, currentRate, costFunction) {
	    var errorSum = 0;
	    for (var train in set) {
	      var input = set[train].input;
	      var target = set[train].output;

	      var output = this.network.activate(input);
	      this.network.propagate(currentRate, target);

	      errorSum += costFunction(target, output);
	    }
	    return errorSum;
	  },

	  // tests a set and returns the error and elapsed time
	  test: function(set, options) {

	    var error = 0;
	    var abort = false;
	    var input, output, target;
	    var cost = options && options.cost || this.cost || Trainer.cost.MSE;

	    var start = Date.now();

	    for (var test in set) {
	      input = set[test].input;
	      target = set[test].output;
	      output = this.network.activate(input);
	      error += cost(target, output);
	    }

	    error /= set.length;

	    var results = {
	      error: error,
	      time: Date.now() - start
	    }

	    return results;
	  },

	  // trains any given set to a network using a WebWorker [deprecated: use trainAsync instead]
	  workerTrain: function(set, callback, options, suppressWarning) {

	    if (!suppressWarning) {
	      console.warn('Deprecated: do not use `workerTrain`, use `trainAsync` instead.')
	    }
	    var that = this;

	    if (!this.network.optimized)
	      this.network.optimize();

	    // Create a new worker
	    var worker = this.network.worker(this.network.optimized.memory, set, options);

	    // train the worker
	    worker.onmessage = function(e) {
	      switch(e.data.action) {
	          case 'done':
	            var iterations = e.data.message.iterations;
	            var error = e.data.message.error;
	            var time = e.data.message.time;

	            that.network.optimized.ownership(e.data.memoryBuffer);

	            // Done callback
	            callback({
	              error: error,
	              iterations: iterations,
	              time: time
	            });

	            // Delete the worker and all its associated memory
	            worker.terminate();
	          break;

	          case 'log':
	            console.log(e.data.message);

	          case 'schedule':
	            if (options && options.schedule && typeof options.schedule.do === 'function') {
	              var scheduled = options.schedule.do
	              scheduled(e.data.message)
	            }
	          break;
	      }
	    }

	    // Start the worker
	    worker.postMessage({action: 'startTraining'});
	  },

	  // trains an XOR to the network
	  XOR: function(options) {

	    if (this.network.inputs() != 2 || this.network.outputs() != 1)
	      throw new Error("Incompatible network (2 inputs, 1 output)");

	    var defaults = {
	      iterations: 100000,
	      log: false,
	      shuffle: true,
	      cost: Trainer.cost.MSE
	    }

	    if (options)
	      for (var i in options)
	        defaults[i] = options[i];

	    return this.train([{
	      input: [0, 0],
	      output: [0]
	    }, {
	      input: [1, 0],
	      output: [1]
	    }, {
	      input: [0, 1],
	      output: [1]
	    }, {
	      input: [1, 1],
	      output: [0]
	    }], defaults);
	  },

	  // trains the network to pass a Distracted Sequence Recall test
	  DSR: function(options) {
	    options = options || {};

	    var targets = options.targets || [2, 4, 7, 8];
	    var distractors = options.distractors || [3, 5, 6, 9];
	    var prompts = options.prompts || [0, 1];
	    var length = options.length || 24;
	    var criterion = options.success || 0.95;
	    var iterations = options.iterations || 100000;
	    var rate = options.rate || .1;
	    var log = options.log || 0;
	    var schedule = options.schedule || {};
	    var cost = options.cost || this.cost || Trainer.cost.CROSS_ENTROPY;

	    var trial = correct = i = j = success = 0,
	      error = 1,
	      symbols = targets.length + distractors.length + prompts.length;

	    var noRepeat = function(range, avoid) {
	      var number = Math.random() * range | 0;
	      var used = false;
	      for (var i in avoid)
	        if (number == avoid[i])
	          used = true;
	      return used ? noRepeat(range, avoid) : number;
	    }

	    var equal = function(prediction, output) {
	      for (var i in prediction)
	        if (Math.round(prediction[i]) != output[i])
	          return false;
	      return true;
	    }

	    var start = Date.now();

	    while (trial < iterations && (success < criterion || trial % 1000 != 0)) {
	      // generate sequence
	      var sequence = [],
	        sequenceLength = length - prompts.length;
	      for (i = 0; i < sequenceLength; i++) {
	        var any = Math.random() * distractors.length | 0;
	        sequence.push(distractors[any]);
	      }
	      var indexes = [],
	        positions = [];
	      for (i = 0; i < prompts.length; i++) {
	        indexes.push(Math.random() * targets.length | 0);
	        positions.push(noRepeat(sequenceLength, positions));
	      }
	      positions = positions.sort();
	      for (i = 0; i < prompts.length; i++) {
	        sequence[positions[i]] = targets[indexes[i]];
	        sequence.push(prompts[i]);
	      }

	      //train sequence
	      var targetsCorrect = distractorsCorrect = 0;
	      error = 0;
	      for (i = 0; i < length; i++) {
	        // generate input from sequence
	        var input = [];
	        for (j = 0; j < symbols; j++)
	          input[j] = 0;
	        input[sequence[i]] = 1;

	        // generate target output
	        var output = [];
	        for (j = 0; j < targets.length; j++)
	          output[j] = 0;

	        if (i >= sequenceLength) {
	          var index = i - sequenceLength;
	          output[indexes[index]] = 1;
	        }

	        // check result
	        var prediction = this.network.activate(input);

	        if (equal(prediction, output))
	          if (i < sequenceLength)
	            distractorsCorrect++;
	          else
	            targetsCorrect++;
	        else {
	          this.network.propagate(rate, output);
	        }

	        error += cost(output, prediction);

	        if (distractorsCorrect + targetsCorrect == length)
	          correct++;
	      }

	      // calculate error
	      if (trial % 1000 == 0)
	        correct = 0;
	      trial++;
	      var divideError = trial % 1000;
	      divideError = divideError == 0 ? 1000 : divideError;
	      success = correct / divideError;
	      error /= length;

	      // log
	      if (log && trial % log == 0)
	        console.log("iterations:", trial, " success:", success, " correct:",
	          correct, " time:", Date.now() - start, " error:", error);
	      if (schedule.do && schedule.every && trial % schedule.every == 0)
	        schedule.do({
	          iterations: trial,
	          success: success,
	          error: error,
	          time: Date.now() - start,
	          correct: correct
	        });
	    }

	    return {
	      iterations: trial,
	      success: success,
	      error: error,
	      time: Date.now() - start
	    }
	  },

	  // train the network to learn an Embeded Reber Grammar
	  ERG: function(options) {

	    options = options || {};
	    var iterations = options.iterations || 150000;
	    var criterion = options.error || .05;
	    var rate = options.rate || .1;
	    var log = options.log || 500;
	    var cost = options.cost || this.cost || Trainer.cost.CROSS_ENTROPY;

	    // gramar node
	    var Node = function() {
	      this.paths = [];
	    }
	    Node.prototype = {
	      connect: function(node, value) {
	        this.paths.push({
	          node: node,
	          value: value
	        });
	        return this;
	      },
	      any: function() {
	        if (this.paths.length == 0)
	          return false;
	        var index = Math.random() * this.paths.length | 0;
	        return this.paths[index];
	      },
	      test: function(value) {
	        for (var i in this.paths)
	          if (this.paths[i].value == value)
	            return this.paths[i];
	        return false;
	      }
	    }

	    var reberGrammar = function() {

	      // build a reber grammar
	      var output = new Node();
	      var n1 = (new Node()).connect(output, "E");
	      var n2 = (new Node()).connect(n1, "S");
	      var n3 = (new Node()).connect(n1, "V").connect(n2, "P");
	      var n4 = (new Node()).connect(n2, "X")
	      n4.connect(n4, "S");
	      var n5 = (new Node()).connect(n3, "V")
	      n5.connect(n5, "T");
	      n2.connect(n5, "X")
	      var n6 = (new Node()).connect(n4, "T").connect(n5, "P");
	      var input = (new Node()).connect(n6, "B")

	      return {
	        input: input,
	        output: output
	      }
	    }

	    // build an embeded reber grammar
	    var embededReberGrammar = function() {
	      var reber1 = reberGrammar();
	      var reber2 = reberGrammar();

	      var output = new Node();
	      var n1 = (new Node).connect(output, "E");
	      reber1.output.connect(n1, "T");
	      reber2.output.connect(n1, "P");
	      var n2 = (new Node).connect(reber1.input, "P").connect(reber2.input,
	        "T");
	      var input = (new Node).connect(n2, "B");

	      return {
	        input: input,
	        output: output
	      }

	    }

	    // generate an ERG sequence
	    var generate = function() {
	      var node = embededReberGrammar().input;
	      var next = node.any();
	      var str = "";
	      while (next) {
	        str += next.value;
	        next = next.node.any();
	      }
	      return str;
	    }

	    // test if a string matches an embeded reber grammar
	    var test = function(str) {
	      var node = embededReberGrammar().input;
	      var i = 0;
	      var ch = str.charAt(i);
	      while (i < str.length) {
	        var next = node.test(ch);
	        if (!next)
	          return false;
	        node = next.node;
	        ch = str.charAt(++i);
	      }
	      return true;
	    }

	    // helper to check if the output and the target vectors match
	    var different = function(array1, array2) {
	      var max1 = 0;
	      var i1 = -1;
	      var max2 = 0;
	      var i2 = -1;
	      for (var i in array1) {
	        if (array1[i] > max1) {
	          max1 = array1[i];
	          i1 = i;
	        }
	        if (array2[i] > max2) {
	          max2 = array2[i];
	          i2 = i;
	        }
	      }

	      return i1 != i2;
	    }

	    var iteration = 0;
	    var error = 1;
	    var table = {
	      "B": 0,
	      "P": 1,
	      "T": 2,
	      "X": 3,
	      "S": 4,
	      "E": 5
	    }

	    var start = Date.now();
	    while (iteration < iterations && error > criterion) {
	      var i = 0;
	      error = 0;

	      // ERG sequence to learn
	      var sequence = generate();

	      // input
	      var read = sequence.charAt(i);
	      // target
	      var predict = sequence.charAt(i + 1);

	      // train
	      while (i < sequence.length - 1) {
	        var input = [];
	        var target = [];
	        for (var j = 0; j < 6; j++) {
	          input[j] = 0;
	          target[j] = 0;
	        }
	        input[table[read]] = 1;
	        target[table[predict]] = 1;

	        var output = this.network.activate(input);

	        if (different(output, target))
	          this.network.propagate(rate, target);

	        read = sequence.charAt(++i);
	        predict = sequence.charAt(i + 1);

	        error += cost(target, output);
	      }
	      error /= sequence.length;
	      iteration++;
	      if (iteration % log == 0) {
	        console.log("iterations:", iteration, " time:", Date.now() - start,
	          " error:", error);
	      }
	    }

	    return {
	      iterations: iteration,
	      error: error,
	      time: Date.now() - start,
	      test: test,
	      generate: generate
	    }
	  },

	  timingTask: function(options){

	    if (this.network.inputs() != 2 || this.network.outputs() != 1)
	      throw new Error("Invalid Network: must have 2 inputs and one output");

	    if (typeof options == 'undefined')
	      var options = {};

	    // helper
	    function getSamples (trainingSize, testSize){

	      // sample size
	      var size = trainingSize + testSize;

	      // generate samples
	      var t = 0;
	      var set  = [];
	      for (var i = 0; i < size; i++) {
	        set.push({ input: [0,0], output: [0] });
	      }
	      while(t < size - 20) {
	          var n = Math.round(Math.random() * 20);
	          set[t].input[0] = 1;
	          for (var j = t; j <= t + n; j++){
	              set[j].input[1] = n / 20;
	              set[j].output[0] = 0.5;
	          }
	          t += n;
	          n = Math.round(Math.random() * 20);
	          for (var k = t+1; k <= (t + n) &&  k < size; k++)
	              set[k].input[1] = set[t].input[1];
	          t += n;
	      }

	      // separate samples between train and test sets
	      var trainingSet = []; var testSet = [];
	      for (var l = 0; l < size; l++)
	          (l < trainingSize ? trainingSet : testSet).push(set[l]);

	      // return samples
	      return {
	          train: trainingSet,
	          test: testSet
	      }
	    }

	    var iterations = options.iterations || 200;
	    var error = options.error || .005;
	    var rate = options.rate || [.03, .02];
	    var log = options.log === false ? false : options.log || 10;
	    var cost = options.cost || this.cost || Trainer.cost.MSE;
	    var trainingSamples = options.trainSamples || 7000;
	    var testSamples = options.trainSamples || 1000;

	    // samples for training and testing
	    var samples = getSamples(trainingSamples, testSamples);

	    // train
	    var result = this.train(samples.train, {
	      rate: rate,
	      log: log,
	      iterations: iterations,
	      error: error,
	      cost: cost
	    });

	    return {
	      train: result,
	      test: this.test(samples.test)
	    }
	  }
	};

	// Built-in cost functions
	Trainer.cost = {
	  // Eq. 9
	  CROSS_ENTROPY: function(target, output)
	  {
	    var crossentropy = 0;
	    for (var i in output)
	      crossentropy -= (target[i] * Math.log(output[i]+1e-15)) + ((1-target[i]) * Math.log((1+1e-15)-output[i])); // +1e-15 is a tiny push away to avoid Math.log(0)
	    return crossentropy;
	  },
	  MSE: function(target, output)
	  {
	    var mse = 0;
	    for (var i in output)
	      mse += Math.pow(target[i] - output[i], 2);
	    return mse / output.length;
	  },
	  BINARY: function(target, output){
	    var misses = 0;
	    for (var i in output)
	      misses += Math.round(target[i] * 2) != Math.round(output[i] * 2);
	    return misses;
	  }
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {// import
	var Layer   = __webpack_require__(4)
	,   Network = __webpack_require__(5)
	,   Trainer = __webpack_require__(6)

	/*******************************************************************************************
	                                        ARCHITECT
	*******************************************************************************************/

	// Collection of useful built-in architectures
	var Architect = {

	  // Multilayer Perceptron
	  Perceptron: function Perceptron() {

	    var args = Array.prototype.slice.call(arguments); // convert arguments to Array
	    if (args.length < 3)
	      throw new Error("not enough layers (minimum 3) !!");

	    var inputs = args.shift(); // first argument
	    var outputs = args.pop(); // last argument
	    var layers = args; // all the arguments in the middle

	    var input = new Layer(inputs);
	    var hidden = [];
	    var output = new Layer(outputs);

	    var previous = input;

	    // generate hidden layers
	    for (var level in layers) {
	      var size = layers[level];
	      var layer = new Layer(size);
	      hidden.push(layer);
	      previous.project(layer);
	      previous = layer;
	    }
	    previous.project(output);

	    // set layers of the neural network
	    this.set({
	      input: input,
	      hidden: hidden,
	      output: output
	    });

	    // trainer for the network
	    this.trainer = new Trainer(this);
	  },

	  // Multilayer Long Short-Term Memory
	  LSTM: function LSTM() {

	    var args = Array.prototype.slice.call(arguments); // convert arguments to array
	    if (args.length < 3)
	      throw new Error("not enough layers (minimum 3) !!");

	    var last = args.pop();
	    var option = {
	      peepholes: Layer.connectionType.ALL_TO_ALL,
	      hiddenToHidden: false,
	      outputToHidden: false,
	      outputToGates: false,
	      inputToOutput: true,
	    };
	    if (typeof last != 'number') {
	      var outputs = args.pop();
	      if (last.hasOwnProperty('peepholes'))
	        option.peepholes = last.peepholes;
	      if (last.hasOwnProperty('hiddenToHidden'))
	        option.hiddenToHidden = last.hiddenToHidden;
	      if (last.hasOwnProperty('outputToHidden'))
	        option.outputToHidden = last.outputToHidden;
	      if (last.hasOwnProperty('outputToGates'))
	        option.outputToGates = last.outputToGates;
	      if (last.hasOwnProperty('inputToOutput'))
	        option.inputToOutput = last.inputToOutput;
	    } else
	      var outputs = last;

	    var inputs = args.shift();
	    var layers = args;

	    var inputLayer = new Layer(inputs);
	    var hiddenLayers = [];
	    var outputLayer = new Layer(outputs);

	    var previous = null;

	    // generate layers
	    for (var layer in layers) {
	      // generate memory blocks (memory cell and respective gates)
	      var size = layers[layer];

	      var inputGate = new Layer(size).set({
	        bias: 1
	      });
	      var forgetGate = new Layer(size).set({
	        bias: 1
	      });
	      var memoryCell = new Layer(size);
	      var outputGate = new Layer(size).set({
	        bias: 1
	      });

	      hiddenLayers.push(inputGate);
	      hiddenLayers.push(forgetGate);
	      hiddenLayers.push(memoryCell);
	      hiddenLayers.push(outputGate);

	      // connections from input layer
	      var input = inputLayer.project(memoryCell);
	      inputLayer.project(inputGate);
	      inputLayer.project(forgetGate);
	      inputLayer.project(outputGate);

	      // connections from previous memory-block layer to this one
	      if (previous != null) {
	        var cell = previous.project(memoryCell);
	        previous.project(inputGate);
	        previous.project(forgetGate);
	        previous.project(outputGate);
	      }

	      // connections from memory cell
	      var output = memoryCell.project(outputLayer);

	      // self-connection
	      var self = memoryCell.project(memoryCell);

	      // hidden to hidden recurrent connection
	      if (option.hiddenToHidden)
	        memoryCell.project(memoryCell, Layer.connectionType.ALL_TO_ELSE);

	      // out to hidden recurrent connection
	      if (option.outputToHidden)
	        outputLayer.project(memoryCell);

	      // out to gates recurrent connection
	      if (option.outputToGates) {
	        outputLayer.project(inputGate);
	        outputLayer.project(outputGate);
	        outputLayer.project(forgetGate);
	      }

	      // peepholes
	      memoryCell.project(inputGate, option.peepholes);
	      memoryCell.project(forgetGate, option.peepholes);
	      memoryCell.project(outputGate, option.peepholes);

	      // gates
	      inputGate.gate(input, Layer.gateType.INPUT);
	      forgetGate.gate(self, Layer.gateType.ONE_TO_ONE);
	      outputGate.gate(output, Layer.gateType.OUTPUT);
	      if (previous != null)
	        inputGate.gate(cell, Layer.gateType.INPUT);

	      previous = memoryCell;
	    }

	    // input to output direct connection
	    if (option.inputToOutput)
	      inputLayer.project(outputLayer);

	    // set the layers of the neural network
	    this.set({
	      input: inputLayer,
	      hidden: hiddenLayers,
	      output: outputLayer
	    });

	    // trainer
	    this.trainer = new Trainer(this);
	  },

	  // Liquid State Machine
	  Liquid: function Liquid(inputs, hidden, outputs, connections, gates) {

	    // create layers
	    var inputLayer = new Layer(inputs);
	    var hiddenLayer = new Layer(hidden);
	    var outputLayer = new Layer(outputs);

	    // make connections and gates randomly among the neurons
	    var neurons = hiddenLayer.neurons();
	    var connectionList = [];

	    for (var i = 0; i < connections; i++) {
	      // connect two random neurons
	      var from = Math.random() * neurons.length | 0;
	      var to = Math.random() * neurons.length | 0;
	      var connection = neurons[from].project(neurons[to]);
	      connectionList.push(connection);
	    }

	    for (var j = 0; j < gates; j++) {
	      // pick a random gater neuron
	      var gater = Math.random() * neurons.length | 0;
	      // pick a random connection to gate
	      var connection = Math.random() * connectionList.length | 0;
	      // let the gater gate the connection
	      neurons[gater].gate(connectionList[connection]);
	    }

	    // connect the layers
	    inputLayer.project(hiddenLayer);
	    hiddenLayer.project(outputLayer);

	    // set the layers of the network
	    this.set({
	      input: inputLayer,
	      hidden: [hiddenLayer],
	      output: outputLayer
	    });

	    // trainer
	    this.trainer = new Trainer(this);
	  },

	  Hopfield: function Hopfield(size)
	  {
	    var inputLayer = new Layer(size);
	    var outputLayer = new Layer(size);

	    inputLayer.project(outputLayer, Layer.connectionType.ALL_TO_ALL);

	    this.set({
	      input: inputLayer,
	      hidden: [],
	      output: outputLayer
	    });

	    var trainer = new Trainer(this);

	    var proto = Architect.Hopfield.prototype;

	    proto.learn = proto.learn || function(patterns)
	    {
	      var set = [];
	      for (var p in patterns)
	        set.push({
	          input: patterns[p],
	          output: patterns[p]
	        });

	      return trainer.train(set, {
	        iterations: 500000,
	        error: .00005,
	        rate: 1
	      });
	    }

	    proto.feed = proto.feed || function(pattern)
	    {
	      var output = this.activate(pattern);

	      var pattern = [];
	      for (var i in output)
	        pattern[i] = output[i] > .5 ? 1 : 0;

	      return pattern;
	    }
	  }
	}

	// Extend prototype chain (so every architectures is an instance of Network)
	for (var architecture in Architect) {
	  Architect[architecture].prototype = new Network();
	  Architect[architecture].prototype.constructor = Architect[architecture];
	}

	// export
	if (module) module.exports = Architect;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ }
/******/ ]);

(function() {
  window.UTIL = {};

  UTIL.dist = function(x1, y1, x2, y2) {
    return Math.sqrt((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2));
  };

  UTIL.floorToNearest = function(num, nearest){
    return nearest * Math.floor(num/nearest);
  };

  // Linear interpolation
  UTIL.lerp = function(a, b, t) {
    return a + (b-a)*t;
  };

  // Limit a given number if it is outside of given range.
  UTIL.lim = function(n, n0, n1) {
    if (n < n0) { return n0; }
    else if (n >= n1) { return n1; }
    else { return n; }
  };

  UTIL.mean = function(arr){
    var s = UTIL.sum(arr);
    return s/arr.length;
  };

  // Takes a value as well as an upper and lower limit, and returns a ratio 0 to 1
  UTIL.norm = function(a, a0, a1) {
    return UTIL.lim((a-a0)/(a1-a0), 0, 1);
  };

  // Takes a value and returns -1 or 1 if it's positive or negative
  UTIL.sign = function(n) {
    if (n >= 0) { return 1 } else { return -1 };
  };

  UTIL.sum = function(arr){
    var s = 0;
    for(var i = 0; i < arr.length; i++){
      s += arr[i];
    }
    return s;
  };

  // Linear interpolate between two colors, each as RGB array.
  UTIL.lerpColor = function(a, b, t) {
    var c1 = UTIL.lerp(a[0], b[0], t);
    var c2 = UTIL.lerp(a[1], b[1], t);
    var c3 = UTIL.lerp(a[2], b[2], t);
    return [Math.round(c1), Math.round(c2), Math.round(c3)];
  };

  // Calculates line segment intersection
  UTIL.lineIntersect = function(A, B, E, F) {
    var ip, a1, a2, b1, b2, c1, c2;
    // calculate
    a1 = B.y-A.y; a2 = F.y-E.y;
    b1 = A.x-B.x; b2 = E.x-F.x;
    c1 = B.x*A.y - A.x*B.y; c2 = F.x*E.y - E.x*F.y;
    // det
    var det=a1*b2 - a2*b1;
    // if lines are parallel
    if (det == 0) { return false; }
    // find point of intersection
    var xip = (b1*c2 - b2*c1)/det;
    var yip = (a2*c1 - a1*c2)/det;
    // now check if that point is actually on both line
    // segments using distance
    if (Math.pow(xip - B.x, 2) + Math.pow(yip - B.y, 2) >
        Math.pow(A.x - B.x, 2) + Math.pow(A.y - B.y, 2))
    { return false; }
    if (Math.pow(xip - A.x, 2) + Math.pow(yip - A.y, 2) >
        Math.pow(A.x - B.x, 2) + Math.pow(A.y - B.y, 2))
    { return false; }
    if (Math.pow(xip - F.x, 2) + Math.pow(yip - F.y, 2) >
        Math.pow(E.x - F.x, 2) + Math.pow(E.y - F.y, 2))
    { return false; }
    if (Math.pow(xip - E.x, 2) + Math.pow(yip - E.y, 2) >
        Math.pow(E.x - F.x, 2) + Math.pow(E.y - F.y, 2))
    { return false; }
    // else it's on both segments, return it
    return {x: xip, y: yip};
  };

})();

var Trainer = (function() {
  function Trainer(options) {
    var defaults = {};
    this.opt = _.extend({}, defaults, options);

    if (this.opt.trainer) this.init();
    else this.initFake();
  }

  Trainer.prototype.init = function(){
    this.points = [];
    this.loadData();
    this.loadListeners();
  };

  Trainer.prototype.initFake = function(){
    _this.parseData(TRAINING);
  };

  Trainer.prototype.addPoints = function(points){
    var nPoints = _.map(points, function(p){
      return [p.x, p.y, p.a, p.v];
    });

    // this.points.push(nPoints);
    var data = {
      columns: ['x', 'y', 'a', 'v'],
      rows: nPoints
    };
    var session_id = this.getSession();
    $.post(this.opt.apiUrl + '/paths/create', {
      data: JSON.stringify(data),
      session: session_id
    }, function(d){
      // console.log('Saved', d);
    });
  };

  Trainer.prototype.getSession = function(){
    var session_id = localStorage.getItem('session_id');
    if (session_id) return session_id;

    session_id = Math.random().toString(36).substr(2, 8);
    localStorage.setItem('session_id', session_id);
    return session_id;
  };

  Trainer.prototype.loadData = function(){
    var _this = this;

    $.getJSON(this.opt.trainingUrl, function(data) {
      _this.parseData(data.paths);
    });
  };

  Trainer.prototype.loadListeners = function(){
    var _this = this;

    $.subscribe('user.create.points', function(e, data){
      _this.addPoints(data.points);
    });
  };

  Trainer.prototype.parseData = function(data){
    var paths = _.map(data, function(path){
      var p = path.data;
      var columns = p.columns;
      return _.map(p.rows, function(row){
        return _.object(columns, row);
      });
    });
    $.publish('training.loaded', {data: paths});
  };

  return Trainer;

})();

$(function(){
  var train = new Trainer(CONFIG);
});

var Player = (function() {
  function Player(options) {
    var defaults = {};
    this.opt = _.extend({}, defaults, options);
    this.init();
  }

  Player.prototype.init = function(){
    this.sounds = {};
    this.loadPlayer();
  };

  Player.prototype.addSound = function(k, file){
    this.sounds[k] = soundManager.createSound({
      id: k,
      url: file,
      autoLoad: true,
      autoPlay: false,
      multiShot: true
    });
  };

  Player.prototype.loadInstruments = function(){
    var _this = this;

    _.each(this.opt.instruments, function(file, i){
      _this.addSound('instrument'+i, file);
    });
  };

  Player.prototype.loadNotes = function(){
    var _this = this;

    _.each(NOTES, function(n, k){
      _this.addSound(k, n.file);
    });
  };

  Player.prototype.loadPlayer = function(){
    var _this = this;
    soundManager.setup({
      preferFlash: false,
      html5Only: true,
      useHTML5Audio: true,
      onready: function() {
        _this.loadNotes();
        _this.loadInstruments();
        _this.loadListeners();
      }
    });
  };

  Player.prototype.loadListeners = function(){
    var _this = this;

    $.subscribe('note.play', function(e, key, volume){
      _this.play(key, volume);
    });

    $.subscribe('instrument.play', function(e, index, volume){
      _this.play('instrument'+index, volume * _this.opt.instrumentVolume);
    });
  };

  Player.prototype.play = function(key, volume){
    var s = this.sounds[key];
    if (s && volume > this.opt.minVolume) {
      s.setVolume(volume*100);
      s.play();
    }
  };

  return Player;

})();

$(function(){
  var player = new Player(CONFIG.player);
});

var Cord = (function() {
  function Cord(options) {
    var defaults = {};
    this.opt = _.extend({}, defaults, options);
    this.init();
  }

  Cord.prototype.init = function(){
    this.ctx = this.opt.ctx;

    // initialize vars for cord oscillation
    this.amp = 0;
    this.maxAmp = 0;
    this.power = 0;
    this.isOscillating = false;
    this.isTransitioning = false;
    this.yc = 0;

    // init canvas
    this.canvasWidth = this.ctx.canvas.width;
    this.canvasHeight = this.ctx.canvas.height;

    this.onUpdate();
  };

  Cord.prototype.getLine = function(){
    return this.line;
  };

  Cord.prototype.isActive = function(){
    return this.isOscillating || this.isTransitioning;
  };

  Cord.prototype.onUpdateTransition = function(options, transitionMs) {
    this.transitionStart = new Date();
    this.transitionStop = new Date(this.transitionStart.getTime() + transitionMs);
    this.transitionOptions = options;

    var targetNote = NOTES[options.note];
    var targetPitch = targetNote.pitch;

    // determine start properties
    this.len0 = this.len;
    this.freq0 = this.freq;
    this.tensity0 = this.tensity;

    // determine end properties
    this.len1 = targetNote.len;
    this.freq1 = UTIL.lerp(this.opt.oscRange[0], this.opt.oscRange[1], targetPitch);
    this.tensity1 = UTIL.lerp(this.opt.tensityRange[0], this.opt.tensityRange[1], targetPitch);

    this.isTransitioning = true;
  };

  Cord.prototype.onUpdate = function(){
    this.note = NOTES[this.opt.note];
    this.len = this.note.len;
    this.pitch = this.note.pitch;
    this.freq = UTIL.lerp(this.opt.oscRange[0], this.opt.oscRange[1], this.pitch);
    this.tensity = UTIL.lerp(this.opt.tensityRange[0], this.opt.tensityRange[1], this.pitch);
    this.refreshCoordinates();
  };

  Cord.prototype.oscillate = function(){
    // not oscillating
    if (!this.isOscillating || this.amp < this.opt.ampMin) {
      this.yc = 0;
      this.amp = 0;
      this.isOscillating = false;
      return false;
    }
    var t = new Date();
    var td = (t - this.oscTimeStart) * this.freq;
    var a = 2 * Math.PI * td;
    var ex = Math.exp(td * this.tensity); // exponential function; gets bigger over time
    this.amp = this.maxAmp / ex; // the current amplitude; gets smaller over time
    this.yc = Math.cos(a) * this.amp; // the oscillating y-coordinate
  };

  Cord.prototype.pluck = function(point){
    // console.log('Pluck! ', point);
    var xp = point.x;
    var yp = point.y;
    var angle = point.a;

    // normalize velocity
    var vp = point.v;

    // dampen via distance from center
    var dc = 1 - Math.abs(xp - this.xMid) / this.dx;

    // distance to pull perpendicular
    this.power = vp * dc;
    this.maxAmp = UTIL.lerp(this.opt.ampRange[0], this.opt.ampRange[1], this.power);
    // it's already oscillating at a greater amplitude
    if (this.amp > this.maxAmp) this.maxAmp = this.amp;
    this.amp = this.maxAmp;

    // determine direction
    this.direction = 1;
    if (angle > 0 && angle < 180) {
      this.direction = -1;
    }

    // oscillate
    this.isOscillating = true;
    this.oscTimeStart = new Date();

    // play note
    $.publish('note.play', [this.opt.note, this.power]);
  };

  Cord.prototype.refreshCoordinates = function(){
    var w = this.canvasWidth;
    var h = this.canvasHeight;
    var l = this.len * w;
    var cordHeight = this.opt.height * h;

    this.x0 = (w - l) * 0.5;
    this.x1 = this.x0 + l;
    this.y0 = cordHeight * this.opt.index + cordHeight * this.opt.count * 0.5;
    this.y1 = this.y0;
    this.line = [{x: this.x0, y: this.y0}, {x: this.x1, y: this.y1}];

    // store midpoint
    this.dx = this.x1-this.x0;
    this.xMid = this.x0 + this.dx*0.5;
    this.xc = this.xMid;
  };

  Cord.prototype.render = function(){
    var ctx = this.ctx;
    var curveRatio = this.opt.curveRatio;

    this.transition();
    this.oscillate();

    ctx.beginPath();
    ctx.lineCap = "round";
    ctx.strokeStyle = this.opt.strokeStyle;
    ctx.lineWidth = this.opt.lineWidth;

    var xc = this.xc;
    var yc = this.yc;

    var dx = xc - this.x0;
    var dy = yc - this.y0;
    // move to the center pendulum point
    var dxBez = curveRatio * Math.sqrt(dx * dx + dy * dy);
    // move to start point
    ctx.moveTo(this.x0, this.y0);
    // Draw bezier curve
    ctx.bezierCurveTo(
      xc - dxBez,
      this.y0 + yc,
      xc + dxBez,
      this.y1 + yc,
      this.x1, this.y1
    );
    // close path
    ctx.stroke();
    ctx.closePath();
  };

  Cord.prototype.resize = function(){
    this.canvasWidth = this.ctx.canvas.width;
    this.canvasHeight = this.ctx.canvas.height;
    this.refreshCoordinates();
  };

  Cord.prototype.toJSON = function(){
    return {
      index: this.opt.index,
      note: this.note,
      len: this.len,
      pitch: this.pitch,
      freq: this.freq,
      tensity: this.tensity
    };
  };

  Cord.prototype.transition = function(){
    if (!this.isTransitioning) return false;

    var now = new Date();

    // transition complete
    if (now >= this.transitionStop) {
      this.update(this.transitionOptions);
      this.isTransitioning = false;

    // lerp properties and refresh
    } else {
      var progress = UTIL.norm(now.getTime(), this.transitionStart.getTime(), this.transitionStop.getTime());
      this.len = UTIL.lerp(this.len0, this.len1, progress);
      this.freq = UTIL.lerp(this.freq0, this.freq1, progress);
      this.tensity = UTIL.lerp(this.tensity0, this.tensity1, progress);
      this.refreshCoordinates();
    }
  };

  Cord.prototype.update = function(options, transitionMs){
    if (transitionMs) {
      this.onUpdateTransition(_.extend({}, options), transitionMs);

    } else {
      _.extend(this.opt, options);
      this.onUpdate();
    }
  };

  return Cord;

})();

var Chord = (function() {
  function Chord(options) {
    var defaults = {
      key: 'c'
    };
    this.opt = _.extend({}, defaults, options);
    this.init();
  }

  Chord.prototype.init = function(){
    this.setKey(this.opt.key);
  };

  Chord.prototype.isActive = function(){
    return _.find(this.cords, function(c){ return c.isActive(); });
  };

  Chord.prototype.listenForPluck = function(creatures){
    var lines = [];
    var lines = _.map(creatures, function(c){ return c.getLastLine(); });
    lines = _.filter(lines, function(line){ return line.length > 1; });

    // look for intersections
    _.each(this.cords, function(c){
      var cordLine = c.getLine();
      _.each(lines, function(l){
        var intersection = UTIL.lineIntersect(cordLine[0], cordLine[1], l[0], l[1]);
        if (intersection) {
          c.pluck(_.extend({}, l[1], intersection));
        }
      });
    });
  };

  Chord.prototype.render = function(){
    _.each(this.cords, function(c){
      c.render();
    });
  };

  Chord.prototype.resize = function(){
    _.each(this.cords, function(c){
      c.resize();
    });
  };

  Chord.prototype.setKey = function(key, transitionMs){
    var _this = this;
    var cordOpt = _.extend({ctx: this.opt.ctx}, this.opt.cord);
    var chord = CHORDS[key];
    var notes = chord.notes;

    cordOpt.count = notes.length;
    this.cords = this.cords || [];

    _.each(notes, function(n, i){
      cordOpt.index = i;
      cordOpt.note = n;
      // new cord
      if (i > _this.cords.length-1) {
        var cord = new Cord(cordOpt);
        _this.cords.push(cord);

      // existing cord
      } else {
        _this.cords[i].update(cordOpt, transitionMs)
      }
    });
  };

  return Chord;

})();

var Creature = (function() {
  function Creature(options) {
    var defaults = {};
    this.opt = _.extend({}, defaults, options);
    this.init();
  }

  Creature.prototype.init = function(){
    this.ctx = this.opt.ctx;
    this.isTeaching = false;
    this.points = [];
    this.nodes = [];
    this.training = [];
    this.network = false;
    this.trained = false;
    this.activeNode = false;
    if (this.opt.type=='machine' && !this.opt.fake) {
      var layers = this.opt.network.hiddenLayers;
      this.network = new synaptic.Architect.LSTM(4,layers,layers,layers,4);
    }
    this.loadListeners();
  };

  Creature.prototype.addNodeData = function(nodes){
    if (!nodes.length) return false;

    this.nodes = _.map(nodes, function(n, i){ return {index: i, value: n}; });
  };

  Creature.prototype.addPoint = function(p){
    this.points.push(p);
  };

  Creature.prototype.addTrainingPoints = function(points){
    this.training.push(points);
    var max = this.opt.rememberMax;
    var len = this.training.length;
    if (len > max) this.training = this.training.slice(len - max);
  };

  Creature.prototype.clearPoints = function(){
    this.points = [];
  };

  Creature.prototype.forgetPoints = function(time){
    time = time || new Date();
    var ms = this.opt.strokeMs;

    this.points = _.reject(this.points, function(p){
      return (time - p.t) > ms;
    });
  };

  Creature.prototype.generate = function(){
    if (this.opt.fake) {
      this.generateFake();
      return true;
    }
    if (this.generating || !this.trained) return false;
    this.generating = true;

    var w = this.ctx.canvas.width;
    var h = this.ctx.canvas.height;
    var maxV = this.opt.maxVelocity;
    var gPoints = [];
    var t = 0;
    var input = [Math.random(), Math.random(), Math.random(), Math.random() / 4];
    var gPrev = false;
    var now = new Date();
    var path = this.training[_.random(0, this.training.length-1)];
    var strokeMs = this.opt.strokeMs;

    gPoints.push({
      x: input[0] * w,
      y: input[1] * h,
      z: 0,
      a: (input[2] - 0.5) * 360,
      v: input[3],
      t: now.getTime()
    });
    var i = 0;
    while(t < strokeMs && i < 1000) {
      var output = this.network.activate(input);
      // console.log(output)
      var d = UTIL.dist(input[0] * w, input[1] * h, output[0] * w, output[1] * h);
      var pxs = UTIL.lerp(0.01, maxV, output[3]);
      var s = (1/pxs) * d;
      t += s;
      // console.log(d, pxs)
      gPoints.push({
        x: output[0] * w,
        y: output[1] * h,
        z: 0,
        a: (output[2] - 0.5) * 360,
        v: output[3],
        t: new Date(now.getTime() + t)
      });
      input = output.slice(0);
      i++;
    }

    this.points = _.map(gPoints, _.clone);
    this.generateTime = new Date();
    this.generating = false;
  };

  Creature.prototype.generateFake = function(){
    if (this.training.length <= 0) return false;

    var w = this.ctx.canvas.width;
    var h = this.ctx.canvas.height;
    var maxV = this.opt.maxVelocity;
    var gPoints = [];
    var t = 0;
    var input = [0, 0, 0, 0];
    var gPrev = false;
    var now = new Date();
    var path = this.training[_.random(0, this.training.length-1)];

    // node has just been activated; make a stroke that is similar
    if (this.activeNode !== false && this.nodes.length) {

      var activeNode = this.activeNode;
      var nodePaths = _.filter(this.nodes, function(node, i){ return node.value==activeNode; });
      if (nodePaths.length) {
        var randomPath = nodePaths[_.random(0, nodePaths.length-1)];
        if (randomPath.index < this.training.length) {
          path = this.training[randomPath.index];
        }
      }
      this.activeNode = false;
    }

    _.each(path, function(point) {
      var pxs = UTIL.lerp(0, maxV, point.v);
      var gp = {
        x: point.x * w,
        y: point.y * h,
        z: 0,
        a: (point.a - 0.5) * 360,
        v: point.v,
        t: new Date(now.getTime() + t)
      };
      if (gPrev) {
        var d = UTIL.dist(gPrev.x, gPrev.y, gp.x, gp.y);
        var s = (1/pxs) * d;
        t += s;
      }
      gPoints.push(gp);
      gPrev = _.clone(gp);
      input = _.clone(point);
    });

    this.points = _.map(gPoints, _.clone);
    this.generateTime = new Date();
  };

  Creature.prototype.getLastLine = function(){
    var line = [];
    var visible = _.filter(this.points, function(p){ return p.z > 0; });
    if (visible.length > 1) {
      line = visible.slice(visible.length - 2);
    }
    return line;
  };

  Creature.prototype.getPointsNormal = function(points){
    points = points || this.points;

    var w = this.ctx.canvas.width;
    var h = this.ctx.canvas.height;
    var nPoints = [];
    _.each(points, function(p, i){
      var point = {
        x: p.x / w,
        y: p.y / h,
        a: p.a / 360 + 0.5,
        v: p.v
      };
      nPoints.push(point);
    });
    return nPoints;
  };

  Creature.prototype.getPoints = function(){
    return _.map(this.points, _.clone);
  };

  Creature.prototype.isActive = function(){
    if (this.points.length || this.isTeaching) return true;

    if (this.generateTime) {
      var now = new Date();
      if ((now - this.generateTime) < (this.opt.strokeMs + this.opt.restMs)) return true;
    }

    return false;
  };

  Creature.prototype.learn = function(points){
    var nPoints = this.getPointsNormal(points);

    if (this.opt.fake) {
      this.addTrainingPoints(nPoints);
      return true;
    }

    var network = this.network;

    _.each(nPoints, function(p, i){
      if (i > 0) {
        var prev = nPoints[i-1];
        network.activate([prev.x, prev.y, prev.a, prev.v]);
        network.propagate(0.3, [p.x, p.y, p.a, p.v]);
      }
    });

    return weights;
  };

  Creature.prototype.lerpPoints = function(){
    // if (this.isTeaching) return false;

    var now = new Date();
    var ms = this.opt.strokeMs;

    var validPoints = [];
    _.each(this.points, function(p, i){
      var lerp = 1.0 - (now - p.t) / ms;
      p.z = 0;
      if (lerp > 0 && lerp <= 1) {
        p.z = lerp;
      }
      if (lerp > 0) {
        validPoints.push(p);
      }

    });

    this.points = validPoints;
  };

  Creature.prototype.loadListeners = function(){
    var _this = this;

    if (this.opt.type=='machine') {
      $.subscribe('training.loaded', function(e, d){
        _this.loadTraining(_.map(d.data, _.clone));
      });

      $(window).on('storage', function(e){
        var event = e.originalEvent;

        if (event.key == 'node.activate') {
          var n = JSON.parse(localStorage.getItem('node.activate'));
          _this.activeNode = n.value;
          // console.log('node.activate', _this.activeNode);

        } else if (event.key == 'node.loaded') {
          var d = JSON.parse(localStorage.getItem('node.loaded'));
          _this.addNodeData(d.data);
        }
      });
    }
  };

  Creature.prototype.loadTraining = function(paths){
    if (this.opt.fake) {
      this.training = paths;
      this.trained = true;
      return true;
    }

    var trainingSet = [];
    _.each(paths, function(path){
      _.each(path, function(point, i) {
        if (i > 0) {
          var prev = path[i-1];
          trainingSet.push({
            input: [prev.x, prev.y, prev.a, prev.v],
            output: [point.x, point.y, point.a, point.v]
          });
        }
      });

    });
    var trainer = new synaptic.Trainer(this.network);
    trainer.train(trainingSet);
    this.trained = true;
  };

  Creature.prototype.onTeachingEnd = function(){
    this.isTeaching = false;
    // this.points = [];
    $.publish('creature.teach.finished', true);
  };

  Creature.prototype.render = function(){
    var now = new Date();

    if (this.isTeaching && this.points.length <= 0 && (now-this.teachTime) > this.opt.teachMs) {
      this.onTeachingEnd();

    } else {
      this.renderNormalState();
    }
  };

  Creature.prototype.renderNormalState = function(){
    var _this = this;
    var ctx = this.ctx;
    var color = this.opt.strokeColor.join(',');
    var width = this.opt.strokeWidth;

    _.each(this.points, function(p, i){
      _this.renderPoint(ctx, width, p.x, p.y, p.z, color);
    });
  };

  Creature.prototype.renderPoint = function(ctx, w, x, y, z, color){
    var half = w / 2;
    var quarter = half / 2;
    var radgrad = ctx.createRadialGradient(x, y, quarter*z, x, y, half*z);

    radgrad.addColorStop(0, 'rgba('+color+','+z+')');
    radgrad.addColorStop(0.5, 'rgba('+color+','+z/2+')');
    radgrad.addColorStop(1, 'rgba('+color+',0)');
    ctx.fillStyle = radgrad;
    ctx.fillRect(x-half*z, y-half*z, w*z, w*z);
  };

  Creature.prototype.renderTeachingState = function(now){

  };

  Creature.prototype.setPoints = function(points){
    this.points = points;
  };

  Creature.prototype.teach = function(creature){
    this.weights = creature.learn(this.points);
    this.isTeaching = true;
    this.teachTime = new Date();
  };

  return Creature;

})();

var Environment = (function() {
  function Environment(options) {
    var defaults = {};
    this.opt = _.extend({}, defaults, options);
    this.init();
  }

  Environment.prototype.init = function(){
    this.active = false;
    this.mode = 'machine';

    this.loadCanvas();
    if (this.opt.mode=='standard') {
      this.loadCreatures();
      this.loadChord();
    }
    if (this.opt.mode=='analyzer') {
      this.loadAnalyzer();
    }
    this.loadListeners();
  };

  Environment.prototype.changeChord = function(){
    this.currentProgressionIndex += 1;
    if (this.currentProgressionIndex >= this.chordCount) {
      this.currentProgressionIndex = 0;
    }
    this.currentChord = this.progression[this.currentProgressionIndex];
    this.chord.setKey(this.currentChord, this.opt.chord.transitionMs);
  };

  Environment.prototype.clearCanvas = function(ctx){
    ctx = ctx || this.ctx;
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  };

  Environment.prototype.getGestureData = function(e, time){
    var now = time || new Date();
    var offset = this.canvasOffset;
    var x = e.center.x - offset.left;
    var y = e.center.y - offset.top;
    var a = e.angle;
    var v = UTIL.norm(Math.abs(e.velocity), 0, this.opt.maxVelocity);
    return {x: x, y: y, z: 1, a: a, v: v, t: now};
  };

  Environment.prototype.isActive = function(){
    // var creatures = this.creatures;
    // var isCreaturesActive = false;
    // for (var i=0; i < creatures.length; i++) {
    //   if (creatures[i].isActive()) {
    //     isCreaturesActive = true;
    //     break;
    //   }
    // }
    return this.mode=='machine' || this.analyzer && this.analyzer.isActive() || this.humanCreature.isActive() || this.chord.isActive();
  };

  Environment.prototype.loadAnalyzer = function(){
    var analyzerOpt = _.extend({ctx: this.ctx}, this.opt.analyzer);
    this.analyzer = new Analyzer(analyzerOpt);
  };

  Environment.prototype.loadCanvas = function(){
    this.$canvasWrapper = $('.canvas-wrapper').first();
    this.$canvas = $('#the-canvas');
    this.canvas = this.$canvas[0];
    this.canvasOffset = this.$canvas.offset();
    this.ctx = this.canvas.getContext('2d');
    this.refreshCanvasSize();
  };

  Environment.prototype.loadChord = function(){
    this.progression = PROGRESSION.slice(0);
    this.chordCount = this.progression.length;
    this.currentProgressionIndex = 0;
    this.currentChord = this.progression[this.currentProgressionIndex];

    var chordOpt = _.extend({ctx: this.ctx, key: this.currentChord}, this.opt.chord);
    this.chord = new Chord(chordOpt);
  };

  Environment.prototype.loadCreatures = function(){
    var _this = this;
    var creatureOpt = _.extend({}, this.opt.creature, {ctx: this.ctx, type: 'human', maxVelocity: this.opt.maxVelocity});

    this.humanCreature = new Creature(creatureOpt);
    this.creatures = [];

    _(this.opt.creatureCount).times(function(i){
      creatureOpt.type = 'machine';
      creatureOpt.index = i;
      creatureOpt.strokeColor = [247, 209, 13];
      _this.creatures.push(new Creature(creatureOpt));
    });
  };

  Environment.prototype.loadListeners = function(){
    var _this = this;
    var ms = this.opt.strokeMs;
    var h = new Hammer(this.$canvas[0]);

    if (this.opt.mode=='standard') {

      // let the pan gesture support all directions.
      h.get('pan').set({ direction: Hammer.DIRECTION_ALL });

      // pan starts
      h.on("panstart", function(e){
        // if (_this.mode=='teaching') return false;
        _this.mode = 'human';
        var d = _this.getGestureData(e);
        _this.humanCreature.setPoints([d]);
        // invoke render if not already animating
        if (!_this.active) _this.render();
      });

      // pan moves
      h.on("panmove", function(e){
        if (_this.mode=='teaching') return false;
        // add current point
        var d = _this.getGestureData(e);
        _this.humanCreature.addPoint(d);
        _this.chord.listenForPluck([_this.humanCreature]);
      });

      // pan ends
      h.on("panend", function(e){
        if (_this.mode=='teaching') return false;
        _this.onStrokeEnd();
      });

      // human finished teaching
      $.subscribe('creature.teach.finished', function(e, data){
        _this.mode = 'machine';
      });

      // store points in local storage
      $.subscribe('user.create.points', function(e, d){
        localStorage.setItem('user.create.points', JSON.stringify(d.points));
      });
      $.subscribe('machine.create.points', function(e, d){
        localStorage.setItem('machine.create.points', JSON.stringify(d.points));
      });
    }

    $.subscribe('training.loaded', function(e, d){
      _this.render();
    });

    // window is resized
    $(window).on("resize", function(){ _this.resize(); });
  };

  Environment.prototype.onStrokeEnd = function(){
    this.mode = 'teaching';
    var creature = this.creatures[_.random(0, this.creatures.length-1)];
    this.humanCreature.teach(creature);
    this.changeChord();
    $.publish('user.create.points', {points: this.humanCreature.getPointsNormal()});
  };

  Environment.prototype.refreshCanvasSize = function(){
    this.canvasWidth = this.$canvasWrapper.width();
    this.canvasHeight = this.$canvasWrapper.height();
    this.canvas.width = this.canvasWidth;
    this.canvas.height = this.canvasHeight;
  };

  Environment.prototype.render = function(){
    var _this = this;

    this.clearCanvas();

    if (this.opt.mode=='analyzer') {
      // render analyzer
      this.analyzer.render();
      requestAnimationFrame(this.render.bind(this));
      return;
    }

    // Render machine creatures
    if (this.mode == 'machine') {
      _.each(this.creatures, function(c){
        if (!c.isActive()) {
          _this.changeChord();
          c.generate();
          $.publish('machine.create.points', {points: c.getPointsNormal()});
        }
        c.lerpPoints();
        c.render();
      });
      this.chord.listenForPluck(this.creatures);

    } else {
      _.each(this.creatures, function(c){
        c.clearPoints();
      });
    }

    // Render human creature
    this.humanCreature.lerpPoints();
    this.humanCreature.render();

    // render chord
    this.chord.render();

    // render analyzer
    // this.analyzer.render();

    // only render if there's something to animate
    if (this.isActive()) {
      this.active = true;
      requestAnimationFrame(this.render.bind(this));

    } else {
      this.active = false;
    }
  };

  Environment.prototype.resize = function(){
    this.refreshCanvasSize();
    this.chord && this.chord.resize();
    this.analyzer && this.analyzer.resize();
    if (!this.active) this.render();
  };

  return Environment;

})();

$(function(){
  var env = new Environment(CONFIG);
});

var Node = (function() {
  function Node(options) {
    var defaults = {};
    this.opt = _.extend({}, defaults, options);
    this.init();
  }

  Node.prototype.init = function(){
    this.ctx = this.opt.ctx;
    this.mode = 'resting';
    this.direction = false;
    this.transitionMs = this.opt.transitionMs;
    this.initValue(this.opt.values);
    this.setPower(0);

    var now = new Date();
    this.phaseStart = now.getTime() + _.random(0, 2000);
    this.phaseEnd = this.phaseStart + this.phase;

    this.resize();
  };

  Node.prototype.activate = function(value, mode){
    this.mode = mode || 'active';
    this.startPower = this.power;
    this.targetPower = value;
    this.transitionStart = new Date();
    // this.setPower(value);
  };

  Node.prototype.addValue = function(v){
    var newValue = [];
    var count = this.count;
    var value = this.value;

    for (var i=0; i<value.length; i++) {
      var n = (value[i] * count + v[i]) / (count + 1);
      newValue.push(n);
    }

    this.value = newValue;
    this.count += 1;
  };

  Node.prototype.distance = function(v1){
    var v2 = this.value;
    var x1 = v1[0], x2 = v2[0],
        y1 = v1[1], y2 = v2[1],
        z1 = v1[2], z2 = v2[2];
    return Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1)+(z2-z1)*(z2-z1));
  };

  Node.prototype.initValue = function(values){
    if (values && values.length) {
      var first = _.map(values, function(v){ return v[0]; });
      var second = _.map(values, function(v){ return v[1]; });
      var third = _.map(values, function(v){ return v[2]; });
      this.value = [UTIL.mean(first), UTIL.mean(second), UTIL.mean(third)];
      this.count = values.length;

    } else {
      this.value = [Math.random(), Math.random(), Math.random()];
      this.count = 1;
    }
  };

  Node.prototype.isActive = function(){
    return true;
  };

  Node.prototype.onUpdate = function(){
    var props = this.opt[this.mode];
    var widths = props.widthRange;
    var colors = props.colorRange;
    var phases = props.phaseRange;

    this.phase = UTIL.lerp(phases[0], phases[1], this.power);
    this.widthRange = [widths[0], widths[1] * this.power];
    this.colorRange = [colors[0], UTIL.lerpColor(colors[0], colors[1], this.power)];
  };

  Node.prototype.play = function(){
    if (this.power > 0) {
      $.publish('instrument.play', [this.opt.index, this.power]);
    }
  };

  Node.prototype.render = function(){
    this.transition();

    var ctx = this.ctx;
    var pos = this.pos;

    var now = new Date();
    var progress = UTIL.norm(now.getTime(), this.phaseStart, this.phaseEnd);
    var a = progress * Math.PI;
    var amount = Math.sin(a);

    var color = UTIL.lerpColor(this.colorRange[0], this.colorRange[1], amount);
    var radius = UTIL.lerp(this.widthRange[0], this.widthRange[1], amount) * pos.r;

    // reached end of phase; increment
    if (progress >= 1) {
      this.phaseStart = this.phaseEnd;
      this.phaseEnd += this.phase;
      // play sound
      this.play();
    }

    ctx.beginPath();
    ctx.fillStyle = 'rgb('+color.join(',')+')';
    ctx.arc(pos.x, pos.y, radius, 0, 2 * Math.PI);
    ctx.fill();
  };

  Node.prototype.resize = function(parent){
    if (parent) this.opt.parent = parent;
    var parentOpt = this.opt.parent;

    var pos = {x: 0, y: 0, d: 0, r: 0};
    var perRow = this.opt.perRow;
    var index = this.opt.index;

    // determine position
    pos.d = parentOpt.width / perRow;
    pos.r = pos.d / 2;
    pos.x = parentOpt.x + (index % perRow) * pos.d + pos.r;
    pos.y = parentOpt.y + Math.floor(index / perRow) * pos.d + pos.r;

    this.pos = pos;
  };

  Node.prototype.rest = function(){
    this.activate(0, 'resting');
  };

  Node.prototype.setPower = function(value){
    this.power = value;
    this.onUpdate();
  };

  Node.prototype.transition = function(){
    if (!this.transitionStart) return false;

    var now = new Date();

    // transition finished
    var progressMs = now - this.transitionStart;
    if (progressMs >= this.transitionMs) {
      this.setPower(this.targetPower);
      this.transitionStart = false;
      return false;
    }

    // transitioning
    var progress = progressMs / this.transitionMs;
    var power = UTIL.lerp(this.startPower, this.targetPower, progress);
    this.setPower(power);
  };

  return Node;

})();

var Analyzer = (function() {
  function Analyzer(options) {
    var defaults = {};
    this.opt = _.extend({}, defaults, options);
    this.init();
  }

  Analyzer.prototype.init = function(){
    this.ctx = this.opt.ctx;
    this.paths = [];

    // init canvas
    this.onUpdate();
    // this.loadNodes();
    this.loadListeners();
  };

  Analyzer.prototype.activate = function(path, isNew){
    var distances = this.analyzePath(path, isNew);
    var len = distances.length;
    // var minD = _.min(distances);
    // var maxD = _.max(distances);
    // distances = _.map(distances, function(d, i){ return {index: i, value: UTIL.norm(d, minD, maxD)}; });
    distances = _.map(distances, function(d, i){ return {index: i, value: d}; });
    distances = _.sortBy(distances, function(d){ return d.value; });
    var weights = new Array(len);
    this.activationDate = new Date();

    _.each(distances, function(d, i){
      weights[d.index] = (1-d.value) / Math.pow(1.5, i);
    });

    _.each(this.nodes, function(node, i){
      node.activate(weights[i]);
    });
  };

  Analyzer.prototype.analyze = function(paths){
    var _this = this;

    var nPaths = _.map(paths, function(path){
      return _this.getValue(path);
    });

    var clusters = clusterfck.kmeans(nPaths, this.opt.nodeCount);
    this.loadNodes(clusters);

    // save the cluster values
    var path_clusters = _.map(paths, function(p, i){
      return -1;
    });

    nPaths = _.map(nPaths, function(p, i){ return {index: i, value: p}; });
    _.each(clusters, function(cluster, i){
      _.each(cluster, function(path, j){
        var match = _.find(nPaths, function(p){
          return p.value[0]==path[0] && p.value[1]==path[1] && p.value[2]==path[2];
        });
        if (match) {
          path_clusters[match.index] = i;
        }
      });
    });
    localStorage.setItem('node.loaded', JSON.stringify({d: new Date(), data: path_clusters}));
  };

  Analyzer.prototype.analyzePath = function(path, isNew){
    var nodes = this.nodes;
    var value = this.getValue(path);
    var minDistance = 1;
    var minNode = 0;
    var distances = [];

    // find the closest node
    _.each(nodes, function(node, i){
      var d = node.distance(value);
      if (d < minDistance) {
        minDistance = d;
        minNode = i;
      }
      distances.push(d);
    });

    if (isNew) {
      // add value to closest node
      nodes[minNode].addValue(value);
      localStorage.setItem('node.activate', JSON.stringify({d: new Date(), value: minNode}));
    }

    return distances;
  };

  Analyzer.prototype.getValue = function(path){
    var value = [0, 0, 0];
    var precision = 100;
    var len = path.length;

    _.each(path, function(point){
      var x = point.x * precision;
      var y = point.y * precision;
      var xy = y * precision + x;
      var p = xy / (precision*precision);
      value[0] += p;
      value[1] += point.a;
      value[2] += point.v;
    });

    return [value[0]/len, value[1]/len, value[2]/len];
  };

  Analyzer.prototype.isActive = function(){
    var nodeActive = false;
    for (var i=0; i<this.nodes.length; i++) {
      var n = this.nodes[i];
      if (n.isActive()) {
        nodeActive = true;
        break;
      }
    }
    return nodeActive;
  };

  Analyzer.prototype.loadListeners = function(){
    var _this = this;

    $.subscribe('training.loaded', function(e, d){
      _this.analyze(d.data);
    });

    $.subscribe('user.create.points', function(e, d){
      _this.activate(d.points, true);
    });

    $.subscribe('machine.create.points', function(e, d){
      _this.activate(d.points);
    });

    $(window).on('storage', function(e){
      var event = e.originalEvent;
      if (event.key == 'user.create.points') {
        _this.activate(JSON.parse(localStorage.getItem('user.create.points')), true);
      } else if (event.key == 'machine.create.points') {
        _this.activate(JSON.parse(localStorage.getItem('machine.create.points')));
      }
    });
  };

  Analyzer.prototype.loadNodes = function(clusters){
    var _this = this;
    var nodeCount = this.opt.nodeCount;
    var perRow = this.opt.perRow;
    var nodeOpt = this.opt.node;
    var position = _.clone(this.pos);
    var ctx = this.ctx;

    // console.log(clusters)

    this.nodes = [];
    _(nodeCount).times(function(i){
      var values = [];
      if (clusters[i]) values = clusters[i].slice(0);
      _this.nodes.push(new Node(_.extend({index: i, ctx: ctx, perRow: perRow, parent: position, values: values}, nodeOpt)));
    });
  };

  Analyzer.prototype.onUpdate = function(){
    this.canvasWidth = this.ctx.canvas.width;
    this.canvasHeight = this.ctx.canvas.height;
    var pos = {x: 0, y: 0};
    var perRow = this.opt.perRow;

    // determine width and height
    pos.width = this.opt.width * this.canvasWidth;
    var nodeW = pos.width / perRow;
    var rows = Math.ceil(this.opt.nodeCount / perRow);
    pos.height = nodeW * rows;

    // determine x and y
    pos.x = this.opt.position[0] * this.canvasWidth;
    pos.y = this.opt.position[1] * this.canvasHeight;

    pos.x = _.max([0, pos.x - pos.width]);
    pos.y = _.max([0, pos.y - pos.height]);

    this.pos = pos;
  };

  Analyzer.prototype.render = function(){
    var rest = false;
    if (this.activationDate) {
      var t = new Date();
      if ((t - this.activationDate) > this.opt.restAfter) {
        rest = true;
        this.activationDate = false;
      }
    }
    _.each(this.nodes, function(n){
      if (rest) n.rest();
      n.render();
    });
  };

  Analyzer.prototype.resize = function(){
    var _this = this;
    this.onUpdate();

    _.each(this.nodes, function(n){
      n.resize(_.clone(_this.pos));
    });
  };

  return Analyzer;

})();

var Debug = (function() {
  function Debug(options) {
    var defaults = {};
    this.opt = _.extend({}, defaults, options);

    if (this.opt.debug) this.init();
  }

  Debug.prototype.init = function(){
    this.$debug = $('#debug');
    this.timeout = false;

    this.loadListeners();
  };

  Debug.prototype.hideMessage = function(){
    this.$debug.removeClass('active').html('');
  };

  Debug.prototype.loadListeners = function(){
    var _this = this;

    $.subscribe('debug.message', function(e, message, flash){
      if (_this.timeout) clearTimeout(_this.timeout);
      _this.showMessage(message);

      if (flash) {
        _this.timeout = setTimeout(function(){ _this.hideMessage(); }, 2000);
      }
    });
  };

  Debug.prototype.showMessage = function(message){
    this.$debug.html(message).addClass('active');
  };

  return Debug;

})();

$(function(){
  var debug = new Debug(CONFIG);
});

