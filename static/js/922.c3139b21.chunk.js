"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[922],{660:function(t,e,n){n.d(e,{Cp:function(){return s},Jh:function(){return l},TP:function(){return o},eO:function(){return f},yO:function(){return p}});var r=n(861),a=n(757),u=n.n(a),i=n(243),c={headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZmNhOGM2ZWRmZWJhMTIxMWUxMDAzMWY0NjA0ZjBlZiIsInN1YiI6IjY0ZDBiN2ZmODUwOTBmMDBhZTg0NDEwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eDgWr96RE55fRA4IBn6Wlksw1tb0PYVFug23jtjXiMQ"}},s=function(){var t=(0,r.Z)(u().mark((function t(){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",c);case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"?language=en-US"),c);case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?language=en-US"),c);case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?language=en-US&page=1"),c);case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(e,"&include_adult=true&language=en-US&page=1"),c);case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},557:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(87),a="list_list__mJQSf",u="list_list_list_item__rmvKL",i="list_list_list_item_link__M93T3",c=n(184),s=function(t){var e=t.title,n=t.id;return(0,c.jsx)("li",{className:u,children:(0,c.jsx)(r.rU,{to:"/movies/".concat(n),className:i,children:e})})},o=function(t){var e=t.store;return(0,c.jsx)("ul",{className:a,children:e.map((function(t){return(0,c.jsx)(s,{title:t.title,id:t.id},t.id)}))})}},922:function(t,e,n){n.r(e),n.d(e,{default:function(){return p}});var r=n(439),a=n(791),u="home_home__qA4gR",i="home_home_title__2gpnM",c=n(660),s=n(557),o=n(184),p=function(){var t=(0,a.useState)([]),e=(0,r.Z)(t,2),n=e[0],p=e[1];return(0,c.Cp)().then((function(t){p(t.results)})),(0,o.jsxs)("div",{className:u,children:[(0,o.jsx)("h2",{className:i,children:"Trending today"}),(0,o.jsx)(s.Z,{store:n})]})}}}]);
//# sourceMappingURL=922.c3139b21.chunk.js.map