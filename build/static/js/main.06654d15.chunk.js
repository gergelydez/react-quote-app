(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[1],{10:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var c=n(13),a=n(1),i=n.n(a),s=n(0),r=i.a.createContext({token:"",isLoggedIn:!1,login:function(e){},logout:function(){}}),o=function(e){var t=localStorage.getItem("token"),n=Object(a.useState)(t),i=Object(c.a)(n,2),o=i[0],l=i[1],j={token:o,isLoggedIn:!!o,login:function(e){localStorage.setItem("token",e),l(e)},logout:function(){localStorage.removeItem("token"),l(null)}};return Object(s.jsx)(r.Provider,{value:j,children:e.children})};t.b=r},12:function(e,t,n){e.exports={hamburger:"Hamburger_hamburger__3Qfco",bars:"Hamburger_bars__N2-_t"}},18:function(e,t,n){e.exports={main:"Layout_main__1-YPy"}},21:function(e,t,n){e.exports={starting:"StartingPageContent_starting__28OKM"}},26:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var c=n(17),a=n.n(c),i=n(8),s=(n(26),n(1)),r=n.n(s),o=n(2),l=n(18),j=n.n(l),b=n(13),u=n(7),d=n.n(u),h=n(10),x=n(12),O=n.n(x),g=n(0),m=function(e){return Object(g.jsxs)("div",{className:O.a.hamburger,onClick:e.onClick,children:[Object(g.jsx)("div",{className:O.a.bars}),Object(g.jsx)("div",{className:O.a.bars}),Object(g.jsx)("div",{className:O.a.bars})]})},v=function(){var e=Object(s.useState)(!1),t=Object(b.a)(e,2),n=t[0],c=t[1],a=Object(s.useContext)(h.b),r=a.isLoggedIn;return Object(g.jsxs)("header",{className:d.a.header,children:[Object(g.jsxs)("div",{className:d.a.flex,children:[Object(g.jsx)("div",{className:d.a.logo,children:Object(g.jsx)(i.c,{to:"/",activeClassName:d.a.active,children:"Quotes App"})}),Object(g.jsxs)("div",{className:d.a.hamburger,children:[Object(g.jsx)(m,{onClick:function(){c(!n)}})," "]})]}),n&&Object(g.jsx)("nav",{className:d.a.nav,children:Object(g.jsxs)("ul",{children:[!r&&Object(g.jsx)("li",{children:Object(g.jsx)(i.c,{to:"/auth",activeClassName:d.a.active,children:"Login"})}),Object(g.jsx)("li",{children:Object(g.jsx)(i.c,{to:"/quotes",activeClassName:d.a.active,children:"All Quotes"})}),r&&Object(g.jsx)("li",{children:Object(g.jsx)(i.c,{to:"/new-quote",activeClassName:d.a.active,children:"New Quote"})}),r&&Object(g.jsx)("li",{children:Object(g.jsx)(i.c,{to:"/profile",activeClassName:d.a.active,children:"Profile"})}),r&&Object(g.jsx)("li",{children:Object(g.jsx)("button",{onClick:function(){a.logout()},children:"Logout"})})]})})]})},f=function(e){return Object(g.jsxs)(s.Fragment,{children:[Object(g.jsx)(v,{}),Object(g.jsx)("main",{className:j.a.main,children:e.children})]})},_=n(21),N=n.n(_),p=function(){return Object(g.jsxs)("section",{className:N.a.starting,children:[Object(g.jsx)("h1",{children:"Welcome on Board!"}),Object(g.jsx)("p",{children:"Login to create new quotes!"})]})},C=function(){return Object(g.jsx)(p,{})},k=r.a.lazy((function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,57))})),y=r.a.lazy((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,55))})),I=r.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,56))})),L=r.a.lazy((function(){return n.e(9).then(n.bind(null,53))})),M=r.a.lazy((function(){return n.e(6).then(n.bind(null,54))})),P=r.a.lazy((function(){return n.e(7).then(n.bind(null,58))}));var q=function(){var e=Object(s.useContext)(h.b).isLoggedIn;return Object(g.jsx)(f,{children:Object(g.jsxs)(o.d,{children:[Object(g.jsx)(o.b,{path:"/",exact:!0,children:Object(g.jsx)(C,{})}),Object(g.jsx)(o.b,{path:"/auth",children:Object(g.jsx)(P,{})}),Object(g.jsxs)(o.b,{path:"/profile",children:[e&&Object(g.jsx)(M,{}),!e&&Object(g.jsx)(o.a,{to:"/auth"})]}),Object(g.jsx)(o.b,{path:"/quotes",exact:!0,children:Object(g.jsx)(y,{})}),Object(g.jsx)(o.b,{path:"/quotes/:quoteId",children:Object(g.jsx)(k,{})}),Object(g.jsxs)(o.b,{path:"/new-quote",children:[e&&Object(g.jsx)(I,{}),!e&&Object(g.jsx)(o.a,{to:"/auth"})]}),Object(g.jsx)(o.b,{path:"*",children:Object(g.jsx)(L,{})})]})})};a.a.render(Object(g.jsx)(h.a,{children:Object(g.jsx)(i.a,{children:Object(g.jsx)(q,{})})}),document.getElementById("root"))},7:function(e,t,n){e.exports={header:"MainNavigation_header__1Pd_M",flex:"MainNavigation_flex__1fRKN",hamburger:"MainNavigation_hamburger__R9Z1w",logo:"MainNavigation_logo__xiNv9",nav:"MainNavigation_nav__3BSG4",active:"MainNavigation_active__2BNNi"}}},[[36,2,3]]]);
//# sourceMappingURL=main.06654d15.chunk.js.map