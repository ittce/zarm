webpackJsonp([8],{339:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(88),r=a.n(n),l=a(89),s=a.n(l),c=a(90),i=a.n(c),m=a(91),o=a.n(m),u=a(92),p=a.n(u),h=a(5),v=a.n(h),E=a(347),f=a(350),d=a(348),g=a(349),N=a(594),b=(a.n(N),function(e){function t(e){s()(this,t);var a=o()(this,(t.__proto__||r()(t)).call(this,e));return a.state={percent:10,theme:"primary"},a}return p()(t,e),i()(t,[{key:"render",value:function(){var e=this;return v.a.createElement(E.a,{className:"progress-page"},v.a.createElement(f.a,{title:"进度条 Progress"}),v.a.createElement("main",null,v.a.createElement("div",{className:"progress"},v.a.createElement(g.q,{percent:this.state.percent,theme:this.state.theme},this.state.percent,"%")),v.a.createElement("div",{className:"progress"},v.a.createElement(g.q,{shape:"circle",percent:this.state.percent,theme:this.state.theme},v.a.createElement("div",{className:"progress-content"},v.a.createElement("span",{className:"progress-text"},this.state.percent),v.a.createElement("span",{className:"progress-percent"},"%")))),v.a.createElement(g.n,null,v.a.createElement(g.n.Body,null,v.a.createElement(g.e,{title:"进度"},v.a.createElement(g.v,{shape:"radius",step:10,min:0,max:100,value:this.state.percent,onChange:function(t){isNaN(t)||e.setState({percent:t})}})),v.a.createElement(g.e,{title:"主题"},v.a.createElement(g.o,{value:this.state.theme,dataSource:[{value:"default",label:"default"},{value:"primary",label:"primary"},{value:"info",label:"info"},{value:"warning",label:"warning"},{value:"error",label:"error"}],onOk:function(t){e.setState({theme:t.value})}}))))),v.a.createElement(d.a,null))}}]),t}(h.Component));t.default=b},594:function(e,t){}});