(this["webpackJsonpreddit-app"]=this["webpackJsonpreddit-app"]||[]).push([[0],{17:function(t,e,n){t.exports=n(29)},22:function(t,e,n){},28:function(t,e,n){},29:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),o=n(4),s=n.n(o),c=(n(22),n(10)),i=n(11),u=n(15),l=n(12),p=n(16),d=n(5),m=(n(28),"GET_SUBS");function h(){return function(t){return fetch("https://www.reddit.com/subreddits/popular.json").then((function(t){return t.json()})).then((function(e){return t(function(t){return{type:m,posts:t.data.children.map((function(t){return t.data}))}}(e))}))}}var f=function(t){function e(){return Object(c.a)(this,e),Object(u.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"App__inner"},a.a.createElement("h1",{className:"Header"},"Click the button to see the most popular Subreddits from ",a.a.createElement("a",{className:"Header__link",href:"https://reddit.com"},"Reddit")),a.a.createElement("button",{className:"Button",onClick:this.props.onGetSubs},"Get Subreddits"),a.a.createElement("ul",{className:"Subs-list"},Array.from(this.props.posts).map((function(t,e){return a.a.createElement("li",{className:"Subs-list__item",key:e},t.title)})))))}}]),e}(r.Component);var b=Object(d.b)((function(t){return{posts:t.posts}}),(function(t){return{onGetSubs:function(){return t(h())}}}))(f);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var v=n(3),w={posts:[]};var E=n(14),j=Object(v.c)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case m:return{posts:e.posts};default:return t}}),Object(v.a)(E.a)),k=a.a.createElement(d.a,{store:j},a.a.createElement(b,null));s.a.render(k,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[17,1,2]]]);
//# sourceMappingURL=main.0b2f2e36.chunk.js.map