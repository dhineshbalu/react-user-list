(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{101:function(e,t,a){e.exports=a(114)},114:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),i=a.n(l),c=a(71),o=a(72),s=a(77),m=a(76),u=a(16),d=a(143),g=a(18),p=a(150),M=a(154),E=a(153),_=a(148),b=a(155),P=a(164),h=a(152),f=a(151),v=a(149),y=a(146),C=a(39),A=a.n(C),w=a(41),k=a.n(w),S=a(40),O=a.n(S),j=a(38),x=a.n(j),D=Object(d.a)((function(e){return{root:{flexShrink:0,marginLeft:e.spacing(2.5)}}}));function W(e){var t=D(),a=Object(g.a)(),n=e.count,l=e.page,i=e.rowsPerPage,c=e.onChangePage;return r.a.createElement("div",{className:t.root},r.a.createElement(y.a,{onClick:function(e){c(e,0)},disabled:0===l,"aria-label":"first page"},"rtl"===a.direction?r.a.createElement(x.a,null):r.a.createElement(A.a,null)),r.a.createElement(y.a,{onClick:function(e){c(e,l-1)},disabled:0===l,"aria-label":"previous page"},"rtl"===a.direction?r.a.createElement(O.a,null):r.a.createElement(k.a,null)),r.a.createElement(y.a,{onClick:function(e){c(e,l+1)},disabled:l>=Math.ceil(n/i)-1,"aria-label":"next page"},"rtl"===a.direction?r.a.createElement(k.a,null):r.a.createElement(O.a,null)),r.a.createElement(y.a,{onClick:function(e){c(e,Math.max(0,Math.ceil(n/i)-1))},disabled:l>=Math.ceil(n/i)-1,"aria-label":"last page"},"rtl"===a.direction?r.a.createElement(A.a,null):r.a.createElement(x.a,null)))}var N=Object(d.a)({table:{minWidth:500}});function F(e){var t=e.customersData,a=e.selectCustomer,n=N(),l=r.a.useState(0),i=Object(u.a)(l,2),c=i[0],o=i[1],s=r.a.useState(5),m=Object(u.a)(s,2),d=m[0],g=m[1],y=d-Math.min(d,t.length-c*d);return r.a.createElement(_.a,{component:v.a},r.a.createElement(p.a,{className:n.table,"aria-label":"custom pagination table"},r.a.createElement(f.a,null,r.a.createElement(h.a,{style:{backgroundColor:"#6383d6"}},r.a.createElement(E.a,{align:"center",style:{fontWeight:"bold"}},"S.No"),r.a.createElement(E.a,{align:"center",style:{fontWeight:"bold"}},"Name"),r.a.createElement(E.a,{align:"center",style:{fontWeight:"bold"}},"Origin"))),r.a.createElement(M.a,null,(d>0?t.slice(c*d,c*d+d):t).map((function(e,t){return r.a.createElement(h.a,{key:"customerList"+e.id+e.real_name,style:{cursor:"pointer"},onClick:function(){return a(e.id)}},r.a.createElement(E.a,{align:"center",component:"th",scope:"row"},c*d+t+1),r.a.createElement(E.a,{align:"center"},e.real_name),r.a.createElement(E.a,{align:"center"},e.tz))})),y>0&&r.a.createElement(h.a,{style:{height:1*y}},t.length?r.a.createElement(E.a,{align:"center",colSpan:3}):r.a.createElement(E.a,{align:"center",colSpan:3},"No records found.."))),r.a.createElement(b.a,null,r.a.createElement(h.a,null,r.a.createElement(P.a,{rowsPerPageOptions:[5,10,25],colSpan:3,count:t.length,rowsPerPage:d,page:c,SelectProps:{inputProps:{"aria-label":"rows per page"},native:!0},onChangePage:function(e,t){o(t)},onChangeRowsPerPage:function(e){g(parseInt(e.target.value,10)),o(0)},ActionsComponent:W})))))}var L=Object(d.a)((function(e){return{root:{flexShrink:0,marginLeft:e.spacing(2.5)}}}));function z(e){var t=L(),a=Object(g.a)(),n=e.count,l=e.page,i=e.rowsPerPage,c=e.onChangePage;return r.a.createElement("div",{className:t.root},r.a.createElement(y.a,{onClick:function(e){c(e,0)},disabled:0===l,"aria-label":"first page"},"rtl"===a.direction?r.a.createElement(x.a,null):r.a.createElement(A.a,null)),r.a.createElement(y.a,{onClick:function(e){c(e,l-1)},disabled:0===l,"aria-label":"previous page"},"rtl"===a.direction?r.a.createElement(O.a,null):r.a.createElement(k.a,null)),r.a.createElement(y.a,{onClick:function(e){c(e,l+1)},disabled:l>=Math.ceil(n/i)-1,"aria-label":"next page"},"rtl"===a.direction?r.a.createElement(k.a,null):r.a.createElement(O.a,null)),r.a.createElement(y.a,{onClick:function(e){c(e,Math.max(0,Math.ceil(n/i)-1))},disabled:l>=Math.ceil(n/i)-1,"aria-label":"last page"},"rtl"===a.direction?r.a.createElement(A.a,null):r.a.createElement(x.a,null)))}var J=Object(d.a)({table:{minWidth:500}});function R(e){var t=e.dateList,a=J(),l=r.a.useState(0),i=Object(u.a)(l,2),c=i[0],o=i[1],s=r.a.useState(5),m=Object(u.a)(s,2),d=m[0],g=m[1],y=d-Math.min(d,t.length-c*d);return Object(n.useEffect)((function(){o(0)}),[t]),r.a.createElement(_.a,{component:v.a},r.a.createElement(p.a,{className:a.table,"aria-label":"custom pagination table"},r.a.createElement(f.a,null,r.a.createElement(h.a,{style:{backgroundColor:"#6383d6"}},r.a.createElement(E.a,{align:"center",style:{fontWeight:"bold"}},"S.No"),r.a.createElement(E.a,{align:"center",style:{fontWeight:"bold"}},"Start Time"),r.a.createElement(E.a,{align:"center",style:{fontWeight:"bold"}},"End Time"))),r.a.createElement(M.a,null,(d>0?t.slice(c*d,c*d+d):t).map((function(e,t){return r.a.createElement(h.a,{key:"dateList"+t+e.start_time},r.a.createElement(E.a,{component:"th",scope:"row",align:"center"},c*d+t+1),r.a.createElement(E.a,{component:"th",scope:"row",align:"center"},e.start_time),r.a.createElement(E.a,{component:"th",scope:"row",align:"center"},e.end_time))})),y>0&&r.a.createElement(h.a,{style:{height:1*y}},t.length?r.a.createElement(E.a,{align:"center",colSpan:3}):r.a.createElement(E.a,{align:"center",colSpan:3},"No records found.."))),r.a.createElement(b.a,null,r.a.createElement(h.a,null,r.a.createElement(P.a,{rowsPerPageOptions:[5,10,25],colSpan:3,count:t.length,rowsPerPage:d,page:c,SelectProps:{inputProps:{"aria-label":"rows per page"},native:!0},onChangePage:function(e,t){o(t)},onChangeRowsPerPage:function(e){g(parseInt(e.target.value,10)),o(0)},ActionsComponent:z})))))}var K=a(165),Q=a(160),Y=a(161),I=a(75),B=a(14),T=a(162);function G(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}}var Z=Object(d.a)((function(e){return{paper:{position:"fixed",width:"75%",height:"75%",backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3),overflowY:"auto"}}}));function $(e){var t=e.selCust,a=e.onClose,n=Z(),l=r.a.useState(G),i=Object(u.a)(l,1)[0],c=r.a.useState(!0),o=Object(u.a)(c,2),s=o[0],m=o[1],d=r.a.useState({}),g=Object(u.a)(d,2),p=g[0],M=g[1],E=r.a.useState(null),_=Object(u.a)(E,2),b=_[0],P=_[1];r.a.useEffect((function(){t&&M(t.activity_periods)}),[]);var h=function(e){if(t&&t.activity_periods){var a=[];a=e?t.activity_periods.filter((function(t){var a=new Date(t.start_time.split(" ")[0]+" "+t.start_time.split(" ")[1]+" "+t.start_time.split(" ")[2]),n=new Date(t.end_time.split(" ")[0]+" "+t.end_time.split(" ")[1]+" "+t.end_time.split(" ")[2]);return a.getDay()==e.getDay()&&a.getMonth()==e.getMonth()&&a.getYear()==e.getYear()||n.getDay()==e.getDay()&&n.getMonth()==e.getMonth()&&n.getYear()==e.getYear()})):t.activity_periods,M(a)}},f=r.a.createElement("div",{style:i,className:n.paper},r.a.createElement("h2",{style:{textAlign:"center"}},"Activity periods of ",t.real_name),r.a.createElement(Q.a,{container:!0,spacing:3},r.a.createElement(Q.a,{item:!0,xs:6},r.a.createElement(B.a,{utils:I.a},r.a.createElement(T.a,{disableToolbar:!0,format:"MM/dd/yyyy",margin:"normal",id:"date-picker-dialog",label:"Date picker dialog",value:b,onChange:function(e){P(e),h(e)},KeyboardButtonProps:{"aria-label":"change date"}}))),r.a.createElement(Q.a,{item:!0,xs:6,style:{display:"flex",justifyContent:"flex-end",alignItems:"center"}},r.a.createElement(Y.a,{variant:"contained",color:"primary",onClick:function(){P(null),h(null)}},"Show All Periods"))),r.a.createElement(R,{dateList:p}));return r.a.createElement("div",null,r.a.createElement(K.a,{open:s,onClose:function(){m(!1),a()},"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description"},f))}var q=a(62),H=a(74),U=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).selectCustomer=function(e){n.setState({selectedCustomer:e,showModal:!0})},n.state={customersListData:!0===q.ok?q.members:[],selectedCustomer:null,showModal:!1},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.customersListData,n=t.showModal,l=t.selectedCustomer;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{style:{textAlign:"center",letterSpacing:"1px"}},"Customer's List"),r.a.createElement(F,{selectCustomer:this.selectCustomer,customersData:a}),n?r.a.createElement($,{selCust:Object(H.find)(a,{id:l}),onClose:function(){e.setState({SelectedCustomer:null,showModal:!1})}}):null)}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},62:function(e){e.exports=JSON.parse('{"ok":true,"members":[{"id":"W012A3CDE","real_name":"Egon Spengler","tz":"America/Los_Angeles","activity_periods":[{"start_time":"Feb 1 2020  1:33PM","end_time":"Feb 1 2020 1:54PM"},{"start_time":"Mar 1 2020  11:11AM","end_time":"Mar 1 2020 2:00PM"},{"start_time":"Aug 15 2020  5:33PM","end_time":"Aug 15 2020 8:02PM"},{"start_time":"Aug 15 2020  5:33PM","end_time":"Aug 15 2020 8:02PM"},{"start_time":"Aug 16 2020  5:33PM","end_time":"Aug 16 2020 8:02PM"},{"start_time":"Aug 17 2020  5:33PM","end_time":"Aug 18 2020 8:02PM"}]},{"id":"W07QCRPA4","real_name":"Glinda Southgood","tz":"Asia/Kolkata","activity_periods":[{"start_time":"Feb 1 2020  1:33PM","end_time":"Feb 1 2020 1:54PM"},{"start_time":"Mar 1 2020  11:11AM","end_time":"Mar 1 2020 2:00PM"},{"start_time":"Mar 16 2020  5:33PM","end_time":"Mar 16 2020 8:02PM"}]},{"id":"W07QCRPA41","real_name":"customer 1","tz":"Asia/Kolkata","activity_periods":[{"start_time":"Feb 1 2020  1:33PM","end_time":"Feb 1 2020 1:54PM"},{"start_time":"Mar 1 2020  11:11AM","end_time":"Mar 1 2020 2:00PM"},{"start_time":"Jun 1 2020  5:33PM","end_time":"Jun 1 2020 8:02PM"}]},{"id":"W07QCRPA421","real_name":"customer 2","tz":"Asia/Kolkata","activity_periods":[{"start_time":"Dec 19 2020  1:33PM","end_time":"Dec 19 2020 1:54PM"},{"start_time":"Apr 1 2020  11:11AM","end_time":"Apr 1 2020 2:00PM"},{"start_time":"Aug 14 2020  5:33PM","end_time":"Aug 14 2020 8:02PM"},{"start_time":"Feb 1 2020  1:33PM","end_time":"Feb 1 2020 1:54PM"},{"start_time":"Mar 1 2020  11:11AM","end_time":"Mar 1 2020 2:00PM"},{"start_time":"Jun 1 2020  5:33PM","end_time":"Jun 1 2020 8:02PM"}]},{"id":"W07QCRPA466","real_name":"Customer 3","tz":"Asia/Kolkata","activity_periods":[{"start_time":"May 5 2020  1:33PM","end_time":"May 5 2020 1:54PM"},{"start_time":"Mar 1 2020  11:11AM","end_time":"Mar 1 2020 2:00PM"},{"start_time":"Feb 16 2020  5:33PM","end_time":"Feb 16 2020 8:02PM"}]},{"id":"W07QCRPA43Z","real_name":"Customer 4","tz":"Asia/Kolkata","activity_periods":[{"start_time":"Nov 7 2020  1:33PM","end_time":"Nov 7 2020 1:54PM"},{"start_time":"Dec 1 2020  11:11AM","end_time":"Dec 1 2020 2:00PM"},{"start_time":"Mar 19 2020  5:33PM","end_time":"Mar 19 2020 8:02PM"},{"start_time":"Aug 7 2020  1:33PM","end_time":"Aug 7 2020 1:54PM"},{"start_time":"Oct 21 2020  11:11AM","end_time":"Oct 21 2020 2:00PM"},{"start_time":"Mar 17 2020  5:33PM","end_time":"Mar 17 2020 8:02PM"}]}]}')}},[[101,1,2]]]);
//# sourceMappingURL=main.50ca5872.chunk.js.map