webpackJsonp([8],{250:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=(n(428),n(430)),i=(n(292),n(293)),s=(n(275),n(274)),r=(n(272),n(273)),o=(n(276),n(277)),l=(n(268),n(269)),c=n(66),u=n.n(c),m=n(67),f=n.n(m),p=n(68),h=n.n(p),v=n(69),d=n.n(v),E=n(70),k=n.n(E),y=n(0),C=n.n(y),b=n(266),x=n(271),_=n(267),S=n(431),g=(n.n(S),function(e){function t(e){f()(this,t);var n=d()(this,(t.__proto__||u()(t)).call(this,e));return n.state={toast:{visible:!1,onMaskClick:function(){var e=n.state.toast;e.visible=!1,n.setState({toast:e})}},loading:!1},n}return k()(t,e),h()(t,[{key:"render",value:function(){var e=this,t=this.state.toast;return C.a.createElement(b.a,{className:"toast-page"},C.a.createElement(x.a,{title:"轻提示 Toast"}),C.a.createElement("main",null,C.a.createElement(l.a,null,C.a.createElement(l.a.Header,{title:"基本"}),C.a.createElement(l.a.Body,null,C.a.createElement(r.a,{description:C.a.createElement(o.a,{size:"xs",theme:"error",onClick:function(){t.visible=!0,t.duration=3e3,t.children="默认3秒自动关闭",e.setState({toast:t})}},"开启")},"错误提示"),C.a.createElement(r.a,{description:C.a.createElement(o.a,{size:"xs",theme:"success",onClick:function(){t.visible=!0,t.duration=3e3,t.children=C.a.createElement("div",{className:"box"},C.a.createElement(s.a,{className:"box-icon",type:"right-round-fill"}),C.a.createElement("div",{className:"box-text"},"预约成功")),e.setState({toast:t})}},"开启")},"成功提示"),C.a.createElement(r.a,{description:C.a.createElement(o.a,{size:"xs",onClick:function(){t.visible=!0,t.duration=1e4,t.children="指定10秒自动关闭",e.setState({toast:t})}},"开启")},"指定关闭时间"))),C.a.createElement(l.a,null,C.a.createElement(l.a.Header,{title:"加载中"}),C.a.createElement(l.a.Body,null,C.a.createElement(r.a,{description:C.a.createElement(o.a,{size:"xs",onClick:function(){return e.setState({loading:!0})}},"开启")},"Loading"))),C.a.createElement(i.a,this.state.toast),C.a.createElement(a.a,{visible:this.state.loading})),C.a.createElement(_.a,null))}}]),t}(y.Component));t.default=g},292:function(e,t,n){"use strict";var a=(n(263),n(288),n(331));n.n(a)},293:function(e,t,n){"use strict";var a=n(264),i=n.n(a),s=n(66),r=n.n(s),o=n(67),l=n.n(o),c=n(68),u=n.n(c),m=n(69),f=n.n(m),p=n(70),h=n.n(p),v=n(0),d=n.n(v),E=n(262),k=n.n(E),y=n(289),C=function(e){function t(e){l()(this,t);var n=f()(this,(t.__proto__||r()(t)).call(this,e));return n.enter=function(e,t){n.setState({isShow:!0}),0!==e&&(n.timer=setTimeout(function(){"function"==typeof t&&t(),clearTimeout(n.timer)},e))},n.leave=function(){n.setState({isShow:!1})},n.state={isShow:!1},n}return h()(t,e),u()(t,[{key:"componentDidMount",value:function(){this.props.visible&&this.enter(this.props.stayTime,this.props.onMaskClick)}},{key:"componentWillReceiveProps",value:function(e){clearTimeout(this.timer),e.visible?this.enter(e.stayTime,e.onMaskClick):this.leave()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timer)}},{key:"render",value:function(){var e=this.props,t=e.prefixCls,n=e.className,a=e.visible,s=e.children,r=e.onMaskClick,o=k()(""+t,n,i()({},t+"-open",this.state.isShow));return d.a.createElement("div",{className:o},d.a.createElement("div",{className:t+"-container"},s),d.a.createElement(y.a,{visible:a,type:"transparent",onClose:r}))}}]),t}(v.PureComponent);t.a=C,C.defaultProps={prefixCls:"za-toast",visible:!1,stayTime:3e3}},331:function(e,t){},428:function(e,t,n){"use strict";var a=(n(263),n(292),n(280),n(429));n.n(a)},429:function(e,t){},430:function(e,t,n){"use strict";var a=n(265),i=n.n(a),s=n(66),r=n.n(s),o=n(67),l=n.n(o),c=n(68),u=n.n(c),m=n(69),f=n.n(m),p=n(70),h=n.n(p),v=n(270),d=n.n(v),E=n(0),k=n.n(E),y=n(293),C=n(281),b=this&&this.__rest||function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof d.a)for(var i=0,a=d()(e);i<a.length;i++)t.indexOf(a[i])<0&&(n[a[i]]=e[a[i]]);return n},x=function(e){function t(){return l()(this,t),f()(this,(t.__proto__||r()(t)).apply(this,arguments))}return h()(t,e),u()(t,[{key:"render",value:function(){var e=this.props,t=e.prefixCls,n=b(e,["prefixCls"]);return k.a.createElement(y.a,i()({prefixCls:t},n),k.a.createElement(C.a,{size:"lg",className:"rotate360"}))}}]),t}(E.PureComponent);t.a=x,x.defaultProps={prefixCls:"za-loading"}},431:function(e,t){}});