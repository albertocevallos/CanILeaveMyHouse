(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{35:function(e,t,n){e.exports=n(64)},40:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(29),r=n.n(o),l=n(9),i=n(10),u=n(11),s=n(12),m=(n(40),n(6)),h=n(66),d=n(67),f=n(30),v=n.n(f),p=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).state={counter:0},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;v.a.get("https://graph.facebook.com/?id=https://canileavemyhouse.co&fields=engagement&access_token=213944296522083|123a5a55237f53d6966b6d00c69d6d92").then((function(t){console.log(t.data.engagement.share_count),e.setState({counter:t.data.engagement.share_count})})).catch((function(e){console.log(e)})).finally((function(){}))}},{key:"render",value:function(){return c.a.createElement("div",{className:"header"},c.a.createElement("div",{className:"header__social"},c.a.createElement(h.a,{url:"https://canileavemyhouse.co/",quote:"Can I Leave My House?",className:"header__social--button"},c.a.createElement(d.a,{bgStyle:{fill:"#1877f2"},size:32,round:!0})),c.a.createElement("div",{className:"header__social--counter"},this.state.counter," shares")))}}]),n}(a.Component);function E(){return c.a.createElement("section",{className:"no--text"},"Nope.")}function b(){return c.a.createElement("div",{className:"no"},c.a.createElement(p,null),c.a.createElement(E,null))}var g=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).state={},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return c.a.createElement(m.d,null,c.a.createElement(m.b,{path:["/"],exact:!0,render:function(){return c.a.createElement(b,null)}}),c.a.createElement(m.b,{path:"*",render:function(){return c.a.createElement(m.a,{to:"/"})}}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y=n(14);r.a.render(c.a.createElement(y.a,null,c.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[35,1,2]]]);
//# sourceMappingURL=main.22376f0c.chunk.js.map