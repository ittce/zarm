webpackJsonp([13],{178:function(e,t,a){"use strict";function n(e,t){var a=t-e,n=Math.random();return e+Math.round(n*a)}Object.defineProperty(t,"__esModule",{value:!0});var o=(a(348),a(350)),r=(a(198),a(199)),s=(a(202),a(203)),i=a(193),l=a.n(i),c=a(45),u=a.n(c),f=a(46),m=a.n(f),d=a(47),p=a.n(d),h=a(48),g=a.n(h),v=a(49),E=a.n(v),D=a(0),b=a.n(D),S=a(196),y=a(201),R=a(197),k=a(352),N=(a.n(k),{normal:0,pull:1,drop:2,loading:3,success:4,failure:5}),T={normal:0,abort:1,loading:2,success:3,failure:4,complete:5},w=function(e){function t(e){m()(this,t);var a=g()(this,(t.__proto__||u()(t)).call(this,e));return a.fetchData=function(e){a.setState(l()({},""+e,N.loading)),setTimeout(function(){if(a.mounted){for(var t=[],n=t.length,o=n;o<n+20;o++)t.push(b.a.createElement(s.a,{key:+o},"第 ",o+1," 行"));a.setState(l()({dataSource:t},""+e,N.success))}},2e3)},a.loadData=function(){a.setState({customLoading:T.loading}),setTimeout(function(){if(a.mounted){var e=n(0,5),t=a.state.dataSource,o=T.success;if(console.log("状态: "+(0===e?"失败":1===e?"完成":"成功")),0===e)o=T.failure;else if(1===e)o=T.complete;else for(var r=t.length,i=r;i<r+5;i++)t.push(b.a.createElement(s.a,{key:+i},"第 ",i+1," 行"));a.setState({dataSource:t,customLoading:o})}},2e3)},a.mounted=!0,a.state={customRefreshing:N.normal,customLoading:T.normal,dataSource:[]},a}return E()(t,e),p()(t,[{key:"componentDidMount",value:function(){this.fetchData("customRefreshing")}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){for(var e=this,t=this.state,a=t.customRefreshing,n=t.customLoading,i=t.dataSource,l=[],c=0;c<3;c++)l.push(b.a.createElement(s.a,{key:+c},"第 ",c+1," 行"));return b.a.createElement(S.a,{className:"pull-page"},b.a.createElement(y.a,{title:"上拉加载下拉刷新 Pull"}),b.a.createElement("main",null,b.a.createElement(r.a,null,b.a.createElement(r.a.Header,{title:"基本"}),b.a.createElement(r.a.Body,null,b.a.createElement(o.a,{refreshing:a,loading:n,onRefresh:function(){e.fetchData("customRefreshing")},onLoad:this.loadData},i)))),b.a.createElement(R.a,null))}}]),t}(D.Component);t.default=w},348:function(e,t,a){"use strict";var n=(a(194),a(210),a(205),a(349));a.n(n)},349:function(e,t){},350:function(e,t,a){"use strict";var n=a(193),o=a.n(n),r=a(45),s=a.n(r),i=a(46),l=a.n(i),c=a(47),u=a.n(c),f=a(48),m=a.n(f),d=a(49),p=a.n(d),h=a(0),g=a.n(h),v=a(351),E=a(192),D=a.n(E),b=a(208),S=a(217),y=a(211),R=a(204),k=function(e){function t(e){l()(this,t);var a=m()(this,(t.__proto__||s()(t)).call(this,e));return a.onScroll=function(){var e=a.state,t=e.refreshState,n=e.loadState,o=a.props,r=o.onLoad,s=o.loadDistance;if(t===v.b.normal&&n===v.a.normal&&r){var i=a.pull.getBoundingClientRect().bottom,l=document.documentElement.scrollHeight,c=document.documentElement.clientHeight;l<=c||i<=c+s&&"function"==typeof r&&r()}},a.onDragMove=function(e,t){var n=t.offsetY;if(!(!a.props.onRefresh||n<0||n>0&&document.documentElement.scrollTop+document.body.scrollTop>0||a.state.refreshState>=v.b.loading)){e.preventDefault();var o=a.props,r=o.refreshDistance,s=o.refreshInitDistance,i=n/2,l=i-s<r?v.b.pull:v.b.drop;return a.doRefreshAction(l,i),!0}},a.onDragEnd=function(e,t){var n=t.offsetY;e.preventDefault();var o=a.props.onRefresh,r=a.state.refreshState;if(n)return r===v.b.pull?void a.doRefreshAction(v.b.normal):void("function"==typeof o&&o())},a.doTransition=function(e){var t=e.offsetY,n=e.animationDuration;a.setState({offsetY:t,animationDuration:n})},a.doRefreshAction=function(e,t){var n=a.props,o=n.animationDuration,r=n.stayTime;switch(a.setState({refreshState:e}),e){case v.b.pull:case v.b.drop:a.doTransition({offsetY:t,animationDuration:0});break;case v.b.loading:a.doTransition({offsetY:"auto",animationDuration:o});break;case v.b.success:case v.b.failure:a.doTransition({offsetY:"auto",animationDuration:o}),setTimeout(function(){a.doRefreshAction(v.b.normal),a.doLoadAction(v.a.normal)},r);break;default:a.doTransition({offsetY:0,animationDuration:o})}},a.doLoadAction=function(e){var t=a.props.stayTime;switch(a.setState({loadState:e}),e){case v.a.success:a.doLoadAction(v.a.normal);break;case v.a.failure:setTimeout(function(){a.doLoadAction(v.a.abort)},t)}},a.renderRefresh=function(){var e=a.props,t=e.prefixCls,n=e.refreshInitDistance,o=e.refreshDistance,r=e.refreshRender,s=a.state,i=s.refreshState,l=s.offsetY,c=0;if(l>=n&&(c=100*(l-n<o?l-n:o)/o),"function"==typeof r)return r(i,c);var u=t+"-control";switch(i){case v.b.pull:return g.a.createElement("div",{className:u},g.a.createElement(y.a,{percent:c}),g.a.createElement("span",null,"下拉刷新"));case v.b.drop:return g.a.createElement("div",{className:u},g.a.createElement(y.a,{percent:100}),g.a.createElement("span",null,"释放立即刷新"));case v.b.loading:return g.a.createElement("div",{className:u},g.a.createElement(y.a,{className:"rotate360"}),g.a.createElement("span",null,"加载中"));case v.b.success:return g.a.createElement("div",{className:u},g.a.createElement(R.a,{type:"right-round",theme:"success"}),g.a.createElement("span",null,"加载成功"));case v.b.failure:return g.a.createElement("div",{className:u},g.a.createElement(R.a,{type:"wrong-round",theme:"error"}),g.a.createElement("span",null,"加载失败"))}},a.renderLoad=function(){var e=a.props,t=e.prefixCls,n=e.loadRender,o=a.state.loadState;if("function"==typeof n)return n(o);var r=t+"-control";switch(o){case v.a.loading:return g.a.createElement("div",{className:r},g.a.createElement(y.a,{className:"rotate360"}),g.a.createElement("span",null,"加载中"));case v.a.failure:return g.a.createElement("div",{className:r},g.a.createElement(R.a,{type:"wrong-round",theme:"error"}),g.a.createElement("span",null,"加载失败"));case v.a.complete:return g.a.createElement("div",{className:r},g.a.createElement("span",null,"我是有底线的"))}},a.state={offsetY:0,animationDuration:0,refreshState:e.refreshing,loadState:e.loading},a}return p()(t,e),u()(t,[{key:"componentDidMount",value:function(){b.a.on(window,"scroll",this.onScroll)}},{key:"componentWillReceiveProps",value:function(e){"refreshing"in e&&e.refreshing!==this.props.refreshing&&this.doRefreshAction(e.refreshing),"loading"in e&&e.loading!==this.props.loading&&this.doLoadAction(e.loading)}},{key:"componentWillUnmount",value:function(){b.a.off(window,"scroll",this.onScroll)}},{key:"render",value:function(){var e=this,t=this.props,a=t.prefixCls,n=t.className,r=t.children,s=this.state,i=s.offsetY,l=s.animationDuration,c=s.refreshState,u=s.loadState,f=D()(""+a,n),m=D()(a+"-refresh",o()({},a+"-refresh-show",c>=v.b.loading)),d=D()(a+"-load",o()({},a+"-load-show",u>=v.a.loading)),p={WebkitTransitionDuration:l+"ms",transitionDuration:l+"ms"};return c<=v.b.drop&&(p.height=i),g.a.createElement(S.a,{onDragMove:this.onDragMove,onDragEnd:this.onDragEnd},g.a.createElement("div",{className:f,ref:function(t){e.pull=t}},g.a.createElement("div",{className:m,style:p},this.renderRefresh()),r,g.a.createElement("div",{className:d},this.renderLoad())))}}]),t}(h.PureComponent);t.a=k,k.defaultProps={prefixCls:"za-pull",refreshing:v.b.normal,refreshInitDistance:30,refreshDistance:50,loading:v.a.normal,loadDistance:10,animationDuration:400,stayTime:1e3}},351:function(e,t,a){"use strict";a.d(t,"b",function(){return n}),a.d(t,"a",function(){return o});var n;!function(e){e[e.normal=0]="normal",e[e.pull=1]="pull",e[e.drop=2]="drop",e[e.loading=3]="loading",e[e.success=4]="success",e[e.failure=5]="failure"}(n||(n={}));var o;!function(e){e[e.normal=0]="normal",e[e.abort=1]="abort",e[e.loading=2]="loading",e[e.success=3]="success",e[e.failure=4]="failure",e[e.complete=5]="complete"}(o||(o={}))},352:function(e,t){}});