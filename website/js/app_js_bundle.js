// Copyright 2011 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var d=this,f=function(a,b){var c=a.split("."),e=d;!(c[0]in e)&&e.execScript&&e.execScript("var "+c[0]);for(var i;c.length&&(i=c.shift());)!c.length&&b!==void 0?e[i]=b:e=e[i]?e[i]:e[i]={}};f("navNoHistory",function(a,b){parent&&parent.location&&b=="_parent"?parent.location.replace(a):window.location.replace(a)});function g(){return h(location.search.substring(1))}f("ExtractArgs",g);function h(a){for(var b={},a=a.split("&"),c=0;c<a.length;c++){var e=a[c].indexOf("=");e!=-1&&(b[a[c].substring(0,e)]=unescape(a[c].substring(e+1)))}return b}f("SplitQueryString",h);function j(a,b,c,e){k(a);l(a,b,c,e)}f("createCookie",j);
function l(a,b,c,e){if(c){var i=new Date;i.setTime(i.getTime()+c*864E5);c="; expires="+i.toGMTString()}else c="";document.cookie=a+"="+b+c+"; path=/"+(e?";domain="+e:"")}function m(a){a+="=";for(var b=document.cookie.split(";"),c=0;c<b.length;c++){for(var e=b[c];e.charAt(0)==" ";)e=e.substring(1,e.length);if(e.indexOf(a)==0)return e.substring(a.length,e.length)}return null}f("readCookie",m);function k(a){l(a,"",-1);l(a,"",-1,"."+document.domain)}f("eraseCookie",k);
f("cookiesEnabled",function(){var a=(new Date).getTime().toString();j("cookieCheck",a,1);return m("cookieCheck")!=a?!1:!0});function n(a){var b=[],a=a?a:m("lastuser"),c=m("partner");b[0]=(new Date).getTime().toString();b[1]=Math.floor(Math.random()*100);b[2]=a?a.indexOf(":G")==-1?"R":"G":"A";b[3]=c&&c.length==1?c:"0";b[4]="1";return b}f("tokenCreate",n);var o=null;
f("tokenGet",function(){if(null!=o)return o;var a=g(),b=null,b="atkn"in a?a.atkn:m("atkn");if(!b)return n();a=b.split(".");b=n();if(a.length!=5)return b;if((new Date).getTime()-a[0]>108E5)return b;a[2]<b[2]&&(a[2]=b[2]);b[3]=="1"&&(a[3]="1");return a});f("tokenSet",function(a,b){a[0]=(new Date).getTime().toString();a[4]=b?"1":"0";j("atkn",p(a));o=a});function p(a){return a.join(".")}f("tokenToString",p);
f("tokenCheck",function(a,b){if(!oPicnikState.fAllAccess)return!1;var c=0;if(a[2]=="A")c=oPicnikState.nAnon;else if(a[2]=="G")c=oPicnikState.nGuest;else if(a[2]=="R")c=oPicnikState.nReg;if(a[3]=="1"&&b)c=oPicnikState.nPartner;return a[1]<=c?!0:!1});function q(){for(var a=[],b=0;b<arguments.length;b++){var c=arguments[b];typeof c=="string"&&(c=document.getElementById(c));if(arguments.length==1)return c;a.push(c)}return a}var r={a:function(){return r.b()=="IE"},b:function(){var a=navigator.userAgent.toLowerCase();return/firefox/.test(a)?"FF":/opera/.test(a)?"OP":/msie/.test(a)?"IE":/chrome/.test(a)?"CH":/webkit/.test(a)?"WK":""}};f("PicnikScript",r);r.LoadDocument=function(a){q("picnik")&&"LoadDocument"in q("picnik")&&q("picnik").f(a)};
r.CloseDocument=function(){q("picnik")&&"CloseDocument"in q("picnik")&&q("picnik").e()};r.ShowAlternate=function(a){q("ifrmPicnikAlt").style.display="block";q("ifrmPicnikAlt").width="100%";q("ifrmPicnikAlt").height="100%";q("ifrmPicnikAlt").src=a.url;if(!r.a())q("flashcontent").style.visibility="hidden",q("ifrmLeaderboard").style.visibility="hidden";q("picnik")&&q("picnik").d(a)};
r.HideAlternate=function(a){q("flashcontent").style.visibility="visible";q("ifrmLeaderboard").style.visibility="visible";q("ifrmPicnikAlt").style.display="none";q("ifrmPicnikAlt").width="0px";q("ifrmPicnikAlt").height="0px";q("ifrmPicnikAlt").src="about:blank";q("picnik")&&q("picnik").g(a)};r.Remote=function(a){var b=a._function;if(!(!b in r))r[b](a)};var s="";f("browser",s);var t="";f("defaultUrl",t);var u=document.location.href;f("curUrl",u);var v=document.location.href;f("initialUrl",v);var w=!1;f("flickr",w);var x="h.html?";f("historyFrameSourcePrefix",x);v.indexOf("flickr.com/")!=-1?(x="/picnik/hflickr.html?",w=!0):v.indexOf("/flickr/")!=-1&&(x="/flickr/picnik/hflickr.html?",w=!0);var y=-1;f("curHistoryLength",y);var z=[];f("historyHash",z);var A=!0;f("fCanUpdateHref",A);
function B(){var a=navigator.userAgent.toLowerCase();navigator.appName.indexOf("Microsoft")!=-1?a.indexOf("mac")==-1&&(s="IE"):a.indexOf("chrome")!=-1?s="Chrome":a.indexOf("safari")!=-1?s="Safari":a.indexOf("firefox")!=-1&&(s="Firefox")}f("getBrowser",B);function C(){var a=document.getElementById(getPlayerId());a==null&&(a=document.getElementsByTagName("object")[0]);return a}f("getPlayer",C);function D(){var a=document.location.href.indexOf("#");return a>=0?document.location.href.substr(a+1):""}
f("getHash",D);f("setBrowserUrl",function(a){if(A){var b=document.location.href.indexOf("#"),b=b!=-1?document.location.href.substr(0,b):document.location.href,c=b+"#"+a;if(document.location.href!=c&&document.location.href+"#"!=c)u=c,E(b,c,a),y=history.length;return!1}});
function E(a,b,c){if(A)if(s=="IE")document.location.href.indexOf("host=facebook")>0?A=!1:c==t&&document.location.href==v?u=v:(c?F().src=x+c:b=a+"#"+t,document.location.href=b,A=document.location.href==b);else if(s=="Safari")if(document.location.href.indexOf("host=facebook")>0)A=!1;else{a=navigator.userAgent.toLowerCase();a=parseFloat(a.substr(a.indexOf("safari/")+7));if(a>500)document.location.href=b;else if(!(w&&a==419.3))G().innerHTML='<form name="historyForm" action="'+b+'" method="GET"></form>',
document.forms.h.submit();z[history.length]=c}else H(c),document.location.hash=c}f("addHistoryEntry",E);function I(){if(A){if(s=="IE"){if(u!=document.location.href)u=document.location.href,document.location.reload()}else if(s=="Safari"){if(y>=0&&history.length!=y){y=history.length;var a=z[y];a==""&&(a=t);C().c(a)}}else if(u!=document.location.href)u=document.location.href,a=D(),a==""&&(a=t),C().c(a);setTimeout(I,250)}}f("checkForUrlChange",I);
f("setDefaultUrl",function(a){t=a;if(s=="IE")F().src=x+t;else if(s=="Safari")y=history.length,z[y]=t});f("setTitle",function(a){document.title=a});f("getTitle",function(){return document.title});function H(a){document.getElementsByName(a).length==0&&(J().innerHTML+="<a name='"+a+"'>"+a+"</a>")}f("addAnchor",H);function F(){return document.getElementById("historyFrame")}f("getHistoryFrame",F);function J(){return document.getElementById("anchorDiv")}f("getAnchorElement",J);
function G(){return document.getElementById("formDiv")}f("getFormElement",G);B();setTimeout(I,250);f("enter_key",function(a){if(window.event)a=window.event.keyCode;else if(a)a=a.which;else return!1;return a==13});f("module_submit",function(a,b){a.action=a.action+"/"+b;a.submit()});f("module_md5_submit",function(a,b){K(a);a.action=a.action+"/"+b;a.submit()});f("WriteContactUsLink",function(){L("Contact Us")});
function L(a){for(var b="",c=0;c<18;c++)if("Nb4EvFBo6df3yrXguz7Cke2Mp09xPSZhn5JacWL1AOTDwQGmIVHUlYR8tisKqj".indexOf("R0HyYRy@TrRHrL.R0E".charAt(c))==-1){var e="R0HyYRy@TrRHrL.R0E".charAt(c);b+=e}else e=("Nb4EvFBo6df3yrXguz7Cke2Mp09xPSZhn5JacWL1AOTDwQGmIVHUlYR8tisKqj".indexOf("R0HyYRy@TrRHrL.R0E".charAt(c))-18+62)%62,b+="Nb4EvFBo6df3yrXguz7Cke2Mp09xPSZhn5JacWL1AOTDwQGmIVHUlYR8tisKqj".charAt(e);document.write("<a href='mailto:"+b+"'>"+a+"</a>")}f("WriteEmailLink",L);
function M(a){return a.replace(/^\s*|\s*$/g,"")}f("trim",M);function N(a){var b=a.form.elements[a.name+"_clear"],c=M(b.value);if(c.length>0)a.value=hex_md5(c),b.value=a.value.substr(0,b.value.length);return!0}f("md5_field",N);function K(a){for(var a=a.elements,b=0;b<a.length;b++){var c=a[b];c.name.length>=8&&c.name.substr(c.name.length-8).toLowerCase()=="password"&&N(c)}}f("md5_form",K);