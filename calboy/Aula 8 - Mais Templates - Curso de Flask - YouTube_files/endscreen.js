(function(g){var window=this;var W2=function(a,b,c,d){var e=b.ub();g.K(a.element,"ytp-suggestion-set",!!e.videoId);var f=b.getPlaylistId();d=b.uc(c,d?d:"mqdefault.jpg");var k=b instanceof g.JB&&b.lengthSeconds?g.HO(b.lengthSeconds):null,l=!!f;f=l&&"RD"==(new g.ND(f.substr(0,2),f.substr(2))).type;var m=b instanceof g.JB?b.ua:null;c={title:b.title,author:b.author,author_and_views:e.shortViewCount?b.author+" \u2022 "+e.shortViewCount:b.author,aria_label:b.kj||g.Q("YTP_WATCH_VIDEO_OR_PLAYLIST",{TITLE:b.title},b.title),duration:k,
url:b.Mj(c),is_live:m,is_list:l,is_mix:f,background:d?"background-image: url("+d+")":""};b instanceof g.PD&&(c.playlist_length=b.getLength());a.update(c)},X2=function(a,b){g.Hu.call(this,{D:"div",
X:["html5-endscreen","ytp-player-content",b||"base-endscreen"]});this.l=a;this.created=!1},Y2=function(a){g.R.call(this,{D:"div",
I:"ytp-upnext",O:{"aria-label":"{{aria_label}}"},K:[{D:"div",I:"ytp-cued-thumbnail-overlay-image",O:{style:"{{background}}"}},{D:"span",I:"ytp-upnext-top",K:[{D:"span",I:"ytp-upnext-header",W:"Pr\u00f3ximo"},{D:"span",I:"ytp-upnext-title",W:"{{title}}"},{D:"span",I:"ytp-upnext-author",W:"{{author}}"}]},{D:"a",I:"ytp-upnext-autoplay-icon",O:{role:"button",href:"{{url}}","aria-label":"Reproduzir pr\u00f3ximo v\u00eddeo"},K:[{D:"svg",O:{height:"100%",version:"1.1",viewBox:"0 0 72 72",width:"100%"},K:[{D:"circle",
I:"ytp-svg-autoplay-circle",O:{cx:"36",cy:"36",fill:"#fff","fill-opacity":"0.3",r:"31.5"}},{D:"circle",I:"ytp-svg-autoplay-ring",O:{cx:"-36",cy:"36","fill-opacity":"0",r:"33.5",stroke:"#FFFFFF","stroke-dasharray":"211","stroke-dashoffset":"-211","stroke-width":"4",transform:"rotate(-90)"}},{D:"path",I:"ytp-svg-fill",O:{d:"M 24,48 41,36 24,24 V 48 z M 44,24 v 24 h 4 V 24 h -4 z"}}]}]},{D:"span",I:"ytp-upnext-bottom",K:[{D:"span",I:"ytp-upnext-cancel"},{D:"span",I:"ytp-upnext-paused",W:"Reprodu\u00e7\u00e3o autom\u00e1tica pausada"}]}]});
this.A=null;var b=this.g["ytp-upnext-cancel"];this.A=new g.R({D:"button",X:["ytp-upnext-cancel-button","ytp-button"],O:{tabindex:"0","aria-label":"Cancelar reprodu\u00e7\u00e3o autom\u00e1tica"},W:"Cancelar"});g.I(this,this.A);this.A.ea("click",this.cI,this);this.A.aa(b);this.l=a;this.J=this.g["ytp-svg-autoplay-ring"];this.F=this.C=this.o=this.B=null;this.G=new g.L(this.yl,5E3,this);g.I(this,this.G);this.H=0;this.M(this.g["ytp-upnext-autoplay-icon"],"click",this.VJ);this.Rx();this.M(a,"autonavvisibility",
this.Rx);this.M(a,"mdxnowautoplaying",this.lJ);this.M(a,"mdxautoplaycanceled",this.mJ);this.M(a,"mdxautoplayupnext",this.sA);3==this.l.Da()&&(a=(a=g.oJ(g.hJ(this.l)))?a.CC():null)&&this.sA(a)},Z2=function(a,b){a.B=b;
W2(a,b,g.W(a.l),"hqdefault.jpg")},$2=function(a,b){if(!a.o){g.ft("a11y-announce","Pr\u00f3ximo "+a.B.title);
a.H=g.P();a.o=new g.L((0,g.A)(a.yo,a,b),25);a.yo(b);var c=b||g.T(g.W(a.l).experiments,"autoplay_time")||1E4;a.l.ma("onAutonavCoundownStarted",c)}g.Lp(a.element,"ytp-upnext-autoplay-paused")},b3=function(a){a3(a);
a.H=g.P();a.yo();g.J(a.element,"ytp-upnext-autoplay-paused")},a3=function(a){a.o&&(a.o.dispose(),a.o=null)},c3=function(a,b){b=void 0===b?!1:b;
var c=g.W(a.l);if(g.S(c.experiments,"autonav_notifications")&&b&&window.Notification&&window.document.hasFocus){var d=window.Notification.permission;"default"==d?window.Notification.requestPermission():"granted"!=d||window.document.hasFocus()||(d=a.B.ub(),a.yl(),a.C=new window.Notification("Pr\u00f3ximo",{body:d.title,icon:d.uc(c)}),a.F=a.M(a.C,"click",a.MJ),a.G.start())}a3(a);a.l.Fi(!1,b)},d3=function(a){X2.call(this,a,"subscribecard-endscreen");
var b=a.getVideoData();this.o=new g.R({D:"div",I:"ytp-subscribe-card",K:[{D:"img",I:"ytp-author-image",O:{src:b.profilePicture}},{D:"div",I:"ytp-subscribe-card-right",K:[{D:"div",I:"ytp-author-name",W:b.author},{D:"div",I:"html5-subscribe-button-container"}]}]});g.I(this,this.o);this.o.aa(this.element);this.A=new g.UT("Inscreva-se",null,"Cancelar assinatura",null,!0,!1,b.Zi,b.subscribed,"trailer-endscreen",null,null,a);g.I(this,this.A);this.A.aa(this.o.g["html5-subscribe-button-container"]);this.hide()},
e3=function(a){var b=g.W(a),c=g.vv||g.Uh?{style:"will-change: opacity"}:void 0,d=b.g,e=["ytp-videowall-still"];
b.o&&e.push("ytp-videowall-show-text");g.R.call(this,{D:"a",X:e,O:{href:"{{url}}",target:d?"_blank":"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}"},K:[{D:"div",I:"ytp-videowall-still-image",O:{style:"{{background}}"}},{D:"span",I:"ytp-videowall-still-info",K:[{D:"span",I:"ytp-videowall-still-info-bg",K:[{D:"span",I:"ytp-videowall-still-info-content",O:c,K:[{D:"span",I:"ytp-videowall-still-info-title",W:"{{title}}"},{D:"span",I:"ytp-videowall-still-info-author",
W:"{{author_and_views}}"},{D:"span",I:"ytp-videowall-still-info-live",W:"Ao vivo"},{D:"span",I:"ytp-videowall-still-info-duration",W:"{{duration}}"}]}]}]},{D:"span",X:["ytp-videowall-still-listlabel-regular","ytp-videowall-still-listlabel"],K:[{D:"span",I:"ytp-videowall-still-listlabel-icon"},"Playlist",{D:"span",I:"ytp-videowall-still-listlabel-length",K:[" (",{D:"span",W:"{{playlist_length}}"},")"]}]},{D:"span",X:["ytp-videowall-still-listlabel-mix","ytp-videowall-still-listlabel"],K:[{D:"span",
I:"ytp-videowall-still-listlabel-mix-icon"},"Mix",{D:"span",I:"ytp-videowall-still-listlabel-length",W:" (50+)"}]}]});this.B=d;this.l=a;this.o=null;this.A=new g.Ps(this);g.I(this,this.A);this.ea("click",this.F);this.ea("keypress",this.G);this.A.M(a,"videodatachange",this.C);g.W(a).B&&g.TK(a.app.U,this.element,this);this.C()},f3=function(a){g.MJ(a.l,a.element);
var b=a.o.ub().videoId,c=a.o.getPlaylistId();g.ZV(a.l.app,b,a.o.jd,c,void 0,void 0,void 0)},g3=function(a){X2.call(this,a,"videowall-endscreen");
this.J=a;this.F=0;this.A=[];this.G=this.C=this.B=null;this.H=this.T=!1;this.ca=new g.Ps(this);g.I(this,this.ca);this.N=new g.L(g.Ma(g.J,this.element,"ytp-show-tiles"),0);g.I(this,this.N);var b=new g.R({D:"button",X:["ytp-button","ytp-endscreen-previous"],O:{"aria-label":"Anterior"},K:[g.$N()]});g.I(this,b);b.aa(this.element);b.ea("click",this.dG,this);this.R=new g.Bu({D:"div",I:"ytp-endscreen-content"});g.I(this,this.R);this.R.aa(this.element);b=new g.R({D:"button",X:["ytp-button","ytp-endscreen-next"],
O:{"aria-label":"Pr\u00f3ximo"},K:[g.aO()]});g.I(this,b);b.aa(this.element);b.ea("click",this.cG,this);this.o=new Y2(a);g.I(this,this.o);g.IJ(this.l,this.o.element,4);this.hide()},h3=function(a){return g.JJ(a.l)&&a.Ft()&&!a.G},i3=function(a,b){return(0,g.E)(b.suggestions,function(b){b=g.BQ(g.W(a.J),b);
g.I(a,b);return b})},j3=function(a){var b=a.Oq();
b!=a.T&&(a.T=b,a.l.P("autonavvisibility"))},l3=function(a){g.WJ.call(this,a);
this.l=null;this.o=new g.Ps(this);g.I(this,this.o);this.A=g.W(a);k3(a)?this.l=new g3(this.g):this.A.Ha?this.l=new d3(this.g):this.l=new X2(this.g);g.I(this,this.l);g.IJ(this.g,this.l.element,4);this.lz();this.o.M(a,"videodatachange",this.lz,this);this.o.M(a,"crn_endscreen",this.jc,this);this.o.M(a,"crx_endscreen",this.ye,this)},k3=function(a){a=g.W(a);
return a.Lc&&!a.Ha};
g.r(X2,g.Hu);X2.prototype.create=function(){this.created=!0};
X2.prototype.Nq=function(){this.created=!1};
X2.prototype.Ft=function(){return!1};
X2.prototype.Oq=function(){return!1};g.r(Y2,g.R);g.h=Y2.prototype;g.h.yl=function(){this.C&&(this.G.stop(),this.Ka(this.F),this.F=null,this.C.close(),this.C=null)};
g.h.Rx=function(){g.Gu(this,g.iJ(this.l))};
g.h.MJ=function(){window.focus();this.yl()};
g.h.hide=function(){g.R.prototype.hide.call(this)};
g.h.yo=function(a){a=a||g.T(g.W(this.l).experiments,"autoplay_time")||1E4;var b=Math.min(g.P()-this.H,a);a=Math.min(b/a,1);this.J.setAttribute("stroke-dashoffset",-211*(a+1));1<=a&&3!=this.l.Da()?c3(this,!0):this.o&&this.o.start()};
g.h.VJ=function(a){!g.qe(this.A.element,g.Es(a))&&g.mQ(a,this.l)&&c3(this)};
g.h.cI=function(){g.kJ(this.l,!0)};
g.h.lJ=function(a){this.l.Da();this.show();$2(this,a)};
g.h.sA=function(a){this.l.Da();this.B&&this.B.ub().videoId==a.ub().videoId||Z2(this,a)};
g.h.mJ=function(){this.l.Da();a3(this);this.hide()};
g.h.V=function(){a3(this);this.yl();g.R.prototype.V.call(this)};g.r(d3,X2);g.r(e3,g.R);e3.prototype.F=function(a){g.mQ(a,this.l,this.B,this.o.jd||void 0)&&f3(this)};
e3.prototype.G=function(a){switch(a.keyCode){case 13:case 32:g.Js(a)||(f3(this),g.Is(a))}};
e3.prototype.C=function(){var a=this.l.getVideoData(),b=g.W(this.l);this.B=a.isDni?!1:b.g};g.r(g3,X2);g.h=g3.prototype;g.h.create=function(){X2.prototype.create.call(this);var a=this.l.getVideoData();a&&(this.B=i3(this,a),this.C=a);this.Jf();this.ca.M(this.l,"appresize",this.Jf);this.ca.M(this.l,"onVideoAreaChange",this.Jf);this.ca.M(this.l,"videodatachange",this.eG);this.ca.M(this.l,"autonavchange",this.Lw);this.ca.M(this.l,"autonavcancel",this.bG);this.ca.M(this.element,"transitionend",this.gL)};
g.h.Nq=function(){g.Rs(this.ca);g.mf(this.A);this.A=[];this.B=null;X2.prototype.Nq.call(this);g.Lp(this.element,"ytp-show-tiles");this.N.stop()};
g.h.Ft=function(){return 1!=this.C.autonavState};
g.h.show=function(){X2.prototype.show.call(this);g.Lp(this.element,"ytp-show-tiles");g.W(this.l).o?g.Wp(this.N):this.N.start();(this.H||this.G&&this.G!=this.C.clientPlaybackNonce)&&g.kJ(this.l,!1);h3(this)?(j3(this),2==this.C.autonavState?g.S(g.W(this.l).experiments,"fast_autonav_in_background")&&3==this.l.Hf()?c3(this.o,!0):$2(this.o):3==this.C.autonavState&&b3(this.o)):(g.kJ(this.l,!0),j3(this))};
g.h.hide=function(){X2.prototype.hide.call(this);b3(this.o);j3(this)};
g.h.gL=function(a){g.Es(a)==this.element&&this.Jf()};
g.h.Jf=function(){if(this.B&&this.B.length){g.J(this.element,"ytp-endscreen-paginate");var a=g.yJ(this.J,!0),b=g.Vu(this.J);b&&(b=b.Ec()?48:32,a.width-=2*b);var c=a.width/a.height,d=96/54,e=b=2,f=Math.max(a.width/96,2),k=Math.max(a.height/54,2),l=this.B.length,m=Math.pow(2,2);var n=l*m+(Math.pow(2,2)-m);n+=Math.pow(2,2)-m;for(n-=m;0<n&&(b<f||e<k);){var q=b/2,u=e/2,x=b<=f-2&&n>=u*m,H=e<=k-2&&n>=q*m;if((q+1)/u*d/c>c/(q/(u+1)*d)&&H)n-=q*m,e+=2;else if(x)n-=u*m,b+=2;else if(H)n-=q*m,e+=2;else break}d=
!1;n>=3*m&&6>=l*m-n&&(4<=e||4<=b)&&(d=!0);m=96*b;n=54*e;c=m/n<c?a.height/n:a.width/m;c=Math.min(c,2);m*=c;n*=c;m*=g.zd(a.width/m||1,1,1.21);n*=g.zd(a.height/n||1,1,1.21);m=Math.floor(Math.min(a.width,m));n=Math.floor(Math.min(a.height,n));a=this.R.element;g.ji(a,m,n);g.Oh(a,{marginLeft:m/-2+"px",marginTop:n/-2+"px"});Z2(this.o,this.B[0]);g.K(this.element,"ytp-endscreen-takeover",h3(this));j3(this);m+=4;n+=4;for(f=c=0;f<b;f++)for(k=0;k<e;k++)if(q=c,u=0,d&&f>=b-2&&k>=e-2?u=1:0==k%2&&0==f%2&&(2>k&&2>
f?0==k&&0==f&&(u=2):u=2),q=g.Ad(q+this.F,l),0!=u){x=this.A[c];x||(x=new e3(this.l),this.A[c]=x,a.appendChild(x.element));H=Math.floor(n*k/e);var G=Math.floor(m*f/b),M=Math.floor(n*(k+u)/e)-H-4,ba=Math.floor(m*(f+u)/b)-G-4;g.Zh(x.element,G,H);g.ji(x.element,ba,M);g.Oh(x.element,"transitionDelay",(k+f)/20+"s");g.K(x.element,"ytp-videowall-still-mini",1==u);g.K(x.element,"ytp-videowall-still-large",2<u);u=x;q=this.B[q];u.o!=q&&(u.o=q,W2(u,q,g.W(u.l),g.Jp(u.element,"ytp-videowall-still-large")?"hqdefault.jpg":
"mqdefault.jpg"),q=(q=q.jd)&&q.itct)&&(x=u.l,g.W(x).B&&g.UK(x.app.U,u.element,q));c++}g.K(this.element,"ytp-endscreen-paginate",c<l);for(b=this.A.length-1;b>=c;b--)e=this.A[b],g.ie(e.element),g.lf(e);this.A.length=c}};
g.h.eG=function(){var a=this.l.getVideoData();this.C!=a&&(this.F=0,this.B=i3(this,a),this.C=a,this.Jf())};
g.h.cG=function(){this.F+=this.A.length;this.Jf()};
g.h.dG=function(){this.F-=this.A.length;this.Jf()};
g.h.ED=function(){return!!this.o.o};
g.h.Lw=function(a){1==a?(this.H=!1,this.G=this.C.clientPlaybackNonce,a3(this.o),this.Ja()&&this.Jf()):(this.H=!0,this.Ja()&&h3(this)&&(2==a?$2(this.o):3==a&&b3(this.o)))};
g.h.bG=function(a){if(a){for(a=0;a<this.A.length;a++)g.NJ(this.J,this.A[a].element,!0);this.Lw(1)}else this.G=null,this.H=!1;this.Jf()};
g.h.Oq=function(){return this.Ja()&&h3(this)};g.r(l3,g.WJ);g.h=l3.prototype;g.h.jw=function(){var a=this.g.getVideoData(),b=!!(a&&a.suggestions&&a.suggestions.length);b=!k3(this.g)||b;a=g.nC(a,"ypc_module");var c=g.pV(this.g.app);return b&&!a&&!c};
g.h.iw=function(){return this.l.Oq()};
g.h.BD=function(){return this.iw()?this.l.ED():!1};
g.h.V=function(){g.EJ(this.g,"endscreen");g.WJ.prototype.V.call(this)};
g.h.load=function(){g.WJ.prototype.load.call(this);this.l.show()};
g.h.unload=function(){g.WJ.prototype.unload.call(this);this.l.hide();this.l.Nq()};
g.h.jc=function(a){this.jw()&&(this.l.created||this.l.create(),"load"==a.getId()&&this.load())};
g.h.ye=function(a){"load"==a.getId()&&this.loaded&&this.unload()};
g.h.lz=function(){g.EJ(this.g,"endscreen");var a=Math.max(1E3*(this.g.getVideoData().lengthSeconds-10),0);a=new g.KD(a,0x8000000000000,{id:"preload",namespace:"endscreen"});g.I(this,a);var b=new g.KD(0x8000000000000,0x8000000000000,{id:"load",priority:6,namespace:"endscreen"});g.I(this,b);g.BJ(this.g,[a,b])};g.uQ.endscreen=l3;})(_yt_player);