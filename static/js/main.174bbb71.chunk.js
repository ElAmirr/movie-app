(this["webpackJsonpreact-movie-app"]=this["webpackJsonpreact-movie-app"]||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(7),i=a.n(s),c=(a(15),a(9)),o=a(8),l=a(1),m=a(2),u=a(4),p=a(3),h=a(5),d=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"joker"},this.props.movies&&this.props.movies.filter((function(t){return t.name.toLowerCase().includes(e.props.input.toLowerCase().trim())&&t.rating<e.props.star})).map((function(e){return r.a.createElement("div",{className:"photo"},r.a.createElement("div",{className:"text"},r.a.createElement("p",null,e.name),r.a.createElement("p",null,"".padEnd(e.rating,"\u2b50"))),r.a.createElement("div",{className:"logo"},r.a.createElement("img",{src:e.img})))})))}}]),t}(n.Component),g=(a(16),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(o.a)({},e.target.name,e.target.value))},a.star=function(e){a.setState({star:e})},a.add=function(){a.setState({movielist:[].concat(Object(c.a)(a.state.movielist),[{name:a.state.name,img:a.state.img,rating:a.state.rating}]),display:!a.state.display})},a.state={name:"",img:"",rating:0,search:"",movielist:[],star:5,display:!1},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"moviup"},r.a.createElement("header",{className:"header-nav"},r.a.createElement("input",{type:"text",className:"item1",placeholder:"Search",onChange:function(t){return e.setState({search:t.target.value})}}),r.a.createElement("button",{className:"item2"},"Search"),r.a.createElement("span",{onClick:function(){return e.star(1)}},"\u2b50"),r.a.createElement("span",{onClick:function(){return e.star(2)}},"\u2b50"),r.a.createElement("span",{onClick:function(){return e.star(3)}},"\u2b50"),r.a.createElement("span",{onClick:function(){return e.star(4)}},"\u2b50"),r.a.createElement("span",{onClick:function(){return e.star(5)}},"\u2b50")),r.a.createElement(d,{className:"part1",input:this.state.search,star:this.state.star,movies:this.state.movielist}),r.a.createElement("p",{className:"btn2",onClick:function(){return e.setState({display:!e.state.display})}},"+"),r.a.createElement("div",{id:"col1",className:this.state.display?"display":"hidden"},r.a.createElement("input",{className:"text1",type:"text",placeholder:"Name",name:"name",onChange:this.handleChange}),r.a.createElement("input",{className:"text1",type:"text",placeholder:"Img",name:"img",onChange:this.handleChange}),r.a.createElement("input",{className:"text1",type:"text",placeholder:"Rating",name:"rating",onChange:this.handleChange}),r.a.createElement("button",{className:"btn",onClick:this.add},"Add")))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.174bbb71.chunk.js.map