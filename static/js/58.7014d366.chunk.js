"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[58],{884:function(t,e,n){n.r(e),n.d(e,{default:function(){return h}});var r=n(861),a=n(439),u=n(757),c=n.n(u),s=n(329),i=n(689),o=n(791),p=n.p+"static/media/defaultPhoto.1991ded086b3fe6acc8d.jpg",f=n(184),l=function(t){var e=t.details,n=e.name,r=e.profile_path,a=e.character,u=r?"https://image.tmdb.org/t/p/w200/".concat(r):"".concat(p);return(0,f.jsxs)("div",{children:[(0,f.jsx)("img",{src:u,alt:n}),(0,f.jsx)("h2",{children:n}),(0,f.jsxs)("p",{children:["Character: ",a]})]})},h=function(){var t=(0,i.UO)().movieId,e=(0,o.useState)([]),n=(0,a.Z)(e,2),u=n[0],p=n[1];return(0,o.useEffect)((function(){var e=function(){var e=(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.ts)(t);case 3:n=e.sent,console.log(n),p(n.cast),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[t]),(0,f.jsx)("div",{children:(0,f.jsx)("ul",{children:u.map((function(t){return(0,f.jsx)("li",{children:(0,f.jsx)(l,{details:t})},t.id)}))})})}},329:function(t,e,n){n.d(e,{BY:function(){return g},Vm:function(){return p},jC:function(){return l},qX:function(){return i},ts:function(){return d}});var r=n(861),a=n(757),u=n.n(a),c=n(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var s={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZWFiZGVjMWQ5MzAyM2Q4MDVkZDE4ODM1NTZlM2Q5MCIsInN1YiI6IjY0YTNiY2M1ZDQwMGYzMDBhZDg2NzcxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pfqugKy3R3POYfRm41TUve8rMoXoCAWEzEXVYQ8yPQM"}};function i(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/trending/all/day?language=en-US",s);case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/search/movie?query=".concat(e,"&include_adult=false&language=en-US&page=1"),s);case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(e,"?language=en-US"),s);case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(e,"/credits?language=en-US"),s);case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function g(t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(e,"/reviews?language=en-US&page=1"),s);case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=58.7014d366.chunk.js.map