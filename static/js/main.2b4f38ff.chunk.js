(this["webpackJsonpflights-app"]=this["webpackJsonpflights-app"]||[]).push([[0],{264:function(e,t,n){},303:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(12),c=n.n(r),o=(n(264),n(23)),s=(n(96),n(100)),l=n(38),u=n(330),j=n(339),h=n(245),p=n.n(h).a.connect("wss://tarea-3-websocket.2021-1.tallerdeintegracion.cl",{path:"/flights"}),d=i.a.createContext(),b=n(327),f=n(328),O=n(27),g=n.n(O),m=n(9),x=g.a.icon({iconUrl:"https://e7.pngegg.com/pngimages/115/289/png-clipart-airplane-silhouette-aircraft-drawing-airplane-hand-wikimedia-commons.png",iconSize:[35,40],shadowSize:[0,0],iconAnchor:[0,0],shadowAnchor:[0,0],popupAnchor:[0,0]});var v=function(e){return Object(m.jsx)(b.a,{position:e.position,icon:x,children:Object(m.jsxs)(f.a,{children:[e.planeCode," "]})})},C=n(329);var y="\n  background-color: ".concat("green",";\n  width: 0.8rem;\n  height: 0.8rem;\n  display: block;\n  left: 0rem;\n  top: 0rem;\n  position: relative;\n  border-radius: 1rem 1rem 0;\n  transform: rotate(45deg);\n  border: 1px solid #FFFFFF"),w=g.a.divIcon({className:"",iconAnchor:[0,0],labelAnchor:[0,0],popupAnchor:[0,0],html:'<span style="'.concat(y,'" />')}),F="\n  background-color: ".concat("red",";\n  width: 0.8rem;\n  height: 0.8rem;\n  display: block;\n  left: 0rem;\n  top: 0rem;\n  position: relative;\n  border-radius: 1rem 1rem 0;\n  transform: rotate(45deg);\n  border: 1px solid #FFFFFF"),S=g.a.divIcon({className:"",iconAnchor:[0,10],labelAnchor:[-6,0],popupAnchor:[0,-36],html:'<span style="'.concat(F,'" />')}),I=function(e){var t="straight"===e.type?"origen "+e.planeCode.toString()+" :"+e.positions[0].toString():null,n="straight"===e.type?"destino "+e.planeCode.toString()+" :"+e.positions[1].toString():null;return Object(m.jsxs)(C.a,{pathOptions:{color:e.color,dashArray:"straight"===e.type?"10,15":"1,0.5",lineJoin:"round",lineCap:"butt"},positions:e.positions,children:[Object(m.jsxs)(f.a,{children:[e.planeCode," "]}),"straight"===e.type?Object(m.jsx)(b.a,{position:e.positions[0],title:t,icon:w}):null,"straight"===e.type?Object(m.jsx)(b.a,{position:e.positions[1],title:n,icon:S}):null]})};var k=function(e){var t=Object(a.useState)({}),n=Object(o.a)(t,2),i=n[0],r=n[1],c=Object(a.useState)([-35,-71]),h=Object(o.a)(c,2),p=h[0],b=h[1],f=Object(a.useState)([]),O=Object(o.a)(f,2),g=O[0],x=O[1],C=Object(a.useContext)(d);return Object(a.useEffect)((function(){return C.on("POSITION",(function(e){!function(e){var t=e.code,n=e.position;0===g.length&&b(n);var a=(i[t]?i[t]:[]).concat([n]);r((function(e){return Object(l.a)(Object(l.a)({},e),{},Object(s.a)({},t,a))})),x((function(e){if(e.includes(t))return e;var n=[t];return g.concat(n)}))}(e)})),function(){C.off("POSITION")}}),[C,i]),Object(m.jsxs)(u.a,{center:p,zoom:5,scrollWheelZoom:!1,children:[Object(m.jsxs)("head",{children:[Object(m.jsx)("link",{rel:"stylesheet",href:"https://unpkg.com/leaflet@1.6.0/dist/leaflet.css",integrity:"sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ==",crossorigin:""}),Object(m.jsx)("script",{src:"https://unpkg.com/leaflet@1.7.1/dist/leaflet.js",integrity:"sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA==",crossorigin:""})]}),Object(m.jsx)(j.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),g.length>0?g.map((function(e,t){return Object(m.jsx)(v,{position:i[e][i[e].length-1],planeCode:e},t)})):null,e.planesInfo.length>0?e.planesInfo.map((function(t,n){return Object(m.jsx)(I,{color:e.pathColors[n],positions:[t.origin,t.destination],type:"straight",planeCode:t.code},n)})):null,Object.keys(i).length>0?Object.keys(i).map((function(e,t){return Object(m.jsx)(I,{color:"black",positions:i[e],type:"curved",planeCode:e},t)})):null]})},A=n(87),L=n.n(A),E=n(148),N=n(149);var T=function(e){var t=Object(a.useState)(new N.ChatController),n=Object(o.a)(t,1)[0],r=i.a.createRef();function c(){return(c=Object(E.a)(L.a.mark((function t(a){return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!a){t.next=5;break}if(a.name!==e.username){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,n.addMessage({type:"text",content:"user: "+a.name+"\nmensaje: "+a.message+"\nFecha: "+Date(a.date).toLocaleString("es-CL"),self:!1});case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}Object(a.useEffect)((function(){var t=e.chatList.length-1;!function(e){c.apply(this,arguments)}(e.chatList[t]),s()}),[e.chatList]);var s=function(){var e;null===(e=r.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})};return Object(a.useMemo)(Object(E.a)(L.a.mark((function t(){return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.setActionRequest({type:"text",always:!0},(function(t){e.handleChatEmitted(t)}));case 2:t.sent;case 3:case"end":return t.stop()}}),t)}))),[n,e]),Object(m.jsx)(N.MuiChat,{chatController:n,onSubmit:e.handleChatEmitted})};var M=function(e){return Object(m.jsx)("div",{className:"singlePlainInfo",children:Object(m.jsxs)("ul",{children:[Object(m.jsxs)("li",{children:[" codigo: ",e.code]}),Object(m.jsxs)("li",{children:[" aerolinea: ",e.airline]}),Object(m.jsxs)("li",{children:[" origen: ",e.origin[0],", ",e.origin[1]]}),Object(m.jsxs)("li",{children:[" destino: ",e.destination[0],", ",e.destination[1]]}),Object(m.jsxs)("li",{children:[" avion: ",e.plane]}),Object(m.jsxs)("li",{children:[" asientos: ",e.seats]}),Object(m.jsx)("li",{children:" pasajeros:"}),e.passengers.map((function(e,t){return Object(m.jsxs)("p",{children:[" nombre: ",e.name,", edad: ",e.age]})}))]})})},B=n(338),H=n(337),P=n(251),U=n.n(P),z=n(243),D=Object(z.a)((function(e){return{margin:{margin:e.spacing(1)}}}));var G=function(e){var t=D();return Object(m.jsx)("div",{className:t.margin,children:Object(m.jsxs)(H.a,{container:!0,spacing:1,alignItems:"flex-end",children:[Object(m.jsx)(H.a,{item:!0,children:Object(m.jsx)(U.a,{})}),Object(m.jsx)(H.a,{item:!0,children:Object(m.jsx)(B.a,{id:"input-with-icon-grid",label:"Username",onChange:e.handleUsernameChange})})]})})},J=n(334);var Q=function(e){for(var t="0123456789ABCDEF".split(""),n=[],a=0;a<e;a++){for(var i="#",r=0;r<6;r++)i+=t[Math.floor(16*Math.random())];n.push(i)}return n};var V=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],i=t[1],r=Object(a.useState)(0),c=Object(o.a)(r,2),s=c[0],l=c[1],u=Object(a.useState)([]),j=Object(o.a)(u,2),h=j[0],b=j[1],f=Object(a.useState)([]),O=Object(o.a)(f,2),g=O[0],x=O[1],v=Object(a.useState)("Default User"),C=Object(o.a)(v,2),y=C[0],w=C[1];Object(a.useEffect)((function(){var e=Q(s);b(e)}),[s]),Object(a.useEffect)((function(){F()}),[]),Object(a.useEffect)((function(){return p.on("CHAT",(function(e){I(e)})),function(){p.off("CHAT")}}),[g]);var F=function(){return p.emit("FLIGHTS"),p.on("FLIGHTS",(function(e){S(e)})),function(){p.off("FLIGHTS")}},S=function(e){console.log(e),i(e),s!=n.length&&(console.log("cambiando n de aviones"),l(n.length))},I=function(e){e.name!==y&&x((function(t){return t.concat([e])}))};return Object(m.jsxs)(d.Provider,{value:p,children:[Object(m.jsx)(J.a,{variant:"outlined",color:"primary",onClick:F,float:"left",children:"Get Planes Info!"}),Object(m.jsx)("div",{id:"mapid",children:Object(m.jsx)(k,{planesInfo:n,pathColors:h})}),Object(m.jsx)("div",{children:Object(m.jsxs)("div",{className:"chatContainer",children:[Object(m.jsx)(T,{style:{float:"right",width:"20%"},chatList:g,handleChatEmitted:function(e){var t=e.value,n={name:y,message:t};p.emit("CHAT",n)},username:y}),Object(m.jsx)("br",{}),Object(m.jsx)(G,{handleUsernameChange:function(e){var t=e.target.value;return w(t),y}})]})}),Object(m.jsx)("div",{className:"planeInfo",style:{float:"left",width:"60%"},children:n.length>0?n.map((function(e,t){return Object(m.jsx)(M,{className:"planeInfo",code:e.code,airline:e.airline,origin:e.origin,destination:e.destination,plane:e.plane,seats:e.seats,passengers:e.passengers},t)})):null})]})},X=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,341)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),r(e),c(e)}))};c.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(V,{})}),document.getElementById("root")),X()},96:function(e,t,n){}},[[303,1,2]]]);
//# sourceMappingURL=main.2b4f38ff.chunk.js.map