var tabsUi = angular.module('tabsUi', ['ui.router', 'ui.bootstrap']);

jQuery(document).ready(function() {
  /**
   * We are initialization the angular app by hand and not with the Automatic
   * Initialization.
   * The reason for this is that we are loading multiple angular apps on one
   * page and the Automatic Initialization can only handle 1 app per page.
   *
   * @link http://docs.angularjs.org/guide/bootstrap
   */
  angular.bootstrap(document.getElementById('tabsUi-app'),['tabsUi']);

});
tabsUi.controller('tabsUicontroller', function($scope, $http) {
	
	$http.get('/json/climbs').success(function(result) {
		$scope.tabsUi = (function () {
			return result.nodes;
		})();
	});

});
/*
 AngularJS v1.5.0
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(D,r,Va){'use strict';function ya(a,b,c){if(!a)throw Ka("areq",b||"?",c||"required");return a}function za(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;ba(a)&&(a=a.join(" "));ba(b)&&(b=b.join(" "));return a+" "+b}function La(a){var b={};a&&(a.to||a.from)&&(b.to=a.to,b.from=a.from);return b}function X(a,b,c){var d="";a=ba(a)?a:a&&R(a)&&a.length?a.split(/\s+/):[];s(a,function(a,g){a&&0<a.length&&(d+=0<g?" ":"",d+=c?b+a:a+b)});return d}function Ma(a){if(a instanceof I)switch(a.length){case 0:return[];
case 1:if(1===a[0].nodeType)return a;break;default:return I(oa(a))}if(1===a.nodeType)return I(a)}function oa(a){if(!a[0])return a;for(var b=0;b<a.length;b++){var c=a[b];if(1==c.nodeType)return c}}function Na(a,b,c){s(b,function(b){a.addClass(b,c)})}function Oa(a,b,c){s(b,function(b){a.removeClass(b,c)})}function U(a){return function(b,c){c.addClass&&(Na(a,b,c.addClass),c.addClass=null);c.removeClass&&(Oa(a,b,c.removeClass),c.removeClass=null)}}function ka(a){a=a||{};if(!a.$$prepared){var b=a.domOperation||
Q;a.domOperation=function(){a.$$domOperationFired=!0;b();b=Q};a.$$prepared=!0}return a}function fa(a,b){Aa(a,b);Ba(a,b)}function Aa(a,b){b.from&&(a.css(b.from),b.from=null)}function Ba(a,b){b.to&&(a.css(b.to),b.to=null)}function V(a,b,c){var d=b.options||{};c=c.options||{};var e=(d.addClass||"")+" "+(c.addClass||""),g=(d.removeClass||"")+" "+(c.removeClass||"");a=Pa(a.attr("class"),e,g);c.preparationClasses&&(d.preparationClasses=ca(c.preparationClasses,d.preparationClasses),delete c.preparationClasses);
e=d.domOperation!==Q?d.domOperation:null;Ca(d,c);e&&(d.domOperation=e);d.addClass=a.addClass?a.addClass:null;d.removeClass=a.removeClass?a.removeClass:null;b.addClass=d.addClass;b.removeClass=d.removeClass;return d}function Pa(a,b,c){function d(a){R(a)&&(a=a.split(" "));var b={};s(a,function(a){a.length&&(b[a]=!0)});return b}var e={};a=d(a);b=d(b);s(b,function(a,b){e[b]=1});c=d(c);s(c,function(a,b){e[b]=1===e[b]?null:-1});var g={addClass:"",removeClass:""};s(e,function(b,c){var d,e;1===b?(d="addClass",
e=!a[c]):-1===b&&(d="removeClass",e=a[c]);e&&(g[d].length&&(g[d]+=" "),g[d]+=c)});return g}function G(a){return a instanceof r.element?a[0]:a}function Qa(a,b,c){var d="";b&&(d=X(b,"ng-",!0));c.addClass&&(d=ca(d,X(c.addClass,"-add")));c.removeClass&&(d=ca(d,X(c.removeClass,"-remove")));d.length&&(c.preparationClasses=d,a.addClass(d))}function la(a,b){var c=b?"-"+b+"s":"";ha(a,[ia,c]);return[ia,c]}function pa(a,b){var c=b?"paused":"",d=Y+"PlayState";ha(a,[d,c]);return[d,c]}function ha(a,b){a.style[b[0]]=
b[1]}function ca(a,b){return a?b?a+" "+b:a:b}function Da(a,b,c){var d=Object.create(null),e=a.getComputedStyle(b)||{};s(c,function(a,b){var c=e[a];if(c){var C=c.charAt(0);if("-"===C||"+"===C||0<=C)c=Ra(c);0===c&&(c=null);d[b]=c}});return d}function Ra(a){var b=0;a=a.split(/\s*,\s*/);s(a,function(a){"s"==a.charAt(a.length-1)&&(a=a.substring(0,a.length-1));a=parseFloat(a)||0;b=b?Math.max(a,b):a});return b}function qa(a){return 0===a||null!=a}function Ea(a,b){var c=S,d=a+"s";b?c+="Duration":d+=" linear all";
return[c,d]}function Fa(){var a=Object.create(null);return{flush:function(){a=Object.create(null)},count:function(b){return(b=a[b])?b.total:0},get:function(b){return(b=a[b])&&b.value},put:function(b,c){a[b]?a[b].total++:a[b]={total:1,value:c}}}}function Ga(a,b,c){s(c,function(c){a[c]=Z(a[c])?a[c]:b.style.getPropertyValue(c)})}var Q=r.noop,Ha=r.copy,Ca=r.extend,I=r.element,s=r.forEach,ba=r.isArray,R=r.isString,ra=r.isObject,P=r.isUndefined,Z=r.isDefined,Ia=r.isFunction,sa=r.isElement,S,ta,Y,ua;P(D.ontransitionend)&&
Z(D.onwebkittransitionend)?(S="WebkitTransition",ta="webkitTransitionEnd transitionend"):(S="transition",ta="transitionend");P(D.onanimationend)&&Z(D.onwebkitanimationend)?(Y="WebkitAnimation",ua="webkitAnimationEnd animationend"):(Y="animation",ua="animationend");var ma=Y+"Delay",va=Y+"Duration",ia=S+"Delay";D=S+"Duration";var Ka=r.$$minErr("ng"),Sa={transitionDuration:D,transitionDelay:ia,transitionProperty:S+"Property",animationDuration:va,animationDelay:ma,animationIterationCount:Y+"IterationCount"},
Ta={transitionDuration:D,transitionDelay:ia,animationDuration:va,animationDelay:ma};r.module("ngAnimate",[]).directive("ngAnimateSwap",["$animate","$rootScope",function(a,b){return{restrict:"A",transclude:"element",terminal:!0,priority:600,link:function(b,d,e,g,H){var A,C;b.$watchCollection(e.ngAnimateSwap||e["for"],function(e){A&&a.leave(A);C&&(C.$destroy(),C=null);if(e||0===e)C=b.$new(),H(C,function(b){A=b;a.enter(b,null,d)})})}}}]).directive("ngAnimateChildren",["$interpolate",function(a){return{link:function(b,
c,d){function e(a){c.data("$$ngAnimateChildren","on"===a||"true"===a)}var g=d.ngAnimateChildren;r.isString(g)&&0===g.length?c.data("$$ngAnimateChildren",!0):(e(a(g)(b)),d.$observe("ngAnimateChildren",e))}}}]).factory("$$rAFScheduler",["$$rAF",function(a){function b(a){d=d.concat(a);c()}function c(){if(d.length){for(var b=d.shift(),H=0;H<b.length;H++)b[H]();e||a(function(){e||c()})}}var d,e;d=b.queue=[];b.waitUntilQuiet=function(b){e&&e();e=a(function(){e=null;b();c()})};return b}]).provider("$$animateQueue",
["$animateProvider",function(a){function b(a){if(!a)return null;a=a.split(" ");var b=Object.create(null);s(a,function(a){b[a]=!0});return b}function c(a,c){if(a&&c){var d=b(c);return a.split(" ").some(function(a){return d[a]})}}function d(a,b,c,d){return g[a].some(function(a){return a(b,c,d)})}function e(a,b){var c=0<(a.addClass||"").length,d=0<(a.removeClass||"").length;return b?c&&d:c||d}var g=this.rules={skip:[],cancel:[],join:[]};g.join.push(function(a,b,c){return!b.structural&&e(b)});g.skip.push(function(a,
b,c){return!b.structural&&!e(b)});g.skip.push(function(a,b,c){return"leave"==c.event&&b.structural});g.skip.push(function(a,b,c){return c.structural&&2===c.state&&!b.structural});g.cancel.push(function(a,b,c){return c.structural&&b.structural});g.cancel.push(function(a,b,c){return 2===c.state&&b.structural});g.cancel.push(function(a,b,d){a=b.addClass;b=b.removeClass;var e=d.addClass;d=d.removeClass;return P(a)&&P(b)||P(e)&&P(d)?!1:c(a,d)||c(b,e)});this.$get=["$$rAF","$rootScope","$rootElement","$document",
"$$HashMap","$$animation","$$AnimateRunner","$templateRequest","$$jqLite","$$forceReflow",function(b,c,g,m,M,r,u,na,v,z){function K(){var a=!1;return function(b){a?b():c.$$postDigest(function(){a=!0;b()})}}function J(a,b,c){var f=G(b),d=G(a),h=[];(a=x[c])&&s(a,function(a){y.call(a.node,f)?h.push(a.callback):"leave"===c&&y.call(a.node,d)&&h.push(a.callback)});return h}function h(a,f,h){function l(c,f,d,h){g(function(){var c=J(y,a,f);c.length&&b(function(){s(c,function(b){b(a,d,h)})})});c.progress(f,
d,h)}function x(b){var c=a,f=n;f.preparationClasses&&(c.removeClass(f.preparationClasses),f.preparationClasses=null);f.activeClasses&&(c.removeClass(f.activeClasses),f.activeClasses=null);Ja(a,n);fa(a,n);n.domOperation();k.complete(!b)}var n=Ha(h),z,y;if(a=Ma(a))z=G(a),y=a.parent();var n=ka(n),k=new u,g=K();ba(n.addClass)&&(n.addClass=n.addClass.join(" "));n.addClass&&!R(n.addClass)&&(n.addClass=null);ba(n.removeClass)&&(n.removeClass=n.removeClass.join(" "));n.removeClass&&!R(n.removeClass)&&(n.removeClass=
null);n.from&&!ra(n.from)&&(n.from=null);n.to&&!ra(n.to)&&(n.to=null);if(!z)return x(),k;h=[z.className,n.addClass,n.removeClass].join(" ");if(!Ua(h))return x(),k;var C=0<=["enter","move","leave"].indexOf(f),w=!L||m[0].hidden||E.get(z);h=!w&&B.get(z)||{};var v=!!h.state;w||v&&1==h.state||(w=!q(a,y,f));if(w)return x(),k;C&&xa(a);w={structural:C,element:a,event:f,addClass:n.addClass,removeClass:n.removeClass,close:x,options:n,runner:k};if(v){if(d("skip",a,w,h)){if(2===h.state)return x(),k;V(a,h,w);
return h.runner}if(d("cancel",a,w,h))if(2===h.state)h.runner.end();else if(h.structural)h.close();else return V(a,h,w),h.runner;else if(d("join",a,w,h))if(2===h.state)V(a,w,{});else return Qa(a,C?f:null,n),f=w.event=h.event,n=V(a,h,w),h.runner}else V(a,w,{});(v=w.structural)||(v="animate"===w.event&&0<Object.keys(w.options.to||{}).length||e(w));if(!v)return x(),N(a),k;var M=(h.counter||0)+1;w.counter=M;t(a,1,w);c.$$postDigest(function(){var b=B.get(z),c=!b,b=b||{},d=0<(a.parent()||[]).length&&("animate"===
b.event||b.structural||e(b));if(c||b.counter!==M||!d){c&&(Ja(a,n),fa(a,n));if(c||C&&b.event!==f)n.domOperation(),k.end();d||N(a)}else f=!b.structural&&e(b,!0)?"setClass":b.event,t(a,2),b=r(a,f,b.options),b.done(function(b){x(!b);(b=B.get(z))&&b.counter===M&&N(G(a));l(k,f,"close",{})}),k.setHost(b),l(k,f,"start",{})});return k}function xa(a){a=G(a).querySelectorAll("[data-ng-animate]");s(a,function(a){var b=parseInt(a.getAttribute("data-ng-animate")),c=B.get(a);if(c)switch(b){case 2:c.runner.end();
case 1:B.remove(a)}})}function N(a){a=G(a);a.removeAttribute("data-ng-animate");B.remove(a)}function k(a,b){return G(a)===G(b)}function q(a,b,c){c=I(m[0].body);var f=k(a,c)||"HTML"===a[0].nodeName,d=k(a,g),h=!1,l,e=E.get(G(a));for((a=a.data("$ngAnimatePin"))&&(b=a);b&&b.length;){d||(d=k(b,g));var x=b[0];if(1!==x.nodeType)break;a=B.get(x)||{};if(!h){x=E.get(x);if(!0===x&&!1!==e){e=!0;break}else!1===x&&(e=!1);h=a.structural}if(P(l)||!0===l)a=b.data("$$ngAnimateChildren"),Z(a)&&(l=a);if(h&&!1===l)break;
f||(f=k(b,c));if(f&&d)break;if(!d&&(a=b.data("$ngAnimatePin"))){b=a;continue}b=b.parent()}return(!h||l)&&!0!==e&&d&&f}function t(a,b,c){c=c||{};c.state=b;a=G(a);a.setAttribute("data-ng-animate",b);c=(b=B.get(a))?Ca(b,c):c;B.put(a,c)}var B=new M,E=new M,L=null,f=c.$watch(function(){return 0===na.totalPendingRequests},function(a){a&&(f(),c.$$postDigest(function(){c.$$postDigest(function(){null===L&&(L=!0)})}))}),x={},l=a.classNameFilter(),Ua=l?function(a){return l.test(a)}:function(){return!0},Ja=U(v),
y=Node.prototype.contains||function(a){return this===a||!!(this.compareDocumentPosition(a)&16)};return{on:function(a,b,c){b=oa(b);x[a]=x[a]||[];x[a].push({node:b,callback:c})},off:function(a,b,c){function f(a,b,c){var d=oa(b);return a.filter(function(a){return!(a.node===d&&(!c||a.callback===c))})}var d=x[a];d&&(x[a]=1===arguments.length?null:f(d,b,c))},pin:function(a,b){ya(sa(a),"element","not an element");ya(sa(b),"parentElement","not an element");a.data("$ngAnimatePin",b)},push:function(a,b,c,f){c=
c||{};c.domOperation=f;return h(a,b,c)},enabled:function(a,b){var c=arguments.length;if(0===c)b=!!L;else if(sa(a)){var f=G(a),d=E.get(f);1===c?b=!d:E.put(f,!b)}else b=L=!!a;return b}}}]}]).provider("$$animation",["$animateProvider",function(a){function b(a){return a.data("$$animationRunner")}var c=this.drivers=[];this.$get=["$$jqLite","$rootScope","$injector","$$AnimateRunner","$$HashMap","$$rAFScheduler",function(a,e,g,H,A,C){function m(a){function b(a){if(a.processed)return a;a.processed=!0;var d=
a.domNode,N=d.parentNode;e.put(d,a);for(var k;N;){if(k=e.get(N)){k.processed||(k=b(k));break}N=N.parentNode}(k||c).children.push(a);return a}var c={children:[]},d,e=new A;for(d=0;d<a.length;d++){var g=a[d];e.put(g.domNode,a[d]={domNode:g.domNode,fn:g.fn,children:[]})}for(d=0;d<a.length;d++)b(a[d]);return function(a){var b=[],c=[],d;for(d=0;d<a.children.length;d++)c.push(a.children[d]);a=c.length;var e=0,t=[];for(d=0;d<c.length;d++){var g=c[d];0>=a&&(a=e,e=0,b.push(t),t=[]);t.push(g.fn);g.children.forEach(function(a){e++;
c.push(a)});a--}t.length&&b.push(t);return b}(c)}var M=[],r=U(a);return function(u,A,v){function z(a){a=a.hasAttribute("ng-animate-ref")?[a]:a.querySelectorAll("[ng-animate-ref]");var b=[];s(a,function(a){var c=a.getAttribute("ng-animate-ref");c&&c.length&&b.push(a)});return b}function K(a){var b=[],c={};s(a,function(a,f){var d=G(a.element),h=0<=["enter","move"].indexOf(a.event),d=a.structural?z(d):[];if(d.length){var e=h?"to":"from";s(d,function(a){var b=a.getAttribute("ng-animate-ref");c[b]=c[b]||
{};c[b][e]={animationID:f,element:I(a)}})}else b.push(a)});var d={},h={};s(c,function(c,e){var l=c.from,t=c.to;if(l&&t){var g=a[l.animationID],E=a[t.animationID],k=l.animationID.toString();if(!h[k]){var z=h[k]={structural:!0,beforeStart:function(){g.beforeStart();E.beforeStart()},close:function(){g.close();E.close()},classes:J(g.classes,E.classes),from:g,to:E,anchors:[]};z.classes.length?b.push(z):(b.push(g),b.push(E))}h[k].anchors.push({out:l.element,"in":t.element})}else l=l?l.animationID:t.animationID,
t=l.toString(),d[t]||(d[t]=!0,b.push(a[l]))});return b}function J(a,b){a=a.split(" ");b=b.split(" ");for(var c=[],d=0;d<a.length;d++){var h=a[d];if("ng-"!==h.substring(0,3))for(var e=0;e<b.length;e++)if(h===b[e]){c.push(h);break}}return c.join(" ")}function h(a){for(var b=c.length-1;0<=b;b--){var d=c[b];if(g.has(d)&&(d=g.get(d)(a)))return d}}function xa(a,c){a.from&&a.to?(b(a.from.element).setHost(c),b(a.to.element).setHost(c)):b(a.element).setHost(c)}function N(){var a=b(u);!a||"leave"===A&&v.$$domOperationFired||
a.end()}function k(b){u.off("$destroy",N);u.removeData("$$animationRunner");r(u,v);fa(u,v);v.domOperation();E&&a.removeClass(u,E);u.removeClass("ng-animate");t.complete(!b)}v=ka(v);var q=0<=["enter","move","leave"].indexOf(A),t=new H({end:function(){k()},cancel:function(){k(!0)}});if(!c.length)return k(),t;u.data("$$animationRunner",t);var B=za(u.attr("class"),za(v.addClass,v.removeClass)),E=v.tempClasses;E&&(B+=" "+E,v.tempClasses=null);var L;q&&(L="ng-"+A+"-prepare",a.addClass(u,L));M.push({element:u,
classes:B,event:A,structural:q,options:v,beforeStart:function(){u.addClass("ng-animate");E&&a.addClass(u,E);L&&(a.removeClass(u,L),L=null)},close:k});u.on("$destroy",N);if(1<M.length)return t;e.$$postDigest(function(){var a=[];s(M,function(c){b(c.element)?a.push(c):c.close()});M.length=0;var c=K(a),d=[];s(c,function(a){d.push({domNode:G(a.from?a.from.element:a.element),fn:function(){a.beforeStart();var c,d=a.close;if(b(a.anchors?a.from.element||a.to.element:a.element)){var f=h(a);f&&(c=f.start)}c?
(c=c(),c.done(function(a){d(!a)}),xa(a,c)):d()}})});C(m(d))});return t}}]}]).provider("$animateCss",["$animateProvider",function(a){var b=Fa(),c=Fa();this.$get=["$window","$$jqLite","$$AnimateRunner","$timeout","$$forceReflow","$sniffer","$$rAFScheduler","$$animateQueue",function(a,e,g,H,A,C,m,M){function r(a,b){var c=a.parentNode;return(c.$$ngAnimateParentKey||(c.$$ngAnimateParentKey=++K))+"-"+a.getAttribute("class")+"-"+b}function u(h,g,z,k){var q;0<b.count(z)&&(q=c.get(z),q||(g=X(g,"-stagger"),
e.addClass(h,g),q=Da(a,h,k),q.animationDuration=Math.max(q.animationDuration,0),q.transitionDuration=Math.max(q.transitionDuration,0),e.removeClass(h,g),c.put(z,q)));return q||{}}function na(a){J.push(a);m.waitUntilQuiet(function(){b.flush();c.flush();for(var a=A(),d=0;d<J.length;d++)J[d](a);J.length=0})}function v(c,e,g){e=b.get(g);e||(e=Da(a,c,Sa),"infinite"===e.animationIterationCount&&(e.animationIterationCount=1));b.put(g,e);c=e;g=c.animationDelay;e=c.transitionDelay;c.maxDelay=g&&e?Math.max(g,
e):g||e;c.maxDuration=Math.max(c.animationDuration*c.animationIterationCount,c.transitionDuration);return c}var z=U(e),K=0,J=[];return function(a,c){function d(){q()}function k(){q(!0)}function q(b){if(!(A||wa&&K)){A=!0;K=!1;f.$$skipPreparationClasses||e.removeClass(a,da);e.removeClass(a,ca);pa(l,!1);la(l,!1);s(m,function(a){l.style[a[0]]=""});z(a,f);fa(a,f);Object.keys(x).length&&s(x,function(a,b){a?l.style.setProperty(b,a):l.style.removeProperty(b)});if(f.onDone)f.onDone();ea&&ea.length&&a.off(ea.join(" "),
E);var c=a.data("$$animateCss");c&&(H.cancel(c[0].timer),a.removeData("$$animateCss"));D&&D.complete(!b)}}function t(a){p.blockTransition&&la(l,a);p.blockKeyframeAnimation&&pa(l,!!a)}function B(){D=new g({end:d,cancel:k});na(Q);q();return{$$willAnimate:!1,start:function(){return D},end:d}}function E(a){a.stopPropagation();var b=a.originalEvent||a;a=b.$manualTimeStamp||Date.now();b=parseFloat(b.elapsedTime.toFixed(3));Math.max(a-U,0)>=P&&b>=O&&(wa=!0,q())}function L(){function b(){if(!A){t(!1);s(m,
function(a){l.style[a[0]]=a[1]});z(a,f);e.addClass(a,ca);if(p.recalculateTimingStyles){ja=l.className+" "+da;ga=r(l,ja);F=v(l,ja,ga);$=F.maxDelay;n=Math.max($,0);O=F.maxDuration;if(0===O){q();return}p.hasTransitions=0<F.transitionDuration;p.hasAnimations=0<F.animationDuration}p.applyAnimationDelay&&($="boolean"!==typeof f.delay&&qa(f.delay)?parseFloat(f.delay):$,n=Math.max($,0),F.animationDelay=$,aa=[ma,$+"s"],m.push(aa),l.style[aa[0]]=aa[1]);P=1E3*n;R=1E3*O;if(f.easing){var d,g=f.easing;p.hasTransitions&&
(d=S+"TimingFunction",m.push([d,g]),l.style[d]=g);p.hasAnimations&&(d=Y+"TimingFunction",m.push([d,g]),l.style[d]=g)}F.transitionDuration&&ea.push(ta);F.animationDuration&&ea.push(ua);U=Date.now();var k=P+1.5*R;d=U+k;var g=a.data("$$animateCss")||[],L=!0;if(g.length){var B=g[0];(L=d>B.expectedEndTime)?H.cancel(B.timer):g.push(q)}L&&(k=H(c,k,!1),g[0]={timer:k,expectedEndTime:d},g.push(q),a.data("$$animateCss",g));if(ea.length)a.on(ea.join(" "),E);f.to&&(f.cleanupStyles&&Ga(x,l,Object.keys(f.to)),Ba(a,
f))}}function c(){var b=a.data("$$animateCss");if(b){for(var d=1;d<b.length;d++)b[d]();a.removeData("$$animateCss")}}if(!A)if(l.parentNode){var d=function(a){if(wa)K&&a&&(K=!1,q());else if(K=!a,F.animationDuration)if(a=pa(l,K),K)m.push(a);else{var b=m,c=b.indexOf(a);0<=a&&b.splice(c,1)}},g=0<Z&&(F.transitionDuration&&0===W.transitionDuration||F.animationDuration&&0===W.animationDuration)&&Math.max(W.animationDelay,W.transitionDelay);g?H(b,Math.floor(g*Z*1E3),!1):b();I.resume=function(){d(!0)};I.pause=
function(){d(!1)}}else q()}var f=c||{};f.$$prepared||(f=ka(Ha(f)));var x={},l=G(a);if(!l||!l.parentNode||!M.enabled())return B();var m=[],J=a.attr("class"),y=La(f),A,K,wa,D,I,n,P,O,R,U,ea=[];if(0===f.duration||!C.animations&&!C.transitions)return B();var w=f.event&&ba(f.event)?f.event.join(" "):f.event,V="",T="";w&&f.structural?V=X(w,"ng-",!0):w&&(V=w);f.addClass&&(T+=X(f.addClass,"-add"));f.removeClass&&(T.length&&(T+=" "),T+=X(f.removeClass,"-remove"));f.applyClassesEarly&&T.length&&z(a,f);var da=
[V,T].join(" ").trim(),ja=J+" "+da,ca=X(da,"-active"),J=y.to&&0<Object.keys(y.to).length;if(!(0<(f.keyframeStyle||"").length||J||da))return B();var ga,W;0<f.stagger?(y=parseFloat(f.stagger),W={transitionDelay:y,animationDelay:y,transitionDuration:0,animationDuration:0}):(ga=r(l,ja),W=u(l,da,ga,Ta));f.$$skipPreparationClasses||e.addClass(a,da);f.transitionStyle&&(y=[S,f.transitionStyle],ha(l,y),m.push(y));0<=f.duration&&(y=0<l.style[S].length,y=Ea(f.duration,y),ha(l,y),m.push(y));f.keyframeStyle&&
(y=[Y,f.keyframeStyle],ha(l,y),m.push(y));var Z=W?0<=f.staggerIndex?f.staggerIndex:b.count(ga):0;(w=0===Z)&&!f.skipBlocking&&la(l,9999);var F=v(l,ja,ga),$=F.maxDelay;n=Math.max($,0);O=F.maxDuration;var p={};p.hasTransitions=0<F.transitionDuration;p.hasAnimations=0<F.animationDuration;p.hasTransitionAll=p.hasTransitions&&"all"==F.transitionProperty;p.applyTransitionDuration=J&&(p.hasTransitions&&!p.hasTransitionAll||p.hasAnimations&&!p.hasTransitions);p.applyAnimationDuration=f.duration&&p.hasAnimations;
p.applyTransitionDelay=qa(f.delay)&&(p.applyTransitionDuration||p.hasTransitions);p.applyAnimationDelay=qa(f.delay)&&p.hasAnimations;p.recalculateTimingStyles=0<T.length;if(p.applyTransitionDuration||p.applyAnimationDuration)O=f.duration?parseFloat(f.duration):O,p.applyTransitionDuration&&(p.hasTransitions=!0,F.transitionDuration=O,y=0<l.style[S+"Property"].length,m.push(Ea(O,y))),p.applyAnimationDuration&&(p.hasAnimations=!0,F.animationDuration=O,m.push([va,O+"s"]));if(0===O&&!p.recalculateTimingStyles)return B();
if(null!=f.delay){var aa;"boolean"!==typeof f.delay&&(aa=parseFloat(f.delay),n=Math.max(aa,0));p.applyTransitionDelay&&m.push([ia,aa+"s"]);p.applyAnimationDelay&&m.push([ma,aa+"s"])}null==f.duration&&0<F.transitionDuration&&(p.recalculateTimingStyles=p.recalculateTimingStyles||w);P=1E3*n;R=1E3*O;f.skipBlocking||(p.blockTransition=0<F.transitionDuration,p.blockKeyframeAnimation=0<F.animationDuration&&0<W.animationDelay&&0===W.animationDuration);f.from&&(f.cleanupStyles&&Ga(x,l,Object.keys(f.from)),
Aa(a,f));p.blockTransition||p.blockKeyframeAnimation?t(O):f.skipBlocking||la(l,!1);return{$$willAnimate:!0,end:d,start:function(){if(!A)return I={end:d,cancel:k,resume:null,pause:null},D=new g(I),na(L),D}}}}]}]).provider("$$animateCssDriver",["$$animationProvider",function(a){a.drivers.push("$$animateCssDriver");this.$get=["$animateCss","$rootScope","$$AnimateRunner","$rootElement","$sniffer","$$jqLite","$document",function(a,c,d,e,g,H,A){function C(a){return a.replace(/\bng-\S+\b/g,"")}function m(a,
b){R(a)&&(a=a.split(" "));R(b)&&(b=b.split(" "));return a.filter(function(a){return-1===b.indexOf(a)}).join(" ")}function M(c,e,g){function h(a){var b={},c=G(a).getBoundingClientRect();s(["width","height","top","left"],function(a){var d=c[a];switch(a){case "top":d+=D.scrollTop;break;case "left":d+=D.scrollLeft}b[a]=Math.floor(d)+"px"});return b}function A(){var c=C(g.attr("class")||""),d=m(c,q),c=m(q,c),d=a(k,{to:h(g),addClass:"ng-anchor-in "+d,removeClass:"ng-anchor-out "+c,delay:!0});return d.$$willAnimate?
d:null}function H(){k.remove();e.removeClass("ng-animate-shim");g.removeClass("ng-animate-shim")}var k=I(G(e).cloneNode(!0)),q=C(k.attr("class")||"");e.addClass("ng-animate-shim");g.addClass("ng-animate-shim");k.addClass("ng-anchor");v.append(k);var t;c=function(){var c=a(k,{addClass:"ng-anchor-out",delay:!0,from:h(e)});return c.$$willAnimate?c:null}();if(!c&&(t=A(),!t))return H();var B=c||t;return{start:function(){function a(){c&&c.end()}var b,c=B.start();c.done(function(){c=null;if(!t&&(t=A()))return c=
t.start(),c.done(function(){c=null;H();b.complete()}),c;H();b.complete()});return b=new d({end:a,cancel:a})}}}function r(a,b,c,e){var g=u(a,Q),m=u(b,Q),k=[];s(e,function(a){(a=M(c,a.out,a["in"]))&&k.push(a)});if(g||m||0!==k.length)return{start:function(){function a(){s(b,function(a){a.end()})}var b=[];g&&b.push(g.start());m&&b.push(m.start());s(k,function(a){b.push(a.start())});var c=new d({end:a,cancel:a});d.all(b,function(a){c.complete(a)});return c}}}function u(c){var d=c.element,e=c.options||
{};c.structural&&(e.event=c.event,e.structural=!0,e.applyClassesEarly=!0,"leave"===c.event&&(e.onDone=e.domOperation));e.preparationClasses&&(e.event=ca(e.event,e.preparationClasses));c=a(d,e);return c.$$willAnimate?c:null}if(!g.animations&&!g.transitions)return Q;var D=A[0].body;c=G(e);var v=I(c.parentNode&&11===c.parentNode.nodeType||D.contains(c)?c:D);U(H);return function(a){return a.from&&a.to?r(a.from,a.to,a.classes,a.anchors):u(a)}}]}]).provider("$$animateJs",["$animateProvider",function(a){this.$get=
["$injector","$$AnimateRunner","$$jqLite",function(b,c,d){function e(c){c=ba(c)?c:c.split(" ");for(var d=[],e={},g=0;g<c.length;g++){var s=c[g],r=a.$$registeredAnimations[s];r&&!e[s]&&(d.push(b.get(r)),e[s]=!0)}return d}var g=U(d);return function(a,b,d,m){function r(){m.domOperation();g(a,m)}function D(a,b,d,e,f){switch(d){case "animate":b=[b,e.from,e.to,f];break;case "setClass":b=[b,z,K,f];break;case "addClass":b=[b,z,f];break;case "removeClass":b=[b,K,f];break;default:b=[b,f]}b.push(e);if(a=a.apply(a,
b))if(Ia(a.start)&&(a=a.start()),a instanceof c)a.done(f);else if(Ia(a))return a;return Q}function u(a,b,d,e,f){var g=[];s(e,function(e){var h=e[f];h&&g.push(function(){var e,f,g=!1,k=function(a){g||(g=!0,(f||Q)(a),e.complete(!a))};e=new c({end:function(){k()},cancel:function(){k(!0)}});f=D(h,a,b,d,function(a){k(!1===a)});return e})});return g}function G(a,b,d,e,f){var g=u(a,b,d,e,f);if(0===g.length){var h,k;"beforeSetClass"===f?(h=u(a,"removeClass",d,e,"beforeRemoveClass"),k=u(a,"addClass",d,e,"beforeAddClass")):
"setClass"===f&&(h=u(a,"removeClass",d,e,"removeClass"),k=u(a,"addClass",d,e,"addClass"));h&&(g=g.concat(h));k&&(g=g.concat(k))}if(0!==g.length)return function(a){var b=[];g.length&&s(g,function(a){b.push(a())});b.length?c.all(b,a):a();return function(a){s(b,function(b){a?b.cancel():b.end()})}}}var v=!1;3===arguments.length&&ra(d)&&(m=d,d=null);m=ka(m);d||(d=a.attr("class")||"",m.addClass&&(d+=" "+m.addClass),m.removeClass&&(d+=" "+m.removeClass));var z=m.addClass,K=m.removeClass,J=e(d),h,I;if(J.length){var N,
k;"leave"==b?(k="leave",N="afterLeave"):(k="before"+b.charAt(0).toUpperCase()+b.substr(1),N=b);"enter"!==b&&"move"!==b&&(h=G(a,b,m,J,k));I=G(a,b,m,J,N)}if(h||I){var q;return{$$willAnimate:!0,end:function(){q?q.end():(v=!0,r(),fa(a,m),q=new c,q.complete(!0));return q},start:function(){function b(c){v=!0;r();fa(a,m);q.complete(c)}if(q)return q;q=new c;var d,e=[];h&&e.push(function(a){d=h(a)});e.length?e.push(function(a){r();a(!0)}):r();I&&e.push(function(a){d=I(a)});q.setHost({end:function(){v||((d||
Q)(void 0),b(void 0))},cancel:function(){v||((d||Q)(!0),b(!0))}});c.chain(e,b);return q}}}}}]}]).provider("$$animateJsDriver",["$$animationProvider",function(a){a.drivers.push("$$animateJsDriver");this.$get=["$$animateJs","$$AnimateRunner",function(a,c){function d(c){return a(c.element,c.event,c.classes,c.options)}return function(a){if(a.from&&a.to){var b=d(a.from),r=d(a.to);if(b||r)return{start:function(){function a(){return function(){s(d,function(a){a.end()})}}var d=[];b&&d.push(b.start());r&&
d.push(r.start());c.all(d,function(a){e.complete(a)});var e=new c({end:a(),cancel:a()});return e}}}else return d(a)}}]}])})(window,window.angular);
//# sourceMappingURL=angular-animate.min.js.map

/*
 AngularJS v1.5.0
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(s,q,t){'use strict';var f="BUTTON A INPUT TEXTAREA SELECT DETAILS SUMMARY".split(" "),l=function(a,c){if(-1!==c.indexOf(a[0].nodeName))return!0};q.module("ngAria",["ng"]).provider("$aria",function(){function a(a,h,p,n){return function(d,e,b){var g=b.$normalize(h);!c[g]||l(e,p)||b[g]||d.$watch(b[a],function(b){b=n?!b:!!b;e.attr(h,b)})}}var c={ariaHidden:!0,ariaChecked:!0,ariaDisabled:!0,ariaRequired:!0,ariaInvalid:!0,ariaValue:!0,tabindex:!0,bindKeypress:!0,bindRoleForClick:!0};this.config=
function(a){c=q.extend(c,a)};this.$get=function(){return{config:function(a){return c[a]},$$watchExpr:a}}}).directive("ngShow",["$aria",function(a){return a.$$watchExpr("ngShow","aria-hidden",[],!0)}]).directive("ngHide",["$aria",function(a){return a.$$watchExpr("ngHide","aria-hidden",[],!1)}]).directive("ngValue",["$aria",function(a){return a.$$watchExpr("ngValue","aria-checked",f,!1)}]).directive("ngChecked",["$aria",function(a){return a.$$watchExpr("ngChecked","aria-checked",f,!1)}]).directive("ngRequired",
["$aria",function(a){return a.$$watchExpr("ngRequired","aria-required",f,!1)}]).directive("ngModel",["$aria",function(a){function c(c,n,d,e){return a.config(n)&&!d.attr(c)&&(e||!l(d,f))}function m(a,c){return!c.attr("role")&&c.attr("type")===a&&"INPUT"!==c[0].nodeName}function h(a,c){var d=a.type,e=a.role;return"checkbox"===(d||e)||"menuitemcheckbox"===e?"checkbox":"radio"===(d||e)||"menuitemradio"===e?"radio":"range"===d||"progressbar"===e||"slider"===e?"range":""}return{restrict:"A",require:"ngModel",
priority:200,compile:function(f,n){var d=h(n,f);return{pre:function(a,b,c,k){"checkbox"===d&&(k.$isEmpty=function(a){return!1===a})},post:function(e,b,g,k){function f(){return k.$modelValue}function h(a){b.attr("aria-checked",g.value==k.$viewValue)}function n(){b.attr("aria-checked",!k.$isEmpty(k.$viewValue))}var l=c("tabindex","tabindex",b,!1);switch(d){case "radio":case "checkbox":m(d,b)&&b.attr("role",d);c("aria-checked","ariaChecked",b,!1)&&e.$watch(f,"radio"===d?h:n);l&&b.attr("tabindex",0);
break;case "range":m(d,b)&&b.attr("role","slider");if(a.config("ariaValue")){var p=!b.attr("aria-valuemin")&&(g.hasOwnProperty("min")||g.hasOwnProperty("ngMin")),q=!b.attr("aria-valuemax")&&(g.hasOwnProperty("max")||g.hasOwnProperty("ngMax")),r=!b.attr("aria-valuenow");p&&g.$observe("min",function(a){b.attr("aria-valuemin",a)});q&&g.$observe("max",function(a){b.attr("aria-valuemax",a)});r&&e.$watch(f,function(a){b.attr("aria-valuenow",a)})}l&&b.attr("tabindex",0)}!g.hasOwnProperty("ngRequired")&&
k.$validators.required&&c("aria-required","ariaRequired",b,!1)&&g.$observe("required",function(){b.attr("aria-required",!!g.required)});c("aria-invalid","ariaInvalid",b,!0)&&e.$watch(function(){return k.$invalid},function(a){b.attr("aria-invalid",!!a)})}}}}}]).directive("ngDisabled",["$aria",function(a){return a.$$watchExpr("ngDisabled","aria-disabled",f,!1)}]).directive("ngMessages",function(){return{restrict:"A",require:"?ngMessages",link:function(a,c,f,h){c.attr("aria-live")||c.attr("aria-live",
"assertive")}}}).directive("ngClick",["$aria","$parse",function(a,c){return{restrict:"A",compile:function(m,h){var p=c(h.ngClick,null,!0);return function(c,d,e){if(!l(d,f)&&(a.config("bindRoleForClick")&&!d.attr("role")&&d.attr("role","button"),a.config("tabindex")&&!d.attr("tabindex")&&d.attr("tabindex",0),a.config("bindKeypress")&&!e.ngKeypress))d.on("keypress",function(a){function d(){p(c,{$event:a})}var e=a.which||a.keyCode;32!==e&&13!==e||c.$apply(d)})}}}}]).directive("ngDblclick",["$aria",function(a){return function(c,
m,h){!a.config("tabindex")||m.attr("tabindex")||l(m,f)||m.attr("tabindex",0)}}])})(window,window.angular);
//# sourceMappingURL=angular-aria.min.js.map

/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.0.5
 */
!function(e,t,n){"use strict";!function(){t.module("ngMaterial",["ng","ngAnimate","ngAria","material.core","material.core.gestures","material.core.layout","material.core.theming.palette","material.core.theming","material.core.animate","material.components.autocomplete","material.components.backdrop","material.components.bottomSheet","material.components.button","material.components.card","material.components.checkbox","material.components.chips","material.components.content","material.components.datepicker","material.components.dialog","material.components.divider","material.components.fabActions","material.components.fabShared","material.components.fabSpeedDial","material.components.fabToolbar","material.components.fabTrigger","material.components.gridList","material.components.icon","material.components.input","material.components.list","material.components.menu","material.components.menuBar","material.components.progressCircular","material.components.progressLinear","material.components.radioButton","material.components.select","material.components.showHide","material.components.sidenav","material.components.slider","material.components.sticky","material.components.subheader","material.components.swipe","material.components.switch","material.components.tabs","material.components.toast","material.components.toolbar","material.components.tooltip","material.components.virtualRepeat","material.components.whiteframe"])}(),function(){function e(e,t){if(t.has("$swipe")){var n="You are using the ngTouch module. \nAngular Material already has mobile click, tap, and swipe support... \nngTouch is not supported with Angular Material!";e.warn(n)}}function n(e,t){e.decorator("$$rAF",["$delegate",o]),t.theme("default").primaryPalette("indigo").accentPalette("pink").warnPalette("deep-orange").backgroundPalette("grey")}function o(e){return e.throttle=function(t){var n,o,r,i;return function(){n=arguments,i=this,r=t,o||(o=!0,e(function(){r.apply(i,Array.prototype.slice.call(n)),o=!1}))}},e}t.module("material.core",["ngAnimate","material.core.animate","material.core.layout","material.core.gestures","material.core.theming"]).config(n).run(e),e.$inject=["$log","$injector"],n.$inject=["$provide","$mdThemingProvider"]}(),function(){function e(){return{restrict:"A",link:n}}function n(e,t,n){var o=n.mdAutoFocus||n.mdAutofocus||n.mdSidenavFocus;e.$watch(o,function(e){t.toggleClass("_md-autofocus",e)})}t.module("material.core").directive("mdAutofocus",e).directive("mdAutoFocus",e).directive("mdSidenavFocus",e)}(),function(){function e(e){function t(e){return n?"webkit"+e.charAt(0).toUpperCase()+e.substring(1):e}var n=/webkit/i.test(e.vendorPrefix);return{KEY_CODE:{COMMA:188,ENTER:13,ESCAPE:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT_ARROW:37,UP_ARROW:38,RIGHT_ARROW:39,DOWN_ARROW:40,TAB:9,BACKSPACE:8,DELETE:46},CSS:{TRANSITIONEND:"transitionend"+(n?" webkitTransitionEnd":""),ANIMATIONEND:"animationend"+(n?" webkitAnimationEnd":""),TRANSFORM:t("transform"),TRANSFORM_ORIGIN:t("transformOrigin"),TRANSITION:t("transition"),TRANSITION_DURATION:t("transitionDuration"),ANIMATION_PLAY_STATE:t("animationPlayState"),ANIMATION_DURATION:t("animationDuration"),ANIMATION_NAME:t("animationName"),ANIMATION_TIMING:t("animationTimingFunction"),ANIMATION_DIRECTION:t("animationDirection")},MEDIA:{xs:"(max-width: 599px)","gt-xs":"(min-width: 600px)",sm:"(min-width: 600px) and (max-width: 959px)","gt-sm":"(min-width: 960px)",md:"(min-width: 960px) and (max-width: 1279px)","gt-md":"(min-width: 1280px)",lg:"(min-width: 1280px) and (max-width: 1919px)","gt-lg":"(min-width: 1920px)",xl:"(min-width: 1920px)"},MEDIA_PRIORITY:["xl","gt-lg","lg","gt-md","md","gt-sm","sm","gt-xs","xs"]}}t.module("material.core").factory("$mdConstant",e),e.$inject=["$sniffer"]}(),function(){function e(e,n){function o(){return[].concat(E)}function r(){return E.length}function i(e){return E.length&&e>-1&&e<E.length}function a(e){return e?i(u(e)+1):!1}function d(e){return e?i(u(e)-1):!1}function c(e){return i(e)?E[e]:null}function s(e,t){return E.filter(function(n){return n[e]===t})}function l(e,n){return e?(t.isNumber(n)||(n=E.length),E.splice(n,0,e),u(e)):-1}function m(e){p(e)&&E.splice(u(e),1)}function u(e){return E.indexOf(e)}function p(e){return e&&u(e)>-1}function h(){return E.length?E[0]:null}function f(){return E.length?E[E.length-1]:null}function g(e,o,r,a){r=r||b;for(var d=u(o);;){if(!i(d))return null;var c=d+(e?-1:1),s=null;if(i(c)?s=E[c]:n&&(s=e?f():h(),c=u(s)),null===s||c===a)return null;if(r(s))return s;t.isUndefined(a)&&(a=c),d=c}}var b=function(){return!0};e&&!t.isArray(e)&&(e=Array.prototype.slice.call(e)),n=!!n;var E=e||[];return{items:o,count:r,inRange:i,contains:p,indexOf:u,itemAt:c,findBy:s,add:l,remove:m,first:h,last:f,next:t.bind(null,g,!1),previous:t.bind(null,g,!0),hasPrevious:d,hasNext:a}}t.module("material.core").config(["$provide",function(t){t.decorator("$mdUtil",["$delegate",function(t){return t.iterator=e,t}])}])}(),function(){function e(e,n,o){function r(e){var n=u[e];t.isUndefined(n)&&(n=u[e]=i(e));var o=h[n];return t.isUndefined(o)&&(o=a(n)),o}function i(t){return e.MEDIA[t]||("("!==t.charAt(0)?"("+t+")":t)}function a(e){var t=p[e];return t||(t=p[e]=o.matchMedia(e)),t.addListener(d),h[t.media]=!!t.matches}function d(e){n.$evalAsync(function(){h[e.media]=!!e.matches})}function c(e){return p[e]}function s(t,n){for(var o=0;o<e.MEDIA_PRIORITY.length;o++){var r=e.MEDIA_PRIORITY[o];if(p[u[r]].matches){var i=m(t,n+"-"+r);if(t[i])return t[i]}}return t[m(t,n)]}function l(n,o,r){var i=[];return n.forEach(function(n){var a=m(o,n);t.isDefined(o[a])&&i.push(o.$observe(a,t.bind(void 0,r,null)));for(var d in e.MEDIA)a=m(o,n+"-"+d),t.isDefined(o[a])&&i.push(o.$observe(a,t.bind(void 0,r,d)))}),function(){i.forEach(function(e){e()})}}function m(e,t){return f[t]||(f[t]=e.$normalize(t))}var u={},p={},h={},f={};return r.getResponsiveAttribute=s,r.getQuery=c,r.watchResponsiveAttributes=l,r}t.module("material.core").factory("$mdMedia",e),e.$inject=["$mdConstant","$rootScope","$window"]}(),function(){function o(o,i,a,d,c,s,l,m,u){function p(e){return e[0]||e}var h=s.startSymbol(),f=s.endSymbol(),g="{{"===h&&"}}"===f,b=function(e,n,o){var r=!1;if(e&&e.length){var i=u.getComputedStyle(e[0]);r=t.isDefined(i[n])&&(o?i[n]==o:!0)}return r},E={dom:{},now:e.performance?t.bind(e.performance,e.performance.now):Date.now||function(){return(new Date).getTime()},clientRect:function(e,t,n){var o=p(e);t=p(t||o.offsetParent||document.body);var r=o.getBoundingClientRect(),i=n?t.getBoundingClientRect():{left:0,top:0,width:0,height:0};return{left:r.left-i.left,top:r.top-i.top,width:r.width,height:r.height}},offsetRect:function(e,t){return E.clientRect(e,t,!0)},nodesToArray:function(e){e=e||[];for(var t=[],n=0;n<e.length;++n)t.push(e.item(n));return t},scrollTop:function(e){e=t.element(e||o[0].body);var r=e[0]==o[0].body?o[0].body:n,i=r?r.scrollTop+r.parentElement.scrollTop:0;return i||Math.abs(e[0].getBoundingClientRect().top)},findFocusTarget:function(e,n){function o(e,n){var o,r=e[0].querySelectorAll(n);return r&&r.length&&r.length&&t.forEach(r,function(e){e=t.element(e);var n=e.hasClass("_md-autofocus");n&&(o=e)}),o}var r,i="[md-autofocus]";return r=o(e,n||i),r||n==i||(r=o(e,"[md-auto-focus]"),r||(r=o(e,i))),r},disableScrollAround:function(e,n){function r(e){function n(e){}function r(e){e.preventDefault()}e=t.element(e||d)[0];var i=50,a=t.element('<div class="md-scroll-mask">  <div class="md-scroll-mask-bar"></div></div>').css("z-index",i);return e.appendChild(a[0]),a.on("wheel",r),a.on("touchmove",r),o.on("keydown",n),function(){a.off("wheel"),a.off("touchmove"),a[0].parentNode.removeChild(a[0]),o.off("keydown",n),delete E.disableScrollAround._enableScrolling}}function i(){var e=d.parentNode,t=e.style.cssText||"",n=d.style.cssText||"",o=E.scrollTop(d),r=d.clientWidth;return d.scrollHeight>d.clientHeight+1&&(a(d,{position:"fixed",width:"100%",top:-o+"px"}),a(e,{overflowY:"scroll"})),d.clientWidth<r&&a(d,{overflow:"hidden"}),function(){d.style.cssText=n,e.style.cssText=t,d.scrollTop=o,e.scrollTop=o}}function a(e,t){for(var n in t)e.style[n]=t[n]}if(E.disableScrollAround._count=E.disableScrollAround._count||0,++E.disableScrollAround._count,E.disableScrollAround._enableScrolling)return E.disableScrollAround._enableScrolling;e=t.element(e);var d=o[0].body,c=i(),s=r(n);return E.disableScrollAround._enableScrolling=function(){--E.disableScrollAround._count||(c(),s(),delete E.disableScrollAround._enableScrolling)}},enableScrolling:function(){var e=this.disableScrollAround._enableScrolling;e&&e()},floatingScrollbars:function(){if(this.floatingScrollbars.cached===n){var e=t.element("<div><div></div></div>").css({width:"100%","z-index":-1,position:"absolute",height:"35px","overflow-y":"scroll"});e.children().css("height","60px"),o[0].body.appendChild(e[0]),this.floatingScrollbars.cached=e[0].offsetWidth==e[0].childNodes[0].offsetWidth,e.remove()}return this.floatingScrollbars.cached},forceFocus:function(t){var n=t[0]||t;document.addEventListener("click",function r(e){e.target===n&&e.$focus&&(n.focus(),e.stopImmediatePropagation(),e.preventDefault(),n.removeEventListener("click",r))},!0);var o=document.createEvent("MouseEvents");o.initMouseEvent("click",!1,!0,e,{},0,0,0,0,!1,!1,!1,!1,0,null),o.$material=!0,o.$focus=!0,n.dispatchEvent(o)},createBackdrop:function(e,t){return a(E.supplant('<md-backdrop class="{0}">',[t]))(e)},supplant:function(e,t,n){return n=n||/\{([^\{\}]*)\}/g,e.replace(n,function(e,n){var o=n.split("."),r=t;try{for(var i in o)o.hasOwnProperty(i)&&(r=r[o[i]])}catch(a){r=e}return"string"==typeof r||"number"==typeof r?r:e})},fakeNgModel:function(){return{$fake:!0,$setTouched:t.noop,$setViewValue:function(e){this.$viewValue=e,this.$render(e),this.$viewChangeListeners.forEach(function(e){e()})},$isEmpty:function(e){return 0===(""+e).length},$parsers:[],$formatters:[],$viewChangeListeners:[],$render:t.noop}},debounce:function(e,t,o,r){var a;return function(){var d=o,c=Array.prototype.slice.call(arguments);i.cancel(a),a=i(function(){a=n,e.apply(d,c)},t||10,r)}},throttle:function(e,t){var n;return function(){var o=this,r=arguments,i=E.now();(!n||i-n>t)&&(e.apply(o,r),n=i)}},time:function(e){var t=E.now();return e(),E.now()-t},valueOnUse:function(e,t,n){var o=null,r=Array.prototype.slice.call(arguments),i=r.length>3?r.slice(3):[];Object.defineProperty(e,t,{get:function(){return null===o&&(o=n.apply(e,i)),o}})},nextUid:function(){return""+r++},disconnectScope:function(e){if(e&&e.$root!==e&&!e.$$destroyed){var t=e.$parent;e.$$disconnected=!0,t.$$childHead===e&&(t.$$childHead=e.$$nextSibling),t.$$childTail===e&&(t.$$childTail=e.$$prevSibling),e.$$prevSibling&&(e.$$prevSibling.$$nextSibling=e.$$nextSibling),e.$$nextSibling&&(e.$$nextSibling.$$prevSibling=e.$$prevSibling),e.$$nextSibling=e.$$prevSibling=null}},reconnectScope:function(e){if(e&&e.$root!==e&&e.$$disconnected){var t=e,n=t.$parent;t.$$disconnected=!1,t.$$prevSibling=n.$$childTail,n.$$childHead?(n.$$childTail.$$nextSibling=t,n.$$childTail=t):n.$$childHead=n.$$childTail=t}},getClosest:function(e,n,o){if(e instanceof t.element&&(e=e[0]),n=n.toUpperCase(),o&&(e=e.parentNode),!e)return null;do if(e.nodeName===n)return e;while(e=e.parentNode);return null},elementContains:function(n,o){var r=e.Node&&e.Node.prototype&&Node.prototype.contains,i=r?t.bind(n,n.contains):t.bind(n,function(e){return n===o||!!(16&this.compareDocumentPosition(e))});return i(o)},extractElementByName:function(e,n,o,r){function i(e){return a(e)||(o?d(e):null)}function a(e){if(e)for(var t=0,o=e.length;o>t;t++)if(e[t].nodeName.toLowerCase()===n)return e[t];return null}function d(e){var t;if(e)for(var n=0,o=e.length;o>n;n++){var r=e[n];if(!t)for(var a=0,d=r.childNodes.length;d>a;a++)t=t||i([r.childNodes[a]])}return t}var c=i(e);return!c&&r&&l.warn(E.supplant("Unable to find node '{0}' in element '{1}'.",[n,e[0].outerHTML])),t.element(c||e)},initOptionalProperties:function(e,n,o){o=o||{},t.forEach(e.$$isolateBindings,function(r,i){if(r.optional&&t.isUndefined(e[i])){var a=t.isDefined(n[r.attrName]);e[i]=t.isDefined(o[i])?o[i]:a}})},nextTick:function(e,t,n){function o(){var e=n&&n.$$destroyed,t=e?[]:r.queue,o=e?null:r.digest;r.queue=[],r.timeout=null,r.digest=!1,t.forEach(function(e){e()}),o&&d.$digest()}var r=E.nextTick,a=r.timeout,c=r.queue||[];return c.push(e),null==t&&(t=!0),r.digest=r.digest||t,r.queue=c,a||(r.timeout=i(o,0,!1))},processTemplate:function(e){return g?e:e&&t.isString(e)?e.replace(/\{\{/g,h).replace(/}}/g,f):e},getParentWithPointerEvents:function(e){for(var t=e.parent();b(t,"pointer-events","none");)t=t.parent();return t},getNearestContentElement:function(e){for(var t=e.parent()[0];t&&t!==m[0]&&t!==document.body&&"MD-CONTENT"!==t.nodeName.toUpperCase();)t=t.parentNode;return t},hasComputedStyle:b};return E.dom.animator=c(E),E}var r=0;t.module("material.core").factory("$mdUtil",o),o.$inject=["$document","$timeout","$compile","$rootScope","$$mdAnimate","$interpolate","$log","$rootElement","$window"],t.element.prototype.focus=t.element.prototype.focus||function(){return this.length&&this[0].focus(),this},t.element.prototype.blur=t.element.prototype.blur||function(){return this.length&&this[0].blur(),this}}(),function(){function e(e,n,o,r){function i(e,o,r){var i=t.element(e)[0]||e;!i||i.hasAttribute(o)&&0!==i.getAttribute(o).length||s(i,o)||(r=t.isString(r)?r.trim():"",r.length?e.attr(o,r):n.warn('ARIA: Attribute "',o,'", required for accessibility, is missing on node:',i))}function a(t,n,o){e(function(){i(t,n,o())})}function d(e,t){var n=c(e)||"",o=n.indexOf(r.startSymbol())>-1;o?a(e,t,function(){return c(e)}):i(e,t,n)}function c(e){return(e.text()||"").trim()}function s(e,t){function n(e){var t=e.currentStyle?e.currentStyle:o.getComputedStyle(e);return"none"===t.display}var r=e.hasChildNodes(),i=!1;if(r)for(var a=e.childNodes,d=0;d<a.length;d++){var c=a[d];1===c.nodeType&&c.hasAttribute(t)&&(n(c)||(i=!0))}return i}return{expect:i,expectAsync:a,expectWithText:d}}t.module("material.core").service("$mdAria",e),e.$inject=["$$rAF","$log","$window","$interpolate"]}(),function(){function e(e,n,o,r,i,a){this.compile=function(d){var c=d.templateUrl,s=d.template||"",l=d.controller,m=d.controllerAs,u=t.extend({},d.resolve||{}),p=t.extend({},d.locals||{}),h=d.transformTemplate||t.identity,f=d.bindToController;return t.forEach(u,function(e,n){t.isString(e)?u[n]=o.get(e):u[n]=o.invoke(e)}),t.extend(u,p),c?u.$template=n.get(c,{cache:a}).then(function(e){return e.data}):u.$template=e.when(s),e.all(u).then(function(e){var n,o=h(e.$template,d),a=d.element||t.element("<div>").html(o.trim()).contents(),c=r(a);return n={locals:e,element:a,link:function(o){if(e.$scope=o,l){var r=i(l,e,!0);f&&t.extend(r.instance,e);var d=r();a.data("$ngControllerController",d),a.children().data("$ngControllerController",d),m&&(o[m]=d),n.controller=d}return c(o)}}})}}t.module("material.core").service("$mdCompiler",e),e.$inject=["$q","$http","$injector","$compile","$controller","$templateCache"]}(),function(){function n(){}function o(n,o,r){function i(e){return function(t,n){n.distance<this.state.options.maxDistance&&this.dispatchEvent(t,e,n)}}function a(e,t,n){var o=h[t.replace(/^\$md./,"")];if(!o)throw new Error("Failed to register element with handler "+t+". Available handlers: "+Object.keys(h).join(", "));return o.registerElement(e,n)}function c(e,o){var r=new n(e);return t.extend(r,o),h[e]=r,g}var s=navigator.userAgent||navigator.vendor||e.opera,m=s.match(/ipad|iphone|ipod/i),u=s.match(/android/i),p="undefined"!=typeof e.jQuery&&t.element===e.jQuery,g={handler:c,register:a,isHijackingClicks:(m||u)&&!p&&!f};if(g.isHijackingClicks){var b=6;g.handler("click",{options:{maxDistance:b},onEnd:i("click")}),g.handler("focus",{options:{maxDistance:b},onEnd:function(e,t){function n(e){var t=["INPUT","SELECT","BUTTON","TEXTAREA","VIDEO","AUDIO"];return"-1"!=e.getAttribute("tabindex")&&!e.hasAttribute("DISABLED")&&(e.hasAttribute("tabindex")||e.hasAttribute("href")||-1!=t.indexOf(e.nodeName))}t.distance<this.state.options.maxDistance&&n(e.target)&&(this.dispatchEvent(e,"focus",t),e.target.focus())}}),g.handler("mouseup",{options:{maxDistance:b},onEnd:i("mouseup")}),g.handler("mousedown",{onStart:function(e){this.dispatchEvent(e,"mousedown")}})}return g.handler("press",{onStart:function(e,t){this.dispatchEvent(e,"$md.pressdown")},onEnd:function(e,t){this.dispatchEvent(e,"$md.pressup")}}).handler("hold",{options:{maxDistance:6,delay:500},onCancel:function(){r.cancel(this.state.timeout)},onStart:function(e,n){return this.state.registeredParent?(this.state.pos={x:n.x,y:n.y},void(this.state.timeout=r(t.bind(this,function(){this.dispatchEvent(e,"$md.hold"),this.cancel()}),this.state.options.delay,!1))):this.cancel()},onMove:function(e,t){e.preventDefault();var n=this.state.pos.x-t.x,o=this.state.pos.y-t.y;Math.sqrt(n*n+o*o)>this.options.maxDistance&&this.cancel()},onEnd:function(){this.onCancel()}}).handler("drag",{options:{minDistance:6,horizontal:!0,cancelMultiplier:1.5},onStart:function(e){this.state.registeredParent||this.cancel()},onMove:function(e,t){var n,o;e.preventDefault(),this.state.dragPointer?this.dispatchDragMove(e):(this.state.options.horizontal?(n=Math.abs(t.distanceX)>this.state.options.minDistance,o=Math.abs(t.distanceY)>this.state.options.minDistance*this.state.options.cancelMultiplier):(n=Math.abs(t.distanceY)>this.state.options.minDistance,o=Math.abs(t.distanceX)>this.state.options.minDistance*this.state.options.cancelMultiplier),n?(this.state.dragPointer=d(e),l(e,this.state.dragPointer),this.dispatchEvent(e,"$md.dragstart",this.state.dragPointer)):o&&this.cancel())},dispatchDragMove:o.throttle(function(e){this.state.isRunning&&(l(e,this.state.dragPointer),this.dispatchEvent(e,"$md.drag",this.state.dragPointer))}),onEnd:function(e,t){this.state.dragPointer&&(l(e,this.state.dragPointer),this.dispatchEvent(e,"$md.dragend",this.state.dragPointer))}}).handler("swipe",{options:{minVelocity:.65,minDistance:10},onEnd:function(e,t){var n;Math.abs(t.velocityX)>this.state.options.minVelocity&&Math.abs(t.distanceX)>this.state.options.minDistance?(n="left"==t.directionX?"$md.swipeleft":"$md.swiperight",this.dispatchEvent(e,n)):Math.abs(t.velocityY)>this.state.options.minVelocity&&Math.abs(t.distanceY)>this.state.options.minDistance&&(n="up"==t.directionY?"$md.swipeup":"$md.swipedown",this.dispatchEvent(e,n))}})}function r(e){this.name=e,this.state={}}function i(){function n(e,n,o){o=o||u;var r=new t.element.Event(n);r.$material=!0,r.pointer=o,r.srcEvent=e,t.extend(r,{clientX:o.x,clientY:o.y,screenX:o.x,screenY:o.y,pageX:o.x,pageY:o.y,ctrlKey:e.ctrlKey,altKey:e.altKey,shiftKey:e.shiftKey,metaKey:e.metaKey}),t.element(o.target).trigger(r)}function o(t,n,o){o=o||u;var r;"click"===n||"mouseup"==n||"mousedown"==n?(r=document.createEvent("MouseEvents"),r.initMouseEvent(n,!0,!0,e,t.detail,o.x,o.y,o.x,o.y,t.ctrlKey,t.altKey,t.shiftKey,t.metaKey,t.button,t.relatedTarget||null)):(r=document.createEvent("CustomEvent"),r.initCustomEvent(n,!0,!0,{})),r.$material=!0,r.pointer=o,r.srcEvent=t,o.target.dispatchEvent(r)}var i="undefined"!=typeof e.jQuery&&t.element===e.jQuery;return r.prototype={options:{},dispatchEvent:i?n:o,onStart:t.noop,onMove:t.noop,onEnd:t.noop,onCancel:t.noop,start:function(e,n){if(!this.state.isRunning){var o=this.getNearestParent(e.target),r=o&&o.$mdGesture[this.name]||{};this.state={isRunning:!0,options:t.extend({},this.options,r),registeredParent:o},this.onStart(e,n)}},move:function(e,t){this.state.isRunning&&this.onMove(e,t)},end:function(e,t){this.state.isRunning&&(this.onEnd(e,t),this.state.isRunning=!1)},cancel:function(e,t){this.onCancel(e,t),this.state={}},getNearestParent:function(e){for(var t=e;t;){if((t.$mdGesture||{})[this.name])return t;t=t.parentNode}return null},registerElement:function(e,t){function n(){delete e[0].$mdGesture[o.name],e.off("$destroy",n)}var o=this;return e[0].$mdGesture=e[0].$mdGesture||{},e[0].$mdGesture[this.name]=t||{},e.on("$destroy",n),n}},r}function a(e,n){function o(e){var t=!e.clientX&&!e.clientY;t||e.$material||e.isIonicTap||s(e)||(e.preventDefault(),e.stopPropagation())}function r(e){var t=0===e.clientX&&0===e.clientY;t||e.$material||e.isIonicTap||s(e)?(g=null,"label"==e.target.tagName.toLowerCase()&&(g={x:e.x,y:e.y})):(e.preventDefault(),e.stopPropagation(),g=null)}function i(e,t){var o;for(var r in h)o=h[r],o instanceof n&&("start"===e&&o.cancel(),o[e](t,u))}function a(e){if(!u){var t=+Date.now();p&&!c(e,p)&&t-p.endTime<1500||(u=d(e),i("start",e))}}function m(e){u&&c(e,u)&&(l(e,u),i("move",e))}function f(e){u&&c(e,u)&&(l(e,u),u.endTime=+Date.now(),i("end",e),p=u,u=null)}document.contains||(document.contains=function(e){return document.body.contains(e)}),!b&&e.isHijackingClicks&&(document.addEventListener("click",r,!0),document.addEventListener("mouseup",o,!0),document.addEventListener("mousedown",o,!0),document.addEventListener("focus",o,!0),b=!0);var E="mousedown touchstart pointerdown",v="mousemove touchmove pointermove",M="mouseup mouseleave touchend touchcancel pointerup pointercancel";t.element(document).on(E,a).on(v,m).on(M,f).on("$$mdGestureReset",function(){p=u=null})}function d(e){var t=m(e),n={startTime:+Date.now(),target:e.target,type:e.type.charAt(0)};return n.startX=n.x=t.pageX,n.startY=n.y=t.pageY,n}function c(e,t){return e&&t&&e.type.charAt(0)===t.type}function s(e){return g&&g.x==e.x&&g.y==e.y}function l(e,t){var n=m(e),o=t.x=n.pageX,r=t.y=n.pageY;t.distanceX=o-t.startX,t.distanceY=r-t.startY,t.distance=Math.sqrt(t.distanceX*t.distanceX+t.distanceY*t.distanceY),t.directionX=t.distanceX>0?"right":t.distanceX<0?"left":"",t.directionY=t.distanceY>0?"down":t.distanceY<0?"up":"",t.duration=+Date.now()-t.startTime,t.velocityX=t.distanceX/t.duration,t.velocityY=t.distanceY/t.duration}function m(e){return e=e.originalEvent||e,e.touches&&e.touches[0]||e.changedTouches&&e.changedTouches[0]||e}var u,p,h={},f=!1,g=null,b=!1;t.module("material.core.gestures",[]).provider("$mdGesture",n).factory("$$MdGestureHandler",i).run(a),n.prototype={skipClickHijack:function(){return f=!0},$get:["$$MdGestureHandler","$$rAF","$timeout",function(e,t,n){return new o(e,t,n)}]},o.$inject=["$$MdGestureHandler","$$rAF","$timeout"],a.$inject=["$mdGesture","$$MdGestureHandler"]}(),function(){function e(){function e(e){function n(e){return c.optionsFactory=e.options,c.methods=(e.methods||[]).concat(a),s}function o(e,t){return d[e]=t,s}function r(t,n){if(n=n||{},n.methods=n.methods||[],n.options=n.options||function(){return{}},/^cancel|hide|show$/.test(t))throw new Error("Preset '"+t+"' in "+e+" is reserved!");if(n.methods.indexOf("_options")>-1)throw new Error("Method '_options' in "+e+" is reserved!");return c.presets[t]={methods:n.methods.concat(a),optionsFactory:n.options,argOption:n.argOption},s}function i(n,o){function r(e){return e=e||{},e._options&&(e=e._options),m.show(t.extend({},l,e))}function i(e){return m.destroy(e)}function a(t,n){var r={};return r[e]=u,o.invoke(t||function(){return n},{},r)}var s,l,m=n(),u={hide:m.hide,cancel:m.cancel,show:r,destroy:i};return s=c.methods||[],l=a(c.optionsFactory,{}),t.forEach(d,function(e,t){u[t]=e}),t.forEach(c.presets,function(e,n){function o(e){this._options=t.extend({},r,e)}var r=a(e.optionsFactory,{}),i=(e.methods||[]).concat(s);if(t.extend(r,{$type:n}),t.forEach(i,function(e){o.prototype[e]=function(t){return this._options[e]=t,this}}),e.argOption){var d="show"+n.charAt(0).toUpperCase()+n.slice(1);u[d]=function(e){var t=u[n](e);return u.show(t)}}u[n]=function(n){return arguments.length&&e.argOption&&!t.isObject(n)&&!t.isArray(n)?(new o)[e.argOption](n):new o(n)}}),u}var a=["onHide","onShow","onRemove"],d={},c={presets:{}},s={setDefaults:n,addPreset:r,addMethod:o,$get:i};return s.addPreset("build",{methods:["controller","controllerAs","resolve","template","templateUrl","themable","transformTemplate","parent"]}),i.$inject=["$$interimElement","$injector"],s}function o(e,o,r,i,a,d,c,s,l,m,u){return function(){function p(e){e=e||{};var t=new b(e||{}),n=!e.skipHide&&M.length?E.hide():o.when(!0);return n["finally"](function(){M.push(t),t.show()["catch"](function(e){return e})}),t.deferred.promise}function h(e,t){function r(n){return n.remove(e,!1,t||{})["catch"](function(e){return e}),n.deferred.promise}if(!M.length)return o.when(e);if(t=t||{},t.closeAll){var i=o.all(M.reverse().map(r));return M=[],i}if(t.closeTo!==n)return o.all(M.splice(t.closeTo).map(r));var a=M.pop();return r(a)}function f(e,t){var n=M.shift();return n?(n.remove(e,!0,t||{})["catch"](function(e){return e}),n.deferred.promise):o.when(e)}function g(e){var n=e?null:M.shift(),r=t.element(e).length?t.element(e)[0].parentNode:null;if(r){var i=M.filter(function(e){var t=e.options.element[0];return t===r});i.length>0&&(n=i[0],M.splice(M.indexOf(n),1))}return n?n.remove(v,!1,{$destroy:!0}):o.when(v)}function b(u){function p(){return o(function(e,t){function n(e){C.deferred.reject(e),t(e)}g(u).then(function(t){A=b(t,u),T=$(A,u,t.controller).then(e,n)},n)})}function h(e,n,r){function i(e){C.deferred.resolve(e)}function a(e){C.deferred.reject(e)}return A?(u=t.extend(u||{},r||{}),u.cancelAutoHide&&u.cancelAutoHide(),u.element.triggerHandler("$mdInterimElementRemove"),u.$destroy===!0?y(u.element,u).then(function(){n&&a(e)||i(e)}):(o.when(T)["finally"](function(){y(u.element,u).then(function(){n&&a(e)||i(e)},a)}),C.deferred.promise)):o.when(!1)}function f(e){return e=e||{},e.template&&(e.template=s.processTemplate(e.template)),t.extend({preserveScope:!1,cancelAutoHide:t.noop,scope:e.scope||i.$new(e.isolateScope),onShow:function(e,t,n){return c.enter(t,n.parent)},onRemove:function(e,t){return t&&c.leave(t)||o.when()}},e)}function g(e){var t=e.skipCompile?null:l.compile(e);return t||o(function(t){t({locals:{},link:function(){return e.element}})})}function b(e,n){t.extend(e.locals,n);var o=e.link(n.scope);return n.element=o,n.parent=v(o,n),n.themable&&m(o),o}function v(n,o){var r=o.parent;if(r=t.isFunction(r)?r(o.scope,n,o):t.isString(r)?t.element(e[0].querySelector(r)):t.element(r),!(r||{}).length){var i;return d[0]&&d[0].querySelector&&(i=d[0].querySelector(":not(svg) > body")),i||(i=d[0]),"#comment"==i.nodeName&&(i=e[0].body),t.element(i)}return r}function M(){var e,o=t.noop;u.hideDelay&&(e=a(E.hide,u.hideDelay),o=function(){a.cancel(e)}),u.cancelAutoHide=function(){o(),u.cancelAutoHide=n}}function $(e,n,r){var i=n.onShowing||t.noop,a=n.onComplete||t.noop;return i(n.scope,e,n,r),o(function(t,i){try{o.when(n.onShow(n.scope,e,n,r)).then(function(){a(n.scope,e,n),M(),t(e)},i)}catch(d){i(d.message)}})}function y(e,n){var o=n.onRemoving||t.noop;return r(function(t,i){try{var a=r.when(n.onRemove(n.scope,e,n)||!0);o(e,a),1==n.$destroy?t(e):a.then(function(){!n.preserveScope&&n.scope&&n.scope.$destroy(),t(e)},i)}catch(d){i(d.message)}})}var C,A,T=o.when(!0);return u=f(u),C={options:u,deferred:o.defer(),show:p,remove:h}}var E,v=!1,M=[];return E={show:p,hide:h,cancel:f,destroy:g,$injector_:u}}}return e.$get=o,o.$inject=["$document","$q","$$q","$rootScope","$timeout","$rootElement","$animate","$mdUtil","$mdCompiler","$mdTheming","$injector"],e}t.module("material.core").provider("$$interimElement",e)}(),function(){!function(){function e(e){function a(e){return e.replace(c,"").replace(s,function(e,t,n,o){return o?n.toUpperCase():n})}var c=/^((?:x|data)[\:\-_])/i,s=/([\:\-\_]+(.))/g,l=["","xs","gt-xs","sm","gt-sm","md","gt-md","lg","gt-lg","xl"],m=["layout","flex","flex-order","flex-offset","layout-align"],u=["show","hide","layout-padding","layout-margin"];t.forEach(l,function(n){t.forEach(m,function(t){var o=n?t+"-"+n:t;e.directive(a(o),r(o))}),t.forEach(u,function(t){var o=n?t+"-"+n:t;e.directive(a(o),i(o))})}),e.directive("mdLayoutCss",n).directive("ngCloak",o("ng-cloak")).directive("layoutWrap",i("layout-wrap")).directive("layoutNowrap",i("layout-nowrap")).directive("layoutNoWrap",i("layout-no-wrap")).directive("layoutFill",i("layout-fill")).directive("layoutLtMd",d("layout-lt-md",!0)).directive("layoutLtLg",d("layout-lt-lg",!0)).directive("flexLtMd",d("flex-lt-md",!0)).directive("flexLtLg",d("flex-lt-lg",!0)).directive("layoutAlignLtMd",d("layout-align-lt-md")).directive("layoutAlignLtLg",d("layout-align-lt-lg")).directive("flexOrderLtMd",d("flex-order-lt-md")).directive("flexOrderLtLg",d("flex-order-lt-lg")).directive("offsetLtMd",d("flex-offset-lt-md")).directive("offsetLtLg",d("flex-offset-lt-lg")).directive("hideLtMd",d("hide-lt-md")).directive("hideLtLg",d("hide-lt-lg")).directive("showLtMd",d("show-lt-md")).directive("showLtLg",d("show-lt-lg"))}function n(){return{restrict:"A",priority:"900",compile:function(e,n){return A.enabled=!1,t.noop}}}function o(e){return["$timeout",function(n){return{restrict:"A",priority:-10,compile:function(o){return A.enabled?(o.addClass(e),function(t,o){n(function(){o.removeClass(e)},10,!1)}):t.noop}}}]}function r(e){function n(t,n,o){var r=a(n,e,o),i=o.$observe(o.$normalize(e),r);r(u(e,o,"")),t.$on("$destroy",function(){i()})}return["$mdUtil","$interpolate","$log",function(o,r,i){return f=o,g=r,b=i,{restrict:"A",compile:function(o,r){var i;return A.enabled&&(c(e,r,o,b),s(e,u(e,r,""),l(o,e,r)),i=n),i||t.noop}}}]}function i(e){function n(t,n){n.addClass(e)}return["$mdUtil","$interpolate","$log",function(o,r,i){return f=o,g=r,b=i,{restrict:"A",compile:function(o,r){var i;return A.enabled&&(s(e,u(e,r,""),l(o,e,r)),n(null,o),i=n),i||t.noop}}}]}function a(e,n){var o;return function(r){var i=s(n,r||"");t.isDefined(i)&&(o&&e.removeClass(o),o=i?n+"-"+i.replace(v,"-"):n,e.addClass(o))}}function d(e){var n=e.split("-");return["$log",function(o){return o.warn(e+"has been deprecated. Please use a `"+n[0]+"-gt-<xxx>` variant."),t.noop}]}function c(e,t,n,o){var r,i,a,d=n[0].nodeName.toLowerCase();switch(e.replace(E,"")){case"flex":("md-button"==d||"fieldset"==d)&&(i="<"+d+" "+e+"></"+d+">",a="https://github.com/philipwalton/flexbugs#9-some-html-elements-cant-be-flex-containers",r="Markup '{0}' may not work as expected in IE Browsers. Consult '{1}' for details.",o.warn(f.supplant(r,[i,a])))}}function s(e,n,o){var r=n;if(!m(n)){switch(e.replace(E,"")){case"layout":p(n,$)||(n=$[0]);break;case"flex":p(n,M)||isNaN(n)&&(n="");break;case"flex-offset":case"flex-order":(!n||isNaN(+n))&&(n="0");break;case"layout-align":var i=h(n);n=f.supplant("{main}-{cross}",i);break;case"layout-padding":case"layout-margin":case"layout-fill":case"layout-wrap":case"layout-nowrap":case"layout-nowrap":n=""}n!=r&&(o||t.noop)(n)}return n}function l(e,t,n){return function(e){m(e)||(n[n.$normalize(t)]=e)}}function m(e){return(e||"").indexOf(g.startSymbol())>-1}function u(e,t,n){var o=t.$normalize(e);return t[o]?t[o].replace(v,"-"):n||null}function p(e,t,n){e=n&&e?e.replace(v,n):e;var o=!1;return e&&t.forEach(function(t){t=n?t.replace(v,n):t,o=o||t===e}),o}function h(e){var t,n={main:"start",cross:"stretch"};return e=e||"",(0==e.indexOf("-")||0==e.indexOf(" "))&&(e="none"+e),t=e.toLowerCase().trim().replace(v,"-").split("-"),t.length&&"space"===t[0]&&(t=[t[0]+"-"+t[1],t[2]]),t.length>0&&(n.main=t[0]||n.main),t.length>1&&(n.cross=t[1]||n.cross),y.indexOf(n.main)<0&&(n.main="start"),C.indexOf(n.cross)<0&&(n.cross="stretch"),n}var f,g,b,E=/(-gt)?-(sm|md|lg)/g,v=/\s+/g,M=["grow","initial","auto","none","noshrink","nogrow"],$=["row","column"],y=["","start","center","end","stretch","space-around","space-between"],C=["","start","center","end","stretch"],A={enabled:!0,breakpoints:[]};e(t.module("material.core.layout",["ng"]))}()}(),function(){function e(e,n){function o(e){return e&&""!==e}var r,i=[],a={};return r={notFoundError:function(t){e.error("No instance found for handle",t)},getInstances:function(){return i},get:function(e){if(!o(e))return null;var t,n,r;for(t=0,n=i.length;n>t;t++)if(r=i[t],r.$$mdHandle===e)return r;return null},register:function(e,n){function o(){var t=i.indexOf(e);-1!==t&&i.splice(t,1)}function r(){var t=a[n];t&&(t.resolve(e),delete a[n])}return n?(e.$$mdHandle=n,i.push(e),r(),o):t.noop},when:function(e){if(o(e)){var t=n.defer(),i=r.get(e);
return i?t.resolve(i):a[e]=t,t.promise}return n.reject("Invalid `md-component-id` value.")}}}t.module("material.core").factory("$mdComponentRegistry",e),e.$inject=["$log","$q"]}(),function(){!function(){function e(e){function n(e){return e.hasClass("md-icon-button")?{isMenuItem:e.hasClass("md-menu-item"),fitRipple:!0,center:!0}:{isMenuItem:e.hasClass("md-menu-item"),dimBackground:!0}}return{attach:function(o,r,i){return i=t.extend(n(r),i),e.attach(o,r,i)}}}t.module("material.core").factory("$mdButtonInkRipple",e),e.$inject=["$mdInkRipple"]}()}(),function(){!function(){function e(e){function n(n,o,r){return e.attach(n,o,t.extend({center:!0,dimBackground:!1,fitRipple:!0},r))}return{attach:n}}t.module("material.core").factory("$mdCheckboxInkRipple",e),e.$inject=["$mdInkRipple"]}()}(),function(){!function(){function e(e){function n(n,o,r){return e.attach(n,o,t.extend({center:!1,dimBackground:!0,outline:!1,rippleSize:"full"},r))}return{attach:n}}t.module("material.core").factory("$mdListInkRipple",e),e.$inject=["$mdInkRipple"]}()}(),function(){function e(e,n){return{controller:t.noop,link:function(t,o,r){r.hasOwnProperty("mdInkRippleCheckbox")?n.attach(t,o):e.attach(t,o)}}}function n(e){function n(n,r,i){return r.controller("mdNoInk")?t.noop:e.instantiate(o,{$scope:n,$element:r,rippleOptions:i})}return{attach:n}}function o(e,n,o,r,i,a){this.$window=r,this.$timeout=i,this.$mdUtil=a,this.$scope=e,this.$element=n,this.options=o,this.mousedown=!1,this.ripples=[],this.timeout=null,this.lastRipple=null,a.valueOnUse(this,"container",this.createContainer),this.$element.addClass("md-ink-ripple"),(n.controller("mdInkRipple")||{}).createRipple=t.bind(this,this.createRipple),(n.controller("mdInkRipple")||{}).setColor=t.bind(this,this.color),this.bindEvents()}function r(e,n){(e.mousedown||e.lastRipple)&&(e.mousedown=!1,e.$mdUtil.nextTick(t.bind(e,n),!1))}function i(){return{controller:t.noop}}t.module("material.core").factory("$mdInkRipple",n).directive("mdInkRipple",e).directive("mdNoInk",i).directive("mdNoBar",i).directive("mdNoStretch",i);var a=450;e.$inject=["$mdButtonInkRipple","$mdCheckboxInkRipple"],n.$inject=["$injector"],o.$inject=["$scope","$element","rippleOptions","$window","$timeout","$mdUtil"],o.prototype.color=function(e){function n(){var e=o.options&&o.options.colorElement?o.options.colorElement:[],t=e.length?e[0]:o.$element[0];return t?o.$window.getComputedStyle(t).color:"rgb(0,0,0)"}var o=this;return t.isDefined(e)&&(o._color=o._parseColor(e)),o._color||o._parseColor(o.inkRipple())||o._parseColor(n())},o.prototype.calculateColor=function(){return this.color()},o.prototype._parseColor=function(e,t){function n(e){var t="#"===e[0]?e.substr(1):e,n=t.length/3,o=t.substr(0,n),r=t.substr(n,n),i=t.substr(2*n);return 1===n&&(o+=o,r+=r,i+=i),"rgba("+parseInt(o,16)+","+parseInt(r,16)+","+parseInt(i,16)+",0.1)"}function o(e){return e.replace(")",", 0.1)").replace("(","a(")}return t=t||1,e?0===e.indexOf("rgba")?e.replace(/\d?\.?\d*\s*\)\s*$/,(.1*t).toString()+")"):0===e.indexOf("rgb")?o(e):0===e.indexOf("#")?n(e):void 0:void 0},o.prototype.bindEvents=function(){this.$element.on("mousedown",t.bind(this,this.handleMousedown)),this.$element.on("mouseup touchend",t.bind(this,this.handleMouseup)),this.$element.on("mouseleave",t.bind(this,this.handleMouseup)),this.$element.on("touchmove",t.bind(this,this.handleTouchmove))},o.prototype.handleMousedown=function(e){if(!this.mousedown)if(e.hasOwnProperty("originalEvent")&&(e=e.originalEvent),this.mousedown=!0,this.options.center)this.createRipple(this.container.prop("clientWidth")/2,this.container.prop("clientWidth")/2);else if(e.srcElement!==this.$element[0]){var t=this.$element[0].getBoundingClientRect(),n=e.clientX-t.left,o=e.clientY-t.top;this.createRipple(n,o)}else this.createRipple(e.offsetX,e.offsetY)},o.prototype.handleMouseup=function(){r(this,this.clearRipples)},o.prototype.handleTouchmove=function(){r(this,this.deleteRipples)},o.prototype.deleteRipples=function(){for(var e=0;e<this.ripples.length;e++)this.ripples[e].remove()},o.prototype.clearRipples=function(){for(var e=0;e<this.ripples.length;e++)this.fadeInComplete(this.ripples[e])},o.prototype.createContainer=function(){var e=t.element('<div class="md-ripple-container"></div>');return this.$element.append(e),e},o.prototype.clearTimeout=function(){this.timeout&&(this.$timeout.cancel(this.timeout),this.timeout=null)},o.prototype.isRippleAllowed=function(){var e=this.$element[0];do{if(!e.tagName||"BODY"===e.tagName)break;if(e&&t.isFunction(e.hasAttribute)){if(e.hasAttribute("disabled"))return!1;if("false"===this.inkRipple()||"0"===this.inkRipple())return!1}}while(e=e.parentNode);return!0},o.prototype.inkRipple=function(){return this.$element.attr("md-ink-ripple")},o.prototype.createRipple=function(e,n){function o(e){return e?e.replace("rgba","rgb").replace(/,[^\),]+\)/,")"):"rgb(0,0,0)"}function r(e,t,n){return e?Math.max(t,n):Math.sqrt(Math.pow(t,2)+Math.pow(n,2))}if(this.isRippleAllowed()){var i=this,d=t.element('<div class="md-ripple"></div>'),c=this.$element.prop("clientWidth"),s=this.$element.prop("clientHeight"),l=2*Math.max(Math.abs(c-e),e),m=2*Math.max(Math.abs(s-n),n),u=r(this.options.fitRipple,l,m),p=this.calculateColor();d.css({left:e+"px",top:n+"px",background:"black",width:u+"px",height:u+"px",backgroundColor:o(p),borderColor:o(p)}),this.lastRipple=d,this.clearTimeout(),this.timeout=this.$timeout(function(){i.clearTimeout(),i.mousedown||i.fadeInComplete(d)},.35*a,!1),this.options.dimBackground&&this.container.css({backgroundColor:p}),this.container.append(d),this.ripples.push(d),d.addClass("md-ripple-placed"),this.$mdUtil.nextTick(function(){d.addClass("md-ripple-scaled md-ripple-active"),i.$timeout(function(){i.clearRipples()},a,!1)},!1)}},o.prototype.fadeInComplete=function(e){this.lastRipple===e?this.timeout||this.mousedown||this.removeRipple(e):this.removeRipple(e)},o.prototype.removeRipple=function(e){var t=this,n=this.ripples.indexOf(e);0>n||(this.ripples.splice(this.ripples.indexOf(e),1),e.removeClass("md-ripple-active"),0===this.ripples.length&&this.container.css({backgroundColor:""}),this.$timeout(function(){t.fadeOutComplete(e)},a,!1))},o.prototype.fadeOutComplete=function(e){e.remove(),this.lastRipple=null}}(),function(){!function(){function e(e){function n(n,o,r){return e.attach(n,o,t.extend({center:!1,dimBackground:!0,outline:!1,rippleSize:"full"},r))}return{attach:n}}t.module("material.core").factory("$mdTabInkRipple",e),e.$inject=["$mdInkRipple"]}()}(),function(){t.module("material.core.theming.palette",[]).constant("$mdColorPalette",{red:{50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 300 A100",contrastStrongLightColors:"400 500 600 700 A200 A400 A700"},pink:{50:"#fce4ec",100:"#f8bbd0",200:"#f48fb1",300:"#f06292",400:"#ec407a",500:"#e91e63",600:"#d81b60",700:"#c2185b",800:"#ad1457",900:"#880e4f",A100:"#ff80ab",A200:"#ff4081",A400:"#f50057",A700:"#c51162",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 A100",contrastStrongLightColors:"500 600 A200 A400 A700"},purple:{50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 A100",contrastStrongLightColors:"300 400 A200 A400 A700"},"deep-purple":{50:"#ede7f6",100:"#d1c4e9",200:"#b39ddb",300:"#9575cd",400:"#7e57c2",500:"#673ab7",600:"#5e35b1",700:"#512da8",800:"#4527a0",900:"#311b92",A100:"#b388ff",A200:"#7c4dff",A400:"#651fff",A700:"#6200ea",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 A100",contrastStrongLightColors:"300 400 A200"},indigo:{50:"#e8eaf6",100:"#c5cae9",200:"#9fa8da",300:"#7986cb",400:"#5c6bc0",500:"#3f51b5",600:"#3949ab",700:"#303f9f",800:"#283593",900:"#1a237e",A100:"#8c9eff",A200:"#536dfe",A400:"#3d5afe",A700:"#304ffe",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 A100",contrastStrongLightColors:"300 400 A200 A400"},blue:{50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 300 400 A100",contrastStrongLightColors:"500 600 700 A200 A400 A700"},"light-blue":{50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea",contrastDefaultColor:"dark",contrastLightColors:"600 700 800 900 A700",contrastStrongLightColors:"600 700 800 A700"},cyan:{50:"#e0f7fa",100:"#b2ebf2",200:"#80deea",300:"#4dd0e1",400:"#26c6da",500:"#00bcd4",600:"#00acc1",700:"#0097a7",800:"#00838f",900:"#006064",A100:"#84ffff",A200:"#18ffff",A400:"#00e5ff",A700:"#00b8d4",contrastDefaultColor:"dark",contrastLightColors:"700 800 900",contrastStrongLightColors:"700 800 900"},teal:{50:"#e0f2f1",100:"#b2dfdb",200:"#80cbc4",300:"#4db6ac",400:"#26a69a",500:"#009688",600:"#00897b",700:"#00796b",800:"#00695c",900:"#004d40",A100:"#a7ffeb",A200:"#64ffda",A400:"#1de9b6",A700:"#00bfa5",contrastDefaultColor:"dark",contrastLightColors:"500 600 700 800 900",contrastStrongLightColors:"500 600 700"},green:{50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853",contrastDefaultColor:"dark",contrastLightColors:"600 700 800 900",contrastStrongLightColors:"600 700"},"light-green":{50:"#f1f8e9",100:"#dcedc8",200:"#c5e1a5",300:"#aed581",400:"#9ccc65",500:"#8bc34a",600:"#7cb342",700:"#689f38",800:"#558b2f",900:"#33691e",A100:"#ccff90",A200:"#b2ff59",A400:"#76ff03",A700:"#64dd17",contrastDefaultColor:"dark",contrastLightColors:"700 800 900",contrastStrongLightColors:"700 800 900"},lime:{50:"#f9fbe7",100:"#f0f4c3",200:"#e6ee9c",300:"#dce775",400:"#d4e157",500:"#cddc39",600:"#c0ca33",700:"#afb42b",800:"#9e9d24",900:"#827717",A100:"#f4ff81",A200:"#eeff41",A400:"#c6ff00",A700:"#aeea00",contrastDefaultColor:"dark",contrastLightColors:"900",contrastStrongLightColors:"900"},yellow:{50:"#fffde7",100:"#fff9c4",200:"#fff59d",300:"#fff176",400:"#ffee58",500:"#ffeb3b",600:"#fdd835",700:"#fbc02d",800:"#f9a825",900:"#f57f17",A100:"#ffff8d",A200:"#ffff00",A400:"#ffea00",A700:"#ffd600",contrastDefaultColor:"dark"},amber:{50:"#fff8e1",100:"#ffecb3",200:"#ffe082",300:"#ffd54f",400:"#ffca28",500:"#ffc107",600:"#ffb300",700:"#ffa000",800:"#ff8f00",900:"#ff6f00",A100:"#ffe57f",A200:"#ffd740",A400:"#ffc400",A700:"#ffab00",contrastDefaultColor:"dark"},orange:{50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00",contrastDefaultColor:"dark",contrastLightColors:"800 900",contrastStrongLightColors:"800 900"},"deep-orange":{50:"#fbe9e7",100:"#ffccbc",200:"#ffab91",300:"#ff8a65",400:"#ff7043",500:"#ff5722",600:"#f4511e",700:"#e64a19",800:"#d84315",900:"#bf360c",A100:"#ff9e80",A200:"#ff6e40",A400:"#ff3d00",A700:"#dd2c00",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 300 400 A100 A200",contrastStrongLightColors:"500 600 700 800 900 A400 A700"},brown:{50:"#efebe9",100:"#d7ccc8",200:"#bcaaa4",300:"#a1887f",400:"#8d6e63",500:"#795548",600:"#6d4c41",700:"#5d4037",800:"#4e342e",900:"#3e2723",A100:"#d7ccc8",A200:"#bcaaa4",A400:"#8d6e63",A700:"#5d4037",contrastDefaultColor:"light",contrastDarkColors:"50 100 200",contrastStrongLightColors:"300 400"},grey:{50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",1000:"#000000",A100:"#ffffff",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161",contrastDefaultColor:"dark",contrastLightColors:"600 700 800 900"},"blue-grey":{50:"#eceff1",100:"#cfd8dc",200:"#b0bec5",300:"#90a4ae",400:"#78909c",500:"#607d8b",600:"#546e7a",700:"#455a64",800:"#37474f",900:"#263238",A100:"#cfd8dc",A200:"#b0bec5",A400:"#78909c",A700:"#455a64",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 300",contrastStrongLightColors:"400 500"}})}(),function(){function e(e){function o(e,t){return t=t||{},m[e]=a(e,t),E}function r(e,n){return a(e,t.extend({},m[e]||{},n))}function a(e,t){var n=T.filter(function(e){return!t[e]});if(n.length)throw new Error("Missing colors %1 in palette %2!".replace("%1",n.join(", ")).replace("%2",e));return t}function c(e,n){if(u[e])return u[e];n=n||"default";var o="string"==typeof n?u[n]:n,r=new s(e);return o&&t.forEach(o.colors,function(e,n){r.colors[n]={name:e.name,hues:t.extend({},e.hues)}}),u[e]=r,r}function s(e){function n(e){if(e=0===arguments.length?!0:!!e,e!==o.isDark){o.isDark=e,o.foregroundPalette=o.isDark?f:h,o.foregroundShadow=o.isDark?g:b;var n=o.isDark?A:C,r=o.isDark?C:A;return t.forEach(n,function(e,t){var n=o.colors[t],i=r[t];if(n)for(var a in n.hues)n.hues[a]===i[a]&&(n.hues[a]=e[a])}),o}}var o=this;o.name=e,o.colors={},o.dark=n,n(!1),$.forEach(function(e){var n=(o.isDark?A:C)[e];o[e+"Palette"]=function(r,i){var a=o.colors[e]={name:r,hues:t.extend({},n,i)};return Object.keys(a.hues).forEach(function(e){if(!n[e])throw new Error("Invalid hue name '%1' in theme %2's %3 color %4. Available hue names: %4".replace("%1",e).replace("%2",o.name).replace("%3",r).replace("%4",Object.keys(n).join(", ")))}),Object.keys(a.hues).map(function(e){return a.hues[e]}).forEach(function(t){if(-1==T.indexOf(t))throw new Error("Invalid hue value '%1' in theme %2's %3 color %4. Available hue values: %5".replace("%1",t).replace("%2",o.name).replace("%3",e).replace("%4",r).replace("%5",T.join(", ")))}),o},o[e+"Color"]=function(){var t=Array.prototype.slice.call(arguments);return console.warn("$mdThemingProviderTheme."+e+"Color() has been deprecated. Use $mdThemingProviderTheme."+e+"Palette() instead."),o[e+"Palette"].apply(o,t)}})}function p(e,o){function r(e){return e===n||""===e?!0:i.THEMES[e]!==n}function i(t,o){o===n&&(o=t,t=n),t===n&&(t=e),i.inherit(o,o)}return i.inherit=function(n,i){function a(e){if(e){r(e)||o.warn("Attempted to use unregistered theme '"+e+"'. Register it with $mdThemingProvider.theme().");var t=n.data("$mdThemeName");t&&n.removeClass("md-"+t+"-theme"),n.addClass("md-"+e+"-theme"),n.data("$mdThemeName",e),d&&n.data("$mdThemeController",d)}}var d=i.controller("mdTheme"),c=n.attr("md-theme-watch");if((M||t.isDefined(c))&&"false"!=c){var s=e.$watch(function(){return d&&d.$mdTheme||("default"==v?"":v)},a);n.on("$destroy",s)}else{var l=d&&d.$mdTheme||("default"==v?"":v);a(l)}},i.THEMES=t.extend({},u),i.defaultTheme=function(){return v},i.registered=r,i.generateTheme=function(e){d(e,k)},i}m={},u={};var E,v="default",M=!1;return t.extend(m,e),p.$inject=["$rootScope","$log"],E={definePalette:o,extendPalette:r,theme:c,setNonce:function(e){k=e},setDefaultTheme:function(e){v=e},alwaysWatchTheme:function(e){M=e},generateThemesOnDemand:function(e){w=e},$get:p,_LIGHT_DEFAULT_HUES:C,_DARK_DEFAULT_HUES:A,_PALETTES:m,_THEMES:u,_parseRules:i,_rgba:l}}function o(e,t,n){return{priority:100,link:{pre:function(o,r,i){var a={$setTheme:function(t){e.registered(t)||n.warn("attempted to use unregistered theme '"+t+"'"),a.$mdTheme=t}};r.data("$mdThemeController",a),a.$setTheme(t(i.mdTheme)(o)),i.$observe("mdTheme",a.$setTheme)}}}}function r(e){return e}function i(e,n,o){c(e,n),o=o.replace(/THEME_NAME/g,e.name);var r=[],i=e.colors[n],a=new RegExp(".md-"+e.name+"-theme","g"),d=new RegExp("('|\")?{{\\s*("+n+")-(color|contrast)-?(\\d\\.?\\d*)?\\s*}}(\"|')?","g"),s=/'?"?\{\{\s*([a-zA-Z]+)-(A?\d+|hue\-[0-3]|shadow)-?(\d\.?\d*)?(contrast)?\s*\}\}'?"?/g,u=m[i.name];return o=o.replace(s,function(t,n,o,r,i){return"foreground"===n?"shadow"==o?e.foregroundShadow:e.foregroundPalette[o]||e.foregroundPalette[1]:(0===o.indexOf("hue")&&(o=e.colors[n].hues[o]),l((m[e.colors[n].name][o]||"")[i?"contrast":"value"],r))}),t.forEach(i.hues,function(t,n){var i=o.replace(d,function(e,n,o,r,i){return l(u[t]["color"===r?"value":"contrast"],i)});if("default"!==n&&(i=i.replace(a,".md-"+e.name+"-theme.md-"+n)),"default"==e.name){var c=/((?:(?:(?: |>|\.|\w|-|:|\(|\)|\[|\]|"|'|=)+) )?)((?:(?:\w|\.|-)+)?)\.md-default-theme((?: |>|\.|\w|-|:|\(|\)|\[|\]|"|'|=)*)/g;i=i.replace(c,function(e,t,n,o){return e+", "+t+n+o})}r.push(i)}),r}function a(e){function n(e){var n=e.contrastDefaultColor,o=e.contrastLightColors||[],r=e.contrastStrongLightColors||[],i=e.contrastDarkColors||[];"string"==typeof o&&(o=o.split(" ")),"string"==typeof r&&(r=r.split(" ")),"string"==typeof i&&(i=i.split(" ")),delete e.contrastDefaultColor,delete e.contrastLightColors,delete e.contrastStrongLightColors,delete e.contrastDarkColors,t.forEach(e,function(a,d){function c(){return"light"===n?i.indexOf(d)>-1?E:r.indexOf(d)>-1?M:v:o.indexOf(d)>-1?r.indexOf(d)>-1?M:v:E}if(!t.isObject(a)){var l=s(a);if(!l)throw new Error("Color %1, in palette %2's hue %3, is invalid. Hex or rgb(a) color expected.".replace("%1",a).replace("%2",e.name).replace("%3",d));e[d]={value:l,contrast:c()}}})}var o=document.head,r=o?o.firstElementChild:null,i=e.has("$MD_THEME_CSS")?e.get("$MD_THEME_CSS"):"";if(r&&0!==i.length){t.forEach(m,n);var a=i.split(/\}(?!(\}|'|"|;))/).filter(function(e){return e&&e.length}).map(function(e){return e.trim()+"}"}),c=new RegExp("md-("+$.join("|")+")","g");$.forEach(function(e){x[e]=""}),a.forEach(function(e){for(var t,n=(e.match(c),0);t=$[n];n++)if(e.indexOf(".md-"+t)>-1)return x[t]+=e;for(n=0;t=$[n];n++)if(e.indexOf(t)>-1)return x[t]+=e;return x[y]+=e}),w||t.forEach(u,function(e){p[e.name]||d(e.name,k)})}}function d(e,t){var n=u[e],o=document.head,r=o?o.firstElementChild:null;p[e]||($.forEach(function(e){for(var a=i(n,e,x[e]);a.length;){var d=a.shift();if(d){var c=document.createElement("style");c.setAttribute("md-theme-style",""),t&&c.setAttribute("nonce",t),c.appendChild(document.createTextNode(d)),o.insertBefore(c,r)}}}),n.colors.primary.name==n.colors.accent.name&&console.warn("$mdThemingProvider: Using the same palette for primary and accent. This violates the material design spec."),p[n.name]=!0)}function c(e,t){if(!m[(e.colors[t]||{}).name])throw new Error("You supplied an invalid color palette for theme %1's %2 palette. Available palettes: %3".replace("%1",e.name).replace("%2",t).replace("%3",Object.keys(m).join(", ")))}function s(e){if(t.isArray(e)&&3==e.length)return e;if(/^rgb/.test(e))return e.replace(/(^\s*rgba?\(|\)\s*$)/g,"").split(",").map(function(e,t){return 3==t?parseFloat(e,10):parseInt(e,10)});if("#"==e.charAt(0)&&(e=e.substring(1)),/^([a-fA-F0-9]{3}){1,2}$/g.test(e)){var n=e.length/3,o=e.substr(0,n),r=e.substr(n,n),i=e.substr(2*n);return 1===n&&(o+=o,r+=r,i+=i),[parseInt(o,16),parseInt(r,16),parseInt(i,16)]}}function l(e,n){return e?(4==e.length&&(e=t.copy(e),n?e.pop():n=e.pop()),n&&("number"==typeof n||"string"==typeof n&&n.length)?"rgba("+e.join(",")+","+n+")":"rgb("+e.join(",")+")"):"rgb('0,0,0')"}t.module("material.core.theming",["material.core.theming.palette"]).directive("mdTheme",o).directive("mdThemable",r).provider("$mdTheming",e).run(a);var m,u,p={},h={name:"dark",1:"rgba(0,0,0,0.87)",2:"rgba(0,0,0,0.54)",3:"rgba(0,0,0,0.26)",4:"rgba(0,0,0,0.12)"},f={name:"light",1:"rgba(255,255,255,1.0)",2:"rgba(255,255,255,0.7)",3:"rgba(255,255,255,0.3)",4:"rgba(255,255,255,0.12)"},g="1px 1px 0px rgba(0,0,0,0.4), -1px -1px 0px rgba(0,0,0,0.4)",b="",E=s("rgba(0,0,0,0.87)"),v=s("rgba(255,255,255,0.87)"),M=s("rgb(255,255,255)"),$=["primary","accent","warn","background"],y="primary",C={accent:{"default":"A200","hue-1":"A100","hue-2":"A400","hue-3":"A700"},background:{"default":"A100","hue-1":"300","hue-2":"800","hue-3":"900"}},A={background:{"default":"800","hue-1":"600","hue-2":"300","hue-3":"900"}};$.forEach(function(e){var t={"default":"500","hue-1":"300","hue-2":"800","hue-3":"A100"};C[e]||(C[e]=t),A[e]||(A[e]=t)});var T=["50","100","200","300","400","500","600","700","800","900","A100","A200","A400","A700"],w=!1,k=null;e.$inject=["$mdColorPalette"],o.$inject=["$mdTheming","$interpolate","$log"],r.$inject=["$mdTheming"];var x={};a.$inject=["$injector"]}(),function(){function e(e,n,o,r,i){var a;return a={translate3d:function(e,t,n,o){function r(n){return i(e,{to:n||t,addClass:o.transitionOutClass,removeClass:o.transitionInClass}).start()}return i(e,{from:t,to:n,addClass:o.transitionInClass}).start().then(function(){return r})},waitTransitionEnd:function(e,t){var i=3e3;return n(function(n,a){function d(t){t&&t.target!==e[0]||(t&&o.cancel(c),e.off(r.CSS.TRANSITIONEND,d),n())}t=t||{};var c=o(d,t.timeout||i);e.on(r.CSS.TRANSITIONEND,d)})},calculateZoomToOrigin:function(n,o){function r(){var e=n?n.parent():null,t=e?e.parent():null;return t?a.clientRect(t):null}var i=o.element,d=o.bounds,c="translate3d( {centerX}px, {centerY}px, 0 ) scale( {scaleX}, {scaleY} )",s=t.bind(null,e.supplant,c),l=s({centerX:0,centerY:0,scaleX:.5,scaleY:.5});if(i||d){var m=i?a.clientRect(i)||r():a.copyRect(d),u=a.copyRect(n[0].getBoundingClientRect()),p=a.centerPointFor(u),h=a.centerPointFor(m);l=s({centerX:h.x-p.x,centerY:h.y-p.y,scaleX:Math.round(100*Math.min(.5,m.width/u.width))/100,scaleY:Math.round(100*Math.min(.5,m.height/u.height))/100})}return l},toCss:function(e){function n(e,n,r){t.forEach(n.split(" "),function(e){o[e]=r})}var o={},i="left top right bottom width height x y min-width min-height max-width max-height";return t.forEach(e,function(e,a){if(!t.isUndefined(e))if(i.indexOf(a)>=0)o[a]=e+"px";else switch(a){case"transition":n(a,r.CSS.TRANSITION,e);break;case"transform":n(a,r.CSS.TRANSFORM,e);break;case"transformOrigin":n(a,r.CSS.TRANSFORM_ORIGIN,e)}}),o},toTransformCss:function(e,n,o){var i={};return t.forEach(r.CSS.TRANSFORM.split(" "),function(t){i[t]=e}),n&&(o=o||"all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1) !important",i.transition=o),i},copyRect:function(e,n){return e?(n=n||{},t.forEach("left top right bottom width height".split(" "),function(t){n[t]=Math.round(e[t])}),n.width=n.width||n.right-n.left,n.height=n.height||n.bottom-n.top,n):null},clientRect:function(e){var n=t.element(e)[0].getBoundingClientRect(),o=function(e){return e&&e.width>0&&e.height>0};return o(n)?a.copyRect(n):null},centerPointFor:function(e){return e?{x:Math.round(e.left+e.width/2),y:Math.round(e.top+e.height/2)}:{x:0,y:0}}}}t.module("material.core").factory("$$mdAnimate",["$q","$timeout","$mdConstant","$animateCss",function(t,n,o,r){return function(i){return e(i,t,n,o,r)}}])}(),function(){t.version.minor>=4?t.module("material.core.animate",[]):!function(){function e(e){return e.replace(/-[a-z]/g,function(e){return e.charAt(1).toUpperCase()})}var n=t.forEach,o=t.isDefined(document.documentElement.style.WebkitAppearance),r=o?"-webkit-":"",i=(o?"webkitTransitionEnd ":"")+"transitionend",a=(o?"webkitAnimationEnd ":"")+"animationend",d=["$document",function(e){return function(){return e[0].body.clientWidth+1}}],c=["$$rAF",function(e){return function(){var t=!1;return e(function(){t=!0}),function(n){t?n():e(n)}}}],s=["$q","$$rAFMutex",function(e,o){function r(e){this.setHost(e),this._doneCallbacks=[],this._runInAnimationFrame=o(),this._state=0}var i=0,a=1,d=2;return r.prototype={setHost:function(e){this.host=e||{}},done:function(e){this._state===d?e():this._doneCallbacks.push(e)},progress:t.noop,getPromise:function(){if(!this.promise){var t=this;this.promise=e(function(e,n){t.done(function(t){t===!1?n():e()})})}return this.promise},then:function(e,t){return this.getPromise().then(e,t)},"catch":function(e){return this.getPromise()["catch"](e)},"finally":function(e){return this.getPromise()["finally"](e)},pause:function(){this.host.pause&&this.host.pause()},resume:function(){this.host.resume&&this.host.resume()},end:function(){this.host.end&&this.host.end(),this._resolve(!0)},cancel:function(){this.host.cancel&&this.host.cancel(),this._resolve(!1)},complete:function(e){var t=this;t._state===i&&(t._state=a,t._runInAnimationFrame(function(){t._resolve(e)}))},_resolve:function(e){this._state!==d&&(n(this._doneCallbacks,function(t){t(e)}),this._doneCallbacks.length=0,this._state=d)}},r}];t.module("material.core.animate",[]).factory("$$forceReflow",d).factory("$$AnimateRunner",s).factory("$$rAFMutex",c).factory("$animateCss",["$window","$$rAF","$$AnimateRunner","$$forceReflow","$$jqLite","$timeout",function(t,d,c,s,l,m){function u(o,d){var s=[],l=M(o);d.transitionStyle&&s.push([r+"transition",d.transitionStyle]),d.keyframeStyle&&s.push([r+"animation",d.keyframeStyle]),d.delay&&s.push([r+"transition-delay",d.delay+"s"]),d.duration&&s.push([r+"transition-duration",d.duration+"s"]);var u=d.keyframeStyle||d.to&&(d.duration>0||d.transitionStyle),f=!!d.addClass||!!d.removeClass,y=u||f;$(o,!0),E(o,d);var C,A,T=!1;return{close:t.close,start:function(){function t(){return T?void 0:(T=!0,C&&A&&o.off(C,A),p(o,d),b(o,d),n(s,function(t){l.style[e(t[0])]=""}),u.complete(!0),u)}var u=new c;return g(function(){if($(o,!1),!y)return t();n(s,function(t){var n=t[0],o=t[1];l.style[e(n)]=o}),p(o,d);var c=h(o);if(0===c.duration)return t();var u=[];d.easing&&(c.transitionDuration&&u.push([r+"transition-timing-function",d.easing]),c.animationDuration&&u.push([r+"animation-timing-function",d.easing])),d.delay&&c.animationDelay&&u.push([r+"animation-delay",d.delay+"s"]),d.duration&&c.animationDuration&&u.push([r+"animation-duration",d.duration+"s"]),n(u,function(t){var n=t[0],o=t[1];l.style[e(n)]=o,s.push(t)});var f=c.delay,g=1e3*f,b=c.duration,E=1e3*b,M=Date.now();C=[],c.transitionDuration&&C.push(i),c.animationDuration&&C.push(a),C=C.join(" "),A=function(e){e.stopPropagation();var n=e.originalEvent||e,o=n.timeStamp||Date.now(),r=parseFloat(n.elapsedTime.toFixed(3));Math.max(o-M,0)>=g&&r>=b&&t()},o.on(C,A),v(o,d),m(t,g+1.5*E,!1)}),u}}}function p(e,t){t.addClass&&(l.addClass(e,t.addClass),t.addClass=null),t.removeClass&&(l.removeClass(e,t.removeClass),t.removeClass=null)}function h(e){function n(e){return o?"Webkit"+e.charAt(0).toUpperCase()+e.substr(1):e}var r=M(e),i=t.getComputedStyle(r),a=f(i[n("transitionDuration")]),d=f(i[n("animationDuration")]),c=f(i[n("transitionDelay")]),s=f(i[n("animationDelay")]);d*=parseInt(i[n("animationIterationCount")],10)||1;var l=Math.max(d,a),m=Math.max(s,c);return{duration:l,delay:m,animationDuration:d,transitionDuration:a,animationDelay:s,transitionDelay:c}}function f(e){var t=0,o=(e||"").split(/\s*,\s*/);return n(o,function(e){"s"==e.charAt(e.length-1)&&(e=e.substring(0,e.length-1)),e=parseFloat(e)||0,t=t?Math.max(e,t):e}),t}function g(e){y&&y(),C.push(e),y=d(function(){y=null;for(var e=s(),t=0;t<C.length;t++)C[t](e);C.length=0})}function b(e,t){E(e,t),v(e,t)}function E(e,t){t.from&&(e.css(t.from),t.from=null)}function v(e,t){t.to&&(e.css(t.to),t.to=null)}function M(e){for(var t=0;t<e.length;t++)if(1===e[t].nodeType)return e[t]}function $(t,n){var o=M(t),i=e(r+"transition-delay");o.style[i]=n?"-9999s":""}var y,C=[];return u}])}()}(),function(){t.module("material.components.autocomplete",["material.core","material.components.icon","material.components.virtualRepeat"])}(),function(){t.module("material.components.backdrop",["material.core"]).directive("mdBackdrop",["$mdTheming","$animate","$rootElement","$window","$log","$$rAF","$document",function(e,t,n,o,r,i,a){function d(d,s,l){var m=o.getComputedStyle(a[0].body);if("fixed"==m.position){var u=parseInt(m.height,10)+Math.abs(parseInt(m.top,10));s.css({height:u+"px"})}t.pin&&t.pin(s,n),i(function(){var t=s.parent()[0];if(t){"BODY"==t.nodeName&&s.css({position:"fixed"});var n=o.getComputedStyle(t);"static"==n.position&&r.warn(c)}e.inherit(s,s.parent())})}var c="<md-backdrop> may not work properly in a scrolled, static-positioned parent container.";return{restrict:"E",link:d}}])}(),function(){function e(e){return{restrict:"E",link:function(t,n,o){t.$on("$destroy",function(){e.destroy()})}}}function n(e){function n(e,n,i,a,d,c,s){function l(o,r,s,l){r=i.extractElementByName(r,"md-bottom-sheet"),p=i.createBackdrop(o,"md-bottom-sheet-backdrop md-opaque"),s.clickOutsideToClose&&p.on("click",function(){i.nextTick(d.cancel,!0)}),a.inherit(p,s.parent),e.enter(p,s.parent,null);var m=new u(r,s.parent);return s.bottomSheet=m,a.inherit(m.element,s.parent),s.disableParentScroll&&(s.restoreScroll=i.disableScrollAround(m.element,s.parent)),e.enter(m.element,s.parent).then(function(){var e=i.findFocusTarget(r)||t.element(r[0].querySelector("button")||r[0].querySelector("a")||r[0].querySelector("[ng-click]"));e.focus(),s.escapeToClose&&(s.rootElementKeyupCallback=function(e){e.keyCode===n.KEY_CODE.ESCAPE&&i.nextTick(d.cancel,!0)},c.on("keyup",s.rootElementKeyupCallback))})}function m(t,n,o){var r=o.bottomSheet;return e.leave(p),e.leave(r.element).then(function(){o.disableParentScroll&&(o.restoreScroll(),delete o.restoreScroll),r.cleanup()})}function u(e,t){function a(t){e.css(n.CSS.TRANSITION_DURATION,"0ms")}function c(t){var o=t.pointer.distanceY;5>o&&(o=Math.max(-r,o/2)),e.css(n.CSS.TRANSFORM,"translate3d(0,"+(r+o)+"px,0)")}function l(t){if(t.pointer.distanceY>0&&(t.pointer.distanceY>20||Math.abs(t.pointer.velocityY)>o)){var r=e.prop("offsetHeight")-t.pointer.distanceY,a=Math.min(r/t.pointer.velocityY*.75,500);e.css(n.CSS.TRANSITION_DURATION,a+"ms"),i.nextTick(d.cancel,!0)}else e.css(n.CSS.TRANSITION_DURATION,""),e.css(n.CSS.TRANSFORM,"")}var m=s.register(t,"drag",{horizontal:!1});return t.on("$md.dragstart",a).on("$md.drag",c).on("$md.dragend",l),{element:e,cleanup:function(){m(),t.off("$md.dragstart",a),t.off("$md.drag",c),t.off("$md.dragend",l)}}}var p;return{themable:!0,onShow:l,onRemove:m,escapeToClose:!0,clickOutsideToClose:!0,disableParentScroll:!0}}var o=.5,r=80;return n.$inject=["$animate","$mdConstant","$mdUtil","$mdTheming","$mdBottomSheet","$rootElement","$mdGesture"],e("$mdBottomSheet").setDefaults({methods:["disableParentScroll","escapeToClose","clickOutsideToClose"],options:n})}t.module("material.components.bottomSheet",["material.core","material.components.backdrop"]).directive("mdBottomSheet",e).provider("$mdBottomSheet",n),e.$inject=["$mdBottomSheet"],n.$inject=["$$interimElementProvider"]}(),function(){function e(e,n,o,r){function i(e){return t.isDefined(e.href)||t.isDefined(e.ngHref)||t.isDefined(e.ngLink)||t.isDefined(e.uiSref)}function a(e,t){if(i(t))return'<a class="md-button" ng-transclude></a>';var n="undefined"==typeof t.type?"button":t.type;return'<button class="md-button" type="'+n+'" ng-transclude></button>'}function d(a,d,c){n(d),e.attach(a,d),o.expectWithText(d,"aria-label"),i(c)&&t.isDefined(c.ngDisabled)&&a.$watch(c.ngDisabled,function(e){d.attr("tabindex",e?-1:0)}),d.on("click",function(e){c.disabled===!0&&(e.preventDefault(),e.stopImmediatePropagation())}),a.mouseActive=!1,d.on("mousedown",function(){a.mouseActive=!0,r(function(){a.mouseActive=!1},100)}).on("focus",function(){a.mouseActive===!1&&d.addClass("md-focused")}).on("blur",function(e){d.removeClass("md-focused")})}return{restrict:"EA",replace:!0,transclude:!0,template:a,link:d}}t.module("material.components.button",["material.core"]).directive("mdButton",e),e.$inject=["$mdButtonInkRipple","$mdTheming","$mdAria","$timeout"]}(),function(){function e(e){return{restrict:"E",link:function(t,n){e(n)}}}t.module("material.components.card",["material.core"]).directive("mdCard",e),e.$inject=["$mdTheming"]}(),function(){function e(e,n,o,r,i,a){function d(d,s){return s.type="checkbox",s.tabindex=s.tabindex||"0",d.attr("role",s.type),d.on("click",function(e){this.hasAttribute("disabled")&&e.stopImmediatePropagation()}),function(d,s,l,m){function u(e,t,n){l[e]&&d.$watch(l[e],function(e){n[e]&&s.attr(t,n[e])})}function p(e){var t=e.which||e.keyCode;(t===o.KEY_CODE.SPACE||t===o.KEY_CODE.ENTER)&&(e.preventDefault(),s.hasClass("md-focused")||s.addClass("md-focused"),h(e))}function h(e){s[0].hasAttribute("disabled")||d.$apply(function(){
var t=l.ngChecked?l.checked:!m.$viewValue;m.$setViewValue(t,e&&e.type),m.$render()})}function f(){m.$viewValue?s.addClass(c):s.removeClass(c)}m=m||i.fakeNgModel(),r(s),l.ngChecked&&d.$watch(d.$eval.bind(d,l.ngChecked),m.$setViewValue.bind(m)),u("ngDisabled","tabindex",{"true":"-1","false":l.tabindex}),n.expectWithText(s,"aria-label"),e.link.pre(d,{on:t.noop,0:{}},l,[m]),d.mouseActive=!1,s.on("click",h).on("keypress",p).on("mousedown",function(){d.mouseActive=!0,a(function(){d.mouseActive=!1},100)}).on("focus",function(){d.mouseActive===!1&&s.addClass("md-focused")}).on("blur",function(){s.removeClass("md-focused")}),m.$render=f}}e=e[0];var c="md-checked";return{restrict:"E",transclude:!0,require:"?ngModel",priority:210,template:'<div class="md-container" md-ink-ripple md-ink-ripple-checkbox><div class="md-icon"></div></div><div ng-transclude class="md-label"></div>',compile:d}}t.module("material.components.checkbox",["material.core"]).directive("mdCheckbox",e),e.$inject=["inputDirective","$mdAria","$mdConstant","$mdTheming","$mdUtil","$timeout"]}(),function(){t.module("material.components.chips",["material.core","material.components.autocomplete"])}(),function(){function e(e){function t(e,t){this.$scope=e,this.$element=t}return{restrict:"E",controller:["$scope","$element",t],link:function(t,o,r){o[0];e(o),t.$broadcast("$mdContentLoaded",o),n(o[0])}}}function n(e){t.element(e).on("$md.pressdown",function(t){"t"===t.pointer.type&&(t.$materialScrollFixed||(t.$materialScrollFixed=!0,0===e.scrollTop?e.scrollTop=1:e.scrollHeight===e.scrollTop+e.offsetHeight&&(e.scrollTop-=1)))})}t.module("material.components.content",["material.core"]).directive("mdContent",e),e.$inject=["$mdTheming"]}(),function(){!function(){function e(){return{template:'<table aria-hidden="true" class="md-calendar-day-header"><thead></thead></table><div class="md-calendar-scroll-mask"><md-virtual-repeat-container class="md-calendar-scroll-container" md-offset-size="'+(r-o)+'"><table role="grid" tabindex="0" class="md-calendar" aria-readonly="true"><tbody role="rowgroup" md-virtual-repeat="i in ctrl.items" md-calendar-month md-month-offset="$index" class="md-calendar-month" md-start-index="ctrl.getSelectedMonthIndex()" md-item-size="'+o+'"></tbody></table></md-virtual-repeat-container></div>',scope:{minDate:"=mdMinDate",maxDate:"=mdMaxDate",dateFilter:"=mdDateFilter"},require:["ngModel","mdCalendar"],controller:n,controllerAs:"ctrl",bindToController:!0,link:function(e,t,n,o){var r=o[0],i=o[1];i.configureNgModel(r)}}}function n(e,t,n,o,r,i,a,c,s,l,m){if(a(e),this.items={length:2e3},this.maxDate&&this.minDate){var u=c.getMonthDistance(this.minDate,this.maxDate)+1;u=Math.max(u,1),u+=1,this.items.length=u}if(this.$animate=o,this.$q=r,this.$mdInkRipple=l,this.$mdUtil=m,this.keyCode=i.KEY_CODE,this.dateUtil=c,this.dateLocale=s,this.$element=e,this.$scope=n,this.calendarElement=e[0].querySelector(".md-calendar"),this.calendarScroller=e[0].querySelector(".md-virtual-repeat-scroller"),this.today=this.dateUtil.createDateAtMidnight(),this.firstRenderableDate=this.dateUtil.incrementMonths(this.today,-this.items.length/2),this.minDate&&this.minDate>this.firstRenderableDate)this.firstRenderableDate=this.minDate;else if(this.maxDate){this.items.length-2;this.firstRenderableDate=this.dateUtil.incrementMonths(this.maxDate,-(this.items.length-2))}this.id=d++,this.ngModelCtrl=null,this.selectedDate=null,this.displayDate=null,this.focusDate=null,this.isInitialized=!1,this.isMonthTransitionInProgress=!1,t.tabindex||e.attr("tabindex","-1");var p=this;this.cellClickHandler=function(){var e=this;this.hasAttribute("data-timestamp")&&n.$apply(function(){var t=Number(e.getAttribute("data-timestamp"));p.setNgModelValue(p.dateUtil.createDateAtMidnight(t))})},this.attachCalendarEventListeners()}t.module("material.components.datepicker",["material.core","material.components.icon","material.components.virtualRepeat"]).directive("mdCalendar",e);var o=265,r=45,i="md-calendar-selected-date",a="md-focus",d=0;n.$inject=["$element","$attrs","$scope","$animate","$q","$mdConstant","$mdTheming","$$mdDateUtil","$mdDateLocale","$mdInkRipple","$mdUtil"],n.prototype.configureNgModel=function(e){this.ngModelCtrl=e;var t=this;e.$render=function(){t.changeSelectedDate(t.ngModelCtrl.$viewValue)}},n.prototype.buildInitialCalendarDisplay=function(){this.buildWeekHeader(),this.hideVerticalScrollbar(),this.displayDate=this.selectedDate||this.today,this.isInitialized=!0},n.prototype.hideVerticalScrollbar=function(){var e=this.$element[0],t=e.querySelector(".md-calendar-scroll-mask"),n=this.calendarScroller,o=e.querySelector(".md-calendar-day-header").clientWidth,r=n.offsetWidth-n.clientWidth;t.style.width=o+"px",n.style.width=o+r+"px",n.style.paddingRight=r+"px"},n.prototype.attachCalendarEventListeners=function(){this.$element.on("keydown",t.bind(this,this.handleKeyEvent))},n.prototype.handleKeyEvent=function(e){var t=this;this.$scope.$apply(function(){if(e.which==t.keyCode.ESCAPE||e.which==t.keyCode.TAB)return t.$scope.$emit("md-calendar-close"),void(e.which==t.keyCode.TAB&&e.preventDefault());if(e.which===t.keyCode.ENTER)return t.setNgModelValue(t.displayDate),void e.preventDefault();var n=t.getFocusDateFromKeyEvent(e);n&&(n=t.boundDateByMinAndMax(n),e.preventDefault(),e.stopPropagation(),t.changeDisplayDate(n).then(function(){t.focus(n)}))})},n.prototype.getFocusDateFromKeyEvent=function(e){var t=this.dateUtil,n=this.keyCode;switch(e.which){case n.RIGHT_ARROW:return t.incrementDays(this.displayDate,1);case n.LEFT_ARROW:return t.incrementDays(this.displayDate,-1);case n.DOWN_ARROW:return e.metaKey?t.incrementMonths(this.displayDate,1):t.incrementDays(this.displayDate,7);case n.UP_ARROW:return e.metaKey?t.incrementMonths(this.displayDate,-1):t.incrementDays(this.displayDate,-7);case n.PAGE_DOWN:return t.incrementMonths(this.displayDate,1);case n.PAGE_UP:return t.incrementMonths(this.displayDate,-1);case n.HOME:return t.getFirstDateOfMonth(this.displayDate);case n.END:return t.getLastDateOfMonth(this.displayDate);default:return null}},n.prototype.getSelectedMonthIndex=function(){return this.dateUtil.getMonthDistance(this.firstRenderableDate,this.selectedDate||this.today)},n.prototype.scrollToMonth=function(e){if(this.dateUtil.isValidDate(e)){var t=this.dateUtil.getMonthDistance(this.firstRenderableDate,e);this.calendarScroller.scrollTop=t*o}},n.prototype.setNgModelValue=function(e){this.$scope.$emit("md-calendar-change",e),this.ngModelCtrl.$setViewValue(e),this.ngModelCtrl.$render()},n.prototype.focus=function(e){var t=e||this.selectedDate||this.today,n=this.calendarElement.querySelector(".md-focus");n&&n.classList.remove(a);var o=this.getDateId(t),r=document.getElementById(o);r?(r.classList.add(a),r.focus()):this.focusDate=t},n.prototype.boundDateByMinAndMax=function(e){var t=e;return this.minDate&&e<this.minDate&&(t=new Date(this.minDate.getTime())),this.maxDate&&e>this.maxDate&&(t=new Date(this.maxDate.getTime())),t},n.prototype.changeSelectedDate=function(e){var t=this,n=this.selectedDate;this.selectedDate=e,this.changeDisplayDate(e).then(function(){if(n){var o=document.getElementById(t.getDateId(n));o&&(o.classList.remove(i),o.setAttribute("aria-selected","false"))}if(e){var r=document.getElementById(t.getDateId(e));r&&(r.classList.add(i),r.setAttribute("aria-selected","true"))}})},n.prototype.changeDisplayDate=function(e){if(!this.isInitialized)return this.buildInitialCalendarDisplay(),this.$q.when();if(!this.dateUtil.isValidDate(e)||this.isMonthTransitionInProgress)return this.$q.when();this.isMonthTransitionInProgress=!0;var t=this.animateDateChange(e);this.displayDate=e;var n=this;return t.then(function(){n.isMonthTransitionInProgress=!1}),t},n.prototype.animateDateChange=function(e){return this.scrollToMonth(e),this.$q.when()},n.prototype.buildWeekHeader=function(){for(var e=this.dateLocale.firstDayOfWeek,t=this.dateLocale.shortDays,n=document.createElement("tr"),o=0;7>o;o++){var r=document.createElement("th");r.textContent=t[(o+e)%7],n.appendChild(r)}this.$element.find("thead").append(n)},n.prototype.getDateId=function(e){return["md",this.id,e.getFullYear(),e.getMonth(),e.getDate()].join("-")}}()}(),function(){!function(){function e(){return{require:["^^mdCalendar","mdCalendarMonth"],scope:{offset:"=mdMonthOffset"},controller:n,controllerAs:"mdMonthCtrl",bindToController:!0,link:function(e,t,n,o){var r=o[0],i=o[1];i.calendarCtrl=r,i.generateContent(),e.$watch(function(){return i.offset},function(e,t){e!=t&&i.generateContent()})}}}function n(e,t,n){this.dateUtil=t,this.dateLocale=n,this.$element=e,this.calendarCtrl=null,this.offset,this.focusAfterAppend=null}t.module("material.components.datepicker").directive("mdCalendarMonth",e);var o="md-calendar-date-today",r="md-calendar-selected-date",i="md-focus";n.$inject=["$element","$$mdDateUtil","$mdDateLocale"],n.prototype.generateContent=function(){var e=this.calendarCtrl,t=this.dateUtil.incrementMonths(e.firstRenderableDate,this.offset);this.$element.empty(),this.$element.append(this.buildCalendarForMonth(t)),this.focusAfterAppend&&(this.focusAfterAppend.classList.add(i),this.focusAfterAppend.focus(),this.focusAfterAppend=null)},n.prototype.buildDateCell=function(e){var t=this.calendarCtrl,n=document.createElement("td");if(n.tabIndex=-1,n.classList.add("md-calendar-date"),n.setAttribute("role","gridcell"),e){n.setAttribute("tabindex","-1"),n.setAttribute("aria-label",this.dateLocale.longDateFormatter(e)),n.id=t.getDateId(e),n.setAttribute("data-timestamp",e.getTime()),this.dateUtil.isSameDay(e,t.today)&&n.classList.add(o),this.dateUtil.isValidDate(t.selectedDate)&&this.dateUtil.isSameDay(e,t.selectedDate)&&(n.classList.add(r),n.setAttribute("aria-selected","true"));var i=this.dateLocale.dates[e.getDate()];if(this.isDateEnabled(e)){var a=document.createElement("span");n.appendChild(a),a.classList.add("md-calendar-date-selection-indicator"),a.textContent=i,n.addEventListener("click",t.cellClickHandler),t.focusDate&&this.dateUtil.isSameDay(e,t.focusDate)&&(this.focusAfterAppend=n)}else n.classList.add("md-calendar-date-disabled"),n.textContent=i}return n},n.prototype.isDateEnabled=function(e){return this.dateUtil.isDateWithinRange(e,this.calendarCtrl.minDate,this.calendarCtrl.maxDate)&&(!t.isFunction(this.calendarCtrl.dateFilter)||this.calendarCtrl.dateFilter(e))},n.prototype.buildDateRow=function(e){var t=document.createElement("tr");return t.setAttribute("role","row"),t.setAttribute("aria-label",this.dateLocale.weekNumberFormatter(e)),t},n.prototype.buildCalendarForMonth=function(e){var t=this.dateUtil.isValidDate(e)?e:new Date,n=this.dateUtil.getFirstDateOfMonth(t),o=this.getLocaleDay_(n),r=this.dateUtil.getNumberOfDaysInMonth(t),i=document.createDocumentFragment(),a=1,d=this.buildDateRow(a);i.appendChild(d);var c=this.offset===this.calendarCtrl.items.length-1,s=0,l=document.createElement("td");if(l.classList.add("md-calendar-month-label"),this.calendarCtrl.maxDate&&n>this.calendarCtrl.maxDate&&l.classList.add("md-calendar-month-label-disabled"),l.textContent=this.dateLocale.monthHeaderFormatter(t),2>=o){l.setAttribute("colspan","7");var m=this.buildDateRow();if(m.appendChild(l),i.insertBefore(m,d),c)return i}else s=2,l.setAttribute("colspan","2"),d.appendChild(l);for(var u=s;o>u;u++)d.appendChild(this.buildDateCell());for(var p=o,h=n,f=1;r>=f;f++){if(7===p){if(c)return i;p=0,a++,d=this.buildDateRow(a),i.appendChild(d)}h.setDate(f);var g=this.buildDateCell(h);d.appendChild(g),p++}for(;d.childNodes.length<7;)d.appendChild(this.buildDateCell());for(;i.childNodes.length<6;){for(var b=this.buildDateRow(),u=0;7>u;u++)b.appendChild(this.buildDateCell());i.appendChild(b)}return i},n.prototype.getLocaleDay_=function(e){return(e.getDay()+(7-this.dateLocale.firstDayOfWeek))%7}}()}(),function(){!function(){t.module("material.components.datepicker").config(["$provide",function(e){function t(){this.months=null,this.shortMonths=null,this.days=null,this.shortDays=null,this.dates=null,this.firstDayOfWeek=0,this.formatDate=null,this.parseDate=null,this.monthHeaderFormatter=null,this.weekNumberFormatter=null,this.longDateFormatter=null,this.msgCalendar="",this.msgOpenCalendar=""}t.prototype.$get=function(e){function t(e){if(!e)return"";var t=e.toLocaleTimeString(),n=e;return 0!=e.getHours()||-1===t.indexOf("11:")&&-1===t.indexOf("23:")||(n=new Date(e.getFullYear(),e.getMonth(),e.getDate(),1,0,0)),n.toLocaleDateString()}function n(e){return new Date(e)}function o(e){e=e.trim();var t=/^(([a-zA-Z]{3,}|[0-9]{1,4})([ \.,]+|[\/\-])){2}([a-zA-Z]{3,}|[0-9]{1,4})$/;return t.test(e)}function r(e){return u.shortMonths[e.getMonth()]+" "+e.getFullYear()}function i(e){return"Week "+e}function a(e){return[u.days[e.getDay()],u.months[e.getMonth()],u.dates[e.getDate()],e.getFullYear()].join(" ")}for(var d=e.DATETIME_FORMATS.DAY.map(function(e){return e[0]}),c=Array(32),s=1;31>=s;s++)c[s]=s;var l="Calendar",m="Open calendar",u={months:this.months||e.DATETIME_FORMATS.MONTH,shortMonths:this.shortMonths||e.DATETIME_FORMATS.SHORTMONTH,days:this.days||e.DATETIME_FORMATS.DAY,shortDays:this.shortDays||d,dates:this.dates||c,firstDayOfWeek:this.firstDayOfWeek||0,formatDate:this.formatDate||t,parseDate:this.parseDate||n,isDateComplete:this.isDateComplete||o,monthHeaderFormatter:this.monthHeaderFormatter||r,weekNumberFormatter:this.weekNumberFormatter||i,longDateFormatter:this.longDateFormatter||a,msgCalendar:this.msgCalendar||l,msgOpenCalendar:this.msgOpenCalendar||m};return u},t.prototype.$get.$inject=["$locale"],e.provider("$mdDateLocale",new t)}])}()}(),function(){!function(){function n(){return{template:'<md-button class="md-datepicker-button md-icon-button" type="button" tabindex="-1" aria-hidden="true" ng-click="ctrl.openCalendarPane($event)"><md-icon class="md-datepicker-calendar-icon" md-svg-icon="md-calendar"></md-icon></md-button><div class="md-datepicker-input-container" ng-class="{\'md-datepicker-focused\': ctrl.isFocused}"><input class="md-datepicker-input" aria-haspopup="true" ng-focus="ctrl.setFocused(true)" ng-blur="ctrl.setFocused(false)"><md-button type="button" md-no-ink class="md-datepicker-triangle-button md-icon-button" ng-click="ctrl.openCalendarPane($event)" aria-label="{{::ctrl.dateLocale.msgOpenCalendar}}"><div class="md-datepicker-expand-triangle"></div></md-button></div><div class="md-datepicker-calendar-pane md-whiteframe-z1"><div class="md-datepicker-input-mask"><div class="md-datepicker-input-mask-opaque"></div></div><div class="md-datepicker-calendar"><md-calendar role="dialog" aria-label="{{::ctrl.dateLocale.msgCalendar}}" md-min-date="ctrl.minDate" md-max-date="ctrl.maxDate"md-date-filter="ctrl.dateFilter"ng-model="ctrl.date" ng-if="ctrl.isCalendarOpen"></md-calendar></div></div>',require:["ngModel","mdDatepicker","?^mdInputContainer"],scope:{minDate:"=mdMinDate",maxDate:"=mdMaxDate",placeholder:"@mdPlaceholder",dateFilter:"=mdDateFilter"},controller:o,controllerAs:"ctrl",bindToController:!0,link:function(e,t,n,o){var r=o[0],i=o[1],a=o[2];if(a)throw Error("md-datepicker should not be placed inside md-input-container.");i.configureNgModel(r)}}}function o(e,n,o,r,i,a,d,c,s,l,m,u){this.$compile=r,this.$timeout=i,this.$window=a,this.dateLocale=l,this.dateUtil=m,this.$mdConstant=d,this.$mdUtil=s,this.$$rAF=u,this.documentElement=t.element(document.documentElement),this.ngModelCtrl=null,this.inputElement=n[0].querySelector("input"),this.ngInputElement=t.element(this.inputElement),this.inputContainer=n[0].querySelector(".md-datepicker-input-container"),this.calendarPane=n[0].querySelector(".md-datepicker-calendar-pane"),this.calendarButton=n[0].querySelector(".md-datepicker-button"),this.inputMask=n[0].querySelector(".md-datepicker-input-mask-opaque"),this.$element=n,this.$attrs=o,this.$scope=e,this.date=null,this.isFocused=!1,this.isDisabled,this.setDisabled(n[0].disabled||t.isString(o.disabled)),this.isCalendarOpen=!1,this.calendarPaneOpenedFrom=null,this.calendarPane.id="md-date-pane"+s.nextUid(),c(n),this.bodyClickHandler=t.bind(this,this.handleBodyClick),this.windowResizeHandler=s.debounce(t.bind(this,this.closeCalendarPane),100),o.tabindex||n.attr("tabindex","-1"),this.installPropertyInterceptors(),this.attachChangeListeners(),this.attachInteractionListeners();var p=this;e.$on("$destroy",function(){p.detachCalendarPane()})}t.module("material.components.datepicker").directive("mdDatepicker",n);var r=3,i="md-datepicker-invalid",a=500,d=368,c=360;o.$inject=["$scope","$element","$attrs","$compile","$timeout","$window","$mdConstant","$mdTheming","$mdUtil","$mdDateLocale","$$mdDateUtil","$$rAF"],o.prototype.configureNgModel=function(e){this.ngModelCtrl=e;var t=this;e.$render=function(){var e=t.ngModelCtrl.$viewValue;if(e&&!(e instanceof Date))throw Error("The ng-model for md-datepicker must be a Date instance. Currently the model is a: "+typeof e);t.date=e,t.inputElement.value=t.dateLocale.formatDate(e),t.resizeInputElement(),t.updateErrorState()}},o.prototype.attachChangeListeners=function(){var e=this;e.$scope.$on("md-calendar-change",function(t,n){e.ngModelCtrl.$setViewValue(n),e.date=n,e.inputElement.value=e.dateLocale.formatDate(n),e.closeCalendarPane(),e.resizeInputElement(),e.updateErrorState()}),e.ngInputElement.on("input",t.bind(e,e.resizeInputElement)),e.ngInputElement.on("input",e.$mdUtil.debounce(e.handleInputEvent,a,e))},o.prototype.attachInteractionListeners=function(){var e=this,t=this.$scope,n=this.$mdConstant.KEY_CODE;e.ngInputElement.on("keydown",function(o){o.altKey&&o.keyCode==n.DOWN_ARROW&&(e.openCalendarPane(o),t.$digest())}),t.$on("md-calendar-close",function(){e.closeCalendarPane()})},o.prototype.installPropertyInterceptors=function(){var e=this;if(this.$attrs.ngDisabled){var t=this.$scope.$parent;t&&t.$watch(this.$attrs.ngDisabled,function(t){e.setDisabled(t)})}Object.defineProperty(this,"placeholder",{get:function(){return e.inputElement.placeholder},set:function(t){e.inputElement.placeholder=t||""}})},o.prototype.setDisabled=function(e){this.isDisabled=e,this.inputElement.disabled=e,this.calendarButton.disabled=e},o.prototype.updateErrorState=function(e){var n=e||this.date;if(this.clearErrorState(),this.dateUtil.isValidDate(n)){if(n=this.dateUtil.createDateAtMidnight(n),this.dateUtil.isValidDate(this.minDate)){var o=this.dateUtil.createDateAtMidnight(this.minDate);this.ngModelCtrl.$setValidity("mindate",n>=o)}if(this.dateUtil.isValidDate(this.maxDate)){var r=this.dateUtil.createDateAtMidnight(this.maxDate);this.ngModelCtrl.$setValidity("maxdate",r>=n)}t.isFunction(this.dateFilter)&&this.ngModelCtrl.$setValidity("filtered",this.dateFilter(n))}else this.ngModelCtrl.$setValidity("valid",null==n);this.ngModelCtrl.$valid||this.inputContainer.classList.add(i)},o.prototype.clearErrorState=function(){this.inputContainer.classList.remove(i),["mindate","maxdate","filtered","valid"].forEach(function(e){this.ngModelCtrl.$setValidity(e,!0)},this)},o.prototype.resizeInputElement=function(){this.inputElement.size=this.inputElement.value.length+r},o.prototype.handleInputEvent=function(){var e=this.inputElement.value,t=e?this.dateLocale.parseDate(e):null;this.dateUtil.setDateTimeToMidnight(t);var n=""==e||this.dateUtil.isValidDate(t)&&this.dateLocale.isDateComplete(e)&&this.isDateEnabled(t);n&&(this.ngModelCtrl.$setViewValue(t),this.date=t),this.updateErrorState(t)},o.prototype.isDateEnabled=function(e){return this.dateUtil.isDateWithinRange(e,this.minDate,this.maxDate)&&(!t.isFunction(this.dateFilter)||this.dateFilter(e))},o.prototype.attachCalendarPane=function(){var e=this.calendarPane;e.style.transform="",this.$element.addClass("md-datepicker-open");var t=this.inputContainer.getBoundingClientRect(),n=document.body.getBoundingClientRect(),o=t.top-n.top,r=t.left-n.left,i=n.top<0&&0==document.body.scrollTop?-n.top:document.body.scrollTop,a=n.left<0&&0==document.body.scrollLeft?-n.left:document.body.scrollLeft,s=i+this.$window.innerHeight,l=a+this.$window.innerWidth;if(r+c>l){if(l-c>0)r=l-c;else{r=a;var m=this.$window.innerWidth/c;e.style.transform="scale("+m+")"}e.classList.add("md-datepicker-pos-adjusted")}o+d>s&&s-d>i&&(o=s-d,e.classList.add("md-datepicker-pos-adjusted")),e.style.left=r+"px",e.style.top=o+"px",document.body.appendChild(e),this.inputMask.style.left=t.width+"px",this.$$rAF(function(){e.classList.add("md-pane-open")})},o.prototype.detachCalendarPane=function(){this.$element.removeClass("md-datepicker-open"),this.calendarPane.classList.remove("md-pane-open"),this.calendarPane.classList.remove("md-datepicker-pos-adjusted"),this.calendarPane.parentNode&&this.calendarPane.parentNode.removeChild(this.calendarPane)},o.prototype.openCalendarPane=function(t){if(!this.isCalendarOpen&&!this.isDisabled){this.isCalendarOpen=!0,this.calendarPaneOpenedFrom=t.target,this.$mdUtil.disableScrollAround(this.calendarPane),this.attachCalendarPane(),this.focusCalendar();var n=this;this.$mdUtil.nextTick(function(){n.documentElement.on("click touchstart",n.bodyClickHandler)},!1),e.addEventListener("resize",this.windowResizeHandler)}},o.prototype.closeCalendarPane=function(){this.isCalendarOpen&&(this.isCalendarOpen=!1,this.detachCalendarPane(),this.calendarPaneOpenedFrom.focus(),this.calendarPaneOpenedFrom=null,this.$mdUtil.enableScrolling(),this.ngModelCtrl.$setTouched(),this.documentElement.off("click touchstart",this.bodyClickHandler),e.removeEventListener("resize",this.windowResizeHandler))},o.prototype.getCalendarCtrl=function(){return t.element(this.calendarPane.querySelector("md-calendar")).controller("mdCalendar")},o.prototype.focusCalendar=function(){var e=this;this.$mdUtil.nextTick(function(){e.getCalendarCtrl().focus()},!1)},o.prototype.setFocused=function(e){e||this.ngModelCtrl.$setTouched(),this.isFocused=e},o.prototype.handleBodyClick=function(e){if(this.isCalendarOpen){var t=this.$mdUtil.getClosest(e.target,"md-calendar");t||this.closeCalendarPane(),this.$scope.$digest()}}}()}(),function(){!function(){t.module("material.components.datepicker").factory("$$mdDateUtil",function(){function e(e){return new Date(e.getFullYear(),e.getMonth(),1)}function n(e){return new Date(e.getFullYear(),e.getMonth()+1,0).getDate()}function o(e){return new Date(e.getFullYear(),e.getMonth()+1,1)}function r(e){return new Date(e.getFullYear(),e.getMonth()-1,1)}function i(e,t){return e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()}function a(e,t){return e.getDate()==t.getDate()&&i(e,t)}function d(e,t){var n=o(e);return i(n,t)}function c(e,t){var n=r(e);return i(t,n)}function s(e,t){return b((e.getTime()+t.getTime())/2)}function l(t){var n=e(t);return Math.floor((n.getDay()+t.getDate()-1)/7)}function m(e,t){return new Date(e.getFullYear(),e.getMonth(),e.getDate()+t)}function u(e,t){var o=new Date(e.getFullYear(),e.getMonth()+t,1),r=n(o);return r<e.getDate()?o.setDate(r):o.setDate(e.getDate()),o}function p(e,t){return 12*(t.getFullYear()-e.getFullYear())+(t.getMonth()-e.getMonth())}function h(e){return new Date(e.getFullYear(),e.getMonth(),n(e))}function f(e){return null!=e&&e.getTime&&!isNaN(e.getTime())}function g(e){f(e)&&e.setHours(0,0,0,0)}function b(e){var n;return n=t.isUndefined(e)?new Date:new Date(e),g(n),n}function E(e,t,n){var o=b(e),r=f(t)?b(t):null,i=f(n)?b(n):null;return(!r||o>=r)&&(!i||i>=o)}return{getFirstDateOfMonth:e,getNumberOfDaysInMonth:n,getDateInNextMonth:o,getDateInPreviousMonth:r,isInNextMonth:d,isInPreviousMonth:c,getDateMidpoint:s,isSameMonthAndYear:i,getWeekOfMonth:l,incrementDays:m,incrementMonths:u,getLastDateOfMonth:h,isSameDay:a,getMonthDistance:p,isValidDate:f,setDateTimeToMidnight:g,createDateAtMidnight:b,isDateWithinRange:E}})}()}(),function(){function e(e,n,o){return{restrict:"E",link:function(r,i,a){n(i),e(function(){function e(){i.toggleClass("md-content-overflow",a.scrollHeight>a.clientHeight)}var n,a=i[0].querySelector("md-dialog-content");a&&(n=a.getElementsByTagName("img"),e(),t.element(n).on("load",e)),r.$on("$destroy",function(){o.destroy(i)})})}}}function o(e){function o(e,t){return{template:['<md-dialog md-theme="{{ dialog.theme }}" aria-label="{{ dialog.ariaLabel }}" ng-class="dialog.css">','  <md-dialog-content class="md-dialog-content" role="document" tabIndex="-1">','    <h2 class="md-title">{{ dialog.title }}</h2>','    <div ng-if="::dialog.mdHtmlContent" class="md-dialog-content-body" ','        ng-bind-html="::dialog.mdHtmlContent"></div>','    <div ng-if="::!dialog.mdHtmlContent" class="md-dialog-content-body">',"      <p>{{::dialog.mdTextContent}}</p>","    </div>","  </md-dialog-content>","  <md-dialog-actions>",'    <md-button ng-if="dialog.$type == \'confirm\'"               ng-click="dialog.abort()" class="md-primary">',"      {{ dialog.cancel }}","    </md-button>",'    <md-button ng-click="dialog.hide()" class="md-primary" md-autofocus="dialog.$type!=\'confirm\'">',"      {{ dialog.ok }}","    </md-button>","  </md-dialog-actions>","</md-dialog>"].join("").replace(/\s\s+/g,""),controller:function(){this.hide=function(){e.hide(!0)},this.abort=function(){e.cancel()}},controllerAs:"dialog",bindToController:!0,theme:t.defaultTheme()}}function r(e,o,r,d,c,s,l,m,u,p){function h(e,t,n,o){if(o){if(o.mdHtmlContent=o.htmlContent||n.htmlContent||"",o.mdTextContent=o.textContent||n.textContent||o.content||n.content||"",o.mdHtmlContent&&!p.has("$sanitize"))throw Error("The ngSanitize module must be loaded in order to use htmlContent.");if(o.mdHtmlContent&&o.mdTextContent)throw Error("md-dialog cannot have both `htmlContent` and `textContent`")}}function f(e,n,o,i){function a(){var e=n[0].querySelectorAll(".md-actions");e.length>0&&u.warn("Using a class of md-actions is deprected, please use <md-dialog-actions>.")}function d(){function e(){var e=n[0].querySelector(".dialog-close");if(!e){var o=n[0].querySelectorAll(".md-actions button, md-dialog-actions button");e=o[o.length-1]}return t.element(e)}if(o.focusOnOpen){var i=r.findFocusTarget(n)||e();i.focus()}}return t.element(s[0].body).addClass("md-dialog-is-showing"),b(o),M(n.find("md-dialog"),o),v(e,n,o),C(n,o).then(function(){E(n,o),$(n,o),a(),d()})}function g(e,n,o){function r(){return A(n,o)}function d(){t.element(s[0].body).removeClass("md-dialog-is-showing"),n.remove(),o.$destroy||o.origin.focus()}return o.deactivateListeners(),o.unlockScreenReader(),o.hideBackdrop(o.$destroy),i&&i.parentNode&&i.parentNode.removeChild(i),a&&a.parentNode&&a.parentNode.removeChild(a),o.$destroy?d():r().then(d)}function b(e){function o(e,o){var r=t.element(e||{});if(r&&r.length){var i={top:0,left:0,height:0,width:0},a=t.isFunction(r[0].getBoundingClientRect);return t.extend(o||{},{element:a?r:n,bounds:a?r[0].getBoundingClientRect():t.extend({},i,r[0]),focus:t.bind(r,r.focus)})}}function r(e,n){if(t.isString(e)){var o=e,r=s[0].querySelectorAll(o);e=r.length?r[0]:null}return t.element(e||n)}e.origin=t.extend({element:null,bounds:null,focus:t.noop},e.origin||{}),e.parent=r(e.parent,m),e.closeTo=o(r(e.closeTo)),e.openFrom=o(r(e.openFrom)),e.targetEvent&&(e.origin=o(e.targetEvent.target,e.origin))}function E(n,o){var i=t.element(l),a=r.debounce(function(){y(n,o)},60),c=[],s=function(){var t="alert"==o.$type?e.hide:e.cancel;r.nextTick(t,!0)};if(o.escapeToClose){var m=o.parent,u=function(e){e.keyCode===d.KEY_CODE.ESCAPE&&(e.stopPropagation(),e.preventDefault(),s())};n.on("keydown",u),m.on("keydown",u),c.push(function(){n.off("keydown",u),m.off("keydown",u)})}if(i.on("resize",a),c.push(function(){i.off("resize",a)}),o.clickOutsideToClose){var p,m=n,h=function(e){p=e.target},f=function(e){p===m[0]&&e.target===m[0]&&(e.stopPropagation(),e.preventDefault(),s())};m.on("mousedown",h),m.on("mouseup",f),c.push(function(){m.off("mousedown",h),m.off("mouseup",f)})}o.deactivateListeners=function(){c.forEach(function(e){e()}),o.deactivateListeners=null}}function v(e,t,n){n.disableParentScroll&&(n.restoreScroll=r.disableScrollAround(t,n.parent)),n.hasBackdrop&&(n.backdrop=r.createBackdrop(e,"md-dialog-backdrop md-opaque"),c.enter(n.backdrop,n.parent)),n.hideBackdrop=function(e){n.backdrop&&(e?n.backdrop.remove():c.leave(n.backdrop)),n.disableParentScroll&&(n.restoreScroll(),delete n.restoreScroll),n.hideBackdrop=null}}function M(e,t){var n="alert"===t.$type?"alertdialog":"dialog",d=e.find("md-dialog-content"),c=e.attr("id")||"dialog_"+r.nextUid();e.attr({role:n,tabIndex:"-1"}),0===d.length&&(d=e),d.attr("id",c),e.attr("aria-describedby",c),t.ariaLabel?o.expect(e,"aria-label",t.ariaLabel):o.expectAsync(e,"aria-label",function(){var e=d.text().split(/\s+/);return e.length>3&&(e=e.slice(0,3).concat("...")),e.join(" ")}),i=document.createElement("div"),i.classList.add("md-dialog-focus-trap"),i.tabIndex=0,a=i.cloneNode(!1);var s=function(){e.focus()};i.addEventListener("focus",s),a.addEventListener("focus",s),e[0].parentNode.insertBefore(i,e[0]),e.append(a)}function $(e,t){function n(e){for(;e.parentNode;){if(e===document.body)return;for(var t=e.parentNode.children,r=0;r<t.length;r++)e===t[r]||T(t[r],["SCRIPT","STYLE"])||t[r].setAttribute("aria-hidden",o);n(e=e.parentNode)}}var o=!0;n(e[0]),t.unlockScreenReader=function(){o=!1,n(e[0]),t.unlockScreenReader=null}}function y(e,t){var n="fixed"==l.getComputedStyle(s[0].body).position,o=t.backdrop?l.getComputedStyle(t.backdrop[0]):null,i=o?Math.min(s[0].body.clientHeight,Math.ceil(Math.abs(parseInt(o.height,10)))):0;return e.css({top:(n?r.scrollTop(t.parent):0)+"px",height:i?i+"px":"100%"}),e}function C(e,t){t.parent.append(e),y(e,t);var n=e.find("md-dialog"),o=r.dom.animator,i=o.calculateZoomToOrigin,a={transitionInClass:"md-transition-in",transitionOutClass:"md-transition-out"},d=o.toTransformCss(i(n,t.openFrom||t.origin)),c=o.toTransformCss("");return t.fullscreen&&n.addClass("md-dialog-fullscreen"),o.translate3d(n,d,c,a).then(function(e){return t.reverseAnimate=function(){return delete t.reverseAnimate,t.closeTo?(a={transitionInClass:"md-transition-out",transitionOutClass:"md-transition-in"},d=c,c=o.toTransformCss(i(n,t.closeTo)),o.translate3d(n,d,c,a)):e(o.toTransformCss(i(n,t.origin)))},!0})}function A(e,t){return t.reverseAnimate()}function T(e,t){return-1!==t.indexOf(e.nodeName)?!0:void 0}return{hasBackdrop:!0,isolateScope:!0,onShow:f,onShowing:h,onRemove:g,clickOutsideToClose:!1,escapeToClose:!0,targetEvent:null,closeTo:null,openFrom:null,focusOnOpen:!0,disableParentScroll:!0,autoWrap:!0,fullscreen:!1,transformTemplate:function(e,t){function n(e){return t.autoWrap&&!/<\/md-dialog>/g.test(e)?"<md-dialog>"+(e||"")+"</md-dialog>":e||""}return'<div class="md-dialog-container">'+n(e)+"</div>"}}}var i,a;return o.$inject=["$mdDialog","$mdTheming"],r.$inject=["$mdDialog","$mdAria","$mdUtil","$mdConstant","$animate","$document","$window","$rootElement","$log","$injector"],e("$mdDialog").setDefaults({methods:["disableParentScroll","hasBackdrop","clickOutsideToClose","escapeToClose","targetEvent","closeTo","openFrom","parent","fullscreen"],options:r}).addPreset("alert",{methods:["title","htmlContent","textContent","content","ariaLabel","ok","theme","css"],options:o}).addPreset("confirm",{methods:["title","htmlContent","textContent","content","ariaLabel","ok","cancel","theme","css"],options:o})}t.module("material.components.dialog",["material.core","material.components.backdrop"]).directive("mdDialog",e).provider("$mdDialog",o),e.$inject=["$$rAF","$mdTheming","$mdDialog"],o.$inject=["$$interimElementProvider"]}(),function(){function e(e){return{restrict:"E",link:e}}t.module("material.components.divider",["material.core"]).directive("mdDivider",e),e.$inject=["$mdTheming"]}(),function(){!function(){function e(){return{restrict:"E",require:["^?mdFabSpeedDial","^?mdFabToolbar"],compile:function(e,n){var o=e.children(),r=!1;t.forEach(["","data-","x-"],function(e){r=r||(o.attr(e+"ng-repeat")?!0:!1)}),r?o.addClass("md-fab-action-item"):o.wrap('<div class="md-fab-action-item">')}}}t.module("material.components.fabActions",["material.core"]).directive("mdFabActions",e)}()}(),function(){!function(){function e(e,n,o,r,i,a){function d(){_.direction=_.direction||"down",_.isOpen=_.isOpen||!1,l(),n.addClass("md-animations-waiting")}function c(){
var o=["click","focusin","focusout"];t.forEach(o,function(e){n.on(e,s)}),e.$on("$destroy",function(){t.forEach(o,function(e){n.off(e,s)}),h()})}function s(e){"click"==e.type&&k(e),"focusout"!=e.type||S||(S=a(function(){_.close()},100,!1)),"focusin"==e.type&&S&&(a.cancel(S),S=null)}function l(){_.currentActionIndex=-1}function m(){e.$watch("vm.direction",function(e,t){o.removeClass(n,"md-"+t),o.addClass(n,"md-"+e),l()});var t,r;e.$watch("vm.isOpen",function(e){l(),t&&r||(t=x(),r=N()),e?p():h();var i=e?"md-is-open":"",a=e?"":"md-is-open";t.attr("aria-haspopup",!0),t.attr("aria-expanded",e),r.attr("aria-hidden",!e),o.setClass(n,i,a)})}function u(){n[0].scrollHeight>0?o.addClass(n,"md-animations-ready").then(function(){n.removeClass("md-animations-waiting")}):10>H&&(a(u,100),H+=1)}function p(){n.on("keydown",g),r.nextTick(function(){t.element(document).on("click touchend",f)})}function h(){n.off("keydown",g),t.element(document).off("click touchend",f)}function f(e){if(e.target){var t=r.getClosest(e.target,"md-fab-trigger"),n=r.getClosest(e.target,"md-fab-actions");t||n||_.close()}}function g(e){switch(e.which){case i.KEY_CODE.ESCAPE:return _.close(),e.preventDefault(),!1;case i.KEY_CODE.LEFT_ARROW:return $(e),!1;case i.KEY_CODE.UP_ARROW:return y(e),!1;case i.KEY_CODE.RIGHT_ARROW:return C(e),!1;case i.KEY_CODE.DOWN_ARROW:return A(e),!1}}function b(e){v(e,-1)}function E(e){v(e,1)}function v(e,n){var o=M();_.currentActionIndex=_.currentActionIndex+n,_.currentActionIndex=Math.min(o.length-1,_.currentActionIndex),_.currentActionIndex=Math.max(0,_.currentActionIndex);var r=t.element(o[_.currentActionIndex]).children()[0];t.element(r).attr("tabindex",0),r.focus(),e.preventDefault(),e.stopImmediatePropagation()}function M(){var e=N()[0].querySelectorAll(".md-fab-action-item");return t.forEach(e,function(e){t.element(t.element(e).children()[0]).attr("tabindex",-1)}),e}function $(e){"left"===_.direction?E(e):b(e)}function y(e){"down"===_.direction?b(e):E(e)}function C(e){"left"===_.direction?b(e):E(e)}function A(e){"up"===_.direction?b(e):E(e)}function T(e){return r.getClosest(e,"md-fab-trigger")}function w(e){return r.getClosest(e,"md-fab-actions")}function k(e){T(e.target)&&_.toggle(),w(e.target)&&_.close()}function x(){return n.find("md-fab-trigger")}function N(){return n.find("md-fab-actions")}var _=this;_.open=function(){e.$evalAsync("vm.isOpen = true")},_.close=function(){e.$evalAsync("vm.isOpen = false"),n.find("md-fab-trigger")[0].focus()},_.toggle=function(){e.$evalAsync("vm.isOpen = !vm.isOpen")},d(),c(),m();var H=0;u();var S}t.module("material.components.fabShared",["material.core"]).controller("FabController",e),e.$inject=["$scope","$element","$animate","$mdUtil","$mdConstant","$timeout"]}()}(),function(){!function(){function n(){function e(e,t){t.prepend('<div class="md-css-variables"></div>')}return{restrict:"E",scope:{direction:"@?mdDirection",isOpen:"=?mdOpen"},bindToController:!0,controller:"FabController",controllerAs:"vm",link:e}}function o(n){function o(e){n(e,i,!1)}function r(n){if(!n.hasClass("md-animations-waiting")||n.hasClass("md-animations-ready")){var o=n[0],r=n.controller("mdFabSpeedDial"),i=o.querySelectorAll(".md-fab-action-item"),a=o.querySelector("md-fab-trigger"),d=o.querySelector(".md-css-variables"),c=parseInt(e.getComputedStyle(d).zIndex);t.forEach(i,function(e,t){var n=e.style;n.transform=n.webkitTransform="",n.transitionDelay="",n.opacity=1,n.zIndex=i.length-t+c}),a.style.zIndex=c+i.length+1,r.isOpen||t.forEach(i,function(e,t){var n,o,i=e.style,d=(a.clientHeight-e.clientHeight)/2,c=(a.clientWidth-e.clientWidth)/2;switch(r.direction){case"up":n=e.scrollHeight*(t+1)+d,o="Y";break;case"down":n=-(e.scrollHeight*(t+1)+d),o="Y";break;case"left":n=e.scrollWidth*(t+1)+c,o="X";break;case"right":n=-(e.scrollWidth*(t+1)+c),o="X"}var s="translate"+o+"("+n+"px)";i.transform=i.webkitTransform=s})}}return{addClass:function(e,t,n){e.hasClass("md-fling")?(r(e),o(n)):n()},removeClass:function(e,t,n){r(e),o(n)}}}function r(n){function o(e){n(e,i,!1)}function r(n){var o=n[0],r=n.controller("mdFabSpeedDial"),i=o.querySelectorAll(".md-fab-action-item"),d=o.querySelector(".md-css-variables"),c=parseInt(e.getComputedStyle(d).zIndex);t.forEach(i,function(e,t){var n=e.style,o=t*a;n.opacity=r.isOpen?1:0,n.transform=n.webkitTransform=r.isOpen?"scale(1)":"scale(0)",n.transitionDelay=(r.isOpen?o:i.length-o)+"ms",n.zIndex=i.length-t+c})}var a=65;return{addClass:function(e,t,n){r(e),o(n)},removeClass:function(e,t,n){r(e),o(n)}}}var i=300;t.module("material.components.fabSpeedDial",["material.core","material.components.fabShared","material.components.fabTrigger","material.components.fabActions"]).directive("mdFabSpeedDial",n).animation(".md-fling",o).animation(".md-scale",r).service("mdFabSpeedDialFlingAnimation",o).service("mdFabSpeedDialScaleAnimation",r),o.$inject=["$timeout"],r.$inject=["$timeout"]}()}(),function(){!function(){function n(){function e(e,t,n){t.addClass("md-fab-toolbar"),t.find("md-fab-trigger").find("button").prepend('<div class="md-fab-toolbar-background"></div>')}return{restrict:"E",transclude:!0,template:'<div class="md-fab-toolbar-wrapper">  <div class="md-fab-toolbar-content" ng-transclude></div></div>',scope:{direction:"@?mdDirection",isOpen:"=?mdOpen"},bindToController:!0,controller:"FabController",controllerAs:"vm",link:e}}function o(){function n(n,o,r){if(o){var i=n[0],a=n.controller("mdFabToolbar"),d=i.querySelector(".md-fab-toolbar-background"),c=i.querySelector("md-fab-trigger button"),s=i.querySelector("md-toolbar"),l=i.querySelector("md-fab-trigger button md-icon"),m=n.find("md-fab-actions").children();if(c&&d){var u=e.getComputedStyle(c).getPropertyValue("background-color"),p=i.offsetWidth,h=(i.offsetHeight,2*(p/c.offsetWidth));d.style.backgroundColor=u,d.style.borderRadius=p+"px",a.isOpen?(s.style.pointerEvents="initial",d.style.width=c.offsetWidth+"px",d.style.height=c.offsetHeight+"px",d.style.transform="scale("+h+")",d.style.transitionDelay="0ms",l&&(l.style.transitionDelay=".3s"),t.forEach(m,function(e,t){e.style.transitionDelay=25*(m.length-t)+"ms"})):(s.style.pointerEvents="none",d.style.transform="scale(1)",d.style.top="0",n.hasClass("md-right")&&(d.style.left="0",d.style.right=null),n.hasClass("md-left")&&(d.style.right="0",d.style.left=null),d.style.transitionDelay="200ms",l&&(l.style.transitionDelay="0ms"),t.forEach(m,function(e,t){e.style.transitionDelay=200+25*t+"ms"}))}}}return{addClass:function(e,t,o){n(e,t,o),o()},removeClass:function(e,t,o){n(e,t,o),o()}}}t.module("material.components.fabToolbar",["material.core","material.components.fabShared","material.components.fabTrigger","material.components.fabActions"]).directive("mdFabToolbar",n).animation(".md-fab-toolbar",o).service("mdFabToolbarAnimation",o)}()}(),function(){!function(){function e(){return{restrict:"E",require:["^?mdFabSpeedDial","^?mdFabToolbar"]}}t.module("material.components.fabTrigger",["material.core"]).directive("mdFabTrigger",e)}()}(),function(){function e(e,o,r,i){function a(n,a,d,c){function s(){for(var e in o.MEDIA)i(e),i.getQuery(o.MEDIA[e]).addListener(C);return i.watchResponsiveAttributes(["md-cols","md-row-height","md-gutter"],d,m)}function l(){c.layoutDelegate=t.noop,A();for(var e in o.MEDIA)i.getQuery(o.MEDIA[e]).removeListener(C)}function m(e){null==e?c.invalidateLayout():i(e)&&c.invalidateLayout()}function u(e){var o=g(),i={tileSpans:b(o),colCount:E(),rowMode:$(),rowHeight:M(),gutter:v()};if(e||!t.equals(i,T)){var d=r(i.colCount,i.tileSpans,o).map(function(e,n){return{grid:{element:a,style:f(i.colCount,n,i.gutter,i.rowMode,i.rowHeight)},tiles:e.map(function(e,r){return{element:t.element(o[r]),style:h(e.position,e.spans,i.colCount,n,i.gutter,i.rowMode,i.rowHeight)}})}}).reflow().performance();n.mdOnLayout({$event:{performance:d}}),T=i}}function p(e){return w+e+k}function h(e,t,n,o,r,i,a){var d=1/n*100,c=(n-1)/n,s=x({share:d,gutterShare:c,gutter:r}),l={left:N({unit:s,offset:e.col,gutter:r}),width:_({unit:s,span:t.col,gutter:r}),paddingTop:"",marginTop:"",top:"",height:""};switch(i){case"fixed":l.top=N({unit:a,offset:e.row,gutter:r}),l.height=_({unit:a,span:t.row,gutter:r});break;case"ratio":var m=d/a,u=x({share:m,gutterShare:c,gutter:r});l.paddingTop=_({unit:u,span:t.row,gutter:r}),l.marginTop=N({unit:u,offset:e.row,gutter:r});break;case"fit":var p=(o-1)/o,m=1/o*100,u=x({share:m,gutterShare:p,gutter:r});l.top=N({unit:u,offset:e.row,gutter:r}),l.height=_({unit:u,span:t.row,gutter:r})}return l}function f(e,t,n,o,r){var i={};switch(o){case"fixed":i.height=_({unit:r,span:t,gutter:n}),i.paddingBottom="";break;case"ratio":var a=1===e?0:(e-1)/e,d=1/e*100,c=d*(1/r),s=x({share:c,gutterShare:a,gutter:n});i.height="",i.paddingBottom=_({unit:s,span:t,gutter:n});break;case"fit":}return i}function g(){return[].filter.call(a.children(),function(e){return"MD-GRID-TILE"==e.tagName&&!e.$$mdDestroyed})}function b(e){return[].map.call(e,function(e){var n=t.element(e).controller("mdGridTile");return{row:parseInt(i.getResponsiveAttribute(n.$attrs,"md-rowspan"),10)||1,col:parseInt(i.getResponsiveAttribute(n.$attrs,"md-colspan"),10)||1}})}function E(){var e=parseInt(i.getResponsiveAttribute(d,"md-cols"),10);if(isNaN(e))throw"md-grid-list: md-cols attribute was not found, or contained a non-numeric value";return e}function v(){return y(i.getResponsiveAttribute(d,"md-gutter")||1)}function M(){var e=i.getResponsiveAttribute(d,"md-row-height");switch($()){case"fixed":return y(e);case"ratio":var t=e.split(":");return parseFloat(t[0])/parseFloat(t[1]);case"fit":return 0}}function $(){var e=i.getResponsiveAttribute(d,"md-row-height");return"fit"==e?"fit":-1!==e.indexOf(":")?"ratio":"fixed"}function y(e){return/\D$/.test(e)?e:e+"px"}a.attr("role","list"),c.layoutDelegate=u;var C=t.bind(c,c.invalidateLayout),A=s();n.$on("$destroy",l);var T,w=e.startSymbol(),k=e.endSymbol(),x=e(p("share")+"% - ("+p("gutter")+" * "+p("gutterShare")+")"),N=e("calc(("+p("unit")+" + "+p("gutter")+") * "+p("offset")+")"),_=e("calc(("+p("unit")+") * "+p("span")+" + ("+p("span")+" - 1) * "+p("gutter")+")")}return{restrict:"E",controller:n,scope:{mdOnLayout:"&"},link:a}}function n(e){this.layoutInvalidated=!1,this.tilesInvalidated=!1,this.$timeout_=e.nextTick,this.layoutDelegate=t.noop}function o(e){function n(t,n){var o,a,d,c,s,l;return c=e.time(function(){a=r(t,n)}),o={layoutInfo:function(){return a},map:function(t){return s=e.time(function(){var e=o.layoutInfo();d=t(e.positioning,e.rowCount)}),o},reflow:function(t){return l=e.time(function(){var e=t||i;e(d.grid,d.tiles)}),o},performance:function(){return{tileCount:n.length,layoutTime:c,mapTime:s,reflowTime:l,totalTime:c+s+l}}}}function o(e,t){e.element.css(e.style),t.forEach(function(e){e.element.css(e.style)})}function r(e,t){function n(t,n){if(t.col>e)throw"md-grid-list: Tile at position "+n+" has a colspan ("+t.col+") that exceeds the column count ("+e+")";for(var a=0,l=0;l-a<t.col;)d>=e?o():(a=s.indexOf(0,d),-1!==a&&-1!==(l=i(a+1))?d=l+1:(a=l=0,o()));return r(a,t.col,t.row),d=a+t.col,{col:a,row:c}}function o(){d=0,c++,r(0,e,-1)}function r(e,t,n){for(var o=e;e+t>o;o++)s[o]=Math.max(s[o]+n,0)}function i(e){var t;for(t=e;t<s.length;t++)if(0!==s[t])return t;return t===s.length?t:void 0}function a(){for(var t=[],n=0;e>n;n++)t.push(0);return t}var d=0,c=0,s=a();return{positioning:t.map(function(e,t){return{spans:e,position:n(e,t)}}),rowCount:c+Math.max.apply(Math,s)}}var i=o;return n.animateWith=function(e){i=t.isFunction(e)?e:o},n}function r(e){function n(n,o,r,i){o.attr("role","listitem");var a=e.watchResponsiveAttributes(["md-colspan","md-rowspan"],r,t.bind(i,i.invalidateLayout));i.invalidateTiles(),n.$on("$destroy",function(){o[0].$$mdDestroyed=!0,a(),i.invalidateLayout()}),t.isDefined(n.$parent.$index)&&n.$watch(function(){return n.$parent.$index},function(e,t){e!==t&&i.invalidateTiles()})}return{restrict:"E",require:"^mdGridList",template:"<figure ng-transclude></figure>",transclude:!0,scope:{},controller:["$attrs",function(e){this.$attrs=e}],link:n}}function i(){return{template:"<figcaption ng-transclude></figcaption>",transclude:!0}}t.module("material.components.gridList",["material.core"]).directive("mdGridList",e).directive("mdGridTile",r).directive("mdGridTileFooter",i).directive("mdGridTileHeader",i).factory("$mdGridLayout",o),e.$inject=["$interpolate","$mdConstant","$mdGridLayout","$mdMedia"],n.$inject=["$mdUtil"],n.prototype={invalidateTiles:function(){this.tilesInvalidated=!0,this.invalidateLayout()},invalidateLayout:function(){this.layoutInvalidated||(this.layoutInvalidated=!0,this.$timeout_(t.bind(this,this.layout)))},layout:function(){try{this.layoutDelegate(this.tilesInvalidated)}finally{this.layoutInvalidated=!1,this.tilesInvalidated=!1}}},o.$inject=["$mdUtil"],r.$inject=["$mdMedia"]}(),function(){t.module("material.components.icon",["material.core"])}(),function(){function n(e,t){function n(t,n){e(n);var o=n.find("md-icon"),r=o.length?o:n[0].getElementsByClassName("md-icon");if(1==r.length){var i=r[0].nextElementSibling,a=r[0].previousElementSibling;n.addClass(i&&"INPUT"===i.tagName?"md-icon-left":a&&"INPUT"===a.tagName?"md-icon-right":"")}else 2==r.length&&n.addClass("md-icon-left md-icon-right")}function o(e,n,o,r){var i=this;i.isErrorGetter=o.mdIsError&&t(o.mdIsError),i.delegateClick=function(){i.input.focus()},i.element=n,i.setFocused=function(e){n.toggleClass("md-input-focused",!!e)},i.setHasValue=function(e){n.toggleClass("md-input-has-value",!!e)},i.setHasPlaceholder=function(e){n.toggleClass("md-input-has-placeholder",!!e)},i.setInvalid=function(e){e?r.addClass(n,"md-input-invalid"):r.removeClass(n,"md-input-invalid")},e.$watch(function(){return i.label&&i.input},function(e){e&&!i.label.attr("for")&&i.label.attr("for",i.input.attr("id"))})}return o.$inject=["$scope","$element","$attrs","$animate"],{restrict:"E",link:n,controller:o}}function o(){return{restrict:"E",require:"^?mdInputContainer",link:function(e,t,n,o){!o||n.mdNoFloat||t.hasClass("md-container-ignore")||(o.label=t,e.$on("$destroy",function(){o.label=null}))}}}function r(e,n,o){function r(r,i,a,d){function c(e){return m.setHasValue(!p.$isEmpty(e)),e}function s(){m.setHasValue(i.val().length>0||(i[0].validity||{}).badInput)}function l(){function o(e){return f(),e}function a(){if(l.style.height=l.offsetHeight+"px",i.addClass("md-no-flex"),isNaN(u)){s.style.height="auto",s.scrollTop=0;var e=d();e&&(s.style.height=e+"px")}else{s.setAttribute("rows",1),h||(s.style.minHeight="0",h=i.prop("clientHeight"),s.style.minHeight=null);var t=Math.min(u,Math.round(s.scrollHeight/h));s.setAttribute("rows",t),s.style.height=h*t+"px"}i.removeClass("md-no-flex"),l.style.height="auto"}function d(){var e=s.scrollHeight-s.offsetHeight;return s.offsetHeight+(e>0?e:0)}function c(e){s.scrollTop=0;var t=s.scrollHeight-s.offsetHeight,n=s.offsetHeight+t;s.style.height=n+"px"}if(!t.isDefined(i.attr("md-no-autogrow"))){var s=i[0],l=m.element[0],u=NaN,h=null;s.hasAttribute("rows")&&(u=parseInt(s.getAttribute("rows")));var f=e.debounce(a,1);if(p?(p.$formatters.push(o),p.$viewChangeListeners.push(o)):f(),i.on("keydown input",f),isNaN(u)&&(i.attr("rows","1"),i.on("scroll",c)),t.element(n).on("resize",f),r.$on("$destroy",function(){t.element(n).off("resize",f)}),t.isDefined(i.attr("md-detect-hidden"))){var g=function(){var e=!1;return function(){var t=0===s.offsetHeight;t===!1&&e===!0&&a(),e=t}}();r.$watch(function(){return e.nextTick(g,!1),!0})}}}var m=d[0],u=!!d[1],p=d[1]||e.fakeNgModel(),h=t.isDefined(a.readonly);if(m){if(m.input)throw new Error("<md-input-container> can only have *one* <input>, <textarea> or <md-select> child element!");m.input=i;var f=t.element('<div class="md-errors-spacer">');i.parent().append(f),m.label||o.expect(i,"aria-label",i.attr("placeholder")),i.addClass("md-input"),i.attr("id")||i.attr("id","input_"+e.nextUid()),"textarea"===i[0].tagName.toLowerCase()&&l(),u||s();var g=m.isErrorGetter||function(){return p.$invalid&&(p.$touched||b())},b=function(){var n=e.getClosest(i,"form"),o=n?t.element(n).controller("form"):null;return o?o.$submitted:!1};r.$watch(g,m.setInvalid),p.$parsers.push(c),p.$formatters.push(c),i.on("input",s),h||i.on("focus",function(e){m.setFocused(!0)}).on("blur",function(e){m.setFocused(!1),s()}),r.$on("$destroy",function(){m.setFocused(!1),m.setHasValue(!1),m.input=null})}}return{restrict:"E",require:["^?mdInputContainer","?ngModel"],link:r}}function i(e,n){function o(o,r,i,a){function d(e){return s.parent?(s.text(String(r.val()||e||"").length+"/"+c),e):e}var c,s,l,m=a[0],u=a[1];n.nextTick(function(){l=t.element(u.element[0].querySelector(".md-errors-spacer")),s=t.element('<div class="md-char-counter">'),l.append(s),i.$set("ngTrim","false"),m.$formatters.push(d),m.$viewChangeListeners.push(d),r.on("input keydown keyup",function(){d()}),o.$watch(i.mdMaxlength,function(n){c=n,t.isNumber(n)&&n>0?(s.parent().length||e.enter(s,l),d()):e.leave(s)}),m.$validators["md-maxlength"]=function(e,n){return!t.isNumber(c)||0>c?!0:(e||r.val()||n||"").length<=c}})}return{restrict:"A",require:["ngModel","^mdInputContainer"],link:o}}function a(e){function n(e,n,o,r){if(r){var i=r.element.find("label"),a=t.isDefined(r.element.attr("md-no-float"));if(i&&i.length||a)return void r.setHasPlaceholder(!0);var d=o.placeholder;if(n.removeAttr("placeholder"),r.input&&"MD-SELECT"!=r.input[0].nodeName){var c='<label ng-click="delegateClick()">'+d+"</label>";r.element.addClass("md-icon-float"),r.element.prepend(c)}}}return{restrict:"A",require:"^^?mdInputContainer",priority:200,link:n}}function d(){function e(e,t,n){function o(){t[0].select()}("INPUT"===t[0].nodeName||"TEXTAREA"===t[0].nodeName)&&(t.on("focus",o),e.$on("$destroy",function(){t.off("focus",o)}))}return{restrict:"A",link:e}}function c(){function e(e,n,o,r){r&&(n.toggleClass("md-input-messages-animation",!0),n.toggleClass("md-auto-hide",!0),("false"==o.mdAutoHide||t(o))&&n.toggleClass("md-auto-hide",!1))}function t(e){return v.some(function(t){return e[t]})}return{restrict:"EA",link:e,require:"^^?mdInputContainer"}}function s(e){function t(t){var n=e.getClosest(t,"md-input-container");if(n)return t.toggleClass("md-input-message-animation",!0),{}}return{restrict:"EA",compile:t,priority:100}}function l(e,t){return{addClass:function(n,o,r){var i=E(n);"md-input-invalid"==o&&i.hasClass("md-auto-hide")?p(n,t,e)["finally"](r):r()}}}function m(e,t){return{enter:function(n,o){p(n,t,e)["finally"](o)},leave:function(n,o){h(n,t,e)["finally"](o)},addClass:function(n,o,r){"ng-hide"==o?h(n,t,e)["finally"](r):r()},removeClass:function(n,o,r){"ng-hide"==o?p(n,t,e)["finally"](r):r()}}}function u(e){return{enter:function(t,n){var o=E(t);return o.hasClass("md-auto-hide")?void n():f(t,e)},leave:function(t,n){return g(t,e)}}}function p(e,n,o){var r,i=[],a=E(e);return t.forEach(a.children(),function(e){r=f(t.element(e),n),i.push(r.start())}),o.all(i)}function h(e,n,o){var r,i=[],a=E(e);return t.forEach(a.children(),function(e){r=g(t.element(e),n),i.push(r.start())}),o.all(i)}function f(e,t){var n=e[0].offsetHeight;return t(e,{event:"enter",structural:!0,from:{opacity:0,"margin-top":-n+"px"},to:{opacity:1,"margin-top":"0"},duration:.3})}function g(t,n){var o=t[0].offsetHeight,r=e.getComputedStyle(t[0]);return 0==r.opacity?n(t,{}):n(t,{event:"leave",structural:!0,from:{opacity:1,"margin-top":0},to:{opacity:0,"margin-top":-o+"px"},duration:.3})}function b(e){var t=e.controller("mdInputContainer");return t.element}function E(e){var n=b(e),o="ng-messages,data-ng-messages,x-ng-messages,[ng-messages],[data-ng-messages],[x-ng-messages]";return t.element(n[0].querySelector(o))}t.module("material.components.input",["material.core"]).directive("mdInputContainer",n).directive("label",o).directive("input",r).directive("textarea",r).directive("mdMaxlength",i).directive("placeholder",a).directive("ngMessages",c).directive("ngMessage",s).directive("ngMessageExp",s).directive("mdSelectOnFocus",d).animation(".md-input-invalid",l).animation(".md-input-messages-animation",m).animation(".md-input-message-animation",u),n.$inject=["$mdTheming","$parse"],r.$inject=["$mdUtil","$window","$mdAria"],i.$inject=["$animate","$mdUtil"],a.$inject=["$log"];var v=["ngIf","ngShow","ngHide","ngSwitchWhen","ngSwitchDefault"];s.$inject=["$mdUtil"],l.$inject=["$q","$animateCss"],m.$inject=["$q","$animateCss"],u.$inject=["$animateCss"]}(),function(){function e(e){return{restrict:"E",compile:function(t){return t[0].setAttribute("role","list"),e}}}function n(e,n,o,r){var i=["md-checkbox","md-switch"];return{restrict:"E",controller:"MdListController",compile:function(a,d){function c(){for(var e,t,n=["md-switch","md-checkbox"],o=0;t=n[o];++o)if((e=a.find(t)[0])&&!e.hasAttribute("aria-label")){var r=a.find("p")[0];if(!r)return;e.setAttribute("aria-label","Toggle "+r.textContent)}}function s(e){var n;"div"==e?(n=t.element('<div class="md-no-style md-list-item-inner">'),n.append(a.contents()),a.addClass("md-proxy-focus")):(n=t.element('<md-button class="md-no-style"><div class="md-list-item-inner"></div></md-button>'),m(a[0],n[0]),n.children().eq(0).append(a.contents())),a[0].setAttribute("tabindex","-1"),a.append(n)}function l(){if(b&&!p(b)&&b.hasAttribute("ng-click")){e.expect(b,"aria-label");var n=t.element('<md-button class="md-secondary-container md-icon-button">');m(b,n[0]),b.setAttribute("tabindex","-1"),b.classList.remove("md-secondary"),n.append(b),b=n[0]}b&&(b.hasAttribute("ng-click")||d.ngClick&&u(b))&&(a.addClass("md-with-secondary"),a.append(b))}function m(e,n){var o=["ng-if","ng-click","aria-label","ng-disabled","ui-sref","href","ng-href","ng-attr-ui-sref"];t.forEach(o,function(t){e.hasAttribute(t)&&(n.setAttribute(t,e.getAttribute(t)),e.removeAttribute(t))})}function u(e){return-1!=i.indexOf(e.nodeName.toLowerCase())}function p(e){var t=e.nodeName.toUpperCase();return"MD-BUTTON"==t||"BUTTON"==t}function h(e,a,d,c){function s(e){for(var t=e.attributes,n=0;n<t.length;n++)if("ngClick"===d.$normalize(t[n].name))return!0;return!1}function l(){var e=a.children();e.length&&!e[0].hasAttribute("ng-click")&&t.forEach(i,function(e){t.forEach(p.querySelectorAll(e),function(e){u.push(e)})})}function m(){(1==u.length||h)&&(a.addClass("md-clickable"),h||c.attachRipple(e,t.element(a[0].querySelector(".md-no-style"))))}var u=[],p=a[0].firstElementChild,h=p&&s(p);l(),m(),a.hasClass("md-proxy-focus")&&u.length&&t.forEach(u,function(n){n=t.element(n),e.mouseActive=!1,n.on("mousedown",function(){e.mouseActive=!0,r(function(){e.mouseActive=!1},100)}).on("focus",function(){e.mouseActive===!1&&a.addClass("md-focused"),n.on("blur",function t(){a.removeClass("md-focused"),n.off("blur",t)})})}),h||u.length||p&&p.addEventListener("keypress",function(e){if("INPUT"!=e.target.nodeName&&"TEXTAREA"!=e.target.nodeName){var t=e.which||e.keyCode;t==n.KEY_CODE.SPACE&&p&&(p.click(),e.preventDefault(),e.stopPropagation())}}),a.off("click"),a.off("keypress"),1==u.length&&p&&a.children().eq(0).on("click",function(e){var n=o.getClosest(e.target,"BUTTON");!n&&p.contains(e.target)&&t.forEach(u,function(n){e.target===n||n.contains(e.target)||t.element(n).triggerHandler("click")})})}var f,g,b=a[0].querySelector(".md-secondary");if(a[0].setAttribute("role","listitem"),d.ngClick||d.ngHref||d.href||d.uiSref||d.ngAttrUiSref)s("button");else{for(var E,v=0;E=i[v];++v)if(g=a[0].querySelector(E)){f=!0;break}f?s("div"):a[0].querySelector("md-button:not(.md-secondary):not(.md-exclude)")||a.addClass("md-no-proxy")}return l(),c(),h}}}function o(e,t,n){function o(e,t){var o={};n.attach(e,t,o)}var r=this;r.attachRipple=o}t.module("material.components.list",["material.core"]).controller("MdListController",o).directive("mdList",e).directive("mdListItem",n),e.$inject=["$mdTheming"],n.$inject=["$mdAria","$mdConstant","$mdUtil","$timeout"],o.$inject=["$scope","$element","$mdListInkRipple"]}(),function(){t.module("material.components.menu",["material.core","material.components.backdrop"])}(),function(){t.module("material.components.menuBar",["material.core","material.components.menu"])}(),function(){function e(e,o,r){function i(e){return e.attr("aria-valuemin",0),e.attr("aria-valuemax",100),e.attr("role","progressbar"),a}function a(i,a,p){function h(){p.$observe("value",function(e){var t=d(e);a.attr("aria-valuenow",t),v()==m&&b(t)}),p.$observe("mdMode",function(e){switch(e){case m:case u:y.removeClass("ng-hide"),M&&y.removeClass(M),y.addClass(M="md-mode-"+e);break;default:M&&y.removeClass(M),y.addClass("ng-hide"),M=n}})}function f(){$.css({width:100*E()+"px",height:100*E()+"px"}),$.children().eq(0).css(C({transform:o.supplant("translate(-50%, -50%) scale( {0} )",[E()])}))}function g(){if(t.isUndefined(p.mdMode)){var e=t.isDefined(p.value),n=e?m:u,i="Auto-adding the missing md-mode='{0}' to the ProgressCircular element";r.debug(o.supplant(i,[n])),a.attr("md-mode",n),p.mdMode=n}}function b(e){if(v()){A=A||t.element(a[0].querySelector(".md-left > .md-half-circle")),T=T||t.element(a[0].querySelector(".md-right > .md-half-circle")),w=w||t.element(a[0].querySelector(".md-gap"));var n=c({borderBottomColor:50>=e?"transparent !important":"",transition:50>=e?"":"borderBottomColor 0.1s linear"}),r=c({transition:50>=e?"transform 0.1s linear":"",transform:o.supplant("rotate({0}deg)",[50>=e?135:(e-50)/50*180+135])}),i=c({transition:e>=50?"transform 0.1s linear":"",transform:o.supplant("rotate({0}deg)",[e>=50?45:e/50*180-135])});A.css(C(r)),T.css(C(i)),w.css(C(n))}}function E(){if(!p.mdDiameter)return l;var e=/([0-9]*)%/.exec(p.mdDiameter),t=Math.max(0,e&&e[1]/100||parseFloat(p.mdDiameter));return t>1?t/s:t}function v(){var e=(p.mdMode||"").trim();if(e)switch(e){case m:case u:break;default:e=n}return e}e(a);var M,$=a,y=t.element(a.children()[0]),C=o.dom.animator.toCss;a.attr("md-mode",v()),f(),g(),h();var A,T,w}function d(e){return Math.max(0,Math.min(e||0,100))}function c(e){for(var t in e)e.hasOwnProperty(t)&&""==e[t]&&delete e[t];return e}var s=100,l=.5,m="determinate",u="indeterminate";return{restrict:"E",scope:!0,template:'<div class="md-scale-wrapper"><div class="md-spinner-wrapper"><div class="md-inner"><div class="md-gap"></div><div class="md-left"><div class="md-half-circle"></div></div><div class="md-right"><div class="md-half-circle"></div></div></div></div></div>',compile:i}}t.module("material.components.progressCircular",["material.core"]).directive("mdProgressCircular",e),e.$inject=["$mdTheming","$mdUtil","$log"]}(),function(){function e(e,o,r){function i(e,t,n){return e.attr("aria-valuemin",0),e.attr("aria-valuemax",100),e.attr("role","progressbar"),a}function a(i,a,u){function p(){u.$observe("value",function(e){var t=d(e);a.attr("aria-valuenow",t),f()!=m&&g(M,t)}),u.$observe("mdBufferValue",function(e){g(v,d(e))}),u.$observe("mdMode",function(e){switch(e){case m:case l:case c:case s:$.removeClass("ng-hide "+b),$.addClass(b="md-mode-"+e);break;default:b&&$.removeClass(b),$.addClass("ng-hide"),b=n}})}function h(){if(t.isUndefined(u.mdMode)){var e=t.isDefined(u.value),n=e?c:s,i="Auto-adding the missing md-mode='{0}' to the ProgressLinear element";r.debug(o.supplant(i,[n])),a.attr("md-mode",n),u.mdMode=n}}function f(){var e=(u.mdMode||"").trim();if(e)switch(e){case c:case s:case l:case m:break;default:e=n}return e}function g(e,n){if(f()){var r=o.supplant("translateX({0}%) scale({1},1)",[(n-100)/2,n/100]),i=E({transform:r});t.element(e).css(i)}}e(a);var b,E=o.dom.animator.toCss,v=t.element(a[0].querySelector(".md-bar1")),M=t.element(a[0].querySelector(".md-bar2")),$=t.element(a[0].querySelector(".md-container"));a.attr("md-mode",f()),h(),p()}function d(e){return Math.max(0,Math.min(e||0,100))}var c="determinate",s="indeterminate",l="buffer",m="query";return{restrict:"E",template:'<div class="md-container"><div class="md-dashed"></div><div class="md-bar md-bar1"></div><div class="md-bar md-bar2"></div></div>',compile:i}}t.module("material.components.progressLinear",["material.core"]).directive("mdProgressLinear",e),e.$inject=["$mdTheming","$mdUtil","$log"]}(),function(){function e(e,n,o,r){function i(i,a,d,c){function s(){a.hasClass("md-focused")||a.addClass("md-focused")}function l(o){var r=o.which||o.keyCode;if(r==n.KEY_CODE.ENTER||o.currentTarget==o.target)switch(r){case n.KEY_CODE.LEFT_ARROW:case n.KEY_CODE.UP_ARROW:o.preventDefault(),m.selectPrevious(),s();break;case n.KEY_CODE.RIGHT_ARROW:case n.KEY_CODE.DOWN_ARROW:o.preventDefault(),m.selectNext(),s();break;case n.KEY_CODE.ENTER:var i=t.element(e.getClosest(a[0],"form"));i.length>0&&i.triggerHandler("submit")}}o(a);var m=c[0],u=c[1]||e.fakeNgModel();m.init(u),i.mouseActive=!1,a.attr({role:"radiogroup",tabIndex:a.attr("tabindex")||"0"}).on("keydown",l).on("mousedown",function(e){i.mouseActive=!0,r(function(){i.mouseActive=!1},100)}).on("focus",function(){i.mouseActive===!1&&m.$element.addClass("md-focused")}).on("blur",function(){m.$element.removeClass("md-focused")})}function a(e){this._radioButtonRenderFns=[],this.$element=e}function d(){return{init:function(e){this._ngModelCtrl=e,this._ngModelCtrl.$render=t.bind(this,this.render)},add:function(e){this._radioButtonRenderFns.push(e)},remove:function(e){var t=this._radioButtonRenderFns.indexOf(e);-1!==t&&this._radioButtonRenderFns.splice(t,1)},render:function(){this._radioButtonRenderFns.forEach(function(e){e()})},setViewValue:function(e,t){this._ngModelCtrl.$setViewValue(e,t),this.render()},getViewValue:function(){return this._ngModelCtrl.$viewValue},selectNext:function(){return c(this.$element,1)},selectPrevious:function(){return c(this.$element,-1)},setActiveDescendant:function(e){this.$element.attr("aria-activedescendant",e)}}}function c(n,o){var r=e.iterator(n[0].querySelectorAll("md-radio-button"),!0);if(r.count()){var i=function(e){return!t.element(e).attr("disabled")},a=n[0].querySelector("md-radio-button.md-checked"),d=r[0>o?"previous":"next"](a,i)||r.first();t.element(d).triggerHandler("click")}}return a.prototype=d(),{restrict:"E",controller:["$element",a],require:["mdRadioGroup","?ngModel"],link:{pre:i}}}function n(e,t,n){function o(o,i,a,d){function c(e){if(!d)throw"RadioGroupController not found.";d.add(l),a.$observe("value",l),i.on("click",s).on("$destroy",function(){d.remove(l)})}function s(e){i[0].hasAttribute("disabled")||o.$apply(function(){d.setViewValue(a.value,e&&e.type)})}function l(){function e(e){"MD-RADIO-GROUP"!=i.parent()[0].nodeName&&i.parent()[e?"addClass":"removeClass"](r)}var t=d.getViewValue()==a.value;t!==u&&(u=t,i.attr("aria-checked",t),t?(e(!0),i.addClass(r),d.setActiveDescendant(i.attr("id"))):(e(!1),i.removeClass(r)))}function m(n,o){function r(){return a.id||"radio_"+t.nextUid()}o.ariaId=r(),n.attr({id:o.ariaId,role:"radio","aria-checked":"false"}),e.expectWithText(n,"aria-label")}var u;n(i),m(i,o),c()}var r="md-checked";return{restrict:"E",require:"^mdRadioGroup",transclude:!0,template:'<div class="md-container" md-ink-ripple md-ink-ripple-checkbox><div class="md-off"></div><div class="md-on"></div></div><div ng-transclude class="md-label"></div>',link:o}}t.module("material.components.radioButton",["material.core"]).directive("mdRadioGroup",e).directive("mdRadioButton",n),e.$inject=["$mdUtil","$mdConstant","$mdTheming","$timeout"],n.$inject=["$mdAria","$mdUtil","$mdTheming"]}(),function(){function e(e,o,r,i,a,d){function c(a,c){var s=t.element("<md-select-value><span></span></md-select-value>");if(s.append('<span class="md-select-icon" aria-hidden="true"></span>'),s.addClass("md-select-value"),s[0].hasAttribute("id")||s.attr("id","select_value_label_"+o.nextUid()),a.find("md-content").length||a.append(t.element("<md-content>").append(a.contents())),c.mdOnOpen&&(a.find("md-content").prepend(t.element('<div> <md-progress-circular md-mode="{{progressMode}}" ng-hide="$$loadingAsyncDone"></md-progress-circular></div>')),a.find("md-option").attr("ng-show","$$loadingAsyncDone")),c.name){var l=t.element('<select class="md-visually-hidden">');l.attr({name:"."+c.name,"ng-model":c.ngModel,"aria-hidden":"true",tabindex:"-1"});var m=a.find("md-option");t.forEach(m,function(e){var n=t.element("<option>"+e.innerHTML+"</option>");
e.hasAttribute("ng-value")?n.attr("ng-value",e.getAttribute("ng-value")):e.hasAttribute("value")&&n.attr("value",e.getAttribute("value")),l.append(n)}),a.parent().append(l)}var u=t.isDefined(c.multiple)?"multiple":"",p='<div class="md-select-menu-container" aria-hidden="true"><md-select-menu {0}>{1}</md-select-menu></div>';return p=o.supplant(p,[u,a.html()]),a.empty().append(s),a.append(p),c.tabindex=c.tabindex||"0",function(a,c,s,l){function m(){var e=c.attr("aria-label")||c.attr("placeholder");!e&&$&&$.label&&(e=$.label.text()),v=e,i.expect(c,"aria-label",e)}function u(){x&&(_=_||x.find("md-select-menu").controller("mdSelectMenu"),y.setLabelText(_.selectedLabels()))}function p(){if(v){var e=_.selectedLabels({mode:"aria"});c.attr("aria-label",e.length?v+": "+e:v)}}function h(){$&&$.setHasValue(_.selectedLabels().length>0||(c[0].validity||{}).badInput)}function f(){if(x=t.element(c[0].querySelector(".md-select-menu-container")),N=a,s.mdContainerClass){var e=x[0].getAttribute("class")+" "+s.mdContainerClass;x[0].setAttribute("class",e)}_=x.find("md-select-menu").controller("mdSelectMenu"),_.init(C,s.ngModel),c.on("$destroy",function(){x.remove()})}function g(e){var n=[32,13,38,40];if(-1!=n.indexOf(e.keyCode))e.preventDefault(),b(e);else if(e.keyCode<=90&&e.keyCode>=31){e.preventDefault();var o=_.optNodeForKeyboardSearch(e);if(!o)return;var r=t.element(o).controller("mdOption");_.isMultiple||_.deselect(Object.keys(_.selected)[0]),_.select(r.hashKey,r.value),_.refreshViewValue()}}function b(){N.isOpen=!0,c.attr("aria-expanded","true"),e.show({scope:N,preserveScope:!0,skipCompile:!0,element:x,target:c[0],selectCtrl:y,preserveElement:!0,hasBackdrop:!0,loadingAsync:s.mdOnOpen?a.$eval(s.mdOnOpen)||!0:!1})["finally"](function(){N.isOpen=!1,c.focus(),c.attr("aria-expanded","false"),C.$setTouched()})}var E,v,M=!0,$=l[0],y=l[1],C=l[2],A=l[3],T=c.find("md-select-value"),w=t.isDefined(s.readonly);if($){var k=$.isErrorGetter||function(){return C.$invalid&&C.$touched};if($.input)throw new Error("<md-input-container> can only have *one* child <input>, <textarea> or <select> element!");$.input=c,$.label||i.expect(c,"aria-label",c.attr("placeholder")),a.$watch(k,$.setInvalid)}var x,N,_;if(f(),r(c),s.name&&A){var H=c.parent()[0].querySelector('select[name=".'+s.name+'"]');o.nextTick(function(){var e=t.element(H).controller("ngModel");e&&A.$removeControl(e)})}A&&t.isDefined(s.multiple)&&o.nextTick(function(){var e=C.$modelValue||C.$viewValue;e&&A.$setPristine()});var S=C.$render;C.$render=function(){S(),u(),p(),h()},s.$observe("placeholder",C.$render),y.setLabelText=function(e){y.setIsPlaceholder(!e);var t=s.placeholder||($&&$.label?$.label.text():"");e=e||t||"";var n=T.children().eq(0);n.html(e)},y.setIsPlaceholder=function(e){e?(T.addClass("md-select-placeholder"),$&&$.label&&$.label.addClass("md-placeholder")):(T.removeClass("md-select-placeholder"),$&&$.label&&$.label.removeClass("md-placeholder"))},w||(c.on("focus",function(e){$&&$.element.hasClass("md-input-has-value")&&$.setFocused(!0)}),o.nextTick(function(){c.on("blur",function(){M&&(M=!1,C.$setUntouched()),N.isOpen||($&&$.setFocused(!1),h())})})),y.triggerClose=function(){d(s.mdOnClose)(a)},a.$$postDigest(function(){m(),u(),p()}),a.$watch(_.selectedLabels,u);var D;s.$observe("ngMultiple",function(e){D&&D();var t=d(e);D=a.$watch(function(){return t(a)},function(e,t){(e!==n||t!==n)&&(e?c.attr("multiple","multiple"):c.removeAttr("multiple"),c.attr("aria-multiselectable",e?"true":"false"),x&&(_.setMultiple(e),S=C.$render,C.$render=function(){S(),u(),p(),h()},C.$render()))})}),s.$observe("disabled",function(e){t.isString(e)&&(e=!0),(E===n||E!==e)&&(E=e,e?(c.attr({tabindex:-1,"aria-disabled":"true"}),c.off("click",b),c.off("keydown",g)):(c.attr({tabindex:s.tabindex,"aria-disabled":"false"}),c.on("click",b),c.on("keydown",g)))}),s.disabled||s.ngDisabled||(c.attr({tabindex:s.tabindex,"aria-disabled":"false"}),c.on("click",b),c.on("keydown",g));var I={role:"listbox","aria-expanded":"false","aria-multiselectable":s.multiple===n||s.ngMultiple?"false":"true"};c[0].hasAttribute("id")||(I.id="select_"+o.nextUid());var O="select_container_"+o.nextUid();x.attr("id",O),I["aria-owns"]=O,c.attr(I),a.$on("$destroy",function(){e.destroy()["finally"](function(){$&&($.setFocused(!1),$.setHasValue(!1),$.input=null),C.$setTouched()})})}}return{restrict:"E",require:["^?mdInputContainer","mdSelect","ngModel","?^form"],compile:c,controller:function(){}}}function o(e,o,r){function i(e,n,i,a){function d(e){(13==e.keyCode||32==e.keyCode)&&c(e)}function c(n){var r=o.getClosest(n.target,"md-option"),i=r&&t.element(r).data("$mdOptionController");if(r&&i){if(r.hasAttribute("disabled"))return n.stopImmediatePropagation(),!1;var a=s.hashGetter(i.value),d=t.isDefined(s.selected[a]);e.$apply(function(){s.isMultiple?d?s.deselect(a):s.select(a,i.value):d||(s.deselect(Object.keys(s.selected)[0]),s.select(a,i.value)),s.refreshViewValue()})}}var s=a[0];r(n),n.on("click",c),n.on("keypress",d)}function a(r,i,a){function d(){var e=l.ngModel.$modelValue||l.ngModel.$viewValue||[];if(t.isArray(e)){var n=Object.keys(l.selected),o=e.map(l.hashGetter),r=n.filter(function(e){return-1===o.indexOf(e)});r.forEach(l.deselect),o.forEach(function(t,n){l.select(t,e[n])})}}function s(){var e=l.ngModel.$viewValue||l.ngModel.$modelValue;Object.keys(l.selected).forEach(l.deselect),l.select(l.hashGetter(e),e)}var l=this;l.isMultiple=t.isDefined(i.multiple),l.selected={},l.options={},r.$watchCollection(function(){return l.options},function(){l.ngModel.$render()});var m,u;l.setMultiple=function(e){function n(e,n){return t.isArray(e||n||[])}var o=l.ngModel;u=u||o.$isEmpty,l.isMultiple=e,m&&m(),l.isMultiple?(o.$validators["md-multiple"]=n,o.$render=d,r.$watchCollection(l.modelBinding,function(e){n(e)&&d(e),l.ngModel.$setPristine()}),o.$isEmpty=function(e){return!e||0===e.length}):(delete o.$validators["md-multiple"],o.$render=s)};var p,h,f,g="",b=300;l.optNodeForKeyboardSearch=function(e){p&&clearTimeout(p),p=setTimeout(function(){p=n,g="",f=n,h=n},b),g+=String.fromCharCode(e.keyCode);var o=new RegExp("^"+g,"i");h||(h=a.find("md-option"),f=new Array(h.length),t.forEach(h,function(e,t){f[t]=e.textContent.trim()}));for(var r=0;r<f.length;++r)if(o.test(f[r]))return h[r]},l.init=function(n,o){if(l.ngModel=n,l.modelBinding=o,n.$options&&n.$options.trackBy){var i={},a=e(n.$options.trackBy);l.hashGetter=function(e,t){return i.$value=e,a(t||r,i)}}else l.hashGetter=function(e){return t.isObject(e)?"object_"+(e.$$mdSelectId||(e.$$mdSelectId=++c)):e};l.setMultiple(l.isMultiple)},l.selectedLabels=function(e){e=e||{};var t=e.mode||"html",n=o.nodesToArray(a[0].querySelectorAll("md-option[selected]"));if(n.length){var r;return"html"==t?r=function(e){var t=e.innerHTML,n=e.querySelector(".md-ripple-container");return n?t.replace(n.outerHTML,""):t}:"aria"==t&&(r=function(e){return e.hasAttribute("aria-label")?e.getAttribute("aria-label"):e.textContent}),n.map(r).join(", ")}return""},l.select=function(e,t){var n=l.options[e];n&&n.setSelected(!0),l.selected[e]=t},l.deselect=function(e){var t=l.options[e];t&&t.setSelected(!1),delete l.selected[e]},l.addOption=function(e,n){if(t.isDefined(l.options[e]))throw new Error('Duplicate md-option values are not allowed in a select. Duplicate value "'+n.value+'" found.');l.options[e]=n,t.isDefined(l.selected[e])&&(l.select(e,n.value),l.refreshViewValue())},l.removeOption=function(e){delete l.options[e]},l.refreshViewValue=function(){var e,n=[];for(var o in l.selected)(e=l.options[o])?n.push(e.value):n.push(l.selected[o]);var r=l.ngModel.$options&&l.ngModel.$options.trackBy,i=l.isMultiple?n:n[0],a=l.ngModel.$modelValue;(r?t.equals(a,i):a==i)||(l.ngModel.$setViewValue(i),l.ngModel.$render())}}return a.$inject=["$scope","$attrs","$element"],{restrict:"E",require:["mdSelectMenu"],scope:!0,controller:a,link:{pre:i}}}function r(e,n){function o(e,n){return e.append(t.element('<div class="md-text">').append(e.contents())),e.attr("tabindex",n.tabindex||"0"),r}function r(o,r,i,a){function d(e,t,n){if(!l.hashGetter)return void(n||o.$$postDigest(function(){d(e,t,!0)}));var r=l.hashGetter(t,o),i=l.hashGetter(e,o);s.hashKey=i,s.value=e,l.removeOption(r,s),l.addOption(i,s)}function c(){var e={role:"option","aria-selected":"false"};r[0].hasAttribute("id")||(e.id="select_option_"+n.nextUid()),r.attr(e)}var s=a[0],l=a[1];t.isDefined(i.ngValue)?o.$watch(i.ngValue,d):t.isDefined(i.value)?d(i.value):o.$watch(function(){return r.text()},d),i.$observe("disabled",function(e){e?r.attr("tabindex","-1"):r.attr("tabindex","0")}),o.$$postDigest(function(){i.$observe("selected",function(e){t.isDefined(e)&&("string"==typeof e&&(e=!0),e?(l.isMultiple||l.deselect(Object.keys(l.selected)[0]),l.select(s.hashKey,s.value)):l.deselect(s.hashKey),l.refreshViewValue())})}),e.attach(o,r),c(),o.$on("$destroy",function(){l.removeOption(s.hashKey,s)})}function i(e){this.selected=!1,this.setSelected=function(t){t&&!this.selected?e.attr({selected:"selected","aria-selected":"true"}):!t&&this.selected&&(e.removeAttr("selected"),e.attr("aria-selected","false")),this.selected=t}}return i.$inject=["$element"],{restrict:"E",require:["mdOption","^^mdSelectMenu"],controller:i,compile:o}}function i(){function e(e,n){var o=e.find("label");o.length||(o=t.element("<label>"),e.prepend(o)),o.addClass("md-container-ignore"),n.label&&o.text(n.label)}return{restrict:"E",compile:e}}function a(e){function o(e,o,s,l,m,u,p,h,f){function g(e,t,n){function o(){return p(t,{addClass:"md-leave"}).start()}function r(){t.removeClass("md-active"),t.attr("aria-hidden","true"),t[0].style.display="none",E(n),!n.$destroy&&n.restoreFocus&&n.target.focus()}return n=n||{},n.cleanupInteraction(),n.cleanupResizing(),n.hideBackdrop(),n.$destroy===!0?r():o().then(r)}function b(r,i,a){function d(e,t,n){return n.parent.append(t),m(function(e,n){try{p(t,{removeClass:"md-leave",duration:0}).start().then(c).then(e)}catch(o){n(o)}})}function c(){return m(function(e){if(a.isRemoved)return m.reject(!1);var t=v(r,i,a);t.container.element.css($.toCss(t.container.styles)),t.dropDown.element.css($.toCss(t.dropDown.styles)),u(function(){i.addClass("md-active"),t.dropDown.element.css($.toCss({transform:""})),b(a.focusedNode),e()})})}function g(e,t,n){return n.disableParentScroll&&!s.getClosest(n.target,"MD-DIALOG")?n.restoreScroll=s.disableScrollAround(n.element,n.parent):n.disableParentScroll=!1,n.hasBackdrop&&(n.backdrop=s.createBackdrop(e,"md-select-backdrop md-click-catcher"),h.enter(n.backdrop,f[0].body,null,{duration:0})),function(){n.backdrop&&n.backdrop.remove(),n.disableParentScroll&&n.restoreScroll(),delete n.restoreScroll}}function b(e){e&&!e.hasAttribute("disabled")&&e.focus()}function E(e,n){var o=i.find("md-select-menu");if(!n.target)throw new Error(s.supplant(M,[n.target]));t.extend(n,{isRemoved:!1,target:t.element(n.target),parent:t.element(n.parent),selectEl:o,contentEl:i.find("md-content"),optionNodes:o[0].getElementsByTagName("md-option")})}function y(){var e=function(e,t,n){return function(){if(!n.isRemoved){var o=v(e,t,n),r=o.container,i=o.dropDown;r.element.css($.toCss(r.styles)),i.element.css($.toCss(i.styles))}}}(r,i,a),n=t.element(l);return n.on("resize",e),n.on("orientationchange",e),function(){n.off("resize",e),n.off("orientationchange",e)}}function C(){a.loadingAsync&&!a.isRemoved&&(r.$$loadingAsyncDone=!1,r.progressMode="indeterminate",m.when(a.loadingAsync).then(function(){r.$$loadingAsyncDone=!0,r.progressMode="",delete a.loadingAsync}).then(function(){u(c)}))}function A(){function t(t){t.preventDefault(),t.stopPropagation(),a.restoreFocus=!1,s.nextTick(e.hide,!0)}function r(t){var n=o.KEY_CODE;switch(t.preventDefault(),t.stopPropagation(),t.keyCode){case n.UP_ARROW:return l();case n.DOWN_ARROW:return c();case n.SPACE:case n.ENTER:var r=s.getClosest(t.target,"md-option");r&&(u.triggerHandler({type:"click",target:r}),t.preventDefault()),m(t);break;case n.TAB:case n.ESCAPE:t.stopPropagation(),t.preventDefault(),a.restoreFocus=!0,s.nextTick(e.hide,!0);break;default:if(t.keyCode>=31&&t.keyCode<=90){var i=u.controller("mdSelectMenu").optNodeForKeyboardSearch(t);a.focusedNode=i||a.focusedNode,i&&i.focus()}}}function d(e){var t,o=s.nodesToArray(a.optionNodes),r=o.indexOf(a.focusedNode);do-1===r?r=0:"next"===e&&r<o.length-1?r++:"prev"===e&&r>0&&r--,t=o[r],t.hasAttribute("disabled")&&(t=n);while(!t&&r<o.length-1&&r>0);t&&t.focus(),a.focusedNode=t}function c(){d("next")}function l(){d("prev")}function m(t){function n(){var e=!1;if(t&&t.currentTarget.children.length>0){var n=t.currentTarget.children[0],o=n.scrollHeight>n.clientHeight;if(o&&n.children.length>0){var r=t.pageX-t.currentTarget.getBoundingClientRect().left;r>n.querySelector("md-option").offsetWidth&&(e=!0)}}return e}if(!(t&&"click"==t.type&&t.currentTarget!=u[0]||n())){var o=s.getClosest(t.target,"md-option");o&&o.hasAttribute&&!o.hasAttribute("disabled")&&(t.preventDefault(),t.stopPropagation(),p.isMultiple||(a.restoreFocus=!0,s.nextTick(function(){e.hide(p.ngModel.$viewValue)},!0)))}}if(!a.isRemoved){var u=a.selectEl,p=u.controller("mdSelectMenu")||{};return i.addClass("md-clickable"),a.backdrop&&a.backdrop.on("click",t),u.on("keydown",r),u.on("click",m),function(){a.backdrop&&a.backdrop.off("click",t),u.off("keydown",r),u.off("click",m),i.removeClass("md-clickable"),a.isRemoved=!0}}}return C(),E(r,a),a.hideBackdrop=g(r,i,a),d(r,i,a).then(function(e){return i.attr("aria-hidden","false"),a.alreadyOpen=!0,a.cleanupInteraction=A(),a.cleanupResizing=y(),e},a.hideBackdrop)}function E(e){var t=e.selectCtrl;if(t){var n=e.selectEl.controller("mdSelectMenu");t.setLabelText(n.selectedLabels()),t.triggerClose()}}function v(e,n,o){var m,u=n[0],p=o.target[0].children[0],h=f[0].body,g=o.selectEl[0],b=o.contentEl[0],E=h.getBoundingClientRect(),v=p.getBoundingClientRect(),M=!1,$={left:E.left+d,top:d,bottom:E.height-d,right:E.width-d-(s.floatingScrollbars()?16:0)},y={top:v.top-$.top,left:v.left-$.left,right:$.right-(v.left+v.width),bottom:$.bottom-(v.top+v.height)},C=E.width-2*d,A=g.querySelector("md-option[selected]"),T=g.getElementsByTagName("md-option"),w=g.getElementsByTagName("md-optgroup"),k=c(n,b),x=r(o.loadingAsync);m=x?b.firstElementChild||b:A?A:w.length?w[0]:T.length?T[0]:b.firstElementChild||b,b.offsetWidth>C?b.style["max-width"]=C+"px":b.style.maxWidth=null,M&&(b.style["min-width"]=v.width+"px"),k&&g.classList.add("md-overflow");var N=m;"MD-OPTGROUP"===(N.tagName||"").toUpperCase()&&(N=T[0]||b.firstElementChild||b,m=N),o.focusedNode=N,u.style.display="block";var _=g.getBoundingClientRect(),H=a(m);if(m){var S=l.getComputedStyle(m);H.paddingLeft=parseInt(S.paddingLeft,10)||0,H.paddingRight=parseInt(S.paddingRight,10)||0}if(k){var D=b.offsetHeight/2;b.scrollTop=H.top+H.height/2-D,y.top<D?b.scrollTop=Math.min(H.top,b.scrollTop+D-y.top):y.bottom<D&&(b.scrollTop=Math.max(H.top+H.height-_.height,b.scrollTop-D+y.bottom))}var I,O,R,L;M?(I=v.left,O=v.top+v.height,R="50% 0",O+_.height>$.bottom&&(O=v.top-_.height,R="50% 100%")):(I=v.left+H.left-H.paddingLeft+2,O=Math.floor(v.top+v.height/2-H.height/2-H.top+b.scrollTop)+2,R=H.left+v.width/2+"px "+(H.top+H.height/2-b.scrollTop)+"px 0px",L=Math.min(v.width+H.paddingLeft+H.paddingRight,C));var F=u.getBoundingClientRect(),P=Math.round(100*Math.min(v.width/_.width,1))/100,B=Math.round(100*Math.min(v.height/_.height,1))/100;return{container:{element:t.element(u),styles:{left:Math.floor(i($.left,I,$.right-F.width)),top:Math.floor(i($.top,O,$.bottom-F.height)),"min-width":L}},dropDown:{element:t.element(g),styles:{transformOrigin:R,transform:o.alreadyOpen?"":s.supplant("scale({0},{1})",[P,B])}}}}var M="$mdSelect.show() expected a target element in options.target but got '{0}'!",$=s.dom.animator;return{parent:"body",themable:!0,onShow:b,onRemove:g,hasBackdrop:!0,disableParentScroll:!0}}function r(e){return e&&t.isFunction(e.then)}function i(e,t,n){return Math.max(e,Math.min(t,n))}function a(e){return e?{left:e.offsetLeft,top:e.offsetTop,width:e.offsetWidth,height:e.offsetHeight}:{left:0,top:0,width:0,height:0}}function c(e,t){var n=!1;try{var o=e[0].style.display;e[0].style.display="block",n=t.scrollHeight>t.offsetHeight,e[0].style.display=o}finally{}return n}return o.$inject=["$mdSelect","$mdConstant","$mdUtil","$window","$q","$$rAF","$animateCss","$animate","$document"],e("$mdSelect").setDefaults({methods:["target"],options:o})}var d=8,c=0;t.module("material.components.select",["material.core","material.components.backdrop"]).directive("mdSelect",e).directive("mdSelectMenu",o).directive("mdOption",r).directive("mdOptgroup",i).provider("$mdSelect",a),e.$inject=["$mdSelect","$mdUtil","$mdTheming","$mdAria","$compile","$parse"],o.$inject=["$parse","$mdUtil","$mdTheming"],r.$inject=["$mdButtonInkRipple","$mdUtil"],a.$inject=["$$interimElementProvider"]}(),function(){function e(e,t){return["$mdUtil",function(n){return{restrict:"A",multiElement:!0,link:function(o,r,i){var a=o.$on("$md-resize-enable",function(){a(),o.$watch(i[e],function(e){!!e===t&&(n.nextTick(function(){o.$broadcast("$md-resize")}),n.dom.animator.waitTransitionEnd(r).then(function(){o.$broadcast("$md-resize")}))})})}}}]}t.module("material.components.showHide",["material.core"]).directive("ngShow",e("ngShow",!0)).directive("ngHide",e("ngHide",!1))}(),function(){function e(e,n){return function(o){function r(){return e.when(o).then(function(e){return d=e,e})}var i,a="SideNav '"+o+"' is not available!",d=e.get(o);return d||e.notFoundError(o),i={isOpen:function(){return d&&d.isOpen()},isLockedOpen:function(){return d&&d.isLockedOpen()},toggle:function(){return d?d.toggle():n.reject(a)},open:function(){return d?d.open():n.reject(a)},close:function(){return d?d.close():n.reject(a)},then:function(e){var o=d?n.when(d):r();return o.then(e||t.noop)}}}}function o(){return{restrict:"A",require:"^mdSidenav",link:function(e,t,n,o){}}}function r(e,o,r,i,a,d,c,s,l,m){function u(d,u,p,h){function f(e,t){d.isLockedOpen=e,e===t?u.toggleClass("md-locked-open",!!e):a[e?"addClass":"removeClass"](u,"md-locked-open"),w.toggleClass("md-locked-open",!!e)}function g(e){var t=o.findFocusTarget(u)||o.findFocusTarget(u,"[md-sidenav-focus]")||u,n=u.parent();return n[e?"on":"off"]("keydown",v),w[e?"on":"off"]("click",M),e&&(y=m[0].activeElement),b(e),C=l.all([e?a.enter(w,n):a.leave(w),a[e?"removeClass":"addClass"](u,"md-closed")]).then(function(){d.isOpen&&t&&t.focus()})}function b(e){var o=u.parent();e&&!$?($=o.css("overflow"),o.css("overflow","hidden")):t.isDefined($)&&(o.css("overflow",$),$=n)}function E(e){return d.isOpen==e?l.when(!0):l(function(t){d.isOpen=e,o.nextTick(function(){C.then(function(e){d.isOpen||(y&&y.focus(),y=null),t(e)})})})}function v(e){var t=e.keyCode===r.KEY_CODE.ESCAPE;return t?M(e):l.when(!0)}function M(e){return e.preventDefault(),h.close()}var $,y=null,C=l.when(!0),A=c(p.mdIsLockedOpen),T=function(){return A(d.$parent,{$media:function(t){return s.warn("$media is deprecated for is-locked-open. Use $mdMedia instead."),e(t)},$mdMedia:e})},w=o.createBackdrop(d,"md-sidenav-backdrop md-opaque ng-enter");i.inherit(w,u),u.on("$destroy",function(){w.remove(),h.destroy()}),d.$on("$destroy",function(){w.remove()}),d.$watch(T,f),d.$watch("isOpen",g),h.$toggleOpen=E}return{restrict:"E",scope:{isOpen:"=?mdIsOpen"},controller:"$mdSidenavController",compile:function(e){return e.addClass("md-closed"),e.attr("tabIndex","-1"),u}}}function i(e,t,n,o,r){var i=this;i.isOpen=function(){return!!e.isOpen},i.isLockedOpen=function(){return!!e.isLockedOpen},i.open=function(){return i.$toggleOpen(!0)},i.close=function(){return i.$toggleOpen(!1)},i.toggle=function(){return i.$toggleOpen(!e.isOpen)},i.$toggleOpen=function(t){return r.when(e.isOpen=t)},i.destroy=o.register(i,n.mdComponentId)}t.module("material.components.sidenav",["material.core","material.components.backdrop"]).factory("$mdSidenav",e).directive("mdSidenav",r).directive("mdSidenavFocus",o).controller("$mdSidenavController",i),e.$inject=["$mdComponentRegistry","$q"],r.$inject=["$mdMedia","$mdUtil","$mdConstant","$mdTheming","$animate","$compile","$parse","$log","$q","$document"],i.$inject=["$scope","$element","$attrs","$mdComponentRegistry","$q"]}(),function(){function e(e,n,o,r,i,a,d,c,s){function l(e,t){return t.tabindex||e.attr("tabindex",0),e.attr("role","slider"),o.expect(e,"aria-label"),m}function m(o,l,m,u){function p(){v(),C(),E()}function h(e){G=parseFloat(e),l.attr("aria-valuemin",e),p()}function f(e){X=parseFloat(e),l.attr("aria-valuemax",e),p()}function g(e){Q=parseFloat(e),E()}function b(e){l.attr("aria-disabled",!!e)}function E(){if(t.isDefined(m.mdDiscrete)&&!t.isUndefined(Q)){if(0>=Q){var e="Slider step value must be greater than zero when in discrete mode";throw s.error(e),new Error(e)}var o=Math.floor((X-G)/Q);if(!Z){Z=t.element("<canvas>").css("position","absolute"),V.append(Z);var r=n.getComputedStyle(V[0]);J=Z[0].getContext("2d"),J.fillStyle=r.backgroundColor||"black"}var i=M();Z[0].width=i.width,Z[0].height=i.height;for(var a,d=0;o>=d;d++)a=Math.floor(i.width*(d/o)),J.fillRect(a-1,0,2,i.height)}}function v(){ee=q[0].getBoundingClientRect()}function M(){return W(),ee}function $(e){if(!l[0].hasAttribute("disabled")){var t;e.keyCode===i.KEY_CODE.LEFT_ARROW?t=-Q:e.keyCode===i.KEY_CODE.RIGHT_ARROW&&(t=Q),t&&((e.metaKey||e.ctrlKey||e.altKey)&&(t*=4),e.preventDefault(),e.stopPropagation(),o.$evalAsync(function(){y(u.$viewValue+t)}))}}function y(e){u.$setViewValue(A(T(e)))}function C(){isNaN(u.$viewValue)&&(u.$viewValue=u.$modelValue);var e=(u.$viewValue-G)/(X-G);o.modelValue=u.$viewValue,l.attr("aria-valuenow",u.$viewValue),w(e),U.text(u.$viewValue)}function A(e){return t.isNumber(e)?Math.max(G,Math.min(X,e)):void 0}function T(e){if(t.isNumber(e)){var n=Math.round((e-G)/Q)*Q+G;return Math.round(1e3*n)/1e3}}function w(e){e=O(e);var t=100*e+"%";j.css("width",t),z.css("left",t),l.toggleClass("md-min",0===e),l.toggleClass("md-max",1===e)}function k(e){if(!P()){l.addClass("md-active"),l[0].focus(),v();var t=L(R(e.pointer.x)),n=A(T(t));o.$apply(function(){y(n),w(F(n))})}}function x(e){if(!P()){l.removeClass("md-dragging md-active");var t=L(R(e.pointer.x)),n=A(T(t));o.$apply(function(){y(n),C()})}}function N(e){P()||(te=!0,e.stopPropagation(),l.addClass("md-dragging"),S(e))}function _(e){te&&(e.stopPropagation(),S(e))}function H(e){te&&(e.stopPropagation(),te=!1)}function S(e){ne?I(e.pointer.x):D(e.pointer.x)}function D(e){o.$evalAsync(function(){y(L(R(e)))})}function I(e){var t=L(R(e)),n=A(T(t));w(R(e)),U.text(n)}function O(e){return Math.max(0,Math.min(e||0,1))}function R(e){return Math.max(0,Math.min(1,(e-ee.left)/ee.width))}function L(e){return G+e*(X-G)}function F(e){return(e-G)/(X-G)}a(l),u=u||{$setViewValue:function(e){this.$viewValue=e,this.$viewChangeListeners.forEach(function(e){e()})},$parsers:[],$formatters:[],$viewChangeListeners:[]};var P=t.noop;null!=m.disabled?P=function(){return!0}:m.ngDisabled&&(P=t.bind(null,c(m.ngDisabled),o.$parent));var B=t.element(l[0].querySelector(".md-thumb")),U=t.element(l[0].querySelector(".md-thumb-text")),z=B.parent(),q=t.element(l[0].querySelector(".md-track-container")),j=t.element(l[0].querySelector(".md-track-fill")),V=t.element(l[0].querySelector(".md-track-ticks")),W=r.throttle(v,5e3);t.isDefined(m.min)?m.$observe("min",h):h(0),t.isDefined(m.max)?m.$observe("max",f):f(100),t.isDefined(m.step)?m.$observe("step",g):g(1);var Y=t.noop;m.ngDisabled&&(Y=o.$parent.$watch(m.ngDisabled,b)),d.register(l,"drag"),l.on("keydown",$).on("$md.pressdown",k).on("$md.pressup",x).on("$md.dragstart",N).on("$md.drag",_).on("$md.dragend",H),setTimeout(p,0);var K=e.throttle(p);t.element(n).on("resize",K),o.$on("$destroy",function(){t.element(n).off("resize",K),Y()}),u.$render=C,u.$viewChangeListeners.push(C),u.$formatters.push(A),u.$formatters.push(T);var G,X,Q,Z,J,ee={};v();var te=!1,ne=t.isDefined(m.mdDiscrete)}return{scope:{},require:"?ngModel",template:'<div class="md-slider-wrapper"><div class="md-track-container"><div class="md-track"></div><div class="md-track md-track-fill"></div><div class="md-track-ticks"></div></div><div class="md-thumb-container"><div class="md-thumb"></div><div class="md-focus-thumb"></div><div class="md-focus-ring"></div><div class="md-sign"><span class="md-thumb-text"></span></div><div class="md-disabled-thumb"></div></div></div>',compile:l}}t.module("material.components.slider",["material.core"]).directive("mdSlider",e),e.$inject=["$$rAF","$window","$mdAria","$mdUtil","$mdConstant","$mdTheming","$mdGesture","$parse","$log"]}(),function(){function e(e,o,r,i){function a(e){function t(e,t){t.addClass("md-sticky-clone");var n={element:e,clone:t};return f.items.push(n),i.nextTick(function(){p.prepend(n.clone)}),h(),function(){f.items.forEach(function(t,n){t.element[0]===e[0]&&(f.items.splice(n,1),t.clone.remove())}),h()}}function a(){f.items.forEach(d),f.items=f.items.sort(function(e,t){return e.top<t.top?-1:1});for(var e,t=p.prop("scrollTop"),n=f.items.length-1;n>=0;n--)if(t>f.items[n].top){e=f.items[n];break}l(e)}function d(e){var t=e.element[0];for(e.top=0,e.left=0;t&&t!==p[0];)e.top+=t.offsetTop,e.left+=t.offsetLeft,t=t.offsetParent;e.height=e.element.prop("offsetHeight"),e.clone.css("margin-left",e.left+"px"),i.floatingScrollbars()&&e.clone.css("margin-right","0")}function s(){var e=p.prop("scrollTop"),t=e>(s.prevScrollTop||0);if(s.prevScrollTop=e,0===e)return void l(null);if(t){if(f.next&&f.next.top<=e)return void l(f.next);if(f.current&&f.next&&f.next.top-e<=f.next.height)return void u(f.current,e+(f.next.top-f.next.height-e))}if(!t){if(f.current&&f.prev&&e<f.current.top)return void l(f.prev);if(f.next&&f.current&&e>=f.next.top-f.current.height)return void u(f.current,e+(f.next.top-e-f.current.height))}f.current&&u(f.current,e)}function l(e){if(f.current!==e){f.current&&(u(f.current,null),m(f.current,null)),e&&m(e,"active"),f.current=e;var t=f.items.indexOf(e);f.next=f.items[t+1],f.prev=f.items[t-1],m(f.next,"next"),m(f.prev,"prev")}}function m(e,t){e&&e.state!==t&&(e.state&&(e.clone.attr("sticky-prev-state",e.state),e.element.attr("sticky-prev-state",e.state)),e.clone.attr("sticky-state",t),e.element.attr("sticky-state",t),e.state=t)}function u(e,t){e&&(null===t||t===n?e.translateY&&(e.translateY=null,e.clone.css(o.CSS.TRANSFORM,"")):(e.translateY=t,e.clone.css(o.CSS.TRANSFORM,"translate3d("+e.left+"px,"+t+"px,0)")))}var p=e.$element,h=r.throttle(a);c(p),p.on("$scrollstart",h),p.on("$scroll",s);var f;return f={prev:null,current:null,next:null,items:[],add:t,refreshElements:a}}function d(n){var o,r=t.element("<div>");e[0].body.appendChild(r[0]);for(var i=["sticky","-webkit-sticky"],a=0;a<i.length;++a)if(r.css({position:i[a],top:0,"z-index":2}),r.css("position")==i[a]){o=i[a];break}return r.remove(),o}function c(e){function t(){+i.now()-o>a?(n=!1,e.triggerHandler("$scrollend")):(e.triggerHandler("$scroll"),r.throttle(t))}var n,o,a=200;e.on("scroll touchmove",function(){n||(n=!0,r.throttle(t),e.triggerHandler("$scrollstart")),e.triggerHandler("$scroll"),o=+i.now()})}var s=d();return function(e,t,n){var o=t.controller("mdContent");if(o)if(s)t.css({position:s,top:0,"z-index":2});else{var r=o.$element.data("$$sticky");r||(r=a(o),o.$element.data("$$sticky",r));var i=r.add(t,n||t.clone());e.$on("$destroy",i)}}}t.module("material.components.sticky",["material.core","material.components.content"]).factory("$mdSticky",e),e.$inject=["$document","$mdConstant","$$rAF","$mdUtil"]}(),function(){function e(e,n,o,r){return{restrict:"E",replace:!0,transclude:!0,template:'<div class="md-subheader">  <div class="md-subheader-inner">    <span class="md-subheader-content"></span>  </div></div>',link:function(i,a,d,c,s){function l(e){return t.element(e[0].querySelector(".md-subheader-content"))}o(a);var m=a[0].outerHTML;s(i,function(e){l(a).append(e)}),a.hasClass("md-no-sticky")||s(i,function(t){var o='<div class="md-subheader-wrapper">'+m+"</div>",d=n(o)(i);e(i,a,d),r.nextTick(function(){l(d).append(t)})})}}}t.module("material.components.subheader",["material.core","material.components.sticky"]).directive("mdSubheader",e),e.$inject=["$mdSticky","$compile","$mdTheming","$mdUtil"]}(),function(){function e(e){function t(e){function t(t,r,i){var a=e(i[n]);r.on(o,function(e){t.$apply(function(){a(t,{$event:e})})})}return{restrict:"A",link:t}}var n="md"+e,o="$md."+e.toLowerCase();return t.$inject=["$parse"],t}t.module("material.components.swipe",["material.core"]).directive("mdSwipeLeft",e("SwipeLeft")).directive("mdSwipeRight",e("SwipeRight")).directive("mdSwipeUp",e("SwipeUp")).directive("mdSwipeDown",e("SwipeDown"))}(),function(){function e(e,n,o,r,i,a){function d(e,d){var s=c.compile(e,d);return e.addClass("md-dragging"),function(e,d,c,l){function m(t){f&&f(e)||(t.stopPropagation(),d.addClass("md-dragging"),E={width:g.prop("offsetWidth")},d.removeClass("transition"))}function u(e){if(E){e.stopPropagation(),e.srcEvent&&e.srcEvent.preventDefault();var t=e.pointer.distanceX/E.width,n=l.$viewValue?1+t:t;n=Math.max(0,Math.min(1,n)),g.css(o.CSS.TRANSFORM,"translate3d("+100*n+"%,0,0)"),E.translate=n}}function p(e){if(E){e.stopPropagation(),d.removeClass("md-dragging"),g.css(o.CSS.TRANSFORM,"");var t=l.$viewValue?E.translate>.5:E.translate<.5;t&&h(!l.$viewValue),E=null}}function h(t){e.$apply(function(){l.$setViewValue(t),l.$render()})}l=l||n.fakeNgModel();var f=null;null!=c.disabled?f=function(){return!0}:c.ngDisabled&&(f=r(c.ngDisabled));var g=t.element(d[0].querySelector(".md-thumb-container")),b=t.element(d[0].querySelector(".md-container"));i(function(){d.removeClass("md-dragging")}),s(e,d,c,l),f&&e.$watch(f,function(e){d.attr("tabindex",e?-1:0)}),a.register(b,"drag"),b.on("$md.dragstart",m).on("$md.drag",u).on("$md.dragend",p);var E}}var c=e[0];return{restrict:"E",priority:210,transclude:!0,template:'<div class="md-container"><div class="md-bar"></div><div class="md-thumb-container"><div class="md-thumb" md-ink-ripple md-ink-ripple-checkbox></div></div></div><div ng-transclude class="md-label"></div>',require:"?ngModel",compile:d}}t.module("material.components.switch",["material.core","material.components.checkbox"]).directive("mdSwitch",e),e.$inject=["mdCheckboxDirective","$mdUtil","$mdConstant","$parse","$$rAF","$mdGesture"]}(),function(){t.module("material.components.tabs",["material.core","material.components.icon"])}(),function(){function e(e){return{restrict:"E",link:function(t,n,o){t.$on("$destroy",function(){e.destroy()})}}}function n(e){function n(e){r=e}function o(e,n,o,i){function a(t,a,d){r=d.textContent||d.content;var l=!i("gt-sm");return a=o.extractElementByName(a,"md-toast",!0),d.onSwipe=function(e,t){var r=e.type.replace("$md.",""),i=r.replace("swipe","");"down"===i&&-1!=d.position.indexOf("top")&&!l||"up"===i&&(-1!=d.position.indexOf("bottom")||l)||("left"!==i&&"right"!==i||!l)&&(a.addClass("md-"+r),o.nextTick(n.cancel))},d.openClass=c(d.position),d.parent.addClass(d.openClass),o.hasComputedStyle(d.parent,"position","static")&&d.parent.css("position","relative"),a.on(s,d.onSwipe),a.addClass(l?"md-bottom":d.position.split(" ").map(function(e){return"md-"+e}).join(" ")),d.parent&&d.parent.addClass("md-toast-animating"),e.enter(a,d.parent).then(function(){d.parent&&d.parent.removeClass("md-toast-animating")})}function d(t,n,r){return n.off(s,r.onSwipe),r.parent&&r.parent.addClass("md-toast-animating"),r.openClass&&r.parent.removeClass(r.openClass),(1==r.$destroy?n.remove():e.leave(n)).then(function(){r.parent&&r.parent.removeClass("md-toast-animating"),o.hasComputedStyle(r.parent,"position","static")&&r.parent.css("position","")})}function c(e){return i("gt-sm")?"md-toast-open-"+(e.indexOf("top")>-1?"top":"bottom"):"md-toast-open-bottom"}var s="$md.swipeleft $md.swiperight $md.swipeup $md.swipedown";return{onShow:a,onRemove:d,position:"bottom left",themable:!0,hideDelay:3e3,autoWrap:!0,transformTemplate:function(e,n){var o=n.autoWrap&&e&&!/md-toast-content/g.test(e);if(o){var r=t.element(e),i='<div class="md-toast-content">'+r.html()+"</div>";return r.empty().append(i),r[0].outerHTML}return o?'<div class="md-toast-content">'+e+"</div>":e||"";
}}}var r,i="ok",a=e("$mdToast").setDefaults({methods:["position","hideDelay","capsule","parent"],options:o}).addPreset("simple",{argOption:"textContent",methods:["textContent","content","action","highlightAction","theme","parent"],options:["$mdToast","$mdTheming",function(e,t){var n={template:'<md-toast md-theme="{{ toast.theme }}" ng-class="{\'md-capsule\': toast.capsule}">  <div class="md-toast-content">    <span flex role="alert" aria-relevant="all" aria-atomic="true">      {{ toast.content }}    </span>    <md-button class="md-action" ng-if="toast.action" ng-click="toast.resolve()" ng-class="{\'md-highlight\': toast.highlightAction}">      {{ toast.action }}    </md-button>  </div></md-toast>',controller:["$scope",function(t){var n=this;t.$watch(function(){return r},function(){n.content=r}),this.resolve=function(){e.hide(i)}}],theme:t.defaultTheme(),controllerAs:"toast",bindToController:!0};return n}]}).addMethod("updateTextContent",n).addMethod("updateContent",n);return o.$inject=["$animate","$mdToast","$mdUtil","$mdMedia"],a}t.module("material.components.toast",["material.core","material.components.button"]).directive("mdToast",e).provider("$mdToast",n),e.$inject=["$mdToast"],n.$inject=["$$interimElementProvider"]}(),function(){function e(e,n,o,r,i){var a=t.bind(null,o.supplant,"translate3d(0,{0}px,0)");return{template:"",restrict:"E",link:function(d,c,s){function l(){function r(e){var t=c.parent().find("md-content");!f&&t.length&&l(null,t),e=d.$eval(e),e===!1?g():g=u()}function l(e,t){t&&c.parent()[0]===t.parent()[0]&&(f&&f.off("scroll",M),f=t,g=u())}function m(e){var t=e?e.target.scrollTop:E;$(),b=Math.min(h/v,Math.max(0,b+t-E)),c.css(n.CSS.TRANSFORM,a([-b*v])),f.css(n.CSS.TRANSFORM,a([(h-b)*v])),E=t,o.nextTick(function(){var e=c.hasClass("md-whiteframe-z1");e&&!b?i.removeClass(c,"md-whiteframe-z1"):!e&&b&&i.addClass(c,"md-whiteframe-z1")})}function u(){return f?(f.on("scroll",M),f.attr("scroll-shrink","true"),e(p),function(){f.off("scroll",M),f.attr("scroll-shrink","false"),e(p)}):t.noop}function p(){h=c.prop("offsetHeight");var e=-h*v+"px";f.css({"margin-top":e,"margin-bottom":e}),m()}var h,f,g=t.noop,b=0,E=0,v=s.mdShrinkSpeedFactor||.5,M=e.throttle(m),$=o.debounce(p,5e3);d.$on("$mdContentLoaded",l),s.$observe("mdScrollShrink",r),s.ngShow&&d.$watch(s.ngShow,p),s.ngHide&&d.$watch(s.ngHide,p),d.$on("$destroy",g)}r(c),t.isDefined(s.mdScrollShrink)&&l()}}}t.module("material.components.toolbar",["material.core","material.components.content"]).directive("mdToolbar",e),e.$inject=["$$rAF","$mdConstant","$mdUtil","$mdTheming","$animate"]}(),function(){function e(e,n,o,r,i,a,d,c,s){function l(d,l,p){function h(){t.isDefined(p.mdDelay)||(d.delay=m)}function f(){var e="center top";switch(d.direction){case"left":e="right center";break;case"right":e="left center";break;case"top":e="center bottom";break;case"bottom":e="center top"}w.css("transform-origin",e)}function g(){d.$on("$destroy",function(){d.visible=!1,l.remove(),t.element(n).off("resize",x)}),d.$watch("visible",function(e){e?$():y()}),d.$watch("direction",C)}function b(){T.attr("aria-label")||T.text().trim()||T.attr("aria-label",l.text().trim())}function E(){l.detach(),l.attr("role","tooltip")}function v(){function e(){M(!1)}var o=!1,i=t.element(n);if(T[0]&&"MutationObserver"in n){var a=new MutationObserver(function(e){e.forEach(function(e){"disabled"===e.attributeName&&T[0].disabled&&(M(!1),d.$digest())})});a.observe(T[0],{attributes:!0})}var c=function(){s=document.activeElement===T[0]},s=!1;i.on("blur",c),i.on("resize",x),document.addEventListener("scroll",e,!0),d.$on("$destroy",function(){i.off("blur",c),i.off("resize",x),document.removeEventListener("scroll",e,!0),a&&a.disconnect()});var l=function(e){return"focus"===e.type&&s?void(s=!1):(T.on("blur mouseleave touchend touchcancel",m),void M(!0))},m=function(){var e=d.hasOwnProperty("autohide")?d.autohide:p.hasOwnProperty("mdAutohide");(e||o||r[0].activeElement!==T[0])&&(T.off("blur mouseleave touchend touchcancel",m),T.triggerHandler("blur"),M(!1)),o=!1};T.on("mousedown",function(){o=!0}),T.on("focus mouseenter touchstart",l)}function M(t){M.value=!!t,M.queued||(t?(M.queued=!0,e(function(){d.visible=M.value,M.queued=!1},d.delay)):i.nextTick(function(){d.visible=!1}))}function $(){return k.append(l),i.hasComputedStyle(l,"display","none")?(d.visible=!1,void l.detach()):(C(),void t.forEach([l,w],function(e){c.addClass(e,"md-show")}))}function y(){var e=[];t.forEach([l,w],function(t){t.parent()&&t.hasClass("md-show")&&e.push(c.removeClass(t,"md-show"))}),s.all(e).then(function(){d.visible||l.detach()})}function C(){d.visible&&(f(),A())}function A(){function e(e){var t={left:e.left,top:e.top};return t.left=Math.min(t.left,k.prop("scrollWidth")-n.width-u),t.left=Math.max(t.left,u),t.top=Math.min(t.top,k.prop("scrollHeight")-n.height-u),t.top=Math.max(t.top,u),t}function t(e){return"left"===e?{left:o.left-n.width-u,top:o.top+o.height/2-n.height/2}:"right"===e?{left:o.left+o.width+u,top:o.top+o.height/2-n.height/2}:"top"===e?{left:o.left+o.width/2-n.width/2,top:o.top-n.height-u}:{left:o.left+o.width/2-n.width/2,top:o.top+o.height+u}}var n=i.offsetRect(l,k),o=i.offsetRect(T,k),r=t(d.direction),a=l.prop("offsetParent");d.direction?r=e(r):a&&r.top>a.scrollHeight-n.height-u&&(r=e(t("top"))),l.css({left:r.left+"px",top:r.top+"px"})}a(l);var T=i.getParentWithPointerEvents(l),w=t.element(l[0].getElementsByClassName("md-content")[0]),k=t.element(document.body),x=o.throttle(function(){C()});c.pin&&c.pin(l,T),h(),E(),v(),f(),g(),b()}var m=0,u=8;return{restrict:"E",transclude:!0,priority:210,template:'<div class="md-content" ng-transclude></div>',scope:{delay:"=?mdDelay",visible:"=?mdVisible",autohide:"=?mdAutohide",direction:"@?mdDirection"},link:l}}t.module("material.components.tooltip",["material.core"]).directive("mdTooltip",e),e.$inject=["$timeout","$window","$$rAF","$document","$mdUtil","$mdTheming","$rootElement","$animate","$q"]}(),function(){function e(){return{controller:o,template:n,compile:function(e,t){e.addClass("md-virtual-repeat-container").addClass(t.hasOwnProperty("mdOrientHorizontal")?"md-orient-horizontal":"md-orient-vertical")}}}function n(e){return'<div class="md-virtual-repeat-scroller"><div class="md-virtual-repeat-sizer"></div><div class="md-virtual-repeat-offsetter">'+e[0].innerHTML+"</div></div>"}function o(e,n,o,r,i,a,d,c){this.$rootScope=r,this.$scope=a,this.$element=d,this.$attrs=c,this.size=0,this.scrollSize=0,this.scrollOffset=0,this.horizontal=this.$attrs.hasOwnProperty("mdOrientHorizontal"),this.repeater=null,this.autoShrink=this.$attrs.hasOwnProperty("mdAutoShrink"),this.autoShrinkMin=parseInt(this.$attrs.mdAutoShrinkMin,10)||0,this.originalSize=null,this.offsetSize=parseInt(this.$attrs.mdOffsetSize,10)||0,this.oldElementSize=null,this.$attrs.mdTopIndex?(this.bindTopIndex=o(this.$attrs.mdTopIndex),this.topIndex=this.bindTopIndex(this.$scope),t.isDefined(this.topIndex)||(this.topIndex=0,this.bindTopIndex.assign(this.$scope,0)),this.$scope.$watch(this.bindTopIndex,t.bind(this,function(e){e!==this.topIndex&&this.scrollToIndex(e)}))):this.topIndex=0,this.scroller=d[0].getElementsByClassName("md-virtual-repeat-scroller")[0],this.sizer=this.scroller.getElementsByClassName("md-virtual-repeat-sizer")[0],this.offsetter=this.scroller.getElementsByClassName("md-virtual-repeat-offsetter")[0];var s=t.bind(this,this.updateSize);e(t.bind(this,function(){s();var e=n.debounce(s,10,null,!1),o=t.element(i);this.size||e(),o.on("resize",e),a.$on("$destroy",function(){o.off("resize",e)}),a.$emit("$md-resize-enable"),a.$on("$md-resize",s)}))}function r(e){return{controller:i,priority:1e3,require:["mdVirtualRepeat","^^mdVirtualRepeatContainer"],restrict:"A",terminal:!0,transclude:"element",compile:function(t,n){var o=n.mdVirtualRepeat,r=o.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)\s*$/),i=r[1],a=e(r[2]),d=n.mdExtraName&&e(n.mdExtraName);return function(e,t,n,o,r){o[0].link_(o[1],r,i,a,d)}}}}function i(e,n,o,r,i,a,d){this.$scope=e,this.$element=n,this.$attrs=o,this.$browser=r,this.$document=i,this.$rootScope=a,this.$$rAF=d,this.onDemand=o.hasOwnProperty("mdOnDemand"),this.browserCheckUrlChange=r.$$checkUrlChange,this.newStartIndex=0,this.newEndIndex=0,this.newVisibleEnd=0,this.startIndex=0,this.endIndex=0,this.itemSize=e.$eval(o.mdItemSize)||null,this.isFirstRender=!0,this.isVirtualRepeatUpdating_=!1,this.itemsLength=0,this.unwatchItemSize_=t.noop,this.blocks={},this.pooledBlocks=[]}function a(e){if(!t.isFunction(e.getItemAtIndex)||!t.isFunction(e.getLength))throw Error("When md-on-demand is enabled, the Object passed to md-virtual-repeat must implement functions getItemAtIndex() and getLength() ");this.model=e}t.module("material.components.virtualRepeat",["material.core","material.components.showHide"]).directive("mdVirtualRepeatContainer",e).directive("mdVirtualRepeat",r);var d=1533917,c=3;o.$inject=["$$rAF","$mdUtil","$parse","$rootScope","$window","$scope","$element","$attrs"],o.prototype.register=function(e){this.repeater=e,t.element(this.scroller).on("scroll wheel touchmove touchend",t.bind(this,this.handleScroll_))},o.prototype.isHorizontal=function(){return this.horizontal},o.prototype.getSize=function(){return this.size},o.prototype.setSize_=function(e){var t=this.getDimensionName_();this.size=e,this.$element[0].style[t]=e+"px"},o.prototype.unsetSize_=function(){this.$element[0].style[this.getDimensionName_()]=this.oldElementSize,this.oldElementSize=null},o.prototype.updateSize=function(){this.originalSize||(this.size=this.isHorizontal()?this.$element[0].clientWidth:this.$element[0].clientHeight,this.handleScroll_(),this.repeater&&this.repeater.containerUpdated())},o.prototype.getScrollSize=function(){return this.scrollSize},o.prototype.getDimensionName_=function(){return this.isHorizontal()?"width":"height"},o.prototype.sizeScroller_=function(e){var t=this.getDimensionName_(),n=this.isHorizontal()?"height":"width";if(this.sizer.innerHTML="",d>e)this.sizer.style[t]=e+"px";else{this.sizer.style[t]="auto",this.sizer.style[n]="auto";var o=Math.floor(e/d),r=document.createElement("div");r.style[t]=d+"px",r.style[n]="1px";for(var i=0;o>i;i++)this.sizer.appendChild(r.cloneNode(!1));r.style[t]=e-o*d+"px",this.sizer.appendChild(r)}},o.prototype.autoShrink_=function(e){var t=Math.max(e,this.autoShrinkMin*this.repeater.getItemSize());if(this.autoShrink&&t!==this.size){null===this.oldElementSize&&(this.oldElementSize=this.$element[0].style[this.getDimensionName_()]);var n=this.originalSize||this.size;!n||n>t?(this.originalSize||(this.originalSize=this.size),this.setSize_(t)):null!==this.originalSize&&(this.unsetSize_(),this.originalSize=null,this.updateSize()),this.repeater.containerUpdated()}},o.prototype.setScrollSize=function(e){var t=e+this.offsetSize;this.scrollSize!==t&&(this.sizeScroller_(t),this.autoShrink_(t),this.scrollSize=t)},o.prototype.getScrollOffset=function(){return this.scrollOffset},o.prototype.scrollTo=function(e){this.scroller[this.isHorizontal()?"scrollLeft":"scrollTop"]=e,this.handleScroll_()},o.prototype.scrollToIndex=function(e){var t=this.repeater.getItemSize(),n=this.repeater.itemsLength;e>n&&(e=n-1),this.scrollTo(t*e)},o.prototype.resetScroll=function(){this.scrollTo(0)},o.prototype.handleScroll_=function(){var e=this.isHorizontal()?this.scroller.scrollLeft:this.scroller.scrollTop;if(!(e===this.scrollOffset||e>this.scrollSize-this.size)){var t=this.repeater.getItemSize();if(t){var n=Math.max(0,Math.floor(e/t)-c),o=(this.isHorizontal()?"translateX(":"translateY(")+n*t+"px)";if(this.scrollOffset=e,this.offsetter.style.webkitTransform=o,this.offsetter.style.transform=o,this.bindTopIndex){var r=Math.floor(e/t);r!==this.topIndex&&r<this.repeater.getItemCount()&&(this.topIndex=r,this.bindTopIndex.assign(this.$scope,r),this.$rootScope.$$phase||this.$scope.$digest())}this.repeater.containerUpdated()}}},r.$inject=["$parse"],i.$inject=["$scope","$element","$attrs","$browser","$document","$rootScope","$$rAF"],i.Block,i.prototype.link_=function(e,n,o,r,i){this.container=e,this.transclude=n,this.repeatName=o,this.rawRepeatListExpression=r,this.extraName=i,this.sized=!1,this.repeatListExpression=t.bind(this,this.repeatListExpression_),this.container.register(this)},i.prototype.readItemSize_=function(){if(!this.itemSize){this.items=this.repeatListExpression(this.$scope),this.parentNode=this.$element[0].parentNode;var e=this.getBlock_(0);e.element[0].parentNode||this.parentNode.appendChild(e.element[0]),this.itemSize=e.element[0][this.container.isHorizontal()?"offsetWidth":"offsetHeight"]||null,this.blocks[0]=e,this.poolBlock_(0),this.itemSize&&this.containerUpdated()}},i.prototype.repeatListExpression_=function(e){var t=this.rawRepeatListExpression(e);if(this.onDemand&&t){var n=new a(t);return n.$$includeIndexes(this.newStartIndex,this.newVisibleEnd),n}return t},i.prototype.containerUpdated=function(){return this.itemSize?(this.sized||(this.items=this.repeatListExpression(this.$scope)),this.sized||(this.unwatchItemSize_(),this.sized=!0,this.$scope.$watchCollection(this.repeatListExpression,t.bind(this,function(e,t){this.isVirtualRepeatUpdating_||this.virtualRepeatUpdate_(e,t)}))),this.updateIndexes_(),void((this.newStartIndex!==this.startIndex||this.newEndIndex!==this.endIndex||this.container.getScrollOffset()>this.container.getScrollSize())&&(this.items instanceof a&&this.items.$$includeIndexes(this.newStartIndex,this.newEndIndex),this.virtualRepeatUpdate_(this.items,this.items)))):(this.unwatchItemSize_=this.$scope.$watchCollection(this.repeatListExpression,t.bind(this,function(e){e&&e.length&&this.$$rAF(t.bind(this,this.readItemSize_))})),void(this.$rootScope.$$phase||this.$scope.$digest()))},i.prototype.getItemSize=function(){return this.itemSize},i.prototype.getItemCount=function(){return this.itemsLength},i.prototype.virtualRepeatUpdate_=function(e,n){this.isVirtualRepeatUpdating_=!0;var o=e&&e.length||0,r=!1;if(this.items&&o<this.items.length&&0!==this.container.getScrollOffset())return this.items=e,void this.container.resetScroll();if(o!==this.itemsLength&&(r=!0,this.itemsLength=o),this.items=e,(e!==n||r)&&this.updateIndexes_(),this.parentNode=this.$element[0].parentNode,r&&this.container.setScrollSize(o*this.itemSize),this.isFirstRender){this.isFirstRender=!1;var i=this.$attrs.mdStartIndex?this.$scope.$eval(this.$attrs.mdStartIndex):this.container.topIndex;this.container.scrollToIndex(i)}Object.keys(this.blocks).forEach(function(e){var t=parseInt(e,10);(t<this.newStartIndex||t>=this.newEndIndex)&&this.poolBlock_(t)},this),this.$browser.$$checkUrlChange=t.noop;var a,d,c=[],s=[];for(a=this.newStartIndex;a<this.newEndIndex&&null==this.blocks[a];a++)d=this.getBlock_(a),this.updateBlock_(d,a),c.push(d);for(;null!=this.blocks[a];a++)this.updateBlock_(this.blocks[a],a);for(var l=a-1;a<this.newEndIndex;a++)d=this.getBlock_(a),this.updateBlock_(d,a),s.push(d);c.length&&this.parentNode.insertBefore(this.domFragmentFromBlocks_(c),this.$element[0].nextSibling),s.length&&this.parentNode.insertBefore(this.domFragmentFromBlocks_(s),this.blocks[l]&&this.blocks[l].element[0].nextSibling),this.$browser.$$checkUrlChange=this.browserCheckUrlChange,this.startIndex=this.newStartIndex,this.endIndex=this.newEndIndex,this.isVirtualRepeatUpdating_=!1},i.prototype.getBlock_=function(e){if(this.pooledBlocks.length)return this.pooledBlocks.pop();var n;return this.transclude(t.bind(this,function(t,o){n={element:t,"new":!0,scope:o},this.updateScope_(o,e),this.parentNode.appendChild(t[0])})),n},i.prototype.updateBlock_=function(e,t){this.blocks[t]=e,(e["new"]||e.scope.$index!==t||e.scope[this.repeatName]!==this.items[t])&&(e["new"]=!1,this.updateScope_(e.scope,t),this.$rootScope.$$phase||e.scope.$digest())},i.prototype.updateScope_=function(e,t){e.$index=t,e[this.repeatName]=this.items&&this.items[t],this.extraName&&(e[this.extraName(this.$scope)]=this.items[t])},i.prototype.poolBlock_=function(e){this.pooledBlocks.push(this.blocks[e]),this.parentNode.removeChild(this.blocks[e].element[0]),delete this.blocks[e]},i.prototype.domFragmentFromBlocks_=function(e){var t=this.$document[0].createDocumentFragment();return e.forEach(function(e){t.appendChild(e.element[0])}),t},i.prototype.updateIndexes_=function(){var e=this.items?this.items.length:0,t=Math.ceil(this.container.getSize()/this.itemSize);this.newStartIndex=Math.max(0,Math.min(e-t,Math.floor(this.container.getScrollOffset()/this.itemSize))),this.newVisibleEnd=this.newStartIndex+t+c,this.newEndIndex=Math.min(e,this.newVisibleEnd),this.newStartIndex=Math.max(0,this.newStartIndex-c)},a.prototype.$$includeIndexes=function(e,t){for(var n=e;t>n;n++)this.hasOwnProperty(n)||(this[n]=this.model.getItemAtIndex(n));this.length=this.model.getLength()}}(),function(){function e(e){function t(t,i,a){var d=parseInt(a.mdWhiteframe,10)||r;(d>o||n>d)&&(e.warn("md-whiteframe attribute value is invalid. It should be a number between "+n+" and "+o,i[0]),d=r),i.addClass("md-whiteframe-"+d+"dp")}var n=1,o=24,r=4;return{restrict:"A",link:t}}t.module("material.components.whiteframe",["material.core"]).directive("mdWhiteframe",e),e.$inject=["$log"]}(),function(){function e(e,o,d,c,s,l,m,u,p,h){function f(){d.initOptionalProperties(e,p,{searchText:null,selectedItem:null}),s(o),v(),d.nextTick(function(){$(),b(),E(),o.on("focus",E)})}function g(){function t(){var e=0,t=o.find("md-input-container");if(t.length){var n=t.find("input");e=t.prop("offsetHeight"),e-=n.prop("offsetTop"),e-=n.prop("offsetHeight"),e+=t.prop("offsetTop")}return e}function n(){var e=me.scrollContainer.getBoundingClientRect(),t={};e.right>m.right-i&&(t.left=s.right-e.width+"px"),me.$.scrollContainer.css(t)}if(!me)return d.nextTick(g,!1,e);var c,s=me.wrap.getBoundingClientRect(),l=me.snap.getBoundingClientRect(),m=me.root.getBoundingClientRect(),u=l.bottom-m.top,h=m.bottom-l.top,f=s.left-m.left,b=s.width,E=t();p.mdFloatingLabel&&(f+=a,b-=2*a),c={left:f+"px",minWidth:b+"px",maxWidth:Math.max(s.right-m.left,m.right-s.left)-i+"px"},u>h&&m.height-s.bottom-i<r?(c.top="auto",c.bottom=h+"px",c.maxHeight=Math.min(r,s.top-m.top-i)+"px"):(c.top=u-E+"px",c.bottom="auto",c.maxHeight=Math.min(r,m.bottom+d.scrollTop()-s.bottom-i)+"px"),me.$.scrollContainer.css(c),d.nextTick(n,!1)}function b(){me.$.root.length&&(s(me.$.scrollContainer),me.$.scrollContainer.detach(),me.$.root.append(me.$.scrollContainer),m.pin&&m.pin(me.$.scrollContainer,u))}function E(){e.autofocus&&me.input.focus()}function v(){var n=parseInt(e.delay,10)||0;p.$observe("disabled",function(e){ce.isDisabled=!!e}),p.$observe("required",function(e){ce.isRequired=!!e}),e.$watch("searchText",n?d.debounce(I,n):I),e.$watch("selectedItem",x),t.element(l).on("resize",g),e.$on("$destroy",M)}function M(){if(t.element(l).off("resize",g),me){var e="ul scroller scrollContainer input".split(" ");t.forEach(e,function(e){me.$[e].remove()})}}function $(){me={main:o[0],scrollContainer:o[0].getElementsByClassName("md-virtual-repeat-container")[0],scroller:o[0].getElementsByClassName("md-virtual-repeat-scroller")[0],ul:o.find("ul")[0],input:o.find("input")[0],wrap:o.find("md-autocomplete-wrap")[0],root:document.body},me.li=me.ul.getElementsByTagName("li"),me.snap=y(),me.$=C(me)}function y(){for(var e=o;e.length;e=e.parent())if(t.isDefined(e.attr("md-autocomplete-snap")))return e[0];return me.wrap}function C(e){var n={};for(var o in e)e.hasOwnProperty(o)&&(n[o]=t.element(e[o]));return n}function A(t,n){!t&&n?(g(),me&&d.nextTick(function(){d.disableScrollAround(me.ul)},!1,e)):t&&!n&&d.nextTick(function(){d.enableScrolling()},!1,e)}function T(){pe=!0}function w(){fe||me.input.focus(),pe=!1,ce.hidden=j()}function k(){me.input.focus()}function x(t,n){t&&B(t).then(function(o){e.searchText=o,H(t,n)}),t!==n&&N()}function N(){t.isFunction(e.itemChange)&&e.itemChange(U(e.selectedItem))}function _(){t.isFunction(e.textChange)&&e.textChange()}function H(e,t){he.forEach(function(n){n(e,t)})}function S(e){-1==he.indexOf(e)&&he.push(e)}function D(e){var t=he.indexOf(e);-1!=t&&he.splice(t,1)}function I(t,n){ce.index=z(),t!==n&&B(e.selectedItem).then(function(o){t!==o&&(e.selectedItem=null,t!==n&&_(),X()?ae():(ce.matches=[],q(!1),te()))})}function O(){fe=!1,pe||(ce.hidden=j())}function R(e){e&&(pe=!1,fe=!1),me.input.blur()}function L(){fe=!0,t.isString(e.searchText)||(e.searchText=""),ce.hidden=j(),ce.hidden||ae()}function F(e){switch(e.keyCode){case c.KEY_CODE.DOWN_ARROW:if(ce.loading)return;e.stopPropagation(),e.preventDefault(),ce.index=Math.min(ce.index+1,ce.matches.length-1),oe(),te();break;case c.KEY_CODE.UP_ARROW:if(ce.loading)return;e.stopPropagation(),e.preventDefault(),ce.index=ce.index<0?ce.matches.length-1:Math.max(0,ce.index-1),oe(),te();break;case c.KEY_CODE.TAB:if(w(),ce.hidden||ce.loading||ce.index<0||ce.matches.length<1)return;Z(ce.index);break;case c.KEY_CODE.ENTER:if(ce.hidden||ce.loading||ce.index<0||ce.matches.length<1)return;if(Y())return;e.stopPropagation(),e.preventDefault(),Z(ce.index);break;case c.KEY_CODE.ESCAPE:e.stopPropagation(),e.preventDefault(),J(),R(!0)}}function P(){return t.isNumber(e.minLength)?e.minLength:1}function B(t){function n(t){return t&&e.itemText?e.itemText(U(t)):null}return h.when(n(t)||t)}function U(e){if(!e)return n;var t={};return ce.itemName&&(t[ce.itemName]=e),t}function z(){return e.autoselect?0:-1}function q(e){ce.loading!=e&&(ce.loading=e),ce.hidden=j()}function j(){return ce.loading&&!W()?!0:Y()?!0:fe?!V():!0}function V(){return X()&&W()||ie()}function W(){return ce.matches.length?!0:!1}function Y(){return ce.scope.selectedItem?!0:!1}function K(){return ce.loading&&!Y()}function G(){return B(ce.matches[ce.index])}function X(){return(e.searchText||"").length>=P()}function Q(e,t,n){Object.defineProperty(ce,e,{get:function(){return n},set:function(e){var o=n;n=e,t(e,o)}})}function Z(t){d.nextTick(function(){B(ce.matches[t]).then(function(e){var t=me.$.input.controller("ngModel");t.$setViewValue(e),t.$render()})["finally"](function(){e.selectedItem=ce.matches[t],q(!1)})},!1)}function J(){q(!0),ce.index=0,ce.matches=[],e.searchText="",Z(-1);var t=document.createEvent("CustomEvent");t.initCustomEvent("input",!0,!0,{value:e.searchText}),me.input.dispatchEvent(t),me.input.focus()}function ee(n){function o(t){ue[i]=t,(n||"")===(e.searchText||"")&&(ce.matches=t,ce.hidden=j(),e.selectOnMatch&&de(),te(),g())}var r=e.$parent.$eval(le),i=n.toLowerCase();t.isArray(r)?o(r):r&&(q(!0),be=!0,d.nextTick(function(){r.success&&r.success(o),r.then&&r.then(o),r["finally"]&&r["finally"](function(){q(!1),be=!1})},!0,e))}function te(){G().then(function(e){ce.messages=[ne(),e]})}function ne(){if(ge===ce.matches.length)return"";switch(ge=ce.matches.length,ce.matches.length){case 0:return"There are no matches available.";case 1:return"There is 1 match available.";default:return"There are "+ce.matches.length+" matches available."}}function oe(){if(me.li[0]){var e=me.li[0].offsetHeight,t=e*ce.index,n=t+e,o=me.scroller.clientHeight,r=me.scroller.scrollTop;r>t?re(t):n>r+o&&re(n-o)}}function re(e){me.$.scrollContainer.controller("mdVirtualRepeatContainer").scrollTo(e)}function ie(){var e=(ce.scope.searchText||"").length;return ce.hasNotFound&&!W()&&(!ce.loading||be)&&e>=P()&&(fe||pe)&&!Y()}function ae(){var t=e.searchText||"",n=t.toLowerCase();!e.noCache&&ue[n]?(ce.matches=ue[n],te()):ee(t),ce.hidden=j()}function de(){var t=e.searchText,n=ce.matches,o=n[0];1===n.length&&B(o).then(function(e){t==e&&Z(0)})}var ce=this,se=e.itemsExpr.split(/ in /i),le=se[1],me=null,ue={},pe=!1,he=[],fe=!1,ge=0,be=!1;return Q("hidden",A,!0),ce.scope=e,ce.parent=e.$parent,ce.itemName=se[0],ce.matches=[],ce.loading=!1,ce.hidden=!0,ce.index=null,ce.messages=[],ce.id=d.nextUid(),ce.isDisabled=null,ce.isRequired=null,ce.hasNotFound=!1,ce.keydown=F,ce.blur=O,ce.focus=L,ce.clear=J,ce.select=Z,ce.listEnter=T,ce.listLeave=w,ce.mouseUp=k,ce.getCurrentDisplayValue=G,ce.registerSelectedItemWatcher=S,ce.unregisterSelectedItemWatcher=D,ce.notFoundVisible=ie,ce.loadingIsVisible=K,f()}t.module("material.components.autocomplete").controller("MdAutocompleteCtrl",e);var o=41,r=5.5*o,i=8,a=2;e.$inject=["$scope","$element","$mdUtil","$mdConstant","$mdTheming","$window","$animate","$rootElement","$attrs","$q"]}(),function(){function e(){return{controller:"MdAutocompleteCtrl",controllerAs:"$mdAutocompleteCtrl",scope:{inputName:"@mdInputName",inputMinlength:"@mdInputMinlength",inputMaxlength:"@mdInputMaxlength",searchText:"=?mdSearchText",selectedItem:"=?mdSelectedItem",itemsExpr:"@mdItems",itemText:"&mdItemText",placeholder:"@placeholder",noCache:"=?mdNoCache",selectOnMatch:"=?mdSelectOnMatch",itemChange:"&?mdSelectedItemChange",textChange:"&?mdSearchTextChange",minLength:"=?mdMinLength",delay:"=?mdDelay",autofocus:"=?mdAutofocus",floatingLabel:"@?mdFloatingLabel",autoselect:"=?mdAutoselect",menuClass:"@?mdMenuClass",inputId:"@?mdInputId"},link:function(e,t,n,o){o.hasNotFound=t.hasNotFoundTemplate,delete t.hasNotFoundTemplate},template:function(e,t){function n(){var t=e.find("md-item-template").detach(),n=t.length?t.html():e.html();return t.length||e.empty(),"<md-autocomplete-parent-scope md-autocomplete-replace>"+n+"</md-autocomplete-parent-scope>"}function o(){var t=e.find("md-not-found").detach(),n=t.length?t.html():"";return n?'<li ng-if="$mdAutocompleteCtrl.notFoundVisible()"                         md-autocomplete-parent-scope>'+n+"</li>":""}function r(){return t.mdFloatingLabel?'            <md-input-container flex ng-if="floatingLabel">              <label>{{floatingLabel}}</label>              <input type="search"                  '+(null!=c?'tabindex="'+c+'"':"")+'                  id="{{ inputId || \'fl-input-\' + $mdAutocompleteCtrl.id }}"                  name="{{inputName}}"                  autocomplete="off"                  ng-required="$mdAutocompleteCtrl.isRequired"                  ng-minlength="inputMinlength"                  ng-maxlength="inputMaxlength"                  ng-disabled="$mdAutocompleteCtrl.isDisabled"                  ng-model="$mdAutocompleteCtrl.scope.searchText"                  ng-keydown="$mdAutocompleteCtrl.keydown($event)"                  ng-blur="$mdAutocompleteCtrl.blur()"                  ng-focus="$mdAutocompleteCtrl.focus()"                  aria-owns="ul-{{$mdAutocompleteCtrl.id}}"                  aria-label="{{floatingLabel}}"                  aria-autocomplete="list"                  aria-haspopup="true"                  aria-activedescendant=""                  aria-expanded="{{!$mdAutocompleteCtrl.hidden}}"/>              <div md-autocomplete-parent-scope md-autocomplete-replace>'+d+"</div>            </md-input-container>":'            <input flex type="search"                '+(null!=c?'tabindex="'+c+'"':"")+'                id="{{ inputId || \'input-\' + $mdAutocompleteCtrl.id }}"                name="{{inputName}}"                ng-if="!floatingLabel"                autocomplete="off"                ng-required="$mdAutocompleteCtrl.isRequired"                ng-disabled="$mdAutocompleteCtrl.isDisabled"                ng-model="$mdAutocompleteCtrl.scope.searchText"                ng-keydown="$mdAutocompleteCtrl.keydown($event)"                ng-blur="$mdAutocompleteCtrl.blur()"                ng-focus="$mdAutocompleteCtrl.focus()"                placeholder="{{placeholder}}"                aria-owns="ul-{{$mdAutocompleteCtrl.id}}"                aria-label="{{placeholder}}"                aria-autocomplete="list"                aria-haspopup="true"                aria-activedescendant=""                aria-expanded="{{!$mdAutocompleteCtrl.hidden}}"/>            <button                type="button"                tabindex="-1"                ng-if="$mdAutocompleteCtrl.scope.searchText && !$mdAutocompleteCtrl.isDisabled"                ng-click="$mdAutocompleteCtrl.clear()">              <md-icon md-svg-icon="md-close"></md-icon>              <span class="md-visually-hidden">Clear</span>            </button>                '}var i=o(),a=n(),d=e.html(),c=t.tabindex;return e.hasNotFoundTemplate=!!i,t.hasOwnProperty("tabindex")||e.attr("tabindex","-1"),'        <md-autocomplete-wrap            layout="row"            ng-class="{ \'md-whiteframe-z1\': !floatingLabel, \'md-menu-showing\': !$mdAutocompleteCtrl.hidden }"            role="listbox">          '+r()+'          <md-progress-linear              class="'+(t.mdFloatingLabel?"md-inline":"")+'"              ng-if="$mdAutocompleteCtrl.loadingIsVisible()"              md-mode="indeterminate"></md-progress-linear>          <md-virtual-repeat-container              md-auto-shrink              md-auto-shrink-min="1"              ng-mouseenter="$mdAutocompleteCtrl.listEnter()"              ng-mouseleave="$mdAutocompleteCtrl.listLeave()"              ng-mouseup="$mdAutocompleteCtrl.mouseUp()"              ng-hide="$mdAutocompleteCtrl.hidden"              class="md-autocomplete-suggestions-container md-whiteframe-z1"              ng-class="{ \'md-not-found\': $mdAutocompleteCtrl.notFoundVisible() }"              role="presentation">            <ul class="md-autocomplete-suggestions"                ng-class="::menuClass"                id="ul-{{$mdAutocompleteCtrl.id}}">              <li md-virtual-repeat="item in $mdAutocompleteCtrl.matches"                  ng-class="{ selected: $index === $mdAutocompleteCtrl.index }"                  ng-click="$mdAutocompleteCtrl.select($index)"                  md-extra-name="$mdAutocompleteCtrl.itemName">                  '+a+"                  </li>"+i+'            </ul>          </md-virtual-repeat-container>        </md-autocomplete-wrap>        <aria-status            class="md-visually-hidden"            role="status"            aria-live="assertive">          <p ng-repeat="message in $mdAutocompleteCtrl.messages track by $index" ng-if="message">{{message}}</p>        </aria-status>'}}}t.module("material.components.autocomplete").directive("mdAutocomplete",e)}(),function(){function e(e,t){function n(e,n,o){return function(e,n,r){function i(n,o){c[o]=e[n],e.$watch(n,function(e){t.nextTick(function(){c[o]=e})})}function a(){var t=!1,n=!1;e.$watch(function(){n||t||(t=!0,e.$$postDigest(function(){n||c.$digest(),t=n=!1}))}),c.$watch(function(){n=!0})}var d=e.$mdAutocompleteCtrl,c=d.parent.$new(),s=d.itemName;i("$index","$index"),i("item",s),a(),o(c,function(e){n.after(e)})}}return{restrict:"AE",compile:n,terminal:!0,transclude:"element"}}t.module("material.components.autocomplete").directive("mdAutocompleteParentScope",e),e.$inject=["$compile","$mdUtil"]}(),function(){function e(e,n,o){function r(r,i){var d=null,c=null,s=o.mdHighlightFlags||"",l=e.$watch(function(e){return{term:r(e),unsafeText:i(e)}},function(e,o){(null===d||e.unsafeText!==o.unsafeText)&&(d=t.element("<div>").text(e.unsafeText).html()),(null===c||e.term!==o.term)&&(c=a(e.term,s)),n.html(d.replace(c,'<span class="highlight">$&</span>'))},!0);n.on("$destroy",l)}function i(e){return e&&e.replace(/[\\\^\$\*\+\?\.\(\)\|\{}\[\]]/g,"\\$&")}function a(e,t){var n="";return t.indexOf("^")>=1&&(n+="^"),n+=e,t.indexOf("$")>=1&&(n+="$"),new RegExp(i(n),t.replace(/[\$\^]/g,""))}this.init=r}t.module("material.components.autocomplete").controller("MdHighlightCtrl",e),e.$inject=["$scope","$element","$attrs"]}(),function(){function e(e,t){return{terminal:!0,controller:"MdHighlightCtrl",compile:function(n,o){var r=t(o.mdHighlightText),i=e(n.html());return function(e,t,n,o){o.init(r,i)}}}}t.module("material.components.autocomplete").directive("mdHighlightText",e),e.$inject=["$interpolate","$parse"]}(),function(){function e(e,o){function r(n,r){return n.append(o.processTemplate(i)),function(n,o,r,i){o.addClass("md-chip"),e(o),i&&t.element(o[0].querySelector(".md-chip-content")).on("blur",function(){i.selectedChip=-1})}}var i=o.processTemplate(n);return{restrict:"E",require:"^?mdChips",compile:r}}t.module("material.components.chips").directive("mdChip",e);var n='    <span ng-if="!$mdChipsCtrl.readonly" class="md-visually-hidden">      {{$mdChipsCtrl.deleteHint}}    </span>';e.$inject=["$mdTheming","$mdUtil"]}(),function(){
function e(e){function t(t,n,o,r){n.on("click",function(e){t.$apply(function(){r.removeChip(t.$$replacedScope.$index)})}),e(function(){n.attr({tabindex:-1,"aria-hidden":!0}),n.find("button").attr("tabindex","-1")})}return{restrict:"A",require:"^mdChips",scope:!1,link:t}}t.module("material.components.chips").directive("mdChipRemove",e),e.$inject=["$timeout"]}(),function(){function e(e){function t(t,n,o){var r=t.$parent.$mdChipsCtrl,i=r.parent.$new(!1,r.parent);i.$$replacedScope=t,i.$chip=t.$chip,i.$index=t.$index,i.$mdChipsCtrl=r;var a=r.$scope.$eval(o.mdChipTransclude);n.html(a),e(n.contents())(i)}return{restrict:"EA",terminal:!0,link:t,scope:!1}}t.module("material.components.chips").directive("mdChipTransclude",e),e.$inject=["$compile"]}(),function(){function e(e,t,n,o,r){this.$timeout=r,this.$mdConstant=t,this.$scope=e,this.parent=e.$parent,this.$log=n,this.$element=o,this.ngModelCtrl=null,this.userInputNgModelCtrl=null,this.userInputElement=null,this.items=[],this.selectedChip=-1,this.hasAutocomplete=!1,this.deleteHint="Press delete to remove this chip.",this.deleteButtonLabel="Remove",this.chipBuffer="",this.useOnAppend=!1,this.useTransformChip=!1,this.useOnAdd=!1,this.useOnRemove=!1,this.useOnSelect=!1}t.module("material.components.chips").controller("MdChipsCtrl",e),e.$inject=["$scope","$mdConstant","$log","$element","$timeout"],e.prototype.inputKeydown=function(e){var t=this.getChipBuffer();if(!(this.hasAutocomplete&&e.isDefaultPrevented&&e.isDefaultPrevented())){if(e.keyCode===this.$mdConstant.KEY_CODE.BACKSPACE){if(t)return;return e.preventDefault(),e.stopPropagation(),void(this.items.length&&this.selectAndFocusChipSafe(this.items.length-1))}if((!this.separatorKeys||this.separatorKeys.length<1)&&(this.separatorKeys=[this.$mdConstant.KEY_CODE.ENTER]),-1!==this.separatorKeys.indexOf(e.keyCode)){if(this.hasAutocomplete&&this.requireMatch||!t)return;e.preventDefault(),this.appendChip(t),this.resetChipBuffer()}}},e.prototype.chipKeydown=function(e){if(!this.getChipBuffer())switch(e.keyCode){case this.$mdConstant.KEY_CODE.BACKSPACE:case this.$mdConstant.KEY_CODE.DELETE:if(this.selectedChip<0)return;e.preventDefault(),this.removeAndSelectAdjacentChip(this.selectedChip);break;case this.$mdConstant.KEY_CODE.LEFT_ARROW:e.preventDefault(),this.selectedChip<0&&(this.selectedChip=this.items.length),this.items.length&&this.selectAndFocusChipSafe(this.selectedChip-1);break;case this.$mdConstant.KEY_CODE.RIGHT_ARROW:e.preventDefault(),this.selectAndFocusChipSafe(this.selectedChip+1);break;case this.$mdConstant.KEY_CODE.ESCAPE:case this.$mdConstant.KEY_CODE.TAB:if(this.selectedChip<0)return;e.preventDefault(),this.onFocus()}},e.prototype.getPlaceholder=function(){var e=this.items.length&&(""==this.secondaryPlaceholder||this.secondaryPlaceholder);return e?this.secondaryPlaceholder:this.placeholder},e.prototype.removeAndSelectAdjacentChip=function(e){var n=this.getAdjacentChipIndex(e);this.removeChip(e),this.$timeout(t.bind(this,function(){this.selectAndFocusChipSafe(n)}))},e.prototype.resetSelectedChip=function(){this.selectedChip=-1},e.prototype.getAdjacentChipIndex=function(e){var t=this.items.length-1;return 0==t?-1:e==t?e-1:e},e.prototype.appendChip=function(e){if(this.useTransformChip&&this.transformChip){var n=this.transformChip({$chip:e});t.isDefined(n)&&(e=n)}if(t.isObject(e)){var o=this.items.some(function(n){return t.equals(e,n)});if(o)return}if(!(null==e||this.items.indexOf(e)+1)){var r=this.items.push(e);this.useOnAdd&&this.onAdd&&this.onAdd({$chip:e,$index:r})}},e.prototype.useOnAppendExpression=function(){this.$log.warn("md-on-append is deprecated; please use md-transform-chip or md-on-add instead"),this.useTransformChip&&this.transformChip||(this.useTransformChip=!0,this.transformChip=this.onAppend)},e.prototype.useTransformChipExpression=function(){this.useTransformChip=!0},e.prototype.useOnAddExpression=function(){this.useOnAdd=!0},e.prototype.useOnRemoveExpression=function(){this.useOnRemove=!0},e.prototype.useOnSelectExpression=function(){this.useOnSelect=!0},e.prototype.getChipBuffer=function(){return this.userInputElement?this.userInputNgModelCtrl?this.userInputNgModelCtrl.$viewValue:this.userInputElement[0].value:this.chipBuffer},e.prototype.resetChipBuffer=function(){this.userInputElement?this.userInputNgModelCtrl?(this.userInputNgModelCtrl.$setViewValue(""),this.userInputNgModelCtrl.$render()):this.userInputElement[0].value="":this.chipBuffer=""},e.prototype.removeChip=function(e){var t=this.items.splice(e,1);t&&t.length&&this.useOnRemove&&this.onRemove&&this.onRemove({$chip:t[0],$index:e})},e.prototype.removeChipAndFocusInput=function(e){this.removeChip(e),this.onFocus()},e.prototype.selectAndFocusChipSafe=function(e){return this.items.length?e===this.items.length?this.onFocus():(e=Math.max(e,0),e=Math.min(e,this.items.length-1),this.selectChip(e),void this.focusChip(e)):(this.selectChip(-1),void this.onFocus())},e.prototype.selectChip=function(e){e>=-1&&e<=this.items.length?(this.selectedChip=e,this.useOnSelect&&this.onSelect&&this.onSelect({$chip:this.items[this.selectedChip]})):this.$log.warn("Selected Chip index out of bounds; ignoring.")},e.prototype.selectAndFocusChip=function(e){this.selectChip(e),-1!=e&&this.focusChip(e)},e.prototype.focusChip=function(e){this.$element[0].querySelector('md-chip[index="'+e+'"] .md-chip-content').focus()},e.prototype.configureNgModel=function(e){this.ngModelCtrl=e;var t=this;e.$render=function(){t.items=t.ngModelCtrl.$viewValue}},e.prototype.onFocus=function(){var e=this.$element[0].querySelector("input");e&&e.focus(),this.resetSelectedChip()},e.prototype.onInputFocus=function(){this.inputHasFocus=!0,this.resetSelectedChip()},e.prototype.onInputBlur=function(){this.inputHasFocus=!1},e.prototype.configureUserInput=function(e){this.userInputElement=e;var n=e.controller("ngModel");n!=this.ngModelCtrl&&(this.userInputNgModelCtrl=n);var o=this.$scope,r=this,i=function(e,n){o.$evalAsync(t.bind(r,n,e))};e.attr({tabindex:0}).on("keydown",function(e){i(e,r.inputKeydown)}).on("focus",function(e){i(e,r.onInputFocus)}).on("blur",function(e){i(e,r.onInputBlur)})},e.prototype.configureAutocomplete=function(e){e&&(this.hasAutocomplete=!0,e.registerSelectedItemWatcher(t.bind(this,function(e){e&&(this.appendChip(e),this.resetChipBuffer())})),this.$element.find("input").on("focus",t.bind(this,this.onInputFocus)).on("blur",t.bind(this,this.onInputBlur)))},e.prototype.hasFocus=function(){return this.inputHasFocus||this.selectedChip>=0}}(),function(){function e(e,t,a,d,c){function s(n,o){function r(e){if(o.ngModel){var t=i[0].querySelector(e);return t&&t.outerHTML}}var i=o.$mdUserTemplate;o.$mdUserTemplate=null;var s=r("md-chips>*[md-chip-remove]")||m.remove,l=r("md-chips>md-chip-template")||m["default"],u=r("md-chips>md-autocomplete")||r("md-chips>input")||m.input,p=i.find("md-chip");return i[0].querySelector("md-chip-template>*[md-chip-remove]")&&d.warn("invalid placement of md-chip-remove within md-chip-template."),function(n,r,i,d){t.initOptionalProperties(n,o),e(r);var h=d[0];if(h.chipContentsTemplate=l,h.chipRemoveTemplate=s,h.chipInputTemplate=u,r.attr({"aria-hidden":!0,tabindex:-1}).on("focus",function(){h.onFocus()}),o.ngModel&&(h.configureNgModel(r.controller("ngModel")),i.mdTransformChip&&h.useTransformChipExpression(),i.mdOnAppend&&h.useOnAppendExpression(),i.mdOnAdd&&h.useOnAddExpression(),i.mdOnRemove&&h.useOnRemoveExpression(),i.mdOnSelect&&h.useOnSelectExpression(),u!=m.input&&n.$watch("$mdChipsCtrl.readonly",function(e){e||t.nextTick(function(){0===u.indexOf("<md-autocomplete")&&h.configureAutocomplete(r.find("md-autocomplete").controller("mdAutocomplete")),h.configureUserInput(r.find("input"))})}),t.nextTick(function(){var e=r.find("input");e&&e.toggleClass("md-input",!0)})),p.length>0){var f=a(p.clone())(n.$parent);c(function(){r.find("md-chips-wrap").prepend(f)})}}}function l(){return{chips:t.processTemplate(n),input:t.processTemplate(o),"default":t.processTemplate(r),remove:t.processTemplate(i)}}var m=l();return{template:function(e,t){return t.$mdUserTemplate=e.clone(),m.chips},require:["mdChips"],restrict:"E",controller:"MdChipsCtrl",controllerAs:"$mdChipsCtrl",bindToController:!0,compile:s,scope:{readonly:"=readonly",placeholder:"@",secondaryPlaceholder:"@",transformChip:"&mdTransformChip",onAppend:"&mdOnAppend",onAdd:"&mdOnAdd",onRemove:"&mdOnRemove",onSelect:"&mdOnSelect",deleteHint:"@",deleteButtonLabel:"@",separatorKeys:"=?mdSeparatorKeys",requireMatch:"=?mdRequireMatch"}}}t.module("material.components.chips").directive("mdChips",e);var n='      <md-chips-wrap          ng-if="!$mdChipsCtrl.readonly || $mdChipsCtrl.items.length > 0"          ng-keydown="$mdChipsCtrl.chipKeydown($event)"          ng-class="{ \'md-focused\': $mdChipsCtrl.hasFocus(), \'md-readonly\': !$mdChipsCtrl.ngModelCtrl }"          class="md-chips">        <md-chip ng-repeat="$chip in $mdChipsCtrl.items"            index="{{$index}}"            ng-class="{\'md-focused\': $mdChipsCtrl.selectedChip == $index, \'md-readonly\': $mdChipsCtrl.readonly}">          <div class="md-chip-content"              tabindex="-1"              aria-hidden="true"              ng-focus="!$mdChipsCtrl.readonly && $mdChipsCtrl.selectChip($index)"              md-chip-transclude="$mdChipsCtrl.chipContentsTemplate"></div>          <div ng-if="!$mdChipsCtrl.readonly"               class="md-chip-remove-container"               md-chip-transclude="$mdChipsCtrl.chipRemoveTemplate"></div>        </md-chip>        <div ng-if="!$mdChipsCtrl.readonly && $mdChipsCtrl.ngModelCtrl"            class="md-chip-input-container"            md-chip-transclude="$mdChipsCtrl.chipInputTemplate"></div>        </div>      </md-chips-wrap>',o='        <input            class="md-input"            tabindex="0"            placeholder="{{$mdChipsCtrl.getPlaceholder()}}"            aria-label="{{$mdChipsCtrl.getPlaceholder()}}"            ng-model="$mdChipsCtrl.chipBuffer"            ng-focus="$mdChipsCtrl.onInputFocus()"            ng-blur="$mdChipsCtrl.onInputBlur()"            ng-keydown="$mdChipsCtrl.inputKeydown($event)">',r="      <span>{{$chip}}</span>",i='      <button          class="md-chip-remove"          ng-if="!$mdChipsCtrl.readonly"          ng-click="$mdChipsCtrl.removeChipAndFocusInput($$replacedScope.$index)"          type="button"          aria-hidden="true"          tabindex="-1">        <md-icon md-svg-icon="md-close"></md-icon>        <span class="md-visually-hidden">          {{$mdChipsCtrl.deleteButtonLabel}}        </span>      </button>';e.$inject=["$mdTheming","$mdUtil","$compile","$log","$timeout"]}(),function(){function e(){this.selectedItem=null,this.searchText=""}t.module("material.components.chips").controller("MdContactChipsCtrl",e),e.prototype.queryContact=function(e){var n=this.contactQuery({$query:e});return this.filterSelected?n.filter(t.bind(this,this.filterSelectedContacts)):n},e.prototype.itemName=function(e){return e[this.contactName]},e.prototype.filterSelectedContacts=function(e){return-1==this.contacts.indexOf(e)}}(),function(){function e(e,t){function o(n,o){return function(n,r,i,a){t.initOptionalProperties(n,o),e(r),r.attr("tabindex","-1")}}return{template:function(e,t){return n},restrict:"E",controller:"MdContactChipsCtrl",controllerAs:"$mdContactChipsCtrl",bindToController:!0,compile:o,scope:{contactQuery:"&mdContacts",placeholder:"@",secondaryPlaceholder:"@",contactName:"@mdContactName",contactImage:"@mdContactImage",contactEmail:"@mdContactEmail",contacts:"=ngModel",requireMatch:"=?mdRequireMatch",highlightFlags:"@?mdHighlightFlags"}}}t.module("material.components.chips").directive("mdContactChips",e);var n='      <md-chips class="md-contact-chips"          ng-model="$mdContactChipsCtrl.contacts"          md-require-match="$mdContactChipsCtrl.requireMatch"          md-autocomplete-snap>          <md-autocomplete              md-menu-class="md-contact-chips-suggestions"              md-selected-item="$mdContactChipsCtrl.selectedItem"              md-search-text="$mdContactChipsCtrl.searchText"              md-items="item in $mdContactChipsCtrl.queryContact($mdContactChipsCtrl.searchText)"              md-item-text="$mdContactChipsCtrl.itemName(item)"              md-no-cache="true"              md-autoselect              placeholder="{{$mdContactChipsCtrl.contacts.length == 0 ?                  $mdContactChipsCtrl.placeholder : $mdContactChipsCtrl.secondaryPlaceholder}}">            <div class="md-contact-suggestion">              <img                   ng-src="{{item[$mdContactChipsCtrl.contactImage]}}"                  alt="{{item[$mdContactChipsCtrl.contactName]}}"                  ng-if="item[$mdContactChipsCtrl.contactImage]" />              <span class="md-contact-name" md-highlight-text="$mdContactChipsCtrl.searchText"                    md-highlight-flags="{{$mdContactChipsCtrl.highlightFlags}}">                {{item[$mdContactChipsCtrl.contactName]}}              </span>              <span class="md-contact-email" >{{item[$mdContactChipsCtrl.contactEmail]}}</span>            </div>          </md-autocomplete>          <md-chip-template>            <div class="md-contact-avatar">              <img                   ng-src="{{$chip[$mdContactChipsCtrl.contactImage]}}"                  alt="{{$chip[$mdContactChipsCtrl.contactName]}}"                  ng-if="$chip[$mdContactChipsCtrl.contactImage]" />            </div>            <div class="md-contact-name">              {{$chip[$mdContactChipsCtrl.contactName]}}            </div>          </md-chip-template>      </md-chips>';e.$inject=["$mdTheming","$mdUtil"]}(),function(){function e(e,t,n){function o(o,r,i){function a(){var e=r.parent();return e.attr("aria-label")||e.text()?!0:e.parent().attr("aria-label")||e.parent().text()?!0:!1}function d(){o.svgIcon||o.svgSrc||(o.fontIcon&&r.addClass("md-font "+o.fontIcon),r.addClass(e.fontSet(o.fontSet)))}t(r),d();var c=i.alt||o.fontIcon||o.svgIcon||r.text(),s=i.$normalize(i.$attr.mdSvgIcon||i.$attr.mdSvgSrc||"");i["aria-label"]||(""==c||a()?r.text()||n.expect(r,"aria-hidden","true"):(n.expect(r,"aria-label",c),n.expect(r,"role","img"))),s&&i.$observe(s,function(t){r.empty(),t&&e(t).then(function(e){r.empty(),r.append(e)})})}return{scope:{fontSet:"@mdFontSet",fontIcon:"@mdFontIcon",svgIcon:"@mdSvgIcon",svgSrc:"@mdSvgSrc"},restrict:"E",link:o}}t.module("material.components.icon").directive("mdIcon",["$mdIcon","$mdTheming","$mdAria",e])}(),function(){function e(){}function n(e,t){this.url=e,this.viewBoxSize=t||r.defaultViewBoxSize}function o(e,n,o,r,i){function a(t){if(t=t||"",b[t])return o.when(b[t].clone());if(E.test(t))return m(t).then(c(t));-1==t.indexOf(":")&&(t="$default:"+t);var n=e[t]?s:l;return n(t).then(c(t))}function d(n){var o=t.isUndefined(n)||!(n&&n.length);if(o)return e.defaultFontSet;var r=n;return t.forEach(e.fontSets,function(e){e.alias==n&&(r=e.fontSet||r)}),r}function c(t){return function(n){return b[t]=p(n)?n:new h(n,e[t]),b[t].clone()}}function s(t){var n=e[t];return m(n.url).then(function(e){return new h(e,n)})}function l(t){function n(e){var n=t.slice(t.lastIndexOf(":")+1),o=e.querySelector("#"+n);return o?new h(o,d):i(t)}function i(e){var t="icon "+e+" not found";return r.warn(t),o.reject(t||e)}var a=t.substring(0,t.lastIndexOf(":"))||"$default",d=e[a];return d?m(d.url).then(n):i(t)}function m(e){return n.get(e,{cache:i}).then(function(e){return t.element("<div>").append(e.data).find("svg")[0]})["catch"](u)}function u(e){var n=t.isString(e)?e:e.message||e.data||e.statusText;return r.warn(n),o.reject(n)}function p(e){return t.isDefined(e.element)&&t.isDefined(e.config)}function h(e,n){e&&"svg"!=e.tagName&&(e=t.element('<svg xmlns="http://www.w3.org/2000/svg">').append(e)[0]),e.getAttribute("xmlns")||e.setAttribute("xmlns","http://www.w3.org/2000/svg"),this.element=e,this.config=n,this.prepare()}function f(){var n=this.config?this.config.viewBoxSize:e.defaultViewBoxSize;t.forEach({fit:"",height:"100%",width:"100%",preserveAspectRatio:"xMidYMid meet",viewBox:this.element.getAttribute("viewBox")||"0 0 "+n+" "+n},function(e,t){this.element.setAttribute(t,e)},this)}function g(){return this.element.cloneNode(!0)}var b={},E=/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/i;return h.prototype={clone:g,prepare:f},a.fontSet=d,a}t.module("material.components.icon").provider("$mdIcon",e);var r={defaultViewBoxSize:24,defaultFontSet:"material-icons",fontSets:[]};e.prototype={icon:function(e,t,o){return-1==e.indexOf(":")&&(e="$default:"+e),r[e]=new n(t,o),this},iconSet:function(e,t,o){return r[e]=new n(t,o),this},defaultIconSet:function(e,t){var o="$default";return r[o]||(r[o]=new n(e,t)),r[o].viewBoxSize=t||r.defaultViewBoxSize,this},defaultViewBoxSize:function(e){return r.defaultViewBoxSize=e,this},fontSet:function(e,t){return r.fontSets.push({alias:e,fontSet:t||e}),this},defaultFontSet:function(e){return r.defaultFontSet=e?e:"",this},defaultIconSize:function(e){return r.defaultIconSize=e,this},preloadIcons:function(e){var t=this,n=[{id:"md-tabs-arrow",url:"md-tabs-arrow.svg",svg:'<svg version="1.1" x="0px" y="0px" viewBox="0 0 24 24"><g><polygon points="15.4,7.4 14,6 8,12 14,18 15.4,16.6 10.8,12 "/></g></svg>'},{id:"md-close",url:"md-close.svg",svg:'<svg version="1.1" x="0px" y="0px" viewBox="0 0 24 24"><g><path d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z"/></g></svg>'},{id:"md-cancel",url:"md-cancel.svg",svg:'<svg version="1.1" x="0px" y="0px" viewBox="0 0 24 24"><g><path d="M12 2c-5.53 0-10 4.47-10 10s4.47 10 10 10 10-4.47 10-10-4.47-10-10-10zm5 13.59l-1.41 1.41-3.59-3.59-3.59 3.59-1.41-1.41 3.59-3.59-3.59-3.59 1.41-1.41 3.59 3.59 3.59-3.59 1.41 1.41-3.59 3.59 3.59 3.59z"/></g></svg>'},{id:"md-menu",url:"md-menu.svg",svg:'<svg version="1.1" x="0px" y="0px" viewBox="0 0 24 24"><path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" /></svg>'},{id:"md-toggle-arrow",url:"md-toggle-arrow-svg",svg:'<svg version="1.1" x="0px" y="0px" viewBox="0 0 48 48"><path d="M24 16l-12 12 2.83 2.83 9.17-9.17 9.17 9.17 2.83-2.83z"/><path d="M0 0h48v48h-48z" fill="none"/></svg>'},{id:"md-calendar",url:"md-calendar.svg",svg:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/></svg>'}];n.forEach(function(n){t.icon(n.id,n.url),e.put(n.url,n.svg)})},$get:["$http","$q","$log","$templateCache",function(e,t,n,i){return this.preloadIcons(i),o(r,e,t,n,i)}]},o.$inject=["config","$http","$q","$log","$templateCache"]}(),function(){function e(e,o,r,i,a,d,c,s){var l,m,u=this;this.nestLevel=parseInt(o.mdNestLevel,10)||0,this.init=function(n,o){o=o||{},l=n,m=r[0].querySelector("[ng-click],[ng-mouseenter]"),m.setAttribute("aria-expanded","false"),this.isInMenuBar=o.isInMenuBar,this.nestedMenus=a.nodesToArray(l[0].querySelectorAll(".md-nested-menu")),l.on("$mdInterimElementRemove",function(){u.isOpen=!1});var d="menu_container_"+a.nextUid();l.attr("id",d),t.element(m).attr({"aria-owns":d,"aria-haspopup":"true"}),i.$on("$destroy",this.disableHoverListener),l.on("$destroy",function(){e.destroy()})};var p,h,f=[];this.enableHoverListener=function(){f.push(c.$on("$mdMenuOpen",function(e,t){l[0].contains(t[0])&&(u.currentlyOpenMenu=t.controller("mdMenu"),u.isAlreadyOpening=!1,u.currentlyOpenMenu.registerContainerProxy(u.triggerContainerProxy.bind(u)))})),f.push(c.$on("$mdMenuClose",function(e,t){l[0].contains(t[0])&&(u.currentlyOpenMenu=n)})),h=t.element(a.nodesToArray(l[0].children[0].children)),h.on("mouseenter",u.handleMenuItemHover),h.on("mouseleave",u.handleMenuItemMouseLeave)},this.disableHoverListener=function(){for(;f.length;)f.shift()();h&&h.off("mouseenter",u.handleMenuItemHover),h&&h.off("mouseleave",u.handleMenuMouseLeave)},this.handleMenuItemHover=function(e){if(!u.isAlreadyOpening){var n=e.target.querySelector("md-menu")||a.getClosest(e.target,"MD-MENU");p=d(function(){if(n&&(n=t.element(n).controller("mdMenu")),u.currentlyOpenMenu&&u.currentlyOpenMenu!=n){var e=u.nestLevel+1;u.currentlyOpenMenu.close(!0,{closeTo:e})}else n&&!n.isOpen&&n.open&&(u.isAlreadyOpening=!0,n.open())},n?100:250);var o=e.currentTarget.querySelector("button:not([disabled])");o&&o.focus()}},this.handleMenuItemMouseLeave=function(){p&&(d.cancel(p),p=n)},this.open=function(t){t&&t.stopPropagation(),t&&t.preventDefault(),u.isOpen||(u.enableHoverListener(),u.isOpen=!0,m=m||(t?t.target:r[0]),m.setAttribute("aria-expanded","true"),i.$emit("$mdMenuOpen",r),e.show({scope:i,mdMenuCtrl:u,nestLevel:u.nestLevel,element:l,target:m,preserveElement:!0,parent:"body"})["finally"](function(){m.setAttribute("aria-expanded","false"),u.disableHoverListener()}))},i.$mdOpenMenu=this.open,i.$watch(function(){return u.isOpen},function(e){e?(l.attr("aria-hidden","false"),r[0].classList.add("md-open"),t.forEach(u.nestedMenus,function(e){e.classList.remove("md-open")})):(l.attr("aria-hidden","true"),r[0].classList.remove("md-open")),i.$mdMenuIsOpen=u.isOpen}),this.focusMenuContainer=function(){var e=l[0].querySelector("[md-menu-focus-target]");e||(e=l[0].querySelector(".md-button")),e.focus()},this.registerContainerProxy=function(e){this.containerProxy=e},this.triggerContainerProxy=function(e){this.containerProxy&&this.containerProxy(e)},this.destroy=function(){return u.isOpen?e.destroy():s.when(!1)},this.close=function(n,o){if(u.isOpen){u.isOpen=!1;var a=t.extend({},o,{skipFocus:n});if(i.$emit("$mdMenuClose",r,a),e.hide(null,o),!n){var d=u.restoreFocusTo||r.find("button")[0];d instanceof t.element&&(d=d[0]),d&&d.focus()}}},this.positionMode=function(){var e=(o.mdPositionMode||"target").split(" ");return 1==e.length&&e.push(e[0]),{left:e[0],top:e[1]}},this.offsets=function(){var e=(o.mdOffset||"0 0").split(" ").map(parseFloat);if(2==e.length)return{left:e[0],top:e[1]};if(1==e.length)return{top:e[0],left:e[0]};throw Error("Invalid offsets specified. Please follow format <x, y> or <n>")}}t.module("material.components.menu").controller("mdMenuCtrl",e),e.$inject=["$mdMenu","$attrs","$element","$scope","$mdUtil","$timeout","$rootScope","$q"]}(),function(){function e(e){function o(n){n.addClass("md-menu");var o=n.children()[0];if(o.hasAttribute("ng-click")||(o=o.querySelector("[ng-click],[ng-mouseenter]")||o),!o||"MD-BUTTON"!=o.nodeName&&"BUTTON"!=o.nodeName||o.hasAttribute("type")||o.setAttribute("type","button"),2!=n.children().length)throw Error(i+"Expected two children elements.");o&&o.setAttribute("aria-haspopup","true");var a=n[0].querySelectorAll("md-menu"),d=parseInt(n[0].getAttribute("md-nest-level"),10)||0;return a&&t.forEach(e.nodesToArray(a),function(e){e.hasAttribute("md-position-mode")||e.setAttribute("md-position-mode","cascade"),e.classList.add("md-nested-menu"),e.setAttribute("md-nest-level",d+1)}),r}function r(e,o,r,i){var a=i[0],d=i[1]!=n,c=t.element('<div class="md-open-menu-container md-whiteframe-z2"></div>'),s=o.children()[1];s.hasAttribute("role")||s.setAttribute("role","menu"),c.append(s),o.on("$destroy",function(){c.remove()}),o.append(c),c[0].style.display="none",a.init(c,{isInMenuBar:d})}var i="Invalid HTML for md-menu: ";return{restrict:"E",require:["mdMenu","?^mdMenuBar"],controller:"mdMenuCtrl",scope:!0,compile:o}}t.module("material.components.menu").directive("mdMenu",e),e.$inject=["$mdUtil"]}(),function(){function e(e){function o(e,o,a,d,c,s,l,m,u){function p(n,o,r){return r.nestLevel?t.noop:(r.disableParentScroll&&!e.getClosest(r.target,"MD-DIALOG")?r.restoreScroll=e.disableScrollAround(r.element,r.parent):r.disableParentScroll=!1,r.hasBackdrop&&(r.backdrop=e.createBackdrop(n,"md-menu-backdrop md-click-catcher"),u.enter(r.backdrop,d[0].body)),function(){r.backdrop&&r.backdrop.remove(),r.disableParentScroll&&r.restoreScroll()})}function h(e,t,n){function o(){return m(t,{addClass:"md-leave"}).start()}function r(){t.removeClass("md-active"),E(t,n),n.alreadyOpen=!1}return n.cleanupInteraction(),n.cleanupResizing(),n.hideBackdrop(),n.$destroy===!0?r():o().then(r)}function f(n,r,i){function d(){return i.parent.append(r),r[0].style.display="",s(function(e){var t=v(r,i);r.removeClass("md-leave"),m(r,{addClass:"md-active",from:M.toCss(t),to:M.toCss({transform:""})}).start().then(e)})}function u(){if(!i.target)throw Error("$mdMenu.show() expected a target to animate from in options.target");t.extend(i,{alreadyOpen:!1,isRemoved:!1,target:t.element(i.target),parent:t.element(i.parent),menuContentEl:t.element(r[0].querySelector("md-menu-content"))})}function h(){var e=function(e,t){return l.throttle(function(){if(!i.isRemoved){var n=v(e,t);e.css(M.toCss(n))}})}(r,i);return c.addEventListener("resize",e),c.addEventListener("orientationchange",e),function(){c.removeEventListener("resize",e),c.removeEventListener("orientationchange",e)}}function f(){function t(t){var n;switch(t.keyCode){case a.KEY_CODE.ESCAPE:i.mdMenuCtrl.close(!1,{closeAll:!0}),n=!0;break;case a.KEY_CODE.UP_ARROW:g(t,i.menuContentEl,i,-1)||i.nestLevel||i.mdMenuCtrl.triggerContainerProxy(t),n=!0;break;case a.KEY_CODE.DOWN_ARROW:g(t,i.menuContentEl,i,1)||i.nestLevel||i.mdMenuCtrl.triggerContainerProxy(t),n=!0;break;case a.KEY_CODE.LEFT_ARROW:i.nestLevel?i.mdMenuCtrl.close():i.mdMenuCtrl.triggerContainerProxy(t),n=!0;break;case a.KEY_CODE.RIGHT_ARROW:var o=e.getClosest(t.target,"MD-MENU");o&&o!=i.parent[0]?t.target.click():i.mdMenuCtrl.triggerContainerProxy(t),n=!0}n&&(t.preventDefault(),t.stopImmediatePropagation())}function o(e){e.preventDefault(),e.stopPropagation(),n.$apply(function(){i.mdMenuCtrl.close(!0,{closeAll:!0})})}function d(t){function o(){n.$apply(function(){i.mdMenuCtrl.close(!0,{closeAll:!0})})}function r(e,t){if(!e)return!1;for(var n,o=0;n=t[o];++o)for(var r,i=[n,"data-"+n,"x-"+n],a=0;r=i[a];++a)if(e.hasAttribute(r))return!0;return!1}var a=t.target;do{if(a==i.menuContentEl[0])return;if((r(a,["ng-click","ng-href","ui-sref"])||"BUTTON"==a.nodeName||"MD-BUTTON"==a.nodeName)&&!r(a,["md-prevent-menu-close"])){var d=e.getClosest(a,"MD-MENU");a.hasAttribute("disabled")||d&&d!=i.parent[0]||o();break}}while(a=a.parentNode)}r.addClass("md-clickable"),i.backdrop&&i.backdrop.on("click",o),i.menuContentEl.on("keydown",t),i.menuContentEl[0].addEventListener("click",d,!0);var c=i.menuContentEl[0].querySelector("[md-menu-focus-target]");if(!c){var s=i.menuContentEl[0].firstElementChild;c=s&&(s.querySelector(".md-button:not([disabled])")||s.firstElementChild)}return c&&c.focus(),function(){r.removeClass("md-clickable"),i.backdrop&&i.backdrop.off("click",o),i.menuContentEl.off("keydown",t),i.menuContentEl[0].removeEventListener("click",d,!0)}}return u(i),o.inherit(i.menuContentEl,i.target),i.cleanupResizing=h(),i.hideBackdrop=p(n,r,i),d().then(function(e){return i.alreadyOpen=!0,i.cleanupInteraction=f(),e})}function g(t,n,o,r){for(var i,a=e.getClosest(t.target,"MD-MENU-ITEM"),d=e.nodesToArray(n[0].children),c=d.indexOf(a),s=c+r;s>=0&&s<d.length;s+=r){var l=d[s].querySelector(".md-button");if(i=b(l))break}return i}function b(e){return e&&-1!=e.getAttribute("tabindex")?(e.focus(),d[0].activeElement==e):void 0}function E(e,t){t.preserveElement?r(e).style.display="none":r(e).parentNode===r(t.parent)&&r(t.parent).removeChild(r(e))}function v(t,o){function r(e){e.top=Math.max(Math.min(e.top,E.bottom-l.offsetHeight),E.top),e.left=Math.max(Math.min(e.left,E.right-l.offsetWidth),E.left)}function a(){for(var e=0;e<m.children.length;++e)if("none"!=c.getComputedStyle(m.children[e]).display)return m.children[e]}var s,l=t[0],m=t[0].firstElementChild,u=m.getBoundingClientRect(),p=d[0].body,h=p.getBoundingClientRect(),f=c.getComputedStyle(m),g=o.target[0].querySelector("[md-menu-origin]")||o.target[0],b=g.getBoundingClientRect(),E={left:h.left+i,top:Math.max(h.top,0)+i,bottom:Math.max(h.bottom,Math.max(h.top,0)+h.height)-i,right:h.right-i},v={top:0,left:0,right:0,bottom:0},M={top:0,left:0,right:0,bottom:0},$=o.mdMenuCtrl.positionMode();("target"==$.top||"target"==$.left||"target-right"==$.left)&&(s=a(),s&&(s=s.firstElementChild||s,s=s.querySelector("[md-menu-align-target]")||s,v=s.getBoundingClientRect(),M={top:parseFloat(l.style.top||0),left:parseFloat(l.style.left||0)}));var y={},C="top ";switch($.top){case"target":y.top=M.top+b.top-v.top;break;case"cascade":y.top=b.top-parseFloat(f.paddingTop)-g.style.top;break;case"bottom":y.top=b.top+b.height;break;default:throw new Error('Invalid target mode "'+$.top+'" specified for md-menu on Y axis.')}switch($.left){case"target":y.left=M.left+b.left-v.left,C+="left";break;case"target-right":y.left=b.right-u.width+(u.right-v.right),C+="right";break;case"cascade":var A=b.right+u.width<E.right;y.left=A?b.right-g.style.left:b.left-g.style.left-u.width,C+=A?"left":"right";break;case"left":y.left=b.left,C+="left";break;default:throw new Error('Invalid target mode "'+$.left+'" specified for md-menu on X axis.')}var T=o.mdMenuCtrl.offsets();y.top+=T.top,y.left+=T.left,r(y);var w=Math.round(100*Math.min(b.width/l.offsetWidth,1))/100,k=Math.round(100*Math.min(b.height/l.offsetHeight,1))/100;return{top:Math.round(y.top),left:Math.round(y.left),transform:o.alreadyOpen?n:e.supplant("scale({0},{1})",[w,k]),transformOrigin:C}}var M=e.dom.animator;return{parent:"body",onShow:f,onRemove:h,hasBackdrop:!0,disableParentScroll:!0,skipCompile:!0,preserveScope:!0,skipHide:!0,themable:!0}}function r(e){return e instanceof t.element&&(e=e[0]),e}var i=8;return o.$inject=["$mdUtil","$mdTheming","$mdConstant","$document","$window","$q","$$rAF","$animateCss","$animate"],e("$mdMenu").setDefaults({methods:["target"],options:o})}t.module("material.components.menu").provider("$mdMenu",e),e.$inject=["$$interimElementProvider"]}(),function(){function e(e,n,r,i,a,d,c,s){this.$element=r,this.$attrs=i,this.$mdConstant=a,this.$mdUtil=c,this.$document=d,this.$scope=e,this.$rootScope=n,this.$timeout=s;var l=this;t.forEach(o,function(e){l[e]=t.bind(l,l[e])})}t.module("material.components.menuBar").controller("MenuBarController",e);var o=["handleKeyDown","handleMenuHover","scheduleOpenHoveredMenu","cancelScheduledOpen"];e.$inject=["$scope","$rootScope","$element","$attrs","$mdConstant","$document","$mdUtil","$timeout"],e.prototype.init=function(){var e=this.$element,t=this.$mdUtil,o=this.$scope,r=this,i=[];e.on("keydown",this.handleKeyDown),this.parentToolbar=t.getClosest(e,"MD-TOOLBAR"),i.push(this.$rootScope.$on("$mdMenuOpen",function(t,n){-1!=r.getMenus().indexOf(n[0])&&(e[0].classList.add("md-open"),n[0].classList.add("md-open"),r.currentlyOpenMenu=n.controller("mdMenu"),r.currentlyOpenMenu.registerContainerProxy(r.handleKeyDown),r.enableOpenOnHover())})),i.push(this.$rootScope.$on("$mdMenuClose",function(o,i,a){var d=r.getMenus();if(-1!=d.indexOf(i[0])&&(e[0].classList.remove("md-open"),i[0].classList.remove("md-open")),e[0].contains(i[0])){for(var c=i[0];c&&-1==d.indexOf(c);)c=t.getClosest(c,"MD-MENU",!0);c&&(a.skipFocus||c.querySelector("button:not([disabled])").focus(),r.currentlyOpenMenu=n,r.disableOpenOnHover(),r.setKeyboardMode(!0))}})),o.$on("$destroy",function(){for(;i.length;)i.shift()()}),this.setKeyboardMode(!0)},e.prototype.setKeyboardMode=function(e){e?this.$element[0].classList.add("md-keyboard-mode"):this.$element[0].classList.remove("md-keyboard-mode")},e.prototype.enableOpenOnHover=function(){if(!this.openOnHoverEnabled){this.openOnHoverEnabled=!0;var e;(e=this.parentToolbar)&&(e.dataset.mdRestoreStyle=e.getAttribute("style"),e.style.position="relative",e.style.zIndex=100),t.element(this.getMenus()).on("mouseenter",this.handleMenuHover)}},e.prototype.handleMenuHover=function(e){this.setKeyboardMode(!1),this.openOnHoverEnabled&&this.scheduleOpenHoveredMenu(e)},e.prototype.disableOpenOnHover=function(){if(this.openOnHoverEnabled){this.openOnHoverEnabled=!1;var e;(e=this.parentToolbar)&&(e.style.cssText=e.dataset.mdRestoreStyle||""),t.element(this.getMenus()).off("mouseenter",this.handleMenuHover)}},e.prototype.scheduleOpenHoveredMenu=function(e){var n=t.element(e.currentTarget),o=n.controller("mdMenu");
this.setKeyboardMode(!1),this.scheduleOpenMenu(o)},e.prototype.scheduleOpenMenu=function(e){var t=this,o=this.$timeout;e!=t.currentlyOpenMenu&&(o.cancel(t.pendingMenuOpen),t.pendingMenuOpen=o(function(){t.pendingMenuOpen=n,t.currentlyOpenMenu&&t.currentlyOpenMenu.close(!0,{closeAll:!0}),e.open()},200,!1))},e.prototype.handleKeyDown=function(e){var n=this.$mdConstant.KEY_CODE,o=this.currentlyOpenMenu,r=o&&o.isOpen;this.setKeyboardMode(!0);var i,a,d;switch(e.keyCode){case n.DOWN_ARROW:o?o.focusMenuContainer():this.openFocusedMenu(),i=!0;break;case n.UP_ARROW:o&&o.close(),i=!0;break;case n.LEFT_ARROW:a=this.focusMenu(-1),r&&(d=t.element(a).controller("mdMenu"),this.scheduleOpenMenu(d)),i=!0;break;case n.RIGHT_ARROW:a=this.focusMenu(1),r&&(d=t.element(a).controller("mdMenu"),this.scheduleOpenMenu(d)),i=!0}i&&(e&&e.preventDefault&&e.preventDefault(),e&&e.stopImmediatePropagation&&e.stopImmediatePropagation())},e.prototype.focusMenu=function(e){var t=this.getMenus(),n=this.getFocusedMenuIndex();-1==n&&(n=this.getOpenMenuIndex());var o=!1;return-1==n?n=0:(0>e&&n>0||e>0&&n<t.length-e)&&(n+=e,o=!0),o?(t[n].querySelector("button").focus(),t[n]):void 0},e.prototype.openFocusedMenu=function(){var e=this.getFocusedMenu();e&&t.element(e).controller("mdMenu").open()},e.prototype.getMenus=function(){var e=this.$element;return this.$mdUtil.nodesToArray(e[0].children).filter(function(e){return"MD-MENU"==e.nodeName})},e.prototype.getFocusedMenu=function(){return this.getMenus()[this.getFocusedMenuIndex()]},e.prototype.getFocusedMenuIndex=function(){var e=this.$mdUtil,t=e.getClosest(this.$document[0].activeElement,"MD-MENU");if(!t)return-1;var n=this.getMenus().indexOf(t);return n},e.prototype.getOpenMenuIndex=function(){for(var e=this.getMenus(),t=0;t<e.length;++t)if(e[t].classList.contains("md-open"))return t;return-1}}(),function(){function e(e,n){return{restrict:"E",require:"mdMenuBar",controller:"MenuBarController",compile:function(o,r){return r.ariaRole||o[0].setAttribute("role","menubar"),t.forEach(o[0].children,function(n){if("MD-MENU"==n.nodeName){n.hasAttribute("md-position-mode")||(n.setAttribute("md-position-mode","left bottom"),n.querySelector("button,a").setAttribute("role","menuitem"));var o=e.nodesToArray(n.querySelectorAll("md-menu-content"));t.forEach(o,function(e){e.classList.add("md-menu-bar-menu"),e.classList.add("md-dense"),e.hasAttribute("width")||e.setAttribute("width",5)})}}),function(e,t,o,r){n(e,t),r.init()}}}}t.module("material.components.menuBar").directive("mdMenuBar",e),e.$inject=["$mdUtil","$mdTheming"]}(),function(){function e(){return{restrict:"E",compile:function(e,t){t.role||e[0].setAttribute("role","separator")}}}t.module("material.components.menuBar").directive("mdMenuDivider",e)}(),function(){function e(e,t,n){this.$element=t,this.$attrs=n,this.$scope=e}t.module("material.components.menuBar").controller("MenuItemController",e),e.$inject=["$scope","$element","$attrs"],e.prototype.init=function(e){var t=this.$element,n=this.$attrs;this.ngModel=e,("checkbox"==n.type||"radio"==n.type)&&(this.mode=n.type,this.iconEl=t[0].children[0],this.buttonEl=t[0].children[1],e&&this.initClickListeners())},e.prototype.clearNgAria=function(){var e=this.$element[0],n=["role","tabindex","aria-invalid","aria-checked"];t.forEach(n,function(t){e.removeAttribute(t)})},e.prototype.initClickListeners=function(){function e(){if("radio"==d){var e=a.ngValue?i.$eval(a.ngValue):a.value;return r.$modelValue==e}return r.$modelValue}function n(e){e?s.off("click",l):s.on("click",l)}var o=this,r=this.ngModel,i=this.$scope,a=this.$attrs,d=(this.$element,this.mode);this.handleClick=t.bind(this,this.handleClick);var c=this.iconEl,s=t.element(this.buttonEl),l=this.handleClick;a.$observe("disabled",n),n(a.disabled),r.$render=function(){o.clearNgAria(),e()?(c.style.display="",s.attr("aria-checked","true")):(c.style.display="none",s.attr("aria-checked","false"))},i.$$postDigest(r.$render)},e.prototype.handleClick=function(e){var t,n=this.mode,o=this.ngModel,r=this.$attrs;"checkbox"==n?t=!o.$modelValue:"radio"==n&&(t=r.ngValue?this.$scope.$eval(r.ngValue):r.value),o.$setViewValue(t),o.$render()}}(),function(){function e(){return{require:["mdMenuItem","?ngModel"],priority:210,compile:function(e,n){function o(n,o,r){r=r||e,r instanceof t.element&&(r=r[0]),r.hasAttribute(n)||r.setAttribute(n,o)}function r(t){if(e[0].hasAttribute(t)){var n=e[0].getAttribute(t);a[0].setAttribute(t,n),e[0].removeAttribute(t)}}if("checkbox"==n.type||"radio"==n.type){var i=e[0].textContent,a=t.element('<md-button type="button"></md-button>');a.html(i),a.attr("tabindex","0"),e.html(""),e.append(t.element('<md-icon md-svg-icon="check"></md-icon>')),e.append(a),e[0].classList.add("md-indent"),o("role","checkbox"==n.type?"menuitemcheckbox":"menuitemradio",a),t.forEach(["ng-disabled"],r)}else o("role","menuitem",e[0].querySelector("md-button,button,a"));return function(e,t,n,o){var r=o[0],i=o[1];r.init(i)}},controller:"MenuItemController"}}t.module("material.components.menuBar").directive("mdMenuItem",e)}(),function(){function e(){function e(e,o,r,i){if(i){var a=i.getTabElementIndex(o),d=n(o,"md-tab-body").remove(),c=n(o,"md-tab-label").remove(),s=i.insertTab({scope:e,parent:e.$parent,index:a,element:o,template:d.html(),label:c.html()},a);e.select=e.select||t.noop,e.deselect=e.deselect||t.noop,e.$watch("active",function(e){e&&i.select(s.getIndex())}),e.$watch("disabled",function(){i.refreshIndex()}),e.$watch(function(){return i.getTabElementIndex(o)},function(e){s.index=e,i.updateTabOrder()}),e.$on("$destroy",function(){i.removeTab(s)})}}function n(e,n){for(var o=e[0].children,r=0,i=o.length;i>r;r++){var a=o[r];if(a.tagName===n.toUpperCase())return t.element(a)}return t.element()}return{require:"^?mdTabs",terminal:!0,compile:function(o,r){var i=n(o,"md-tab-label"),a=n(o,"md-tab-body");if(0==i.length&&(i=t.element("<md-tab-label></md-tab-label>"),r.label?i.text(r.label):i.append(o.contents()),0==a.length)){var d=o.contents().detach();a=t.element("<md-tab-body></md-tab-body>"),a.append(d)}return o.append(i),a.html()&&o.append(a),e},scope:{active:"=?mdActive",disabled:"=?ngDisabled",select:"&?mdOnSelect",deselect:"&?mdOnDeselect"}}}t.module("material.components.tabs").directive("mdTab",e)}(),function(){function e(){return{require:"^?mdTabs",link:function(e,t,n,o){o&&o.attachRipple(e,t)}}}t.module("material.components.tabs").directive("mdTabItem",e)}(),function(){function e(){return{terminal:!0}}t.module("material.components.tabs").directive("mdTabLabel",e)}(),function(){function e(e){return{restrict:"A",compile:function(t,n){var o=e(n.mdTabScroll,null,!0);return function(e,t){t.on("mousewheel",function(t){e.$apply(function(){o(e,{$event:t})})})}}}}t.module("material.components.tabs").directive("mdTabScroll",e),e.$inject=["$parse"]}(),function(){function e(e,o,r,i,a,d,c,s,l,m){function u(){ce.selectedIndex=ce.selectedIndex||0,p(),f(),h(),m(o),d.nextTick(function(){oe(),J(),re(),ce.tabs[ce.selectedIndex]&&ce.tabs[ce.selectedIndex].scope.select(),pe=!0,Y()})}function p(){var e=s.$mdTabsTemplate,n=t.element(le.data);n.html(e),l(n.contents())(ce.parent),delete s.$mdTabsTemplate}function h(){t.element(r).on("resize",I),e.$on("$destroy",E)}function f(){e.$watch("$mdTabsCtrl.selectedIndex",w)}function g(e,t){var n=s.$normalize("md-"+e);t&&W(e,t),s.$observe(n,function(t){ce[e]=t})}function b(e,t){function n(t){ce[e]="false"!==t}var o=s.$normalize("md-"+e);t&&W(e,t),s.hasOwnProperty(o)&&n(s[o]),s.$observe(o,n)}function E(){ue=!0,t.element(r).off("resize",I)}function v(e){t.element(le.wrapper).toggleClass("md-stretch-tabs",z()),re()}function M(e){ce.shouldCenterTabs=q()}function $(e,n){e!==n&&(t.forEach(le.tabs,function(t){t.style.maxWidth=e+"px"}),d.nextTick(ce.updateInkBarStyles))}function y(e,t){e!==t&&(ce.maxTabWidth=G(),ce.shouldCenterTabs=q(),d.nextTick(function(){ce.maxTabWidth=G(),J(ce.selectedIndex)}))}function C(e){o[e?"removeClass":"addClass"]("md-no-tab-content")}function A(n){var o=ce.shouldCenterTabs?"":"-"+n+"px";t.element(le.paging).css(i.CSS.TRANSFORM,"translate3d("+o+", 0, 0)"),e.$broadcast("$mdTabsPaginationChanged")}function T(e,t){e!==t&&le.tabs[e]&&(J(),Z())}function w(t,n){t!==n&&(ce.selectedIndex=V(t),ce.lastSelectedIndex=n,ce.updateInkBarStyles(),oe(),J(t),e.$broadcast("$mdTabsChanged"),ce.tabs[n]&&ce.tabs[n].scope.deselect(),ce.tabs[t]&&ce.tabs[t].scope.select())}function k(e){var t=o[0].getElementsByTagName("md-tab");return Array.prototype.indexOf.call(t,e[0])}function x(){x.watcher||(x.watcher=e.$watch(function(){d.nextTick(function(){x.watcher&&o.prop("offsetParent")&&(x.watcher(),x.watcher=null,I())},!1)}))}function N(e){switch(e.keyCode){case i.KEY_CODE.LEFT_ARROW:e.preventDefault(),Q(-1,!0);break;case i.KEY_CODE.RIGHT_ARROW:e.preventDefault(),Q(1,!0);break;case i.KEY_CODE.SPACE:case i.KEY_CODE.ENTER:e.preventDefault(),se||(ce.selectedIndex=ce.focusIndex)}ce.lastClick=!1}function _(e){se||(ce.focusIndex=ce.selectedIndex=e),ce.lastClick=!0,d.nextTick(function(){ce.tabs[e].element.triggerHandler("click")},!1)}function H(e){ce.shouldPaginate&&(e.preventDefault(),ce.offsetLeft=ae(ce.offsetLeft-e.wheelDelta))}function S(){var e,t,n=le.canvas.clientWidth,o=n+ce.offsetLeft;for(e=0;e<le.tabs.length&&(t=le.tabs[e],!(t.offsetLeft+t.offsetWidth>o));e++);ce.offsetLeft=ae(t.offsetLeft)}function D(){var e,t;for(e=0;e<le.tabs.length&&(t=le.tabs[e],!(t.offsetLeft+t.offsetWidth>=ce.offsetLeft));e++);ce.offsetLeft=ae(t.offsetLeft+t.offsetWidth-le.canvas.clientWidth)}function I(){ce.lastSelectedIndex=ce.selectedIndex,ce.offsetLeft=ae(ce.offsetLeft),d.nextTick(function(){ce.updateInkBarStyles(),Y()})}function O(e){t.element(le.inkBar).toggleClass("ng-hide",e)}function R(e){o.toggleClass("md-dynamic-height",e)}function L(e){if(!ue){var t=ce.selectedIndex,n=ce.tabs.splice(e.getIndex(),1)[0];ne(),ce.selectedIndex===t&&(n.scope.deselect(),ce.tabs[ce.selectedIndex]&&ce.tabs[ce.selectedIndex].scope.select()),d.nextTick(function(){Y(),ce.offsetLeft=ae(ce.offsetLeft)})}}function F(e,n){var o=pe,r={getIndex:function(){return ce.tabs.indexOf(i)},isActive:function(){return this.getIndex()===ce.selectedIndex},isLeft:function(){return this.getIndex()<ce.selectedIndex},isRight:function(){return this.getIndex()>ce.selectedIndex},shouldRender:function(){return!ce.noDisconnect||this.isActive()},hasFocus:function(){return!ce.lastClick&&ce.hasFocus&&this.getIndex()===ce.focusIndex},id:d.nextUid()},i=t.extend(r,e);return t.isDefined(n)?ce.tabs.splice(n,0,i):ce.tabs.push(i),ee(),te(),d.nextTick(function(){Y(),o&&ce.autoselect&&d.nextTick(function(){d.nextTick(function(){_(ce.tabs.indexOf(i))})})}),i}function P(){var e={};return e.wrapper=o[0].getElementsByTagName("md-tabs-wrapper")[0],e.data=o[0].getElementsByTagName("md-tab-data")[0],e.canvas=e.wrapper.getElementsByTagName("md-tabs-canvas")[0],e.paging=e.canvas.getElementsByTagName("md-pagination-wrapper")[0],e.tabs=e.paging.getElementsByTagName("md-tab-item"),e.dummies=e.canvas.getElementsByTagName("md-dummy-tab"),e.inkBar=e.paging.getElementsByTagName("md-ink-bar")[0],e.contentsWrapper=o[0].getElementsByTagName("md-tabs-content-wrapper")[0],e.contents=e.contentsWrapper.getElementsByTagName("md-tab-content"),e}function B(){return ce.offsetLeft>0}function U(){var e=le.tabs[le.tabs.length-1];return e&&e.offsetLeft+e.offsetWidth>le.canvas.clientWidth+ce.offsetLeft}function z(){switch(ce.stretchTabs){case"always":return!0;case"never":return!1;default:return!ce.shouldPaginate&&r.matchMedia("(max-width: 600px)").matches}}function q(){return ce.centerTabs&&!ce.shouldPaginate}function j(){if(ce.noPagination||!pe)return!1;var e=o.prop("clientWidth");return t.forEach(P().dummies,function(t){e-=t.offsetWidth}),0>e}function V(e){if(-1===e)return-1;var t,n,o=Math.max(ce.tabs.length-e,e);for(t=0;o>=t;t++){if(n=ce.tabs[e+t],n&&n.scope.disabled!==!0)return n.getIndex();if(n=ce.tabs[e-t],n&&n.scope.disabled!==!0)return n.getIndex()}return e}function W(e,t,n){Object.defineProperty(ce,e,{get:function(){return n},set:function(e){var o=n;n=e,t&&t(e,o)}})}function Y(){z()||K(),ce.maxTabWidth=G(),ce.shouldPaginate=j()}function K(){var e=1;t.forEach(P().dummies,function(t){e+=Math.ceil(t.getBoundingClientRect().width)}),t.element(le.paging).css("width",e+"px")}function G(){return o.prop("clientWidth")}function X(){var e=ce.tabs[ce.selectedIndex],t=ce.tabs[ce.focusIndex];ce.tabs=ce.tabs.sort(function(e,t){return e.index-t.index}),ce.selectedIndex=ce.tabs.indexOf(e),ce.focusIndex=ce.tabs.indexOf(t)}function Q(e,t){var n,o=t?"focusIndex":"selectedIndex",r=ce[o];for(n=r+e;ce.tabs[n]&&ce.tabs[n].scope.disabled;n+=e);ce.tabs[n]&&(ce[o]=n)}function Z(){P().dummies[ce.focusIndex].focus()}function J(e){if(null==e&&(e=ce.focusIndex),le.tabs[e]&&!ce.shouldCenterTabs){var t=le.tabs[e],n=t.offsetLeft,o=t.offsetWidth+n;ce.offsetLeft=Math.max(ce.offsetLeft,ae(o-le.canvas.clientWidth+64)),ce.offsetLeft=Math.min(ce.offsetLeft,ae(n))}}function ee(){me.forEach(function(e){d.nextTick(e)}),me=[]}function te(){var e=!1;t.forEach(ce.tabs,function(t){t.template&&(e=!0)}),ce.hasContent=e}function ne(){ce.selectedIndex=V(ce.selectedIndex),ce.focusIndex=V(ce.focusIndex)}function oe(){if(!ce.dynamicHeight)return o.css("height","");if(!ce.tabs.length)return me.push(oe);var e=le.contents[ce.selectedIndex],t=e?e.offsetHeight:0,r=le.wrapper.offsetHeight,i=t+r,a=o.prop("clientHeight");if(a!==i){"bottom"===o.attr("md-align-tabs")&&(a-=r,i-=r,o.attr("md-border-bottom")!==n&&++a),se=!0;var s={height:a+"px"},l={height:i+"px"};o.css(s),c(o,{from:s,to:l,easing:"cubic-bezier(0.35, 0, 0.25, 1)",duration:.5}).start().done(function(){o.css({transition:"none",height:""}),d.nextTick(function(){o.css("transition","")}),se=!1})}}function re(){if(!le.tabs[ce.selectedIndex])return void t.element(le.inkBar).css({left:"auto",right:"auto"});if(!ce.tabs.length)return me.push(ce.updateInkBarStyles);if(!o.prop("offsetParent"))return x();var e,n=ce.selectedIndex,r=le.paging.offsetWidth,i=le.tabs[n],a=i.offsetLeft,c=r-a-i.offsetWidth;ce.shouldCenterTabs&&(e=Array.prototype.slice.call(le.tabs).reduce(function(e,t){return e+t.offsetWidth},0),r>e&&d.nextTick(re,!1)),ie(),t.element(le.inkBar).css({left:a+"px",right:c+"px"})}function ie(){var e=ce.selectedIndex,n=ce.lastSelectedIndex,o=t.element(le.inkBar);t.isNumber(n)&&o.toggleClass("md-left",n>e).toggleClass("md-right",e>n)}function ae(e){if(!le.tabs.length||!ce.shouldPaginate)return 0;var t=le.tabs[le.tabs.length-1],n=t.offsetLeft+t.offsetWidth;return e=Math.max(0,e),e=Math.min(n-le.canvas.clientWidth,e)}function de(e,n){var o={colorElement:t.element(le.inkBar)};a.attach(e,n,o)}var ce=this,se=!1,le=P(),me=[],ue=!1,pe=!1;g("stretchTabs",v),W("focusIndex",T,ce.selectedIndex||0),W("offsetLeft",A,0),W("hasContent",C,!1),W("maxTabWidth",$,G()),W("shouldPaginate",y,!1),b("noInkBar",O),b("dynamicHeight",R),b("noPagination"),b("swipeContent"),b("noDisconnect"),b("autoselect"),b("centerTabs",M,!1),b("enableDisconnect"),ce.scope=e,ce.parent=e.$parent,ce.tabs=[],ce.lastSelectedIndex=null,ce.hasFocus=!1,ce.lastClick=!0,ce.shouldCenterTabs=q(),ce.updatePagination=d.debounce(Y,100),ce.redirectFocus=Z,ce.attachRipple=de,ce.insertTab=F,ce.removeTab=L,ce.select=_,ce.scroll=H,ce.nextPage=S,ce.previousPage=D,ce.keydown=N,ce.canPageForward=U,ce.canPageBack=B,ce.refreshIndex=ne,ce.incrementIndex=Q,ce.getTabElementIndex=k,ce.updateInkBarStyles=d.debounce(re,100),ce.updateTabOrder=d.debounce(X,100),u()}t.module("material.components.tabs").controller("MdTabsController",e),e.$inject=["$scope","$element","$window","$mdConstant","$mdTabInkRipple","$mdUtil","$animateCss","$attrs","$compile","$mdTheming"]}(),function(){function e(){return{scope:{selectedIndex:"=?mdSelected"},template:function(e,t){return t.$mdTabsTemplate=e.html(),'<md-tabs-wrapper> <md-tab-data></md-tab-data> <md-prev-button tabindex="-1" role="button" aria-label="Previous Page" aria-disabled="{{!$mdTabsCtrl.canPageBack()}}" ng-class="{ \'md-disabled\': !$mdTabsCtrl.canPageBack() }" ng-if="$mdTabsCtrl.shouldPaginate" ng-click="$mdTabsCtrl.previousPage()"> <md-icon md-svg-icon="md-tabs-arrow"></md-icon> </md-prev-button> <md-next-button tabindex="-1" role="button" aria-label="Next Page" aria-disabled="{{!$mdTabsCtrl.canPageForward()}}" ng-class="{ \'md-disabled\': !$mdTabsCtrl.canPageForward() }" ng-if="$mdTabsCtrl.shouldPaginate" ng-click="$mdTabsCtrl.nextPage()"> <md-icon md-svg-icon="md-tabs-arrow"></md-icon> </md-next-button> <md-tabs-canvas tabindex="{{ $mdTabsCtrl.hasFocus ? -1 : 0 }}" aria-activedescendant="tab-item-{{$mdTabsCtrl.tabs[$mdTabsCtrl.focusIndex].id}}" ng-focus="$mdTabsCtrl.redirectFocus()" ng-class="{ \'md-paginated\': $mdTabsCtrl.shouldPaginate, \'md-center-tabs\': $mdTabsCtrl.shouldCenterTabs }" ng-keydown="$mdTabsCtrl.keydown($event)" role="tablist"> <md-pagination-wrapper ng-class="{ \'md-center-tabs\': $mdTabsCtrl.shouldCenterTabs }" md-tab-scroll="$mdTabsCtrl.scroll($event)"> <md-tab-item tabindex="-1" class="md-tab" ng-repeat="tab in $mdTabsCtrl.tabs" role="tab" aria-controls="tab-content-{{::tab.id}}" aria-selected="{{tab.isActive()}}" aria-disabled="{{tab.scope.disabled || \'false\'}}" ng-click="$mdTabsCtrl.select(tab.getIndex())" ng-class="{ \'md-active\':    tab.isActive(), \'md-focused\':   tab.hasFocus(), \'md-disabled\':  tab.scope.disabled }" ng-disabled="tab.scope.disabled" md-swipe-left="$mdTabsCtrl.nextPage()" md-swipe-right="$mdTabsCtrl.previousPage()" md-tabs-template="::tab.label" md-scope="::tab.parent"></md-tab-item> <md-ink-bar></md-ink-bar> </md-pagination-wrapper> <div class="md-visually-hidden md-dummy-wrapper"> <md-dummy-tab class="md-tab" tabindex="-1" id="tab-item-{{::tab.id}}" role="tab" aria-controls="tab-content-{{::tab.id}}" aria-selected="{{tab.isActive()}}" aria-disabled="{{tab.scope.disabled || \'false\'}}" ng-focus="$mdTabsCtrl.hasFocus = true" ng-blur="$mdTabsCtrl.hasFocus = false" ng-repeat="tab in $mdTabsCtrl.tabs" md-tabs-template="::tab.label" md-scope="::tab.parent"></md-dummy-tab> </div> </md-tabs-canvas> </md-tabs-wrapper> <md-tabs-content-wrapper ng-show="$mdTabsCtrl.hasContent && $mdTabsCtrl.selectedIndex >= 0"> <md-tab-content id="tab-content-{{::tab.id}}" role="tabpanel" aria-labelledby="tab-item-{{::tab.id}}" md-swipe-left="$mdTabsCtrl.swipeContent && $mdTabsCtrl.incrementIndex(1)" md-swipe-right="$mdTabsCtrl.swipeContent && $mdTabsCtrl.incrementIndex(-1)" ng-if="$mdTabsCtrl.hasContent" ng-repeat="(index, tab) in $mdTabsCtrl.tabs" ng-class="{ \'md-no-transition\': $mdTabsCtrl.lastSelectedIndex == null, \'md-active\':        tab.isActive(), \'md-left\':          tab.isLeft(), \'md-right\':         tab.isRight(), \'md-no-scroll\':     $mdTabsCtrl.dynamicHeight }"> <div md-tabs-template="::tab.template" md-connected-if="tab.isActive()" md-scope="::tab.parent" ng-if="$mdTabsCtrl.enableDisconnect || tab.shouldRender()"></div> </md-tab-content> </md-tabs-content-wrapper>'},controller:"MdTabsController",controllerAs:"$mdTabsCtrl",bindToController:!0}}t.module("material.components.tabs").directive("mdTabs",e)}(),function(){function e(e,t){function n(n,o,r,i){function a(){n.$watch("connected",function(e){e===!1?d():c()}),n.$on("$destroy",c)}function d(){i.enableDisconnect&&t.disconnectScope(s)}function c(){i.enableDisconnect&&t.reconnectScope(s)}if(i){var s=i.enableDisconnect?n.compileScope.$new():n.compileScope;return o.html(n.template),e(o.contents())(s),o.on("DOMSubtreeModified",function(){i.updatePagination(),i.updateInkBarStyles()}),t.nextTick(a)}}return{restrict:"A",link:n,scope:{template:"=mdTabsTemplate",connected:"=?mdConnectedIf",compileScope:"=mdScope"},require:"^?mdTabs"}}t.module("material.components.tabs").directive("mdTabsTemplate",e),e.$inject=["$compile","$mdUtil"]}(),function(){t.module("material.core").constant("$MD_THEME_CSS","md-autocomplete.md-THEME_NAME-theme {  background: '{{background-50}}'; }  md-autocomplete.md-THEME_NAME-theme[disabled] {    background: '{{background-100}}'; }  md-autocomplete.md-THEME_NAME-theme button md-icon path {    fill: '{{background-600}}'; }  md-autocomplete.md-THEME_NAME-theme button:after {    background: '{{background-600-0.3}}'; }.md-autocomplete-suggestions-container.md-THEME_NAME-theme {  background: '{{background-50}}'; }  .md-autocomplete-suggestions-container.md-THEME_NAME-theme li {    color: '{{background-900}}'; }    .md-autocomplete-suggestions-container.md-THEME_NAME-theme li .highlight {      color: '{{background-600}}'; }    .md-autocomplete-suggestions-container.md-THEME_NAME-theme li:hover, .md-autocomplete-suggestions-container.md-THEME_NAME-theme li.selected {      background: '{{background-200}}'; }md-backdrop {  background-color: '{{background-900-0.0}}'; }  md-backdrop.md-opaque.md-THEME_NAME-theme {    background-color: '{{background-900-1.0}}'; }md-bottom-sheet.md-THEME_NAME-theme {  background-color: '{{background-50}}';  border-top-color: '{{background-300}}'; }  md-bottom-sheet.md-THEME_NAME-theme.md-list md-list-item {    color: '{{foreground-1}}'; }  md-bottom-sheet.md-THEME_NAME-theme .md-subheader {    background-color: '{{background-50}}'; }  md-bottom-sheet.md-THEME_NAME-theme .md-subheader {    color: '{{foreground-1}}'; }a.md-button.md-THEME_NAME-theme:not([disabled]):hover,.md-button.md-THEME_NAME-theme:not([disabled]):hover {  background-color: '{{background-500-0.2}}'; }a.md-button.md-THEME_NAME-theme:not([disabled]).md-focused,.md-button.md-THEME_NAME-theme:not([disabled]).md-focused {  background-color: '{{background-500-0.2}}'; }a.md-button.md-THEME_NAME-theme:not([disabled]).md-icon-button:hover,.md-button.md-THEME_NAME-theme:not([disabled]).md-icon-button:hover {  background-color: transparent; }a.md-button.md-THEME_NAME-theme.md-fab,.md-button.md-THEME_NAME-theme.md-fab {  background-color: '{{accent-color}}';  color: '{{accent-contrast}}'; }  a.md-button.md-THEME_NAME-theme.md-fab md-icon,  .md-button.md-THEME_NAME-theme.md-fab md-icon {    color: '{{accent-contrast}}'; }  a.md-button.md-THEME_NAME-theme.md-fab:not([disabled]):hover,  .md-button.md-THEME_NAME-theme.md-fab:not([disabled]):hover {    background-color: '{{accent-color}}'; }  a.md-button.md-THEME_NAME-theme.md-fab:not([disabled]).md-focused,  .md-button.md-THEME_NAME-theme.md-fab:not([disabled]).md-focused {    background-color: '{{accent-A700}}'; }a.md-button.md-THEME_NAME-theme.md-primary,.md-button.md-THEME_NAME-theme.md-primary {  color: '{{primary-color}}'; }  a.md-button.md-THEME_NAME-theme.md-primary.md-raised, a.md-button.md-THEME_NAME-theme.md-primary.md-fab,  .md-button.md-THEME_NAME-theme.md-primary.md-raised,  .md-button.md-THEME_NAME-theme.md-primary.md-fab {    color: '{{primary-contrast}}';    background-color: '{{primary-color}}'; }    a.md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]) md-icon, a.md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]) md-icon,    .md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]) md-icon,    .md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]) md-icon {      color: '{{primary-contrast}}'; }    a.md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]):hover, a.md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]):hover,    .md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]):hover,    .md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]):hover {      background-color: '{{primary-color}}'; }    a.md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]).md-focused, a.md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]).md-focused,    .md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]).md-focused,    .md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]).md-focused {      background-color: '{{primary-600}}'; }  a.md-button.md-THEME_NAME-theme.md-primary:not([disabled]) md-icon,  .md-button.md-THEME_NAME-theme.md-primary:not([disabled]) md-icon {    color: '{{primary-color}}'; }a.md-button.md-THEME_NAME-theme.md-fab,.md-button.md-THEME_NAME-theme.md-fab {  background-color: '{{accent-color}}';  color: '{{accent-contrast}}'; }  a.md-button.md-THEME_NAME-theme.md-fab:not([disabled]) .md-icon,  .md-button.md-THEME_NAME-theme.md-fab:not([disabled]) .md-icon {    color: '{{accent-contrast}}'; }  a.md-button.md-THEME_NAME-theme.md-fab:not([disabled]):hover,  .md-button.md-THEME_NAME-theme.md-fab:not([disabled]):hover {    background-color: '{{accent-color}}'; }  a.md-button.md-THEME_NAME-theme.md-fab:not([disabled]).md-focused,  .md-button.md-THEME_NAME-theme.md-fab:not([disabled]).md-focused {    background-color: '{{accent-A700}}'; }a.md-button.md-THEME_NAME-theme.md-raised,.md-button.md-THEME_NAME-theme.md-raised {  color: '{{background-900}}';  background-color: '{{background-50}}'; }  a.md-button.md-THEME_NAME-theme.md-raised:not([disabled]) md-icon,  .md-button.md-THEME_NAME-theme.md-raised:not([disabled]) md-icon {    color: '{{background-900}}'; }  a.md-button.md-THEME_NAME-theme.md-raised:not([disabled]):hover,  .md-button.md-THEME_NAME-theme.md-raised:not([disabled]):hover {    background-color: '{{background-50}}'; }  a.md-button.md-THEME_NAME-theme.md-raised:not([disabled]).md-focused,  .md-button.md-THEME_NAME-theme.md-raised:not([disabled]).md-focused {    background-color: '{{background-200}}'; }a.md-button.md-THEME_NAME-theme.md-warn,.md-button.md-THEME_NAME-theme.md-warn {  color: '{{warn-color}}'; }  a.md-button.md-THEME_NAME-theme.md-warn.md-raised, a.md-button.md-THEME_NAME-theme.md-warn.md-fab,  .md-button.md-THEME_NAME-theme.md-warn.md-raised,  .md-button.md-THEME_NAME-theme.md-warn.md-fab {    color: '{{warn-contrast}}';    background-color: '{{warn-color}}'; }    a.md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]) md-icon, a.md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]) md-icon,    .md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]) md-icon,    .md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]) md-icon {      color: '{{warn-contrast}}'; }    a.md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]):hover, a.md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]):hover,    .md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]):hover,    .md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]):hover {      background-color: '{{warn-color}}'; }    a.md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]).md-focused, a.md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]).md-focused,    .md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]).md-focused,    .md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]).md-focused {      background-color: '{{warn-700}}'; }  a.md-button.md-THEME_NAME-theme.md-warn:not([disabled]) md-icon,  .md-button.md-THEME_NAME-theme.md-warn:not([disabled]) md-icon {    color: '{{warn-color}}'; }a.md-button.md-THEME_NAME-theme.md-accent,.md-button.md-THEME_NAME-theme.md-accent {  color: '{{accent-color}}'; }  a.md-button.md-THEME_NAME-theme.md-accent.md-raised, a.md-button.md-THEME_NAME-theme.md-accent.md-fab,  .md-button.md-THEME_NAME-theme.md-accent.md-raised,  .md-button.md-THEME_NAME-theme.md-accent.md-fab {    color: '{{accent-contrast}}';    background-color: '{{accent-color}}'; }    a.md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]) md-icon, a.md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]) md-icon,    .md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]) md-icon,    .md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]) md-icon {      color: '{{accent-contrast}}'; }    a.md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]):hover, a.md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]):hover,    .md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]):hover,    .md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]):hover {      background-color: '{{accent-color}}'; }    a.md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]).md-focused, a.md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]).md-focused,    .md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]).md-focused,    .md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]).md-focused {      background-color: '{{accent-700}}'; }  a.md-button.md-THEME_NAME-theme.md-accent:not([disabled]) md-icon,  .md-button.md-THEME_NAME-theme.md-accent:not([disabled]) md-icon {    color: '{{accent-color}}'; }a.md-button.md-THEME_NAME-theme[disabled], a.md-button.md-THEME_NAME-theme.md-raised[disabled], a.md-button.md-THEME_NAME-theme.md-fab[disabled], a.md-button.md-THEME_NAME-theme.md-accent[disabled], a.md-button.md-THEME_NAME-theme.md-warn[disabled],.md-button.md-THEME_NAME-theme[disabled],.md-button.md-THEME_NAME-theme.md-raised[disabled],.md-button.md-THEME_NAME-theme.md-fab[disabled],.md-button.md-THEME_NAME-theme.md-accent[disabled],.md-button.md-THEME_NAME-theme.md-warn[disabled] {  color: '{{foreground-3}}' !important;  cursor: default; }  a.md-button.md-THEME_NAME-theme[disabled] md-icon, a.md-button.md-THEME_NAME-theme.md-raised[disabled] md-icon, a.md-button.md-THEME_NAME-theme.md-fab[disabled] md-icon, a.md-button.md-THEME_NAME-theme.md-accent[disabled] md-icon, a.md-button.md-THEME_NAME-theme.md-warn[disabled] md-icon,  .md-button.md-THEME_NAME-theme[disabled] md-icon,  .md-button.md-THEME_NAME-theme.md-raised[disabled] md-icon,  .md-button.md-THEME_NAME-theme.md-fab[disabled] md-icon,  .md-button.md-THEME_NAME-theme.md-accent[disabled] md-icon,  .md-button.md-THEME_NAME-theme.md-warn[disabled] md-icon {    color: '{{foreground-3}}'; }a.md-button.md-THEME_NAME-theme.md-raised[disabled], a.md-button.md-THEME_NAME-theme.md-fab[disabled],.md-button.md-THEME_NAME-theme.md-raised[disabled],.md-button.md-THEME_NAME-theme.md-fab[disabled] {  background-color: '{{foreground-4}}'; }a.md-button.md-THEME_NAME-theme[disabled],.md-button.md-THEME_NAME-theme[disabled] {  background-color: transparent; }md-card.md-THEME_NAME-theme {  background-color: '{{background-color}}';  border-radius: 2px; }  md-card.md-THEME_NAME-theme .md-card-image {    border-radius: 2px 2px 0 0; }  md-card.md-THEME_NAME-theme md-card-header md-card-avatar md-icon {    color: '{{background-color}}';    background-color: '{{foreground-3}}'; }  md-card.md-THEME_NAME-theme md-card-header md-card-header-text .md-subhead {    color: '{{foreground-2}}'; }  md-card.md-THEME_NAME-theme md-card-title md-card-title-text:not(:only-child) .md-subhead {    color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme .md-ripple {  color: '{{accent-600}}'; }md-checkbox.md-THEME_NAME-theme.md-checked .md-ripple {  color: '{{background-600}}'; }md-checkbox.md-THEME_NAME-theme.md-checked.md-focused .md-container:before {  background-color: '{{accent-color-0.26}}'; }md-checkbox.md-THEME_NAME-theme .md-ink-ripple {  color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme.md-checked .md-ink-ripple {  color: '{{accent-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme .md-icon {  border-color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme.md-checked .md-icon {  background-color: '{{accent-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme.md-checked .md-icon:after {  border-color: '{{accent-contrast-0.87}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary .md-ripple {  color: '{{primary-600}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-ripple {  color: '{{background-600}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary .md-ink-ripple {  color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-ink-ripple {  color: '{{primary-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary .md-icon {  border-color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-icon {  background-color: '{{primary-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked.md-focused .md-container:before {  background-color: '{{primary-color-0.26}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-icon:after {  border-color: '{{primary-contrast-0.87}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn .md-ripple {  color: '{{warn-600}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn .md-ink-ripple {  color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-ink-ripple {  color: '{{warn-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn .md-icon {  border-color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-icon {  background-color: '{{warn-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked.md-focused:not([disabled]) .md-container:before {  background-color: '{{warn-color-0.26}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-icon:after {  border-color: '{{background-200}}'; }md-checkbox.md-THEME_NAME-theme[disabled] .md-icon {  border-color: '{{foreground-3}}'; }md-checkbox.md-THEME_NAME-theme[disabled].md-checked .md-icon {  background-color: '{{foreground-3}}'; }md-checkbox.md-THEME_NAME-theme[disabled].md-checked .md-icon:after {  border-color: '{{background-200}}'; }md-checkbox.md-THEME_NAME-theme[disabled] .md-label {  color: '{{foreground-3}}'; }md-chips.md-THEME_NAME-theme .md-chips {  box-shadow: 0 1px '{{background-300}}'; }  md-chips.md-THEME_NAME-theme .md-chips.md-focused {    box-shadow: 0 2px '{{primary-color}}'; }md-chips.md-THEME_NAME-theme .md-chip {  background: '{{background-300}}';  color: '{{background-800}}'; }  md-chips.md-THEME_NAME-theme .md-chip.md-focused {    background: '{{primary-color}}';    color: '{{primary-contrast}}'; }    md-chips.md-THEME_NAME-theme .md-chip.md-focused md-icon {      color: '{{primary-contrast}}'; }md-chips.md-THEME_NAME-theme md-chip-remove .md-button md-icon path {  fill: '{{background-500}}'; }.md-contact-suggestion span.md-contact-email {  color: '{{background-400}}'; }md-content.md-THEME_NAME-theme {  color: '{{foreground-1}}';  background-color: '{{background-color}}'; }/** Theme styles for mdCalendar. */.md-calendar.md-THEME_NAME-theme {  color: '{{foreground-1}}'; }  .md-calendar.md-THEME_NAME-theme tr:last-child td {    border-bottom-color: '{{background-200}}'; }.md-THEME_NAME-theme .md-calendar-day-header {  background: '{{background-hue-1}}';  color: '{{foreground-1}}'; }.md-THEME_NAME-theme .md-calendar-date.md-calendar-date-today .md-calendar-date-selection-indicator {  border: 1px solid '{{primary-500}}'; }.md-THEME_NAME-theme .md-calendar-date.md-calendar-date-today.md-calendar-date-disabled {  color: '{{primary-500-0.6}}'; }.md-THEME_NAME-theme .md-calendar-date.md-focus .md-calendar-date-selection-indicator {  background: '{{background-hue-1}}'; }.md-THEME_NAME-theme .md-calendar-date-selection-indicator:hover {  background: '{{background-hue-1}}'; }.md-THEME_NAME-theme .md-calendar-date.md-calendar-selected-date .md-calendar-date-selection-indicator,.md-THEME_NAME-theme .md-calendar-date.md-focus.md-calendar-selected-date .md-calendar-date-selection-indicator {  background: '{{primary-500}}';  color: '{{primary-500-contrast}}';  border-color: transparent; }.md-THEME_NAME-theme .md-calendar-date-disabled,.md-THEME_NAME-theme .md-calendar-month-label-disabled {  color: '{{foreground-3}}'; }/** Theme styles for mdDatepicker. */md-datepicker.md-THEME_NAME-theme {  background: '{{background-color}}'; }.md-THEME_NAME-theme .md-datepicker-input {  color: '{{background-contrast}}';  background: '{{background-color}}'; }  .md-THEME_NAME-theme .md-datepicker-input::-webkit-input-placeholder, .md-THEME_NAME-theme .md-datepicker-input::-moz-placeholder, .md-THEME_NAME-theme .md-datepicker-input:-moz-placeholder, .md-THEME_NAME-theme .md-datepicker-input:-ms-input-placeholder {    color: \"{{foreground-3}}\"; }.md-THEME_NAME-theme .md-datepicker-input-container {  border-bottom-color: '{{background-300}}'; }  .md-THEME_NAME-theme .md-datepicker-input-container.md-datepicker-focused {    border-bottom-color: '{{primary-500}}'; }  .md-THEME_NAME-theme .md-datepicker-input-container.md-datepicker-invalid {    border-bottom-color: '{{warn-A700}}'; }.md-THEME_NAME-theme .md-datepicker-calendar-pane {  border-color: '{{background-300}}'; }.md-THEME_NAME-theme .md-datepicker-triangle-button .md-datepicker-expand-triangle {  border-top-color: '{{foreground-3}}'; }.md-THEME_NAME-theme .md-datepicker-triangle-button:hover .md-datepicker-expand-triangle {  border-top-color: '{{foreground-2}}'; }.md-THEME_NAME-theme .md-datepicker-open .md-datepicker-calendar-icon {  fill: '{{primary-500}}'; }.md-THEME_NAME-theme .md-datepicker-calendar,.md-THEME_NAME-theme .md-datepicker-input-mask-opaque {  background: '{{background-color}}'; }md-dialog.md-THEME_NAME-theme {  border-radius: 4px;  background-color: '{{background-color}}'; }  md-dialog.md-THEME_NAME-theme.md-content-overflow .md-actions, md-dialog.md-THEME_NAME-theme.md-content-overflow md-dialog-actions {    border-top-color: '{{foreground-4}}'; }md-divider.md-THEME_NAME-theme {  border-top-color: '{{foreground-4}}'; }.layout-row > md-divider.md-THEME_NAME-theme {  border-right-color: '{{foreground-4}}'; }md-icon.md-THEME_NAME-theme {  color: '{{foreground-2}}'; }  md-icon.md-THEME_NAME-theme.md-primary {    color: '{{primary-color}}'; }  md-icon.md-THEME_NAME-theme.md-accent {    color: '{{accent-color}}'; }  md-icon.md-THEME_NAME-theme.md-warn {    color: '{{warn-color}}'; }md-input-container.md-THEME_NAME-theme .md-input {  color: '{{foreground-1}}';  border-color: '{{foreground-4}}';  text-shadow: '{{foreground-shadow}}'; }  md-input-container.md-THEME_NAME-theme .md-input::-webkit-input-placeholder, md-input-container.md-THEME_NAME-theme .md-input::-moz-placeholder, md-input-container.md-THEME_NAME-theme .md-input:-moz-placeholder, md-input-container.md-THEME_NAME-theme .md-input:-ms-input-placeholder {    color: \"{{foreground-3}}\"; }md-input-container.md-THEME_NAME-theme > md-icon {  color: '{{foreground-1}}'; }md-input-container.md-THEME_NAME-theme label,md-input-container.md-THEME_NAME-theme .md-placeholder {  text-shadow: '{{foreground-shadow}}';  color: '{{foreground-3}}'; }md-input-container.md-THEME_NAME-theme ng-messages :not(.md-char-counter), md-input-container.md-THEME_NAME-theme [ng-messages] :not(.md-char-counter),md-input-container.md-THEME_NAME-theme ng-message :not(.md-char-counter), md-input-container.md-THEME_NAME-theme data-ng-message :not(.md-char-counter), md-input-container.md-THEME_NAME-theme x-ng-message :not(.md-char-counter),md-input-container.md-THEME_NAME-theme [ng-message] :not(.md-char-counter), md-input-container.md-THEME_NAME-theme [data-ng-message] :not(.md-char-counter), md-input-container.md-THEME_NAME-theme [x-ng-message] :not(.md-char-counter),md-input-container.md-THEME_NAME-theme [ng-message-exp] :not(.md-char-counter), md-input-container.md-THEME_NAME-theme [data-ng-message-exp] :not(.md-char-counter), md-input-container.md-THEME_NAME-theme [x-ng-message-exp] :not(.md-char-counter) {  color: '{{warn-A700}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-has-value label {  color: '{{foreground-2}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused .md-input {  border-color: '{{primary-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused label {  color: '{{primary-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused md-icon {  color: '{{primary-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-accent .md-input {  border-color: '{{accent-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-accent label {  color: '{{accent-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-warn .md-input {  border-color: '{{warn-A700}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-warn label {  color: '{{warn-A700}}'; }md-input-container.md-THEME_NAME-theme.md-input-invalid .md-input {  border-color: '{{warn-A700}}'; }md-input-container.md-THEME_NAME-theme.md-input-invalid.md-input-focused label {  color: '{{warn-A700}}'; }md-input-container.md-THEME_NAME-theme.md-input-invalid ng-message, md-input-container.md-THEME_NAME-theme.md-input-invalid data-ng-message, md-input-container.md-THEME_NAME-theme.md-input-invalid x-ng-message,md-input-container.md-THEME_NAME-theme.md-input-invalid [ng-message], md-input-container.md-THEME_NAME-theme.md-input-invalid [data-ng-message], md-input-container.md-THEME_NAME-theme.md-input-invalid [x-ng-message],md-input-container.md-THEME_NAME-theme.md-input-invalid [ng-message-exp], md-input-container.md-THEME_NAME-theme.md-input-invalid [data-ng-message-exp], md-input-container.md-THEME_NAME-theme.md-input-invalid [x-ng-message-exp],md-input-container.md-THEME_NAME-theme.md-input-invalid .md-char-counter {  color: '{{warn-A700}}'; }md-input-container.md-THEME_NAME-theme .md-input[disabled],md-input-container.md-THEME_NAME-theme .md-input [disabled] {  border-bottom-color: transparent;  color: '{{foreground-3}}';  background-image: linear-gradient(to right, \"{{foreground-3}}\" 0%, \"{{foreground-3}}\" 33%, transparent 0%);  background-image: -ms-linear-gradient(left, transparent 0%, \"{{foreground-3}}\" 100%); }md-list.md-THEME_NAME-theme md-list-item.md-2-line .md-list-item-text h3, md-list.md-THEME_NAME-theme md-list-item.md-2-line .md-list-item-text h4,md-list.md-THEME_NAME-theme md-list-item.md-3-line .md-list-item-text h3,md-list.md-THEME_NAME-theme md-list-item.md-3-line .md-list-item-text h4 {  color: '{{foreground-1}}'; }md-list.md-THEME_NAME-theme md-list-item.md-2-line .md-list-item-text p,md-list.md-THEME_NAME-theme md-list-item.md-3-line .md-list-item-text p {  color: '{{foreground-2}}'; }md-list.md-THEME_NAME-theme .md-proxy-focus.md-focused div.md-no-style {  background-color: '{{background-100}}'; }md-list.md-THEME_NAME-theme md-list-item > .md-avatar-icon {  background-color: '{{foreground-3}}';  color: '{{background-color}}'; }md-list.md-THEME_NAME-theme md-list-item > md-icon {  color: '{{foreground-2}}'; }  md-list.md-THEME_NAME-theme md-list-item > md-icon.md-highlight {    color: '{{primary-color}}'; }    md-list.md-THEME_NAME-theme md-list-item > md-icon.md-highlight.md-accent {      color: '{{accent-color}}'; }md-menu-content.md-THEME_NAME-theme {  background-color: '{{background-color}}'; }  md-menu-content.md-THEME_NAME-theme md-menu-divider {    background-color: '{{foreground-4}}'; }md-menu-bar.md-THEME_NAME-theme > button.md-button {  color: '{{foreground-2}}';  border-radius: 2px; }md-menu-bar.md-THEME_NAME-theme md-menu.md-open > button, md-menu-bar.md-THEME_NAME-theme md-menu > button:focus {  outline: none;  background: '{{background-200}}'; }md-menu-bar.md-THEME_NAME-theme.md-open:not(.md-keyboard-mode) md-menu:hover > button {  background-color: '{{ background-500-0.2}}'; }md-menu-bar.md-THEME_NAME-theme:not(.md-keyboard-mode):not(.md-open) md-menu button:hover,md-menu-bar.md-THEME_NAME-theme:not(.md-keyboard-mode):not(.md-open) md-menu button:focus {  background: transparent; }md-menu-content.md-THEME_NAME-theme .md-menu > .md-button:after {  color: '{{foreground-2}}'; }md-menu-content.md-THEME_NAME-theme .md-menu.md-open > .md-button {  background-color: '{{ background-500-0.2}}'; }md-toolbar.md-THEME_NAME-theme.md-menu-toolbar {  background-color: '{{background-color}}';  color: '{{foreground-1}}'; }  md-toolbar.md-THEME_NAME-theme.md-menu-toolbar md-toolbar-filler {    background-color: '{{primary-color}}';    color: '{{primary-contrast}}'; }    md-toolbar.md-THEME_NAME-theme.md-menu-toolbar md-toolbar-filler md-icon {      color: '{{primary-contrast}}'; }md-progress-circular.md-THEME_NAME-theme {  background-color: transparent; }  md-progress-circular.md-THEME_NAME-theme .md-inner .md-gap {    border-top-color: '{{primary-color}}';    border-bottom-color: '{{primary-color}}'; }  md-progress-circular.md-THEME_NAME-theme .md-inner .md-left .md-half-circle, md-progress-circular.md-THEME_NAME-theme .md-inner .md-right .md-half-circle {    border-top-color: '{{primary-color}}'; }  md-progress-circular.md-THEME_NAME-theme .md-inner .md-right .md-half-circle {    border-right-color: '{{primary-color}}'; }  md-progress-circular.md-THEME_NAME-theme .md-inner .md-left .md-half-circle {    border-left-color: '{{primary-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-warn .md-inner .md-gap {    border-top-color: '{{warn-color}}';    border-bottom-color: '{{warn-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-warn .md-inner .md-left .md-half-circle, md-progress-circular.md-THEME_NAME-theme.md-warn .md-inner .md-right .md-half-circle {    border-top-color: '{{warn-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-warn .md-inner .md-right .md-half-circle {    border-right-color: '{{warn-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-warn .md-inner .md-left .md-half-circle {    border-left-color: '{{warn-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-accent .md-inner .md-gap {    border-top-color: '{{accent-color}}';    border-bottom-color: '{{accent-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-accent .md-inner .md-left .md-half-circle, md-progress-circular.md-THEME_NAME-theme.md-accent .md-inner .md-right .md-half-circle {    border-top-color: '{{accent-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-accent .md-inner .md-right .md-half-circle {    border-right-color: '{{accent-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-accent .md-inner .md-left .md-half-circle {    border-left-color: '{{accent-color}}'; }md-progress-linear.md-THEME_NAME-theme .md-container {  background-color: '{{primary-100}}'; }md-progress-linear.md-THEME_NAME-theme .md-bar {  background-color: '{{primary-color}}'; }md-progress-linear.md-THEME_NAME-theme.md-warn .md-container {  background-color: '{{warn-100}}'; }md-progress-linear.md-THEME_NAME-theme.md-warn .md-bar {  background-color: '{{warn-color}}'; }md-progress-linear.md-THEME_NAME-theme.md-accent .md-container {  background-color: '{{accent-100}}'; }md-progress-linear.md-THEME_NAME-theme.md-accent .md-bar {  background-color: '{{accent-color}}'; }md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-warn .md-bar1 {  background-color: '{{warn-100}}'; }md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-warn .md-dashed:before {  background: radial-gradient(\"{{warn-100}}\" 0%, \"{{warn-100}}\" 16%, transparent 42%); }md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-accent .md-bar1 {  background-color: '{{accent-100}}'; }md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-accent .md-dashed:before {  background: radial-gradient(\"{{accent-100}}\" 0%, \"{{accent-100}}\" 16%, transparent 42%); }md-radio-button.md-THEME_NAME-theme .md-off {  border-color: '{{foreground-2}}'; }md-radio-button.md-THEME_NAME-theme .md-on {  background-color: '{{accent-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme.md-checked .md-off {  border-color: '{{accent-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme.md-checked .md-ink-ripple {  color: '{{accent-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme .md-container .md-ripple {  color: '{{accent-600}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary .md-on, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary .md-on,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary .md-on,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary .md-on {  background-color: '{{primary-color-0.87}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary .md-checked .md-off, md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary.md-checked .md-off, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary .md-checked .md-off, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-off,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary .md-checked .md-off,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary.md-checked .md-off,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary .md-checked .md-off,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-off {  border-color: '{{primary-color-0.87}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary .md-checked .md-ink-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary.md-checked .md-ink-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary .md-checked .md-ink-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-ink-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary .md-checked .md-ink-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary.md-checked .md-ink-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary .md-checked .md-ink-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-ink-ripple {  color: '{{primary-color-0.87}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary .md-container .md-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary .md-container .md-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary .md-container .md-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary .md-container .md-ripple {  color: '{{primary-600}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn .md-on, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn .md-on,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn .md-on,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn .md-on {  background-color: '{{warn-color-0.87}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn .md-checked .md-off, md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn.md-checked .md-off, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn .md-checked .md-off, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-off,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn .md-checked .md-off,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn.md-checked .md-off,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn .md-checked .md-off,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-off {  border-color: '{{warn-color-0.87}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn .md-checked .md-ink-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn.md-checked .md-ink-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn .md-checked .md-ink-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-ink-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn .md-checked .md-ink-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn.md-checked .md-ink-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn .md-checked .md-ink-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-ink-ripple {  color: '{{warn-color-0.87}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn .md-container .md-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn .md-container .md-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn .md-container .md-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn .md-container .md-ripple {  color: '{{warn-600}}'; }md-radio-group.md-THEME_NAME-theme[disabled],md-radio-button.md-THEME_NAME-theme[disabled] {  color: '{{foreground-3}}'; }  md-radio-group.md-THEME_NAME-theme[disabled] .md-container .md-off,  md-radio-button.md-THEME_NAME-theme[disabled] .md-container .md-off {    border-color: '{{foreground-3}}'; }  md-radio-group.md-THEME_NAME-theme[disabled] .md-container .md-on,  md-radio-button.md-THEME_NAME-theme[disabled] .md-container .md-on {    border-color: '{{foreground-3}}'; }md-radio-group.md-THEME_NAME-theme .md-checked .md-ink-ripple {  color: '{{accent-color-0.26}}'; }md-radio-group.md-THEME_NAME-theme.md-primary .md-checked:not([disabled]) .md-ink-ripple, md-radio-group.md-THEME_NAME-theme .md-checked:not([disabled]).md-primary .md-ink-ripple {  color: '{{primary-color-0.26}}'; }md-radio-group.md-THEME_NAME-theme .md-checked.md-primary .md-ink-ripple {  color: '{{warn-color-0.26}}'; }md-radio-group.md-THEME_NAME-theme.md-focused:not(:empty) .md-checked .md-container:before {  background-color: '{{accent-color-0.26}}'; }md-radio-group.md-THEME_NAME-theme.md-focused:not(:empty).md-primary .md-checked .md-container:before,md-radio-group.md-THEME_NAME-theme.md-focused:not(:empty) .md-checked.md-primary .md-container:before {  background-color: '{{primary-color-0.26}}'; }md-radio-group.md-THEME_NAME-theme.md-focused:not(:empty).md-warn .md-checked .md-container:before,md-radio-group.md-THEME_NAME-theme.md-focused:not(:empty) .md-checked.md-warn .md-container:before {  background-color: '{{warn-color-0.26}}'; }md-select.md-THEME_NAME-theme[disabled] .md-select-value {  border-bottom-color: transparent;  background-image: linear-gradient(to right, \"{{foreground-3}}\" 0%, \"{{foreground-3}}\" 33%, transparent 0%);  background-image: -ms-linear-gradient(left, transparent 0%, \"{{foreground-3}}\" 100%); }md-select.md-THEME_NAME-theme .md-select-value {  border-bottom-color: '{{foreground-4}}'; }  md-select.md-THEME_NAME-theme .md-select-value.md-select-placeholder {    color: '{{foreground-3}}'; }md-select.md-THEME_NAME-theme.ng-invalid.ng-dirty .md-select-value {  color: '{{warn-A700}}' !important;  border-bottom-color: '{{warn-A700}}' !important; }md-select.md-THEME_NAME-theme:not([disabled]):focus .md-select-value {  border-bottom-color: '{{primary-color}}';  color: '{{ foreground-1 }}'; }  md-select.md-THEME_NAME-theme:not([disabled]):focus .md-select-value.md-select-placeholder {    color: '{{ foreground-1 }}'; }md-select.md-THEME_NAME-theme:not([disabled]):focus.md-accent .md-select-value {  border-bottom-color: '{{accent-color}}'; }md-select.md-THEME_NAME-theme:not([disabled]):focus.md-warn .md-select-value {  border-bottom-color: '{{warn-color}}'; }md-select.md-THEME_NAME-theme[disabled] .md-select-value {  color: '{{foreground-3}}'; }  md-select.md-THEME_NAME-theme[disabled] .md-select-value.md-select-placeholder {    color: '{{foreground-3}}'; }md-select-menu.md-THEME_NAME-theme md-option[disabled] {  color: '{{foreground-3}}'; }md-select-menu.md-THEME_NAME-theme md-optgroup {  color: '{{foreground-2}}'; }  md-select-menu.md-THEME_NAME-theme md-optgroup md-option {    color: '{{foreground-1}}'; }md-select-menu.md-THEME_NAME-theme md-option[selected] {  color: '{{primary-500}}'; }  md-select-menu.md-THEME_NAME-theme md-option[selected]:focus {    color: '{{primary-600}}'; }  md-select-menu.md-THEME_NAME-theme md-option[selected].md-accent {    color: '{{accent-500}}'; }    md-select-menu.md-THEME_NAME-theme md-option[selected].md-accent:focus {      color: '{{accent-600}}'; }md-select-menu.md-THEME_NAME-theme md-option:focus:not([disabled]):not([selected]) {  background: '{{background-200}}'; }md-sidenav.md-THEME_NAME-theme {  background-color: '{{background-color}}'; }md-slider.md-THEME_NAME-theme .md-track {  background-color: '{{foreground-3}}'; }md-slider.md-THEME_NAME-theme .md-track-ticks {  background-color: '{{foreground-4}}'; }md-slider.md-THEME_NAME-theme .md-focus-thumb {  background-color: '{{foreground-2}}'; }md-slider.md-THEME_NAME-theme .md-focus-ring {  background-color: '{{accent-color}}'; }md-slider.md-THEME_NAME-theme .md-disabled-thumb {  border-color: '{{background-color}}'; }md-slider.md-THEME_NAME-theme.md-min .md-thumb:after {  background-color: '{{background-color}}'; }md-slider.md-THEME_NAME-theme .md-track.md-track-fill {  background-color: '{{accent-color}}'; }md-slider.md-THEME_NAME-theme .md-thumb:after {  border-color: '{{accent-color}}';  background-color: '{{accent-color}}'; }md-slider.md-THEME_NAME-theme .md-sign {  background-color: '{{accent-color}}'; }  md-slider.md-THEME_NAME-theme .md-sign:after {    border-top-color: '{{accent-color}}'; }md-slider.md-THEME_NAME-theme .md-thumb-text {  color: '{{accent-contrast}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-focus-ring {  background-color: '{{warn-color}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-track.md-track-fill {  background-color: '{{warn-color}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-thumb:after {  border-color: '{{warn-color}}';  background-color: '{{warn-color}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-sign {  background-color: '{{warn-color}}'; }  md-slider.md-THEME_NAME-theme.md-warn .md-sign:after {    border-top-color: '{{warn-color}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-thumb-text {  color: '{{warn-contrast}}'; }md-slider.md-THEME_NAME-theme.md-primary .md-focus-ring {  background-color: '{{primary-color}}'; }md-slider.md-THEME_NAME-theme.md-primary .md-track.md-track-fill {  background-color: '{{primary-color}}'; }md-slider.md-THEME_NAME-theme.md-primary .md-thumb:after {  border-color: '{{primary-color}}';  background-color: '{{primary-color}}'; }md-slider.md-THEME_NAME-theme.md-primary .md-sign {  background-color: '{{primary-color}}'; }  md-slider.md-THEME_NAME-theme.md-primary .md-sign:after {    border-top-color: '{{primary-color}}'; }md-slider.md-THEME_NAME-theme.md-primary .md-thumb-text {  color: '{{primary-contrast}}'; }md-slider.md-THEME_NAME-theme[disabled] .md-thumb:after {  border-color: '{{foreground-3}}'; }md-slider.md-THEME_NAME-theme[disabled]:not(.md-min) .md-thumb:after {  background-color: '{{foreground-3}}'; }.md-subheader.md-THEME_NAME-theme {  color: '{{ foreground-2-0.23 }}';  background-color: '{{background-color}}'; }  .md-subheader.md-THEME_NAME-theme.md-primary {    color: '{{primary-color}}'; }  .md-subheader.md-THEME_NAME-theme.md-accent {    color: '{{accent-color}}'; }  .md-subheader.md-THEME_NAME-theme.md-warn {    color: '{{warn-color}}'; }md-switch.md-THEME_NAME-theme .md-ink-ripple {  color: '{{background-500}}'; }md-switch.md-THEME_NAME-theme .md-thumb {  background-color: '{{background-50}}'; }md-switch.md-THEME_NAME-theme .md-bar {  background-color: '{{background-500}}'; }md-switch.md-THEME_NAME-theme.md-checked .md-ink-ripple {  color: '{{accent-color}}'; }md-switch.md-THEME_NAME-theme.md-checked .md-thumb {  background-color: '{{accent-color}}'; }md-switch.md-THEME_NAME-theme.md-checked .md-bar {  background-color: '{{accent-color-0.5}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-focused .md-thumb:before {  background-color: '{{accent-color-0.26}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-primary .md-ink-ripple {  color: '{{primary-color}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-primary .md-thumb {  background-color: '{{primary-color}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-primary .md-bar {  background-color: '{{primary-color-0.5}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-primary.md-focused .md-thumb:before {  background-color: '{{primary-color-0.26}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-warn .md-ink-ripple {  color: '{{warn-color}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-warn .md-thumb {  background-color: '{{warn-color}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-warn .md-bar {  background-color: '{{warn-color-0.5}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-warn.md-focused .md-thumb:before {  background-color: '{{warn-color-0.26}}'; }md-switch.md-THEME_NAME-theme[disabled] .md-thumb {  background-color: '{{background-400}}'; }md-switch.md-THEME_NAME-theme[disabled] .md-bar {  background-color: '{{foreground-4}}'; }md-tabs.md-THEME_NAME-theme md-tabs-wrapper {  background-color: transparent;  border-color: '{{foreground-4}}'; }md-tabs.md-THEME_NAME-theme .md-paginator md-icon {  color: '{{primary-color}}'; }md-tabs.md-THEME_NAME-theme md-ink-bar {  color: '{{accent-color}}';  background: '{{accent-color}}'; }md-tabs.md-THEME_NAME-theme .md-tab {  color: '{{foreground-2}}'; }  md-tabs.md-THEME_NAME-theme .md-tab[disabled], md-tabs.md-THEME_NAME-theme .md-tab[disabled] md-icon {    color: '{{foreground-3}}'; }  md-tabs.md-THEME_NAME-theme .md-tab.md-active, md-tabs.md-THEME_NAME-theme .md-tab.md-active md-icon, md-tabs.md-THEME_NAME-theme .md-tab.md-focused, md-tabs.md-THEME_NAME-theme .md-tab.md-focused md-icon {    color: '{{primary-color}}'; }  md-tabs.md-THEME_NAME-theme .md-tab.md-focused {    background: '{{primary-color-0.1}}'; }  md-tabs.md-THEME_NAME-theme .md-tab .md-ripple-container {    color: '{{accent-100}}'; }md-tabs.md-THEME_NAME-theme.md-accent > md-tabs-wrapper {  background-color: '{{accent-color}}'; }  md-tabs.md-THEME_NAME-theme.md-accent > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]) {    color: '{{accent-100}}'; }    md-tabs.md-THEME_NAME-theme.md-accent > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active, md-tabs.md-THEME_NAME-theme.md-accent > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active md-icon, md-tabs.md-THEME_NAME-theme.md-accent > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused, md-tabs.md-THEME_NAME-theme.md-accent > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused md-icon {      color: '{{accent-contrast}}'; }    md-tabs.md-THEME_NAME-theme.md-accent > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused {      background: '{{accent-contrast-0.1}}'; }  md-tabs.md-THEME_NAME-theme.md-accent > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-ink-bar {    color: '{{primary-600-1}}';    background: '{{primary-600-1}}'; }md-tabs.md-THEME_NAME-theme.md-primary > md-tabs-wrapper {  background-color: '{{primary-color}}'; }  md-tabs.md-THEME_NAME-theme.md-primary > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]) {    color: '{{primary-100}}'; }    md-tabs.md-THEME_NAME-theme.md-primary > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active, md-tabs.md-THEME_NAME-theme.md-primary > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active md-icon, md-tabs.md-THEME_NAME-theme.md-primary > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused, md-tabs.md-THEME_NAME-theme.md-primary > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused md-icon {      color: '{{primary-contrast}}'; }    md-tabs.md-THEME_NAME-theme.md-primary > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused {      background: '{{primary-contrast-0.1}}'; }md-tabs.md-THEME_NAME-theme.md-warn > md-tabs-wrapper {  background-color: '{{warn-color}}'; }  md-tabs.md-THEME_NAME-theme.md-warn > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]) {    color: '{{warn-100}}'; }    md-tabs.md-THEME_NAME-theme.md-warn > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active, md-tabs.md-THEME_NAME-theme.md-warn > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active md-icon, md-tabs.md-THEME_NAME-theme.md-warn > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused, md-tabs.md-THEME_NAME-theme.md-warn > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused md-icon {      color: '{{warn-contrast}}'; }    md-tabs.md-THEME_NAME-theme.md-warn > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused {      background: '{{warn-contrast-0.1}}'; }md-toolbar > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper {  background-color: '{{primary-color}}'; }  md-toolbar > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]) {    color: '{{primary-100}}'; }    md-toolbar > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active, md-toolbar > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active md-icon, md-toolbar > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused, md-toolbar > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused md-icon {      color: '{{primary-contrast}}'; }    md-toolbar > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused {      background: '{{primary-contrast-0.1}}'; }md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper {  background-color: '{{accent-color}}'; }  md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]) {    color: '{{accent-100}}'; }    md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active, md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active md-icon, md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused, md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused md-icon {      color: '{{accent-contrast}}'; }    md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused {      background: '{{accent-contrast-0.1}}'; }  md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-ink-bar {    color: '{{primary-600-1}}';    background: '{{primary-600-1}}'; }md-toolbar.md-warn > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper {  background-color: '{{warn-color}}'; }  md-toolbar.md-warn > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]) {    color: '{{warn-100}}'; }    md-toolbar.md-warn > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active, md-toolbar.md-warn > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active md-icon, md-toolbar.md-warn > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused, md-toolbar.md-warn > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused md-icon {      color: '{{warn-contrast}}'; }    md-toolbar.md-warn > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused {      background: '{{warn-contrast-0.1}}'; }md-toast.md-THEME_NAME-theme .md-toast-content {  background-color: #323232;  color: '{{background-50}}'; }  md-toast.md-THEME_NAME-theme .md-toast-content .md-button {    color: '{{background-50}}'; }    md-toast.md-THEME_NAME-theme .md-toast-content .md-button.md-highlight {      color: '{{primary-A200}}'; }      md-toast.md-THEME_NAME-theme .md-toast-content .md-button.md-highlight.md-accent {        color: '{{accent-A200}}'; }      md-toast.md-THEME_NAME-theme .md-toast-content .md-button.md-highlight.md-warn {        color: '{{warn-A200}}'; }md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar) {  background-color: '{{primary-color}}';  color: '{{primary-contrast}}'; }  md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar) md-icon {    color: '{{primary-contrast}}'; }  md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar).md-accent {    background-color: '{{accent-color}}';    color: '{{accent-contrast}}'; }  md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar).md-warn {    background-color: '{{warn-color}}';    color: '{{warn-contrast}}'; }md-tooltip.md-THEME_NAME-theme {  color: '{{background-A100}}'; }  md-tooltip.md-THEME_NAME-theme .md-content {    background-color: '{{foreground-2}}'; }");
}()}(window,window.angular),window.ngMaterial={version:{full:"1.0.5"}};
/**
 * State-based routing for AngularJS
 * @version v0.2.18
 * @link http://angular-ui.github.com/
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */

/* commonjs package manager support (eg componentjs) */
if (typeof module !== "undefined" && typeof exports !== "undefined" && module.exports === exports){
  module.exports = 'ui.router';
}

(function (window, angular, undefined) {
/*jshint globalstrict:true*/
/*global angular:false*/
'use strict';

var isDefined = angular.isDefined,
    isFunction = angular.isFunction,
    isString = angular.isString,
    isObject = angular.isObject,
    isArray = angular.isArray,
    forEach = angular.forEach,
    extend = angular.extend,
    copy = angular.copy,
    toJson = angular.toJson;

function inherit(parent, extra) {
  return extend(new (extend(function() {}, { prototype: parent }))(), extra);
}

function merge(dst) {
  forEach(arguments, function(obj) {
    if (obj !== dst) {
      forEach(obj, function(value, key) {
        if (!dst.hasOwnProperty(key)) dst[key] = value;
      });
    }
  });
  return dst;
}

/**
 * Finds the common ancestor path between two states.
 *
 * @param {Object} first The first state.
 * @param {Object} second The second state.
 * @return {Array} Returns an array of state names in descending order, not including the root.
 */
function ancestors(first, second) {
  var path = [];

  for (var n in first.path) {
    if (first.path[n] !== second.path[n]) break;
    path.push(first.path[n]);
  }
  return path;
}

/**
 * IE8-safe wrapper for `Object.keys()`.
 *
 * @param {Object} object A JavaScript object.
 * @return {Array} Returns the keys of the object as an array.
 */
function objectKeys(object) {
  if (Object.keys) {
    return Object.keys(object);
  }
  var result = [];

  forEach(object, function(val, key) {
    result.push(key);
  });
  return result;
}

/**
 * IE8-safe wrapper for `Array.prototype.indexOf()`.
 *
 * @param {Array} array A JavaScript array.
 * @param {*} value A value to search the array for.
 * @return {Number} Returns the array index value of `value`, or `-1` if not present.
 */
function indexOf(array, value) {
  if (Array.prototype.indexOf) {
    return array.indexOf(value, Number(arguments[2]) || 0);
  }
  var len = array.length >>> 0, from = Number(arguments[2]) || 0;
  from = (from < 0) ? Math.ceil(from) : Math.floor(from);

  if (from < 0) from += len;

  for (; from < len; from++) {
    if (from in array && array[from] === value) return from;
  }
  return -1;
}

/**
 * Merges a set of parameters with all parameters inherited between the common parents of the
 * current state and a given destination state.
 *
 * @param {Object} currentParams The value of the current state parameters ($stateParams).
 * @param {Object} newParams The set of parameters which will be composited with inherited params.
 * @param {Object} $current Internal definition of object representing the current state.
 * @param {Object} $to Internal definition of object representing state to transition to.
 */
function inheritParams(currentParams, newParams, $current, $to) {
  var parents = ancestors($current, $to), parentParams, inherited = {}, inheritList = [];

  for (var i in parents) {
    if (!parents[i] || !parents[i].params) continue;
    parentParams = objectKeys(parents[i].params);
    if (!parentParams.length) continue;

    for (var j in parentParams) {
      if (indexOf(inheritList, parentParams[j]) >= 0) continue;
      inheritList.push(parentParams[j]);
      inherited[parentParams[j]] = currentParams[parentParams[j]];
    }
  }
  return extend({}, inherited, newParams);
}

/**
 * Performs a non-strict comparison of the subset of two objects, defined by a list of keys.
 *
 * @param {Object} a The first object.
 * @param {Object} b The second object.
 * @param {Array} keys The list of keys within each object to compare. If the list is empty or not specified,
 *                     it defaults to the list of keys in `a`.
 * @return {Boolean} Returns `true` if the keys match, otherwise `false`.
 */
function equalForKeys(a, b, keys) {
  if (!keys) {
    keys = [];
    for (var n in a) keys.push(n); // Used instead of Object.keys() for IE8 compatibility
  }

  for (var i=0; i<keys.length; i++) {
    var k = keys[i];
    if (a[k] != b[k]) return false; // Not '===', values aren't necessarily normalized
  }
  return true;
}

/**
 * Returns the subset of an object, based on a list of keys.
 *
 * @param {Array} keys
 * @param {Object} values
 * @return {Boolean} Returns a subset of `values`.
 */
function filterByKeys(keys, values) {
  var filtered = {};

  forEach(keys, function (name) {
    filtered[name] = values[name];
  });
  return filtered;
}

// like _.indexBy
// when you know that your index values will be unique, or you want last-one-in to win
function indexBy(array, propName) {
  var result = {};
  forEach(array, function(item) {
    result[item[propName]] = item;
  });
  return result;
}

// extracted from underscore.js
// Return a copy of the object only containing the whitelisted properties.
function pick(obj) {
  var copy = {};
  var keys = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
  forEach(keys, function(key) {
    if (key in obj) copy[key] = obj[key];
  });
  return copy;
}

// extracted from underscore.js
// Return a copy of the object omitting the blacklisted properties.
function omit(obj) {
  var copy = {};
  var keys = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
  for (var key in obj) {
    if (indexOf(keys, key) == -1) copy[key] = obj[key];
  }
  return copy;
}

function pluck(collection, key) {
  var result = isArray(collection) ? [] : {};

  forEach(collection, function(val, i) {
    result[i] = isFunction(key) ? key(val) : val[key];
  });
  return result;
}

function filter(collection, callback) {
  var array = isArray(collection);
  var result = array ? [] : {};
  forEach(collection, function(val, i) {
    if (callback(val, i)) {
      result[array ? result.length : i] = val;
    }
  });
  return result;
}

function map(collection, callback) {
  var result = isArray(collection) ? [] : {};

  forEach(collection, function(val, i) {
    result[i] = callback(val, i);
  });
  return result;
}

/**
 * @ngdoc overview
 * @name ui.router.util
 *
 * @description
 * # ui.router.util sub-module
 *
 * This module is a dependency of other sub-modules. Do not include this module as a dependency
 * in your angular app (use {@link ui.router} module instead).
 *
 */
angular.module('ui.router.util', ['ng']);

/**
 * @ngdoc overview
 * @name ui.router.router
 * 
 * @requires ui.router.util
 *
 * @description
 * # ui.router.router sub-module
 *
 * This module is a dependency of other sub-modules. Do not include this module as a dependency
 * in your angular app (use {@link ui.router} module instead).
 */
angular.module('ui.router.router', ['ui.router.util']);

/**
 * @ngdoc overview
 * @name ui.router.state
 * 
 * @requires ui.router.router
 * @requires ui.router.util
 *
 * @description
 * # ui.router.state sub-module
 *
 * This module is a dependency of the main ui.router module. Do not include this module as a dependency
 * in your angular app (use {@link ui.router} module instead).
 * 
 */
angular.module('ui.router.state', ['ui.router.router', 'ui.router.util']);

/**
 * @ngdoc overview
 * @name ui.router
 *
 * @requires ui.router.state
 *
 * @description
 * # ui.router
 * 
 * ## The main module for ui.router 
 * There are several sub-modules included with the ui.router module, however only this module is needed
 * as a dependency within your angular app. The other modules are for organization purposes. 
 *
 * The modules are:
 * * ui.router - the main "umbrella" module
 * * ui.router.router - 
 * 
 * *You'll need to include **only** this module as the dependency within your angular app.*
 * 
 * <pre>
 * <!doctype html>
 * <html ng-app="myApp">
 * <head>
 *   <script src="js/angular.js"></script>
 *   <!-- Include the ui-router script -->
 *   <script src="js/angular-ui-router.min.js"></script>
 *   <script>
 *     // ...and add 'ui.router' as a dependency
 *     var myApp = angular.module('myApp', ['ui.router']);
 *   </script>
 * </head>
 * <body>
 * </body>
 * </html>
 * </pre>
 */
angular.module('ui.router', ['ui.router.state']);

angular.module('ui.router.compat', ['ui.router']);

/**
 * @ngdoc object
 * @name ui.router.util.$resolve
 *
 * @requires $q
 * @requires $injector
 *
 * @description
 * Manages resolution of (acyclic) graphs of promises.
 */
$Resolve.$inject = ['$q', '$injector'];
function $Resolve(  $q,    $injector) {
  
  var VISIT_IN_PROGRESS = 1,
      VISIT_DONE = 2,
      NOTHING = {},
      NO_DEPENDENCIES = [],
      NO_LOCALS = NOTHING,
      NO_PARENT = extend($q.when(NOTHING), { $$promises: NOTHING, $$values: NOTHING });
  

  /**
   * @ngdoc function
   * @name ui.router.util.$resolve#study
   * @methodOf ui.router.util.$resolve
   *
   * @description
   * Studies a set of invocables that are likely to be used multiple times.
   * <pre>
   * $resolve.study(invocables)(locals, parent, self)
   * </pre>
   * is equivalent to
   * <pre>
   * $resolve.resolve(invocables, locals, parent, self)
   * </pre>
   * but the former is more efficient (in fact `resolve` just calls `study` 
   * internally).
   *
   * @param {object} invocables Invocable objects
   * @return {function} a function to pass in locals, parent and self
   */
  this.study = function (invocables) {
    if (!isObject(invocables)) throw new Error("'invocables' must be an object");
    var invocableKeys = objectKeys(invocables || {});
    
    // Perform a topological sort of invocables to build an ordered plan
    var plan = [], cycle = [], visited = {};
    function visit(value, key) {
      if (visited[key] === VISIT_DONE) return;
      
      cycle.push(key);
      if (visited[key] === VISIT_IN_PROGRESS) {
        cycle.splice(0, indexOf(cycle, key));
        throw new Error("Cyclic dependency: " + cycle.join(" -> "));
      }
      visited[key] = VISIT_IN_PROGRESS;
      
      if (isString(value)) {
        plan.push(key, [ function() { return $injector.get(value); }], NO_DEPENDENCIES);
      } else {
        var params = $injector.annotate(value);
        forEach(params, function (param) {
          if (param !== key && invocables.hasOwnProperty(param)) visit(invocables[param], param);
        });
        plan.push(key, value, params);
      }
      
      cycle.pop();
      visited[key] = VISIT_DONE;
    }
    forEach(invocables, visit);
    invocables = cycle = visited = null; // plan is all that's required
    
    function isResolve(value) {
      return isObject(value) && value.then && value.$$promises;
    }
    
    return function (locals, parent, self) {
      if (isResolve(locals) && self === undefined) {
        self = parent; parent = locals; locals = null;
      }
      if (!locals) locals = NO_LOCALS;
      else if (!isObject(locals)) {
        throw new Error("'locals' must be an object");
      }       
      if (!parent) parent = NO_PARENT;
      else if (!isResolve(parent)) {
        throw new Error("'parent' must be a promise returned by $resolve.resolve()");
      }
      
      // To complete the overall resolution, we have to wait for the parent
      // promise and for the promise for each invokable in our plan.
      var resolution = $q.defer(),
          result = resolution.promise,
          promises = result.$$promises = {},
          values = extend({}, locals),
          wait = 1 + plan.length/3,
          merged = false;
          
      function done() {
        // Merge parent values we haven't got yet and publish our own $$values
        if (!--wait) {
          if (!merged) merge(values, parent.$$values); 
          result.$$values = values;
          result.$$promises = result.$$promises || true; // keep for isResolve()
          delete result.$$inheritedValues;
          resolution.resolve(values);
        }
      }
      
      function fail(reason) {
        result.$$failure = reason;
        resolution.reject(reason);
      }

      // Short-circuit if parent has already failed
      if (isDefined(parent.$$failure)) {
        fail(parent.$$failure);
        return result;
      }
      
      if (parent.$$inheritedValues) {
        merge(values, omit(parent.$$inheritedValues, invocableKeys));
      }

      // Merge parent values if the parent has already resolved, or merge
      // parent promises and wait if the parent resolve is still in progress.
      extend(promises, parent.$$promises);
      if (parent.$$values) {
        merged = merge(values, omit(parent.$$values, invocableKeys));
        result.$$inheritedValues = omit(parent.$$values, invocableKeys);
        done();
      } else {
        if (parent.$$inheritedValues) {
          result.$$inheritedValues = omit(parent.$$inheritedValues, invocableKeys);
        }        
        parent.then(done, fail);
      }
      
      // Process each invocable in the plan, but ignore any where a local of the same name exists.
      for (var i=0, ii=plan.length; i<ii; i+=3) {
        if (locals.hasOwnProperty(plan[i])) done();
        else invoke(plan[i], plan[i+1], plan[i+2]);
      }
      
      function invoke(key, invocable, params) {
        // Create a deferred for this invocation. Failures will propagate to the resolution as well.
        var invocation = $q.defer(), waitParams = 0;
        function onfailure(reason) {
          invocation.reject(reason);
          fail(reason);
        }
        // Wait for any parameter that we have a promise for (either from parent or from this
        // resolve; in that case study() will have made sure it's ordered before us in the plan).
        forEach(params, function (dep) {
          if (promises.hasOwnProperty(dep) && !locals.hasOwnProperty(dep)) {
            waitParams++;
            promises[dep].then(function (result) {
              values[dep] = result;
              if (!(--waitParams)) proceed();
            }, onfailure);
          }
        });
        if (!waitParams) proceed();
        function proceed() {
          if (isDefined(result.$$failure)) return;
          try {
            invocation.resolve($injector.invoke(invocable, self, values));
            invocation.promise.then(function (result) {
              values[key] = result;
              done();
            }, onfailure);
          } catch (e) {
            onfailure(e);
          }
        }
        // Publish promise synchronously; invocations further down in the plan may depend on it.
        promises[key] = invocation.promise;
      }
      
      return result;
    };
  };
  
  /**
   * @ngdoc function
   * @name ui.router.util.$resolve#resolve
   * @methodOf ui.router.util.$resolve
   *
   * @description
   * Resolves a set of invocables. An invocable is a function to be invoked via 
   * `$injector.invoke()`, and can have an arbitrary number of dependencies. 
   * An invocable can either return a value directly,
   * or a `$q` promise. If a promise is returned it will be resolved and the 
   * resulting value will be used instead. Dependencies of invocables are resolved 
   * (in this order of precedence)
   *
   * - from the specified `locals`
   * - from another invocable that is part of this `$resolve` call
   * - from an invocable that is inherited from a `parent` call to `$resolve` 
   *   (or recursively
   * - from any ancestor `$resolve` of that parent).
   *
   * The return value of `$resolve` is a promise for an object that contains 
   * (in this order of precedence)
   *
   * - any `locals` (if specified)
   * - the resolved return values of all injectables
   * - any values inherited from a `parent` call to `$resolve` (if specified)
   *
   * The promise will resolve after the `parent` promise (if any) and all promises 
   * returned by injectables have been resolved. If any invocable 
   * (or `$injector.invoke`) throws an exception, or if a promise returned by an 
   * invocable is rejected, the `$resolve` promise is immediately rejected with the 
   * same error. A rejection of a `parent` promise (if specified) will likewise be 
   * propagated immediately. Once the `$resolve` promise has been rejected, no 
   * further invocables will be called.
   * 
   * Cyclic dependencies between invocables are not permitted and will cause `$resolve`
   * to throw an error. As a special case, an injectable can depend on a parameter 
   * with the same name as the injectable, which will be fulfilled from the `parent` 
   * injectable of the same name. This allows inherited values to be decorated. 
   * Note that in this case any other injectable in the same `$resolve` with the same
   * dependency would see the decorated value, not the inherited value.
   *
   * Note that missing dependencies -- unlike cyclic dependencies -- will cause an 
   * (asynchronous) rejection of the `$resolve` promise rather than a (synchronous) 
   * exception.
   *
   * Invocables are invoked eagerly as soon as all dependencies are available. 
   * This is true even for dependencies inherited from a `parent` call to `$resolve`.
   *
   * As a special case, an invocable can be a string, in which case it is taken to 
   * be a service name to be passed to `$injector.get()`. This is supported primarily 
   * for backwards-compatibility with the `resolve` property of `$routeProvider` 
   * routes.
   *
   * @param {object} invocables functions to invoke or 
   * `$injector` services to fetch.
   * @param {object} locals  values to make available to the injectables
   * @param {object} parent  a promise returned by another call to `$resolve`.
   * @param {object} self  the `this` for the invoked methods
   * @return {object} Promise for an object that contains the resolved return value
   * of all invocables, as well as any inherited and local values.
   */
  this.resolve = function (invocables, locals, parent, self) {
    return this.study(invocables)(locals, parent, self);
  };
}

angular.module('ui.router.util').service('$resolve', $Resolve);


/**
 * @ngdoc object
 * @name ui.router.util.$templateFactory
 *
 * @requires $http
 * @requires $templateCache
 * @requires $injector
 *
 * @description
 * Service. Manages loading of templates.
 */
$TemplateFactory.$inject = ['$http', '$templateCache', '$injector'];
function $TemplateFactory(  $http,   $templateCache,   $injector) {

  /**
   * @ngdoc function
   * @name ui.router.util.$templateFactory#fromConfig
   * @methodOf ui.router.util.$templateFactory
   *
   * @description
   * Creates a template from a configuration object. 
   *
   * @param {object} config Configuration object for which to load a template. 
   * The following properties are search in the specified order, and the first one 
   * that is defined is used to create the template:
   *
   * @param {string|object} config.template html string template or function to 
   * load via {@link ui.router.util.$templateFactory#fromString fromString}.
   * @param {string|object} config.templateUrl url to load or a function returning 
   * the url to load via {@link ui.router.util.$templateFactory#fromUrl fromUrl}.
   * @param {Function} config.templateProvider function to invoke via 
   * {@link ui.router.util.$templateFactory#fromProvider fromProvider}.
   * @param {object} params  Parameters to pass to the template function.
   * @param {object} locals Locals to pass to `invoke` if the template is loaded 
   * via a `templateProvider`. Defaults to `{ params: params }`.
   *
   * @return {string|object}  The template html as a string, or a promise for 
   * that string,or `null` if no template is configured.
   */
  this.fromConfig = function (config, params, locals) {
    return (
      isDefined(config.template) ? this.fromString(config.template, params) :
      isDefined(config.templateUrl) ? this.fromUrl(config.templateUrl, params) :
      isDefined(config.templateProvider) ? this.fromProvider(config.templateProvider, params, locals) :
      null
    );
  };

  /**
   * @ngdoc function
   * @name ui.router.util.$templateFactory#fromString
   * @methodOf ui.router.util.$templateFactory
   *
   * @description
   * Creates a template from a string or a function returning a string.
   *
   * @param {string|object} template html template as a string or function that 
   * returns an html template as a string.
   * @param {object} params Parameters to pass to the template function.
   *
   * @return {string|object} The template html as a string, or a promise for that 
   * string.
   */
  this.fromString = function (template, params) {
    return isFunction(template) ? template(params) : template;
  };

  /**
   * @ngdoc function
   * @name ui.router.util.$templateFactory#fromUrl
   * @methodOf ui.router.util.$templateFactory
   * 
   * @description
   * Loads a template from the a URL via `$http` and `$templateCache`.
   *
   * @param {string|Function} url url of the template to load, or a function 
   * that returns a url.
   * @param {Object} params Parameters to pass to the url function.
   * @return {string|Promise.<string>} The template html as a string, or a promise 
   * for that string.
   */
  this.fromUrl = function (url, params) {
    if (isFunction(url)) url = url(params);
    if (url == null) return null;
    else return $http
        .get(url, { cache: $templateCache, headers: { Accept: 'text/html' }})
        .then(function(response) { return response.data; });
  };

  /**
   * @ngdoc function
   * @name ui.router.util.$templateFactory#fromProvider
   * @methodOf ui.router.util.$templateFactory
   *
   * @description
   * Creates a template by invoking an injectable provider function.
   *
   * @param {Function} provider Function to invoke via `$injector.invoke`
   * @param {Object} params Parameters for the template.
   * @param {Object} locals Locals to pass to `invoke`. Defaults to 
   * `{ params: params }`.
   * @return {string|Promise.<string>} The template html as a string, or a promise 
   * for that string.
   */
  this.fromProvider = function (provider, params, locals) {
    return $injector.invoke(provider, null, locals || { params: params });
  };
}

angular.module('ui.router.util').service('$templateFactory', $TemplateFactory);

var $$UMFP; // reference to $UrlMatcherFactoryProvider

/**
 * @ngdoc object
 * @name ui.router.util.type:UrlMatcher
 *
 * @description
 * Matches URLs against patterns and extracts named parameters from the path or the search
 * part of the URL. A URL pattern consists of a path pattern, optionally followed by '?' and a list
 * of search parameters. Multiple search parameter names are separated by '&'. Search parameters
 * do not influence whether or not a URL is matched, but their values are passed through into
 * the matched parameters returned by {@link ui.router.util.type:UrlMatcher#methods_exec exec}.
 *
 * Path parameter placeholders can be specified using simple colon/catch-all syntax or curly brace
 * syntax, which optionally allows a regular expression for the parameter to be specified:
 *
 * * `':'` name - colon placeholder
 * * `'*'` name - catch-all placeholder
 * * `'{' name '}'` - curly placeholder
 * * `'{' name ':' regexp|type '}'` - curly placeholder with regexp or type name. Should the
 *   regexp itself contain curly braces, they must be in matched pairs or escaped with a backslash.
 *
 * Parameter names may contain only word characters (latin letters, digits, and underscore) and
 * must be unique within the pattern (across both path and search parameters). For colon
 * placeholders or curly placeholders without an explicit regexp, a path parameter matches any
 * number of characters other than '/'. For catch-all placeholders the path parameter matches
 * any number of characters.
 *
 * Examples:
 *
 * * `'/hello/'` - Matches only if the path is exactly '/hello/'. There is no special treatment for
 *   trailing slashes, and patterns have to match the entire path, not just a prefix.
 * * `'/user/:id'` - Matches '/user/bob' or '/user/1234!!!' or even '/user/' but not '/user' or
 *   '/user/bob/details'. The second path segment will be captured as the parameter 'id'.
 * * `'/user/{id}'` - Same as the previous example, but using curly brace syntax.
 * * `'/user/{id:[^/]*}'` - Same as the previous example.
 * * `'/user/{id:[0-9a-fA-F]{1,8}}'` - Similar to the previous example, but only matches if the id
 *   parameter consists of 1 to 8 hex digits.
 * * `'/files/{path:.*}'` - Matches any URL starting with '/files/' and captures the rest of the
 *   path into the parameter 'path'.
 * * `'/files/*path'` - ditto.
 * * `'/calendar/{start:date}'` - Matches "/calendar/2014-11-12" (because the pattern defined
 *   in the built-in  `date` Type matches `2014-11-12`) and provides a Date object in $stateParams.start
 *
 * @param {string} pattern  The pattern to compile into a matcher.
 * @param {Object} config  A configuration object hash:
 * @param {Object=} parentMatcher Used to concatenate the pattern/config onto
 *   an existing UrlMatcher
 *
 * * `caseInsensitive` - `true` if URL matching should be case insensitive, otherwise `false`, the default value (for backward compatibility) is `false`.
 * * `strict` - `false` if matching against a URL with a trailing slash should be treated as equivalent to a URL without a trailing slash, the default value is `true`.
 *
 * @property {string} prefix  A static prefix of this pattern. The matcher guarantees that any
 *   URL matching this matcher (i.e. any string for which {@link ui.router.util.type:UrlMatcher#methods_exec exec()} returns
 *   non-null) will start with this prefix.
 *
 * @property {string} source  The pattern that was passed into the constructor
 *
 * @property {string} sourcePath  The path portion of the source property
 *
 * @property {string} sourceSearch  The search portion of the source property
 *
 * @property {string} regex  The constructed regex that will be used to match against the url when
 *   it is time to determine which url will match.
 *
 * @returns {Object}  New `UrlMatcher` object
 */
function UrlMatcher(pattern, config, parentMatcher) {
  config = extend({ params: {} }, isObject(config) ? config : {});

  // Find all placeholders and create a compiled pattern, using either classic or curly syntax:
  //   '*' name
  //   ':' name
  //   '{' name '}'
  //   '{' name ':' regexp '}'
  // The regular expression is somewhat complicated due to the need to allow curly braces
  // inside the regular expression. The placeholder regexp breaks down as follows:
  //    ([:*])([\w\[\]]+)              - classic placeholder ($1 / $2) (search version has - for snake-case)
  //    \{([\w\[\]]+)(?:\:\s*( ... ))?\}  - curly brace placeholder ($3) with optional regexp/type ... ($4) (search version has - for snake-case
  //    (?: ... | ... | ... )+         - the regexp consists of any number of atoms, an atom being either
  //    [^{}\\]+                       - anything other than curly braces or backslash
  //    \\.                            - a backslash escape
  //    \{(?:[^{}\\]+|\\.)*\}          - a matched set of curly braces containing other atoms
  var placeholder       = /([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
      searchPlaceholder = /([:]?)([\w\[\].-]+)|\{([\w\[\].-]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
      compiled = '^', last = 0, m,
      segments = this.segments = [],
      parentParams = parentMatcher ? parentMatcher.params : {},
      params = this.params = parentMatcher ? parentMatcher.params.$$new() : new $$UMFP.ParamSet(),
      paramNames = [];

  function addParameter(id, type, config, location) {
    paramNames.push(id);
    if (parentParams[id]) return parentParams[id];
    if (!/^\w+([-.]+\w+)*(?:\[\])?$/.test(id)) throw new Error("Invalid parameter name '" + id + "' in pattern '" + pattern + "'");
    if (params[id]) throw new Error("Duplicate parameter name '" + id + "' in pattern '" + pattern + "'");
    params[id] = new $$UMFP.Param(id, type, config, location);
    return params[id];
  }

  function quoteRegExp(string, pattern, squash, optional) {
    var surroundPattern = ['',''], result = string.replace(/[\\\[\]\^$*+?.()|{}]/g, "\\$&");
    if (!pattern) return result;
    switch(squash) {
      case false: surroundPattern = ['(', ')' + (optional ? "?" : "")]; break;
      case true:
        result = result.replace(/\/$/, '');
        surroundPattern = ['(?:\/(', ')|\/)?'];
      break;
      default:    surroundPattern = ['(' + squash + "|", ')?']; break;
    }
    return result + surroundPattern[0] + pattern + surroundPattern[1];
  }

  this.source = pattern;

  // Split into static segments separated by path parameter placeholders.
  // The number of segments is always 1 more than the number of parameters.
  function matchDetails(m, isSearch) {
    var id, regexp, segment, type, cfg, arrayMode;
    id          = m[2] || m[3]; // IE[78] returns '' for unmatched groups instead of null
    cfg         = config.params[id];
    segment     = pattern.substring(last, m.index);
    regexp      = isSearch ? m[4] : m[4] || (m[1] == '*' ? '.*' : null);

    if (regexp) {
      type      = $$UMFP.type(regexp) || inherit($$UMFP.type("string"), { pattern: new RegExp(regexp, config.caseInsensitive ? 'i' : undefined) });
    }

    return {
      id: id, regexp: regexp, segment: segment, type: type, cfg: cfg
    };
  }

  var p, param, segment;
  while ((m = placeholder.exec(pattern))) {
    p = matchDetails(m, false);
    if (p.segment.indexOf('?') >= 0) break; // we're into the search part

    param = addParameter(p.id, p.type, p.cfg, "path");
    compiled += quoteRegExp(p.segment, param.type.pattern.source, param.squash, param.isOptional);
    segments.push(p.segment);
    last = placeholder.lastIndex;
  }
  segment = pattern.substring(last);

  // Find any search parameter names and remove them from the last segment
  var i = segment.indexOf('?');

  if (i >= 0) {
    var search = this.sourceSearch = segment.substring(i);
    segment = segment.substring(0, i);
    this.sourcePath = pattern.substring(0, last + i);

    if (search.length > 0) {
      last = 0;
      while ((m = searchPlaceholder.exec(search))) {
        p = matchDetails(m, true);
        param = addParameter(p.id, p.type, p.cfg, "search");
        last = placeholder.lastIndex;
        // check if ?&
      }
    }
  } else {
    this.sourcePath = pattern;
    this.sourceSearch = '';
  }

  compiled += quoteRegExp(segment) + (config.strict === false ? '\/?' : '') + '$';
  segments.push(segment);

  this.regexp = new RegExp(compiled, config.caseInsensitive ? 'i' : undefined);
  this.prefix = segments[0];
  this.$$paramNames = paramNames;
}

/**
 * @ngdoc function
 * @name ui.router.util.type:UrlMatcher#concat
 * @methodOf ui.router.util.type:UrlMatcher
 *
 * @description
 * Returns a new matcher for a pattern constructed by appending the path part and adding the
 * search parameters of the specified pattern to this pattern. The current pattern is not
 * modified. This can be understood as creating a pattern for URLs that are relative to (or
 * suffixes of) the current pattern.
 *
 * @example
 * The following two matchers are equivalent:
 * <pre>
 * new UrlMatcher('/user/{id}?q').concat('/details?date');
 * new UrlMatcher('/user/{id}/details?q&date');
 * </pre>
 *
 * @param {string} pattern  The pattern to append.
 * @param {Object} config  An object hash of the configuration for the matcher.
 * @returns {UrlMatcher}  A matcher for the concatenated pattern.
 */
UrlMatcher.prototype.concat = function (pattern, config) {
  // Because order of search parameters is irrelevant, we can add our own search
  // parameters to the end of the new pattern. Parse the new pattern by itself
  // and then join the bits together, but it's much easier to do this on a string level.
  var defaultConfig = {
    caseInsensitive: $$UMFP.caseInsensitive(),
    strict: $$UMFP.strictMode(),
    squash: $$UMFP.defaultSquashPolicy()
  };
  return new UrlMatcher(this.sourcePath + pattern + this.sourceSearch, extend(defaultConfig, config), this);
};

UrlMatcher.prototype.toString = function () {
  return this.source;
};

/**
 * @ngdoc function
 * @name ui.router.util.type:UrlMatcher#exec
 * @methodOf ui.router.util.type:UrlMatcher
 *
 * @description
 * Tests the specified path against this matcher, and returns an object containing the captured
 * parameter values, or null if the path does not match. The returned object contains the values
 * of any search parameters that are mentioned in the pattern, but their value may be null if
 * they are not present in `searchParams`. This means that search parameters are always treated
 * as optional.
 *
 * @example
 * <pre>
 * new UrlMatcher('/user/{id}?q&r').exec('/user/bob', {
 *   x: '1', q: 'hello'
 * });
 * // returns { id: 'bob', q: 'hello', r: null }
 * </pre>
 *
 * @param {string} path  The URL path to match, e.g. `$location.path()`.
 * @param {Object} searchParams  URL search parameters, e.g. `$location.search()`.
 * @returns {Object}  The captured parameter values.
 */
UrlMatcher.prototype.exec = function (path, searchParams) {
  var m = this.regexp.exec(path);
  if (!m) return null;
  searchParams = searchParams || {};

  var paramNames = this.parameters(), nTotal = paramNames.length,
    nPath = this.segments.length - 1,
    values = {}, i, j, cfg, paramName;

  if (nPath !== m.length - 1) throw new Error("Unbalanced capture group in route '" + this.source + "'");

  function decodePathArray(string) {
    function reverseString(str) { return str.split("").reverse().join(""); }
    function unquoteDashes(str) { return str.replace(/\\-/g, "-"); }

    var split = reverseString(string).split(/-(?!\\)/);
    var allReversed = map(split, reverseString);
    return map(allReversed, unquoteDashes).reverse();
  }

  var param, paramVal;
  for (i = 0; i < nPath; i++) {
    paramName = paramNames[i];
    param = this.params[paramName];
    paramVal = m[i+1];
    // if the param value matches a pre-replace pair, replace the value before decoding.
    for (j = 0; j < param.replace.length; j++) {
      if (param.replace[j].from === paramVal) paramVal = param.replace[j].to;
    }
    if (paramVal && param.array === true) paramVal = decodePathArray(paramVal);
    if (isDefined(paramVal)) paramVal = param.type.decode(paramVal);
    values[paramName] = param.value(paramVal);
  }
  for (/**/; i < nTotal; i++) {
    paramName = paramNames[i];
    values[paramName] = this.params[paramName].value(searchParams[paramName]);
    param = this.params[paramName];
    paramVal = searchParams[paramName];
    for (j = 0; j < param.replace.length; j++) {
      if (param.replace[j].from === paramVal) paramVal = param.replace[j].to;
    }
    if (isDefined(paramVal)) paramVal = param.type.decode(paramVal);
    values[paramName] = param.value(paramVal);
  }

  return values;
};

/**
 * @ngdoc function
 * @name ui.router.util.type:UrlMatcher#parameters
 * @methodOf ui.router.util.type:UrlMatcher
 *
 * @description
 * Returns the names of all path and search parameters of this pattern in an unspecified order.
 *
 * @returns {Array.<string>}  An array of parameter names. Must be treated as read-only. If the
 *    pattern has no parameters, an empty array is returned.
 */
UrlMatcher.prototype.parameters = function (param) {
  if (!isDefined(param)) return this.$$paramNames;
  return this.params[param] || null;
};

/**
 * @ngdoc function
 * @name ui.router.util.type:UrlMatcher#validates
 * @methodOf ui.router.util.type:UrlMatcher
 *
 * @description
 * Checks an object hash of parameters to validate their correctness according to the parameter
 * types of this `UrlMatcher`.
 *
 * @param {Object} params The object hash of parameters to validate.
 * @returns {boolean} Returns `true` if `params` validates, otherwise `false`.
 */
UrlMatcher.prototype.validates = function (params) {
  return this.params.$$validates(params);
};

/**
 * @ngdoc function
 * @name ui.router.util.type:UrlMatcher#format
 * @methodOf ui.router.util.type:UrlMatcher
 *
 * @description
 * Creates a URL that matches this pattern by substituting the specified values
 * for the path and search parameters. Null values for path parameters are
 * treated as empty strings.
 *
 * @example
 * <pre>
 * new UrlMatcher('/user/{id}?q').format({ id:'bob', q:'yes' });
 * // returns '/user/bob?q=yes'
 * </pre>
 *
 * @param {Object} values  the values to substitute for the parameters in this pattern.
 * @returns {string}  the formatted URL (path and optionally search part).
 */
UrlMatcher.prototype.format = function (values) {
  values = values || {};
  var segments = this.segments, params = this.parameters(), paramset = this.params;
  if (!this.validates(values)) return null;

  var i, search = false, nPath = segments.length - 1, nTotal = params.length, result = segments[0];

  function encodeDashes(str) { // Replace dashes with encoded "\-"
    return encodeURIComponent(str).replace(/-/g, function(c) { return '%5C%' + c.charCodeAt(0).toString(16).toUpperCase(); });
  }

  for (i = 0; i < nTotal; i++) {
    var isPathParam = i < nPath;
    var name = params[i], param = paramset[name], value = param.value(values[name]);
    var isDefaultValue = param.isOptional && param.type.equals(param.value(), value);
    var squash = isDefaultValue ? param.squash : false;
    var encoded = param.type.encode(value);

    if (isPathParam) {
      var nextSegment = segments[i + 1];
      var isFinalPathParam = i + 1 === nPath;

      if (squash === false) {
        if (encoded != null) {
          if (isArray(encoded)) {
            result += map(encoded, encodeDashes).join("-");
          } else {
            result += encodeURIComponent(encoded);
          }
        }
        result += nextSegment;
      } else if (squash === true) {
        var capture = result.match(/\/$/) ? /\/?(.*)/ : /(.*)/;
        result += nextSegment.match(capture)[1];
      } else if (isString(squash)) {
        result += squash + nextSegment;
      }

      if (isFinalPathParam && param.squash === true && result.slice(-1) === '/') result = result.slice(0, -1);
    } else {
      if (encoded == null || (isDefaultValue && squash !== false)) continue;
      if (!isArray(encoded)) encoded = [ encoded ];
      if (encoded.length === 0) continue;
      encoded = map(encoded, encodeURIComponent).join('&' + name + '=');
      result += (search ? '&' : '?') + (name + '=' + encoded);
      search = true;
    }
  }

  return result;
};

/**
 * @ngdoc object
 * @name ui.router.util.type:Type
 *
 * @description
 * Implements an interface to define custom parameter types that can be decoded from and encoded to
 * string parameters matched in a URL. Used by {@link ui.router.util.type:UrlMatcher `UrlMatcher`}
 * objects when matching or formatting URLs, or comparing or validating parameter values.
 *
 * See {@link ui.router.util.$urlMatcherFactory#methods_type `$urlMatcherFactory#type()`} for more
 * information on registering custom types.
 *
 * @param {Object} config  A configuration object which contains the custom type definition.  The object's
 *        properties will override the default methods and/or pattern in `Type`'s public interface.
 * @example
 * <pre>
 * {
 *   decode: function(val) { return parseInt(val, 10); },
 *   encode: function(val) { return val && val.toString(); },
 *   equals: function(a, b) { return this.is(a) && a === b; },
 *   is: function(val) { return angular.isNumber(val) isFinite(val) && val % 1 === 0; },
 *   pattern: /\d+/
 * }
 * </pre>
 *
 * @property {RegExp} pattern The regular expression pattern used to match values of this type when
 *           coming from a substring of a URL.
 *
 * @returns {Object}  Returns a new `Type` object.
 */
function Type(config) {
  extend(this, config);
}

/**
 * @ngdoc function
 * @name ui.router.util.type:Type#is
 * @methodOf ui.router.util.type:Type
 *
 * @description
 * Detects whether a value is of a particular type. Accepts a native (decoded) value
 * and determines whether it matches the current `Type` object.
 *
 * @param {*} val  The value to check.
 * @param {string} key  Optional. If the type check is happening in the context of a specific
 *        {@link ui.router.util.type:UrlMatcher `UrlMatcher`} object, this is the name of the
 *        parameter in which `val` is stored. Can be used for meta-programming of `Type` objects.
 * @returns {Boolean}  Returns `true` if the value matches the type, otherwise `false`.
 */
Type.prototype.is = function(val, key) {
  return true;
};

/**
 * @ngdoc function
 * @name ui.router.util.type:Type#encode
 * @methodOf ui.router.util.type:Type
 *
 * @description
 * Encodes a custom/native type value to a string that can be embedded in a URL. Note that the
 * return value does *not* need to be URL-safe (i.e. passed through `encodeURIComponent()`), it
 * only needs to be a representation of `val` that has been coerced to a string.
 *
 * @param {*} val  The value to encode.
 * @param {string} key  The name of the parameter in which `val` is stored. Can be used for
 *        meta-programming of `Type` objects.
 * @returns {string}  Returns a string representation of `val` that can be encoded in a URL.
 */
Type.prototype.encode = function(val, key) {
  return val;
};

/**
 * @ngdoc function
 * @name ui.router.util.type:Type#decode
 * @methodOf ui.router.util.type:Type
 *
 * @description
 * Converts a parameter value (from URL string or transition param) to a custom/native value.
 *
 * @param {string} val  The URL parameter value to decode.
 * @param {string} key  The name of the parameter in which `val` is stored. Can be used for
 *        meta-programming of `Type` objects.
 * @returns {*}  Returns a custom representation of the URL parameter value.
 */
Type.prototype.decode = function(val, key) {
  return val;
};

/**
 * @ngdoc function
 * @name ui.router.util.type:Type#equals
 * @methodOf ui.router.util.type:Type
 *
 * @description
 * Determines whether two decoded values are equivalent.
 *
 * @param {*} a  A value to compare against.
 * @param {*} b  A value to compare against.
 * @returns {Boolean}  Returns `true` if the values are equivalent/equal, otherwise `false`.
 */
Type.prototype.equals = function(a, b) {
  return a == b;
};

Type.prototype.$subPattern = function() {
  var sub = this.pattern.toString();
  return sub.substr(1, sub.length - 2);
};

Type.prototype.pattern = /.*/;

Type.prototype.toString = function() { return "{Type:" + this.name + "}"; };

/** Given an encoded string, or a decoded object, returns a decoded object */
Type.prototype.$normalize = function(val) {
  return this.is(val) ? val : this.decode(val);
};

/*
 * Wraps an existing custom Type as an array of Type, depending on 'mode'.
 * e.g.:
 * - urlmatcher pattern "/path?{queryParam[]:int}"
 * - url: "/path?queryParam=1&queryParam=2
 * - $stateParams.queryParam will be [1, 2]
 * if `mode` is "auto", then
 * - url: "/path?queryParam=1 will create $stateParams.queryParam: 1
 * - url: "/path?queryParam=1&queryParam=2 will create $stateParams.queryParam: [1, 2]
 */
Type.prototype.$asArray = function(mode, isSearch) {
  if (!mode) return this;
  if (mode === "auto" && !isSearch) throw new Error("'auto' array mode is for query parameters only");

  function ArrayType(type, mode) {
    function bindTo(type, callbackName) {
      return function() {
        return type[callbackName].apply(type, arguments);
      };
    }

    // Wrap non-array value as array
    function arrayWrap(val) { return isArray(val) ? val : (isDefined(val) ? [ val ] : []); }
    // Unwrap array value for "auto" mode. Return undefined for empty array.
    function arrayUnwrap(val) {
      switch(val.length) {
        case 0: return undefined;
        case 1: return mode === "auto" ? val[0] : val;
        default: return val;
      }
    }
    function falsey(val) { return !val; }

    // Wraps type (.is/.encode/.decode) functions to operate on each value of an array
    function arrayHandler(callback, allTruthyMode) {
      return function handleArray(val) {
        if (isArray(val) && val.length === 0) return val;
        val = arrayWrap(val);
        var result = map(val, callback);
        if (allTruthyMode === true)
          return filter(result, falsey).length === 0;
        return arrayUnwrap(result);
      };
    }

    // Wraps type (.equals) functions to operate on each value of an array
    function arrayEqualsHandler(callback) {
      return function handleArray(val1, val2) {
        var left = arrayWrap(val1), right = arrayWrap(val2);
        if (left.length !== right.length) return false;
        for (var i = 0; i < left.length; i++) {
          if (!callback(left[i], right[i])) return false;
        }
        return true;
      };
    }

    this.encode = arrayHandler(bindTo(type, 'encode'));
    this.decode = arrayHandler(bindTo(type, 'decode'));
    this.is     = arrayHandler(bindTo(type, 'is'), true);
    this.equals = arrayEqualsHandler(bindTo(type, 'equals'));
    this.pattern = type.pattern;
    this.$normalize = arrayHandler(bindTo(type, '$normalize'));
    this.name = type.name;
    this.$arrayMode = mode;
  }

  return new ArrayType(this, mode);
};



/**
 * @ngdoc object
 * @name ui.router.util.$urlMatcherFactory
 *
 * @description
 * Factory for {@link ui.router.util.type:UrlMatcher `UrlMatcher`} instances. The factory
 * is also available to providers under the name `$urlMatcherFactoryProvider`.
 */
function $UrlMatcherFactory() {
  $$UMFP = this;

  var isCaseInsensitive = false, isStrictMode = true, defaultSquashPolicy = false;

  // Use tildes to pre-encode slashes.
  // If the slashes are simply URLEncoded, the browser can choose to pre-decode them,
  // and bidirectional encoding/decoding fails.
  // Tilde was chosen because it's not a RFC 3986 section 2.2 Reserved Character
  function valToString(val) { return val != null ? val.toString().replace(/~/g, "~~").replace(/\//g, "~2F") : val; }
  function valFromString(val) { return val != null ? val.toString().replace(/~2F/g, "/").replace(/~~/g, "~") : val; }

  var $types = {}, enqueue = true, typeQueue = [], injector, defaultTypes = {
    "string": {
      encode: valToString,
      decode: valFromString,
      // TODO: in 1.0, make string .is() return false if value is undefined/null by default.
      // In 0.2.x, string params are optional by default for backwards compat
      is: function(val) { return val == null || !isDefined(val) || typeof val === "string"; },
      pattern: /[^/]*/
    },
    "int": {
      encode: valToString,
      decode: function(val) { return parseInt(val, 10); },
      is: function(val) { return isDefined(val) && this.decode(val.toString()) === val; },
      pattern: /\d+/
    },
    "bool": {
      encode: function(val) { return val ? 1 : 0; },
      decode: function(val) { return parseInt(val, 10) !== 0; },
      is: function(val) { return val === true || val === false; },
      pattern: /0|1/
    },
    "date": {
      encode: function (val) {
        if (!this.is(val))
          return undefined;
        return [ val.getFullYear(),
          ('0' + (val.getMonth() + 1)).slice(-2),
          ('0' + val.getDate()).slice(-2)
        ].join("-");
      },
      decode: function (val) {
        if (this.is(val)) return val;
        var match = this.capture.exec(val);
        return match ? new Date(match[1], match[2] - 1, match[3]) : undefined;
      },
      is: function(val) { return val instanceof Date && !isNaN(val.valueOf()); },
      equals: function (a, b) { return this.is(a) && this.is(b) && a.toISOString() === b.toISOString(); },
      pattern: /[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,
      capture: /([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/
    },
    "json": {
      encode: angular.toJson,
      decode: angular.fromJson,
      is: angular.isObject,
      equals: angular.equals,
      pattern: /[^/]*/
    },
    "any": { // does not encode/decode
      encode: angular.identity,
      decode: angular.identity,
      equals: angular.equals,
      pattern: /.*/
    }
  };

  function getDefaultConfig() {
    return {
      strict: isStrictMode,
      caseInsensitive: isCaseInsensitive
    };
  }

  function isInjectable(value) {
    return (isFunction(value) || (isArray(value) && isFunction(value[value.length - 1])));
  }

  /**
   * [Internal] Get the default value of a parameter, which may be an injectable function.
   */
  $UrlMatcherFactory.$$getDefaultValue = function(config) {
    if (!isInjectable(config.value)) return config.value;
    if (!injector) throw new Error("Injectable functions cannot be called at configuration time");
    return injector.invoke(config.value);
  };

  /**
   * @ngdoc function
   * @name ui.router.util.$urlMatcherFactory#caseInsensitive
   * @methodOf ui.router.util.$urlMatcherFactory
   *
   * @description
   * Defines whether URL matching should be case sensitive (the default behavior), or not.
   *
   * @param {boolean} value `false` to match URL in a case sensitive manner; otherwise `true`;
   * @returns {boolean} the current value of caseInsensitive
   */
  this.caseInsensitive = function(value) {
    if (isDefined(value))
      isCaseInsensitive = value;
    return isCaseInsensitive;
  };

  /**
   * @ngdoc function
   * @name ui.router.util.$urlMatcherFactory#strictMode
   * @methodOf ui.router.util.$urlMatcherFactory
   *
   * @description
   * Defines whether URLs should match trailing slashes, or not (the default behavior).
   *
   * @param {boolean=} value `false` to match trailing slashes in URLs, otherwise `true`.
   * @returns {boolean} the current value of strictMode
   */
  this.strictMode = function(value) {
    if (isDefined(value))
      isStrictMode = value;
    return isStrictMode;
  };

  /**
   * @ngdoc function
   * @name ui.router.util.$urlMatcherFactory#defaultSquashPolicy
   * @methodOf ui.router.util.$urlMatcherFactory
   *
   * @description
   * Sets the default behavior when generating or matching URLs with default parameter values.
   *
   * @param {string} value A string that defines the default parameter URL squashing behavior.
   *    `nosquash`: When generating an href with a default parameter value, do not squash the parameter value from the URL
   *    `slash`: When generating an href with a default parameter value, squash (remove) the parameter value, and, if the
   *             parameter is surrounded by slashes, squash (remove) one slash from the URL
   *    any other string, e.g. "~": When generating an href with a default parameter value, squash (remove)
   *             the parameter value from the URL and replace it with this string.
   */
  this.defaultSquashPolicy = function(value) {
    if (!isDefined(value)) return defaultSquashPolicy;
    if (value !== true && value !== false && !isString(value))
      throw new Error("Invalid squash policy: " + value + ". Valid policies: false, true, arbitrary-string");
    defaultSquashPolicy = value;
    return value;
  };

  /**
   * @ngdoc function
   * @name ui.router.util.$urlMatcherFactory#compile
   * @methodOf ui.router.util.$urlMatcherFactory
   *
   * @description
   * Creates a {@link ui.router.util.type:UrlMatcher `UrlMatcher`} for the specified pattern.
   *
   * @param {string} pattern  The URL pattern.
   * @param {Object} config  The config object hash.
   * @returns {UrlMatcher}  The UrlMatcher.
   */
  this.compile = function (pattern, config) {
    return new UrlMatcher(pattern, extend(getDefaultConfig(), config));
  };

  /**
   * @ngdoc function
   * @name ui.router.util.$urlMatcherFactory#isMatcher
   * @methodOf ui.router.util.$urlMatcherFactory
   *
   * @description
   * Returns true if the specified object is a `UrlMatcher`, or false otherwise.
   *
   * @param {Object} object  The object to perform the type check against.
   * @returns {Boolean}  Returns `true` if the object matches the `UrlMatcher` interface, by
   *          implementing all the same methods.
   */
  this.isMatcher = function (o) {
    if (!isObject(o)) return false;
    var result = true;

    forEach(UrlMatcher.prototype, function(val, name) {
      if (isFunction(val)) {
        result = result && (isDefined(o[name]) && isFunction(o[name]));
      }
    });
    return result;
  };

  /**
   * @ngdoc function
   * @name ui.router.util.$urlMatcherFactory#type
   * @methodOf ui.router.util.$urlMatcherFactory
   *
   * @description
   * Registers a custom {@link ui.router.util.type:Type `Type`} object that can be used to
   * generate URLs with typed parameters.
   *
   * @param {string} name  The type name.
   * @param {Object|Function} definition   The type definition. See
   *        {@link ui.router.util.type:Type `Type`} for information on the values accepted.
   * @param {Object|Function} definitionFn (optional) A function that is injected before the app
   *        runtime starts.  The result of this function is merged into the existing `definition`.
   *        See {@link ui.router.util.type:Type `Type`} for information on the values accepted.
   *
   * @returns {Object}  Returns `$urlMatcherFactoryProvider`.
   *
   * @example
   * This is a simple example of a custom type that encodes and decodes items from an
   * array, using the array index as the URL-encoded value:
   *
   * <pre>
   * var list = ['John', 'Paul', 'George', 'Ringo'];
   *
   * $urlMatcherFactoryProvider.type('listItem', {
   *   encode: function(item) {
   *     // Represent the list item in the URL using its corresponding index
   *     return list.indexOf(item);
   *   },
   *   decode: function(item) {
   *     // Look up the list item by index
   *     return list[parseInt(item, 10)];
   *   },
   *   is: function(item) {
   *     // Ensure the item is valid by checking to see that it appears
   *     // in the list
   *     return list.indexOf(item) > -1;
   *   }
   * });
   *
   * $stateProvider.state('list', {
   *   url: "/list/{item:listItem}",
   *   controller: function($scope, $stateParams) {
   *     console.log($stateParams.item);
   *   }
   * });
   *
   * // ...
   *
   * // Changes URL to '/list/3', logs "Ringo" to the console
   * $state.go('list', { item: "Ringo" });
   * </pre>
   *
   * This is a more complex example of a type that relies on dependency injection to
   * interact with services, and uses the parameter name from the URL to infer how to
   * handle encoding and decoding parameter values:
   *
   * <pre>
   * // Defines a custom type that gets a value from a service,
   * // where each service gets different types of values from
   * // a backend API:
   * $urlMatcherFactoryProvider.type('dbObject', {}, function(Users, Posts) {
   *
   *   // Matches up services to URL parameter names
   *   var services = {
   *     user: Users,
   *     post: Posts
   *   };
   *
   *   return {
   *     encode: function(object) {
   *       // Represent the object in the URL using its unique ID
   *       return object.id;
   *     },
   *     decode: function(value, key) {
   *       // Look up the object by ID, using the parameter
   *       // name (key) to call the correct service
   *       return services[key].findById(value);
   *     },
   *     is: function(object, key) {
   *       // Check that object is a valid dbObject
   *       return angular.isObject(object) && object.id && services[key];
   *     }
   *     equals: function(a, b) {
   *       // Check the equality of decoded objects by comparing
   *       // their unique IDs
   *       return a.id === b.id;
   *     }
   *   };
   * });
   *
   * // In a config() block, you can then attach URLs with
   * // type-annotated parameters:
   * $stateProvider.state('users', {
   *   url: "/users",
   *   // ...
   * }).state('users.item', {
   *   url: "/{user:dbObject}",
   *   controller: function($scope, $stateParams) {
   *     // $stateParams.user will now be an object returned from
   *     // the Users service
   *   },
   *   // ...
   * });
   * </pre>
   */
  this.type = function (name, definition, definitionFn) {
    if (!isDefined(definition)) return $types[name];
    if ($types.hasOwnProperty(name)) throw new Error("A type named '" + name + "' has already been defined.");

    $types[name] = new Type(extend({ name: name }, definition));
    if (definitionFn) {
      typeQueue.push({ name: name, def: definitionFn });
      if (!enqueue) flushTypeQueue();
    }
    return this;
  };

  // `flushTypeQueue()` waits until `$urlMatcherFactory` is injected before invoking the queued `definitionFn`s
  function flushTypeQueue() {
    while(typeQueue.length) {
      var type = typeQueue.shift();
      if (type.pattern) throw new Error("You cannot override a type's .pattern at runtime.");
      angular.extend($types[type.name], injector.invoke(type.def));
    }
  }

  // Register default types. Store them in the prototype of $types.
  forEach(defaultTypes, function(type, name) { $types[name] = new Type(extend({name: name}, type)); });
  $types = inherit($types, {});

  /* No need to document $get, since it returns this */
  this.$get = ['$injector', function ($injector) {
    injector = $injector;
    enqueue = false;
    flushTypeQueue();

    forEach(defaultTypes, function(type, name) {
      if (!$types[name]) $types[name] = new Type(type);
    });
    return this;
  }];

  this.Param = function Param(id, type, config, location) {
    var self = this;
    config = unwrapShorthand(config);
    type = getType(config, type, location);
    var arrayMode = getArrayMode();
    type = arrayMode ? type.$asArray(arrayMode, location === "search") : type;
    if (type.name === "string" && !arrayMode && location === "path" && config.value === undefined)
      config.value = ""; // for 0.2.x; in 0.3.0+ do not automatically default to ""
    var isOptional = config.value !== undefined;
    var squash = getSquashPolicy(config, isOptional);
    var replace = getReplace(config, arrayMode, isOptional, squash);

    function unwrapShorthand(config) {
      var keys = isObject(config) ? objectKeys(config) : [];
      var isShorthand = indexOf(keys, "value") === -1 && indexOf(keys, "type") === -1 &&
                        indexOf(keys, "squash") === -1 && indexOf(keys, "array") === -1;
      if (isShorthand) config = { value: config };
      config.$$fn = isInjectable(config.value) ? config.value : function () { return config.value; };
      return config;
    }

    function getType(config, urlType, location) {
      if (config.type && urlType) throw new Error("Param '"+id+"' has two type configurations.");
      if (urlType) return urlType;
      if (!config.type) return (location === "config" ? $types.any : $types.string);

      if (angular.isString(config.type))
        return $types[config.type];
      if (config.type instanceof Type)
        return config.type;
      return new Type(config.type);
    }

    // array config: param name (param[]) overrides default settings.  explicit config overrides param name.
    function getArrayMode() {
      var arrayDefaults = { array: (location === "search" ? "auto" : false) };
      var arrayParamNomenclature = id.match(/\[\]$/) ? { array: true } : {};
      return extend(arrayDefaults, arrayParamNomenclature, config).array;
    }

    /**
     * returns false, true, or the squash value to indicate the "default parameter url squash policy".
     */
    function getSquashPolicy(config, isOptional) {
      var squash = config.squash;
      if (!isOptional || squash === false) return false;
      if (!isDefined(squash) || squash == null) return defaultSquashPolicy;
      if (squash === true || isString(squash)) return squash;
      throw new Error("Invalid squash policy: '" + squash + "'. Valid policies: false, true, or arbitrary string");
    }

    function getReplace(config, arrayMode, isOptional, squash) {
      var replace, configuredKeys, defaultPolicy = [
        { from: "",   to: (isOptional || arrayMode ? undefined : "") },
        { from: null, to: (isOptional || arrayMode ? undefined : "") }
      ];
      replace = isArray(config.replace) ? config.replace : [];
      if (isString(squash))
        replace.push({ from: squash, to: undefined });
      configuredKeys = map(replace, function(item) { return item.from; } );
      return filter(defaultPolicy, function(item) { return indexOf(configuredKeys, item.from) === -1; }).concat(replace);
    }

    /**
     * [Internal] Get the default value of a parameter, which may be an injectable function.
     */
    function $$getDefaultValue() {
      if (!injector) throw new Error("Injectable functions cannot be called at configuration time");
      var defaultValue = injector.invoke(config.$$fn);
      if (defaultValue !== null && defaultValue !== undefined && !self.type.is(defaultValue))
        throw new Error("Default value (" + defaultValue + ") for parameter '" + self.id + "' is not an instance of Type (" + self.type.name + ")");
      return defaultValue;
    }

    /**
     * [Internal] Gets the decoded representation of a value if the value is defined, otherwise, returns the
     * default value, which may be the result of an injectable function.
     */
    function $value(value) {
      function hasReplaceVal(val) { return function(obj) { return obj.from === val; }; }
      function $replace(value) {
        var replacement = map(filter(self.replace, hasReplaceVal(value)), function(obj) { return obj.to; });
        return replacement.length ? replacement[0] : value;
      }
      value = $replace(value);
      return !isDefined(value) ? $$getDefaultValue() : self.type.$normalize(value);
    }

    function toString() { return "{Param:" + id + " " + type + " squash: '" + squash + "' optional: " + isOptional + "}"; }

    extend(this, {
      id: id,
      type: type,
      location: location,
      array: arrayMode,
      squash: squash,
      replace: replace,
      isOptional: isOptional,
      value: $value,
      dynamic: undefined,
      config: config,
      toString: toString
    });
  };

  function ParamSet(params) {
    extend(this, params || {});
  }

  ParamSet.prototype = {
    $$new: function() {
      return inherit(this, extend(new ParamSet(), { $$parent: this}));
    },
    $$keys: function () {
      var keys = [], chain = [], parent = this,
        ignore = objectKeys(ParamSet.prototype);
      while (parent) { chain.push(parent); parent = parent.$$parent; }
      chain.reverse();
      forEach(chain, function(paramset) {
        forEach(objectKeys(paramset), function(key) {
            if (indexOf(keys, key) === -1 && indexOf(ignore, key) === -1) keys.push(key);
        });
      });
      return keys;
    },
    $$values: function(paramValues) {
      var values = {}, self = this;
      forEach(self.$$keys(), function(key) {
        values[key] = self[key].value(paramValues && paramValues[key]);
      });
      return values;
    },
    $$equals: function(paramValues1, paramValues2) {
      var equal = true, self = this;
      forEach(self.$$keys(), function(key) {
        var left = paramValues1 && paramValues1[key], right = paramValues2 && paramValues2[key];
        if (!self[key].type.equals(left, right)) equal = false;
      });
      return equal;
    },
    $$validates: function $$validate(paramValues) {
      var keys = this.$$keys(), i, param, rawVal, normalized, encoded;
      for (i = 0; i < keys.length; i++) {
        param = this[keys[i]];
        rawVal = paramValues[keys[i]];
        if ((rawVal === undefined || rawVal === null) && param.isOptional)
          break; // There was no parameter value, but the param is optional
        normalized = param.type.$normalize(rawVal);
        if (!param.type.is(normalized))
          return false; // The value was not of the correct Type, and could not be decoded to the correct Type
        encoded = param.type.encode(normalized);
        if (angular.isString(encoded) && !param.type.pattern.exec(encoded))
          return false; // The value was of the correct type, but when encoded, did not match the Type's regexp
      }
      return true;
    },
    $$parent: undefined
  };

  this.ParamSet = ParamSet;
}

// Register as a provider so it's available to other providers
angular.module('ui.router.util').provider('$urlMatcherFactory', $UrlMatcherFactory);
angular.module('ui.router.util').run(['$urlMatcherFactory', function($urlMatcherFactory) { }]);

/**
 * @ngdoc object
 * @name ui.router.router.$urlRouterProvider
 *
 * @requires ui.router.util.$urlMatcherFactoryProvider
 * @requires $locationProvider
 *
 * @description
 * `$urlRouterProvider` has the responsibility of watching `$location`. 
 * When `$location` changes it runs through a list of rules one by one until a 
 * match is found. `$urlRouterProvider` is used behind the scenes anytime you specify 
 * a url in a state configuration. All urls are compiled into a UrlMatcher object.
 *
 * There are several methods on `$urlRouterProvider` that make it useful to use directly
 * in your module config.
 */
$UrlRouterProvider.$inject = ['$locationProvider', '$urlMatcherFactoryProvider'];
function $UrlRouterProvider(   $locationProvider,   $urlMatcherFactory) {
  var rules = [], otherwise = null, interceptDeferred = false, listener;

  // Returns a string that is a prefix of all strings matching the RegExp
  function regExpPrefix(re) {
    var prefix = /^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(re.source);
    return (prefix != null) ? prefix[1].replace(/\\(.)/g, "$1") : '';
  }

  // Interpolates matched values into a String.replace()-style pattern
  function interpolate(pattern, match) {
    return pattern.replace(/\$(\$|\d{1,2})/, function (m, what) {
      return match[what === '$' ? 0 : Number(what)];
    });
  }

  /**
   * @ngdoc function
   * @name ui.router.router.$urlRouterProvider#rule
   * @methodOf ui.router.router.$urlRouterProvider
   *
   * @description
   * Defines rules that are used by `$urlRouterProvider` to find matches for
   * specific URLs.
   *
   * @example
   * <pre>
   * var app = angular.module('app', ['ui.router.router']);
   *
   * app.config(function ($urlRouterProvider) {
   *   // Here's an example of how you might allow case insensitive urls
   *   $urlRouterProvider.rule(function ($injector, $location) {
   *     var path = $location.path(),
   *         normalized = path.toLowerCase();
   *
   *     if (path !== normalized) {
   *       return normalized;
   *     }
   *   });
   * });
   * </pre>
   *
   * @param {function} rule Handler function that takes `$injector` and `$location`
   * services as arguments. You can use them to return a valid path as a string.
   *
   * @return {object} `$urlRouterProvider` - `$urlRouterProvider` instance
   */
  this.rule = function (rule) {
    if (!isFunction(rule)) throw new Error("'rule' must be a function");
    rules.push(rule);
    return this;
  };

  /**
   * @ngdoc object
   * @name ui.router.router.$urlRouterProvider#otherwise
   * @methodOf ui.router.router.$urlRouterProvider
   *
   * @description
   * Defines a path that is used when an invalid route is requested.
   *
   * @example
   * <pre>
   * var app = angular.module('app', ['ui.router.router']);
   *
   * app.config(function ($urlRouterProvider) {
   *   // if the path doesn't match any of the urls you configured
   *   // otherwise will take care of routing the user to the
   *   // specified url
   *   $urlRouterProvider.otherwise('/index');
   *
   *   // Example of using function rule as param
   *   $urlRouterProvider.otherwise(function ($injector, $location) {
   *     return '/a/valid/url';
   *   });
   * });
   * </pre>
   *
   * @param {string|function} rule The url path you want to redirect to or a function 
   * rule that returns the url path. The function version is passed two params: 
   * `$injector` and `$location` services, and must return a url string.
   *
   * @return {object} `$urlRouterProvider` - `$urlRouterProvider` instance
   */
  this.otherwise = function (rule) {
    if (isString(rule)) {
      var redirect = rule;
      rule = function () { return redirect; };
    }
    else if (!isFunction(rule)) throw new Error("'rule' must be a function");
    otherwise = rule;
    return this;
  };


  function handleIfMatch($injector, handler, match) {
    if (!match) return false;
    var result = $injector.invoke(handler, handler, { $match: match });
    return isDefined(result) ? result : true;
  }

  /**
   * @ngdoc function
   * @name ui.router.router.$urlRouterProvider#when
   * @methodOf ui.router.router.$urlRouterProvider
   *
   * @description
   * Registers a handler for a given url matching. 
   * 
   * If the handler is a string, it is
   * treated as a redirect, and is interpolated according to the syntax of match
   * (i.e. like `String.replace()` for `RegExp`, or like a `UrlMatcher` pattern otherwise).
   *
   * If the handler is a function, it is injectable. It gets invoked if `$location`
   * matches. You have the option of inject the match object as `$match`.
   *
   * The handler can return
   *
   * - **falsy** to indicate that the rule didn't match after all, then `$urlRouter`
   *   will continue trying to find another one that matches.
   * - **string** which is treated as a redirect and passed to `$location.url()`
   * - **void** or any **truthy** value tells `$urlRouter` that the url was handled.
   *
   * @example
   * <pre>
   * var app = angular.module('app', ['ui.router.router']);
   *
   * app.config(function ($urlRouterProvider) {
   *   $urlRouterProvider.when($state.url, function ($match, $stateParams) {
   *     if ($state.$current.navigable !== state ||
   *         !equalForKeys($match, $stateParams) {
   *      $state.transitionTo(state, $match, false);
   *     }
   *   });
   * });
   * </pre>
   *
   * @param {string|object} what The incoming path that you want to redirect.
   * @param {string|function} handler The path you want to redirect your user to.
   */
  this.when = function (what, handler) {
    var redirect, handlerIsString = isString(handler);
    if (isString(what)) what = $urlMatcherFactory.compile(what);

    if (!handlerIsString && !isFunction(handler) && !isArray(handler))
      throw new Error("invalid 'handler' in when()");

    var strategies = {
      matcher: function (what, handler) {
        if (handlerIsString) {
          redirect = $urlMatcherFactory.compile(handler);
          handler = ['$match', function ($match) { return redirect.format($match); }];
        }
        return extend(function ($injector, $location) {
          return handleIfMatch($injector, handler, what.exec($location.path(), $location.search()));
        }, {
          prefix: isString(what.prefix) ? what.prefix : ''
        });
      },
      regex: function (what, handler) {
        if (what.global || what.sticky) throw new Error("when() RegExp must not be global or sticky");

        if (handlerIsString) {
          redirect = handler;
          handler = ['$match', function ($match) { return interpolate(redirect, $match); }];
        }
        return extend(function ($injector, $location) {
          return handleIfMatch($injector, handler, what.exec($location.path()));
        }, {
          prefix: regExpPrefix(what)
        });
      }
    };

    var check = { matcher: $urlMatcherFactory.isMatcher(what), regex: what instanceof RegExp };

    for (var n in check) {
      if (check[n]) return this.rule(strategies[n](what, handler));
    }

    throw new Error("invalid 'what' in when()");
  };

  /**
   * @ngdoc function
   * @name ui.router.router.$urlRouterProvider#deferIntercept
   * @methodOf ui.router.router.$urlRouterProvider
   *
   * @description
   * Disables (or enables) deferring location change interception.
   *
   * If you wish to customize the behavior of syncing the URL (for example, if you wish to
   * defer a transition but maintain the current URL), call this method at configuration time.
   * Then, at run time, call `$urlRouter.listen()` after you have configured your own
   * `$locationChangeSuccess` event handler.
   *
   * @example
   * <pre>
   * var app = angular.module('app', ['ui.router.router']);
   *
   * app.config(function ($urlRouterProvider) {
   *
   *   // Prevent $urlRouter from automatically intercepting URL changes;
   *   // this allows you to configure custom behavior in between
   *   // location changes and route synchronization:
   *   $urlRouterProvider.deferIntercept();
   *
   * }).run(function ($rootScope, $urlRouter, UserService) {
   *
   *   $rootScope.$on('$locationChangeSuccess', function(e) {
   *     // UserService is an example service for managing user state
   *     if (UserService.isLoggedIn()) return;
   *
   *     // Prevent $urlRouter's default handler from firing
   *     e.preventDefault();
   *
   *     UserService.handleLogin().then(function() {
   *       // Once the user has logged in, sync the current URL
   *       // to the router:
   *       $urlRouter.sync();
   *     });
   *   });
   *
   *   // Configures $urlRouter's listener *after* your custom listener
   *   $urlRouter.listen();
   * });
   * </pre>
   *
   * @param {boolean} defer Indicates whether to defer location change interception. Passing
            no parameter is equivalent to `true`.
   */
  this.deferIntercept = function (defer) {
    if (defer === undefined) defer = true;
    interceptDeferred = defer;
  };

  /**
   * @ngdoc object
   * @name ui.router.router.$urlRouter
   *
   * @requires $location
   * @requires $rootScope
   * @requires $injector
   * @requires $browser
   *
   * @description
   *
   */
  this.$get = $get;
  $get.$inject = ['$location', '$rootScope', '$injector', '$browser', '$sniffer'];
  function $get(   $location,   $rootScope,   $injector,   $browser,   $sniffer) {

    var baseHref = $browser.baseHref(), location = $location.url(), lastPushedUrl;

    function appendBasePath(url, isHtml5, absolute) {
      if (baseHref === '/') return url;
      if (isHtml5) return baseHref.slice(0, -1) + url;
      if (absolute) return baseHref.slice(1) + url;
      return url;
    }

    // TODO: Optimize groups of rules with non-empty prefix into some sort of decision tree
    function update(evt) {
      if (evt && evt.defaultPrevented) return;
      var ignoreUpdate = lastPushedUrl && $location.url() === lastPushedUrl;
      lastPushedUrl = undefined;
      // TODO: Re-implement this in 1.0 for https://github.com/angular-ui/ui-router/issues/1573
      //if (ignoreUpdate) return true;

      function check(rule) {
        var handled = rule($injector, $location);

        if (!handled) return false;
        if (isString(handled)) $location.replace().url(handled);
        return true;
      }
      var n = rules.length, i;

      for (i = 0; i < n; i++) {
        if (check(rules[i])) return;
      }
      // always check otherwise last to allow dynamic updates to the set of rules
      if (otherwise) check(otherwise);
    }

    function listen() {
      listener = listener || $rootScope.$on('$locationChangeSuccess', update);
      return listener;
    }

    if (!interceptDeferred) listen();

    return {
      /**
       * @ngdoc function
       * @name ui.router.router.$urlRouter#sync
       * @methodOf ui.router.router.$urlRouter
       *
       * @description
       * Triggers an update; the same update that happens when the address bar url changes, aka `$locationChangeSuccess`.
       * This method is useful when you need to use `preventDefault()` on the `$locationChangeSuccess` event,
       * perform some custom logic (route protection, auth, config, redirection, etc) and then finally proceed
       * with the transition by calling `$urlRouter.sync()`.
       *
       * @example
       * <pre>
       * angular.module('app', ['ui.router'])
       *   .run(function($rootScope, $urlRouter) {
       *     $rootScope.$on('$locationChangeSuccess', function(evt) {
       *       // Halt state change from even starting
       *       evt.preventDefault();
       *       // Perform custom logic
       *       var meetsRequirement = ...
       *       // Continue with the update and state transition if logic allows
       *       if (meetsRequirement) $urlRouter.sync();
       *     });
       * });
       * </pre>
       */
      sync: function() {
        update();
      },

      listen: function() {
        return listen();
      },

      update: function(read) {
        if (read) {
          location = $location.url();
          return;
        }
        if ($location.url() === location) return;

        $location.url(location);
        $location.replace();
      },

      push: function(urlMatcher, params, options) {
         var url = urlMatcher.format(params || {});

        // Handle the special hash param, if needed
        if (url !== null && params && params['#']) {
            url += '#' + params['#'];
        }

        $location.url(url);
        lastPushedUrl = options && options.$$avoidResync ? $location.url() : undefined;
        if (options && options.replace) $location.replace();
      },

      /**
       * @ngdoc function
       * @name ui.router.router.$urlRouter#href
       * @methodOf ui.router.router.$urlRouter
       *
       * @description
       * A URL generation method that returns the compiled URL for a given
       * {@link ui.router.util.type:UrlMatcher `UrlMatcher`}, populated with the provided parameters.
       *
       * @example
       * <pre>
       * $bob = $urlRouter.href(new UrlMatcher("/about/:person"), {
       *   person: "bob"
       * });
       * // $bob == "/about/bob";
       * </pre>
       *
       * @param {UrlMatcher} urlMatcher The `UrlMatcher` object which is used as the template of the URL to generate.
       * @param {object=} params An object of parameter values to fill the matcher's required parameters.
       * @param {object=} options Options object. The options are:
       *
       * - **`absolute`** - {boolean=false},  If true will generate an absolute url, e.g. "http://www.example.com/fullurl".
       *
       * @returns {string} Returns the fully compiled URL, or `null` if `params` fail validation against `urlMatcher`
       */
      href: function(urlMatcher, params, options) {
        if (!urlMatcher.validates(params)) return null;

        var isHtml5 = $locationProvider.html5Mode();
        if (angular.isObject(isHtml5)) {
          isHtml5 = isHtml5.enabled;
        }

        isHtml5 = isHtml5 && $sniffer.history;
        
        var url = urlMatcher.format(params);
        options = options || {};

        if (!isHtml5 && url !== null) {
          url = "#" + $locationProvider.hashPrefix() + url;
        }

        // Handle special hash param, if needed
        if (url !== null && params && params['#']) {
          url += '#' + params['#'];
        }

        url = appendBasePath(url, isHtml5, options.absolute);

        if (!options.absolute || !url) {
          return url;
        }

        var slash = (!isHtml5 && url ? '/' : ''), port = $location.port();
        port = (port === 80 || port === 443 ? '' : ':' + port);

        return [$location.protocol(), '://', $location.host(), port, slash, url].join('');
      }
    };
  }
}

angular.module('ui.router.router').provider('$urlRouter', $UrlRouterProvider);

/**
 * @ngdoc object
 * @name ui.router.state.$stateProvider
 *
 * @requires ui.router.router.$urlRouterProvider
 * @requires ui.router.util.$urlMatcherFactoryProvider
 *
 * @description
 * The new `$stateProvider` works similar to Angular's v1 router, but it focuses purely
 * on state.
 *
 * A state corresponds to a "place" in the application in terms of the overall UI and
 * navigation. A state describes (via the controller / template / view properties) what
 * the UI looks like and does at that place.
 *
 * States often have things in common, and the primary way of factoring out these
 * commonalities in this model is via the state hierarchy, i.e. parent/child states aka
 * nested states.
 *
 * The `$stateProvider` provides interfaces to declare these states for your app.
 */
$StateProvider.$inject = ['$urlRouterProvider', '$urlMatcherFactoryProvider'];
function $StateProvider(   $urlRouterProvider,   $urlMatcherFactory) {

  var root, states = {}, $state, queue = {}, abstractKey = 'abstract';

  // Builds state properties from definition passed to registerState()
  var stateBuilder = {

    // Derive parent state from a hierarchical name only if 'parent' is not explicitly defined.
    // state.children = [];
    // if (parent) parent.children.push(state);
    parent: function(state) {
      if (isDefined(state.parent) && state.parent) return findState(state.parent);
      // regex matches any valid composite state name
      // would match "contact.list" but not "contacts"
      var compositeName = /^(.+)\.[^.]+$/.exec(state.name);
      return compositeName ? findState(compositeName[1]) : root;
    },

    // inherit 'data' from parent and override by own values (if any)
    data: function(state) {
      if (state.parent && state.parent.data) {
        state.data = state.self.data = inherit(state.parent.data, state.data);
      }
      return state.data;
    },

    // Build a URLMatcher if necessary, either via a relative or absolute URL
    url: function(state) {
      var url = state.url, config = { params: state.params || {} };

      if (isString(url)) {
        if (url.charAt(0) == '^') return $urlMatcherFactory.compile(url.substring(1), config);
        return (state.parent.navigable || root).url.concat(url, config);
      }

      if (!url || $urlMatcherFactory.isMatcher(url)) return url;
      throw new Error("Invalid url '" + url + "' in state '" + state + "'");
    },

    // Keep track of the closest ancestor state that has a URL (i.e. is navigable)
    navigable: function(state) {
      return state.url ? state : (state.parent ? state.parent.navigable : null);
    },

    // Own parameters for this state. state.url.params is already built at this point. Create and add non-url params
    ownParams: function(state) {
      var params = state.url && state.url.params || new $$UMFP.ParamSet();
      forEach(state.params || {}, function(config, id) {
        if (!params[id]) params[id] = new $$UMFP.Param(id, null, config, "config");
      });
      return params;
    },

    // Derive parameters for this state and ensure they're a super-set of parent's parameters
    params: function(state) {
      var ownParams = pick(state.ownParams, state.ownParams.$$keys());
      return state.parent && state.parent.params ? extend(state.parent.params.$$new(), ownParams) : new $$UMFP.ParamSet();
    },

    // If there is no explicit multi-view configuration, make one up so we don't have
    // to handle both cases in the view directive later. Note that having an explicit
    // 'views' property will mean the default unnamed view properties are ignored. This
    // is also a good time to resolve view names to absolute names, so everything is a
    // straight lookup at link time.
    views: function(state) {
      var views = {};

      forEach(isDefined(state.views) ? state.views : { '': state }, function (view, name) {
        if (name.indexOf('@') < 0) name += '@' + state.parent.name;
        views[name] = view;
      });
      return views;
    },

    // Keep a full path from the root down to this state as this is needed for state activation.
    path: function(state) {
      return state.parent ? state.parent.path.concat(state) : []; // exclude root from path
    },

    // Speed up $state.contains() as it's used a lot
    includes: function(state) {
      var includes = state.parent ? extend({}, state.parent.includes) : {};
      includes[state.name] = true;
      return includes;
    },

    $delegates: {}
  };

  function isRelative(stateName) {
    return stateName.indexOf(".") === 0 || stateName.indexOf("^") === 0;
  }

  function findState(stateOrName, base) {
    if (!stateOrName) return undefined;

    var isStr = isString(stateOrName),
        name  = isStr ? stateOrName : stateOrName.name,
        path  = isRelative(name);

    if (path) {
      if (!base) throw new Error("No reference point given for path '"  + name + "'");
      base = findState(base);
      
      var rel = name.split("."), i = 0, pathLength = rel.length, current = base;

      for (; i < pathLength; i++) {
        if (rel[i] === "" && i === 0) {
          current = base;
          continue;
        }
        if (rel[i] === "^") {
          if (!current.parent) throw new Error("Path '" + name + "' not valid for state '" + base.name + "'");
          current = current.parent;
          continue;
        }
        break;
      }
      rel = rel.slice(i).join(".");
      name = current.name + (current.name && rel ? "." : "") + rel;
    }
    var state = states[name];

    if (state && (isStr || (!isStr && (state === stateOrName || state.self === stateOrName)))) {
      return state;
    }
    return undefined;
  }

  function queueState(parentName, state) {
    if (!queue[parentName]) {
      queue[parentName] = [];
    }
    queue[parentName].push(state);
  }

  function flushQueuedChildren(parentName) {
    var queued = queue[parentName] || [];
    while(queued.length) {
      registerState(queued.shift());
    }
  }

  function registerState(state) {
    // Wrap a new object around the state so we can store our private details easily.
    state = inherit(state, {
      self: state,
      resolve: state.resolve || {},
      toString: function() { return this.name; }
    });

    var name = state.name;
    if (!isString(name) || name.indexOf('@') >= 0) throw new Error("State must have a valid name");
    if (states.hasOwnProperty(name)) throw new Error("State '" + name + "' is already defined");

    // Get parent name
    var parentName = (name.indexOf('.') !== -1) ? name.substring(0, name.lastIndexOf('.'))
        : (isString(state.parent)) ? state.parent
        : (isObject(state.parent) && isString(state.parent.name)) ? state.parent.name
        : '';

    // If parent is not registered yet, add state to queue and register later
    if (parentName && !states[parentName]) {
      return queueState(parentName, state.self);
    }

    for (var key in stateBuilder) {
      if (isFunction(stateBuilder[key])) state[key] = stateBuilder[key](state, stateBuilder.$delegates[key]);
    }
    states[name] = state;

    // Register the state in the global state list and with $urlRouter if necessary.
    if (!state[abstractKey] && state.url) {
      $urlRouterProvider.when(state.url, ['$match', '$stateParams', function ($match, $stateParams) {
        if ($state.$current.navigable != state || !equalForKeys($match, $stateParams)) {
          $state.transitionTo(state, $match, { inherit: true, location: false });
        }
      }]);
    }

    // Register any queued children
    flushQueuedChildren(name);

    return state;
  }

  // Checks text to see if it looks like a glob.
  function isGlob (text) {
    return text.indexOf('*') > -1;
  }

  // Returns true if glob matches current $state name.
  function doesStateMatchGlob (glob) {
    var globSegments = glob.split('.'),
        segments = $state.$current.name.split('.');

    //match single stars
    for (var i = 0, l = globSegments.length; i < l; i++) {
      if (globSegments[i] === '*') {
        segments[i] = '*';
      }
    }

    //match greedy starts
    if (globSegments[0] === '**') {
       segments = segments.slice(indexOf(segments, globSegments[1]));
       segments.unshift('**');
    }
    //match greedy ends
    if (globSegments[globSegments.length - 1] === '**') {
       segments.splice(indexOf(segments, globSegments[globSegments.length - 2]) + 1, Number.MAX_VALUE);
       segments.push('**');
    }

    if (globSegments.length != segments.length) {
      return false;
    }

    return segments.join('') === globSegments.join('');
  }


  // Implicit root state that is always active
  root = registerState({
    name: '',
    url: '^',
    views: null,
    'abstract': true
  });
  root.navigable = null;


  /**
   * @ngdoc function
   * @name ui.router.state.$stateProvider#decorator
   * @methodOf ui.router.state.$stateProvider
   *
   * @description
   * Allows you to extend (carefully) or override (at your own peril) the 
   * `stateBuilder` object used internally by `$stateProvider`. This can be used 
   * to add custom functionality to ui-router, for example inferring templateUrl 
   * based on the state name.
   *
   * When passing only a name, it returns the current (original or decorated) builder
   * function that matches `name`.
   *
   * The builder functions that can be decorated are listed below. Though not all
   * necessarily have a good use case for decoration, that is up to you to decide.
   *
   * In addition, users can attach custom decorators, which will generate new 
   * properties within the state's internal definition. There is currently no clear 
   * use-case for this beyond accessing internal states (i.e. $state.$current), 
   * however, expect this to become increasingly relevant as we introduce additional 
   * meta-programming features.
   *
   * **Warning**: Decorators should not be interdependent because the order of 
   * execution of the builder functions in non-deterministic. Builder functions 
   * should only be dependent on the state definition object and super function.
   *
   *
   * Existing builder functions and current return values:
   *
   * - **parent** `{object}` - returns the parent state object.
   * - **data** `{object}` - returns state data, including any inherited data that is not
   *   overridden by own values (if any).
   * - **url** `{object}` - returns a {@link ui.router.util.type:UrlMatcher UrlMatcher}
   *   or `null`.
   * - **navigable** `{object}` - returns closest ancestor state that has a URL (aka is 
   *   navigable).
   * - **params** `{object}` - returns an array of state params that are ensured to 
   *   be a super-set of parent's params.
   * - **views** `{object}` - returns a views object where each key is an absolute view 
   *   name (i.e. "viewName@stateName") and each value is the config object 
   *   (template, controller) for the view. Even when you don't use the views object 
   *   explicitly on a state config, one is still created for you internally.
   *   So by decorating this builder function you have access to decorating template 
   *   and controller properties.
   * - **ownParams** `{object}` - returns an array of params that belong to the state, 
   *   not including any params defined by ancestor states.
   * - **path** `{string}` - returns the full path from the root down to this state. 
   *   Needed for state activation.
   * - **includes** `{object}` - returns an object that includes every state that 
   *   would pass a `$state.includes()` test.
   *
   * @example
   * <pre>
   * // Override the internal 'views' builder with a function that takes the state
   * // definition, and a reference to the internal function being overridden:
   * $stateProvider.decorator('views', function (state, parent) {
   *   var result = {},
   *       views = parent(state);
   *
   *   angular.forEach(views, function (config, name) {
   *     var autoName = (state.name + '.' + name).replace('.', '/');
   *     config.templateUrl = config.templateUrl || '/partials/' + autoName + '.html';
   *     result[name] = config;
   *   });
   *   return result;
   * });
   *
   * $stateProvider.state('home', {
   *   views: {
   *     'contact.list': { controller: 'ListController' },
   *     'contact.item': { controller: 'ItemController' }
   *   }
   * });
   *
   * // ...
   *
   * $state.go('home');
   * // Auto-populates list and item views with /partials/home/contact/list.html,
   * // and /partials/home/contact/item.html, respectively.
   * </pre>
   *
   * @param {string} name The name of the builder function to decorate. 
   * @param {object} func A function that is responsible for decorating the original 
   * builder function. The function receives two parameters:
   *
   *   - `{object}` - state - The state config object.
   *   - `{object}` - super - The original builder function.
   *
   * @return {object} $stateProvider - $stateProvider instance
   */
  this.decorator = decorator;
  function decorator(name, func) {
    /*jshint validthis: true */
    if (isString(name) && !isDefined(func)) {
      return stateBuilder[name];
    }
    if (!isFunction(func) || !isString(name)) {
      return this;
    }
    if (stateBuilder[name] && !stateBuilder.$delegates[name]) {
      stateBuilder.$delegates[name] = stateBuilder[name];
    }
    stateBuilder[name] = func;
    return this;
  }

  /**
   * @ngdoc function
   * @name ui.router.state.$stateProvider#state
   * @methodOf ui.router.state.$stateProvider
   *
   * @description
   * Registers a state configuration under a given state name. The stateConfig object
   * has the following acceptable properties.
   *
   * @param {string} name A unique state name, e.g. "home", "about", "contacts".
   * To create a parent/child state use a dot, e.g. "about.sales", "home.newest".
   * @param {object} stateConfig State configuration object.
   * @param {string|function=} stateConfig.template
   * <a id='template'></a>
   *   html template as a string or a function that returns
   *   an html template as a string which should be used by the uiView directives. This property 
   *   takes precedence over templateUrl.
   *   
   *   If `template` is a function, it will be called with the following parameters:
   *
   *   - {array.&lt;object&gt;} - state parameters extracted from the current $location.path() by
   *     applying the current state
   *
   * <pre>template:
   *   "<h1>inline template definition</h1>" +
   *   "<div ui-view></div>"</pre>
   * <pre>template: function(params) {
   *       return "<h1>generated template</h1>"; }</pre>
   * </div>
   *
   * @param {string|function=} stateConfig.templateUrl
   * <a id='templateUrl'></a>
   *
   *   path or function that returns a path to an html
   *   template that should be used by uiView.
   *   
   *   If `templateUrl` is a function, it will be called with the following parameters:
   *
   *   - {array.&lt;object&gt;} - state parameters extracted from the current $location.path() by 
   *     applying the current state
   *
   * <pre>templateUrl: "home.html"</pre>
   * <pre>templateUrl: function(params) {
   *     return myTemplates[params.pageId]; }</pre>
   *
   * @param {function=} stateConfig.templateProvider
   * <a id='templateProvider'></a>
   *    Provider function that returns HTML content string.
   * <pre> templateProvider:
   *       function(MyTemplateService, params) {
   *         return MyTemplateService.getTemplate(params.pageId);
   *       }</pre>
   *
   * @param {string|function=} stateConfig.controller
   * <a id='controller'></a>
   *
   *  Controller fn that should be associated with newly
   *   related scope or the name of a registered controller if passed as a string.
   *   Optionally, the ControllerAs may be declared here.
   * <pre>controller: "MyRegisteredController"</pre>
   * <pre>controller:
   *     "MyRegisteredController as fooCtrl"}</pre>
   * <pre>controller: function($scope, MyService) {
   *     $scope.data = MyService.getData(); }</pre>
   *
   * @param {function=} stateConfig.controllerProvider
   * <a id='controllerProvider'></a>
   *
   * Injectable provider function that returns the actual controller or string.
   * <pre>controllerProvider:
   *   function(MyResolveData) {
   *     if (MyResolveData.foo)
   *       return "FooCtrl"
   *     else if (MyResolveData.bar)
   *       return "BarCtrl";
   *     else return function($scope) {
   *       $scope.baz = "Qux";
   *     }
   *   }</pre>
   *
   * @param {string=} stateConfig.controllerAs
   * <a id='controllerAs'></a>
   * 
   * A controller alias name. If present the controller will be
   *   published to scope under the controllerAs name.
   * <pre>controllerAs: "myCtrl"</pre>
   *
   * @param {string|object=} stateConfig.parent
   * <a id='parent'></a>
   * Optionally specifies the parent state of this state.
   *
   * <pre>parent: 'parentState'</pre>
   * <pre>parent: parentState // JS variable</pre>
   *
   * @param {object=} stateConfig.resolve
   * <a id='resolve'></a>
   *
   * An optional map&lt;string, function&gt; of dependencies which
   *   should be injected into the controller. If any of these dependencies are promises, 
   *   the router will wait for them all to be resolved before the controller is instantiated.
   *   If all the promises are resolved successfully, the $stateChangeSuccess event is fired
   *   and the values of the resolved promises are injected into any controllers that reference them.
   *   If any  of the promises are rejected the $stateChangeError event is fired.
   *
   *   The map object is:
   *   
   *   - key - {string}: name of dependency to be injected into controller
   *   - factory - {string|function}: If string then it is alias for service. Otherwise if function, 
   *     it is injected and return value it treated as dependency. If result is a promise, it is 
   *     resolved before its value is injected into controller.
   *
   * <pre>resolve: {
   *     myResolve1:
   *       function($http, $stateParams) {
   *         return $http.get("/api/foos/"+stateParams.fooID);
   *       }
   *     }</pre>
   *
   * @param {string=} stateConfig.url
   * <a id='url'></a>
   *
   *   A url fragment with optional parameters. When a state is navigated or
   *   transitioned to, the `$stateParams` service will be populated with any 
   *   parameters that were passed.
   *
   *   (See {@link ui.router.util.type:UrlMatcher UrlMatcher} `UrlMatcher`} for
   *   more details on acceptable patterns )
   *
   * examples:
   * <pre>url: "/home"
   * url: "/users/:userid"
   * url: "/books/{bookid:[a-zA-Z_-]}"
   * url: "/books/{categoryid:int}"
   * url: "/books/{publishername:string}/{categoryid:int}"
   * url: "/messages?before&after"
   * url: "/messages?{before:date}&{after:date}"
   * url: "/messages/:mailboxid?{before:date}&{after:date}"
   * </pre>
   *
   * @param {object=} stateConfig.views
   * <a id='views'></a>
   * an optional map&lt;string, object&gt; which defined multiple views, or targets views
   * manually/explicitly.
   *
   * Examples:
   *
   * Targets three named `ui-view`s in the parent state's template
   * <pre>views: {
   *     header: {
   *       controller: "headerCtrl",
   *       templateUrl: "header.html"
   *     }, body: {
   *       controller: "bodyCtrl",
   *       templateUrl: "body.html"
   *     }, footer: {
   *       controller: "footCtrl",
   *       templateUrl: "footer.html"
   *     }
   *   }</pre>
   *
   * Targets named `ui-view="header"` from grandparent state 'top''s template, and named `ui-view="body" from parent state's template.
   * <pre>views: {
   *     'header@top': {
   *       controller: "msgHeaderCtrl",
   *       templateUrl: "msgHeader.html"
   *     }, 'body': {
   *       controller: "messagesCtrl",
   *       templateUrl: "messages.html"
   *     }
   *   }</pre>
   *
   * @param {boolean=} [stateConfig.abstract=false]
   * <a id='abstract'></a>
   * An abstract state will never be directly activated,
   *   but can provide inherited properties to its common children states.
   * <pre>abstract: true</pre>
   *
   * @param {function=} stateConfig.onEnter
   * <a id='onEnter'></a>
   *
   * Callback function for when a state is entered. Good way
   *   to trigger an action or dispatch an event, such as opening a dialog.
   * If minifying your scripts, make sure to explicitly annotate this function,
   * because it won't be automatically annotated by your build tools.
   *
   * <pre>onEnter: function(MyService, $stateParams) {
   *     MyService.foo($stateParams.myParam);
   * }</pre>
   *
   * @param {function=} stateConfig.onExit
   * <a id='onExit'></a>
   *
   * Callback function for when a state is exited. Good way to
   *   trigger an action or dispatch an event, such as opening a dialog.
   * If minifying your scripts, make sure to explicitly annotate this function,
   * because it won't be automatically annotated by your build tools.
   *
   * <pre>onExit: function(MyService, $stateParams) {
   *     MyService.cleanup($stateParams.myParam);
   * }</pre>
   *
   * @param {boolean=} [stateConfig.reloadOnSearch=true]
   * <a id='reloadOnSearch'></a>
   *
   * If `false`, will not retrigger the same state
   *   just because a search/query parameter has changed (via $location.search() or $location.hash()). 
   *   Useful for when you'd like to modify $location.search() without triggering a reload.
   * <pre>reloadOnSearch: false</pre>
   *
   * @param {object=} stateConfig.data
   * <a id='data'></a>
   *
   * Arbitrary data object, useful for custom configuration.  The parent state's `data` is
   *   prototypally inherited.  In other words, adding a data property to a state adds it to
   *   the entire subtree via prototypal inheritance.
   *
   * <pre>data: {
   *     requiredRole: 'foo'
   * } </pre>
   *
   * @param {object=} stateConfig.params
   * <a id='params'></a>
   *
   * A map which optionally configures parameters declared in the `url`, or
   *   defines additional non-url parameters.  For each parameter being
   *   configured, add a configuration object keyed to the name of the parameter.
   *
   *   Each parameter configuration object may contain the following properties:
   *
   *   - ** value ** - {object|function=}: specifies the default value for this
   *     parameter.  This implicitly sets this parameter as optional.
   *
   *     When UI-Router routes to a state and no value is
   *     specified for this parameter in the URL or transition, the
   *     default value will be used instead.  If `value` is a function,
   *     it will be injected and invoked, and the return value used.
   *
   *     *Note*: `undefined` is treated as "no default value" while `null`
   *     is treated as "the default value is `null`".
   *
   *     *Shorthand*: If you only need to configure the default value of the
   *     parameter, you may use a shorthand syntax.   In the **`params`**
   *     map, instead mapping the param name to a full parameter configuration
   *     object, simply set map it to the default parameter value, e.g.:
   *
   * <pre>// define a parameter's default value
   * params: {
   *     param1: { value: "defaultValue" }
   * }
   * // shorthand default values
   * params: {
   *     param1: "defaultValue",
   *     param2: "param2Default"
   * }</pre>
   *
   *   - ** array ** - {boolean=}: *(default: false)* If true, the param value will be
   *     treated as an array of values.  If you specified a Type, the value will be
   *     treated as an array of the specified Type.  Note: query parameter values
   *     default to a special `"auto"` mode.
   *
   *     For query parameters in `"auto"` mode, if multiple  values for a single parameter
   *     are present in the URL (e.g.: `/foo?bar=1&bar=2&bar=3`) then the values
   *     are mapped to an array (e.g.: `{ foo: [ '1', '2', '3' ] }`).  However, if
   *     only one value is present (e.g.: `/foo?bar=1`) then the value is treated as single
   *     value (e.g.: `{ foo: '1' }`).
   *
   * <pre>params: {
   *     param1: { array: true }
   * }</pre>
   *
   *   - ** squash ** - {bool|string=}: `squash` configures how a default parameter value is represented in the URL when
   *     the current parameter value is the same as the default value. If `squash` is not set, it uses the
   *     configured default squash policy.
   *     (See {@link ui.router.util.$urlMatcherFactory#methods_defaultSquashPolicy `defaultSquashPolicy()`})
   *
   *   There are three squash settings:
   *
   *     - false: The parameter's default value is not squashed.  It is encoded and included in the URL
   *     - true: The parameter's default value is omitted from the URL.  If the parameter is preceeded and followed
   *       by slashes in the state's `url` declaration, then one of those slashes are omitted.
   *       This can allow for cleaner looking URLs.
   *     - `"<arbitrary string>"`: The parameter's default value is replaced with an arbitrary placeholder of  your choice.
   *
   * <pre>params: {
   *     param1: {
   *       value: "defaultId",
   *       squash: true
   * } }
   * // squash "defaultValue" to "~"
   * params: {
   *     param1: {
   *       value: "defaultValue",
   *       squash: "~"
   * } }
   * </pre>
   *
   *
   * @example
   * <pre>
   * // Some state name examples
   *
   * // stateName can be a single top-level name (must be unique).
   * $stateProvider.state("home", {});
   *
   * // Or it can be a nested state name. This state is a child of the
   * // above "home" state.
   * $stateProvider.state("home.newest", {});
   *
   * // Nest states as deeply as needed.
   * $stateProvider.state("home.newest.abc.xyz.inception", {});
   *
   * // state() returns $stateProvider, so you can chain state declarations.
   * $stateProvider
   *   .state("home", {})
   *   .state("about", {})
   *   .state("contacts", {});
   * </pre>
   *
   */
  this.state = state;
  function state(name, definition) {
    /*jshint validthis: true */
    if (isObject(name)) definition = name;
    else definition.name = name;
    registerState(definition);
    return this;
  }

  /**
   * @ngdoc object
   * @name ui.router.state.$state
   *
   * @requires $rootScope
   * @requires $q
   * @requires ui.router.state.$view
   * @requires $injector
   * @requires ui.router.util.$resolve
   * @requires ui.router.state.$stateParams
   * @requires ui.router.router.$urlRouter
   *
   * @property {object} params A param object, e.g. {sectionId: section.id)}, that 
   * you'd like to test against the current active state.
   * @property {object} current A reference to the state's config object. However 
   * you passed it in. Useful for accessing custom data.
   * @property {object} transition Currently pending transition. A promise that'll 
   * resolve or reject.
   *
   * @description
   * `$state` service is responsible for representing states as well as transitioning
   * between them. It also provides interfaces to ask for current state or even states
   * you're coming from.
   */
  this.$get = $get;
  $get.$inject = ['$rootScope', '$q', '$view', '$injector', '$resolve', '$stateParams', '$urlRouter', '$location', '$urlMatcherFactory'];
  function $get(   $rootScope,   $q,   $view,   $injector,   $resolve,   $stateParams,   $urlRouter,   $location,   $urlMatcherFactory) {

    var TransitionSuperseded = $q.reject(new Error('transition superseded'));
    var TransitionPrevented = $q.reject(new Error('transition prevented'));
    var TransitionAborted = $q.reject(new Error('transition aborted'));
    var TransitionFailed = $q.reject(new Error('transition failed'));

    // Handles the case where a state which is the target of a transition is not found, and the user
    // can optionally retry or defer the transition
    function handleRedirect(redirect, state, params, options) {
      /**
       * @ngdoc event
       * @name ui.router.state.$state#$stateNotFound
       * @eventOf ui.router.state.$state
       * @eventType broadcast on root scope
       * @description
       * Fired when a requested state **cannot be found** using the provided state name during transition.
       * The event is broadcast allowing any handlers a single chance to deal with the error (usually by
       * lazy-loading the unfound state). A special `unfoundState` object is passed to the listener handler,
       * you can see its three properties in the example. You can use `event.preventDefault()` to abort the
       * transition and the promise returned from `go` will be rejected with a `'transition aborted'` value.
       *
       * @param {Object} event Event object.
       * @param {Object} unfoundState Unfound State information. Contains: `to, toParams, options` properties.
       * @param {State} fromState Current state object.
       * @param {Object} fromParams Current state params.
       *
       * @example
       *
       * <pre>
       * // somewhere, assume lazy.state has not been defined
       * $state.go("lazy.state", {a:1, b:2}, {inherit:false});
       *
       * // somewhere else
       * $scope.$on('$stateNotFound',
       * function(event, unfoundState, fromState, fromParams){
       *     console.log(unfoundState.to); // "lazy.state"
       *     console.log(unfoundState.toParams); // {a:1, b:2}
       *     console.log(unfoundState.options); // {inherit:false} + default options
       * })
       * </pre>
       */
      var evt = $rootScope.$broadcast('$stateNotFound', redirect, state, params);

      if (evt.defaultPrevented) {
        $urlRouter.update();
        return TransitionAborted;
      }

      if (!evt.retry) {
        return null;
      }

      // Allow the handler to return a promise to defer state lookup retry
      if (options.$retry) {
        $urlRouter.update();
        return TransitionFailed;
      }
      var retryTransition = $state.transition = $q.when(evt.retry);

      retryTransition.then(function() {
        if (retryTransition !== $state.transition) return TransitionSuperseded;
        redirect.options.$retry = true;
        return $state.transitionTo(redirect.to, redirect.toParams, redirect.options);
      }, function() {
        return TransitionAborted;
      });
      $urlRouter.update();

      return retryTransition;
    }

    root.locals = { resolve: null, globals: { $stateParams: {} } };

    $state = {
      params: {},
      current: root.self,
      $current: root,
      transition: null
    };

    /**
     * @ngdoc function
     * @name ui.router.state.$state#reload
     * @methodOf ui.router.state.$state
     *
     * @description
     * A method that force reloads the current state. All resolves are re-resolved,
     * controllers reinstantiated, and events re-fired.
     *
     * @example
     * <pre>
     * var app angular.module('app', ['ui.router']);
     *
     * app.controller('ctrl', function ($scope, $state) {
     *   $scope.reload = function(){
     *     $state.reload();
     *   }
     * });
     * </pre>
     *
     * `reload()` is just an alias for:
     * <pre>
     * $state.transitionTo($state.current, $stateParams, { 
     *   reload: true, inherit: false, notify: true
     * });
     * </pre>
     *
     * @param {string=|object=} state - A state name or a state object, which is the root of the resolves to be re-resolved.
     * @example
     * <pre>
     * //assuming app application consists of 3 states: 'contacts', 'contacts.detail', 'contacts.detail.item' 
     * //and current state is 'contacts.detail.item'
     * var app angular.module('app', ['ui.router']);
     *
     * app.controller('ctrl', function ($scope, $state) {
     *   $scope.reload = function(){
     *     //will reload 'contact.detail' and 'contact.detail.item' states
     *     $state.reload('contact.detail');
     *   }
     * });
     * </pre>
     *
     * `reload()` is just an alias for:
     * <pre>
     * $state.transitionTo($state.current, $stateParams, { 
     *   reload: true, inherit: false, notify: true
     * });
     * </pre>

     * @returns {promise} A promise representing the state of the new transition. See
     * {@link ui.router.state.$state#methods_go $state.go}.
     */
    $state.reload = function reload(state) {
      return $state.transitionTo($state.current, $stateParams, { reload: state || true, inherit: false, notify: true});
    };

    /**
     * @ngdoc function
     * @name ui.router.state.$state#go
     * @methodOf ui.router.state.$state
     *
     * @description
     * Convenience method for transitioning to a new state. `$state.go` calls 
     * `$state.transitionTo` internally but automatically sets options to 
     * `{ location: true, inherit: true, relative: $state.$current, notify: true }`. 
     * This allows you to easily use an absolute or relative to path and specify 
     * only the parameters you'd like to update (while letting unspecified parameters 
     * inherit from the currently active ancestor states).
     *
     * @example
     * <pre>
     * var app = angular.module('app', ['ui.router']);
     *
     * app.controller('ctrl', function ($scope, $state) {
     *   $scope.changeState = function () {
     *     $state.go('contact.detail');
     *   };
     * });
     * </pre>
     * <img src='../ngdoc_assets/StateGoExamples.png'/>
     *
     * @param {string} to Absolute state name or relative state path. Some examples:
     *
     * - `$state.go('contact.detail')` - will go to the `contact.detail` state
     * - `$state.go('^')` - will go to a parent state
     * - `$state.go('^.sibling')` - will go to a sibling state
     * - `$state.go('.child.grandchild')` - will go to grandchild state
     *
     * @param {object=} params A map of the parameters that will be sent to the state, 
     * will populate $stateParams. Any parameters that are not specified will be inherited from currently 
     * defined parameters. Only parameters specified in the state definition can be overridden, new 
     * parameters will be ignored. This allows, for example, going to a sibling state that shares parameters
     * specified in a parent state. Parameter inheritance only works between common ancestor states, I.e.
     * transitioning to a sibling will get you the parameters for all parents, transitioning to a child
     * will get you all current parameters, etc.
     * @param {object=} options Options object. The options are:
     *
     * - **`location`** - {boolean=true|string=} - If `true` will update the url in the location bar, if `false`
     *    will not. If string, must be `"replace"`, which will update url and also replace last history record.
     * - **`inherit`** - {boolean=true}, If `true` will inherit url parameters from current url.
     * - **`relative`** - {object=$state.$current}, When transitioning with relative path (e.g '^'), 
     *    defines which state to be relative from.
     * - **`notify`** - {boolean=true}, If `true` will broadcast $stateChangeStart and $stateChangeSuccess events.
     * - **`reload`** (v0.2.5) - {boolean=false|string|object}, If `true` will force transition even if no state or params
     *    have changed.  It will reload the resolves and views of the current state and parent states.
     *    If `reload` is a string (or state object), the state object is fetched (by name, or object reference); and \
     *    the transition reloads the resolves and views for that matched state, and all its children states.
     *
     * @returns {promise} A promise representing the state of the new transition.
     *
     * Possible success values:
     *
     * - $state.current
     *
     * <br/>Possible rejection values:
     *
     * - 'transition superseded' - when a newer transition has been started after this one
     * - 'transition prevented' - when `event.preventDefault()` has been called in a `$stateChangeStart` listener
     * - 'transition aborted' - when `event.preventDefault()` has been called in a `$stateNotFound` listener or
     *   when a `$stateNotFound` `event.retry` promise errors.
     * - 'transition failed' - when a state has been unsuccessfully found after 2 tries.
     * - *resolve error* - when an error has occurred with a `resolve`
     *
     */
    $state.go = function go(to, params, options) {
      return $state.transitionTo(to, params, extend({ inherit: true, relative: $state.$current }, options));
    };

    /**
     * @ngdoc function
     * @name ui.router.state.$state#transitionTo
     * @methodOf ui.router.state.$state
     *
     * @description
     * Low-level method for transitioning to a new state. {@link ui.router.state.$state#methods_go $state.go}
     * uses `transitionTo` internally. `$state.go` is recommended in most situations.
     *
     * @example
     * <pre>
     * var app = angular.module('app', ['ui.router']);
     *
     * app.controller('ctrl', function ($scope, $state) {
     *   $scope.changeState = function () {
     *     $state.transitionTo('contact.detail');
     *   };
     * });
     * </pre>
     *
     * @param {string} to State name.
     * @param {object=} toParams A map of the parameters that will be sent to the state,
     * will populate $stateParams.
     * @param {object=} options Options object. The options are:
     *
     * - **`location`** - {boolean=true|string=} - If `true` will update the url in the location bar, if `false`
     *    will not. If string, must be `"replace"`, which will update url and also replace last history record.
     * - **`inherit`** - {boolean=false}, If `true` will inherit url parameters from current url.
     * - **`relative`** - {object=}, When transitioning with relative path (e.g '^'), 
     *    defines which state to be relative from.
     * - **`notify`** - {boolean=true}, If `true` will broadcast $stateChangeStart and $stateChangeSuccess events.
     * - **`reload`** (v0.2.5) - {boolean=false|string=|object=}, If `true` will force transition even if the state or params 
     *    have not changed, aka a reload of the same state. It differs from reloadOnSearch because you'd
     *    use this when you want to force a reload when *everything* is the same, including search params.
     *    if String, then will reload the state with the name given in reload, and any children.
     *    if Object, then a stateObj is expected, will reload the state found in stateObj, and any children.
     *
     * @returns {promise} A promise representing the state of the new transition. See
     * {@link ui.router.state.$state#methods_go $state.go}.
     */
    $state.transitionTo = function transitionTo(to, toParams, options) {
      toParams = toParams || {};
      options = extend({
        location: true, inherit: false, relative: null, notify: true, reload: false, $retry: false
      }, options || {});

      var from = $state.$current, fromParams = $state.params, fromPath = from.path;
      var evt, toState = findState(to, options.relative);

      // Store the hash param for later (since it will be stripped out by various methods)
      var hash = toParams['#'];

      if (!isDefined(toState)) {
        var redirect = { to: to, toParams: toParams, options: options };
        var redirectResult = handleRedirect(redirect, from.self, fromParams, options);

        if (redirectResult) {
          return redirectResult;
        }

        // Always retry once if the $stateNotFound was not prevented
        // (handles either redirect changed or state lazy-definition)
        to = redirect.to;
        toParams = redirect.toParams;
        options = redirect.options;
        toState = findState(to, options.relative);

        if (!isDefined(toState)) {
          if (!options.relative) throw new Error("No such state '" + to + "'");
          throw new Error("Could not resolve '" + to + "' from state '" + options.relative + "'");
        }
      }
      if (toState[abstractKey]) throw new Error("Cannot transition to abstract state '" + to + "'");
      if (options.inherit) toParams = inheritParams($stateParams, toParams || {}, $state.$current, toState);
      if (!toState.params.$$validates(toParams)) return TransitionFailed;

      toParams = toState.params.$$values(toParams);
      to = toState;

      var toPath = to.path;

      // Starting from the root of the path, keep all levels that haven't changed
      var keep = 0, state = toPath[keep], locals = root.locals, toLocals = [];

      if (!options.reload) {
        while (state && state === fromPath[keep] && state.ownParams.$$equals(toParams, fromParams)) {
          locals = toLocals[keep] = state.locals;
          keep++;
          state = toPath[keep];
        }
      } else if (isString(options.reload) || isObject(options.reload)) {
        if (isObject(options.reload) && !options.reload.name) {
          throw new Error('Invalid reload state object');
        }
        
        var reloadState = options.reload === true ? fromPath[0] : findState(options.reload);
        if (options.reload && !reloadState) {
          throw new Error("No such reload state '" + (isString(options.reload) ? options.reload : options.reload.name) + "'");
        }

        while (state && state === fromPath[keep] && state !== reloadState) {
          locals = toLocals[keep] = state.locals;
          keep++;
          state = toPath[keep];
        }
      }

      // If we're going to the same state and all locals are kept, we've got nothing to do.
      // But clear 'transition', as we still want to cancel any other pending transitions.
      // TODO: We may not want to bump 'transition' if we're called from a location change
      // that we've initiated ourselves, because we might accidentally abort a legitimate
      // transition initiated from code?
      if (shouldSkipReload(to, toParams, from, fromParams, locals, options)) {
        if (hash) toParams['#'] = hash;
        $state.params = toParams;
        copy($state.params, $stateParams);
        copy(filterByKeys(to.params.$$keys(), $stateParams), to.locals.globals.$stateParams);
        if (options.location && to.navigable && to.navigable.url) {
          $urlRouter.push(to.navigable.url, toParams, {
            $$avoidResync: true, replace: options.location === 'replace'
          });
          $urlRouter.update(true);
        }
        $state.transition = null;
        return $q.when($state.current);
      }

      // Filter parameters before we pass them to event handlers etc.
      toParams = filterByKeys(to.params.$$keys(), toParams || {});
      
      // Re-add the saved hash before we start returning things or broadcasting $stateChangeStart
      if (hash) toParams['#'] = hash;
      
      // Broadcast start event and cancel the transition if requested
      if (options.notify) {
        /**
         * @ngdoc event
         * @name ui.router.state.$state#$stateChangeStart
         * @eventOf ui.router.state.$state
         * @eventType broadcast on root scope
         * @description
         * Fired when the state transition **begins**. You can use `event.preventDefault()`
         * to prevent the transition from happening and then the transition promise will be
         * rejected with a `'transition prevented'` value.
         *
         * @param {Object} event Event object.
         * @param {State} toState The state being transitioned to.
         * @param {Object} toParams The params supplied to the `toState`.
         * @param {State} fromState The current state, pre-transition.
         * @param {Object} fromParams The params supplied to the `fromState`.
         *
         * @example
         *
         * <pre>
         * $rootScope.$on('$stateChangeStart',
         * function(event, toState, toParams, fromState, fromParams){
         *     event.preventDefault();
         *     // transitionTo() promise will be rejected with
         *     // a 'transition prevented' error
         * })
         * </pre>
         */
        if ($rootScope.$broadcast('$stateChangeStart', to.self, toParams, from.self, fromParams, options).defaultPrevented) {
          $rootScope.$broadcast('$stateChangeCancel', to.self, toParams, from.self, fromParams);
          //Don't update and resync url if there's been a new transition started. see issue #2238, #600
          if ($state.transition == null) $urlRouter.update();
          return TransitionPrevented;
        }
      }

      // Resolve locals for the remaining states, but don't update any global state just
      // yet -- if anything fails to resolve the current state needs to remain untouched.
      // We also set up an inheritance chain for the locals here. This allows the view directive
      // to quickly look up the correct definition for each view in the current state. Even
      // though we create the locals object itself outside resolveState(), it is initially
      // empty and gets filled asynchronously. We need to keep track of the promise for the
      // (fully resolved) current locals, and pass this down the chain.
      var resolved = $q.when(locals);

      for (var l = keep; l < toPath.length; l++, state = toPath[l]) {
        locals = toLocals[l] = inherit(locals);
        resolved = resolveState(state, toParams, state === to, resolved, locals, options);
      }

      // Once everything is resolved, we are ready to perform the actual transition
      // and return a promise for the new state. We also keep track of what the
      // current promise is, so that we can detect overlapping transitions and
      // keep only the outcome of the last transition.
      var transition = $state.transition = resolved.then(function () {
        var l, entering, exiting;

        if ($state.transition !== transition) return TransitionSuperseded;

        // Exit 'from' states not kept
        for (l = fromPath.length - 1; l >= keep; l--) {
          exiting = fromPath[l];
          if (exiting.self.onExit) {
            $injector.invoke(exiting.self.onExit, exiting.self, exiting.locals.globals);
          }
          exiting.locals = null;
        }

        // Enter 'to' states not kept
        for (l = keep; l < toPath.length; l++) {
          entering = toPath[l];
          entering.locals = toLocals[l];
          if (entering.self.onEnter) {
            $injector.invoke(entering.self.onEnter, entering.self, entering.locals.globals);
          }
        }

        // Run it again, to catch any transitions in callbacks
        if ($state.transition !== transition) return TransitionSuperseded;

        // Update globals in $state
        $state.$current = to;
        $state.current = to.self;
        $state.params = toParams;
        copy($state.params, $stateParams);
        $state.transition = null;

        if (options.location && to.navigable) {
          $urlRouter.push(to.navigable.url, to.navigable.locals.globals.$stateParams, {
            $$avoidResync: true, replace: options.location === 'replace'
          });
        }

        if (options.notify) {
        /**
         * @ngdoc event
         * @name ui.router.state.$state#$stateChangeSuccess
         * @eventOf ui.router.state.$state
         * @eventType broadcast on root scope
         * @description
         * Fired once the state transition is **complete**.
         *
         * @param {Object} event Event object.
         * @param {State} toState The state being transitioned to.
         * @param {Object} toParams The params supplied to the `toState`.
         * @param {State} fromState The current state, pre-transition.
         * @param {Object} fromParams The params supplied to the `fromState`.
         */
          $rootScope.$broadcast('$stateChangeSuccess', to.self, toParams, from.self, fromParams);
        }
        $urlRouter.update(true);

        return $state.current;
      }, function (error) {
        if ($state.transition !== transition) return TransitionSuperseded;

        $state.transition = null;
        /**
         * @ngdoc event
         * @name ui.router.state.$state#$stateChangeError
         * @eventOf ui.router.state.$state
         * @eventType broadcast on root scope
         * @description
         * Fired when an **error occurs** during transition. It's important to note that if you
         * have any errors in your resolve functions (javascript errors, non-existent services, etc)
         * they will not throw traditionally. You must listen for this $stateChangeError event to
         * catch **ALL** errors.
         *
         * @param {Object} event Event object.
         * @param {State} toState The state being transitioned to.
         * @param {Object} toParams The params supplied to the `toState`.
         * @param {State} fromState The current state, pre-transition.
         * @param {Object} fromParams The params supplied to the `fromState`.
         * @param {Error} error The resolve error object.
         */
        evt = $rootScope.$broadcast('$stateChangeError', to.self, toParams, from.self, fromParams, error);

        if (!evt.defaultPrevented) {
            $urlRouter.update();
        }

        return $q.reject(error);
      });

      return transition;
    };

    /**
     * @ngdoc function
     * @name ui.router.state.$state#is
     * @methodOf ui.router.state.$state
     *
     * @description
     * Similar to {@link ui.router.state.$state#methods_includes $state.includes},
     * but only checks for the full state name. If params is supplied then it will be
     * tested for strict equality against the current active params object, so all params
     * must match with none missing and no extras.
     *
     * @example
     * <pre>
     * $state.$current.name = 'contacts.details.item';
     *
     * // absolute name
     * $state.is('contact.details.item'); // returns true
     * $state.is(contactDetailItemStateObject); // returns true
     *
     * // relative name (. and ^), typically from a template
     * // E.g. from the 'contacts.details' template
     * <div ng-class="{highlighted: $state.is('.item')}">Item</div>
     * </pre>
     *
     * @param {string|object} stateOrName The state name (absolute or relative) or state object you'd like to check.
     * @param {object=} params A param object, e.g. `{sectionId: section.id}`, that you'd like
     * to test against the current active state.
     * @param {object=} options An options object.  The options are:
     *
     * - **`relative`** - {string|object} -  If `stateOrName` is a relative state name and `options.relative` is set, .is will
     * test relative to `options.relative` state (or name).
     *
     * @returns {boolean} Returns true if it is the state.
     */
    $state.is = function is(stateOrName, params, options) {
      options = extend({ relative: $state.$current }, options || {});
      var state = findState(stateOrName, options.relative);

      if (!isDefined(state)) { return undefined; }
      if ($state.$current !== state) { return false; }
      return params ? equalForKeys(state.params.$$values(params), $stateParams) : true;
    };

    /**
     * @ngdoc function
     * @name ui.router.state.$state#includes
     * @methodOf ui.router.state.$state
     *
     * @description
     * A method to determine if the current active state is equal to or is the child of the
     * state stateName. If any params are passed then they will be tested for a match as well.
     * Not all the parameters need to be passed, just the ones you'd like to test for equality.
     *
     * @example
     * Partial and relative names
     * <pre>
     * $state.$current.name = 'contacts.details.item';
     *
     * // Using partial names
     * $state.includes("contacts"); // returns true
     * $state.includes("contacts.details"); // returns true
     * $state.includes("contacts.details.item"); // returns true
     * $state.includes("contacts.list"); // returns false
     * $state.includes("about"); // returns false
     *
     * // Using relative names (. and ^), typically from a template
     * // E.g. from the 'contacts.details' template
     * <div ng-class="{highlighted: $state.includes('.item')}">Item</div>
     * </pre>
     *
     * Basic globbing patterns
     * <pre>
     * $state.$current.name = 'contacts.details.item.url';
     *
     * $state.includes("*.details.*.*"); // returns true
     * $state.includes("*.details.**"); // returns true
     * $state.includes("**.item.**"); // returns true
     * $state.includes("*.details.item.url"); // returns true
     * $state.includes("*.details.*.url"); // returns true
     * $state.includes("*.details.*"); // returns false
     * $state.includes("item.**"); // returns false
     * </pre>
     *
     * @param {string} stateOrName A partial name, relative name, or glob pattern
     * to be searched for within the current state name.
     * @param {object=} params A param object, e.g. `{sectionId: section.id}`,
     * that you'd like to test against the current active state.
     * @param {object=} options An options object.  The options are:
     *
     * - **`relative`** - {string|object=} -  If `stateOrName` is a relative state reference and `options.relative` is set,
     * .includes will test relative to `options.relative` state (or name).
     *
     * @returns {boolean} Returns true if it does include the state
     */
    $state.includes = function includes(stateOrName, params, options) {
      options = extend({ relative: $state.$current }, options || {});
      if (isString(stateOrName) && isGlob(stateOrName)) {
        if (!doesStateMatchGlob(stateOrName)) {
          return false;
        }
        stateOrName = $state.$current.name;
      }

      var state = findState(stateOrName, options.relative);
      if (!isDefined(state)) { return undefined; }
      if (!isDefined($state.$current.includes[state.name])) { return false; }
      return params ? equalForKeys(state.params.$$values(params), $stateParams, objectKeys(params)) : true;
    };


    /**
     * @ngdoc function
     * @name ui.router.state.$state#href
     * @methodOf ui.router.state.$state
     *
     * @description
     * A url generation method that returns the compiled url for the given state populated with the given params.
     *
     * @example
     * <pre>
     * expect($state.href("about.person", { person: "bob" })).toEqual("/about/bob");
     * </pre>
     *
     * @param {string|object} stateOrName The state name or state object you'd like to generate a url from.
     * @param {object=} params An object of parameter values to fill the state's required parameters.
     * @param {object=} options Options object. The options are:
     *
     * - **`lossy`** - {boolean=true} -  If true, and if there is no url associated with the state provided in the
     *    first parameter, then the constructed href url will be built from the first navigable ancestor (aka
     *    ancestor with a valid url).
     * - **`inherit`** - {boolean=true}, If `true` will inherit url parameters from current url.
     * - **`relative`** - {object=$state.$current}, When transitioning with relative path (e.g '^'), 
     *    defines which state to be relative from.
     * - **`absolute`** - {boolean=false},  If true will generate an absolute url, e.g. "http://www.example.com/fullurl".
     * 
     * @returns {string} compiled state url
     */
    $state.href = function href(stateOrName, params, options) {
      options = extend({
        lossy:    true,
        inherit:  true,
        absolute: false,
        relative: $state.$current
      }, options || {});

      var state = findState(stateOrName, options.relative);

      if (!isDefined(state)) return null;
      if (options.inherit) params = inheritParams($stateParams, params || {}, $state.$current, state);
      
      var nav = (state && options.lossy) ? state.navigable : state;

      if (!nav || nav.url === undefined || nav.url === null) {
        return null;
      }
      return $urlRouter.href(nav.url, filterByKeys(state.params.$$keys().concat('#'), params || {}), {
        absolute: options.absolute
      });
    };

    /**
     * @ngdoc function
     * @name ui.router.state.$state#get
     * @methodOf ui.router.state.$state
     *
     * @description
     * Returns the state configuration object for any specific state or all states.
     *
     * @param {string|object=} stateOrName (absolute or relative) If provided, will only get the config for
     * the requested state. If not provided, returns an array of ALL state configs.
     * @param {string|object=} context When stateOrName is a relative state reference, the state will be retrieved relative to context.
     * @returns {Object|Array} State configuration object or array of all objects.
     */
    $state.get = function (stateOrName, context) {
      if (arguments.length === 0) return map(objectKeys(states), function(name) { return states[name].self; });
      var state = findState(stateOrName, context || $state.$current);
      return (state && state.self) ? state.self : null;
    };

    function resolveState(state, params, paramsAreFiltered, inherited, dst, options) {
      // Make a restricted $stateParams with only the parameters that apply to this state if
      // necessary. In addition to being available to the controller and onEnter/onExit callbacks,
      // we also need $stateParams to be available for any $injector calls we make during the
      // dependency resolution process.
      var $stateParams = (paramsAreFiltered) ? params : filterByKeys(state.params.$$keys(), params);
      var locals = { $stateParams: $stateParams };

      // Resolve 'global' dependencies for the state, i.e. those not specific to a view.
      // We're also including $stateParams in this; that way the parameters are restricted
      // to the set that should be visible to the state, and are independent of when we update
      // the global $state and $stateParams values.
      dst.resolve = $resolve.resolve(state.resolve, locals, dst.resolve, state);
      var promises = [dst.resolve.then(function (globals) {
        dst.globals = globals;
      })];
      if (inherited) promises.push(inherited);

      function resolveViews() {
        var viewsPromises = [];

        // Resolve template and dependencies for all views.
        forEach(state.views, function (view, name) {
          var injectables = (view.resolve && view.resolve !== state.resolve ? view.resolve : {});
          injectables.$template = [ function () {
            return $view.load(name, { view: view, locals: dst.globals, params: $stateParams, notify: options.notify }) || '';
          }];

          viewsPromises.push($resolve.resolve(injectables, dst.globals, dst.resolve, state).then(function (result) {
            // References to the controller (only instantiated at link time)
            if (isFunction(view.controllerProvider) || isArray(view.controllerProvider)) {
              var injectLocals = angular.extend({}, injectables, dst.globals);
              result.$$controller = $injector.invoke(view.controllerProvider, null, injectLocals);
            } else {
              result.$$controller = view.controller;
            }
            // Provide access to the state itself for internal use
            result.$$state = state;
            result.$$controllerAs = view.controllerAs;
            dst[name] = result;
          }));
        });

        return $q.all(viewsPromises).then(function(){
          return dst.globals;
        });
      }

      // Wait for all the promises and then return the activation object
      return $q.all(promises).then(resolveViews).then(function (values) {
        return dst;
      });
    }

    return $state;
  }

  function shouldSkipReload(to, toParams, from, fromParams, locals, options) {
    // Return true if there are no differences in non-search (path/object) params, false if there are differences
    function nonSearchParamsEqual(fromAndToState, fromParams, toParams) {
      // Identify whether all the parameters that differ between `fromParams` and `toParams` were search params.
      function notSearchParam(key) {
        return fromAndToState.params[key].location != "search";
      }
      var nonQueryParamKeys = fromAndToState.params.$$keys().filter(notSearchParam);
      var nonQueryParams = pick.apply({}, [fromAndToState.params].concat(nonQueryParamKeys));
      var nonQueryParamSet = new $$UMFP.ParamSet(nonQueryParams);
      return nonQueryParamSet.$$equals(fromParams, toParams);
    }

    // If reload was not explicitly requested
    // and we're transitioning to the same state we're already in
    // and    the locals didn't change
    //     or they changed in a way that doesn't merit reloading
    //        (reloadOnParams:false, or reloadOnSearch.false and only search params changed)
    // Then return true.
    if (!options.reload && to === from &&
      (locals === from.locals || (to.self.reloadOnSearch === false && nonSearchParamsEqual(from, fromParams, toParams)))) {
      return true;
    }
  }
}

angular.module('ui.router.state')
  .factory('$stateParams', function () { return {}; })
  .provider('$state', $StateProvider);


$ViewProvider.$inject = [];
function $ViewProvider() {

  this.$get = $get;
  /**
   * @ngdoc object
   * @name ui.router.state.$view
   *
   * @requires ui.router.util.$templateFactory
   * @requires $rootScope
   *
   * @description
   *
   */
  $get.$inject = ['$rootScope', '$templateFactory'];
  function $get(   $rootScope,   $templateFactory) {
    return {
      // $view.load('full.viewName', { template: ..., controller: ..., resolve: ..., async: false, params: ... })
      /**
       * @ngdoc function
       * @name ui.router.state.$view#load
       * @methodOf ui.router.state.$view
       *
       * @description
       *
       * @param {string} name name
       * @param {object} options option object.
       */
      load: function load(name, options) {
        var result, defaults = {
          template: null, controller: null, view: null, locals: null, notify: true, async: true, params: {}
        };
        options = extend(defaults, options);

        if (options.view) {
          result = $templateFactory.fromConfig(options.view, options.params, options.locals);
        }
        return result;
      }
    };
  }
}

angular.module('ui.router.state').provider('$view', $ViewProvider);

/**
 * @ngdoc object
 * @name ui.router.state.$uiViewScrollProvider
 *
 * @description
 * Provider that returns the {@link ui.router.state.$uiViewScroll} service function.
 */
function $ViewScrollProvider() {

  var useAnchorScroll = false;

  /**
   * @ngdoc function
   * @name ui.router.state.$uiViewScrollProvider#useAnchorScroll
   * @methodOf ui.router.state.$uiViewScrollProvider
   *
   * @description
   * Reverts back to using the core [`$anchorScroll`](http://docs.angularjs.org/api/ng.$anchorScroll) service for
   * scrolling based on the url anchor.
   */
  this.useAnchorScroll = function () {
    useAnchorScroll = true;
  };

  /**
   * @ngdoc object
   * @name ui.router.state.$uiViewScroll
   *
   * @requires $anchorScroll
   * @requires $timeout
   *
   * @description
   * When called with a jqLite element, it scrolls the element into view (after a
   * `$timeout` so the DOM has time to refresh).
   *
   * If you prefer to rely on `$anchorScroll` to scroll the view to the anchor,
   * this can be enabled by calling {@link ui.router.state.$uiViewScrollProvider#methods_useAnchorScroll `$uiViewScrollProvider.useAnchorScroll()`}.
   */
  this.$get = ['$anchorScroll', '$timeout', function ($anchorScroll, $timeout) {
    if (useAnchorScroll) {
      return $anchorScroll;
    }

    return function ($element) {
      return $timeout(function () {
        $element[0].scrollIntoView();
      }, 0, false);
    };
  }];
}

angular.module('ui.router.state').provider('$uiViewScroll', $ViewScrollProvider);

var ngMajorVer = angular.version.major;
var ngMinorVer = angular.version.minor;
/**
 * @ngdoc directive
 * @name ui.router.state.directive:ui-view
 *
 * @requires ui.router.state.$state
 * @requires $compile
 * @requires $controller
 * @requires $injector
 * @requires ui.router.state.$uiViewScroll
 * @requires $document
 *
 * @restrict ECA
 *
 * @description
 * The ui-view directive tells $state where to place your templates.
 *
 * @param {string=} name A view name. The name should be unique amongst the other views in the
 * same state. You can have views of the same name that live in different states.
 *
 * @param {string=} autoscroll It allows you to set the scroll behavior of the browser window
 * when a view is populated. By default, $anchorScroll is overridden by ui-router's custom scroll
 * service, {@link ui.router.state.$uiViewScroll}. This custom service let's you
 * scroll ui-view elements into view when they are populated during a state activation.
 *
 * @param {string=} noanimation If truthy, the non-animated renderer will be selected (no animations
 * will be applied to the ui-view)
 *
 * *Note: To revert back to old [`$anchorScroll`](http://docs.angularjs.org/api/ng.$anchorScroll)
 * functionality, call `$uiViewScrollProvider.useAnchorScroll()`.*
 *
 * @param {string=} onload Expression to evaluate whenever the view updates.
 * 
 * @example
 * A view can be unnamed or named. 
 * <pre>
 * <!-- Unnamed -->
 * <div ui-view></div> 
 * 
 * <!-- Named -->
 * <div ui-view="viewName"></div>
 * </pre>
 *
 * You can only have one unnamed view within any template (or root html). If you are only using a 
 * single view and it is unnamed then you can populate it like so:
 * <pre>
 * <div ui-view></div> 
 * $stateProvider.state("home", {
 *   template: "<h1>HELLO!</h1>"
 * })
 * </pre>
 * 
 * The above is a convenient shortcut equivalent to specifying your view explicitly with the {@link ui.router.state.$stateProvider#views `views`}
 * config property, by name, in this case an empty name:
 * <pre>
 * $stateProvider.state("home", {
 *   views: {
 *     "": {
 *       template: "<h1>HELLO!</h1>"
 *     }
 *   }    
 * })
 * </pre>
 * 
 * But typically you'll only use the views property if you name your view or have more than one view 
 * in the same template. There's not really a compelling reason to name a view if its the only one, 
 * but you could if you wanted, like so:
 * <pre>
 * <div ui-view="main"></div>
 * </pre> 
 * <pre>
 * $stateProvider.state("home", {
 *   views: {
 *     "main": {
 *       template: "<h1>HELLO!</h1>"
 *     }
 *   }    
 * })
 * </pre>
 * 
 * Really though, you'll use views to set up multiple views:
 * <pre>
 * <div ui-view></div>
 * <div ui-view="chart"></div> 
 * <div ui-view="data"></div> 
 * </pre>
 * 
 * <pre>
 * $stateProvider.state("home", {
 *   views: {
 *     "": {
 *       template: "<h1>HELLO!</h1>"
 *     },
 *     "chart": {
 *       template: "<chart_thing/>"
 *     },
 *     "data": {
 *       template: "<data_thing/>"
 *     }
 *   }    
 * })
 * </pre>
 *
 * Examples for `autoscroll`:
 *
 * <pre>
 * <!-- If autoscroll present with no expression,
 *      then scroll ui-view into view -->
 * <ui-view autoscroll/>
 *
 * <!-- If autoscroll present with valid expression,
 *      then scroll ui-view into view if expression evaluates to true -->
 * <ui-view autoscroll='true'/>
 * <ui-view autoscroll='false'/>
 * <ui-view autoscroll='scopeVariable'/>
 * </pre>
 */
$ViewDirective.$inject = ['$state', '$injector', '$uiViewScroll', '$interpolate'];
function $ViewDirective(   $state,   $injector,   $uiViewScroll,   $interpolate) {

  function getService() {
    return ($injector.has) ? function(service) {
      return $injector.has(service) ? $injector.get(service) : null;
    } : function(service) {
      try {
        return $injector.get(service);
      } catch (e) {
        return null;
      }
    };
  }

  var service = getService(),
      $animator = service('$animator'),
      $animate = service('$animate');

  // Returns a set of DOM manipulation functions based on which Angular version
  // it should use
  function getRenderer(attrs, scope) {
    var statics = {
      enter: function (element, target, cb) { target.after(element); cb(); },
      leave: function (element, cb) { element.remove(); cb(); }
    };

    if (!!attrs.noanimation) return statics;

    function animEnabled(element) {
      if (ngMajorVer === 1 && ngMinorVer >= 4) return !!$animate.enabled(element);
      if (ngMajorVer === 1 && ngMinorVer >= 2) return !!$animate.enabled();
      return (!!$animator);
    }

    // ng 1.2+
    if ($animate) {
      return {
        enter: function(element, target, cb) {
          if (!animEnabled(element)) {
            statics.enter(element, target, cb);
          } else if (angular.version.minor > 2) {
            $animate.enter(element, null, target).then(cb);
          } else {
            $animate.enter(element, null, target, cb);
          }
        },
        leave: function(element, cb) {
          if (!animEnabled(element)) {
            statics.leave(element, cb);
          } else if (angular.version.minor > 2) {
            $animate.leave(element).then(cb);
          } else {
            $animate.leave(element, cb);
          }
        }
      };
    }

    // ng 1.1.5
    if ($animator) {
      var animate = $animator && $animator(scope, attrs);

      return {
        enter: function(element, target, cb) {animate.enter(element, null, target); cb(); },
        leave: function(element, cb) { animate.leave(element); cb(); }
      };
    }

    return statics;
  }

  var directive = {
    restrict: 'ECA',
    terminal: true,
    priority: 400,
    transclude: 'element',
    compile: function (tElement, tAttrs, $transclude) {
      return function (scope, $element, attrs) {
        var previousEl, currentEl, currentScope, latestLocals,
            onloadExp     = attrs.onload || '',
            autoScrollExp = attrs.autoscroll,
            renderer      = getRenderer(attrs, scope);

        scope.$on('$stateChangeSuccess', function() {
          updateView(false);
        });

        updateView(true);

        function cleanupLastView() {
          var _previousEl = previousEl;
          var _currentScope = currentScope;

          if (_currentScope) {
            _currentScope._willBeDestroyed = true;
          }

          function cleanOld() {
            if (_previousEl) {
              _previousEl.remove();
            }

            if (_currentScope) {
              _currentScope.$destroy();
            }
          }

          if (currentEl) {
            renderer.leave(currentEl, function() {
              cleanOld();
              previousEl = null;
            });

            previousEl = currentEl;
          } else {
            cleanOld();
            previousEl = null;
          }

          currentEl = null;
          currentScope = null;
        }

        function updateView(firstTime) {
          var newScope,
              name            = getUiViewName(scope, attrs, $element, $interpolate),
              previousLocals  = name && $state.$current && $state.$current.locals[name];

          if (!firstTime && previousLocals === latestLocals || scope._willBeDestroyed) return; // nothing to do
          newScope = scope.$new();
          latestLocals = $state.$current.locals[name];

          /**
           * @ngdoc event
           * @name ui.router.state.directive:ui-view#$viewContentLoading
           * @eventOf ui.router.state.directive:ui-view
           * @eventType emits on ui-view directive scope
           * @description
           *
           * Fired once the view **begins loading**, *before* the DOM is rendered.
           *
           * @param {Object} event Event object.
           * @param {string} viewName Name of the view.
           */
          newScope.$emit('$viewContentLoading', name);

          var clone = $transclude(newScope, function(clone) {
            renderer.enter(clone, $element, function onUiViewEnter() {
              if(currentScope) {
                currentScope.$emit('$viewContentAnimationEnded');
              }

              if (angular.isDefined(autoScrollExp) && !autoScrollExp || scope.$eval(autoScrollExp)) {
                $uiViewScroll(clone);
              }
            });
            cleanupLastView();
          });

          currentEl = clone;
          currentScope = newScope;
          /**
           * @ngdoc event
           * @name ui.router.state.directive:ui-view#$viewContentLoaded
           * @eventOf ui.router.state.directive:ui-view
           * @eventType emits on ui-view directive scope
           * @description
           * Fired once the view is **loaded**, *after* the DOM is rendered.
           *
           * @param {Object} event Event object.
           * @param {string} viewName Name of the view.
           */
          currentScope.$emit('$viewContentLoaded', name);
          currentScope.$eval(onloadExp);
        }
      };
    }
  };

  return directive;
}

$ViewDirectiveFill.$inject = ['$compile', '$controller', '$state', '$interpolate'];
function $ViewDirectiveFill (  $compile,   $controller,   $state,   $interpolate) {
  return {
    restrict: 'ECA',
    priority: -400,
    compile: function (tElement) {
      var initial = tElement.html();
      return function (scope, $element, attrs) {
        var current = $state.$current,
            name = getUiViewName(scope, attrs, $element, $interpolate),
            locals  = current && current.locals[name];

        if (! locals) {
          return;
        }

        $element.data('$uiView', { name: name, state: locals.$$state });
        $element.html(locals.$template ? locals.$template : initial);

        var link = $compile($element.contents());

        if (locals.$$controller) {
          locals.$scope = scope;
          locals.$element = $element;
          var controller = $controller(locals.$$controller, locals);
          if (locals.$$controllerAs) {
            scope[locals.$$controllerAs] = controller;
          }
          $element.data('$ngControllerController', controller);
          $element.children().data('$ngControllerController', controller);
        }

        link(scope);
      };
    }
  };
}

/**
 * Shared ui-view code for both directives:
 * Given scope, element, and its attributes, return the view's name
 */
function getUiViewName(scope, attrs, element, $interpolate) {
  var name = $interpolate(attrs.uiView || attrs.name || '')(scope);
  var inherited = element.inheritedData('$uiView');
  return name.indexOf('@') >= 0 ?  name :  (name + '@' + (inherited ? inherited.state.name : ''));
}

angular.module('ui.router.state').directive('uiView', $ViewDirective);
angular.module('ui.router.state').directive('uiView', $ViewDirectiveFill);

function parseStateRef(ref, current) {
  var preparsed = ref.match(/^\s*({[^}]*})\s*$/), parsed;
  if (preparsed) ref = current + '(' + preparsed[1] + ')';
  parsed = ref.replace(/\n/g, " ").match(/^([^(]+?)\s*(\((.*)\))?$/);
  if (!parsed || parsed.length !== 4) throw new Error("Invalid state ref '" + ref + "'");
  return { state: parsed[1], paramExpr: parsed[3] || null };
}

function stateContext(el) {
  var stateData = el.parent().inheritedData('$uiView');

  if (stateData && stateData.state && stateData.state.name) {
    return stateData.state;
  }
}

function getTypeInfo(el) {
  // SVGAElement does not use the href attribute, but rather the 'xlinkHref' attribute.
  var isSvg = Object.prototype.toString.call(el.prop('href')) === '[object SVGAnimatedString]';
  var isForm = el[0].nodeName === "FORM";

  return {
    attr: isForm ? "action" : (isSvg ? 'xlink:href' : 'href'),
    isAnchor: el.prop("tagName").toUpperCase() === "A",
    clickable: !isForm
  };
}

function clickHook(el, $state, $timeout, type, current) {
  return function(e) {
    var button = e.which || e.button, target = current();

    if (!(button > 1 || e.ctrlKey || e.metaKey || e.shiftKey || el.attr('target'))) {
      // HACK: This is to allow ng-clicks to be processed before the transition is initiated:
      var transition = $timeout(function() {
        $state.go(target.state, target.params, target.options);
      });
      e.preventDefault();

      // if the state has no URL, ignore one preventDefault from the <a> directive.
      var ignorePreventDefaultCount = type.isAnchor && !target.href ? 1: 0;

      e.preventDefault = function() {
        if (ignorePreventDefaultCount-- <= 0) $timeout.cancel(transition);
      };
    }
  };
}

function defaultOpts(el, $state) {
  return { relative: stateContext(el) || $state.$current, inherit: true };
}

/**
 * @ngdoc directive
 * @name ui.router.state.directive:ui-sref
 *
 * @requires ui.router.state.$state
 * @requires $timeout
 *
 * @restrict A
 *
 * @description
 * A directive that binds a link (`<a>` tag) to a state. If the state has an associated
 * URL, the directive will automatically generate & update the `href` attribute via
 * the {@link ui.router.state.$state#methods_href $state.href()} method. Clicking
 * the link will trigger a state transition with optional parameters.
 *
 * Also middle-clicking, right-clicking, and ctrl-clicking on the link will be
 * handled natively by the browser.
 *
 * You can also use relative state paths within ui-sref, just like the relative
 * paths passed to `$state.go()`. You just need to be aware that the path is relative
 * to the state that the link lives in, in other words the state that loaded the
 * template containing the link.
 *
 * You can specify options to pass to {@link ui.router.state.$state#go $state.go()}
 * using the `ui-sref-opts` attribute. Options are restricted to `location`, `inherit`,
 * and `reload`.
 *
 * @example
 * Here's an example of how you'd use ui-sref and how it would compile. If you have the
 * following template:
 * <pre>
 * <a ui-sref="home">Home</a> | <a ui-sref="about">About</a> | <a ui-sref="{page: 2}">Next page</a>
 *
 * <ul>
 *     <li ng-repeat="contact in contacts">
 *         <a ui-sref="contacts.detail({ id: contact.id })">{{ contact.name }}</a>
 *     </li>
 * </ul>
 * </pre>
 *
 * Then the compiled html would be (assuming Html5Mode is off and current state is contacts):
 * <pre>
 * <a href="#/home" ui-sref="home">Home</a> | <a href="#/about" ui-sref="about">About</a> | <a href="#/contacts?page=2" ui-sref="{page: 2}">Next page</a>
 *
 * <ul>
 *     <li ng-repeat="contact in contacts">
 *         <a href="#/contacts/1" ui-sref="contacts.detail({ id: contact.id })">Joe</a>
 *     </li>
 *     <li ng-repeat="contact in contacts">
 *         <a href="#/contacts/2" ui-sref="contacts.detail({ id: contact.id })">Alice</a>
 *     </li>
 *     <li ng-repeat="contact in contacts">
 *         <a href="#/contacts/3" ui-sref="contacts.detail({ id: contact.id })">Bob</a>
 *     </li>
 * </ul>
 *
 * <a ui-sref="home" ui-sref-opts="{reload: true}">Home</a>
 * </pre>
 *
 * @param {string} ui-sref 'stateName' can be any valid absolute or relative state
 * @param {Object} ui-sref-opts options to pass to {@link ui.router.state.$state#go $state.go()}
 */
$StateRefDirective.$inject = ['$state', '$timeout'];
function $StateRefDirective($state, $timeout) {
  return {
    restrict: 'A',
    require: ['?^uiSrefActive', '?^uiSrefActiveEq'],
    link: function(scope, element, attrs, uiSrefActive) {
      var ref    = parseStateRef(attrs.uiSref, $state.current.name);
      var def    = { state: ref.state, href: null, params: null };
      var type   = getTypeInfo(element);
      var active = uiSrefActive[1] || uiSrefActive[0];

      def.options = extend(defaultOpts(element, $state), attrs.uiSrefOpts ? scope.$eval(attrs.uiSrefOpts) : {});

      var update = function(val) {
        if (val) def.params = angular.copy(val);
        def.href = $state.href(ref.state, def.params, def.options);

        if (active) active.$$addStateInfo(ref.state, def.params);
        if (def.href !== null) attrs.$set(type.attr, def.href);
      };

      if (ref.paramExpr) {
        scope.$watch(ref.paramExpr, function(val) { if (val !== def.params) update(val); }, true);
        def.params = angular.copy(scope.$eval(ref.paramExpr));
      }
      update();

      if (!type.clickable) return;
      element.bind("click", clickHook(element, $state, $timeout, type, function() { return def; }));
    }
  };
}

/**
 * @ngdoc directive
 * @name ui.router.state.directive:ui-state
 *
 * @requires ui.router.state.uiSref
 *
 * @restrict A
 *
 * @description
 * Much like ui-sref, but will accept named $scope properties to evaluate for a state definition,
 * params and override options.
 *
 * @param {string} ui-state 'stateName' can be any valid absolute or relative state
 * @param {Object} ui-state-params params to pass to {@link ui.router.state.$state#href $state.href()}
 * @param {Object} ui-state-opts options to pass to {@link ui.router.state.$state#go $state.go()}
 */
$StateRefDynamicDirective.$inject = ['$state', '$timeout'];
function $StateRefDynamicDirective($state, $timeout) {
  return {
    restrict: 'A',
    require: ['?^uiSrefActive', '?^uiSrefActiveEq'],
    link: function(scope, element, attrs, uiSrefActive) {
      var type   = getTypeInfo(element);
      var active = uiSrefActive[1] || uiSrefActive[0];
      var group  = [attrs.uiState, attrs.uiStateParams || null, attrs.uiStateOpts || null];
      var watch  = '[' + group.map(function(val) { return val || 'null'; }).join(', ') + ']';
      var def    = { state: null, params: null, options: null, href: null };

      function runStateRefLink (group) {
        def.state = group[0]; def.params = group[1]; def.options = group[2];
        def.href = $state.href(def.state, def.params, def.options);

        if (active) active.$$addStateInfo(def.state, def.params);
        if (def.href) attrs.$set(type.attr, def.href);
      }

      scope.$watch(watch, runStateRefLink, true);
      runStateRefLink(scope.$eval(watch));

      if (!type.clickable) return;
      element.bind("click", clickHook(element, $state, $timeout, type, function() { return def; }));
    }
  };
}


/**
 * @ngdoc directive
 * @name ui.router.state.directive:ui-sref-active
 *
 * @requires ui.router.state.$state
 * @requires ui.router.state.$stateParams
 * @requires $interpolate
 *
 * @restrict A
 *
 * @description
 * A directive working alongside ui-sref to add classes to an element when the
 * related ui-sref directive's state is active, and removing them when it is inactive.
 * The primary use-case is to simplify the special appearance of navigation menus
 * relying on `ui-sref`, by having the "active" state's menu button appear different,
 * distinguishing it from the inactive menu items.
 *
 * ui-sref-active can live on the same element as ui-sref or on a parent element. The first
 * ui-sref-active found at the same level or above the ui-sref will be used.
 *
 * Will activate when the ui-sref's target state or any child state is active. If you
 * need to activate only when the ui-sref target state is active and *not* any of
 * it's children, then you will use
 * {@link ui.router.state.directive:ui-sref-active-eq ui-sref-active-eq}
 *
 * @example
 * Given the following template:
 * <pre>
 * <ul>
 *   <li ui-sref-active="active" class="item">
 *     <a href ui-sref="app.user({user: 'bilbobaggins'})">@bilbobaggins</a>
 *   </li>
 * </ul>
 * </pre>
 *
 *
 * When the app state is "app.user" (or any children states), and contains the state parameter "user" with value "bilbobaggins",
 * the resulting HTML will appear as (note the 'active' class):
 * <pre>
 * <ul>
 *   <li ui-sref-active="active" class="item active">
 *     <a ui-sref="app.user({user: 'bilbobaggins'})" href="/users/bilbobaggins">@bilbobaggins</a>
 *   </li>
 * </ul>
 * </pre>
 *
 * The class name is interpolated **once** during the directives link time (any further changes to the
 * interpolated value are ignored).
 *
 * Multiple classes may be specified in a space-separated format:
 * <pre>
 * <ul>
 *   <li ui-sref-active='class1 class2 class3'>
 *     <a ui-sref="app.user">link</a>
 *   </li>
 * </ul>
 * </pre>
 *
 * It is also possible to pass ui-sref-active an expression that evaluates
 * to an object hash, whose keys represent active class names and whose
 * values represent the respective state names/globs.
 * ui-sref-active will match if the current active state **includes** any of
 * the specified state names/globs, even the abstract ones.
 *
 * @Example
 * Given the following template, with "admin" being an abstract state:
 * <pre>
 * <div ui-sref-active="{'active': 'admin.*'}">
 *   <a ui-sref-active="active" ui-sref="admin.roles">Roles</a>
 * </div>
 * </pre>
 *
 * When the current state is "admin.roles" the "active" class will be applied
 * to both the <div> and <a> elements. It is important to note that the state
 * names/globs passed to ui-sref-active shadow the state provided by ui-sref.
 */

/**
 * @ngdoc directive
 * @name ui.router.state.directive:ui-sref-active-eq
 *
 * @requires ui.router.state.$state
 * @requires ui.router.state.$stateParams
 * @requires $interpolate
 *
 * @restrict A
 *
 * @description
 * The same as {@link ui.router.state.directive:ui-sref-active ui-sref-active} but will only activate
 * when the exact target state used in the `ui-sref` is active; no child states.
 *
 */
$StateRefActiveDirective.$inject = ['$state', '$stateParams', '$interpolate'];
function $StateRefActiveDirective($state, $stateParams, $interpolate) {
  return  {
    restrict: "A",
    controller: ['$scope', '$element', '$attrs', '$timeout', function ($scope, $element, $attrs, $timeout) {
      var states = [], activeClasses = {}, activeEqClass, uiSrefActive;

      // There probably isn't much point in $observing this
      // uiSrefActive and uiSrefActiveEq share the same directive object with some
      // slight difference in logic routing
      activeEqClass = $interpolate($attrs.uiSrefActiveEq || '', false)($scope);

      try {
        uiSrefActive = $scope.$eval($attrs.uiSrefActive);
      } catch (e) {
        // Do nothing. uiSrefActive is not a valid expression.
        // Fall back to using $interpolate below
      }
      uiSrefActive = uiSrefActive || $interpolate($attrs.uiSrefActive || '', false)($scope);
      if (isObject(uiSrefActive)) {
        forEach(uiSrefActive, function(stateOrName, activeClass) {
          if (isString(stateOrName)) {
            var ref = parseStateRef(stateOrName, $state.current.name);
            addState(ref.state, $scope.$eval(ref.paramExpr), activeClass);
          }
        });
      }

      // Allow uiSref to communicate with uiSrefActive[Equals]
      this.$$addStateInfo = function (newState, newParams) {
        // we already got an explicit state provided by ui-sref-active, so we
        // shadow the one that comes from ui-sref
        if (isObject(uiSrefActive) && states.length > 0) {
          return;
        }
        addState(newState, newParams, uiSrefActive);
        update();
      };

      $scope.$on('$stateChangeSuccess', update);

      function addState(stateName, stateParams, activeClass) {
        var state = $state.get(stateName, stateContext($element));
        var stateHash = createStateHash(stateName, stateParams);

        states.push({
          state: state || { name: stateName },
          params: stateParams,
          hash: stateHash
        });

        activeClasses[stateHash] = activeClass;
      }

      /**
       * @param {string} state
       * @param {Object|string} [params]
       * @return {string}
       */
      function createStateHash(state, params) {
        if (!isString(state)) {
          throw new Error('state should be a string');
        }
        if (isObject(params)) {
          return state + toJson(params);
        }
        params = $scope.$eval(params);
        if (isObject(params)) {
          return state + toJson(params);
        }
        return state;
      }

      // Update route state
      function update() {
        for (var i = 0; i < states.length; i++) {
          if (anyMatch(states[i].state, states[i].params)) {
            addClass($element, activeClasses[states[i].hash]);
          } else {
            removeClass($element, activeClasses[states[i].hash]);
          }

          if (exactMatch(states[i].state, states[i].params)) {
            addClass($element, activeEqClass);
          } else {
            removeClass($element, activeEqClass);
          }
        }
      }

      function addClass(el, className) { $timeout(function () { el.addClass(className); }); }
      function removeClass(el, className) { el.removeClass(className); }
      function anyMatch(state, params) { return $state.includes(state.name, params); }
      function exactMatch(state, params) { return $state.is(state.name, params); }

      update();
    }]
  };
}

angular.module('ui.router.state')
  .directive('uiSref', $StateRefDirective)
  .directive('uiSrefActive', $StateRefActiveDirective)
  .directive('uiSrefActiveEq', $StateRefActiveDirective)
  .directive('uiState', $StateRefDynamicDirective);

/**
 * @ngdoc filter
 * @name ui.router.state.filter:isState
 *
 * @requires ui.router.state.$state
 *
 * @description
 * Translates to {@link ui.router.state.$state#methods_is $state.is("stateName")}.
 */
$IsStateFilter.$inject = ['$state'];
function $IsStateFilter($state) {
  var isFilter = function (state, params) {
    return $state.is(state, params);
  };
  isFilter.$stateful = true;
  return isFilter;
}

/**
 * @ngdoc filter
 * @name ui.router.state.filter:includedByState
 *
 * @requires ui.router.state.$state
 *
 * @description
 * Translates to {@link ui.router.state.$state#methods_includes $state.includes('fullOrPartialStateName')}.
 */
$IncludedByStateFilter.$inject = ['$state'];
function $IncludedByStateFilter($state) {
  var includesFilter = function (state, params, options) {
    return $state.includes(state, params, options);
  };
  includesFilter.$stateful = true;
  return  includesFilter;
}

angular.module('ui.router.state')
  .filter('isState', $IsStateFilter)
  .filter('includedByState', $IncludedByStateFilter);
})(window, window.angular);
/*
 * angular-ui-bootstrap
 * http://angular-ui.github.io/bootstrap/

 * Version: 0.14.3 - 2015-10-23
 * License: MIT
 */
angular.module("ui.bootstrap",["ui.bootstrap.tpls","ui.bootstrap.collapse","ui.bootstrap.accordion","ui.bootstrap.alert","ui.bootstrap.buttons","ui.bootstrap.carousel","ui.bootstrap.dateparser","ui.bootstrap.position","ui.bootstrap.datepicker","ui.bootstrap.dropdown","ui.bootstrap.stackedMap","ui.bootstrap.modal","ui.bootstrap.pagination","ui.bootstrap.tooltip","ui.bootstrap.popover","ui.bootstrap.progressbar","ui.bootstrap.rating","ui.bootstrap.tabs","ui.bootstrap.timepicker","ui.bootstrap.typeahead"]),angular.module("ui.bootstrap.tpls",["template/accordion/accordion-group.html","template/accordion/accordion.html","template/alert/alert.html","template/carousel/carousel.html","template/carousel/slide.html","template/datepicker/datepicker.html","template/datepicker/day.html","template/datepicker/month.html","template/datepicker/popup.html","template/datepicker/year.html","template/modal/backdrop.html","template/modal/window.html","template/pagination/pager.html","template/pagination/pagination.html","template/tooltip/tooltip-html-popup.html","template/tooltip/tooltip-popup.html","template/tooltip/tooltip-template-popup.html","template/popover/popover-html.html","template/popover/popover-template.html","template/popover/popover.html","template/progressbar/bar.html","template/progressbar/progress.html","template/progressbar/progressbar.html","template/rating/rating.html","template/tabs/tab.html","template/tabs/tabset.html","template/timepicker/timepicker.html","template/typeahead/typeahead-match.html","template/typeahead/typeahead-popup.html"]),angular.module("ui.bootstrap.collapse",[]).directive("uibCollapse",["$animate","$injector",function(a,b){var c=b.has("$animateCss")?b.get("$animateCss"):null;return{link:function(b,d,e){function f(){d.removeClass("collapse").addClass("collapsing").attr("aria-expanded",!0).attr("aria-hidden",!1),c?c(d,{addClass:"in",easing:"ease",to:{height:d[0].scrollHeight+"px"}}).start()["finally"](g):a.addClass(d,"in",{to:{height:d[0].scrollHeight+"px"}}).then(g)}function g(){d.removeClass("collapsing").addClass("collapse").css({height:"auto"})}function h(){return d.hasClass("collapse")||d.hasClass("in")?(d.css({height:d[0].scrollHeight+"px"}).removeClass("collapse").addClass("collapsing").attr("aria-expanded",!1).attr("aria-hidden",!0),void(c?c(d,{removeClass:"in",to:{height:"0"}}).start()["finally"](i):a.removeClass(d,"in",{to:{height:"0"}}).then(i))):i()}function i(){d.css({height:"0"}),d.removeClass("collapsing").addClass("collapse")}b.$watch(e.uibCollapse,function(a){a?h():f()})}}}]),angular.module("ui.bootstrap.collapse").value("$collapseSuppressWarning",!1).directive("collapse",["$animate","$injector","$log","$collapseSuppressWarning",function(a,b,c,d){var e=b.has("$animateCss")?b.get("$animateCss"):null;return{link:function(b,f,g){function h(){f.removeClass("collapse").addClass("collapsing").attr("aria-expanded",!0).attr("aria-hidden",!1),e?e(f,{easing:"ease",to:{height:f[0].scrollHeight+"px"}}).start().done(i):a.animate(f,{},{height:f[0].scrollHeight+"px"}).then(i)}function i(){f.removeClass("collapsing").addClass("collapse in").css({height:"auto"})}function j(){return f.hasClass("collapse")||f.hasClass("in")?(f.css({height:f[0].scrollHeight+"px"}).removeClass("collapse in").addClass("collapsing").attr("aria-expanded",!1).attr("aria-hidden",!0),void(e?e(f,{to:{height:"0"}}).start().done(k):a.animate(f,{},{height:"0"}).then(k))):k()}function k(){f.css({height:"0"}),f.removeClass("collapsing").addClass("collapse")}d||c.warn("collapse is now deprecated. Use uib-collapse instead."),b.$watch(g.collapse,function(a){a?j():h()})}}}]),angular.module("ui.bootstrap.accordion",["ui.bootstrap.collapse"]).constant("uibAccordionConfig",{closeOthers:!0}).controller("UibAccordionController",["$scope","$attrs","uibAccordionConfig",function(a,b,c){this.groups=[],this.closeOthers=function(d){var e=angular.isDefined(b.closeOthers)?a.$eval(b.closeOthers):c.closeOthers;e&&angular.forEach(this.groups,function(a){a!==d&&(a.isOpen=!1)})},this.addGroup=function(a){var b=this;this.groups.push(a),a.$on("$destroy",function(c){b.removeGroup(a)})},this.removeGroup=function(a){var b=this.groups.indexOf(a);-1!==b&&this.groups.splice(b,1)}}]).directive("uibAccordion",function(){return{controller:"UibAccordionController",controllerAs:"accordion",transclude:!0,templateUrl:function(a,b){return b.templateUrl||"template/accordion/accordion.html"}}}).directive("uibAccordionGroup",function(){return{require:"^uibAccordion",transclude:!0,replace:!0,templateUrl:function(a,b){return b.templateUrl||"template/accordion/accordion-group.html"},scope:{heading:"@",isOpen:"=?",isDisabled:"=?"},controller:function(){this.setHeading=function(a){this.heading=a}},link:function(a,b,c,d){d.addGroup(a),a.openClass=c.openClass||"panel-open",a.panelClass=c.panelClass,a.$watch("isOpen",function(c){b.toggleClass(a.openClass,!!c),c&&d.closeOthers(a)}),a.toggleOpen=function(b){a.isDisabled||b&&32!==b.which||(a.isOpen=!a.isOpen)}}}}).directive("uibAccordionHeading",function(){return{transclude:!0,template:"",replace:!0,require:"^uibAccordionGroup",link:function(a,b,c,d,e){d.setHeading(e(a,angular.noop))}}}).directive("uibAccordionTransclude",function(){return{require:["?^uibAccordionGroup","?^accordionGroup"],link:function(a,b,c,d){d=d[0]?d[0]:d[1],a.$watch(function(){return d[c.uibAccordionTransclude]},function(a){a&&(b.find("span").html(""),b.find("span").append(a))})}}}),angular.module("ui.bootstrap.accordion").value("$accordionSuppressWarning",!1).controller("AccordionController",["$scope","$attrs","$controller","$log","$accordionSuppressWarning",function(a,b,c,d,e){e||d.warn("AccordionController is now deprecated. Use UibAccordionController instead."),angular.extend(this,c("UibAccordionController",{$scope:a,$attrs:b}))}]).directive("accordion",["$log","$accordionSuppressWarning",function(a,b){return{restrict:"EA",controller:"AccordionController",controllerAs:"accordion",transclude:!0,replace:!1,templateUrl:function(a,b){return b.templateUrl||"template/accordion/accordion.html"},link:function(){b||a.warn("accordion is now deprecated. Use uib-accordion instead.")}}}]).directive("accordionGroup",["$log","$accordionSuppressWarning",function(a,b){return{require:"^accordion",restrict:"EA",transclude:!0,replace:!0,templateUrl:function(a,b){return b.templateUrl||"template/accordion/accordion-group.html"},scope:{heading:"@",isOpen:"=?",isDisabled:"=?"},controller:function(){this.setHeading=function(a){this.heading=a}},link:function(c,d,e,f){b||a.warn("accordion-group is now deprecated. Use uib-accordion-group instead."),f.addGroup(c),c.openClass=e.openClass||"panel-open",c.panelClass=e.panelClass,c.$watch("isOpen",function(a){d.toggleClass(c.openClass,!!a),a&&f.closeOthers(c)}),c.toggleOpen=function(a){c.isDisabled||a&&32!==a.which||(c.isOpen=!c.isOpen)}}}}]).directive("accordionHeading",["$log","$accordionSuppressWarning",function(a,b){return{restrict:"EA",transclude:!0,template:"",replace:!0,require:"^accordionGroup",link:function(c,d,e,f,g){b||a.warn("accordion-heading is now deprecated. Use uib-accordion-heading instead."),f.setHeading(g(c,angular.noop))}}}]).directive("accordionTransclude",["$log","$accordionSuppressWarning",function(a,b){return{require:"^accordionGroup",link:function(c,d,e,f){b||a.warn("accordion-transclude is now deprecated. Use uib-accordion-transclude instead."),c.$watch(function(){return f[e.accordionTransclude]},function(a){a&&(d.find("span").html(""),d.find("span").append(a))})}}}]),angular.module("ui.bootstrap.alert",[]).controller("UibAlertController",["$scope","$attrs","$interpolate","$timeout",function(a,b,c,d){a.closeable=!!b.close;var e=angular.isDefined(b.dismissOnTimeout)?c(b.dismissOnTimeout)(a.$parent):null;e&&d(function(){a.close()},parseInt(e,10))}]).directive("uibAlert",function(){return{controller:"UibAlertController",controllerAs:"alert",templateUrl:function(a,b){return b.templateUrl||"template/alert/alert.html"},transclude:!0,replace:!0,scope:{type:"@",close:"&"}}}),angular.module("ui.bootstrap.alert").value("$alertSuppressWarning",!1).controller("AlertController",["$scope","$attrs","$controller","$log","$alertSuppressWarning",function(a,b,c,d,e){e||d.warn("AlertController is now deprecated. Use UibAlertController instead."),angular.extend(this,c("UibAlertController",{$scope:a,$attrs:b}))}]).directive("alert",["$log","$alertSuppressWarning",function(a,b){return{controller:"AlertController",controllerAs:"alert",templateUrl:function(a,b){return b.templateUrl||"template/alert/alert.html"},transclude:!0,replace:!0,scope:{type:"@",close:"&"},link:function(){b||a.warn("alert is now deprecated. Use uib-alert instead.")}}}]),angular.module("ui.bootstrap.buttons",[]).constant("uibButtonConfig",{activeClass:"active",toggleEvent:"click"}).controller("UibButtonsController",["uibButtonConfig",function(a){this.activeClass=a.activeClass||"active",this.toggleEvent=a.toggleEvent||"click"}]).directive("uibBtnRadio",function(){return{require:["uibBtnRadio","ngModel"],controller:"UibButtonsController",controllerAs:"buttons",link:function(a,b,c,d){var e=d[0],f=d[1];b.find("input").css({display:"none"}),f.$render=function(){b.toggleClass(e.activeClass,angular.equals(f.$modelValue,a.$eval(c.uibBtnRadio)))},b.on(e.toggleEvent,function(){if(!c.disabled){var d=b.hasClass(e.activeClass);(!d||angular.isDefined(c.uncheckable))&&a.$apply(function(){f.$setViewValue(d?null:a.$eval(c.uibBtnRadio)),f.$render()})}})}}}).directive("uibBtnCheckbox",function(){return{require:["uibBtnCheckbox","ngModel"],controller:"UibButtonsController",controllerAs:"button",link:function(a,b,c,d){function e(){return g(c.btnCheckboxTrue,!0)}function f(){return g(c.btnCheckboxFalse,!1)}function g(b,c){return angular.isDefined(b)?a.$eval(b):c}var h=d[0],i=d[1];b.find("input").css({display:"none"}),i.$render=function(){b.toggleClass(h.activeClass,angular.equals(i.$modelValue,e()))},b.on(h.toggleEvent,function(){c.disabled||a.$apply(function(){i.$setViewValue(b.hasClass(h.activeClass)?f():e()),i.$render()})})}}}),angular.module("ui.bootstrap.buttons").value("$buttonsSuppressWarning",!1).controller("ButtonsController",["$controller","$log","$buttonsSuppressWarning",function(a,b,c){c||b.warn("ButtonsController is now deprecated. Use UibButtonsController instead."),angular.extend(this,a("UibButtonsController"))}]).directive("btnRadio",["$log","$buttonsSuppressWarning",function(a,b){return{require:["btnRadio","ngModel"],controller:"ButtonsController",controllerAs:"buttons",link:function(c,d,e,f){b||a.warn("btn-radio is now deprecated. Use uib-btn-radio instead.");var g=f[0],h=f[1];d.find("input").css({display:"none"}),h.$render=function(){d.toggleClass(g.activeClass,angular.equals(h.$modelValue,c.$eval(e.btnRadio)))},d.bind(g.toggleEvent,function(){if(!e.disabled){var a=d.hasClass(g.activeClass);(!a||angular.isDefined(e.uncheckable))&&c.$apply(function(){h.$setViewValue(a?null:c.$eval(e.btnRadio)),h.$render()})}})}}}]).directive("btnCheckbox",["$document","$log","$buttonsSuppressWarning",function(a,b,c){return{require:["btnCheckbox","ngModel"],controller:"ButtonsController",controllerAs:"button",link:function(d,e,f,g){function h(){return j(f.btnCheckboxTrue,!0)}function i(){return j(f.btnCheckboxFalse,!1)}function j(a,b){var c=d.$eval(a);return angular.isDefined(c)?c:b}c||b.warn("btn-checkbox is now deprecated. Use uib-btn-checkbox instead.");var k=g[0],l=g[1];e.find("input").css({display:"none"}),l.$render=function(){e.toggleClass(k.activeClass,angular.equals(l.$modelValue,h()))},e.bind(k.toggleEvent,function(){f.disabled||d.$apply(function(){l.$setViewValue(e.hasClass(k.activeClass)?i():h()),l.$render()})}),e.on("keypress",function(b){f.disabled||32!==b.which||a[0].activeElement!==e[0]||d.$apply(function(){l.$setViewValue(e.hasClass(k.activeClass)?i():h()),l.$render()})})}}}]),angular.module("ui.bootstrap.carousel",[]).controller("UibCarouselController",["$scope","$element","$interval","$animate",function(a,b,c,d){function e(b,c,e){s||(angular.extend(b,{direction:e,active:!0}),angular.extend(m.currentSlide||{},{direction:e,active:!1}),d.enabled()&&!a.noTransition&&!a.$currentTransition&&b.$element&&m.slides.length>1&&(b.$element.data(q,b.direction),m.currentSlide&&m.currentSlide.$element&&m.currentSlide.$element.data(q,b.direction),a.$currentTransition=!0,o?d.on("addClass",b.$element,function(b,c){"close"===c&&(a.$currentTransition=null,d.off("addClass",b))}):b.$element.one("$animate:close",function(){a.$currentTransition=null})),m.currentSlide=b,r=c,g())}function f(a){if(angular.isUndefined(n[a].index))return n[a];var b;n.length;for(b=0;b<n.length;++b)if(n[b].index==a)return n[b]}function g(){h();var b=+a.interval;!isNaN(b)&&b>0&&(k=c(i,b))}function h(){k&&(c.cancel(k),k=null)}function i(){var b=+a.interval;l&&!isNaN(b)&&b>0&&n.length?a.next():a.pause()}function j(b){b.length||(a.$currentTransition=null)}var k,l,m=this,n=m.slides=a.slides=[],o=angular.version.minor>=4,p="uib-noTransition",q="uib-slideDirection",r=-1;m.currentSlide=null;var s=!1;m.select=a.select=function(b,c){var d=a.indexOfSlide(b);void 0===c&&(c=d>m.getCurrentIndex()?"next":"prev"),b&&b!==m.currentSlide&&!a.$currentTransition&&e(b,d,c)},a.$on("$destroy",function(){s=!0}),m.getCurrentIndex=function(){return m.currentSlide&&angular.isDefined(m.currentSlide.index)?+m.currentSlide.index:r},a.indexOfSlide=function(a){return angular.isDefined(a.index)?+a.index:n.indexOf(a)},a.next=function(){var b=(m.getCurrentIndex()+1)%n.length;return 0===b&&a.noWrap()?void a.pause():m.select(f(b),"next")},a.prev=function(){var b=m.getCurrentIndex()-1<0?n.length-1:m.getCurrentIndex()-1;return a.noWrap()&&b===n.length-1?void a.pause():m.select(f(b),"prev")},a.isActive=function(a){return m.currentSlide===a},a.$watch("interval",g),a.$watchCollection("slides",j),a.$on("$destroy",h),a.play=function(){l||(l=!0,g())},a.pause=function(){a.noPause||(l=!1,h())},m.addSlide=function(b,c){b.$element=c,n.push(b),1===n.length||b.active?(m.select(n[n.length-1]),1===n.length&&a.play()):b.active=!1},m.removeSlide=function(a){angular.isDefined(a.index)&&n.sort(function(a,b){return+a.index>+b.index});var b=n.indexOf(a);n.splice(b,1),n.length>0&&a.active?b>=n.length?m.select(n[b-1]):m.select(n[b]):r>b&&r--,0===n.length&&(m.currentSlide=null)},a.$watch("noTransition",function(a){b.data(p,a)})}]).directive("uibCarousel",[function(){return{transclude:!0,replace:!0,controller:"UibCarouselController",controllerAs:"carousel",require:"carousel",templateUrl:function(a,b){return b.templateUrl||"template/carousel/carousel.html"},scope:{interval:"=",noTransition:"=",noPause:"=",noWrap:"&"}}}]).directive("uibSlide",function(){return{require:"^uibCarousel",restrict:"EA",transclude:!0,replace:!0,templateUrl:function(a,b){return b.templateUrl||"template/carousel/slide.html"},scope:{active:"=?",actual:"=?",index:"=?"},link:function(a,b,c,d){d.addSlide(a,b),a.$on("$destroy",function(){d.removeSlide(a)}),a.$watch("active",function(b){b&&d.select(a)})}}}).animation(".item",["$injector","$animate",function(a,b){function c(a,b,c){a.removeClass(b),c&&c()}var d="uib-noTransition",e="uib-slideDirection",f=null;return a.has("$animateCss")&&(f=a.get("$animateCss")),{beforeAddClass:function(a,g,h){if("active"==g&&a.parent()&&a.parent().parent()&&!a.parent().parent().data(d)){var i=!1,j=a.data(e),k="next"==j?"left":"right",l=c.bind(this,a,k+" "+j,h);return a.addClass(j),f?f(a,{addClass:k}).start().done(l):b.addClass(a,k).then(function(){i||l(),h()}),function(){i=!0}}h()},beforeRemoveClass:function(a,g,h){if("active"===g&&a.parent()&&a.parent().parent()&&!a.parent().parent().data(d)){var i=!1,j=a.data(e),k="next"==j?"left":"right",l=c.bind(this,a,k,h);return f?f(a,{addClass:k}).start().done(l):b.addClass(a,k).then(function(){i||l(),h()}),function(){i=!0}}h()}}}]),angular.module("ui.bootstrap.carousel").value("$carouselSuppressWarning",!1).controller("CarouselController",["$scope","$element","$controller","$log","$carouselSuppressWarning",function(a,b,c,d,e){e||d.warn("CarouselController is now deprecated. Use UibCarouselController instead."),angular.extend(this,c("UibCarouselController",{$scope:a,$element:b}))}]).directive("carousel",["$log","$carouselSuppressWarning",function(a,b){return{transclude:!0,replace:!0,controller:"CarouselController",controllerAs:"carousel",require:"carousel",templateUrl:function(a,b){return b.templateUrl||"template/carousel/carousel.html"},scope:{interval:"=",noTransition:"=",noPause:"=",noWrap:"&"},link:function(){b||a.warn("carousel is now deprecated. Use uib-carousel instead.")}}}]).directive("slide",["$log","$carouselSuppressWarning",function(a,b){return{require:"^carousel",transclude:!0,replace:!0,templateUrl:function(a,b){return b.templateUrl||"template/carousel/slide.html"},scope:{active:"=?",actual:"=?",index:"=?"},link:function(c,d,e,f){b||a.warn("slide is now deprecated. Use uib-slide instead."),f.addSlide(c,d),c.$on("$destroy",function(){f.removeSlide(c)}),c.$watch("active",function(a){a&&f.select(c)})}}}]),angular.module("ui.bootstrap.dateparser",[]).service("uibDateParser",["$log","$locale","orderByFilter",function(a,b,c){function d(a){var b=[],d=a.split("");return angular.forEach(g,function(c,e){var f=a.indexOf(e);if(f>-1){a=a.split(""),d[f]="("+c.regex+")",a[f]="$";for(var g=f+1,h=f+e.length;h>g;g++)d[g]="",a[g]="$";a=a.join(""),b.push({index:f,apply:c.apply})}}),{regex:new RegExp("^"+d.join("")+"$"),map:c(b,"index")}}function e(a,b,c){return 1>c?!1:1===b&&c>28?29===c&&(a%4===0&&a%100!==0||a%400===0):3===b||5===b||8===b||10===b?31>c:!0}var f,g,h=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;this.init=function(){f=b.id,this.parsers={},g={yyyy:{regex:"\\d{4}",apply:function(a){this.year=+a}},yy:{regex:"\\d{2}",apply:function(a){this.year=+a+2e3}},y:{regex:"\\d{1,4}",apply:function(a){this.year=+a}},MMMM:{regex:b.DATETIME_FORMATS.MONTH.join("|"),apply:function(a){this.month=b.DATETIME_FORMATS.MONTH.indexOf(a)}},MMM:{regex:b.DATETIME_FORMATS.SHORTMONTH.join("|"),apply:function(a){this.month=b.DATETIME_FORMATS.SHORTMONTH.indexOf(a)}},MM:{regex:"0[1-9]|1[0-2]",apply:function(a){this.month=a-1}},M:{regex:"[1-9]|1[0-2]",apply:function(a){this.month=a-1}},dd:{regex:"[0-2][0-9]{1}|3[0-1]{1}",apply:function(a){this.date=+a}},d:{regex:"[1-2]?[0-9]{1}|3[0-1]{1}",apply:function(a){this.date=+a}},EEEE:{regex:b.DATETIME_FORMATS.DAY.join("|")},EEE:{regex:b.DATETIME_FORMATS.SHORTDAY.join("|")},HH:{regex:"(?:0|1)[0-9]|2[0-3]",apply:function(a){this.hours=+a}},hh:{regex:"0[0-9]|1[0-2]",apply:function(a){this.hours=+a}},H:{regex:"1?[0-9]|2[0-3]",apply:function(a){this.hours=+a}},h:{regex:"[0-9]|1[0-2]",apply:function(a){this.hours=+a}},mm:{regex:"[0-5][0-9]",apply:function(a){this.minutes=+a}},m:{regex:"[0-9]|[1-5][0-9]",apply:function(a){this.minutes=+a}},sss:{regex:"[0-9][0-9][0-9]",apply:function(a){this.milliseconds=+a}},ss:{regex:"[0-5][0-9]",apply:function(a){this.seconds=+a}},s:{regex:"[0-9]|[1-5][0-9]",apply:function(a){this.seconds=+a}},a:{regex:b.DATETIME_FORMATS.AMPMS.join("|"),apply:function(a){12===this.hours&&(this.hours=0),"PM"===a&&(this.hours+=12)}}}},this.init(),this.parse=function(c,g,i){if(!angular.isString(c)||!g)return c;g=b.DATETIME_FORMATS[g]||g,g=g.replace(h,"\\$&"),b.id!==f&&this.init(),this.parsers[g]||(this.parsers[g]=d(g));var j=this.parsers[g],k=j.regex,l=j.map,m=c.match(k);if(m&&m.length){var n,o;angular.isDate(i)&&!isNaN(i.getTime())?n={year:i.getFullYear(),month:i.getMonth(),date:i.getDate(),hours:i.getHours(),minutes:i.getMinutes(),seconds:i.getSeconds(),milliseconds:i.getMilliseconds()}:(i&&a.warn("dateparser:","baseDate is not a valid date"),n={year:1900,month:0,date:1,hours:0,minutes:0,seconds:0,milliseconds:0});for(var p=1,q=m.length;q>p;p++){var r=l[p-1];r.apply&&r.apply.call(n,m[p])}return e(n.year,n.month,n.date)&&(angular.isDate(i)&&!isNaN(i.getTime())?(o=new Date(i),o.setFullYear(n.year,n.month,n.date,n.hours,n.minutes,n.seconds,n.milliseconds||0)):o=new Date(n.year,n.month,n.date,n.hours,n.minutes,n.seconds,n.milliseconds||0)),o}}}]),angular.module("ui.bootstrap.dateparser").value("$dateParserSuppressWarning",!1).service("dateParser",["$log","$dateParserSuppressWarning","uibDateParser",function(a,b,c){b||a.warn("dateParser is now deprecated. Use uibDateParser instead."),angular.extend(this,c)}]),angular.module("ui.bootstrap.position",[]).factory("$uibPosition",["$document","$window",function(a,b){function c(a,c){return a.currentStyle?a.currentStyle[c]:b.getComputedStyle?b.getComputedStyle(a)[c]:a.style[c]}function d(a){return"static"===(c(a,"position")||"static")}var e=function(b){for(var c=a[0],e=b.offsetParent||c;e&&e!==c&&d(e);)e=e.offsetParent;return e||c};return{position:function(b){var c=this.offset(b),d={top:0,left:0},f=e(b[0]);f!=a[0]&&(d=this.offset(angular.element(f)),d.top+=f.clientTop-f.scrollTop,d.left+=f.clientLeft-f.scrollLeft);var g=b[0].getBoundingClientRect();return{width:g.width||b.prop("offsetWidth"),height:g.height||b.prop("offsetHeight"),top:c.top-d.top,left:c.left-d.left}},offset:function(c){var d=c[0].getBoundingClientRect();return{width:d.width||c.prop("offsetWidth"),height:d.height||c.prop("offsetHeight"),top:d.top+(b.pageYOffset||a[0].documentElement.scrollTop),left:d.left+(b.pageXOffset||a[0].documentElement.scrollLeft)}},positionElements:function(a,b,c,d){var e,f,g,h,i=c.split("-"),j=i[0],k=i[1]||"center";e=d?this.offset(a):this.position(a),f=b.prop("offsetWidth"),g=b.prop("offsetHeight");var l={center:function(){return e.left+e.width/2-f/2},left:function(){return e.left},right:function(){return e.left+e.width}},m={center:function(){return e.top+e.height/2-g/2},top:function(){return e.top},bottom:function(){return e.top+e.height}};switch(j){case"right":h={top:m[k](),left:l[j]()};break;case"left":h={top:m[k](),left:e.left-f};break;case"bottom":h={top:m[j](),left:l[k]()};break;default:h={top:e.top-g,left:l[k]()}}return h}}}]),angular.module("ui.bootstrap.position").value("$positionSuppressWarning",!1).service("$position",["$log","$positionSuppressWarning","$uibPosition",function(a,b,c){b||a.warn("$position is now deprecated. Use $uibPosition instead."),angular.extend(this,c)}]),angular.module("ui.bootstrap.datepicker",["ui.bootstrap.dateparser","ui.bootstrap.position"]).value("$datepickerSuppressError",!1).constant("uibDatepickerConfig",{formatDay:"dd",formatMonth:"MMMM",formatYear:"yyyy",formatDayHeader:"EEE",formatDayTitle:"MMMM yyyy",formatMonthTitle:"yyyy",datepickerMode:"day",minMode:"day",maxMode:"year",showWeeks:!0,startingDay:0,yearRange:20,minDate:null,maxDate:null,shortcutPropagation:!1}).controller("UibDatepickerController",["$scope","$attrs","$parse","$interpolate","$log","dateFilter","uibDatepickerConfig","$datepickerSuppressError",function(a,b,c,d,e,f,g,h){var i=this,j={$setViewValue:angular.noop};this.modes=["day","month","year"],angular.forEach(["formatDay","formatMonth","formatYear","formatDayHeader","formatDayTitle","formatMonthTitle","showWeeks","startingDay","yearRange","shortcutPropagation"],function(c,e){i[c]=angular.isDefined(b[c])?6>e?d(b[c])(a.$parent):a.$parent.$eval(b[c]):g[c]}),angular.forEach(["minDate","maxDate"],function(d){b[d]?a.$parent.$watch(c(b[d]),function(a){i[d]=a?new Date(a):null,i.refreshView()}):i[d]=g[d]?new Date(g[d]):null}),angular.forEach(["minMode","maxMode"],function(d){b[d]?a.$parent.$watch(c(b[d]),function(c){i[d]=angular.isDefined(c)?c:b[d],a[d]=i[d],("minMode"==d&&i.modes.indexOf(a.datepickerMode)<i.modes.indexOf(i[d])||"maxMode"==d&&i.modes.indexOf(a.datepickerMode)>i.modes.indexOf(i[d]))&&(a.datepickerMode=i[d])}):(i[d]=g[d]||null,a[d]=i[d])}),a.datepickerMode=a.datepickerMode||g.datepickerMode,a.uniqueId="datepicker-"+a.$id+"-"+Math.floor(1e4*Math.random()),angular.isDefined(b.initDate)?(this.activeDate=a.$parent.$eval(b.initDate)||new Date,a.$parent.$watch(b.initDate,function(a){a&&(j.$isEmpty(j.$modelValue)||j.$invalid)&&(i.activeDate=a,i.refreshView())})):this.activeDate=new Date,a.isActive=function(b){return 0===i.compare(b.date,i.activeDate)?(a.activeDateId=b.uid,!0):!1},this.init=function(a){j=a,j.$render=function(){i.render()}},this.render=function(){if(j.$viewValue){var a=new Date(j.$viewValue),b=!isNaN(a);b?this.activeDate=a:h||e.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')}this.refreshView()},this.refreshView=function(){if(this.element){this._refreshView();var a=j.$viewValue?new Date(j.$viewValue):null;j.$setValidity("dateDisabled",!a||this.element&&!this.isDisabled(a))}},this.createDateObject=function(a,b){var c=j.$viewValue?new Date(j.$viewValue):null;return{date:a,label:f(a,b),selected:c&&0===this.compare(a,c),disabled:this.isDisabled(a),current:0===this.compare(a,new Date),customClass:this.customClass(a)}},this.isDisabled=function(c){return this.minDate&&this.compare(c,this.minDate)<0||this.maxDate&&this.compare(c,this.maxDate)>0||b.dateDisabled&&a.dateDisabled({date:c,mode:a.datepickerMode})},this.customClass=function(b){return a.customClass({date:b,mode:a.datepickerMode})},this.split=function(a,b){for(var c=[];a.length>0;)c.push(a.splice(0,b));return c},a.select=function(b){if(a.datepickerMode===i.minMode){var c=j.$viewValue?new Date(j.$viewValue):new Date(0,0,0,0,0,0,0);c.setFullYear(b.getFullYear(),b.getMonth(),b.getDate()),j.$setViewValue(c),j.$render()}else i.activeDate=b,a.datepickerMode=i.modes[i.modes.indexOf(a.datepickerMode)-1]},a.move=function(a){var b=i.activeDate.getFullYear()+a*(i.step.years||0),c=i.activeDate.getMonth()+a*(i.step.months||0);i.activeDate.setFullYear(b,c,1),i.refreshView()},a.toggleMode=function(b){b=b||1,a.datepickerMode===i.maxMode&&1===b||a.datepickerMode===i.minMode&&-1===b||(a.datepickerMode=i.modes[i.modes.indexOf(a.datepickerMode)+b])},a.keys={13:"enter",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down"};var k=function(){i.element[0].focus()};a.$on("uib:datepicker.focus",k),a.keydown=function(b){var c=a.keys[b.which];if(c&&!b.shiftKey&&!b.altKey)if(b.preventDefault(),i.shortcutPropagation||b.stopPropagation(),"enter"===c||"space"===c){if(i.isDisabled(i.activeDate))return;a.select(i.activeDate)}else!b.ctrlKey||"up"!==c&&"down"!==c?(i.handleKeyDown(c,b),i.refreshView()):a.toggleMode("up"===c?1:-1)}}]).controller("UibDaypickerController",["$scope","$element","dateFilter",function(a,b,c){function d(a,b){return 1!==b||a%4!==0||a%100===0&&a%400!==0?f[b]:29}function e(a){var b=new Date(a);b.setDate(b.getDate()+4-(b.getDay()||7));var c=b.getTime();return b.setMonth(0),b.setDate(1),Math.floor(Math.round((c-b)/864e5)/7)+1}var f=[31,28,31,30,31,30,31,31,30,31,30,31];this.step={months:1},this.element=b,this.init=function(b){angular.extend(b,this),a.showWeeks=b.showWeeks,b.refreshView()},this.getDates=function(a,b){for(var c,d=new Array(b),e=new Date(a),f=0;b>f;)c=new Date(e),d[f++]=c,e.setDate(e.getDate()+1);return d},this._refreshView=function(){var b=this.activeDate.getFullYear(),d=this.activeDate.getMonth(),f=new Date(this.activeDate);f.setFullYear(b,d,1);var g=this.startingDay-f.getDay(),h=g>0?7-g:-g,i=new Date(f);h>0&&i.setDate(-h+1);for(var j=this.getDates(i,42),k=0;42>k;k++)j[k]=angular.extend(this.createDateObject(j[k],this.formatDay),{secondary:j[k].getMonth()!==d,uid:a.uniqueId+"-"+k});a.labels=new Array(7);for(var l=0;7>l;l++)a.labels[l]={abbr:c(j[l].date,this.formatDayHeader),full:c(j[l].date,"EEEE")};if(a.title=c(this.activeDate,this.formatDayTitle),a.rows=this.split(j,7),a.showWeeks){a.weekNumbers=[];for(var m=(11-this.startingDay)%7,n=a.rows.length,o=0;n>o;o++)a.weekNumbers.push(e(a.rows[o][m].date))}},this.compare=function(a,b){return new Date(a.getFullYear(),a.getMonth(),a.getDate())-new Date(b.getFullYear(),b.getMonth(),b.getDate())},this.handleKeyDown=function(a,b){var c=this.activeDate.getDate();if("left"===a)c-=1;else if("up"===a)c-=7;else if("right"===a)c+=1;else if("down"===a)c+=7;else if("pageup"===a||"pagedown"===a){var e=this.activeDate.getMonth()+("pageup"===a?-1:1);this.activeDate.setMonth(e,1),c=Math.min(d(this.activeDate.getFullYear(),this.activeDate.getMonth()),c)}else"home"===a?c=1:"end"===a&&(c=d(this.activeDate.getFullYear(),this.activeDate.getMonth()));this.activeDate.setDate(c)}}]).controller("UibMonthpickerController",["$scope","$element","dateFilter",function(a,b,c){this.step={years:1},this.element=b,this.init=function(a){angular.extend(a,this),a.refreshView()},this._refreshView=function(){for(var b,d=new Array(12),e=this.activeDate.getFullYear(),f=0;12>f;f++)b=new Date(this.activeDate),b.setFullYear(e,f,1),d[f]=angular.extend(this.createDateObject(b,this.formatMonth),{uid:a.uniqueId+"-"+f});a.title=c(this.activeDate,this.formatMonthTitle),a.rows=this.split(d,3)},this.compare=function(a,b){return new Date(a.getFullYear(),a.getMonth())-new Date(b.getFullYear(),b.getMonth())},this.handleKeyDown=function(a,b){var c=this.activeDate.getMonth();if("left"===a)c-=1;else if("up"===a)c-=3;else if("right"===a)c+=1;else if("down"===a)c+=3;else if("pageup"===a||"pagedown"===a){var d=this.activeDate.getFullYear()+("pageup"===a?-1:1);this.activeDate.setFullYear(d)}else"home"===a?c=0:"end"===a&&(c=11);this.activeDate.setMonth(c)}}]).controller("UibYearpickerController",["$scope","$element","dateFilter",function(a,b,c){function d(a){return parseInt((a-1)/e,10)*e+1}var e;this.element=b,this.yearpickerInit=function(){e=this.yearRange,this.step={years:e}},this._refreshView=function(){for(var b,c=new Array(e),f=0,g=d(this.activeDate.getFullYear());e>f;f++)b=new Date(this.activeDate),b.setFullYear(g+f,0,1),c[f]=angular.extend(this.createDateObject(b,this.formatYear),{uid:a.uniqueId+"-"+f});a.title=[c[0].label,c[e-1].label].join(" - "),a.rows=this.split(c,5)},this.compare=function(a,b){return a.getFullYear()-b.getFullYear()},this.handleKeyDown=function(a,b){var c=this.activeDate.getFullYear();"left"===a?c-=1:"up"===a?c-=5:"right"===a?c+=1:"down"===a?c+=5:"pageup"===a||"pagedown"===a?c+=("pageup"===a?-1:1)*this.step.years:"home"===a?c=d(this.activeDate.getFullYear()):"end"===a&&(c=d(this.activeDate.getFullYear())+e-1),this.activeDate.setFullYear(c)}}]).directive("uibDatepicker",function(){return{replace:!0,templateUrl:function(a,b){return b.templateUrl||"template/datepicker/datepicker.html"},scope:{datepickerMode:"=?",dateDisabled:"&",customClass:"&",shortcutPropagation:"&?"},require:["uibDatepicker","^ngModel"],controller:"UibDatepickerController",controllerAs:"datepicker",link:function(a,b,c,d){var e=d[0],f=d[1];e.init(f)}}}).directive("uibDaypicker",function(){return{replace:!0,templateUrl:function(a,b){return b.templateUrl||"template/datepicker/day.html"},require:["^?uibDatepicker","uibDaypicker","^?datepicker"],controller:"UibDaypickerController",link:function(a,b,c,d){var e=d[0]||d[2],f=d[1];f.init(e)}}}).directive("uibMonthpicker",function(){return{replace:!0,templateUrl:function(a,b){return b.templateUrl||"template/datepicker/month.html"},require:["^?uibDatepicker","uibMonthpicker","^?datepicker"],controller:"UibMonthpickerController",link:function(a,b,c,d){var e=d[0]||d[2],f=d[1];f.init(e)}}}).directive("uibYearpicker",function(){return{replace:!0,templateUrl:function(a,b){return b.templateUrl||"template/datepicker/year.html"},require:["^?uibDatepicker","uibYearpicker","^?datepicker"],controller:"UibYearpickerController",link:function(a,b,c,d){var e=d[0]||d[2];angular.extend(e,d[1]),e.yearpickerInit(),e.refreshView()}}}).constant("uibDatepickerPopupConfig",{datepickerPopup:"yyyy-MM-dd",datepickerPopupTemplateUrl:"template/datepicker/popup.html",datepickerTemplateUrl:"template/datepicker/datepicker.html",html5Types:{date:"yyyy-MM-dd","datetime-local":"yyyy-MM-ddTHH:mm:ss.sss",month:"yyyy-MM"},currentText:"Today",clearText:"Clear",closeText:"Done",closeOnDateSelection:!0,appendToBody:!1,showButtonBar:!0,onOpenFocus:!0}).controller("UibDatepickerPopupController",["$scope","$element","$attrs","$compile","$parse","$document","$rootScope","$uibPosition","dateFilter","uibDateParser","uibDatepickerPopupConfig","$timeout",function(a,b,c,d,e,f,g,h,i,j,k,l){
function m(a){return a.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()})}function n(b){if(angular.isNumber(b)&&(b=new Date(b)),b){if(angular.isDate(b)&&!isNaN(b))return b;if(angular.isString(b)){var c=j.parse(b,r,a.date);return isNaN(c)?void 0:c}return void 0}return null}function o(a,b){var d=a||b;if(!c.ngRequired&&!d)return!0;if(angular.isNumber(d)&&(d=new Date(d)),d){if(angular.isDate(d)&&!isNaN(d))return!0;if(angular.isString(d)){var e=j.parse(d,r);return!isNaN(e)}return!1}return!0}function p(c){var d=A[0],e=b[0].contains(c.target),f=void 0!==d.contains&&d.contains(c.target);!a.isOpen||e||f||a.$apply(function(){a.isOpen=!1})}function q(c){27===c.which&&a.isOpen?(c.preventDefault(),c.stopPropagation(),a.$apply(function(){a.isOpen=!1}),b[0].focus()):40!==c.which||a.isOpen||(c.preventDefault(),c.stopPropagation(),a.$apply(function(){a.isOpen=!0}))}var r,s,t,u,v,w,x,y,z,A,B={},C=!1;a.watchData={},this.init=function(h){if(z=h,s=angular.isDefined(c.closeOnDateSelection)?a.$parent.$eval(c.closeOnDateSelection):k.closeOnDateSelection,t=angular.isDefined(c.datepickerAppendToBody)?a.$parent.$eval(c.datepickerAppendToBody):k.appendToBody,u=angular.isDefined(c.onOpenFocus)?a.$parent.$eval(c.onOpenFocus):k.onOpenFocus,v=angular.isDefined(c.datepickerPopupTemplateUrl)?c.datepickerPopupTemplateUrl:k.datepickerPopupTemplateUrl,w=angular.isDefined(c.datepickerTemplateUrl)?c.datepickerTemplateUrl:k.datepickerTemplateUrl,a.showButtonBar=angular.isDefined(c.showButtonBar)?a.$parent.$eval(c.showButtonBar):k.showButtonBar,k.html5Types[c.type]?(r=k.html5Types[c.type],C=!0):(r=c.datepickerPopup||c.uibDatepickerPopup||k.datepickerPopup,c.$observe("uibDatepickerPopup",function(a,b){var c=a||k.datepickerPopup;if(c!==r&&(r=c,z.$modelValue=null,!r))throw new Error("uibDatepickerPopup must have a date format specified.")})),!r)throw new Error("uibDatepickerPopup must have a date format specified.");if(C&&c.datepickerPopup)throw new Error("HTML5 date input types do not support custom formats.");if(x=angular.element("<div uib-datepicker-popup-wrap><div uib-datepicker></div></div>"),x.attr({"ng-model":"date","ng-change":"dateSelection(date)","template-url":v}),y=angular.element(x.children()[0]),y.attr("template-url",w),C&&"month"===c.type&&(y.attr("datepicker-mode",'"month"'),y.attr("min-mode","month")),c.datepickerOptions){var l=a.$parent.$eval(c.datepickerOptions);l&&l.initDate&&(a.initDate=l.initDate,y.attr("init-date","initDate"),delete l.initDate),angular.forEach(l,function(a,b){y.attr(m(b),a)})}angular.forEach(["minMode","maxMode","minDate","maxDate","datepickerMode","initDate","shortcutPropagation"],function(b){if(c[b]){var d=e(c[b]);if(a.$parent.$watch(d,function(c){a.watchData[b]=c,("minDate"===b||"maxDate"===b)&&(B[b]=new Date(c))}),y.attr(m(b),"watchData."+b),"datepickerMode"===b){var f=d.assign;a.$watch("watchData."+b,function(b,c){angular.isFunction(f)&&b!==c&&f(a.$parent,b)})}}}),c.dateDisabled&&y.attr("date-disabled","dateDisabled({ date: date, mode: mode })"),c.showWeeks&&y.attr("show-weeks",c.showWeeks),c.customClass&&y.attr("custom-class","customClass({ date: date, mode: mode })"),C?z.$formatters.push(function(b){return a.date=b,b}):(z.$$parserName="date",z.$validators.date=o,z.$parsers.unshift(n),z.$formatters.push(function(b){return a.date=b,z.$isEmpty(b)?b:i(b,r)})),z.$viewChangeListeners.push(function(){a.date=j.parse(z.$viewValue,r,a.date)}),b.bind("keydown",q),A=d(x)(a),x.remove(),t?f.find("body").append(A):b.after(A),a.$on("$destroy",function(){a.isOpen===!0&&(g.$$phase||a.$apply(function(){a.isOpen=!1})),A.remove(),b.unbind("keydown",q),f.unbind("click",p)})},a.getText=function(b){return a[b+"Text"]||k[b+"Text"]},a.isDisabled=function(b){return"today"===b&&(b=new Date),a.watchData.minDate&&a.compare(b,B.minDate)<0||a.watchData.maxDate&&a.compare(b,B.maxDate)>0},a.compare=function(a,b){return new Date(a.getFullYear(),a.getMonth(),a.getDate())-new Date(b.getFullYear(),b.getMonth(),b.getDate())},a.dateSelection=function(c){angular.isDefined(c)&&(a.date=c);var d=a.date?i(a.date,r):null;b.val(d),z.$setViewValue(d),s&&(a.isOpen=!1,b[0].focus())},a.keydown=function(c){27===c.which&&(a.isOpen=!1,b[0].focus())},a.select=function(b){if("today"===b){var c=new Date;angular.isDate(a.date)?(b=new Date(a.date),b.setFullYear(c.getFullYear(),c.getMonth(),c.getDate())):b=new Date(c.setHours(0,0,0,0))}a.dateSelection(b)},a.close=function(){a.isOpen=!1,b[0].focus()},a.$watch("isOpen",function(c){c?(a.position=t?h.offset(b):h.position(b),a.position.top=a.position.top+b.prop("offsetHeight"),l(function(){u&&a.$broadcast("uib:datepicker.focus"),f.bind("click",p)},0,!1)):f.unbind("click",p)})}]).directive("uibDatepickerPopup",function(){return{require:["ngModel","uibDatepickerPopup"],controller:"UibDatepickerPopupController",scope:{isOpen:"=?",currentText:"@",clearText:"@",closeText:"@",dateDisabled:"&",customClass:"&"},link:function(a,b,c,d){var e=d[0],f=d[1];f.init(e)}}}).directive("uibDatepickerPopupWrap",function(){return{replace:!0,transclude:!0,templateUrl:function(a,b){return b.templateUrl||"template/datepicker/popup.html"}}}),angular.module("ui.bootstrap.datepicker").value("$datepickerSuppressWarning",!1).controller("DatepickerController",["$scope","$attrs","$parse","$interpolate","$log","dateFilter","uibDatepickerConfig","$datepickerSuppressError","$datepickerSuppressWarning",function(a,b,c,d,e,f,g,h,i){i||e.warn("DatepickerController is now deprecated. Use UibDatepickerController instead.");var j=this,k={$setViewValue:angular.noop};this.modes=["day","month","year"],angular.forEach(["formatDay","formatMonth","formatYear","formatDayHeader","formatDayTitle","formatMonthTitle","showWeeks","startingDay","yearRange","shortcutPropagation"],function(c,e){j[c]=angular.isDefined(b[c])?6>e?d(b[c])(a.$parent):a.$parent.$eval(b[c]):g[c]}),angular.forEach(["minDate","maxDate"],function(d){b[d]?a.$parent.$watch(c(b[d]),function(a){j[d]=a?new Date(a):null,j.refreshView()}):j[d]=g[d]?new Date(g[d]):null}),angular.forEach(["minMode","maxMode"],function(d){b[d]?a.$parent.$watch(c(b[d]),function(c){j[d]=angular.isDefined(c)?c:b[d],a[d]=j[d],("minMode"==d&&j.modes.indexOf(a.datepickerMode)<j.modes.indexOf(j[d])||"maxMode"==d&&j.modes.indexOf(a.datepickerMode)>j.modes.indexOf(j[d]))&&(a.datepickerMode=j[d])}):(j[d]=g[d]||null,a[d]=j[d])}),a.datepickerMode=a.datepickerMode||g.datepickerMode,a.uniqueId="datepicker-"+a.$id+"-"+Math.floor(1e4*Math.random()),angular.isDefined(b.initDate)?(this.activeDate=a.$parent.$eval(b.initDate)||new Date,a.$parent.$watch(b.initDate,function(a){a&&(k.$isEmpty(k.$modelValue)||k.$invalid)&&(j.activeDate=a,j.refreshView())})):this.activeDate=new Date,a.isActive=function(b){return 0===j.compare(b.date,j.activeDate)?(a.activeDateId=b.uid,!0):!1},this.init=function(a){k=a,k.$render=function(){j.render()}},this.render=function(){if(k.$viewValue){var a=new Date(k.$viewValue),b=!isNaN(a);b?this.activeDate=a:h||e.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')}this.refreshView()},this.refreshView=function(){if(this.element){this._refreshView();var a=k.$viewValue?new Date(k.$viewValue):null;k.$setValidity("dateDisabled",!a||this.element&&!this.isDisabled(a))}},this.createDateObject=function(a,b){var c=k.$viewValue?new Date(k.$viewValue):null;return{date:a,label:f(a,b),selected:c&&0===this.compare(a,c),disabled:this.isDisabled(a),current:0===this.compare(a,new Date),customClass:this.customClass(a)}},this.isDisabled=function(c){return this.minDate&&this.compare(c,this.minDate)<0||this.maxDate&&this.compare(c,this.maxDate)>0||b.dateDisabled&&a.dateDisabled({date:c,mode:a.datepickerMode})},this.customClass=function(b){return a.customClass({date:b,mode:a.datepickerMode})},this.split=function(a,b){for(var c=[];a.length>0;)c.push(a.splice(0,b));return c},this.fixTimeZone=function(a){var b=a.getHours();a.setHours(23===b?b+2:0)},a.select=function(b){if(a.datepickerMode===j.minMode){var c=k.$viewValue?new Date(k.$viewValue):new Date(0,0,0,0,0,0,0);c.setFullYear(b.getFullYear(),b.getMonth(),b.getDate()),k.$setViewValue(c),k.$render()}else j.activeDate=b,a.datepickerMode=j.modes[j.modes.indexOf(a.datepickerMode)-1]},a.move=function(a){var b=j.activeDate.getFullYear()+a*(j.step.years||0),c=j.activeDate.getMonth()+a*(j.step.months||0);j.activeDate.setFullYear(b,c,1),j.refreshView()},a.toggleMode=function(b){b=b||1,a.datepickerMode===j.maxMode&&1===b||a.datepickerMode===j.minMode&&-1===b||(a.datepickerMode=j.modes[j.modes.indexOf(a.datepickerMode)+b])},a.keys={13:"enter",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down"};var l=function(){j.element[0].focus()};a.$on("uib:datepicker.focus",l),a.keydown=function(b){var c=a.keys[b.which];if(c&&!b.shiftKey&&!b.altKey)if(b.preventDefault(),j.shortcutPropagation||b.stopPropagation(),"enter"===c||"space"===c){if(j.isDisabled(j.activeDate))return;a.select(j.activeDate)}else!b.ctrlKey||"up"!==c&&"down"!==c?(j.handleKeyDown(c,b),j.refreshView()):a.toggleMode("up"===c?1:-1)}}]).directive("datepicker",["$log","$datepickerSuppressWarning",function(a,b){return{replace:!0,templateUrl:function(a,b){return b.templateUrl||"template/datepicker/datepicker.html"},scope:{datepickerMode:"=?",dateDisabled:"&",customClass:"&",shortcutPropagation:"&?"},require:["datepicker","^ngModel"],controller:"DatepickerController",controllerAs:"datepicker",link:function(c,d,e,f){b||a.warn("datepicker is now deprecated. Use uib-datepicker instead.");var g=f[0],h=f[1];g.init(h)}}}]).directive("daypicker",["$log","$datepickerSuppressWarning",function(a,b){return{replace:!0,templateUrl:"template/datepicker/day.html",require:["^datepicker","daypicker"],controller:"UibDaypickerController",link:function(c,d,e,f){b||a.warn("daypicker is now deprecated. Use uib-daypicker instead.");var g=f[0],h=f[1];h.init(g)}}}]).directive("monthpicker",["$log","$datepickerSuppressWarning",function(a,b){return{replace:!0,templateUrl:"template/datepicker/month.html",require:["^datepicker","monthpicker"],controller:"UibMonthpickerController",link:function(c,d,e,f){b||a.warn("monthpicker is now deprecated. Use uib-monthpicker instead.");var g=f[0],h=f[1];h.init(g)}}}]).directive("yearpicker",["$log","$datepickerSuppressWarning",function(a,b){return{replace:!0,templateUrl:"template/datepicker/year.html",require:["^datepicker","yearpicker"],controller:"UibYearpickerController",link:function(c,d,e,f){b||a.warn("yearpicker is now deprecated. Use uib-yearpicker instead.");var g=f[0];angular.extend(g,f[1]),g.yearpickerInit(),g.refreshView()}}}]).directive("datepickerPopup",["$log","$datepickerSuppressWarning",function(a,b){return{require:["ngModel","datepickerPopup"],controller:"UibDatepickerPopupController",scope:{isOpen:"=?",currentText:"@",clearText:"@",closeText:"@",dateDisabled:"&",customClass:"&"},link:function(c,d,e,f){b||a.warn("datepicker-popup is now deprecated. Use uib-datepicker-popup instead.");var g=f[0],h=f[1];h.init(g)}}}]).directive("datepickerPopupWrap",["$log","$datepickerSuppressWarning",function(a,b){return{replace:!0,transclude:!0,templateUrl:function(a,b){return b.templateUrl||"template/datepicker/popup.html"},link:function(){b||a.warn("datepicker-popup-wrap is now deprecated. Use uib-datepicker-popup-wrap instead.")}}}]),angular.module("ui.bootstrap.dropdown",["ui.bootstrap.position"]).constant("uibDropdownConfig",{openClass:"open"}).service("uibDropdownService",["$document","$rootScope",function(a,b){var c=null;this.open=function(b){c||(a.bind("click",d),a.bind("keydown",e)),c&&c!==b&&(c.isOpen=!1),c=b},this.close=function(b){c===b&&(c=null,a.unbind("click",d),a.unbind("keydown",e))};var d=function(a){if(c&&(!a||"disabled"!==c.getAutoClose())){var d=c.getToggleElement();if(!(a&&d&&d[0].contains(a.target))){var e=c.getDropdownElement();a&&"outsideClick"===c.getAutoClose()&&e&&e[0].contains(a.target)||(c.isOpen=!1,b.$$phase||c.$apply())}}},e=function(a){27===a.which?(c.focusToggleElement(),d()):c.isKeynavEnabled()&&/(38|40)/.test(a.which)&&c.isOpen&&(a.preventDefault(),a.stopPropagation(),c.focusDropdownEntry(a.which))}}]).controller("UibDropdownController",["$scope","$element","$attrs","$parse","uibDropdownConfig","uibDropdownService","$animate","$uibPosition","$document","$compile","$templateRequest",function(a,b,c,d,e,f,g,h,i,j,k){var l,m,n=this,o=a.$new(),p=e.openClass,q=angular.noop,r=c.onToggle?d(c.onToggle):angular.noop,s=!1,t=!1;b.addClass("dropdown"),this.init=function(){c.isOpen&&(m=d(c.isOpen),q=m.assign,a.$watch(m,function(a){o.isOpen=!!a})),s=angular.isDefined(c.dropdownAppendToBody),t=angular.isDefined(c.uibKeyboardNav),s&&n.dropdownMenu&&(i.find("body").append(n.dropdownMenu),b.on("$destroy",function(){n.dropdownMenu.remove()}))},this.toggle=function(a){return o.isOpen=arguments.length?!!a:!o.isOpen},this.isOpen=function(){return o.isOpen},o.getToggleElement=function(){return n.toggleElement},o.getAutoClose=function(){return c.autoClose||"always"},o.getElement=function(){return b},o.isKeynavEnabled=function(){return t},o.focusDropdownEntry=function(a){var c=n.dropdownMenu?angular.element(n.dropdownMenu).find("a"):angular.element(b).find("ul").eq(0).find("a");switch(a){case 40:angular.isNumber(n.selectedOption)?n.selectedOption=n.selectedOption===c.length-1?n.selectedOption:n.selectedOption+1:n.selectedOption=0;break;case 38:angular.isNumber(n.selectedOption)?n.selectedOption=0===n.selectedOption?0:n.selectedOption-1:n.selectedOption=c.length-1}c[n.selectedOption].focus()},o.getDropdownElement=function(){return n.dropdownMenu},o.focusToggleElement=function(){n.toggleElement&&n.toggleElement[0].focus()},o.$watch("isOpen",function(c,d){if(s&&n.dropdownMenu){var e=h.positionElements(b,n.dropdownMenu,"bottom-left",!0),i={top:e.top+"px",display:c?"block":"none"},m=n.dropdownMenu.hasClass("dropdown-menu-right");m?(i.left="auto",i.right=window.innerWidth-(e.left+b.prop("offsetWidth"))+"px"):(i.left=e.left+"px",i.right="auto"),n.dropdownMenu.css(i)}if(g[c?"addClass":"removeClass"](b,p).then(function(){angular.isDefined(c)&&c!==d&&r(a,{open:!!c})}),c)n.dropdownMenuTemplateUrl&&k(n.dropdownMenuTemplateUrl).then(function(a){l=o.$new(),j(a.trim())(l,function(a){var b=a;n.dropdownMenu.replaceWith(b),n.dropdownMenu=b})}),o.focusToggleElement(),f.open(o);else{if(n.dropdownMenuTemplateUrl){l&&l.$destroy();var t=angular.element('<ul class="dropdown-menu"></ul>');n.dropdownMenu.replaceWith(t),n.dropdownMenu=t}f.close(o),n.selectedOption=null}angular.isFunction(q)&&q(a,c)}),a.$on("$locationChangeSuccess",function(){"disabled"!==o.getAutoClose()&&(o.isOpen=!1)});var u=a.$on("$destroy",function(){o.$destroy()});o.$on("$destroy",u)}]).directive("uibDropdown",function(){return{controller:"UibDropdownController",link:function(a,b,c,d){d.init()}}}).directive("uibDropdownMenu",function(){return{restrict:"AC",require:"?^uibDropdown",link:function(a,b,c,d){if(d&&!angular.isDefined(c.dropdownNested)){b.addClass("dropdown-menu");var e=c.templateUrl;e&&(d.dropdownMenuTemplateUrl=e),d.dropdownMenu||(d.dropdownMenu=b)}}}}).directive("uibKeyboardNav",function(){return{restrict:"A",require:"?^uibDropdown",link:function(a,b,c,d){b.bind("keydown",function(a){if(-1!==[38,40].indexOf(a.which)){a.preventDefault(),a.stopPropagation();var b=d.dropdownMenu.find("a");switch(a.which){case 40:angular.isNumber(d.selectedOption)?d.selectedOption=d.selectedOption===b.length-1?d.selectedOption:d.selectedOption+1:d.selectedOption=0;break;case 38:angular.isNumber(d.selectedOption)?d.selectedOption=0===d.selectedOption?0:d.selectedOption-1:d.selectedOption=b.length-1}b[d.selectedOption].focus()}})}}}).directive("uibDropdownToggle",function(){return{require:"?^uibDropdown",link:function(a,b,c,d){if(d){b.addClass("dropdown-toggle"),d.toggleElement=b;var e=function(e){e.preventDefault(),b.hasClass("disabled")||c.disabled||a.$apply(function(){d.toggle()})};b.bind("click",e),b.attr({"aria-haspopup":!0,"aria-expanded":!1}),a.$watch(d.isOpen,function(a){b.attr("aria-expanded",!!a)}),a.$on("$destroy",function(){b.unbind("click",e)})}}}}),angular.module("ui.bootstrap.dropdown").value("$dropdownSuppressWarning",!1).service("dropdownService",["$log","$dropdownSuppressWarning","uibDropdownService",function(a,b,c){b||a.warn("dropdownService is now deprecated. Use uibDropdownService instead."),angular.extend(this,c)}]).controller("DropdownController",["$scope","$element","$attrs","$parse","uibDropdownConfig","uibDropdownService","$animate","$uibPosition","$document","$compile","$templateRequest","$log","$dropdownSuppressWarning",function(a,b,c,d,e,f,g,h,i,j,k,l,m){m||l.warn("DropdownController is now deprecated. Use UibDropdownController instead.");var n,o,p=this,q=a.$new(),r=e.openClass,s=angular.noop,t=c.onToggle?d(c.onToggle):angular.noop,u=!1,v=!1;b.addClass("dropdown"),this.init=function(){c.isOpen&&(o=d(c.isOpen),s=o.assign,a.$watch(o,function(a){q.isOpen=!!a})),u=angular.isDefined(c.dropdownAppendToBody),v=angular.isDefined(c.uibKeyboardNav),u&&p.dropdownMenu&&(i.find("body").append(p.dropdownMenu),b.on("$destroy",function(){p.dropdownMenu.remove()}))},this.toggle=function(a){return q.isOpen=arguments.length?!!a:!q.isOpen},this.isOpen=function(){return q.isOpen},q.getToggleElement=function(){return p.toggleElement},q.getAutoClose=function(){return c.autoClose||"always"},q.getElement=function(){return b},q.isKeynavEnabled=function(){return v},q.focusDropdownEntry=function(a){var c=p.dropdownMenu?angular.element(p.dropdownMenu).find("a"):angular.element(b).find("ul").eq(0).find("a");switch(a){case 40:angular.isNumber(p.selectedOption)?p.selectedOption=p.selectedOption===c.length-1?p.selectedOption:p.selectedOption+1:p.selectedOption=0;break;case 38:angular.isNumber(p.selectedOption)?p.selectedOption=0===p.selectedOption?0:p.selectedOption-1:p.selectedOption=c.length-1}c[p.selectedOption].focus()},q.getDropdownElement=function(){return p.dropdownMenu},q.focusToggleElement=function(){p.toggleElement&&p.toggleElement[0].focus()},q.$watch("isOpen",function(c,d){if(u&&p.dropdownMenu){var e=h.positionElements(b,p.dropdownMenu,"bottom-left",!0),i={top:e.top+"px",display:c?"block":"none"},l=p.dropdownMenu.hasClass("dropdown-menu-right");l?(i.left="auto",i.right=window.innerWidth-(e.left+b.prop("offsetWidth"))+"px"):(i.left=e.left+"px",i.right="auto"),p.dropdownMenu.css(i)}if(g[c?"addClass":"removeClass"](b,r).then(function(){angular.isDefined(c)&&c!==d&&t(a,{open:!!c})}),c)p.dropdownMenuTemplateUrl&&k(p.dropdownMenuTemplateUrl).then(function(a){n=q.$new(),j(a.trim())(n,function(a){var b=a;p.dropdownMenu.replaceWith(b),p.dropdownMenu=b})}),q.focusToggleElement(),f.open(q);else{if(p.dropdownMenuTemplateUrl){n&&n.$destroy();var m=angular.element('<ul class="dropdown-menu"></ul>');p.dropdownMenu.replaceWith(m),p.dropdownMenu=m}f.close(q),p.selectedOption=null}angular.isFunction(s)&&s(a,c)}),a.$on("$locationChangeSuccess",function(){"disabled"!==q.getAutoClose()&&(q.isOpen=!1)});var w=a.$on("$destroy",function(){q.$destroy()});q.$on("$destroy",w)}]).directive("dropdown",["$log","$dropdownSuppressWarning",function(a,b){return{controller:"DropdownController",link:function(c,d,e,f){b||a.warn("dropdown is now deprecated. Use uib-dropdown instead."),f.init()}}}]).directive("dropdownMenu",["$log","$dropdownSuppressWarning",function(a,b){return{restrict:"AC",require:"?^dropdown",link:function(c,d,e,f){if(f&&!angular.isDefined(e.dropdownNested)){b||a.warn("dropdown-menu is now deprecated. Use uib-dropdown-menu instead."),d.addClass("dropdown-menu");var g=e.templateUrl;g&&(f.dropdownMenuTemplateUrl=g),f.dropdownMenu||(f.dropdownMenu=d)}}}}]).directive("keyboardNav",["$log","$dropdownSuppressWarning",function(a,b){return{restrict:"A",require:"?^dropdown",link:function(c,d,e,f){b||a.warn("keyboard-nav is now deprecated. Use uib-keyboard-nav instead."),d.bind("keydown",function(a){if(-1!==[38,40].indexOf(a.which)){a.preventDefault(),a.stopPropagation();var b=f.dropdownMenu.find("a");switch(a.which){case 40:angular.isNumber(f.selectedOption)?f.selectedOption=f.selectedOption===b.length-1?f.selectedOption:f.selectedOption+1:f.selectedOption=0;break;case 38:angular.isNumber(f.selectedOption)?f.selectedOption=0===f.selectedOption?0:f.selectedOption-1:f.selectedOption=b.length-1}b[f.selectedOption].focus()}})}}}]).directive("dropdownToggle",["$log","$dropdownSuppressWarning",function(a,b){return{require:"?^dropdown",link:function(c,d,e,f){if(b||a.warn("dropdown-toggle is now deprecated. Use uib-dropdown-toggle instead."),f){d.addClass("dropdown-toggle"),f.toggleElement=d;var g=function(a){a.preventDefault(),d.hasClass("disabled")||e.disabled||c.$apply(function(){f.toggle()})};d.bind("click",g),d.attr({"aria-haspopup":!0,"aria-expanded":!1}),c.$watch(f.isOpen,function(a){d.attr("aria-expanded",!!a)}),c.$on("$destroy",function(){d.unbind("click",g)})}}}}]),angular.module("ui.bootstrap.stackedMap",[]).factory("$$stackedMap",function(){return{createNew:function(){var a=[];return{add:function(b,c){a.push({key:b,value:c})},get:function(b){for(var c=0;c<a.length;c++)if(b==a[c].key)return a[c]},keys:function(){for(var b=[],c=0;c<a.length;c++)b.push(a[c].key);return b},top:function(){return a[a.length-1]},remove:function(b){for(var c=-1,d=0;d<a.length;d++)if(b==a[d].key){c=d;break}return a.splice(c,1)[0]},removeTop:function(){return a.splice(a.length-1,1)[0]},length:function(){return a.length}}}}}),angular.module("ui.bootstrap.modal",["ui.bootstrap.stackedMap"]).factory("$$multiMap",function(){return{createNew:function(){var a={};return{entries:function(){return Object.keys(a).map(function(b){return{key:b,value:a[b]}})},get:function(b){return a[b]},hasKey:function(b){return!!a[b]},keys:function(){return Object.keys(a)},put:function(b,c){a[b]||(a[b]=[]),a[b].push(c)},remove:function(b,c){var d=a[b];if(d){var e=d.indexOf(c);-1!==e&&d.splice(e,1),d.length||delete a[b]}}}}}}).directive("uibModalBackdrop",["$animate","$injector","$uibModalStack",function(a,b,c){function d(b,d,f){d.addClass("modal-backdrop"),f.modalInClass&&(e?e(d,{addClass:f.modalInClass}).start():a.addClass(d,f.modalInClass),b.$on(c.NOW_CLOSING_EVENT,function(b,c){var g=c();e?e(d,{removeClass:f.modalInClass}).start().then(g):a.removeClass(d,f.modalInClass).then(g)}))}var e=null;return b.has("$animateCss")&&(e=b.get("$animateCss")),{replace:!0,templateUrl:"template/modal/backdrop.html",compile:function(a,b){return a.addClass(b.backdropClass),d}}}]).directive("uibModalWindow",["$uibModalStack","$q","$animate","$injector",function(a,b,c,d){var e=null;return d.has("$animateCss")&&(e=d.get("$animateCss")),{scope:{index:"@"},replace:!0,transclude:!0,templateUrl:function(a,b){return b.templateUrl||"template/modal/window.html"},link:function(d,f,g){f.addClass(g.windowClass||""),f.addClass(g.windowTopClass||""),d.size=g.size,d.close=function(b){var c=a.getTop();c&&c.value.backdrop&&"static"!==c.value.backdrop&&b.target===b.currentTarget&&(b.preventDefault(),b.stopPropagation(),a.dismiss(c.key,"backdrop click"))},f.on("click",d.close),d.$isRendered=!0;var h=b.defer();g.$observe("modalRender",function(a){"true"==a&&h.resolve()}),h.promise.then(function(){var h=null;g.modalInClass&&(h=e?e(f,{addClass:g.modalInClass}).start():c.addClass(f,g.modalInClass),d.$on(a.NOW_CLOSING_EVENT,function(a,b){var d=b();e?e(f,{removeClass:g.modalInClass}).start().then(d):c.removeClass(f,g.modalInClass).then(d)})),b.when(h).then(function(){var a=f[0].querySelector("[autofocus]");a?a.focus():f[0].focus()});var i=a.getTop();i&&a.modalRendered(i.key)})}}}]).directive("uibModalAnimationClass",function(){return{compile:function(a,b){b.modalAnimation&&a.addClass(b.uibModalAnimationClass)}}}).directive("uibModalTransclude",function(){return{link:function(a,b,c,d,e){e(a.$parent,function(a){b.empty(),b.append(a)})}}}).factory("$uibModalStack",["$animate","$timeout","$document","$compile","$rootScope","$q","$injector","$$multiMap","$$stackedMap",function(a,b,c,d,e,f,g,h,i){function j(){for(var a=-1,b=u.keys(),c=0;c<b.length;c++)u.get(b[c]).value.backdrop&&(a=c);return a}function k(a,b){var d=c.find("body").eq(0),e=u.get(a).value;u.remove(a),n(e.modalDomEl,e.modalScope,function(){var b=e.openedClass||t;v.remove(b,a),d.toggleClass(b,v.hasKey(b)),l(!0)}),m(),b&&b.focus?b.focus():d.focus()}function l(a){var b;u.length()>0&&(b=u.top().value,b.modalDomEl.toggleClass(b.windowTopClass||"",a))}function m(){if(q&&-1==j()){var a=r;n(q,r,function(){a=null}),q=void 0,r=void 0}}function n(b,c,d){function e(){e.done||(e.done=!0,p?p(b,{event:"leave"}).start().then(function(){b.remove()}):a.leave(b),c.$destroy(),d&&d())}var g,h=null,i=function(){return g||(g=f.defer(),h=g.promise),function(){g.resolve()}};return c.$broadcast(w.NOW_CLOSING_EVENT,i),f.when(h).then(e)}function o(a,b,c){return!a.value.modalScope.$broadcast("modal.closing",b,c).defaultPrevented}var p=null;g.has("$animateCss")&&(p=g.get("$animateCss"));var q,r,s,t="modal-open",u=i.createNew(),v=h.createNew(),w={NOW_CLOSING_EVENT:"modal.stack.now-closing"},x=0,y="a[href], area[href], input:not([disabled]), button:not([disabled]),select:not([disabled]), textarea:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable=true]";return e.$watch(j,function(a){r&&(r.index=a)}),c.bind("keydown",function(a){if(a.isDefaultPrevented())return a;var b=u.top();if(b&&b.value.keyboard)switch(a.which){case 27:a.preventDefault(),e.$apply(function(){w.dismiss(b.key,"escape key press")});break;case 9:w.loadFocusElementList(b);var c=!1;a.shiftKey?w.isFocusInFirstItem(a)&&(c=w.focusLastFocusableElement()):w.isFocusInLastItem(a)&&(c=w.focusFirstFocusableElement()),c&&(a.preventDefault(),a.stopPropagation())}}),w.open=function(a,b){var f=c[0].activeElement,g=b.openedClass||t;l(!1),u.add(a,{deferred:b.deferred,renderDeferred:b.renderDeferred,modalScope:b.scope,backdrop:b.backdrop,keyboard:b.keyboard,openedClass:b.openedClass,windowTopClass:b.windowTopClass}),v.put(g,a);var h=c.find("body").eq(0),i=j();if(i>=0&&!q){r=e.$new(!0),r.index=i;var k=angular.element('<div uib-modal-backdrop="modal-backdrop"></div>');k.attr("backdrop-class",b.backdropClass),b.animation&&k.attr("modal-animation","true"),q=d(k)(r),h.append(q)}var m=angular.element('<div uib-modal-window="modal-window"></div>');m.attr({"template-url":b.windowTemplateUrl,"window-class":b.windowClass,"window-top-class":b.windowTopClass,size:b.size,index:u.length()-1,animate:"animate"}).html(b.content),b.animation&&m.attr("modal-animation","true");var n=d(m)(b.scope);u.top().value.modalDomEl=n,u.top().value.modalOpener=f,h.append(n),h.addClass(g),w.clearFocusListCache()},w.close=function(a,b){var c=u.get(a);return c&&o(c,b,!0)?(c.value.modalScope.$$uibDestructionScheduled=!0,c.value.deferred.resolve(b),k(a,c.value.modalOpener),!0):!c},w.dismiss=function(a,b){var c=u.get(a);return c&&o(c,b,!1)?(c.value.modalScope.$$uibDestructionScheduled=!0,c.value.deferred.reject(b),k(a,c.value.modalOpener),!0):!c},w.dismissAll=function(a){for(var b=this.getTop();b&&this.dismiss(b.key,a);)b=this.getTop()},w.getTop=function(){return u.top()},w.modalRendered=function(a){var b=u.get(a);b&&b.value.renderDeferred.resolve()},w.focusFirstFocusableElement=function(){return s.length>0?(s[0].focus(),!0):!1},w.focusLastFocusableElement=function(){return s.length>0?(s[s.length-1].focus(),!0):!1},w.isFocusInFirstItem=function(a){return s.length>0?(a.target||a.srcElement)==s[0]:!1},w.isFocusInLastItem=function(a){return s.length>0?(a.target||a.srcElement)==s[s.length-1]:!1},w.clearFocusListCache=function(){s=[],x=0},w.loadFocusElementList=function(a){if((void 0===s||!s.length)&&a){var b=a.value.modalDomEl;b&&b.length&&(s=b[0].querySelectorAll(y))}},w}]).provider("$uibModal",function(){var a={options:{animation:!0,backdrop:!0,keyboard:!0},$get:["$injector","$rootScope","$q","$templateRequest","$controller","$uibModalStack","$modalSuppressWarning","$log",function(b,c,d,e,f,g,h,i){function j(a){return a.template?d.when(a.template):e(angular.isFunction(a.templateUrl)?a.templateUrl():a.templateUrl)}function k(a){var c=[];return angular.forEach(a,function(a){angular.isFunction(a)||angular.isArray(a)?c.push(d.when(b.invoke(a))):angular.isString(a)?c.push(d.when(b.get(a))):c.push(d.when(a))}),c}var l={},m=null;return l.getPromiseChain=function(){return m},l.open=function(b){function e(){return r}var l=d.defer(),n=d.defer(),o=d.defer(),p={result:l.promise,opened:n.promise,rendered:o.promise,close:function(a){return g.close(p,a)},dismiss:function(a){return g.dismiss(p,a)}};if(b=angular.extend({},a.options,b),b.resolve=b.resolve||{},!b.template&&!b.templateUrl)throw new Error("One of template or templateUrl options is required.");var q,r=d.all([j(b)].concat(k(b.resolve)));return q=m=d.all([m]).then(e,e).then(function(a){var d=(b.scope||c).$new();d.$close=p.close,d.$dismiss=p.dismiss,d.$on("$destroy",function(){d.$$uibDestructionScheduled||d.$dismiss("$uibUnscheduledDestruction")});var e,j={},k=1;b.controller&&(j.$scope=d,j.$uibModalInstance=p,Object.defineProperty(j,"$modalInstance",{get:function(){return h||i.warn("$modalInstance is now deprecated. Use $uibModalInstance instead."),p}}),angular.forEach(b.resolve,function(b,c){j[c]=a[k++]}),e=f(b.controller,j),b.controllerAs&&(b.bindToController&&angular.extend(e,d),d[b.controllerAs]=e)),g.open(p,{scope:d,deferred:l,renderDeferred:o,content:a[0],animation:b.animation,backdrop:b.backdrop,keyboard:b.keyboard,backdropClass:b.backdropClass,windowTopClass:b.windowTopClass,windowClass:b.windowClass,windowTemplateUrl:b.windowTemplateUrl,size:b.size,openedClass:b.openedClass}),n.resolve(!0)},function(a){n.reject(a),l.reject(a)})["finally"](function(){m===q&&(m=null)}),p},l}]};return a}),angular.module("ui.bootstrap.modal").value("$modalSuppressWarning",!1).directive("modalBackdrop",["$animate","$injector","$modalStack","$log","$modalSuppressWarning",function(a,b,c,d,e){function f(b,f,h){e||d.warn("modal-backdrop is now deprecated. Use uib-modal-backdrop instead."),f.addClass("modal-backdrop"),h.modalInClass&&(g?g(f,{addClass:h.modalInClass}).start():a.addClass(f,h.modalInClass),b.$on(c.NOW_CLOSING_EVENT,function(b,c){var d=c();g?g(f,{removeClass:h.modalInClass}).start().then(d):a.removeClass(f,h.modalInClass).then(d)}))}var g=null;return b.has("$animateCss")&&(g=b.get("$animateCss")),{replace:!0,templateUrl:"template/modal/backdrop.html",compile:function(a,b){return a.addClass(b.backdropClass),f}}}]).directive("modalWindow",["$modalStack","$q","$animate","$injector","$log","$modalSuppressWarning",function(a,b,c,d,e,f){var g=null;return d.has("$animateCss")&&(g=d.get("$animateCss")),{scope:{index:"@"},replace:!0,transclude:!0,templateUrl:function(a,b){return b.templateUrl||"template/modal/window.html"},link:function(d,h,i){f||e.warn("modal-window is now deprecated. Use uib-modal-window instead."),h.addClass(i.windowClass||""),h.addClass(i.windowTopClass||""),d.size=i.size,d.close=function(b){var c=a.getTop();c&&c.value.backdrop&&"static"!==c.value.backdrop&&b.target===b.currentTarget&&(b.preventDefault(),b.stopPropagation(),a.dismiss(c.key,"backdrop click"))},h.on("click",d.close),d.$isRendered=!0;var j=b.defer();i.$observe("modalRender",function(a){"true"==a&&j.resolve()}),j.promise.then(function(){var e=null;i.modalInClass&&(e=g?g(h,{addClass:i.modalInClass}).start():c.addClass(h,i.modalInClass),d.$on(a.NOW_CLOSING_EVENT,function(a,b){var d=b();g?g(h,{removeClass:i.modalInClass}).start().then(d):c.removeClass(h,i.modalInClass).then(d)})),b.when(e).then(function(){var a=h[0].querySelector("[autofocus]");a?a.focus():h[0].focus()});var f=a.getTop();f&&a.modalRendered(f.key)})}}}]).directive("modalAnimationClass",["$log","$modalSuppressWarning",function(a,b){return{compile:function(c,d){b||a.warn("modal-animation-class is now deprecated. Use uib-modal-animation-class instead."),d.modalAnimation&&c.addClass(d.modalAnimationClass)}}}]).directive("modalTransclude",["$log","$modalSuppressWarning",function(a,b){return{link:function(c,d,e,f,g){
b||a.warn("modal-transclude is now deprecated. Use uib-modal-transclude instead."),g(c.$parent,function(a){d.empty(),d.append(a)})}}}]).service("$modalStack",["$animate","$timeout","$document","$compile","$rootScope","$q","$injector","$$multiMap","$$stackedMap","$uibModalStack","$log","$modalSuppressWarning",function(a,b,c,d,e,f,g,h,i,j,k,l){l||k.warn("$modalStack is now deprecated. Use $uibModalStack instead."),angular.extend(this,j)}]).provider("$modal",["$uibModalProvider",function(a){angular.extend(this,a),this.$get=["$injector","$log","$modalSuppressWarning",function(b,c,d){return d||c.warn("$modal is now deprecated. Use $uibModal instead."),b.invoke(a.$get)}]}]),angular.module("ui.bootstrap.pagination",[]).controller("UibPaginationController",["$scope","$attrs","$parse",function(a,b,c){var d=this,e={$setViewValue:angular.noop},f=b.numPages?c(b.numPages).assign:angular.noop;this.init=function(g,h){e=g,this.config=h,e.$render=function(){d.render()},b.itemsPerPage?a.$parent.$watch(c(b.itemsPerPage),function(b){d.itemsPerPage=parseInt(b,10),a.totalPages=d.calculateTotalPages()}):this.itemsPerPage=h.itemsPerPage,a.$watch("totalItems",function(){a.totalPages=d.calculateTotalPages()}),a.$watch("totalPages",function(b){f(a.$parent,b),a.page>b?a.selectPage(b):e.$render()})},this.calculateTotalPages=function(){var b=this.itemsPerPage<1?1:Math.ceil(a.totalItems/this.itemsPerPage);return Math.max(b||0,1)},this.render=function(){a.page=parseInt(e.$viewValue,10)||1},a.selectPage=function(b,c){c&&c.preventDefault();var d=!a.ngDisabled||!c;d&&a.page!==b&&b>0&&b<=a.totalPages&&(c&&c.target&&c.target.blur(),e.$setViewValue(b),e.$render())},a.getText=function(b){return a[b+"Text"]||d.config[b+"Text"]},a.noPrevious=function(){return 1===a.page},a.noNext=function(){return a.page===a.totalPages}}]).constant("uibPaginationConfig",{itemsPerPage:10,boundaryLinks:!1,directionLinks:!0,firstText:"First",previousText:"Previous",nextText:"Next",lastText:"Last",rotate:!0}).directive("uibPagination",["$parse","uibPaginationConfig",function(a,b){return{restrict:"EA",scope:{totalItems:"=",firstText:"@",previousText:"@",nextText:"@",lastText:"@",ngDisabled:"="},require:["uibPagination","?ngModel"],controller:"UibPaginationController",controllerAs:"pagination",templateUrl:function(a,b){return b.templateUrl||"template/pagination/pagination.html"},replace:!0,link:function(c,d,e,f){function g(a,b,c){return{number:a,text:b,active:c}}function h(a,b){var c=[],d=1,e=b,f=angular.isDefined(k)&&b>k;f&&(l?(d=Math.max(a-Math.floor(k/2),1),e=d+k-1,e>b&&(e=b,d=e-k+1)):(d=(Math.ceil(a/k)-1)*k+1,e=Math.min(d+k-1,b)));for(var h=d;e>=h;h++){var i=g(h,h,h===a);c.push(i)}if(f&&!l){if(d>1){var j=g(d-1,"...",!1);c.unshift(j)}if(b>e){var m=g(e+1,"...",!1);c.push(m)}}return c}var i=f[0],j=f[1];if(j){var k=angular.isDefined(e.maxSize)?c.$parent.$eval(e.maxSize):b.maxSize,l=angular.isDefined(e.rotate)?c.$parent.$eval(e.rotate):b.rotate;c.boundaryLinks=angular.isDefined(e.boundaryLinks)?c.$parent.$eval(e.boundaryLinks):b.boundaryLinks,c.directionLinks=angular.isDefined(e.directionLinks)?c.$parent.$eval(e.directionLinks):b.directionLinks,i.init(j,b),e.maxSize&&c.$parent.$watch(a(e.maxSize),function(a){k=parseInt(a,10),i.render()});var m=i.render;i.render=function(){m(),c.page>0&&c.page<=c.totalPages&&(c.pages=h(c.page,c.totalPages))}}}}}]).constant("uibPagerConfig",{itemsPerPage:10,previousText:"« Previous",nextText:"Next »",align:!0}).directive("uibPager",["uibPagerConfig",function(a){return{restrict:"EA",scope:{totalItems:"=",previousText:"@",nextText:"@",ngDisabled:"="},require:["uibPager","?ngModel"],controller:"UibPaginationController",controllerAs:"pagination",templateUrl:function(a,b){return b.templateUrl||"template/pagination/pager.html"},replace:!0,link:function(b,c,d,e){var f=e[0],g=e[1];g&&(b.align=angular.isDefined(d.align)?b.$parent.$eval(d.align):a.align,f.init(g,a))}}}]),angular.module("ui.bootstrap.pagination").value("$paginationSuppressWarning",!1).controller("PaginationController",["$scope","$attrs","$parse","$log","$paginationSuppressWarning",function(a,b,c,d,e){e||d.warn("PaginationController is now deprecated. Use UibPaginationController instead.");var f=this,g={$setViewValue:angular.noop},h=b.numPages?c(b.numPages).assign:angular.noop;this.init=function(d,e){g=d,this.config=e,g.$render=function(){f.render()},b.itemsPerPage?a.$parent.$watch(c(b.itemsPerPage),function(b){f.itemsPerPage=parseInt(b,10),a.totalPages=f.calculateTotalPages()}):this.itemsPerPage=e.itemsPerPage,a.$watch("totalItems",function(){a.totalPages=f.calculateTotalPages()}),a.$watch("totalPages",function(b){h(a.$parent,b),a.page>b?a.selectPage(b):g.$render()})},this.calculateTotalPages=function(){var b=this.itemsPerPage<1?1:Math.ceil(a.totalItems/this.itemsPerPage);return Math.max(b||0,1)},this.render=function(){a.page=parseInt(g.$viewValue,10)||1},a.selectPage=function(b,c){c&&c.preventDefault();var d=!a.ngDisabled||!c;d&&a.page!==b&&b>0&&b<=a.totalPages&&(c&&c.target&&c.target.blur(),g.$setViewValue(b),g.$render())},a.getText=function(b){return a[b+"Text"]||f.config[b+"Text"]},a.noPrevious=function(){return 1===a.page},a.noNext=function(){return a.page===a.totalPages}}]).directive("pagination",["$parse","uibPaginationConfig","$log","$paginationSuppressWarning",function(a,b,c,d){return{restrict:"EA",scope:{totalItems:"=",firstText:"@",previousText:"@",nextText:"@",lastText:"@",ngDisabled:"="},require:["pagination","?ngModel"],controller:"PaginationController",controllerAs:"pagination",templateUrl:function(a,b){return b.templateUrl||"template/pagination/pagination.html"},replace:!0,link:function(e,f,g,h){function i(a,b,c){return{number:a,text:b,active:c}}function j(a,b){var c=[],d=1,e=b,f=angular.isDefined(m)&&b>m;f&&(n?(d=Math.max(a-Math.floor(m/2),1),e=d+m-1,e>b&&(e=b,d=e-m+1)):(d=(Math.ceil(a/m)-1)*m+1,e=Math.min(d+m-1,b)));for(var g=d;e>=g;g++){var h=i(g,g,g===a);c.push(h)}if(f&&!n){if(d>1){var j=i(d-1,"...",!1);c.unshift(j)}if(b>e){var k=i(e+1,"...",!1);c.push(k)}}return c}d||c.warn("pagination is now deprecated. Use uib-pagination instead.");var k=h[0],l=h[1];if(l){var m=angular.isDefined(g.maxSize)?e.$parent.$eval(g.maxSize):b.maxSize,n=angular.isDefined(g.rotate)?e.$parent.$eval(g.rotate):b.rotate;e.boundaryLinks=angular.isDefined(g.boundaryLinks)?e.$parent.$eval(g.boundaryLinks):b.boundaryLinks,e.directionLinks=angular.isDefined(g.directionLinks)?e.$parent.$eval(g.directionLinks):b.directionLinks,k.init(l,b),g.maxSize&&e.$parent.$watch(a(g.maxSize),function(a){m=parseInt(a,10),k.render()});var o=k.render;k.render=function(){o(),e.page>0&&e.page<=e.totalPages&&(e.pages=j(e.page,e.totalPages))}}}}}]).directive("pager",["uibPagerConfig","$log","$paginationSuppressWarning",function(a,b,c){return{restrict:"EA",scope:{totalItems:"=",previousText:"@",nextText:"@",ngDisabled:"="},require:["pager","?ngModel"],controller:"PaginationController",controllerAs:"pagination",templateUrl:function(a,b){return b.templateUrl||"template/pagination/pager.html"},replace:!0,link:function(d,e,f,g){c||b.warn("pager is now deprecated. Use uib-pager instead.");var h=g[0],i=g[1];i&&(d.align=angular.isDefined(f.align)?d.$parent.$eval(f.align):a.align,h.init(i,a))}}}]),angular.module("ui.bootstrap.tooltip",["ui.bootstrap.position","ui.bootstrap.stackedMap"]).provider("$uibTooltip",function(){function a(a){var b=/[A-Z]/g,c="-";return a.replace(b,function(a,b){return(b?c:"")+a.toLowerCase()})}var b={placement:"top",animation:!0,popupDelay:0,popupCloseDelay:0,useContentExp:!1},c={mouseenter:"mouseleave",click:"click",focus:"blur",none:""},d={};this.options=function(a){angular.extend(d,a)},this.setTriggers=function(a){angular.extend(c,a)},this.$get=["$window","$compile","$timeout","$document","$uibPosition","$interpolate","$rootScope","$parse","$$stackedMap",function(e,f,g,h,i,j,k,l,m){var n=m.createNew();return h.on("keypress",function(a){if(27===a.which){var b=n.top();b&&(b.value.close(),n.removeTop(),b=null)}}),function(e,k,m,o){function p(a){var b=(a||o.trigger||m).split(" "),d=b.map(function(a){return c[a]||a});return{show:b,hide:d}}o=angular.extend({},b,d,o);var q=a(e),r=j.startSymbol(),s=j.endSymbol(),t="<div "+q+'-popup title="'+r+"title"+s+'" '+(o.useContentExp?'content-exp="contentExp()" ':'content="'+r+"content"+s+'" ')+'placement="'+r+"placement"+s+'" popup-class="'+r+"popupClass"+s+'" animation="animation" is-open="isOpen"origin-scope="origScope" style="visibility: hidden; display: block; top: -9999px; left: -9999px;"></div>';return{compile:function(a,b){var c=f(t);return function(a,b,d,f){function j(){L.isOpen?q():m()}function m(){(!K||a.$eval(d[k+"Enable"]))&&(u(),x(),L.popupDelay?F||(F=g(r,L.popupDelay,!1)):r())}function q(){s(),L.popupCloseDelay?G||(G=g(t,L.popupCloseDelay,!1)):t()}function r(){return s(),u(),L.content?(v(),void L.$evalAsync(function(){L.isOpen=!0,y(!0),Q()})):angular.noop}function s(){F&&(g.cancel(F),F=null),H&&(g.cancel(H),H=null)}function t(){s(),u(),L&&L.$evalAsync(function(){L.isOpen=!1,y(!1),L.animation?E||(E=g(w,150,!1)):w()})}function u(){G&&(g.cancel(G),G=null),E&&(g.cancel(E),E=null)}function v(){C||(D=L.$new(),C=c(D,function(a){I?h.find("body").append(a):b.after(a)}),z())}function w(){A(),E=null,C&&(C.remove(),C=null),D&&(D.$destroy(),D=null)}function x(){L.title=d[k+"Title"],O?L.content=O(a):L.content=d[e],L.popupClass=d[k+"Class"],L.placement=angular.isDefined(d[k+"Placement"])?d[k+"Placement"]:o.placement;var b=parseInt(d[k+"PopupDelay"],10),c=parseInt(d[k+"PopupCloseDelay"],10);L.popupDelay=isNaN(b)?o.popupDelay:b,L.popupCloseDelay=isNaN(c)?o.popupCloseDelay:c}function y(b){N&&angular.isFunction(N.assign)&&N.assign(a,b)}function z(){P.length=0,O?(P.push(a.$watch(O,function(a){L.content=a,!a&&L.isOpen&&t()})),P.push(D.$watch(function(){M||(M=!0,D.$$postDigest(function(){M=!1,L&&L.isOpen&&Q()}))}))):P.push(d.$observe(e,function(a){L.content=a,!a&&L.isOpen?t():Q()})),P.push(d.$observe(k+"Title",function(a){L.title=a,L.isOpen&&Q()})),P.push(d.$observe(k+"Placement",function(a){L.placement=a?a:o.placement,L.isOpen&&Q()}))}function A(){P.length&&(angular.forEach(P,function(a){a()}),P.length=0)}function B(){var a=d[k+"Trigger"];R(),J=p(a),"none"!==J.show&&J.show.forEach(function(a,c){a===J.hide[c]?b[0].addEventListener(a,j):a&&(b[0].addEventListener(a,m),J.hide[c].split(" ").forEach(function(a){b[0].addEventListener(a,q)})),b.on("keypress",function(a){27===a.which&&q()})})}var C,D,E,F,G,H,I=angular.isDefined(o.appendToBody)?o.appendToBody:!1,J=p(void 0),K=angular.isDefined(d[k+"Enable"]),L=a.$new(!0),M=!1,N=angular.isDefined(d[k+"IsOpen"])?l(d[k+"IsOpen"]):!1,O=o.useContentExp?l(d[e]):!1,P=[],Q=function(){C&&C.html()&&(H||(H=g(function(){C.css({top:0,left:0});var a=i.positionElements(b,C,L.placement,I);a.top+="px",a.left+="px",a.visibility="visible",C.css(a),H=null},0,!1)))};L.origScope=a,L.isOpen=!1,n.add(L,{close:t}),L.contentExp=function(){return L.content},d.$observe("disabled",function(a){a&&s(),a&&L.isOpen&&t()}),N&&a.$watch(N,function(a){L&&!a===L.isOpen&&j()});var R=function(){J.show.forEach(function(a){b.unbind(a,m)}),J.hide.forEach(function(a){a.split(" ").forEach(function(a){b[0].removeEventListener(a,q)})})};B();var S=a.$eval(d[k+"Animation"]);L.animation=angular.isDefined(S)?!!S:o.animation;var T=a.$eval(d[k+"AppendToBody"]);I=angular.isDefined(T)?T:I,I&&a.$on("$locationChangeSuccess",function(){L.isOpen&&t()}),a.$on("$destroy",function(){s(),u(),R(),w(),n.remove(L),L=null})}}}}}]}).directive("uibTooltipTemplateTransclude",["$animate","$sce","$compile","$templateRequest",function(a,b,c,d){return{link:function(e,f,g){var h,i,j,k=e.$eval(g.tooltipTemplateTranscludeScope),l=0,m=function(){i&&(i.remove(),i=null),h&&(h.$destroy(),h=null),j&&(a.leave(j).then(function(){i=null}),i=j,j=null)};e.$watch(b.parseAsResourceUrl(g.uibTooltipTemplateTransclude),function(b){var g=++l;b?(d(b,!0).then(function(d){if(g===l){var e=k.$new(),i=d,n=c(i)(e,function(b){m(),a.enter(b,f)});h=e,j=n,h.$emit("$includeContentLoaded",b)}},function(){g===l&&(m(),e.$emit("$includeContentError",b))}),e.$emit("$includeContentRequested",b)):m()}),e.$on("$destroy",m)}}}]).directive("uibTooltipClasses",function(){return{restrict:"A",link:function(a,b,c){a.placement&&b.addClass(a.placement),a.popupClass&&b.addClass(a.popupClass),a.animation()&&b.addClass(c.tooltipAnimationClass)}}}).directive("uibTooltipPopup",function(){return{replace:!0,scope:{content:"@",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"template/tooltip/tooltip-popup.html",link:function(a,b){b.addClass("tooltip")}}}).directive("uibTooltip",["$uibTooltip",function(a){return a("uibTooltip","tooltip","mouseenter")}]).directive("uibTooltipTemplatePopup",function(){return{replace:!0,scope:{contentExp:"&",placement:"@",popupClass:"@",animation:"&",isOpen:"&",originScope:"&"},templateUrl:"template/tooltip/tooltip-template-popup.html",link:function(a,b){b.addClass("tooltip")}}}).directive("uibTooltipTemplate",["$uibTooltip",function(a){return a("uibTooltipTemplate","tooltip","mouseenter",{useContentExp:!0})}]).directive("uibTooltipHtmlPopup",function(){return{replace:!0,scope:{contentExp:"&",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"template/tooltip/tooltip-html-popup.html",link:function(a,b){b.addClass("tooltip")}}}).directive("uibTooltipHtml",["$uibTooltip",function(a){return a("uibTooltipHtml","tooltip","mouseenter",{useContentExp:!0})}]),angular.module("ui.bootstrap.tooltip").value("$tooltipSuppressWarning",!1).provider("$tooltip",["$uibTooltipProvider",function(a){angular.extend(this,a),this.$get=["$log","$tooltipSuppressWarning","$injector",function(b,c,d){return c||b.warn("$tooltip is now deprecated. Use $uibTooltip instead."),d.invoke(a.$get)}]}]).directive("tooltipTemplateTransclude",["$animate","$sce","$compile","$templateRequest","$log","$tooltipSuppressWarning",function(a,b,c,d,e,f){return{link:function(g,h,i){f||e.warn("tooltip-template-transclude is now deprecated. Use uib-tooltip-template-transclude instead.");var j,k,l,m=g.$eval(i.tooltipTemplateTranscludeScope),n=0,o=function(){k&&(k.remove(),k=null),j&&(j.$destroy(),j=null),l&&(a.leave(l).then(function(){k=null}),k=l,l=null)};g.$watch(b.parseAsResourceUrl(i.tooltipTemplateTransclude),function(b){var e=++n;b?(d(b,!0).then(function(d){if(e===n){var f=m.$new(),g=d,i=c(g)(f,function(b){o(),a.enter(b,h)});j=f,l=i,j.$emit("$includeContentLoaded",b)}},function(){e===n&&(o(),g.$emit("$includeContentError",b))}),g.$emit("$includeContentRequested",b)):o()}),g.$on("$destroy",o)}}}]).directive("tooltipClasses",["$log","$tooltipSuppressWarning",function(a,b){return{restrict:"A",link:function(c,d,e){b||a.warn("tooltip-classes is now deprecated. Use uib-tooltip-classes instead."),c.placement&&d.addClass(c.placement),c.popupClass&&d.addClass(c.popupClass),c.animation()&&d.addClass(e.tooltipAnimationClass)}}}]).directive("tooltipPopup",["$log","$tooltipSuppressWarning",function(a,b){return{replace:!0,scope:{content:"@",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"template/tooltip/tooltip-popup.html",link:function(c,d){b||a.warn("tooltip-popup is now deprecated. Use uib-tooltip-popup instead."),d.addClass("tooltip")}}}]).directive("tooltip",["$tooltip",function(a){return a("tooltip","tooltip","mouseenter")}]).directive("tooltipTemplatePopup",["$log","$tooltipSuppressWarning",function(a,b){return{replace:!0,scope:{contentExp:"&",placement:"@",popupClass:"@",animation:"&",isOpen:"&",originScope:"&"},templateUrl:"template/tooltip/tooltip-template-popup.html",link:function(c,d){b||a.warn("tooltip-template-popup is now deprecated. Use uib-tooltip-template-popup instead."),d.addClass("tooltip")}}}]).directive("tooltipTemplate",["$tooltip",function(a){return a("tooltipTemplate","tooltip","mouseenter",{useContentExp:!0})}]).directive("tooltipHtmlPopup",["$log","$tooltipSuppressWarning",function(a,b){return{replace:!0,scope:{contentExp:"&",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"template/tooltip/tooltip-html-popup.html",link:function(c,d){b||a.warn("tooltip-html-popup is now deprecated. Use uib-tooltip-html-popup instead."),d.addClass("tooltip")}}}]).directive("tooltipHtml",["$tooltip",function(a){return a("tooltipHtml","tooltip","mouseenter",{useContentExp:!0})}]),angular.module("ui.bootstrap.popover",["ui.bootstrap.tooltip"]).directive("uibPopoverTemplatePopup",function(){return{replace:!0,scope:{title:"@",contentExp:"&",placement:"@",popupClass:"@",animation:"&",isOpen:"&",originScope:"&"},templateUrl:"template/popover/popover-template.html",link:function(a,b){b.addClass("popover")}}}).directive("uibPopoverTemplate",["$uibTooltip",function(a){return a("uibPopoverTemplate","popover","click",{useContentExp:!0})}]).directive("uibPopoverHtmlPopup",function(){return{replace:!0,scope:{contentExp:"&",title:"@",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"template/popover/popover-html.html",link:function(a,b){b.addClass("popover")}}}).directive("uibPopoverHtml",["$uibTooltip",function(a){return a("uibPopoverHtml","popover","click",{useContentExp:!0})}]).directive("uibPopoverPopup",function(){return{replace:!0,scope:{title:"@",content:"@",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"template/popover/popover.html",link:function(a,b){b.addClass("popover")}}}).directive("uibPopover",["$uibTooltip",function(a){return a("uibPopover","popover","click")}]),angular.module("ui.bootstrap.popover").value("$popoverSuppressWarning",!1).directive("popoverTemplatePopup",["$log","$popoverSuppressWarning",function(a,b){return{replace:!0,scope:{title:"@",contentExp:"&",placement:"@",popupClass:"@",animation:"&",isOpen:"&",originScope:"&"},templateUrl:"template/popover/popover-template.html",link:function(c,d){b||a.warn("popover-template-popup is now deprecated. Use uib-popover-template-popup instead."),d.addClass("popover")}}}]).directive("popoverTemplate",["$tooltip",function(a){return a("popoverTemplate","popover","click",{useContentExp:!0})}]).directive("popoverHtmlPopup",["$log","$popoverSuppressWarning",function(a,b){return{replace:!0,scope:{contentExp:"&",title:"@",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"template/popover/popover-html.html",link:function(c,d){b||a.warn("popover-html-popup is now deprecated. Use uib-popover-html-popup instead."),d.addClass("popover")}}}]).directive("popoverHtml",["$tooltip",function(a){return a("popoverHtml","popover","click",{useContentExp:!0})}]).directive("popoverPopup",["$log","$popoverSuppressWarning",function(a,b){return{replace:!0,scope:{title:"@",content:"@",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"template/popover/popover.html",link:function(c,d){b||a.warn("popover-popup is now deprecated. Use uib-popover-popup instead."),d.addClass("popover")}}}]).directive("popover",["$tooltip",function(a){return a("popover","popover","click")}]),angular.module("ui.bootstrap.progressbar",[]).constant("uibProgressConfig",{animate:!0,max:100}).controller("UibProgressController",["$scope","$attrs","uibProgressConfig",function(a,b,c){var d=this,e=angular.isDefined(b.animate)?a.$parent.$eval(b.animate):c.animate;this.bars=[],a.max=angular.isDefined(a.max)?a.max:c.max,this.addBar=function(b,c,f){e||c.css({transition:"none"}),this.bars.push(b),b.max=a.max,b.title=f&&angular.isDefined(f.title)?f.title:"progressbar",b.$watch("value",function(a){b.recalculatePercentage()}),b.recalculatePercentage=function(){var a=d.bars.reduce(function(a,b){return b.percent=+(100*b.value/b.max).toFixed(2),a+b.percent},0);a>100&&(b.percent-=a-100)},b.$on("$destroy",function(){c=null,d.removeBar(b)})},this.removeBar=function(a){this.bars.splice(this.bars.indexOf(a),1),this.bars.forEach(function(a){a.recalculatePercentage()})},a.$watch("max",function(b){d.bars.forEach(function(b){b.max=a.max,b.recalculatePercentage()})})}]).directive("uibProgress",function(){return{replace:!0,transclude:!0,controller:"UibProgressController",require:"uibProgress",scope:{max:"=?"},templateUrl:"template/progressbar/progress.html"}}).directive("uibBar",function(){return{replace:!0,transclude:!0,require:"^uibProgress",scope:{value:"=",type:"@"},templateUrl:"template/progressbar/bar.html",link:function(a,b,c,d){d.addBar(a,b,c)}}}).directive("uibProgressbar",function(){return{replace:!0,transclude:!0,controller:"UibProgressController",scope:{value:"=",max:"=?",type:"@"},templateUrl:"template/progressbar/progressbar.html",link:function(a,b,c,d){d.addBar(a,angular.element(b.children()[0]),{title:c.title})}}}),angular.module("ui.bootstrap.progressbar").value("$progressSuppressWarning",!1).controller("ProgressController",["$scope","$attrs","uibProgressConfig","$log","$progressSuppressWarning",function(a,b,c,d,e){e||d.warn("ProgressController is now deprecated. Use UibProgressController instead.");var f=this,g=angular.isDefined(b.animate)?a.$parent.$eval(b.animate):c.animate;this.bars=[],a.max=angular.isDefined(a.max)?a.max:c.max,this.addBar=function(b,c,d){g||c.css({transition:"none"}),this.bars.push(b),b.max=a.max,b.title=d&&angular.isDefined(d.title)?d.title:"progressbar",b.$watch("value",function(a){b.recalculatePercentage()}),b.recalculatePercentage=function(){b.percent=+(100*b.value/b.max).toFixed(2);var a=f.bars.reduce(function(a,b){return a+b.percent},0);a>100&&(b.percent-=a-100)},b.$on("$destroy",function(){c=null,f.removeBar(b)})},this.removeBar=function(a){this.bars.splice(this.bars.indexOf(a),1)},a.$watch("max",function(b){f.bars.forEach(function(b){b.max=a.max,b.recalculatePercentage()})})}]).directive("progress",["$log","$progressSuppressWarning",function(a,b){return{replace:!0,transclude:!0,controller:"ProgressController",require:"progress",scope:{max:"=?",title:"@?"},templateUrl:"template/progressbar/progress.html",link:function(){b||a.warn("progress is now deprecated. Use uib-progress instead.")}}}]).directive("bar",["$log","$progressSuppressWarning",function(a,b){return{replace:!0,transclude:!0,require:"^progress",scope:{value:"=",type:"@"},templateUrl:"template/progressbar/bar.html",link:function(c,d,e,f){b||a.warn("bar is now deprecated. Use uib-bar instead."),f.addBar(c,d)}}}]).directive("progressbar",["$log","$progressSuppressWarning",function(a,b){return{replace:!0,transclude:!0,controller:"ProgressController",scope:{value:"=",max:"=?",type:"@"},templateUrl:"template/progressbar/progressbar.html",link:function(c,d,e,f){b||a.warn("progressbar is now deprecated. Use uib-progressbar instead."),f.addBar(c,angular.element(d.children()[0]),{title:e.title})}}}]),angular.module("ui.bootstrap.rating",[]).constant("uibRatingConfig",{max:5,stateOn:null,stateOff:null,titles:["one","two","three","four","five"]}).controller("UibRatingController",["$scope","$attrs","uibRatingConfig",function(a,b,c){var d={$setViewValue:angular.noop};this.init=function(e){d=e,d.$render=this.render,d.$formatters.push(function(a){return angular.isNumber(a)&&a<<0!==a&&(a=Math.round(a)),a}),this.stateOn=angular.isDefined(b.stateOn)?a.$parent.$eval(b.stateOn):c.stateOn,this.stateOff=angular.isDefined(b.stateOff)?a.$parent.$eval(b.stateOff):c.stateOff;var f=angular.isDefined(b.titles)?a.$parent.$eval(b.titles):c.titles;this.titles=angular.isArray(f)&&f.length>0?f:c.titles;var g=angular.isDefined(b.ratingStates)?a.$parent.$eval(b.ratingStates):new Array(angular.isDefined(b.max)?a.$parent.$eval(b.max):c.max);a.range=this.buildTemplateObjects(g)},this.buildTemplateObjects=function(a){for(var b=0,c=a.length;c>b;b++)a[b]=angular.extend({index:b},{stateOn:this.stateOn,stateOff:this.stateOff,title:this.getTitle(b)},a[b]);return a},this.getTitle=function(a){return a>=this.titles.length?a+1:this.titles[a]},a.rate=function(b){!a.readonly&&b>=0&&b<=a.range.length&&(d.$setViewValue(d.$viewValue===b?0:b),d.$render())},a.enter=function(b){a.readonly||(a.value=b),a.onHover({value:b})},a.reset=function(){a.value=d.$viewValue,a.onLeave()},a.onKeydown=function(b){/(37|38|39|40)/.test(b.which)&&(b.preventDefault(),b.stopPropagation(),a.rate(a.value+(38===b.which||39===b.which?1:-1)))},this.render=function(){a.value=d.$viewValue}}]).directive("uibRating",function(){return{require:["uibRating","ngModel"],scope:{readonly:"=?",onHover:"&",onLeave:"&"},controller:"UibRatingController",templateUrl:"template/rating/rating.html",replace:!0,link:function(a,b,c,d){var e=d[0],f=d[1];e.init(f)}}}),angular.module("ui.bootstrap.rating").value("$ratingSuppressWarning",!1).controller("RatingController",["$scope","$attrs","$controller","$log","$ratingSuppressWarning",function(a,b,c,d,e){e||d.warn("RatingController is now deprecated. Use UibRatingController instead."),angular.extend(this,c("UibRatingController",{$scope:a,$attrs:b}))}]).directive("rating",["$log","$ratingSuppressWarning",function(a,b){return{require:["rating","ngModel"],scope:{readonly:"=?",onHover:"&",onLeave:"&"},controller:"RatingController",templateUrl:"template/rating/rating.html",replace:!0,link:function(c,d,e,f){b||a.warn("rating is now deprecated. Use uib-rating instead.");var g=f[0],h=f[1];g.init(h)}}}]),angular.module("ui.bootstrap.tabs",[]).controller("UibTabsetController",["$scope",function(a){var b=this,c=b.tabs=a.tabs=[];b.select=function(a){angular.forEach(c,function(b){b.active&&b!==a&&(b.active=!1,b.onDeselect(),a.selectCalled=!1)}),a.active=!0,a.selectCalled||(a.onSelect(),a.selectCalled=!0)},b.addTab=function(a){c.push(a),1===c.length&&a.active!==!1?a.active=!0:a.active?b.select(a):a.active=!1},b.removeTab=function(a){var e=c.indexOf(a);if(a.active&&c.length>1&&!d){var f=e==c.length-1?e-1:e+1;b.select(c[f])}c.splice(e,1)};var d;a.$on("$destroy",function(){d=!0})}]).directive("uibTabset",function(){return{restrict:"EA",transclude:!0,replace:!0,scope:{type:"@"},controller:"UibTabsetController",templateUrl:"template/tabs/tabset.html",link:function(a,b,c){a.vertical=angular.isDefined(c.vertical)?a.$parent.$eval(c.vertical):!1,a.justified=angular.isDefined(c.justified)?a.$parent.$eval(c.justified):!1}}}).directive("uibTab",["$parse",function(a){return{require:"^uibTabset",restrict:"EA",replace:!0,templateUrl:"template/tabs/tab.html",transclude:!0,scope:{active:"=?",heading:"@",onSelect:"&select",onDeselect:"&deselect"},controller:function(){},link:function(b,c,d,e,f){b.$watch("active",function(a){a&&e.select(b)}),b.disabled=!1,d.disable&&b.$parent.$watch(a(d.disable),function(a){b.disabled=!!a}),b.select=function(){b.disabled||(b.active=!0)},e.addTab(b),b.$on("$destroy",function(){e.removeTab(b)}),b.$transcludeFn=f}}}]).directive("uibTabHeadingTransclude",function(){return{restrict:"A",require:["?^uibTab","?^tab"],link:function(a,b){a.$watch("headingElement",function(a){a&&(b.html(""),b.append(a))})}}}).directive("uibTabContentTransclude",function(){function a(a){return a.tagName&&(a.hasAttribute("tab-heading")||a.hasAttribute("data-tab-heading")||a.hasAttribute("x-tab-heading")||a.hasAttribute("uib-tab-heading")||a.hasAttribute("data-uib-tab-heading")||a.hasAttribute("x-uib-tab-heading")||"tab-heading"===a.tagName.toLowerCase()||"data-tab-heading"===a.tagName.toLowerCase()||"x-tab-heading"===a.tagName.toLowerCase()||"uib-tab-heading"===a.tagName.toLowerCase()||"data-uib-tab-heading"===a.tagName.toLowerCase()||"x-uib-tab-heading"===a.tagName.toLowerCase())}return{restrict:"A",require:["?^uibTabset","?^tabset"],link:function(b,c,d){var e=b.$eval(d.uibTabContentTransclude);e.$transcludeFn(e.$parent,function(b){angular.forEach(b,function(b){a(b)?e.headingElement=b:c.append(b)})})}}}),angular.module("ui.bootstrap.tabs").value("$tabsSuppressWarning",!1).controller("TabsetController",["$scope","$controller","$log","$tabsSuppressWarning",function(a,b,c,d){d||c.warn("TabsetController is now deprecated. Use UibTabsetController instead."),angular.extend(this,b("UibTabsetController",{$scope:a}))}]).directive("tabset",["$log","$tabsSuppressWarning",function(a,b){return{restrict:"EA",transclude:!0,replace:!0,scope:{type:"@"},controller:"TabsetController",templateUrl:"template/tabs/tabset.html",link:function(c,d,e){b||a.warn("tabset is now deprecated. Use uib-tabset instead."),c.vertical=angular.isDefined(e.vertical)?c.$parent.$eval(e.vertical):!1,c.justified=angular.isDefined(e.justified)?c.$parent.$eval(e.justified):!1}}}]).directive("tab",["$parse","$log","$tabsSuppressWarning",function(a,b,c){return{require:"^tabset",restrict:"EA",replace:!0,templateUrl:"template/tabs/tab.html",transclude:!0,scope:{active:"=?",heading:"@",onSelect:"&select",onDeselect:"&deselect"},controller:function(){},link:function(d,e,f,g,h){c||b.warn("tab is now deprecated. Use uib-tab instead."),d.$watch("active",function(a){a&&g.select(d)}),d.disabled=!1,f.disable&&d.$parent.$watch(a(f.disable),function(a){d.disabled=!!a}),d.select=function(){d.disabled||(d.active=!0)},g.addTab(d),d.$on("$destroy",function(){g.removeTab(d)}),d.$transcludeFn=h}}}]).directive("tabHeadingTransclude",["$log","$tabsSuppressWarning",function(a,b){return{restrict:"A",require:"^tab",link:function(c,d){b||a.warn("tab-heading-transclude is now deprecated. Use uib-tab-heading-transclude instead."),c.$watch("headingElement",function(a){a&&(d.html(""),d.append(a))})}}}]).directive("tabContentTransclude",["$log","$tabsSuppressWarning",function(a,b){function c(a){return a.tagName&&(a.hasAttribute("tab-heading")||a.hasAttribute("data-tab-heading")||a.hasAttribute("x-tab-heading")||"tab-heading"===a.tagName.toLowerCase()||"data-tab-heading"===a.tagName.toLowerCase()||"x-tab-heading"===a.tagName.toLowerCase())}return{restrict:"A",require:"^tabset",link:function(d,e,f){b||a.warn("tab-content-transclude is now deprecated. Use uib-tab-content-transclude instead.");var g=d.$eval(f.tabContentTransclude);g.$transcludeFn(g.$parent,function(a){angular.forEach(a,function(a){c(a)?g.headingElement=a:e.append(a)})})}}}]),angular.module("ui.bootstrap.timepicker",[]).constant("uibTimepickerConfig",{hourStep:1,minuteStep:1,showMeridian:!0,meridians:null,readonlyInput:!1,mousewheel:!0,arrowkeys:!0,showSpinners:!0}).controller("UibTimepickerController",["$scope","$element","$attrs","$parse","$log","$locale","uibTimepickerConfig",function(a,b,c,d,e,f,g){function h(){var b=parseInt(a.hours,10),c=a.showMeridian?b>0&&13>b:b>=0&&24>b;return c?(a.showMeridian&&(12===b&&(b=0),a.meridian===r[1]&&(b+=12)),b):void 0}function i(){var b=parseInt(a.minutes,10);return b>=0&&60>b?b:void 0}function j(a){return angular.isDefined(a)&&a.toString().length<2?"0"+a:a.toString()}function k(a){l(),q.$setViewValue(new Date(p)),m(a)}function l(){q.$setValidity("time",!0),a.invalidHours=!1,a.invalidMinutes=!1}function m(b){var c=p.getHours(),d=p.getMinutes();a.showMeridian&&(c=0===c||12===c?12:c%12),a.hours="h"===b?c:j(c),"m"!==b&&(a.minutes=j(d)),a.meridian=p.getHours()<12?r[0]:r[1]}function n(a,b){var c=new Date(a.getTime()+6e4*b),d=new Date(a);return d.setHours(c.getHours(),c.getMinutes()),d}function o(a){p=n(p,a),k()}var p=new Date,q={$setViewValue:angular.noop},r=angular.isDefined(c.meridians)?a.$parent.$eval(c.meridians):g.meridians||f.DATETIME_FORMATS.AMPMS;a.tabindex=angular.isDefined(c.tabindex)?c.tabindex:0,b.removeAttr("tabindex"),this.init=function(b,d){q=b,q.$render=this.render,q.$formatters.unshift(function(a){return a?new Date(a):null});var e=d.eq(0),f=d.eq(1),h=angular.isDefined(c.mousewheel)?a.$parent.$eval(c.mousewheel):g.mousewheel;h&&this.setupMousewheelEvents(e,f);var i=angular.isDefined(c.arrowkeys)?a.$parent.$eval(c.arrowkeys):g.arrowkeys;i&&this.setupArrowkeyEvents(e,f),a.readonlyInput=angular.isDefined(c.readonlyInput)?a.$parent.$eval(c.readonlyInput):g.readonlyInput,this.setupInputEvents(e,f)};var s=g.hourStep;c.hourStep&&a.$parent.$watch(d(c.hourStep),function(a){s=parseInt(a,10)});var t=g.minuteStep;c.minuteStep&&a.$parent.$watch(d(c.minuteStep),function(a){t=parseInt(a,10)});var u;a.$parent.$watch(d(c.min),function(a){var b=new Date(a);u=isNaN(b)?void 0:b});var v;a.$parent.$watch(d(c.max),function(a){var b=new Date(a);v=isNaN(b)?void 0:b}),a.noIncrementHours=function(){var a=n(p,60*s);
return a>v||p>a&&u>a},a.noDecrementHours=function(){var a=n(p,60*-s);return u>a||a>p&&a>v},a.noIncrementMinutes=function(){var a=n(p,t);return a>v||p>a&&u>a},a.noDecrementMinutes=function(){var a=n(p,-t);return u>a||a>p&&a>v},a.noToggleMeridian=function(){return p.getHours()<13?n(p,720)>v:n(p,-720)<u},a.showMeridian=g.showMeridian,c.showMeridian&&a.$parent.$watch(d(c.showMeridian),function(b){if(a.showMeridian=!!b,q.$error.time){var c=h(),d=i();angular.isDefined(c)&&angular.isDefined(d)&&(p.setHours(c),k())}else m()}),this.setupMousewheelEvents=function(b,c){var d=function(a){a.originalEvent&&(a=a.originalEvent);var b=a.wheelDelta?a.wheelDelta:-a.deltaY;return a.detail||b>0};b.bind("mousewheel wheel",function(b){a.$apply(d(b)?a.incrementHours():a.decrementHours()),b.preventDefault()}),c.bind("mousewheel wheel",function(b){a.$apply(d(b)?a.incrementMinutes():a.decrementMinutes()),b.preventDefault()})},this.setupArrowkeyEvents=function(b,c){b.bind("keydown",function(b){38===b.which?(b.preventDefault(),a.incrementHours(),a.$apply()):40===b.which&&(b.preventDefault(),a.decrementHours(),a.$apply())}),c.bind("keydown",function(b){38===b.which?(b.preventDefault(),a.incrementMinutes(),a.$apply()):40===b.which&&(b.preventDefault(),a.decrementMinutes(),a.$apply())})},this.setupInputEvents=function(b,c){if(a.readonlyInput)return a.updateHours=angular.noop,void(a.updateMinutes=angular.noop);var d=function(b,c){q.$setViewValue(null),q.$setValidity("time",!1),angular.isDefined(b)&&(a.invalidHours=b),angular.isDefined(c)&&(a.invalidMinutes=c)};a.updateHours=function(){var a=h(),b=i();angular.isDefined(a)&&angular.isDefined(b)?(p.setHours(a),u>p||p>v?d(!0):k("h")):d(!0)},b.bind("blur",function(b){!a.invalidHours&&a.hours<10&&a.$apply(function(){a.hours=j(a.hours)})}),a.updateMinutes=function(){var a=i(),b=h();angular.isDefined(a)&&angular.isDefined(b)?(p.setMinutes(a),u>p||p>v?d(void 0,!0):k("m")):d(void 0,!0)},c.bind("blur",function(b){!a.invalidMinutes&&a.minutes<10&&a.$apply(function(){a.minutes=j(a.minutes)})})},this.render=function(){var b=q.$viewValue;isNaN(b)?(q.$setValidity("time",!1),e.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')):(b&&(p=b),u>p||p>v?(q.$setValidity("time",!1),a.invalidHours=!0,a.invalidMinutes=!0):l(),m())},a.showSpinners=angular.isDefined(c.showSpinners)?a.$parent.$eval(c.showSpinners):g.showSpinners,a.incrementHours=function(){a.noIncrementHours()||o(60*s)},a.decrementHours=function(){a.noDecrementHours()||o(60*-s)},a.incrementMinutes=function(){a.noIncrementMinutes()||o(t)},a.decrementMinutes=function(){a.noDecrementMinutes()||o(-t)},a.toggleMeridian=function(){a.noToggleMeridian()||o(720*(p.getHours()<12?1:-1))}}]).directive("uibTimepicker",function(){return{restrict:"EA",require:["uibTimepicker","?^ngModel"],controller:"UibTimepickerController",controllerAs:"timepicker",replace:!0,scope:{},templateUrl:function(a,b){return b.templateUrl||"template/timepicker/timepicker.html"},link:function(a,b,c,d){var e=d[0],f=d[1];f&&e.init(f,b.find("input"))}}}),angular.module("ui.bootstrap.timepicker").value("$timepickerSuppressWarning",!1).controller("TimepickerController",["$scope","$element","$attrs","$controller","$log","$timepickerSuppressWarning",function(a,b,c,d,e,f){f||e.warn("TimepickerController is now deprecated. Use UibTimepickerController instead."),angular.extend(this,d("UibTimepickerController",{$scope:a,$element:b,$attrs:c}))}]).directive("timepicker",["$log","$timepickerSuppressWarning",function(a,b){return{restrict:"EA",require:["timepicker","?^ngModel"],controller:"TimepickerController",controllerAs:"timepicker",replace:!0,scope:{},templateUrl:function(a,b){return b.templateUrl||"template/timepicker/timepicker.html"},link:function(c,d,e,f){b||a.warn("timepicker is now deprecated. Use uib-timepicker instead.");var g=f[0],h=f[1];h&&g.init(h,d.find("input"))}}}]),angular.module("ui.bootstrap.typeahead",["ui.bootstrap.position"]).factory("uibTypeaheadParser",["$parse",function(a){var b=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/;return{parse:function(c){var d=c.match(b);if(!d)throw new Error('Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_" but got "'+c+'".');return{itemName:d[3],source:a(d[4]),viewMapper:a(d[2]||d[1]),modelMapper:a(d[1])}}}}]).controller("UibTypeaheadController",["$scope","$element","$attrs","$compile","$parse","$q","$timeout","$document","$window","$rootScope","$uibPosition","uibTypeaheadParser",function(a,b,c,d,e,f,g,h,i,j,k,l){function m(){K.moveInProgress||(K.moveInProgress=!0,K.$digest()),S&&g.cancel(S),S=g(function(){K.matches.length&&n(),K.moveInProgress=!1},r)}function n(){K.position=C?k.offset(b):k.position(b),K.position.top+=b.prop("offsetHeight")}var o,p,q=[9,13,27,38,40],r=200,s=a.$eval(c.typeaheadMinLength);s||0===s||(s=1);var t,u,v=a.$eval(c.typeaheadWaitMs)||0,w=a.$eval(c.typeaheadEditable)!==!1,x=e(c.typeaheadLoading).assign||angular.noop,y=e(c.typeaheadOnSelect),z=angular.isDefined(c.typeaheadSelectOnBlur)?a.$eval(c.typeaheadSelectOnBlur):!1,A=e(c.typeaheadNoResults).assign||angular.noop,B=c.typeaheadInputFormatter?e(c.typeaheadInputFormatter):void 0,C=c.typeaheadAppendToBody?a.$eval(c.typeaheadAppendToBody):!1,D=c.typeaheadAppendToElementId||!1,E=a.$eval(c.typeaheadFocusFirst)!==!1,F=c.typeaheadSelectOnExact?a.$eval(c.typeaheadSelectOnExact):!1,G=e(c.ngModel),H=e(c.ngModel+"($$$p)"),I=function(b,c){return angular.isFunction(G(a))&&p&&p.$options&&p.$options.getterSetter?H(b,{$$$p:c}):G.assign(b,c)},J=l.parse(c.uibTypeahead),K=a.$new(),L=a.$on("$destroy",function(){K.$destroy()});K.$on("$destroy",L);var M="typeahead-"+K.$id+"-"+Math.floor(1e4*Math.random());b.attr({"aria-autocomplete":"list","aria-expanded":!1,"aria-owns":M});var N=angular.element("<div uib-typeahead-popup></div>");N.attr({id:M,matches:"matches",active:"activeIdx",select:"select(activeIdx)","move-in-progress":"moveInProgress",query:"query",position:"position"}),angular.isDefined(c.typeaheadTemplateUrl)&&N.attr("template-url",c.typeaheadTemplateUrl),angular.isDefined(c.typeaheadPopupTemplateUrl)&&N.attr("popup-template-url",c.typeaheadPopupTemplateUrl);var O=function(){K.matches=[],K.activeIdx=-1,b.attr("aria-expanded",!1)},P=function(a){return M+"-option-"+a};K.$watch("activeIdx",function(a){0>a?b.removeAttr("aria-activedescendant"):b.attr("aria-activedescendant",P(a))});var Q=function(a,b){return K.matches.length>b&&a?a.toUpperCase()===K.matches[b].label.toUpperCase():!1},R=function(c){var d={$viewValue:c};x(a,!0),A(a,!1),f.when(J.source(a,d)).then(function(e){var f=c===o.$viewValue;if(f&&t)if(e&&e.length>0){K.activeIdx=E?0:-1,A(a,!1),K.matches.length=0;for(var g=0;g<e.length;g++)d[J.itemName]=e[g],K.matches.push({id:P(g),label:J.viewMapper(K,d),model:e[g]});K.query=c,n(),b.attr("aria-expanded",!0),F&&1===K.matches.length&&Q(c,0)&&K.select(0)}else O(),A(a,!0);f&&x(a,!1)},function(){O(),x(a,!1),A(a,!0)})};C&&(angular.element(i).bind("resize",m),h.find("body").bind("scroll",m));var S;K.moveInProgress=!1,K.query=void 0;var T,U=function(a){T=g(function(){R(a)},v)},V=function(){T&&g.cancel(T)};O(),K.select=function(d){var e,f,h={};u=!0,h[J.itemName]=f=K.matches[d].model,e=J.modelMapper(a,h),I(a,e),o.$setValidity("editable",!0),o.$setValidity("parse",!0),y(a,{$item:f,$model:e,$label:J.viewMapper(a,h)}),O(),K.$eval(c.typeaheadFocusOnSelect)!==!1&&g(function(){b[0].focus()},0,!1)},b.bind("keydown",function(a){if(0!==K.matches.length&&-1!==q.indexOf(a.which)){if(-1===K.activeIdx&&(9===a.which||13===a.which))return O(),void K.$digest();a.preventDefault(),40===a.which?(K.activeIdx=(K.activeIdx+1)%K.matches.length,K.$digest()):38===a.which?(K.activeIdx=(K.activeIdx>0?K.activeIdx:K.matches.length)-1,K.$digest()):13===a.which||9===a.which?K.$apply(function(){K.select(K.activeIdx)}):27===a.which&&(a.stopPropagation(),O(),K.$digest())}}),b.bind("blur",function(){z&&K.matches.length&&-1!==K.activeIdx&&!u&&(u=!0,K.$apply(function(){K.select(K.activeIdx)})),t=!1,u=!1});var W=function(a){b[0]!==a.target&&3!==a.which&&0!==K.matches.length&&(O(),j.$$phase||K.$digest())};h.bind("click",W),a.$on("$destroy",function(){h.unbind("click",W),(C||D)&&X.remove(),C&&(angular.element(i).unbind("resize",m),h.find("body").unbind("scroll",m)),N.remove()});var X=d(N)(K);C?h.find("body").append(X):D!==!1?angular.element(h[0].getElementById(D)).append(X):b.after(X),this.init=function(b,c){o=b,p=c,o.$parsers.unshift(function(b){return t=!0,0===s||b&&b.length>=s?v>0?(V(),U(b)):R(b):(x(a,!1),V(),O()),w?b:b?void o.$setValidity("editable",!1):(o.$setValidity("editable",!0),null)}),o.$formatters.push(function(b){var c,d,e={};return w||o.$setValidity("editable",!0),B?(e.$model=b,B(a,e)):(e[J.itemName]=b,c=J.viewMapper(a,e),e[J.itemName]=void 0,d=J.viewMapper(a,e),c!==d?c:b)})}}]).directive("uibTypeahead",function(){return{controller:"UibTypeaheadController",require:["ngModel","^?ngModelOptions","uibTypeahead"],link:function(a,b,c,d){d[2].init(d[0],d[1])}}}).directive("uibTypeaheadPopup",function(){return{scope:{matches:"=",query:"=",active:"=",position:"&",moveInProgress:"=",select:"&"},replace:!0,templateUrl:function(a,b){return b.popupTemplateUrl||"template/typeahead/typeahead-popup.html"},link:function(a,b,c){a.templateUrl=c.templateUrl,a.isOpen=function(){return a.matches.length>0},a.isActive=function(b){return a.active==b},a.selectActive=function(b){a.active=b},a.selectMatch=function(b){a.select({activeIdx:b})}}}}).directive("uibTypeaheadMatch",["$templateRequest","$compile","$parse",function(a,b,c){return{scope:{index:"=",match:"=",query:"="},link:function(d,e,f){var g=c(f.templateUrl)(d.$parent)||"template/typeahead/typeahead-match.html";a(g).then(function(a){b(a.trim())(d,function(a){e.replaceWith(a)})})}}}]).filter("uibTypeaheadHighlight",["$sce","$injector","$log",function(a,b,c){function d(a){return a.replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")}function e(a){return/<.*>/g.test(a)}var f;return f=b.has("$sanitize"),function(b,g){return!f&&e(b)&&c.warn("Unsafe use of typeahead please use ngSanitize"),b=g?(""+b).replace(new RegExp(d(g),"gi"),"<strong>$&</strong>"):b,f||(b=a.trustAsHtml(b)),b}}]),angular.module("ui.bootstrap.typeahead").value("$typeaheadSuppressWarning",!1).service("typeaheadParser",["$parse","uibTypeaheadParser","$log","$typeaheadSuppressWarning",function(a,b,c,d){return d||c.warn("typeaheadParser is now deprecated. Use uibTypeaheadParser instead."),b}]).directive("typeahead",["$compile","$parse","$q","$timeout","$document","$window","$rootScope","$uibPosition","typeaheadParser","$log","$typeaheadSuppressWarning",function(a,b,c,d,e,f,g,h,i,j,k){var l=[9,13,27,38,40],m=200;return{require:["ngModel","^?ngModelOptions"],link:function(n,o,p,q){function r(){N.moveInProgress||(N.moveInProgress=!0,N.$digest()),V&&d.cancel(V),V=d(function(){N.matches.length&&s(),N.moveInProgress=!1},m)}function s(){N.position=F?h.offset(o):h.position(o),N.position.top+=o.prop("offsetHeight")}k||j.warn("typeahead is now deprecated. Use uib-typeahead instead.");var t=q[0],u=q[1],v=n.$eval(p.typeaheadMinLength);v||0===v||(v=1);var w,x,y=n.$eval(p.typeaheadWaitMs)||0,z=n.$eval(p.typeaheadEditable)!==!1,A=b(p.typeaheadLoading).assign||angular.noop,B=b(p.typeaheadOnSelect),C=angular.isDefined(p.typeaheadSelectOnBlur)?n.$eval(p.typeaheadSelectOnBlur):!1,D=b(p.typeaheadNoResults).assign||angular.noop,E=p.typeaheadInputFormatter?b(p.typeaheadInputFormatter):void 0,F=p.typeaheadAppendToBody?n.$eval(p.typeaheadAppendToBody):!1,G=p.typeaheadAppendToElementId||!1,H=n.$eval(p.typeaheadFocusFirst)!==!1,I=p.typeaheadSelectOnExact?n.$eval(p.typeaheadSelectOnExact):!1,J=b(p.ngModel),K=b(p.ngModel+"($$$p)"),L=function(a,b){return angular.isFunction(J(n))&&u&&u.$options&&u.$options.getterSetter?K(a,{$$$p:b}):J.assign(a,b)},M=i.parse(p.typeahead),N=n.$new(),O=n.$on("$destroy",function(){N.$destroy()});N.$on("$destroy",O);var P="typeahead-"+N.$id+"-"+Math.floor(1e4*Math.random());o.attr({"aria-autocomplete":"list","aria-expanded":!1,"aria-owns":P});var Q=angular.element("<div typeahead-popup></div>");Q.attr({id:P,matches:"matches",active:"activeIdx",select:"select(activeIdx)","move-in-progress":"moveInProgress",query:"query",position:"position"}),angular.isDefined(p.typeaheadTemplateUrl)&&Q.attr("template-url",p.typeaheadTemplateUrl),angular.isDefined(p.typeaheadPopupTemplateUrl)&&Q.attr("popup-template-url",p.typeaheadPopupTemplateUrl);var R=function(){N.matches=[],N.activeIdx=-1,o.attr("aria-expanded",!1)},S=function(a){return P+"-option-"+a};N.$watch("activeIdx",function(a){0>a?o.removeAttr("aria-activedescendant"):o.attr("aria-activedescendant",S(a))});var T=function(a,b){return N.matches.length>b&&a?a.toUpperCase()===N.matches[b].label.toUpperCase():!1},U=function(a){var b={$viewValue:a};A(n,!0),D(n,!1),c.when(M.source(n,b)).then(function(c){var d=a===t.$viewValue;if(d&&w)if(c&&c.length>0){N.activeIdx=H?0:-1,D(n,!1),N.matches.length=0;for(var e=0;e<c.length;e++)b[M.itemName]=c[e],N.matches.push({id:S(e),label:M.viewMapper(N,b),model:c[e]});N.query=a,s(),o.attr("aria-expanded",!0),I&&1===N.matches.length&&T(a,0)&&N.select(0)}else R(),D(n,!0);d&&A(n,!1)},function(){R(),A(n,!1),D(n,!0)})};F&&(angular.element(f).bind("resize",r),e.find("body").bind("scroll",r));var V;N.moveInProgress=!1,R(),N.query=void 0;var W,X=function(a){W=d(function(){U(a)},y)},Y=function(){W&&d.cancel(W)};t.$parsers.unshift(function(a){return w=!0,0===v||a&&a.length>=v?y>0?(Y(),X(a)):U(a):(A(n,!1),Y(),R()),z?a:a?void t.$setValidity("editable",!1):(t.$setValidity("editable",!0),null)}),t.$formatters.push(function(a){var b,c,d={};return z||t.$setValidity("editable",!0),E?(d.$model=a,E(n,d)):(d[M.itemName]=a,b=M.viewMapper(n,d),d[M.itemName]=void 0,c=M.viewMapper(n,d),b!==c?b:a)}),N.select=function(a){var b,c,e={};x=!0,e[M.itemName]=c=N.matches[a].model,b=M.modelMapper(n,e),L(n,b),t.$setValidity("editable",!0),t.$setValidity("parse",!0),B(n,{$item:c,$model:b,$label:M.viewMapper(n,e)}),R(),N.$eval(p.typeaheadFocusOnSelect)!==!1&&d(function(){o[0].focus()},0,!1)},o.bind("keydown",function(a){if(0!==N.matches.length&&-1!==l.indexOf(a.which)){if(-1===N.activeIdx&&(9===a.which||13===a.which))return R(),void N.$digest();a.preventDefault(),40===a.which?(N.activeIdx=(N.activeIdx+1)%N.matches.length,N.$digest()):38===a.which?(N.activeIdx=(N.activeIdx>0?N.activeIdx:N.matches.length)-1,N.$digest()):13===a.which||9===a.which?N.$apply(function(){N.select(N.activeIdx)}):27===a.which&&(a.stopPropagation(),R(),N.$digest())}}),o.bind("blur",function(){C&&N.matches.length&&-1!==N.activeIdx&&!x&&(x=!0,N.$apply(function(){N.select(N.activeIdx)})),w=!1,x=!1});var Z=function(a){o[0]!==a.target&&3!==a.which&&0!==N.matches.length&&(R(),g.$$phase||N.$digest())};e.bind("click",Z),n.$on("$destroy",function(){e.unbind("click",Z),(F||G)&&$.remove(),F&&(angular.element(f).unbind("resize",r),e.find("body").unbind("scroll",r)),Q.remove()});var $=a(Q)(N);F?e.find("body").append($):G!==!1?angular.element(e[0].getElementById(G)).append($):o.after($)}}}]).directive("typeaheadPopup",["$typeaheadSuppressWarning","$log",function(a,b){return{scope:{matches:"=",query:"=",active:"=",position:"&",moveInProgress:"=",select:"&"},replace:!0,templateUrl:function(a,b){return b.popupTemplateUrl||"template/typeahead/typeahead-popup.html"},link:function(c,d,e){a||b.warn("typeahead-popup is now deprecated. Use uib-typeahead-popup instead."),c.templateUrl=e.templateUrl,c.isOpen=function(){return c.matches.length>0},c.isActive=function(a){return c.active==a},c.selectActive=function(a){c.active=a},c.selectMatch=function(a){c.select({activeIdx:a})}}}}]).directive("typeaheadMatch",["$templateRequest","$compile","$parse","$typeaheadSuppressWarning","$log",function(a,b,c,d,e){return{restrict:"EA",scope:{index:"=",match:"=",query:"="},link:function(f,g,h){d||e.warn("typeahead-match is now deprecated. Use uib-typeahead-match instead.");var i=c(h.templateUrl)(f.$parent)||"template/typeahead/typeahead-match.html";a(i).then(function(a){b(a.trim())(f,function(a){g.replaceWith(a)})})}}}]).filter("typeaheadHighlight",["$sce","$injector","$log","$typeaheadSuppressWarning",function(a,b,c,d){function e(a){return a.replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")}function f(a){return/<.*>/g.test(a)}var g;return g=b.has("$sanitize"),function(b,h){return d||c.warn("typeaheadHighlight is now deprecated. Use uibTypeaheadHighlight instead."),!g&&f(b)&&c.warn("Unsafe use of typeahead please use ngSanitize"),b=h?(""+b).replace(new RegExp(e(h),"gi"),"<strong>$&</strong>"):b,g||(b=a.trustAsHtml(b)),b}}]),angular.module("template/accordion/accordion-group.html",[]).run(["$templateCache",function(a){a.put("template/accordion/accordion-group.html",'<div class="panel {{panelClass || \'panel-default\'}}">\n  <div class="panel-heading" ng-keypress="toggleOpen($event)">\n    <h4 class="panel-title">\n      <a href tabindex="0" class="accordion-toggle" ng-click="toggleOpen()" uib-accordion-transclude="heading"><span ng-class="{\'text-muted\': isDisabled}">{{heading}}</span></a>\n    </h4>\n  </div>\n  <div class="panel-collapse collapse" uib-collapse="!isOpen">\n	  <div class="panel-body" ng-transclude></div>\n  </div>\n</div>\n')}]),angular.module("template/accordion/accordion.html",[]).run(["$templateCache",function(a){a.put("template/accordion/accordion.html",'<div class="panel-group" ng-transclude></div>')}]),angular.module("template/alert/alert.html",[]).run(["$templateCache",function(a){a.put("template/alert/alert.html",'<div class="alert" ng-class="[\'alert-\' + (type || \'warning\'), closeable ? \'alert-dismissible\' : null]" role="alert">\n    <button ng-show="closeable" type="button" class="close" ng-click="close({$event: $event})">\n        <span aria-hidden="true">&times;</span>\n        <span class="sr-only">Close</span>\n    </button>\n    <div ng-transclude></div>\n</div>\n')}]),angular.module("template/carousel/carousel.html",[]).run(["$templateCache",function(a){a.put("template/carousel/carousel.html",'<div ng-mouseenter="pause()" ng-mouseleave="play()" class="carousel" ng-swipe-right="prev()" ng-swipe-left="next()">\n  <div class="carousel-inner" ng-transclude></div>\n  <a role="button" href class="left carousel-control" ng-click="prev()" ng-show="slides.length > 1">\n    <span aria-hidden="true" class="glyphicon glyphicon-chevron-left"></span>\n    <span class="sr-only">previous</span>\n  </a>\n  <a role="button" href class="right carousel-control" ng-click="next()" ng-show="slides.length > 1">\n    <span aria-hidden="true" class="glyphicon glyphicon-chevron-right"></span>\n    <span class="sr-only">next</span>\n  </a>\n  <ol class="carousel-indicators" ng-show="slides.length > 1">\n    <li ng-repeat="slide in slides | orderBy:indexOfSlide track by $index" ng-class="{ active: isActive(slide) }" ng-click="select(slide)">\n      <span class="sr-only">slide {{ $index + 1 }} of {{ slides.length }}<span ng-if="isActive(slide)">, currently active</span></span>\n    </li>\n  </ol>\n</div>')}]),angular.module("template/carousel/slide.html",[]).run(["$templateCache",function(a){a.put("template/carousel/slide.html",'<div ng-class="{\n    \'active\': active\n  }" class="item text-center" ng-transclude></div>\n')}]),angular.module("template/datepicker/datepicker.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/datepicker.html",'<div ng-switch="datepickerMode" role="application" ng-keydown="keydown($event)">\n  <uib-daypicker ng-switch-when="day" tabindex="0"></uib-daypicker>\n  <uib-monthpicker ng-switch-when="month" tabindex="0"></uib-monthpicker>\n  <uib-yearpicker ng-switch-when="year" tabindex="0"></uib-yearpicker>\n</div>')}]),angular.module("template/datepicker/day.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/day.html",'<table role="grid" aria-labelledby="{{::uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="{{::5 + showWeeks}}"><button id="{{::uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n    <tr>\n      <th ng-if="showWeeks" class="text-center"></th>\n      <th ng-repeat="label in ::labels track by $index" class="text-center"><small aria-label="{{::label.full}}">{{::label.abbr}}</small></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-if="showWeeks" class="text-center h6"><em>{{ weekNumbers[$index] }}</em></td>\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{::dt.uid}}" ng-class="::dt.customClass">\n        <button type="button" style="min-width:100%;" class="btn btn-default btn-sm" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="::{\'text-muted\': dt.secondary, \'text-info\': dt.current}">{{::dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("template/datepicker/month.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/month.html",'<table role="grid" aria-labelledby="{{::uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th><button id="{{::uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{::dt.uid}}" ng-class="::dt.customClass">\n        <button type="button" style="min-width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="::{\'text-info\': dt.current}">{{::dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("template/datepicker/popup.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/popup.html",'<ul class="dropdown-menu" dropdown-nested ng-if="isOpen" style="display: block" ng-style="{top: position.top+\'px\', left: position.left+\'px\'}" ng-keydown="keydown($event)" ng-click="$event.stopPropagation()">\n	<li ng-transclude></li>\n	<li ng-if="showButtonBar" style="padding:10px 9px 2px">\n		<span class="btn-group pull-left">\n			<button type="button" class="btn btn-sm btn-info" ng-click="select(\'today\')" ng-disabled="isDisabled(\'today\')">{{ getText(\'current\') }}</button>\n			<button type="button" class="btn btn-sm btn-danger" ng-click="select(null)">{{ getText(\'clear\') }}</button>\n		</span>\n		<button type="button" class="btn btn-sm btn-success pull-right" ng-click="close()">{{ getText(\'close\') }}</button>\n	</li>\n</ul>\n')}]),angular.module("template/datepicker/year.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/year.html",'<table role="grid" aria-labelledby="{{::uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="3"><button id="{{::uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{::dt.uid}}" ng-class="::dt.customClass">\n        <button type="button" style="min-width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="::{\'text-info\': dt.current}">{{::dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("template/modal/backdrop.html",[]).run(["$templateCache",function(a){a.put("template/modal/backdrop.html",'<div uib-modal-animation-class="fade"\n     modal-in-class="in"\n     ng-style="{\'z-index\': 1040 + (index && 1 || 0) + index*10}"\n></div>\n')}]),angular.module("template/modal/window.html",[]).run(["$templateCache",function(a){a.put("template/modal/window.html",'<div modal-render="{{$isRendered}}" tabindex="-1" role="dialog" class="modal"\n    uib-modal-animation-class="fade"\n    modal-in-class="in"\n    ng-style="{\'z-index\': 1050 + index*10, display: \'block\'}">\n    <div class="modal-dialog" ng-class="size ? \'modal-\' + size : \'\'"><div class="modal-content" uib-modal-transclude></div></div>\n</div>\n')}]),angular.module("template/pagination/pager.html",[]).run(["$templateCache",function(a){a.put("template/pagination/pager.html",'<ul class="pager">\n  <li ng-class="{disabled: noPrevious()||ngDisabled, previous: align}"><a href ng-click="selectPage(page - 1, $event)">{{::getText(\'previous\')}}</a></li>\n  <li ng-class="{disabled: noNext()||ngDisabled, next: align}"><a href ng-click="selectPage(page + 1, $event)">{{::getText(\'next\')}}</a></li>\n</ul>\n')}]),angular.module("template/pagination/pagination.html",[]).run(["$templateCache",function(a){a.put("template/pagination/pagination.html",'<ul class="pagination">\n  <li ng-if="::boundaryLinks" ng-class="{disabled: noPrevious()||ngDisabled}" class="pagination-first"><a href ng-click="selectPage(1, $event)">{{::getText(\'first\')}}</a></li>\n  <li ng-if="::directionLinks" ng-class="{disabled: noPrevious()||ngDisabled}" class="pagination-prev"><a href ng-click="selectPage(page - 1, $event)">{{::getText(\'previous\')}}</a></li>\n  <li ng-repeat="page in pages track by $index" ng-class="{active: page.active,disabled: ngDisabled&&!page.active}" class="pagination-page"><a href ng-click="selectPage(page.number, $event)">{{page.text}}</a></li>\n  <li ng-if="::directionLinks" ng-class="{disabled: noNext()||ngDisabled}" class="pagination-next"><a href ng-click="selectPage(page + 1, $event)">{{::getText(\'next\')}}</a></li>\n  <li ng-if="::boundaryLinks" ng-class="{disabled: noNext()||ngDisabled}" class="pagination-last"><a href ng-click="selectPage(totalPages, $event)">{{::getText(\'last\')}}</a></li>\n</ul>\n')}]),angular.module("template/tooltip/tooltip-html-popup.html",[]).run(["$templateCache",function(a){a.put("template/tooltip/tooltip-html-popup.html",'<div\n  tooltip-animation-class="fade"\n  uib-tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind-html="contentExp()"></div>\n</div>\n')}]),angular.module("template/tooltip/tooltip-popup.html",[]).run(["$templateCache",function(a){a.put("template/tooltip/tooltip-popup.html",'<div\n  tooltip-animation-class="fade"\n  uib-tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind="content"></div>\n</div>\n')}]),angular.module("template/tooltip/tooltip-template-popup.html",[]).run(["$templateCache",function(a){a.put("template/tooltip/tooltip-template-popup.html",'<div\n  tooltip-animation-class="fade"\n  uib-tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner"\n    uib-tooltip-template-transclude="contentExp()"\n    tooltip-template-transclude-scope="originScope()"></div>\n</div>\n')}]),angular.module("template/popover/popover-html.html",[]).run(["$templateCache",function(a){a.put("template/popover/popover-html.html",'<div tooltip-animation-class="fade"\n  uib-tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-if="title"></h3>\n      <div class="popover-content" ng-bind-html="contentExp()"></div>\n  </div>\n</div>\n')}]),angular.module("template/popover/popover-template.html",[]).run(["$templateCache",function(a){a.put("template/popover/popover-template.html",'<div tooltip-animation-class="fade"\n  uib-tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-if="title"></h3>\n      <div class="popover-content"\n        uib-tooltip-template-transclude="contentExp()"\n        tooltip-template-transclude-scope="originScope()"></div>\n  </div>\n</div>\n')}]),angular.module("template/popover/popover.html",[]).run(["$templateCache",function(a){a.put("template/popover/popover.html",'<div tooltip-animation-class="fade"\n  uib-tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-if="title"></h3>\n      <div class="popover-content" ng-bind="content"></div>\n  </div>\n</div>\n')}]),angular.module("template/progressbar/bar.html",[]).run(["$templateCache",function(a){a.put("template/progressbar/bar.html",'<div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: (percent < 100 ? percent : 100) + \'%\'}" aria-valuetext="{{percent | number:0}}%" aria-labelledby="{{::title}}" style="min-width: 0;" ng-transclude></div>\n')}]),angular.module("template/progressbar/progress.html",[]).run(["$templateCache",function(a){a.put("template/progressbar/progress.html",'<div class="progress" ng-transclude aria-labelledby="{{::title}}"></div>')}]),angular.module("template/progressbar/progressbar.html",[]).run(["$templateCache",function(a){a.put("template/progressbar/progressbar.html",'<div class="progress">\n  <div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: (percent < 100 ? percent : 100) + \'%\'}" aria-valuetext="{{percent | number:0}}%" aria-labelledby="{{::title}}" style="min-width: 0;" ng-transclude></div>\n</div>\n')}]),angular.module("template/rating/rating.html",[]).run(["$templateCache",function(a){a.put("template/rating/rating.html",'<span ng-mouseleave="reset()" ng-keydown="onKeydown($event)" tabindex="0" role="slider" aria-valuemin="0" aria-valuemax="{{range.length}}" aria-valuenow="{{value}}">\n    <span ng-repeat-start="r in range track by $index" class="sr-only">({{ $index < value ? \'*\' : \' \' }})</span>\n    <i ng-repeat-end ng-mouseenter="enter($index + 1)" ng-click="rate($index + 1)" class="glyphicon" ng-class="$index < value && (r.stateOn || \'glyphicon-star\') || (r.stateOff || \'glyphicon-star-empty\')" ng-attr-title="{{r.title}}" aria-valuetext="{{r.title}}"></i>\n</span>\n');
}]),angular.module("template/tabs/tab.html",[]).run(["$templateCache",function(a){a.put("template/tabs/tab.html",'<li ng-class="{active: active, disabled: disabled}">\n  <a href ng-click="select()" uib-tab-heading-transclude>{{heading}}</a>\n</li>\n')}]),angular.module("template/tabs/tabset.html",[]).run(["$templateCache",function(a){a.put("template/tabs/tabset.html",'<div>\n  <ul class="nav nav-{{type || \'tabs\'}}" ng-class="{\'nav-stacked\': vertical, \'nav-justified\': justified}" ng-transclude></ul>\n  <div class="tab-content">\n    <div class="tab-pane" \n         ng-repeat="tab in tabs" \n         ng-class="{active: tab.active}"\n         uib-tab-content-transclude="tab">\n    </div>\n  </div>\n</div>\n')}]),angular.module("template/timepicker/timepicker.html",[]).run(["$templateCache",function(a){a.put("template/timepicker/timepicker.html",'<table>\n  <tbody>\n    <tr class="text-center" ng-show="::showSpinners">\n      <td><a ng-click="incrementHours()" ng-class="{disabled: noIncrementHours()}" class="btn btn-link" ng-disabled="noIncrementHours()" tabindex="{{::tabindex}}"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n      <td>&nbsp;</td>\n      <td><a ng-click="incrementMinutes()" ng-class="{disabled: noIncrementMinutes()}" class="btn btn-link" ng-disabled="noIncrementMinutes()" tabindex="{{::tabindex}}"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n      <td ng-show="showMeridian"></td>\n    </tr>\n    <tr>\n      <td class="form-group" ng-class="{\'has-error\': invalidHours}">\n        <input style="width:50px;" type="text" ng-model="hours" ng-change="updateHours()" class="form-control text-center" ng-readonly="::readonlyInput" maxlength="2" tabindex="{{::tabindex}}">\n      </td>\n      <td>:</td>\n      <td class="form-group" ng-class="{\'has-error\': invalidMinutes}">\n        <input style="width:50px;" type="text" ng-model="minutes" ng-change="updateMinutes()" class="form-control text-center" ng-readonly="::readonlyInput" maxlength="2" tabindex="{{::tabindex}}">\n      </td>\n      <td ng-show="showMeridian"><button type="button" ng-class="{disabled: noToggleMeridian()}" class="btn btn-default text-center" ng-click="toggleMeridian()" ng-disabled="noToggleMeridian()" tabindex="{{::tabindex}}">{{meridian}}</button></td>\n    </tr>\n    <tr class="text-center" ng-show="::showSpinners">\n      <td><a ng-click="decrementHours()" ng-class="{disabled: noDecrementHours()}" class="btn btn-link" ng-disabled="noDecrementHours()" tabindex="{{::tabindex}}"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n      <td>&nbsp;</td>\n      <td><a ng-click="decrementMinutes()" ng-class="{disabled: noDecrementMinutes()}" class="btn btn-link" ng-disabled="noDecrementMinutes()" tabindex="{{::tabindex}}"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n      <td ng-show="showMeridian"></td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("template/typeahead/typeahead-match.html",[]).run(["$templateCache",function(a){a.put("template/typeahead/typeahead-match.html",'<a href tabindex="-1" ng-bind-html="match.label | uibTypeaheadHighlight:query"></a>\n')}]),angular.module("template/typeahead/typeahead-popup.html",[]).run(["$templateCache",function(a){a.put("template/typeahead/typeahead-popup.html",'<ul class="dropdown-menu" ng-show="isOpen() && !moveInProgress" ng-style="{top: position().top+\'px\', left: position().left+\'px\'}" style="display: block;" role="listbox" aria-hidden="{{!isOpen()}}">\n    <li ng-repeat="match in matches track by $index" ng-class="{active: isActive($index) }" ng-mouseenter="selectActive($index)" ng-click="selectMatch($index)" role="option" id="{{::match.id}}">\n        <div uib-typeahead-match index="$index" match="match" query="query" template-url="templateUrl"></div>\n    </li>\n</ul>\n')}]),!angular.$$csp()&&angular.element(document).find("head").prepend('<style type="text/css">.ng-animate.item:not(.left):not(.right){-webkit-transition:0s ease-in-out left;transition:0s ease-in-out left}</style>');