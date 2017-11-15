define("mx-menu/index",["magix","$","../mx-monitor/index"],function(e,_,t){var i=e("magix"),n=e("$"),d=e("../mx-monitor/index"),r=i.Vframe;i.applyStyle("_y","._dO{-webkit-transition:margin-left .25s;transition:margin-left .25s}._dP{background-color:#fff;border:1px solid #e6e6e6;border-radius:4px;cursor:default;padding:4px 0}._dQ{height:29px;line-height:29px;cursor:default;border-radius:4px;padding:0 12px;margin:0 4px}._dR{color:#fff;background-color:#6363e6}._dS{margin-left:10px}._dT{margin-left:-10px}._dU{font-size:12px;-webkit-transform:scaleX(-1);transform:scaleX(-1);top:25%;color:#e6e6e6}");var a=null,c={left:"_dT",right:"_dS"},s=function(e,_,t){for(var n={},d={},r=[],a=0,c=e.length;a<c;a++){var s=i.mix({},e[a]);n[s[_]]=s,d[s[_]]&&(s.children=d[s[_]]),i.has(s,t)&&""!==s[t]?n[s[t]]?(n[s[t]].children||(n[s[t]].children=[])).push(s):d[s[t]]?d[s[t]].push(s):d[s[t]]=[s]:r.push(s)}return{list:r,map:n}};t.exports=i.View.extend({tmpl:{html:'<div mx-guid="g0" style="width:<%=$$.width%>px;<%if($$.isChild||$$.contextMenu){%>position:absolute;left:-1000000px<%}%>" mx-mouseover="__dd();" class="_dO" mx-contextmenu="__D()"><ul mx-guid="g1" class="_dP _ai">2</ul></div>',subs:[{keys:["width","isChild","contextMenu"],path:'div[mx-guid="g0"]',attr:'style="width:<%=$$.width%>px;<%if($$.isChild||$$.contextMenu){%>position:absolute;left:-1000000px<%}%>"',attrs:[{n:"style"}]},{keys:["list","valueKey","textKey","viewId"],path:'ul[mx-guid="g1"]',tmpl:'<%for(var a=0,b;a<$$.list.length;a++){b=$$.list[a]%><li class="_ak _dQ" mx-mouseover="__dc({id:\'<%=$eq(b[$$.valueKey])%>\'})" mx-mouseout="__dc({id:\'<%=$eq(b[$$.valueKey])%>\'});\n            " <%if(!b.children){%> mx-click="__bQ({id:\'<%=$eq(b[$$.valueKey])%>\'})" <%}%> title="<%=b[$$.textKey]%>" id="<%=$$.viewId%>_<%=b[$$.valueKey]%>"><%=b[$$.textKey]%> <%if(b.children){%><span class="_aa __ _dU">&#xe61e;</span><%}%></li><%}%>',s:"2"}]},init:function(e){var _=this;_.assign(e),_.__cM=e.__cM,_.__cN=e.__cN,_.__cO=e.picked,_.__cP||(d.__d(),_.on("destroy",function(){d.__f(_),d.__g()}))},assign:function(e){var _=this,t=e.width||340,i=e.valueKey||"id",n=e.parentKey||"pId",d=e.textKey||"text",r=e.__cP;if(r)_.__bT=e.__bT,_.__bE=e.list;else{var a=s(e.list,i,n);_.__bT=a.map,_.__bE=a.list}return _.__cP=r,_.__cQ=t,_.__cR=i,_.__cS=n,_.__cT=d,_.__cU=e.pId,_.__cV=e.__cV,!0},render:function(){var e=this;e.updater.digest({viewId:e.id,contextMenu:e.__cM,isChild:e.__cP,list:e.__bE,width:e.__cQ,valueKey:e.__cR,textKey:e.__cT}),e.__cM&&e.__e(e.__cN)},__i:function(e){var _=this,t=i.inside(e,_.id);if(!t)for(var n=_.owner.children(),d=n.length;d--;){var a=r.get(n[d]);if(a&&(t=a.invoke("__i",e)))break}return t},__e:function(e,_){var t=this;if(!t.__j){t.__j=1;var i=n("#"+t.id+" div"),r=n(document),s=-1,o=-1,l="right",u=i.outerWidth(),f=i.outerHeight(),v=0,m=0;if(_){var p=_.offset();v=_.outerWidth(),m=_.outerHeight(),s=p.left+v,o=p.top}else s=e.pageX,o=e.pageY;s+u>r.width()&&(l="left",(s=s-u-v)<0&&(s=0)),o+f>r.height()&&(o-=f,(o+=m)<0&&(o=0)),_&&("right"==l?s-=10:s+=10);var h=t.__cV||t;a!=h&&(a=h),t.__cP?i.css({left:s,top:o}).addClass(c[l]):i.css({left:s,top:o}),h.__cW||(h.__cW=1,d.__k(t))}},__a:function(){for(var e=this,_=e.owner.children(),t=_.length-1;t>=0;t--){var i=r.get(_[t]);i&&i.invoke("__a")}if(e.__j){e.__j=!1;var a=n("#"+e.id+" div");e.__cP?(a.removeClass(c.left).removeClass(c.right),a.css({left:-1e5}),e.__cP.removeClass("_dR")):(e.__cM&&a.css({left:-1e4}),delete e.__cW,d.__f(e))}},__cY:function(e){clearTimeout(this["__cX"+e])},__d_:function(e,_,t){var i=this;i["__cZ"+_]=setTimeout(i.wrapAsync(function(){var d=i.id+"_menu_"+_,a=r.get(d);a||(n("body").append('<div id="'+d+'" />'),a=i.owner.mountVframe(d,"mx-menu/index",{__cP:n("#"+i.id+"_"+_),width:i.__cQ,valueKey:i.__cR,textKey:i.__cT,parentKey:i.__cS,list:t,pId:_,__cV:i.__cV||i,__bT:i.__bT})),a.invoke("__e",[null,e],!0)}),250)},__da:function(e){var _=this,t=_.id+"_menu_"+e,i=r.get(t);i&&(_["__cX"+e]=setTimeout(_.wrapAsync(function(){i.invoke("__a")}),50))},"__dc<mouseover,mouseout>":function(e){var _=this;if(!i.inside(e.relatedTarget,e.eventTarget)){var t=n(e.eventTarget);t["mouseout"==e.type?"removeClass":"addClass"]("_dR");var d=e.params.id;if(_.__da(_.__db),"mouseover"==e.type){var r=_.__bT[d].children;r&&(_.__cY(d),_.__d_(t,d,r),_.__db=d)}else clearTimeout(_["__cZ"+d])}},"__dd<mouseover>":function(e){var _=this;!i.inside(e.relatedTarget,e.eventTarget)&&(_.__cP||a==_||a&&a.__a(),_.__cP&&(n(_.__cP).addClass("_dR"),_.owner.parent().invoke("__cY",[_.__cU])))},"__bQ<click>":function(e){var _=this,t=_.__cV||_,i=n("#"+t.id),d={type:"pick",item:_.__bT[e.params.id]};i.trigger(d),t.__a();var r=_.__cO;r&&r(d.item)},"__D<contextmenu>":function(e){e.preventDefault()}},{show:function(e,_,t){var d=_.eventTarget;d.id||(d.id=i.guid());var r="ctx_"+d.id,a=i.Vframe.get(r);a?a.invoke("__e",[_],!0):(n("body").append('<div id="'+r+'" />'),t=t||{},i.mix(t,{__cM:1,__cN:_}),a=e.owner.mountVframe(r,"mx-menu/index",t))}})});