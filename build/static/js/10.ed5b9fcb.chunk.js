(this["webpackJsonplightence-admin"]=this["webpackJsonplightence-admin"]||[]).push([[10],{2338:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"c",(function(){return d})),a.d(t,"b",(function(){return b}));var n,c,i,s=a(11),r=a(9),j=a(80),l=a(2339),u=Object(r.default)(j.a)(n||(n=Object(s.a)(["\n  width: 100%;\n  margin-bottom: 1.25rem;\n  .ant-card-head-title {\n    font-size: 1rem;\n  }\n  .ant-card-body {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 1.25rem;\n    align-items: center;\n  }\n  .ant-card-body:before {\n    display: none;\n  }\n  .ant-card-body:after {\n    display: none;\n  }\n  &.ant-card-bordered {\n    border: 1px solid var(--border-color);\n  }\n"]))),d=r.default.div(c||(c=Object(s.a)(["\n  width: 30rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n"]))),b=Object(r.default)(l.a)(i||(i=Object(s.a)(["\n  width: 40rem;\n"])))},2339:function(e,t,a){"use strict";a.d(t,"b",(function(){return u})),a.d(t,"a",(function(){return d}));var n,c=a(16),i=a(2305),s=a(11),r=a(9),j=Object(r.default)(i.a)(n||(n=Object(s.a)([""]))),l=a(2),u=i.a.Panel,d=function(e){return Object(l.jsx)(j,Object(c.a)({},e))}},2348:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return c}));var n=new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/),c=/[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)?/gi},2357:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n,c=a(16),i=a(32),s=(a(0),a(321)),r=a(11),j=a(9).default.div(n||(n=Object(r.a)(["\n  transition: all 0.5s ease;\n  visibility: visible;\n  opacity: 1;\n\n  ",";\n"])),(function(e){return!e.isVisible&&"opacity: 0; visibility: hidden"})),l=a(2),u=["suffix","isVisibleSuffix"],d=function(e){var t=e.suffix,a=e.isVisibleSuffix,n=void 0===a||a,r=Object(i.a)(e,u);return Object(l.jsx)(s.a,Object(c.a)({suffix:Object(l.jsx)(j,{isVisible:n,children:t})},r))}},2362:function(e,t,a){"use strict";a.d(t,"a",(function(){return x}));var n=a(16),c=a(32),i=a(0),s=a(95),r=a(2357),j=a(2283),l=a(2337),u=a(2348),d=a(48),b=a(2),o=["href","target"],x=function(e){var t=e.href,a=e.target,x=void 0===a?"_blank":a,f=Object(c.a)(e,o),O=Object(j.a)().t,p=Object(i.useMemo)((function(){return new RegExp(u.b).test(t||" ")}),[t]);return Object(b.jsx)(r.a,Object(n.a)({suffix:Object(b.jsx)(s.a,{title:O("common.openInNewTab"),children:Object(b.jsx)(d.a,{size:"small",href:t,target:x,disabled:!p,type:"text",icon:Object(b.jsx)(l.a,{})})})},f))}},2386:function(e,t,a){"use strict";a.d(t,"a",(function(){return x}));var n=a(16),c=a(32),i=a(0),s=a(95),r=a(93),j=a(2283),l=a(465),u=a(2357),d=a(82),b=a(2),o=["valueToCopy"],x=function(e){var t=e.valueToCopy,a=Object(c.a)(e,o),x=Object(j.a)().t,f=Object(i.useCallback)((function(){return t&&navigator.clipboard.writeText(t).then((function(){d.a.info({message:x("common.copied")})}))}),[t,x]);return Object(b.jsx)(u.a,Object(n.a)({suffix:Object(b.jsx)(s.a,{title:x("common.copy"),children:Object(b.jsx)(r.a,{size:"small",disabled:!t,type:"text",icon:Object(b.jsx)(l.a,{}),onClick:f})})},a))}},2565:function(e,t,a){"use strict";a.r(t);var n=a(23),c=a(0),i=a(2283),s=a(2323),r=a(2318),j=a(241),l=a(2614),u=a(2615),d=a(464),b=a(2292),o=a(2578),x=a(95),f=a(321),O=a(81),p=a(166),h=a(349),m=a(331),v=a(2386),g=a(2362),y=a(2338),w=a(2);t.default=function(){var e=Object(i.a)().t,t=Object(c.useState)("@altence_team"),a=Object(n.a)(t,2),z=a[0],V=a[1],C=Object(c.useState)("https://altence.com"),T=Object(n.a)(C,2),A=T[0],B=T[1],R=Object(w.jsxs)(p.b,{defaultValue:"http://",children:[Object(w.jsx)(p.a,{value:"http://",children:"http://"}),Object(w.jsx)(p.a,{value:"https://",children:"https://"})]}),S=Object(w.jsxs)(p.b,{defaultValue:".com",children:[Object(w.jsx)(p.a,{value:".com",children:".com"}),Object(w.jsx)(p.a,{value:".jp",children:".jp"}),Object(w.jsx)(p.a,{value:".cn",children:".cn"}),Object(w.jsx)(p.a,{value:".org",children:".org"})]});return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(O.a,{children:e("common.input")}),Object(w.jsxs)(b.a,{children:[Object(w.jsx)(y.a,{title:e("inputs.basic"),children:Object(w.jsx)(y.c,{children:Object(w.jsx)(f.a,{placeholder:e("inputs.basic")})})}),Object(w.jsx)(y.a,{title:e("inputs.sizes"),children:Object(w.jsxs)(y.c,{children:[Object(w.jsx)(f.a,{size:"small",placeholder:e("inputs.small"),prefix:Object(w.jsx)(s.a,{})}),Object(w.jsx)(f.a,{placeholder:e("inputs.default"),prefix:Object(w.jsx)(s.a,{})}),Object(w.jsx)(f.a,{size:"large",placeholder:e("inputs.large"),prefix:Object(w.jsx)(s.a,{})})]})}),Object(w.jsx)(y.a,{title:e("inputs.prePost"),children:Object(w.jsxs)(y.c,{children:[Object(w.jsx)(f.a,{addonBefore:"http://",addonAfter:".com",defaultValue:"mysite"}),Object(w.jsx)(f.a,{addonBefore:R,addonAfter:S,defaultValue:"mysite"}),Object(w.jsx)(f.a,{addonAfter:Object(w.jsx)(r.a,{}),defaultValue:"mysite"}),Object(w.jsx)(f.a,{addonBefore:"http://",suffix:".com",defaultValue:"mysite"}),Object(w.jsx)(f.a,{addonBefore:Object(w.jsx)(o.a,{placeholder:"cascader"}),defaultValue:"mysite"})]})}),Object(w.jsx)(y.a,{title:e("inputs.prefixSuffix"),children:Object(w.jsxs)(y.c,{children:[Object(w.jsx)(f.a,{placeholder:e("inputs.enterName"),prefix:Object(w.jsx)(s.a,{}),suffix:Object(w.jsx)(x.a,{title:e("inputs.extra"),children:Object(w.jsx)(j.a,{})})}),Object(w.jsx)(f.a,{prefix:"\uffe5",suffix:"RMB"}),Object(w.jsx)(f.a,{prefix:"\uffe5",suffix:"RMB",disabled:!0})]})}),Object(w.jsx)(y.a,{title:e("inputs.search"),children:Object(w.jsxs)(y.c,{children:[Object(w.jsx)(h.a,{placeholder:e("inputs.searchText"),allowClear:!0}),Object(w.jsx)(h.a,{addonBefore:"https://",placeholder:e("inputs.searchText"),allowClear:!0}),Object(w.jsx)(h.a,{placeholder:e("inputs.searchText"),enterButton:"Search",size:"large",suffix:Object(w.jsx)(l.a,{})})]})}),Object(w.jsx)(y.a,{title:e("inputs.password"),children:Object(w.jsx)(y.c,{children:Object(w.jsx)(m.a,{placeholder:e("inputs.passwordText"),iconRender:function(e){return e?Object(w.jsx)(u.a,{}):Object(w.jsx)(d.a,{})}})})}),Object(w.jsx)(y.a,{title:e("inputs.textarea"),children:Object(w.jsx)(y.c,{children:Object(w.jsx)(f.b,{rows:4})})}),Object(w.jsx)(y.a,{title:e("inputs.func"),children:Object(w.jsxs)(y.c,{children:[Object(w.jsx)(v.a,{value:z,placeholder:e("inputs.clipboard"),valueToCopy:z,onChange:function(e){return V(e.target.value)}}),Object(w.jsx)(g.a,{value:A,placeholder:e("inputs.openURL"),href:A,onChange:function(e){return B(e.target.value)}})]})})]})]})}}}]);
//# sourceMappingURL=10.ed5b9fcb.chunk.js.map