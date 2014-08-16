//////////////////////////////////////////////////////////////////////
// Pano2VR HTML5/CSS3 & WebGL Panorama Player 3.1.4/1954            //
// License: Gu Jun (Shanghai)                                       //
// (c) 2012, Garden Gnome Software, http://gardengnomesoftware.com  //
//////////////////////////////////////////////////////////////////////

var j=!0,k=null,r=!1;function Ra(){this.y=this.x=0;this.c=-100;this.set=function(f,n,g){this.x=f;this.y=n;this.c=g};this.o=function(f){var n=Math.sin(f),f=Math.cos(f),g=this.y,p=this.c;this.y=f*g-n*p;this.c=n*g+f*p};this.p=function(f){var n=Math.sin(f),f=Math.cos(f),g=this.x,p=this.c;this.x=f*g+n*p;this.c=-n*g+f*p}}glMatrixArrayType="undefined"!=typeof Float32Array?Float32Array:"undefined"!=typeof WebGLFloatArray?WebGLFloatArray:Array;
function Eb(f){f[0]=1;f[1]=0;f[2]=0;f[3]=0;f[4]=0;f[5]=1;f[6]=0;f[7]=0;f[8]=0;f[9]=0;f[10]=1;f[11]=0;f[12]=0;f[13]=0;f[14]=0;f[15]=1}
function Fb(f,n,g){var p,z=g[0],A=g[1],g=g[2],H=Math.sqrt(z*z+A*A+g*g);if(H){1!=H&&(H=1/H,z*=H,A*=H,g*=H);var S=Math.sin(n),na=Math.cos(n),O=1-na,n=f[0],H=f[1],Ea=f[2],Fa=f[3],Ga=f[4],Ha=f[5],Ia=f[6],fa=f[7],oa=f[8],pa=f[9],qa=f[10],t=f[11],ga=z*z*O+na,Y=A*z*O+g*S,ha=g*z*O-A*S,ia=z*A*O-g*S,K=A*A*O+na,T=g*A*O+z*S,U=z*g*O+A*S,z=A*g*O-z*S,A=g*g*O+na;p?f!=p&&(p[12]=f[12],p[13]=f[13],p[14]=f[14],p[15]=f[15]):p=f;p[0]=n*ga+Ga*Y+oa*ha;p[1]=H*ga+Ha*Y+pa*ha;p[2]=Ea*ga+Ia*Y+qa*ha;p[3]=Fa*ga+fa*Y+t*ha;p[4]=
n*ia+Ga*K+oa*T;p[5]=H*ia+Ha*K+pa*T;p[6]=Ea*ia+Ia*K+qa*T;p[7]=Fa*ia+fa*K+t*T;p[8]=n*U+Ga*z+oa*A;p[9]=H*U+Ha*z+pa*A;p[10]=Ea*U+Ia*z+qa*A;p[11]=Fa*U+fa*z+t*A}}
function Gb(){var f="perspective",n=["Webkit","Moz","O","ms","Ms"],g;g=r;for(g=0;g<n.length;g++)"undefined"!==typeof document.documentElement.style[n[g]+"Perspective"]&&(f=n[g]+"Perspective");"undefined"!==typeof document.documentElement.style[f]?"webkitPerspective"in document.documentElement.style?(f=document.createElement("style"),n=document.createElement("div"),g=document.head||document.getElementsByTagName("head")[0],f.textContent="@media (-webkit-transform-3d) {#ggswhtml5{height:5px}}",g.appendChild(f),
n.id="ggswhtml5",document.documentElement.appendChild(n),g=5===n.offsetHeight,f.parentNode.removeChild(f),n.parentNode.removeChild(n)):g=j:g=r;return g}function Vb(){var f;if(f=!!window.WebGLRenderingContext)try{var n=document.createElement("canvas");n.width=100;n.height=100;var g=n.getContext("webgl");g||(g=n.getContext("experimental-webgl"));f=g?j:r}catch(p){f=r}return f}
function pano2vrPlayer(f){function n(a){var c=-1;try{for(var b=0;b<h.length;b++)h[b].id==a.id&&h[b].obj!=k&&h[b].url==a.url&&h[b].loop==a.loop&&h[b].mode==a.mode&&(c=b);if(-1==c){for(b=0;b<h.length;b++)if(h[b].id==a.id&&h[b].obj!=k){try{h[b].obj.pause()}catch(d){ra(d)}try{h[b].obj.parentElement.removeChild(h[b].obj),delete h[b].obj,h[b].obj=k}catch(e){ra(e)}c=b}a.obj=document.createElement("audio");a.obj.setAttribute("src",K(a.url));a.obj.volume=a.b*Z;0==a.loop&&(a.obj.d=1E7);1<=a.loop&&(a.obj.d=
a.loop-1);if((1==a.mode||2==a.mode||3==a.mode||5==a.mode)&&0<=a.loop)a.obj.autoplay=j;0<=c?h[c]=a:h.push(a);E.appendChild(a.obj);a.obj.addEventListener("ended",function(){0<this.d&&(this.d--,this.currentTime=0,this.load(),this.play())},r);ra(a.obj)}}catch(f){ra(f)}}function g(){var a;a=document.createElement("div");a.innerHTML=Wb("PGRpdiBzdHlsZT0icG9zaXRpb246IHJlbGF0aXZlOyBsZWZ0OiAwcHg7IHJpZ2h0OiAwcHg7IHRvcDogNDAlOyBib3R0b206IDYwJTsgbWFyZ2luOiBhdXRvOyB3aWR0aDogMThlbTsgaGVpZ2h0OiA0ZW07IGJvcmRlcjogM3B4IHNvbGlkICM1NTU7IGJveC1zaGFkb3c6IDVweCA1cHggMTBweCAjMzMzOyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgZGlzcGxheTogdGFibGU7IGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmOyBmb250LXNpemU6IDEwcHQ7IG9wYWNpdHk6IDAuOTU7IGJvcmRlci1yYWRpdXM6IDE1cHg7Ij48cCBzdHlsZT0idGV4dC1hbGlnbjogY2VudGVyOyBkaXNwbGF5OiB0YWJsZS1jZWxsOyB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAiPkNyZWF0ZWQgd2l0aCA8YSBocmVmPSJodHRwOi8vcGFubzJ2ci5jb20vIiB0YXJnZXQ9Il9ibGFuayI+UGFubzJWUjwvYT48L3A+PC9kaXY+JzsNCgkJ");
a.setAttribute("id","about");a.setAttribute("style","top:  0px;left: 0px;width: 100px;height: 100px;overflow: hidden;position:relative;");E.replaceChild(a,G);a.style.width=0+sa+db+B+"px";a.style.height=0+ta+eb+s+"px";a.onclick=function(){E.replaceChild(G,a)};a.oncontextmenu=function(){E.replaceChild(G,a)}}function p(){setTimeout(function(){d.setFullscreen(r)},10);setTimeout(function(){d.setFullscreen(r)},100)}function z(){Xb(z);0<=D&&(ja?(P=0.4*($-Ja),Q=0.4*(aa-Ka),Ja+=P,Ka+=Q,Y(P,Q)):(P=0.1*-ua,
Q=0.1*-va,Y(0.1*-ua,0.1*-va)),d.dirty=j);Sa&&(d.changeFov(0.4*(L-l)),0.0010>Math.abs(L-l)/l&&(Sa=r),d.dirty=j);if(fb&&(0!=P||0!=Q)&&0>D)P*=0.9,Q*=0.9,0.1>P*P+Q*Q?Q=P=0:(Y(P,Q),d.dirty=j);if(0!=wa){switch(wa){case 37:d.changePan(1,j);break;case 38:d.changeTilt(1,j);break;case 39:d.changePan(-1,j);break;case 40:d.changeTilt(-1,j);break;case 43:case 107:case 16:d.changeFovLog(-1,j);break;case 17:case 18:case 109:case 45:case 91:d.changeFovLog(1,j)}d.dirty=j}if(!d.isLoaded&&d.hasConfig){var a,c=0;Ta&&
(d.finalPanorama(),Ta=r);for(a=0;a<d.checkLoaded.length;a++)d.checkLoaded[a].complete&&"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYBgeACDAAADIAAE3iTbkAAAAAElFTkSuQmCC"!=d.checkLoaded[a].src&&c++;c==d.checkLoaded.length?(Ua=1,d.isLoaded=j,d.divSkin&&d.divSkin.ggLoaded&&d.divSkin.ggLoaded()):Ua=c/(1*d.checkLoaded.length)}for(;360<o;)o-=360;for(;-360>o;)o+=360;if(La){q=gb-o;if(360==xa-ya){for(;-180>q;)q+=360;for(;180<
q;)q-=360}C=hb-m;y=ib-l;a=Math.sqrt(q*q+C*C+y*y);if(10*a<Va){if(La=r,y=C=q=0,d.onMoveComplete)d.onMoveComplete()}else a=a>5*Va?Va/a:0.2,q*=a,C*=a,y*=a;o+=q;m+=C;l+=y;a=new Date;jb=a.getTime();d.dirty=j}else if(R)C=Wa*(0-m)/100,y=Wa*(Xa-l)/100,q=0.95*q+0.05*-ba,o+=q,m+=C,l+=y,d.dirty=j;else if(Ma&&(a=new Date,0>D&&a.getTime()-jb>1E3*kb&&(R=j,y=C=q=0)),fb&&0==wa&&0>D&&(0!=q||0!=C||0!=y))q*=0.9,C*=0.9,y*=0.9,o+=q,m+=C,d.changeFovLog(y),1.0E-4>q*q+C*C+y*y&&(y=C=q=0),d.dirty=j;Hb&&(a=new Date,Ya?a.getTime()-
lb>=1E3*Ib&&(Ya=r):(ka+=za,0>ka&&(ka=0,za=-za,Ya=j,lb=a.getTime()),1<ka&&(ka=1,za=-za,Ya=j,lb=a.getTime()),d.setOverlayOpacity(ka)));d.dirty&&(d.dirty=r,d.updatePanorama())}function A(){wa=0}function H(){wa=0;t()}function S(a){Za||(wa=a.keyCode,t())}function na(a){I||(a.preventDefault(),t())}function O(a){I||(a.preventDefault(),Sa=j,L=$a/Math.sqrt(event.scale),L>V&&(L=V),L<W&&(L=W),d.dirty=j,t())}function Ea(a){mb=j;I||(a.preventDefault(),$a=l,t())}function Fa(a){I||(a.preventDefault(),D=-2)}function Ga(a){if(!I){a.preventDefault();
0<=D&&t();var c=(new Date).getTime(),a=-1,a=Math.abs(Jb-Na)+Math.abs(Kb-Oa);if(0<=a&&20>a){if(d.a){a=d.a;for(flag=r;a&&a!=d.control;)a.onclick&&!flag&&(a.onclick(),flag=j),a=a.parentNode}a=Math.abs(Lb-Na)+Math.abs(Mb-Oa);if(700>c-d.f&&0<=a&&20>a){d.a==d.control&&nb&&setTimeout(function(){d.toggleFullscreen()},1);if(d.a){a=d.a;for(flag=r;a&&a!=d.control;)a.ondblclick&&!flag&&(a.ondblclick(),flag=j),a=a.parentNode}d.f=0}else d.f=c;Lb=Na;Mb=Oa}if(d.a){a=d.a;for(flag=r;a&&a!=d.control;){if(a.onmouseout)a.onmouseout();
a.onmouseup&&!flag&&(a.onmouseup(),flag=j);a=a.parentNode}}d.a=k;D=-11}}function Ha(a){a||(a=window.event);var c=a.touches,b=ab();d.mouse.x=c[0].pageX-b.x;d.mouse.y=c[0].pageY-b.y;if(!I){a.preventDefault();c[0]&&(Na=c[0].pageX,Oa=c[0].pageY);if(0<=D){a.preventDefault();for(a=0;a<c.length;a++)if(c[a].identifier==D){ga(c[a].pageX,c[a].pageY);break}t()}2==c.length&&c[0]&&c[1]&&(D=-6,mb||(Nb=Math.sqrt((c[0].pageX-c[1].pageX)*(c[0].pageX-c[1].pageX)+(c[0].pageY-c[1].pageY)*(c[0].pageY-c[1].pageY)),Sa=
j,L=$a*Math.sqrt(Ob/Nb),L>V&&(L=V),L<W&&(L=W),t()))}}function Ia(a){a||(a=window.event);var c=a.touches,b=ab();d.mouse.x=c[0].pageX-b.x;d.mouse.y=c[0].pageY-b.y;if(!I){a.preventDefault();if(0>D&&c[0]&&(ob=(new Date).getTime(),Jb=c[0].pageX,Kb=c[0].pageY,Na=c[0].pageX,Oa=c[0].pageY,d.a=c[0].target,c[0].target==d.control&&(a=c[0].pageX,b=c[0].pageY,pb=a,qb=b,$=a,aa=b,Ja=a,Ka=b,D=c[0].identifier,t()),d.a)){a=d.a;for(flag=r;a&&a!=d.control;){if(a.onmouseover)a.onmouseover();a.onmousedown&&!flag&&(a.onmousedown(),
flag=j);a=a.parentNode}}1<c.length&&(D=-5);!mb&&2==c.length&&c[0]&&c[1]&&(Ob=Math.sqrt((c[0].pageX-c[1].pageX)*(c[0].pageX-c[1].pageX)+(c[0].pageY-c[1].pageY)*(c[0].pageY-c[1].pageY)),$a=l);va=ua=0}}function fa(a){if(!rb){var a=a?a:window.event,c=a.detail?-1*a.detail:a.wheelDelta/40;Pb&&(c=-c);d.changeFovLog((0<c?1:-1)*Qb,j);d.dirty=j;a.preventDefault();t()}}function oa(a){a=a?a:window.event;if(!I&&(a.preventDefault(),0<=D)){D=-3;va=ua=0;var a=(new Date).getTime(),c=-1,c=Math.abs(pb-$)+Math.abs(qb-
aa);400>a-ob&&0<=c&&20>c&&(c=Math.abs(Rb-$)+Math.abs(Sb-aa),700>a-d.f&&0<=c&&20>c?(nb&&setTimeout(function(){d.toggleFullscreen()},10),d.f=0):d.f=a,Rb=$,Sb=aa);t()}}function pa(a){var a=a?a:window.event,c=ab();d.mouse.x=a.pageX-c.x;d.mouse.y=a.pageY-c.y;I||(a.preventDefault(),0<=D&&((a.which||0==a.which||1==a.which)&&ga(a.pageX,a.pageY),t()))}function qa(a){if(!I){a=a?a:window.event;a.preventDefault();if((a.which||0==a.which||1==a.which)&&a.target==d.control){var c=a.pageX,a=a.pageY;pb=c;qb=a;$=c;
aa=a;Ja=c;Ka=a;D=1;ob=(new Date).getTime();t()}va=ua=0}}function t(){R&&(R=r,y=C=q=0);La&&(La=r,y=C=q=0);jb=(new Date).getTime()}function ga(a,c){sb=a;tb=c;ua=sb-$;va=tb-aa;ja&&($=sb,aa=tb)}function Y(a,c){var b=d.getVFov();o+=a*b/s;m+=c*b/s;U()}function ha(a){ub=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,ub);vertices=[-1,-1,1,1,-1,1,1,1,1,-1,1,1];for(i=0;12>i;i++)2>i%3&&(vertices[i]*=a);e.bufferData(e.ARRAY_BUFFER,new Float32Array(vertices),e.STATIC_DRAW);vb=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,
vb);e.bufferData(e.ARRAY_BUFFER,new Float32Array([1,0,0,0,0,1,1,1]),e.STATIC_DRAW);wb=e.createBuffer();e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,wb);e.bufferData(e.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3]),e.STATIC_DRAW)}function ia(){var a,c;if(M)for(;0<M.length;)e.deleteTexture(M.pop());M=[];for(var b=0;6>b;b++)c=e.createTexture(),c.i=k,c.g=k,c.m=r,a=new Image,a.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYBgeACDAAADIAAE3iTbkAAAAAElFTkSuQmCC",
c.v=a,a.addEventListener&&a.addEventListener("load",T(c),r),Aa[b]&&(a=new Image,a.src=K(Aa[b]),c.i=a,a.addEventListener&&a.addEventListener("load",T(c),r),d.checkLoaded.push(a)),M.push(c);for(b=0;6>b;b++)Pa[b]&&(a=new Image,a.src=K(Pa[b]),a.addEventListener?a.addEventListener("load",T(M[b]),r):a.onload=T(M[b]),M[b].g=a,d.checkLoaded.push(a))}function K(a){return a?"/"==a.charAt(0)||0<a.indexOf("://")?a:Ba+a:Ba}function T(a){return function(){try{e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,j),a.g!=k&&a.g.complete?
(e.bindTexture(e.TEXTURE_2D,a),a.m||(e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,a.g),a.m=j)):a.i!=k&&a.i.complete?e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,a.i):e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,a.v),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),
e.bindTexture(e.TEXTURE_2D,k)}catch(c){}d.dirty=j}}function U(){var a,c;l<W&&(l=W);l>V&&(l=V);c=d.getVFov()/2;a=180*Math.atan(B/s*Math.tan(c*Math.PI/180))/Math.PI;2*c>ca-da&&(c=(ca-da)/2);d.setVFov(2*c);90>ca?m+c>ca&&(m=ca-c):m>ca&&(m=ca);-90<da?m-c<da&&(m=da+c):m<da&&(m=da);if(359.99>xa-ya){var b=0;if(0!=m){var e,f=s/2;e=f*Math.tan(c*Math.PI/180);f/=Math.tan(Math.abs(m)*Math.PI/180);f-=e;0<f&&(b=180*Math.atan(1/(f/e))/Math.PI,b=b*(xa-ya)/360)}o+(a+b)>xa&&(o=xa-(a+b),R&&(ba=-ba,q=0));o-(a+b)<ya&&
(o=ya+(a+b),R&&(ba=-ba,q=0));90<m+c&&(m=90-c);-90>m-c&&(m=-90+c)}}function ab(){var a={x:0,y:0},c=u;if(c.offsetParent){do a.x+=c.offsetLeft,a.y+=c.offsetTop;while(c=c.offsetParent)}return a}function la(){d.setViewerSize(d.e.offsetWidth,d.e.offsetHeight)}function ra(a){if(debug=document.getElementById("debug"))debug.innerHTML=a+"<br />";window.console&&window.console.log(a)}function Wb(a){var c="",b,d,e="",f,h="",g=0,a=a.replace(/[^A-Za-z0-9\+\/\=]/g,"");do b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(g++)),
d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(g++)),f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(g++)),h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(g++)),b=b<<2|d>>4,d=(d&15)<<4|f>>2,e=(f&3)<<6|h,c+=String.fromCharCode(b),64!=f&&(c+=String.fromCharCode(d)),64!=h&&(c+=String.fromCharCode(e));while(g<a.length);return c}function Yb(a,c){var b=this;b.B=a;b.hotspot=c;this.__div=
document.createElement("div");b.j=document.createElement("img");var d;b.j.setAttribute("src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA5xJREFUeNqclmlIVFEUx997TjrplFQW2WKBBSYtRFlpWUILSSsRZRQIBdGHCFqIoKIvQRsUFRJC9LEgaSFbMMpcWi1pLzOLsjItKms0U5t5/c/wH7nc5o2jF374xrv87z33nHOPaRsRtbFgDpgJxoD+wATfwDNQDK6CyrCr5OcbhgiGIRsUAZt4QTWoIFXgp9JfAhY7rgdBl8NeBoLDYBloA+dBOagFTcDHcVEgDgwBGWA+OAcugvXgvb5wKMGJoAAMp9BpUA96EBf/Btsf8BI8AWfAErAcpHHDZeriliY2AVwDg8AucAQ0Ag+I4XhTm2Oxz8PT46KMbTx5EZjuJDgAnAVusJUm9DhYwalFcc59sIXXIaceFkowDySBPTRPL20xm+b7zYXa+N3CPrWJ6GuwGySA40HLBHc/GywFhbS5R1lEBrZy7FQwiSaX9pmnqeAYt+KUcew7BVZw/QKTq0ocpYPVvDOXItZCk2xgDIZqL8BR8Ab0VDbr4yZOgLeIwzQx6WiQxcCt1+6sld66L4yYtFSwF4yg2dU7/cEwGW9YVkAwmycp1dzdpvgm0DcCh4kHmxWzBls0uBX4qqmZJ4KzePm1IeJLgjmlC16aDKZpp5Q168B3o6wsSwTHgU+MIUs74RSj6y1d+212HKimJlUE+tFRfJpYtOKNXWmJTASqWf2Bu/R6+4TKHOrOzG4IhptjWgHbGkZvepQ6SQK7oRuCXzjX1DJavBEX1ygfT8FgBqpfm1zRDcEKbR2bsZlkJCdXieB1ZhZ5YtqVgXIPN+m9kbY6hpdb+d9fPncJRmZmqQheZkemJmgxyxykl3XWJEkcAl7N21s7PDcl5ZJ0PAa3wVwmWtVbZafPwQ7wLozYB7ATPNJO56d/LAikP9u+66KNJS1d4IOZp7wU0hfLukUyzgwm70T2N/DOxIy/eFdqawa5DL2NEGwP5k15Ja4woz9glvcomd9NzyvkFcQo5gomaLfm5c0svnKZ2k7q7+FauvR2MJKZR3+sY5WgtvkdG6JyELGhNHMTXyGfLviRJ5Tcd4Dlhle7086Sgp8CqVxDkn4OqHaqacr5ekjy3Q/W0FRNNGmoMtamdzdxsytZC0lqXKhEgWPVVgImg2NgFT1MHOoOk3yLEtgWN5TEOYvoIFI1rGM19//2wpAD7imF7lfwENwAxaASNCj90pcLLKdC2Iyw1M9gnEplMEp5kOU1f8WwKGJm8oUr9f8JMAAVMDM6HSDa9QAAAABJRU5ErkJggg%3D%3D");
b.j.setAttribute("style","position: absolute;top: -14px;left: -14px;");this.__div.appendChild(b.j);d="position:absolute;"+(F+"user-select: none;");this.__div.setAttribute("style",d);this.__div.onclick=function(){b.B.openUrl(c.url,c.target)};b.text=document.createElement("div");d="position:absolute;"+("left: -"+c.w/2+"px;");d=d+"top:  20px;"+("width: "+c.w+"px;");d=0==c.h?d+"height: auto;":d+("height: "+c.h+"px;");c.wordwrap?d=d+"white-space: pre-wrap;"+("width: "+c.w+"px;"):(d=0==c.h?d+"width: auto;":
d+("width: "+c.w+"px;"),d+="white-space: nowrap;");d+=F+"transform-origin: 50% 50%;";b.text.setAttribute("style",d+"visibility: hidden;border: 1px solid #000000;background-color: #ffffff;text-align: center;overflow: hidden;padding: 0px 1px 0px 1px;");b.text.innerHTML=c.title;this.__div.onmouseover=function(){0==c.h&&(w=b.text.offsetWidth,b.text.style.left=-w/2+"px");b.text.style.visibility="inherit"};this.__div.onmouseout=function(){b.text.style.visibility="hidden"};this.__div.appendChild(b.text)}
var d=this;this.transitionsDisabled=r;var o=0,xb=0,ya=0,xa=360,q=0,m=0,yb=0,da=-90,ca=90,C=0,l=90,Xa=90,W=1,V=170,$a=0,y=0,zb=0,Ob,Nb,B=320,s=480,pb=0,qb=0,$=0,aa=0,Rb=0,Sb=0,sb=0,tb=0,ua=0,va=0,D=-1,Jb=0,Kb=0,Na=0,Oa=0,Lb=0,Mb=0,ob,fb=j,Ja=0,Ka=0,P=0,Q=0,Sa=r,L=0,wa=0,u=k,X=k,E=k,ea=k,N=k,G=k;this.control=k;this.cubeFaces=[];this.cubeFacesOverlay=[];this.checkLoaded=[];this.dirty=this.isFullscreen=r;this.divSkin=k;this.hasConfig=this.isLoaded=r;this.onMoveComplete=k;var Ua=0,Pa=[],Ab=[],Aa=[],Bb=
1,Qa=1,Ta=r,Ma=r,kb=5,R=r,ba=0.4,Wa=0,La=r,Va=0.1,gb=0,hb=0,ib,jb;this.skinObj=k;this.userdata={title:"",description:"",author:"",datetime:"",copyright:"",source:"",information:"",comment:""};var J=[];this.emptyHotspot={pan:0,tilt:0,title:"",url:"",target:"",id:"",skinid:"",w:100,h:20,wordwrap:r,obj:k};var h=[],Z=1,ka=0,za=0.01,Ib=2,lb=0,Ya=r,Hb=r,sa=0,ta=0,db=0,eb=0,Za=r,I=r,rb=r,ja=j,Pb=r,Qb=1,nb=j;this.hotspot=this.emptyHotspot;this.mouse={x:0,y:0};var ma=r,Tb=r,Ub=j,mb=r,Ba="",F="",Cb="transition",
Ca="transform",Db="perspective",e,Xb=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){window.setTimeout(a,10)}}();this.detectBrowser=function(){var a=["Webkit","Moz","O","ms","Ms"],c;F="";Cb="transition";Ca="transform";Db="perspective";for(c=0;c<a.length;c++)"undefined"!==typeof document.documentElement.style[a[c]+"Transform"]&&(F="-"+a[c].toLowerCase()+"-",
Cb=a[c]+"Transition",Ca=a[c]+"Transform",Db=a[c]+"Perspective");Tb=Gb();ma=Vb();ra((Tb?"CSS 3D available":"CSS 3D not available")+", "+(ma?"WebGL available":"WebGL not available"))};this.getPercentLoaded=function(){return Ua};this.setBasePath=function(a){Ba=a};this.l=function(){return 1*s/(2*Math.tan(Math.PI/180*(d.getVFov()/2)))};this.setViewerSize=function(a,c){d.isFullscreen&&(a=window.innerWidth,c=window.innerHeight);var b=a-sa-db,f=c-ta-eb;u.style.width=b+"px";u.style.height=f+"px";u.style.left=
sa+"px";u.style.top=ta+"px";if(ma)try{X&&(X.width=b,X.height=f),e&&(e.t=b,e.s=f,e.viewport(0,0,b,f))}catch(h){alert(h)}G.style.width=a+"px";G.style.height=c+"px";d.updatePanorama();d.divSkin&&d.divSkin.ggUpdateSize&&d.divSkin.ggUpdateSize(a,c)};this.setMargins=function(a,c,b,d){sa=a;ta=c;db=b;eb=d;la()};this.changeViewMode=function(a){0==a&&(ja=r);1==a&&(ja=j);2==a&&(ja=ja?r:j)};this.getVFov=function(){var a;switch(zb){case 0:a=l/2;break;case 1:a=180*Math.atan(s/B*Math.tan(l/2*Math.PI/180))/Math.PI;
break;case 2:a=180*Math.atan(s/Math.sqrt(B*B+s*s)*Math.tan(l/2*Math.PI/180))/Math.PI;break;case 3:a=4*s/3>B?l/2:180*Math.atan(4*s/(3*B)*Math.tan(l/2*Math.PI/180))/Math.PI}return 2*a};this.setVFov=function(a){var a=a/2,c;switch(zb){case 0:l=2*a;break;case 1:a=180*Math.atan(B/s*Math.tan(a*Math.PI/180))/Math.PI;l=2*a;break;case 2:c=Math.sqrt(B*B+s*s);a=180*Math.atan(c/s*Math.tan(a*Math.PI/180))/Math.PI;l=2*a;break;case 3:4*s/3>B||(a=180*Math.atan(3*B/(4*s)*Math.tan(a*Math.PI/180))/Math.PI),l=2*a}};this.updatePanorama=
function(){for(var a=new Ra,c=d.l(),b=0;b<J.length;b++){var f=J[b];a.set(0,0,-100);a.o(-f.tilt*Math.PI/180);a.p(f.pan*Math.PI/180);a.p(-o*Math.PI/180);a.o(m*Math.PI/180);var h=r;if(0.1>a.c){var g=-c/a.c,l=a.x*g,g=a.y*g;Math.abs(l)<B/2+500&&Math.abs(g)<s/2+500&&(h=j)}else g=l=0;f.obj&&f.obj.__div&&(f.obj.__div.style[Cb]="none",h?(f.obj.__div.style.left=sa+l+B/2+"px",f.obj.__div.style.top=ta+g+s/2+"px"):(f.obj.__div.style.left="-100px",f.obj.__div.style.top="-100px"))}if(ma){U();if(B!=u.offsetWidth||
s!=u.offsetHeight)B=parseInt(u.offsetWidth),s=parseInt(u.offsetHeight);Ub&&(d.initWebGL(0),la());if(e){e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT);Eb(bb);f=d.getVFov();c=e.t/e.s;f=0.1*Math.tan(f*Math.PI/360);c*=f;a=-c;b=-f;(h=bb)||(h=new glMatrixArrayType(16));l=c-a;g=f-b;h[0]=0.2/l;h[1]=0;h[2]=0;h[3]=0;h[4]=0;h[5]=0.2/g;h[6]=0;h[7]=0;h[8]=(c+a)/l;h[9]=(f+b)/g;h[10]=-100.1/99.9;h[11]=-1;h[12]=0;h[13]=0;h[14]=-20/99.9;h[15]=0;e.uniformMatrix4fv(x.n,r,bb);for(v=0;6>v;v++)Eb(Da),Fb(Da,-m*Math.PI/
180,[1,0,0]),Fb(Da,(180-o)*Math.PI/180,[0,1,0]),4>v?Fb(Da,-Math.PI/2*v,[0,1,0]):Fb(Da,Math.PI/2*(5==v?1:-1),[1,0,0]),e.bindBuffer(e.ARRAY_BUFFER,ub),e.vertexAttribPointer(x.r,3,e.FLOAT,r,0,0),e.bindBuffer(e.ARRAY_BUFFER,vb),e.vertexAttribPointer(x.q,2,e.FLOAT,r,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,M[v]),e.uniform1i(x.C,0),e.uniformMatrix4fv(x.z,r,Da),e.uniformMatrix4fv(x.n,r,bb),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,wb),e.drawElements(e.TRIANGLES,6,e.UNSIGNED_SHORT,0)}}else{U();
a=r;if(B!=u.offsetWidth||s!=u.offsetHeight)B=parseInt(u.offsetWidth),s=parseInt(u.offsetHeight),u.style[Ca+"OriginX"]=B/2+"px",u.style[Ca+"OriginY"]=s/2+"px",a=j;c=Math.round(d.l());if(d.k!=c||a)d.k=c,u.style[Db]=c;N&&(N.style[Ca]="translate3d("+B/2+"px,"+s/2+"px,"+c+"px)");ea&&(ea.style[Ca]="rotateX("+Number(m).toFixed(10)+"deg)  rotateY("+Number(-o).toFixed(10)+"deg)")}};var x;this.initWebGL=function(a){Ub=r;try{if(X=a?a:document.createElement("canvas"),X.width=100,X.height=100,u.appendChild(X),
(e=X.getContext("webgl"))||(e=X.getContext("experimental-webgl")),e){e.t=500;e.s=500;e.clearColor(0,0,0,0);e.enable(e.DEPTH_TEST);e.viewport(0,0,500,500);e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT);e.enable(e.TEXTURE_2D);var c=e.createShader(e.FRAGMENT_SHADER);hs="#ifdef GL_ES\n";hs+="precision highp float;\n";hs+="#endif\n";hs+="varying vec2 vTextureCoord;\n";hs+="uniform sampler2D uSampler;\n";hs+="void main(void) {\n";hs+="    gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.s, vTextureCoord.t));\n";
hs+="}\n";e.shaderSource(c,hs);e.compileShader(c);e.getShaderParameter(c,e.COMPILE_STATUS)||(alert(e.getShaderInfoLog(c)),c=k);var b=e.createShader(e.VERTEX_SHADER);hs="attribute vec3 aVertexPosition;\n";hs+="attribute vec2 aTextureCoord;\n";hs+="uniform mat4 uMVMatrix;\n";hs+="uniform mat4 uPMatrix;\n";hs+="varying vec2 vTextureCoord;\n";hs+="void main(void) {\n";hs+="    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\n";hs+="    vTextureCoord = aTextureCoord;\n";hs+="}\n";e.shaderSource(b,
hs);e.compileShader(b);e.getShaderParameter(b,e.COMPILE_STATUS)||(alert(e.getShaderInfoLog(b)),b=k);x=e.createProgram();e.attachShader(x,b);e.attachShader(x,c);e.linkProgram(x);e.getProgramParameter(x,e.LINK_STATUS)||alert("Could not initialise shaders");e.useProgram(x);x.r=e.getAttribLocation(x,"aVertexPosition");e.enableVertexAttribArray(x.r);x.q=e.getAttribLocation(x,"aTextureCoord");e.enableVertexAttribArray(x.q);x.n=e.getUniformLocation(x,"uPMatrix");x.z=e.getUniformLocation(x,"uMVMatrix");x.C=
e.getUniformLocation(x,"uSampler");ha(Qa);ia()}}catch(d){ra(d)}e?ma=j:alert("Could not initialise WebGL!")};var M=[],Da=new glMatrixArrayType(16),bb=new glMatrixArrayType(16),ub,vb,wb;this.getPan=function(){return o};this.getPanDest=function(){return gb};this.getPanN=function(){for(var a=o;-180>a;)a+=360;for(;180<a;)a-=360;return a};this.setPan=function(a){t();isNaN(a)||(o=Number(a));d.dirty=j};this.changePan=function(a,c){d.setPan(d.getPan()+a);c&&(q=a)};this.getTilt=function(){return m};this.getTiltDest=
function(){return hb};this.setTilt=function(a){t();isNaN(a)||(m=Number(a));d.dirty=j};this.changeTilt=function(a,c){d.setTilt(d.getTilt()+a);c&&(C=a)};this.getFov=function(){return l};this.getFovDest=function(){return ib};this.setFov=function(a){t();if(!isNaN(a)&&0<a&&180>a){var c=l;l=Number(a);U();d.dirty|=c!=l}};this.changeFov=function(a,c){d.setFov(d.getFov()+a);c&&(y=a)};this.changeFovLog=function(a,c){if(!isNaN(a)){var b;b=a/90*Math.cos(l*Math.PI/360);b=l*Math.exp(b);d.setFov(b);c&&(y=a)}};this.setPanTilt=
function(a,c){t();isNaN(a)||(o=a);isNaN(c)||(m=c);d.dirty=j};this.setPanTiltFov=function(a,c,b){t();isNaN(a)||(o=a);isNaN(c)||(m=c);!isNaN(b)&&0<b&&180>b&&(l=b);d.dirty=j};this.setDefaultView=function(){d.setPanTiltFov(xb,yb,Xa)};this.setLocked=function(a){d.setLockedMouse(a);d.setLockedWheel(a);d.setLockedKeyboard(a)};this.setLockedMouse=function(a){I=a};this.setLockedKeyboard=function(a){Za=a};this.setLockedWheel=function(a){rb=a};this.moveTo=function(a,c,b,d){t();La=j;var e=a.toString().split("/");
1<e.length&&(a=Number(e[0]),d=c,c=Number(e[1]),2<e.length&&(b=Number(e[2])));gb=isNaN(a)?o:a;hb=isNaN(c)?m:c;ib=!isNaN(b)&&0<b&&180>b?b:l;Va=!isNaN(d)&&0<d?d:1};this.moveToDefaultView=function(a){d.moveTo(xb,yb,Xa,a)};t();this.u=function(){var a;a=G;d.control=a;p();setTimeout(function(){z()},10);setTimeout(function(){la();d.updatePanorama()},10);a.addEventListener?(a.addEventListener("touchstart",Ia,r),a.addEventListener("touchmove",Ha,r),a.addEventListener("touchend",Ga,r),a.addEventListener("touchcancel",
Fa,r),a.addEventListener("gesturestart",Ea,r),a.addEventListener("gesturechange",O,r),a.addEventListener("gestureend",na,r),a.addEventListener("mousedown",qa,r),a.addEventListener("mousemove",pa,r),document.addEventListener("mouseup",oa,r),a.addEventListener("mousedblclick",d.toggleFullscreen,r),a.addEventListener("mousewheel",fa,r),a.addEventListener("DOMMouseScroll",fa,r),document.addEventListener("keydown",S,r),document.addEventListener("keyup",H,r),window.addEventListener("orientationchange",
p,r),window.addEventListener("resize",la,r),window.addEventListener("blur",A,r)):a.attachEvent&&(a.attachEvent("onmousedown",qa),a.attachEvent("onmousemove",pa),document.attachEvent("onmouseup",oa),a.attachEvent("onmousedblclick",this.toggleFullscreen),a.attachEvent("onmousewheel",fa),document.attachEvent("onkeydown",S),document.attachEvent("onkeyup",H),window.attachEvent("onresize",la),window.attachEvent("onblur",A));a.oncontextmenu=function(a){void 0===a&&(a=window.event);return!a.ctrlKey&&(a="<<U>>",
"U"!=a.charAt(2))?(g(),r):j}};this.addHotspotElements=function(){for(var a=0;a<J.length;a++)if(J[a].obj=d.skinObj&&d.skinObj.addSkinHotspot?new d.skinObj.addSkinHotspot(J[a]):new Yb(this,J[a]),J[a].obj&&J[a].obj.__div){var c=G.firstChild;c?G.insertBefore(J[a].obj.__div,c):G.appendChild(J[a].obj.__div)}};this.playSound=function(a,c){for(var b=-1,d=0;d<h.length;d++)h[d].id==a&&(b=d);0<=b&&(h[b].obj.d=c&&!isNaN(Number(c))?Number(c)-1:h[b].loop-1,-1==h[b].obj.d&&(h[b].obj.d=1E7),h[b].obj.ended&&h[b].obj.load(),
h[b].obj.play())};this.pauseSound=function(a){if("_main"==a)for(var c=0;c<h.length;c++)h[c].obj.pause();else{for(var b=-1,c=0;c<h.length;c++)h[c].id==a&&(b=c);0<=b&&h[b].obj.pause()}};this.stopSound=function(a){if("_main"==a)for(var c=0;c<h.length;c++)h[c].obj.pause(),h[c].obj.currentTime=0;else{for(var b=-1,c=0;c<h.length;c++)h[c].id==a&&(b=c);0<=b&&(h[b].obj.pause(),h[b].obj.currentTime=0)}};this.setVolume=function(a,c){var b=Number(c);1<b&&(b=1);0>b&&(b=0);if("_main"==a){Z=b;for(var d=0;d<h.length;d++)h[d].obj.volume=
h[d].b*Z}else{for(var e=-1,d=0;d<h.length;d++)h[d].id==a&&(e=d);0<=e&&(h[e].b=b,h[e].obj.volume=b*Z)}};this.changeVolume=function(a,c){if("_main"==a){var b=Z,b=b+Number(c);1<b&&(b=1);0>b&&(b=0);Z=b;for(b=0;b<h.length;b++)h[b].obj.volume=h[b].b*Z}else{for(var d=-1,b=0;b<h.length;b++)h[b].id==a&&(d=b);0<=d&&(b=h[d].b,b+=Number(c),1<b&&(b=1),0>b&&(b=0),h[d].b=b,h[d].obj.volume=b*Z)}};this.removeHotspots=function(){for(var a;0<J.length;)a=J.pop(),G.removeChild(a.obj.__div),delete a.obj,a.obj=k};this.setFullscreen=
function(a){d.isFullscreen!=a&&(d.isFullscreen=a,d.dirty=j);d.isFullscreen?(E.style.position="absolute",a=ab(),E.style.left=window.pageXOffset-a.x+sa+"px",E.style.top=window.pageYOffset-a.y+ta+"px",document.body.style.overflow="hidden",d.divSkin&&d.divSkin.ggEnterFullscreen&&d.divSkin.ggEnterFullscreen()):(E.style.position="relative",E.style.left="0px",E.style.top="0px",document.body.style.overflow="",d.divSkin&&d.divSkin.ggExitFullscreen&&d.divSkin.ggExitFullscreen());la()};this.toggleFullscreen=
function(){d.setFullscreen(!d.isFullscreen)};this.exitFullscreen=function(){d.setFullscreen(r)};this.startAutorotate=function(a,c,b){R=Ma=j;a&&0!=a&&(ba=a);c&&(kb=c);b&&(Wa=b)};this.stopAutorotate=function(){Ma=R=r};this.toggleAutorotate=function(){R=Ma=!R};this.createLayers=function(a){d.e=document.getElementById(a);d.e?(d.e.innerHTML="",E=document.createElement("div"),E.setAttribute("id","viewport"),E.setAttribute("style","top:  0px;left: 0px;position:relative;"),d.e.appendChild(E),ma?(u=document.createElement("div"),
a="top:  0px;left: 0px;width:  100px;height: 100px;overflow: hidden;position:absolute;"+(F+"user-select: none;"),a+="position:absolute;"):(u=document.createElement("div"),a="top:  0px;left: 0px;width:  100px;height: 100px;overflow: hidden;position:absolute;z-index: 0;"+(F+"user-select: none;")),u.setAttribute("id","viewer"),u.setAttribute("style",a),E.appendChild(u),G=document.createElement("div"),G.setAttribute("id","hotspots"),a="top:  0px;left: 0px;width:  100px;height: 100px;overflow: hidden;position:absolute;z-index: 1000;",
0<=navigator.userAgent.indexOf("MSIE")&&(a+="background-image: url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7);"),a+=F+"user-select: none;",G.setAttribute("style",a),E.appendChild(G),d.divSkin=G):alert("container not found!")};this.createCube=function(){var a;N=document.createElement("div");a="position:absolute;"+(F+"user-select: none;");a+=F+"transform-style: preserve-3d;";N.setAttribute("style",a+"z-Index: 100;");N.setAttribute("id","divPanoview");u.appendChild(N);
ea=document.createElement("div");a=F+"transform-style: preserve-3d;";a+=F+"transform-origin: 0 0;";a=a+"position:absolute;"+(F+"user-select: none;");ea.setAttribute("style",a+"z-Index: 100;");N.appendChild(ea);var c,b;Ta=j;var e=128;Bb>e&&(e=Bb);for(b=0;6>b;b++)c=document.createElement("img"),Ta?""!=Aa[b]&&c.setAttribute("src",K(Aa[b])):c.setAttribute("src",K(Pa[b])),a="position:absolute;",a+="left: 0px;",a+="top: 0px;",a+="width: "+e+"px;",a+="height: "+e+"px;",a+="z-index: 100;",a+=F+"transform-origin: 0 0;",
a+=F+"transform: ",a=4>b?a+("rotateY("+-90*b+"deg)"):a+("rotateX("+(4==b?-90:90)+"deg)"),a+=" scale("+Qa+") translate3d("+-e/2+"px,"+-e/2+"px,"+-e/2+"px);",c.setAttribute("style",a),ea.appendChild(c),d.cubeFaces.push(c),d.checkLoaded.push(c),""!=Ab[b]&&(c=document.createElement("img"),c.setAttribute("src",K(Ab[b])),a="position:absolute;",a+="left: 0px;",a+="top: 0px;",a+="width: "+e/1.1+"px;",a+="height: "+e/1.1+"px;",a+="z-index: 100;",a+=F+"transform-origin: 0 0;",a+=F+"transform: ",a=4>b?a+("rotateY("+
-90*b+"deg)"):a+("rotateX("+(4==b?-90:90)+"deg)"),a+=" scale("+Qa+") translate3d("+-e/2.2+"px,"+-e/2.2+"px,"+-e/2.2+"px);",c.setAttribute("style",a),c.style.opacity=0,ea.appendChild(c),d.cubeFacesOverlay.push(c),d.checkLoaded.push(c))};this.finalPanorama=function(){var a;if(N)for(a=0;6>a;a++)d.cubeFaces[a].setAttribute("src",K(Pa[a]))};this.setOverlayOpacity=function(a){var c;if(N)for(c=0;6>c;c++)d.cubeFacesOverlay[c]&&d.cubeFacesOverlay[c].style&&(d.cubeFacesOverlay[c].style.opacity=a)};this.removePanorama=
function(){var a;if(N){for(a=0;a<d.cubeFaces.length;a++)d.cubeFaces[a].setAttribute("src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYBgeACDAAADIAAE3iTbkAAAAAElFTkSuQmCC"),d.cubeFacesOverlay[a]&&d.cubeFacesOverlay[a].setAttribute("src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYBgeACDAAADIAAE3iTbkAAAAAElFTkSuQmCC");u.removeChild(N);
N=ea=k;d.cubeFaces=[];d.cubeFacesOverlay=[]}if(e&&M)for(;0<M.length;)e.deleteTexture(M.pop())};this.getScreenResolution=function(){var a=1;window.devicePixelRatio&&(a=window.devicePixelRatio);return{w:screen.width*a,h:screen.height*a}};this.getMaxScreenResolution=function(){var a=d.getScreenResolution();return a.w>a.h?a.w:a.h};this.readConfigString=function(a){window.DOMParser?(parser=new DOMParser,xmlDoc=parser.parseFromString(a,"text/xml")):(xmlDoc=new ActiveXObject("Microsoft.XMLDOM"),xmlDoc.async=
"false",xmlDoc.loadXML(a));d.readConfigXml(xmlDoc)};this.readConfigUrl=function(a,c){try{var b;b=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");b.open("GET",a,r);b.send(k);if(b.responseXML){var e=a.lastIndexOf("/");0<=e&&(Ba=a.substr(0,e+1));2<=arguments.length&&(Ba=c);d.readConfigString(b.responseText)}else alert("Error loading panorama XML")}catch(f){alert("Error:"+f)}};var cb=j;this.readConfigXml=function(a){d.removeHotspots();d.removePanorama();d.k=0;for(var a=
a.firstChild.firstChild,c,b,f,h=1E6;a;){if("view"==a.nodeName){(b=a.getAttributeNode("fovmode"))&&(zb=Number(b.nodeValue));for(c=a.firstChild;c;)"start"==c.nodeName&&(b=c.getAttributeNode("pan"),xb=o=Number(b?b.nodeValue:0),b=c.getAttributeNode("tilt"),yb=m=Number(b?b.nodeValue:0),b=c.getAttributeNode("fov"),Xa=l=Number(b?b.nodeValue:70)),"min"==c.nodeName&&(b=c.getAttributeNode("pan"),ya=1*(b?b.nodeValue:0),b=c.getAttributeNode("tilt"),da=1*(b?b.nodeValue:-90),b=c.getAttributeNode("fov"),W=1*(b?
b.nodeValue:5),1.0E-8>W&&(W=1.0E-8)),"max"==c.nodeName&&(b=c.getAttributeNode("pan"),xa=1*(b?b.nodeValue:0),b=c.getAttributeNode("tilt"),ca=1*(b?b.nodeValue:90),b=c.getAttributeNode("fov"),V=1*(b?b.nodeValue:120),180<=V&&(V=179.9)),c=c.nextSibling}"autorotate"==a.nodeName&&((b=a.getAttributeNode("speed"))&&(ba=1*b.nodeValue),(b=a.getAttributeNode("delay"))&&(kb=1*b.nodeValue),(b=a.getAttributeNode("returntohorizon"))&&(Wa=1*b.nodeValue),cb&&0!=ba&&(R=Ma=j));"input"==a.nodeName&&(f||(f=a));if(f)for(c=
0;6>c;c++)b=f.getAttributeNode("prev"+c+"url"),Aa[c]=b?new String(b.nodeValue):"";"altinput"==a.nodeName&&(c=0,(b=a.getAttributeNode("screensize"))&&(c=1*b.nodeValue),0<c&&c>=d.getMaxScreenResolution()&&c<h&&(h=c,f=a));"control"==a.nodeName&&cb&&((b=a.getAttributeNode("simulatemass"))&&(fb=1==b.nodeValue),(b=a.getAttributeNode("locked"))&&(I=1==b.nodeValue),b&&(Za=1==b.nodeValue),(b=a.getAttributeNode("lockedmouse"))&&(I=1==b.nodeValue),(b=a.getAttributeNode("lockedkeyboard"))&&(Za=1==b.nodeValue),
(b=a.getAttributeNode("lockedwheel"))&&(rb=1==b.nodeValue),(b=a.getAttributeNode("invertwheel"))&&(Pb=1==b.nodeValue),(b=a.getAttributeNode("speedwheel"))&&(Qb=1*b.nodeValue),(b=a.getAttributeNode("invertcontrol"))&&(ja=1==b.nodeValue),(b=a.getAttributeNode("dblclickfullscreen"))&&(nb=1==b.nodeValue));"overlay"==a.nodeName&&((b=a.getAttributeNode("blendspeed"))&&(za=1*b.nodeValue),(b=a.getAttributeNode("auto"))&&(Hb=1==b.nodeValue),(b=a.getAttributeNode("delay"))&&(Ib=1*b.nodeValue));"userdata"==
a.nodeName&&(b=a.getAttributeNode("title"),d.userdata.title=b?b.nodeValue.toString():"",b=a.getAttributeNode("description"),d.userdata.description=b?b.nodeValue.toString():"",b=a.getAttributeNode("author"),d.userdata.author=b?b.nodeValue.toString():"",b=a.getAttributeNode("datetime"),d.userdata.datetime=b?b.nodeValue.toString():"",b=a.getAttributeNode("copyright"),d.userdata.copyright=b?b.nodeValue.toString():"",b=a.getAttributeNode("source"),d.userdata.source=b?b.nodeValue.toString():"",b=a.getAttributeNode("info"),
d.userdata.information=b?b.nodeValue.toString():"",b=a.getAttributeNode("comment"),d.userdata.comment=b?b.nodeValue.toString():"");if("hotspots"==a.nodeName)for(c=a.firstChild;c;){if("hotspot"==c.nodeName){var g={pan:0,tilt:0,url:"",target:"",id:"",skinid:"",w:100,h:20,wordwrap:r,obj:k};b=c.getAttributeNode("pan");g.pan=1*(b?b.nodeValue:0);b=c.getAttributeNode("tilt");g.tilt=1*(b?b.nodeValue:0);(b=c.getAttributeNode("url"))&&(g.url=b.nodeValue.toString());(b=c.getAttributeNode("target"))&&(g.target=
b.nodeValue.toString());(b=c.getAttributeNode("title"))&&(g.title=b.nodeValue.toString());(b=c.getAttributeNode("id"))&&(g.id=b.nodeValue.toString());(b=c.getAttributeNode("skinid"))&&(g.skinid=b.nodeValue.toString());(b=a.getAttributeNode("width"))&&(g.w=b.nodeValue.toString());(b=a.getAttributeNode("height"))&&(g.h=b.nodeValue.toString());(b=a.getAttributeNode("wordwrap"))&&(g.wordwrap=1==b.nodeValue);J.push(g)}c=c.nextSibling}if("sounds"==a.nodeName)for(c=a.firstChild;c;){if("sound"==c.nodeName){g=
{id:"",url:"",loop:0,b:1,mode:1,pan:0,tilt:0,A:0,D:0};if(b=c.getAttributeNode("id"))g.id=b.nodeValue.toString();if(b=c.getAttributeNode("url"))g.url=b.nodeValue.toString();if(b=c.getAttributeNode("level"))g.b=Number(b.nodeValue);if(b=c.getAttributeNode("loop"))g.loop=Number(b.nodeValue);if(b=c.getAttributeNode("mode"))g.mode=Number(b.nodeValue);if(b=c.getAttributeNode("pan"))g.pan=Number(b.nodeValue);if(b=c.getAttributeNode("tilt"))g.tilt=Number(b.nodeValue);if(b=c.getAttributeNode("pansize"))g.A=
Number(b.nodeValue);if(b=c.getAttributeNode("tiltsize"))g.D=Number(b.nodeValue);n(g)}c=c.nextSibling}a=a.nextSibling}if(f){for(c=0;6>c;c++)(b=f.getAttributeNode("tile"+c+"url"))&&(Pa[c]=new String(b.nodeValue)),b=f.getAttributeNode("tile"+c+"url1"),Ab[c]=b?new String(b.nodeValue):"";for(c=0;6>c;c++)(b=f.getAttributeNode("prev"+c+"url"))&&(Aa[c]=new String(b.nodeValue));(b=f.getAttributeNode("tilesize"))&&(Bb=1*b.nodeValue);(b=f.getAttributeNode("tilescale"))&&(Qa=1*b.nodeValue)}ma?e&&(ha(Qa),ia()):
(d.createCube(),d.k=0);d.addHotspotElements();d.dirty=j;cb&&d.divSkin&&d.divSkin.ggViewerInit&&d.divSkin.ggViewerInit();cb=r;d.hasConfig=j;la()};this.openUrl=function(a,c){0<a.length&&(-1==a.indexOf("://")&&"/"!=a.substr(0,1)&&(a=Ba+a),".xml"==a.substr(a.length-4)||".swf"==a.substr(a.length-4)?d.openNext(a,c):window.open(a,c))};this.openNext=function(a,c){d.isLoaded=r;d.hasConfig=r;d.checkLoaded=[];d.divSkin&&d.divSkin.ggReLoaded&&d.divSkin.ggReLoaded();Ua=0;d.skinObj&&d.skinObj.hotspotProxyOut&&
d.skinObj.hotspotProxyOut(d.hotspot.id);".swf"==a.substr(a.length-4)&&(a=a.substr(0,a.length-4)+".xml");var b="";c&&(b=c.toString());b=b.replace("$cur",o+"/"+m+"/"+l);b=b.replace("$ap",o);b=b.replace("$at",m);b=b.replace("$af",l);d.readConfigUrl(a);""!=b&&(b=b.split("/"),0<b.length&&d.setPan(Number(b[0])),1<b.length&&d.setTilt(Number(b[1])),2<b.length&&d.setFov(Number(b[2])));t()};d.detectBrowser();d.createLayers(f);d.u()}window.ggHasHtml5Css3D=Gb;window.ggHasWebGL=Vb;window.pano2vrPlayer=pano2vrPlayer;
